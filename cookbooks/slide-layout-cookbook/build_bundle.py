#!/usr/bin/env python3
"""Bundle a SlideKit presentation into a single self-contained HTML file.

Usage: python3 build_bundle.py <demo_directory> [output_name]

Takes index.html exactly as-is and inlines:
  - slidekit.bundle.min.js (base64-encoded dynamic import)
  - slides JS file (detected from the import statement in index.html)
  - referenced images (base64 data URIs)

No hardcoded HTML templates — the bundle preserves whatever is in index.html.
"""

import base64
import re
import sys
from pathlib import Path


def build(demo_dir: str, output_name: str | None = None):
    demo = Path(demo_dir).resolve()

    index_html = (demo / "index.html").read_text()
    slidekit_js = (demo / "slidekit.bundle.min.js").read_text()

    # --- Detect which slides file index.html imports ---
    slides_import_match = re.search(
        r"""import\s*\{[^}]*\}\s*from\s*['"]\.\/([^'"]+)['"]""",
        index_html,
    )
    if slides_import_match:
        slides_name = slides_import_match.group(1)
    else:
        # Fallback: try common names
        slides_name = "data_slides.js" if (demo / "data_slides.js").exists() else "slides.js"
    print(f"  Slides file: {slides_name}")

    slides_js = (demo / slides_name).read_text()

    # --- Inline images as base64 data URIs ---
    img_refs = set(re.findall(r"'(\./[^']+\.(?:png|jpe?g|gif|webp|svg))'", slides_js))
    inlined = 0
    for ref in sorted(img_refs):
        filepath = demo / ref.lstrip("./")
        if not filepath.exists():
            print(f"  WARNING: referenced image not found: {ref} -> {filepath}")
            continue
        suffix = filepath.suffix.lower()
        mime_map = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
                    ".gif": "image/gif", ".webp": "image/webp", ".svg": "image/svg+xml"}
        mime = mime_map.get(suffix, "application/octet-stream")
        b64 = base64.b64encode(filepath.read_bytes()).decode()
        data_uri = f"data:{mime};base64,{b64}"
        slides_js = slides_js.replace(f"'{ref}'", f"'{data_uri}'")
        inlined += 1
    print(f"  Inlined {inlined} images")

    # --- Extract import names from slides JS and strip its import statement ---
    sk_import_match = re.search(
        r"import\s*\{([^}]+)\}\s*from\s*'[^']*slidekit[^']*';?\s*\n?",
        slides_js,
    )
    imported_names = ""
    if sk_import_match:
        imported_names = sk_import_match.group(1).strip()
        slides_js = slides_js[: sk_import_match.start()] + slides_js[sk_import_match.end() :]

    # --- Strip export keyword from run() ---
    slides_js = re.sub(r"export\s+(async\s+)?function\s+run", r"\1function run", slides_js)

    # --- Base64-encode slidekit bundle ---
    slidekit_b64 = base64.b64encode(slidekit_js.encode("utf-8")).decode("ascii")

    # --- Build the inlined script preamble ---
    # This replaces the import line in the <script type="module"> block
    preamble_lines = [
        "// --- Load SlideKit from inlined base64 source ---",
        f"const _skSrc = atob('{slidekit_b64}');",
        "const _skBlob = new Blob([_skSrc], { type: 'text/javascript' });",
        "const _skUrl = URL.createObjectURL(_skBlob);",
        "const _sk = await import(_skUrl);",
        "URL.revokeObjectURL(_skUrl);",
        "const { " + imported_names + " } = _sk;",
        "",
        "// --- Slides (inlined) ---",
        slides_js,
    ]
    preamble = "\n    ".join(preamble_lines)

    # --- Replace the module script block in index.html ---
    # Match the entire <script type="module">...</script> block
    module_script_re = re.compile(
        r'<script\s+type="module">\s*.*?</script>',
        re.DOTALL,
    )
    match = module_script_re.search(index_html)
    if not match:
        print("  ERROR: No <script type=\"module\"> block found in index.html")
        sys.exit(1)

    # Extract everything after the import line and before </script> from the
    # original block — this includes run(), Reveal.initialize(), console.log(), etc.
    original_block = match.group(0)
    # Strip the opening tag
    inner = re.sub(r'^<script\s+type="module">\s*', '', original_block)
    # Strip the closing tag
    inner = re.sub(r'\s*</script>\s*$', '', inner)
    # Remove the import { run } from './slides.js' line
    inner = re.sub(
        r"""import\s*\{[^}]*\}\s*from\s*['"]\.\/[^'"]+['"];?\s*\n?""",
        '',
        inner,
    )

    # Combine: inlined script preamble + original logic (run, Reveal.init, etc.)
    combined_script = "<script type=\"module\">\n    " + preamble + "\n\n    " + inner.strip() + "\n  </script>"

    bundled = index_html[:match.start()] + combined_script + index_html[match.end():]

    # --- Determine output filename ---
    if not output_name:
        # Derive from slides filename: data_slides.js -> data_cookbook.html, slides.js -> presentation_bundle.html
        stem = Path(slides_name).stem
        if stem.endswith("_slides"):
            output_name = stem.replace("_slides", "_cookbook") + ".html"
        else:
            output_name = "presentation_bundle.html"

    output = demo / output_name
    output.write_text(bundled, encoding="utf-8")
    size_mb = output.stat().st_size / (1024 * 1024)
    print(f"  Bundled: {output.name} ({size_mb:.1f} MB)")
    return output


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 build_bundle.py <demo_directory> [output_name]")
        sys.exit(1)
    build(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
