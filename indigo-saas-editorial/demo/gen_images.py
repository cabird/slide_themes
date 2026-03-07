# /// script
# dependencies = ["openai", "python-dotenv"]
# requires-python = ">=3.11"
# ///
"""Generate UI mockup images for the indigo-saas-editorial theme demo."""

import asyncio
import base64
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv(Path.home() / ".env")
client = AsyncOpenAI()
OUT = Path(__file__).parent / "images"
OUT.mkdir(exist_ok=True)

STYLE = (
    "Professional SaaS product UI screenshot. Clean, modern interface design "
    "with white/light gray background, subtle borders, blue accent color (#3B4FE8). "
    "Realistic software interface — not a wireframe, not a mockup, but a polished "
    "product screenshot. Sans-serif typography (like Inter or DM Sans). "
    "No watermarks, no labels saying 'mockup'."
)


@dataclass(frozen=True)
class Asset:
    filename: str
    prompt: str
    size: str = "1536x1024"


ASSETS = [
    # Slide 1: Hero — Code Review Dashboard (780x480, landscape)
    Asset(
        filename="code-review-dashboard.jpg",
        prompt=(
            f"{STYLE} "
            "A code review dashboard showing a list of open pull requests with status "
            "indicators (approved, changes requested, pending). Left sidebar with repository "
            "navigation. Main area shows PR titles, authors with avatar circles, branch names, "
            "and colored status badges. Top bar with search and filter controls. "
            "Subtle code diff preview in the background. Professional developer tooling aesthetic."
        ),
    ),
    # Slide 1: Hero — PR Analysis View (680x420, landscape, layered on top)
    Asset(
        filename="pr-analysis-view.jpg",
        prompt=(
            f"{STYLE} "
            "A detailed pull request analysis view showing AI-generated code review comments. "
            "Split pane: left side shows a file diff with green/red line highlights and inline "
            "AI comments with blue accent badges. Right side shows an analysis summary panel "
            "with severity indicators (critical, warning, info), a security scan result, "
            "and a code quality score with a circular progress indicator. Clean card-based layout."
        ),
    ),
    # Slide 2: Features — Code Review UI (right column, ~830x660, landscape)
    Asset(
        filename="code-review-ui.jpg",
        prompt=(
            f"{STYLE} "
            "A full code review interface showing a GitHub-style pull request page. "
            "Header with PR title and merge status. Tabbed navigation (Conversation, Commits, "
            "Files changed). Main content shows a code diff with syntax-highlighted code in a "
            "monospace font, green additions and red deletions. An AI review comment box "
            "with a blue robot icon suggesting a code improvement. File tree sidebar on left. "
            "Clean, information-dense but well-organized layout."
        ),
    ),
    # Slide 6: Growth — Growth Metrics chart (690x220, ultra-wide landscape)
    # Generate at 1536x1024 — content centered so top/bottom can be cropped
    Asset(
        filename="growth-metrics.jpg",
        prompt=(
            f"{STYLE} "
            "A wide analytics dashboard strip showing engineering productivity metrics. "
            "Three side-by-side chart cards: (1) a line chart showing 'Time to Merge' trending "
            "downward over 6 months with a -73% annotation, (2) a bar chart showing 'Reviews per Day' "
            "increasing, (3) a donut chart showing 'Code Quality Score' at 94%. "
            "Each card has a small title, the chart, and a trend indicator. "
            "Concentrate all content in the center third vertically — leave generous "
            "whitespace at top and bottom so the image can be cropped to a wide strip."
        ),
    ),
]


async def generate_one(asset: Asset) -> None:
    out_path = OUT / asset.filename
    if out_path.exists():
        print(f"  SKIP (exists): {asset.filename}")
        return
    print(f"  Generating: {asset.filename} ...", flush=True)
    img = await client.images.generate(
        model="gpt-image-1.5",
        prompt=asset.prompt,
        n=1,
        size=asset.size,
        output_format="jpeg",
        output_compression=85,
    )
    out_path.write_bytes(base64.b64decode(img.data[0].b64_json))
    print(f"  Done: {asset.filename}")


async def main():
    await asyncio.gather(*(generate_one(a) for a in ASSETS))
    total = sum(f.stat().st_size for f in OUT.glob("*.jpg"))
    print(f"\nWrote {len(ASSETS)} assets to {OUT} ({total / 1024:.0f}K total)")


asyncio.run(main())
