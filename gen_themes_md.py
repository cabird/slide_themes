# /// script
# requires-python = ">=3.11"
# ///
"""Generate THEMES.md and the Themes table in README.md from each theme's README.md.

Each theme README follows:
  Line 1: # Theme Title
  Line 3: **Vibe1, Vibe2, Vibe3**
  Line 5: Description paragraph (includes "Best for ..." at the end)

Static content in THEMES.md and README.md is preserved; only the
theme-derived sections are regenerated.
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent
THEMES_MD = ROOT / "THEMES.md"
README_MD = ROOT / "README.md"

# Directories to skip (not themes)
SKIP = {"cookbooks", ".git", ".playwright-mcp", "__pycache__", "node_modules"}


def parse_readme(readme: Path) -> dict | None:
    """Extract title, vibe, description, and 'best for' from a theme README."""
    lines = readme.read_text().splitlines()
    if len(lines) < 5:
        return None

    title = lines[0].lstrip("# ").strip()
    vibe = lines[2].strip().strip("*").strip()
    description = lines[4].strip()

    # Extract "Best for ..." from the description
    best_for = ""
    m = re.search(r"Best for (.+?)\.?\s*$", description)
    if m:
        best_for = m.group(1).strip().rstrip(".")
        # Capitalize first letter
        best_for = best_for[0].upper() + best_for[1:] if best_for else best_for

    return {
        "dir": readme.parent.name,
        "title": title,
        "vibe": vibe,
        "description": description,
        "best_for": best_for,
    }


def get_slide_previews(theme_dir: Path) -> list[str]:
    """Return ordered list of slide preview image paths relative to repo root.

    Parses slides.js to get slide IDs in presentation order, then matches
    each ID to a file in slide_previews/. Handles two naming conventions:
      - {id}.jpg        (most themes)
      - slide_NN_{id}.png  (bold-pitch-modern style)
    """
    slides_js = theme_dir / "slides.js"
    previews_dir = theme_dir / "slide_previews"
    if not slides_js.exists() or not previews_dir.exists():
        return []

    # Parse slide IDs in order from slides.js
    text = slides_js.read_text()
    slide_ids = re.findall(r"""\bid:\s*['"]([^'"]+)['"]""", text)
    if not slide_ids:
        return []

    # Build a lookup: slide_id -> relative path from repo root
    preview_files = {}
    for f in previews_dir.iterdir():
        if f.suffix.lower() not in (".jpg", ".jpeg", ".png"):
            continue
        stem = f.stem
        # Handle "slide_NN_{id}" naming convention
        m = re.match(r"slide_\d+_(.*)", stem)
        key = m.group(1) if m else stem
        preview_files[key] = f"{theme_dir.name}/slide_previews/{f.name}"

    # Return previews in slide order
    ordered = []
    for sid in slide_ids:
        if sid in preview_files:
            ordered.append(preview_files[sid])
    return ordered


def slide_grid_markdown(previews: list[str]) -> str:
    """Generate a 2-column Markdown table of slide preview images."""
    if not previews:
        return ""

    rows = []
    for i in range(0, len(previews), 2):
        left = f"![slide]({previews[i]})"
        right = f"![slide]({previews[i + 1]})" if i + 1 < len(previews) else ""
        rows.append(f"| {left} | {right} |")

    return "| | |\n|:---:|:---:|\n" + "\n".join(rows) + "\n"


def discover_themes() -> list[dict]:
    """Find all theme directories with README.md files."""
    themes = []
    for d in sorted(ROOT.iterdir()):
        if not d.is_dir() or d.name in SKIP or d.name.startswith("."):
            continue
        readme = d / "README.md"
        if not readme.exists():
            continue
        info = parse_readme(readme)
        if info:
            info["previews"] = get_slide_previews(d)
            themes.append(info)
    return themes


def read_between_markers(path: Path, start: str, end: str) -> tuple[str, str]:
    """Split file into (before+start, end+after). Content between is discarded."""
    text = path.read_text()
    si = text.find(start)
    if si == -1:
        return text, ""
    before = text[: si + len(start)]

    ei = text.find(end, si + len(start))
    if ei == -1:
        return before, ""
    after = text[ei:]
    return before, after


def generate_themes_md(themes: list[dict]):
    """Regenerate THEMES.md from theme data."""
    before, _ = read_between_markers(THEMES_MD, "\n## Themes\n", "")

    parts = [before]
    for t in themes:
        grid = slide_grid_markdown(t["previews"])
        parts.append(f"""
### {t['title']}

**Vibe:** {t['vibe']}
**Directory:** `{t['dir']}/`

{t['description']}

{grid}
---
""")

    THEMES_MD.write_text("".join(parts))
    print(f"  THEMES.md: {len(themes)} themes")


def generate_readme_table(themes: list[dict]):
    """Regenerate the Themes table in README.md."""
    start_marker = "## Themes\n"
    end_marker = "\nSee [THEMES.md]"

    before, after = read_between_markers(README_MD, start_marker, end_marker)

    # Build table
    lines = [
        "",
        f"| Theme | Vibe | Best for |",
        f"|-------|------|----------|",
    ]
    for t in themes:
        lines.append(f"| **{t['dir']}** | {t['vibe']} | {t['best_for']} |")
    lines.append("")

    # Update count in the header line
    count = len(themes)
    before = re.sub(
        r"A collection of \d+ presentation themes",
        f"A collection of {count} presentation themes",
        before,
    )

    README_MD.write_text(before + "\n".join(lines) + "\n" + after)
    print(f"  README.md: {len(themes)} themes, count updated to {count}")


def main():
    themes = discover_themes()
    generate_themes_md(themes)
    generate_readme_table(themes)
    print(f"Done — {len(themes)} themes total")


if __name__ == "__main__":
    main()
