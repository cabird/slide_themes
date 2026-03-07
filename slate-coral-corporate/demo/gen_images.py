# /// script
# dependencies = ["openai", "python-dotenv"]
# requires-python = ">=3.11"
# ///
"""Generate all images for the slate-coral-corporate theme demo deck."""

import asyncio
import base64
from pathlib import Path

from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv(Path.home() / ".env")
client = AsyncOpenAI()

OUT = Path(__file__).parent / "images"
OUT.mkdir(parents=True, exist_ok=True)

STYLE_CONTRACT = """
STYLE: Professional editorial photography with a sophisticated, polished feel.
Clean compositions with strong subject focus. Warm ambient lighting.
COLOR PALETTE when not B&W: warm earth tones, deep browns (#3E2723), cream (#F5F0E8),
rich amber (#D4A04A), with dark navy (#152244) and coral-red (#F5365C) as accent awareness.
RULES: No text, no logos, no watermarks, no decorative borders, no words of any kind.
Photorealistic, high quality, presentation-ready.
"""

BW_ADDENDUM = """
TREATMENT: Black and white photography. High contrast, rich tonal range,
dramatic shadows. Classic editorial feel. No color whatsoever.
"""

IMAGES = [
    {
        "filename": "hero-bg.jpg",
        "prompt": f"""{STYLE_CONTRACT}
A wide-angle shot of an artisan chocolate workshop interior. Warm golden ambient
light streaming through tall windows. Marble countertops with chocolate molds and
tools. Slightly hazy, dreamy atmosphere. The image should feel washed out and
high-key — suitable for overlaying white text. Landscape orientation, clean
composition with the workspace receding into soft-focus background. No people.""",
        "size": "1536x1024",
    },
    {
        "filename": "toc-panel.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
Close-up of raw cocoa beans scattered on a rustic wooden surface. Some beans are
cracked open showing the interior. Dramatic side lighting creating deep shadows.
Portrait orientation, the beans fill most of the frame. Shallow depth of field
with some beans sharp and others softly blurred. No people, no text.""",
        "size": "1024x1536",
    },
    {
        "filename": "segment-artisan.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
Artisan chocolate bars being hand-crafted. A pair of hands carefully breaking a
large dark chocolate bar, revealing the smooth snap. Close-up composition, the
chocolate fills most of the frame. Rich textures visible in the chocolate surface.
Studio-quality lighting from above. Square format.""",
        "size": "1024x1024",
    },
    {
        "filename": "segment-single-origin.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
A cocoa plantation landscape with mature cacao trees bearing pods. The trees form
a canopy with dappled light filtering through. A pathway leads between the trees
into the distance. Atmospheric, slightly misty morning light. Wide enough to
show the scale of the plantation. Square format. No people.""",
        "size": "1024x1024",
    },
    {
        "filename": "segment-premium.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
Elegant luxury chocolate display — several beautifully crafted chocolate bonbons
arranged on a dark slate surface. Each piece has a different texture pattern
(smooth, ridged, dusted). Overhead angle, symmetrical arrangement. Dramatic
studio lighting with deep blacks. Square format. No text, no packaging, no logos.""",
        "size": "1024x1024",
    },
    {
        "filename": "highlights-photo.jpg",
        "prompt": f"""{STYLE_CONTRACT}
Ripe golden-orange cocoa pods hanging from a cacao tree trunk, photographed in
natural daylight. Lush green leaves in the background. The pods have a rich,
warm golden color that pops against the green. Shallow depth of field focusing
on two or three pods. Square format. Vibrant but not oversaturated. No people.""",
        "size": "1024x1024",
    },
    {
        "filename": "supply-photo.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
A chocolate maker tempering chocolate — molten chocolate being poured onto a
marble slab from a ladle, creating a smooth flowing ribbon. The chocolate is
glossy and viscous. Close-up, portrait orientation, the pour action is captured
mid-motion with some motion blur on the flowing chocolate. Professional kitchen
setting visible in soft focus behind. No face visible, just hands and arms.""",
        "size": "1024x1536",
    },
    {
        "filename": "pref-sustainable.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
A small sustainable cocoa farm — a person's hands gently picking a ripe cocoa
pod from a tree. Focus on the hands and the pod, the tree trunk and leaves
frame the scene. Warm natural light filtering through the canopy. Editorial
feel, storytelling composition. Square format. Only hands visible, no face.""",
        "size": "1024x1024",
    },
    {
        "filename": "pref-flavor.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
An elegant chocolate tasting setup. Several small squares of different chocolate
varieties (dark, milk, white) arranged in a line on a clean wooden board. Small
bowls of cocoa nibs and spices nearby. Overhead angle, clean minimal composition.
Studio lighting with soft shadows. Square format. No text, no labels.""",
        "size": "1024x1024",
    },
    {
        "filename": "pref-packaging.jpg",
        "prompt": f"""{STYLE_CONTRACT}{BW_ADDENDUM}
A craftsperson's hands wrapping a chocolate bar in brown kraft paper with twine.
Close-up of the wrapping process — the paper partially folded, the twine being
tied. Rustic wooden work surface. Soft directional light from the side. Square
format. No brand names, no printed text visible on the paper.""",
        "size": "1024x1024",
    },
    {
        "filename": "qa-bg.jpg",
        "prompt": f"""{STYLE_CONTRACT}
A moody still life of fine chocolate and cocoa. Dark chocolate pieces, cocoa
powder in a small bowl, and scattered cocoa beans on a dark wooden surface.
Very low key lighting — dramatic shadows, pools of warm light illuminating
select elements. The overall mood is contemplative and luxurious. Dark enough
to overlay white text easily. Landscape orientation. No people, no text.""",
        "size": "1536x1024",
    },
]

SEMAPHORE = asyncio.Semaphore(4)
MAX_RETRIES = 3


async def generate_one(img: dict) -> str:
    path = OUT / img["filename"]
    if path.exists():
        print(f"Skipping (exists): {path.name}")
        return str(path)

    for attempt in range(MAX_RETRIES):
        try:
            async with SEMAPHORE:
                result = await client.images.generate(
                    model="gpt-image-1.5",
                    prompt=img["prompt"],
                    quality="high",
                    n=1,
                    size=img.get("size", "1536x1024"),
                    output_format="jpeg",
                    output_compression=85,
                )
            path.write_bytes(base64.b64decode(result.data[0].b64_json))
            print(f"Generated: {path.name}")
            return str(path)
        except Exception as e:
            wait = 2**attempt
            print(
                f"Attempt {attempt + 1} failed for {img['filename']}: {e}. Retrying in {wait}s..."
            )
            await asyncio.sleep(wait)

    raise RuntimeError(f"Failed to generate {img['filename']} after {MAX_RETRIES} attempts")


async def main():
    print(f"Generating {len(IMAGES)} images...")
    tasks = [generate_one(img) for img in IMAGES]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    for i, r in enumerate(results):
        if isinstance(r, Exception):
            print(f"FAILED: {IMAGES[i]['filename']} — {r}")
        else:
            print(f"OK: {Path(r).name}")
    print("Done!")


asyncio.run(main())
