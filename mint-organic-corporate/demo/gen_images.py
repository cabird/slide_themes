# /// script
# dependencies = ["openai", "python-dotenv"]
# requires-python = ">=3.11"
# ///
"""Generate images for the Mint Organic Corporate theme (SteerWise Trading Academy)."""

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
    "Clean, modern professional photography. Warm natural lighting with soft shadows. "
    "Organic, approachable feel with muted green/teal color undertones. "
    "No text, no logos, no overlays."
)

@dataclass(frozen=True)
class Asset:
    filename: str
    prompt: str
    size: str = "1024x1024"
    fmt: str = "jpeg"

ASSETS = [
    # Team portraits — 90x90 circles in the slide, so square crops work well
    Asset(
        filename="sarah-chen.jpg",
        prompt=(
            f"{STYLE} "
            "Professional headshot portrait of a Chinese-American woman in her mid-30s. "
            "She has shoulder-length dark hair, warm confident smile. Wearing a modern dark "
            "blazer over a sage green blouse. Soft neutral background with subtle green tones. "
            "Shot from shoulders up, slightly angled. Studio-quality corporate headshot."
        ),
    ),
    Asset(
        filename="marcus-obi.jpg",
        prompt=(
            f"{STYLE} "
            "Professional headshot portrait of a Nigerian-British man in his late 30s. "
            "Short cropped hair, neatly trimmed beard, warm engaging expression. Wearing "
            "a charcoal suit with an open-collar white shirt. Soft neutral background with "
            "subtle teal tones. Shot from shoulders up. Studio-quality corporate headshot."
        ),
    ),
    Asset(
        filename="elena-torres.jpg",
        prompt=(
            f"{STYLE} "
            "Professional headshot portrait of a Latina woman in her early 30s. "
            "Dark hair pulled back, glasses with thin frames, thoughtful confident expression. "
            "Wearing a teal cardigan over a white top. Soft neutral background with green "
            "undertones. Shot from shoulders up. Studio-quality corporate headshot."
        ),
    ),
    # Case study photo — larger, shows a person in a trading/work context
    Asset(
        filename="james-rivera.jpg",
        prompt=(
            f"{STYLE} "
            "Environmental portrait of a Latino man in his late 20s sitting at a modern desk "
            "with multiple monitors showing financial charts and data. He's turned slightly toward "
            "the camera with a confident, relaxed smile. Wearing a casual button-down shirt with "
            "sleeves rolled up. Modern minimalist home office with plants and natural light from "
            "a large window. Warm, aspirational, approachable mood."
        ),
        size="1024x1024",
    ),
]


async def generate_one(asset: Asset) -> None:
    out_path = OUT / asset.filename
    if out_path.exists():
        print(f"  SKIP (exists): {asset.filename}")
        return
    print(f"  Generating: {asset.filename} ...", end=" ", flush=True)
    img = await client.images.generate(
        model="gpt-image-1",
        prompt=asset.prompt,
        n=1,
        size=asset.size,
        quality="high",
        output_format=asset.fmt,
        output_compression=85,
    )
    out_path.write_bytes(base64.b64decode(img.data[0].b64_json))
    print("done")


async def main():
    await asyncio.gather(*(generate_one(a) for a in ASSETS))
    print(f"\nAll {len(ASSETS)} assets in {OUT.resolve()}")

if __name__ == "__main__":
    asyncio.run(main())
