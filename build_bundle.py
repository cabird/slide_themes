#!/usr/bin/env python3
"""Bundle a SlideKit presentation into a single self-contained HTML file.

Usage: python3 build_bundle.py <theme_directory_or_demo_directory>

Looks for required files using the standard theme layout:
  - <theme>/demo/index.html
  - <theme>/slides.js              (falls back to <theme>/demo/slides.js)
  - <repo_root>/slidekit.bundle.min.js  (falls back to <theme>/demo/ then <theme>/)

Image paths in slides.js are resolved relative to demo/.

Writes: <theme>/demo/presentation_bundle.html (fully self-contained, opens as file://)
"""

import base64
import re
import sys
from pathlib import Path


def _find_file(name: str, *search_dirs: Path) -> Path | None:
    """Return the first existing match for `name` across search directories."""
    for d in search_dirs:
        candidate = d / name
        if candidate.is_file():
            return candidate
    return None


def build(target: str):
    target = Path(target).resolve()

    # Accept either the theme dir or its demo/ subdir
    if target.name == "demo" and target.is_dir():
        demo = target
        theme = target.parent
    elif (target / "demo").is_dir():
        theme = target
        demo = target / "demo"
    else:
        print(f"ERROR: cannot find demo/ directory from: {target}", file=sys.stderr)
        sys.exit(1)

    # Walk up to find the repo root (directory containing THEMES.md or slidekit.bundle.min.js)
    repo_root = theme.parent
    for ancestor in [theme.parent, theme.parent.parent]:
        if (ancestor / "slidekit.bundle.min.js").is_file():
            repo_root = ancestor
            break

    # --- Locate required files ---
    index_path = demo / "index.html"
    if not index_path.is_file():
        print(f"ERROR: missing {demo / 'index.html'}", file=sys.stderr)
        sys.exit(1)

    slides_path = _find_file("slides.js", theme, demo)
    if not slides_path:
        print(f"ERROR: slides.js not found in {theme} or {demo}", file=sys.stderr)
        sys.exit(1)

    slidekit_path = _find_file("slidekit.bundle.min.js", repo_root, demo, theme)
    if not slidekit_path:
        print(f"ERROR: slidekit.bundle.min.js not found in {repo_root}, {demo}, or {theme}", file=sys.stderr)
        sys.exit(1)

    print(f"  index.html:            {index_path}")
    print(f"  slides.js:             {slides_path}")
    print(f"  slidekit.bundle.min.js: {slidekit_path}")

    index_html = index_path.read_text(encoding="utf-8")
    slidekit_js = slidekit_path.read_text(encoding="utf-8")
    slides_js = slides_path.read_text(encoding="utf-8")

    # --- Inline images as base64 data URIs ---
    # Find every ./something.png or ./something.jpg reference in slides.js
    # Matches both single- and double-quoted paths
    img_matches = re.findall(r"""(['"])(\./[^'"]+\.(?:png|jpe?g))\1""", slides_js)
    img_refs = {(quote, path) for quote, path in img_matches}
    inlined = 0
    # Resolve image paths relative to where slides.js lives,
    # then fall back to demo/ (images may be in demo/images/)
    slides_dir = slides_path.parent
    for quote, ref in sorted(img_refs, key=lambda x: x[1]):
        rel = ref.removeprefix("./")
        filepath = _find_file(rel, slides_dir, demo)
        if filepath is None:
            # Try demo/images/ as well
            filepath = _find_file(rel.removeprefix("images/"), demo / "images") if "images/" not in rel else None
        if filepath is None:
            print(f"  WARNING: referenced image not found: {ref}")
            continue
        suffix = filepath.suffix.lower()
        mime = "image/png" if suffix == ".png" else "image/jpeg"
        b64 = base64.b64encode(filepath.read_bytes()).decode()
        data_uri = f"data:{mime};base64,{b64}"
        slides_js = slides_js.replace(f"{quote}{ref}{quote}", f"{quote}{data_uri}{quote}")
        inlined += 1
    print(f"  Inlined {inlined} images")

    # --- Extract import names and strip import statement ---
    import_match = re.search(
        r"""import\s*\{([^}]+)\}\s*from\s*['"][^'"]*slidekit[^'"]*['"]\s*;?\s*\n?""",
        slides_js,
    )
    if not import_match:
        print("  WARNING: no SlideKit import found in slides.js; bundle may fail at runtime")
    imported_names = ""
    if import_match:
        imported_names = import_match.group(1).strip()
        slides_js = slides_js[: import_match.start()] + slides_js[import_match.end() :]

    # --- Strip export keyword from run() ---
    slides_js = re.sub(r"export\s+(async\s+)?function\s+run", r"\1function run", slides_js)

    # --- Base64-encode slidekit bundle ---
    slidekit_b64 = base64.b64encode(slidekit_js.encode("utf-8")).decode("ascii")

    # --- Extract <head> content ---
    head_match = re.search(r"<head\b[^>]*>(.*?)</head>", index_html, re.DOTALL | re.IGNORECASE)
    if not head_match:
        print("  WARNING: could not extract <head> from index.html; output will omit head contents")
    head_content = head_match.group(1).strip() if head_match else ""

    # --- Build bundled HTML ---
    bundled = f"""<!DOCTYPE html>
<html lang="en">
<head>
{head_content}
</head>
<body>
  <div class="reveal"><div class="slides"></div></div>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js"></script>
  <script type="module">
    // --- Load SlideKit from inlined base64 source ---
    const _skSrc = atob('{slidekit_b64}');
    const _skBlob = new Blob([_skSrc], {{ type: 'text/javascript' }});
    const _skUrl = URL.createObjectURL(_skBlob);
    const _sk = await import(_skUrl);
    URL.revokeObjectURL(_skUrl);
    const {{ {imported_names} }} = _sk;

    // --- Slides (inlined) ---
    {slides_js}

    // --- Run ---
    await run();
    Reveal.initialize({{
      width: 1920, height: 1080, center: false,
      hash: true, slideNumber: true, transition: 'none',
      controls: false, progress: false, margin: 0,
    }});
    console.log('SlideKit loaded (bundled). Scene model at window.sk');
  </script>
</body>
</html>"""

    output = demo / "presentation_bundle.html"
    output.write_text(bundled, encoding="utf-8")
    size_mb = output.stat().st_size / (1024 * 1024)
    print(f"  Bundled: {output.name} ({size_mb:.1f} MB)")
    return output


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 build_bundle.py <theme_directory>")
        sys.exit(1)
    build(sys.argv[1])
