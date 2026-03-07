# /// script
# dependencies = ["openai", "python-dotenv"]
# requires-python = ">=3.11"
# ///
"""Generate images for the clean-dual-tone theme demo."""

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
    "Professional architectural photography. Clean, modern composition with "
    "natural color grading, slightly cool-toned. No heavy filters, no duotone "
    "treatments. Sharp focus, natural lighting. No text, no logos, no watermarks."
)


@dataclass(frozen=True)
class Asset:
    filename: str
    prompt: str
    size: str = "1024x1024"


ASSETS = [
    # Testimonial portrait (already exists, skip if present)
    Asset(
        filename="architect-portrait.jpg",
        size="1024x1536",
        prompt=(
            f"{STYLE} "
            "Professional portrait of a woman architect in her early 40s, standing in a modern "
            "building with floor-to-ceiling windows and exposed concrete. She wears a dark blazer "
            "over a white top. Confident, thoughtful expression. Cool natural light from the left. "
            "Background shows clean architectural lines. Full-length portrait, environmental setting."
        ),
    ),
    # Photo-feature: sustainable building exterior — portrait panel (~672x1080)
    Asset(
        filename="sustainable-pavilion.jpg",
        size="1024x1536",
        prompt=(
            f"{STYLE} "
            "A modern sustainable pavilion building with extensive vertical gardens "
            "and living walls covering the facade. Clean geometric glass and timber "
            "structure. Lush green plants growing on terraced levels. Shot from a "
            "slight low angle showing the full height. Overcast sky providing even, "
            "soft lighting. The building blends nature and architecture seamlessly. "
            "Vertical composition with the building filling the frame."
        ),
    ),
    # Team member headshots for team slide
    Asset(
        filename="team-member-1.jpg",
        prompt=(
            f"{STYLE} "
            "Professional headshot of a man in his 30s with short brown hair and "
            "light stubble, wearing a navy crew-neck sweater. Warm, approachable "
            "expression. Slightly desaturated, cool-toned color grading. "
            "Clean neutral background."
        ),
    ),
    Asset(
        filename="team-member-2.jpg",
        prompt=(
            f"{STYLE} "
            "Professional headshot of a woman in her 30s with shoulder-length "
            "auburn hair, wearing a white blouse. Thoughtful, confident expression. "
            "Slightly desaturated, cool-toned color grading. Clean neutral background."
        ),
    ),
    Asset(
        filename="team-member-3.jpg",
        prompt=(
            f"{STYLE} "
            "Professional headshot of a man in his 50s with gray hair and glasses, "
            "wearing a dark olive jacket. Distinguished, experienced expression. "
            "Slightly desaturated, cool-toned color grading. Clean neutral background."
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
    print(f"\nWrote assets to {OUT} ({total / 1024:.0f}K total)")


asyncio.run(main())
