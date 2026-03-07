import base64
import asyncio
import os
from pathlib import Path
from dotenv import load_dotenv
load_dotenv('/home/cbird/.env')

from openai import AsyncOpenAI
client = AsyncOpenAI()

OUT = Path("/home/cbird/side_projects/slide_themes/slide-layout-cookbook")
OUT.mkdir(parents=True, exist_ok=True)

STYLE = """
STYLE: Photographic realism with cinematic color grading. Rich, moody, atmospheric lighting.
Dark overall tonality so images work on dark slide backgrounds (#0a0a1a).
Think high-end commercial photography or National Geographic quality.
RULES: No text, no logos, no watermarks, no recognizable brands or landmarks.
"""

IMAGES = [
    {
        "filename": "hero-bg.png",
        "prompt": f"{STYLE}\n\nAerial photograph looking down at a dark ocean at night with bioluminescent plankton creating swirling patterns of electric blue light in the waves. Deep indigo and midnight blue water with scattered points of cyan bioluminescence. Ethereal and otherworldly. Should work as a full-screen presentation background with text overlaid on top.",
        "size": "1536x1024",
    },
    {
        "filename": "landscape-banner.png",
        "prompt": f"{STYLE}\n\nDramatic wide-angle photograph of a volcanic landscape at blue hour — dark lava fields in the foreground with cracks of glowing orange magma, steam rising against a deep twilight sky with the last traces of sunset. Strong horizontal composition with layers of depth. Cinematic widescreen feel.",
        "size": "1536x1024",
    },
    {
        "filename": "square-feature.png",
        "prompt": f"{STYLE}\n\nClose-up macro photograph of a mechanical watch movement — intricate brass gears, jewel bearings, and polished steel components. Dramatic side lighting creating strong shadows and highlighting the metallic textures. Tight square framing, shallow depth of field. Rich warm metallic tones against dark background.",
        "size": "1024x1024",
    },
    {
        "filename": "portrait-sidebar.png",
        "prompt": f"{STYLE}\n\nVertical photograph looking up through a narrow slot canyon with smooth sandstone walls in deep orange and rust tones. Light filtering down from above creating a bright glow at the top fading to shadow below. Strong vertical lines and dramatic natural lighting. Cool shadows contrasting with warm highlights.",
        "size": "1024x1536",
    },
    {
        "filename": "small-icon-photo.png",
        "prompt": f"{STYLE}\n\nMinimal still-life photograph of a single polished obsidian sphere on a dark reflective surface. One dramatic studio light from the upper left creating a bright highlight and long shadow. Clean, simple composition that reads well even at small display sizes. Very dark background, the sphere catches one bright specular highlight.",
        "size": "1024x1024",
    },
    {
        "filename": "textured-overlay.png",
        "prompt": f"{STYLE}\n\nClose-up photograph of dark hammered copper or bronze metal surface with subtle patina and texture. Even, uniform composition with no strong focal point — the texture itself is the subject. Very dark overall with subtle warm metallic sheen. Should work as a semi-transparent overlay texture on presentation slides.",
        "size": "1536x1024",
    },
]

SEMAPHORE = asyncio.Semaphore(4)
MAX_RETRIES = 3

async def generate_one(img: dict) -> str:
    path = OUT / img["filename"]
    # Delete existing placeholder
    if path.exists():
        path.unlink()

    for attempt in range(MAX_RETRIES):
        try:
            async with SEMAPHORE:
                result = await client.images.generate(
                    model="gpt-image-1",
                    prompt=img["prompt"],
                    quality="high",
                    n=1,
                    size=img.get("size", "1536x1024"),
                    output_format="png",
                )
            image_bytes = base64.b64decode(result.data[0].b64_json)
            path.write_bytes(image_bytes)
            size_kb = len(image_bytes) / 1024
            print(f"Generated: {path.name} ({size_kb:.0f} KB)")
            return str(path)
        except Exception as e:
            wait = 2 ** attempt
            print(f"Attempt {attempt+1} failed for {img['filename']}: {e}. Retrying in {wait}s...")
            await asyncio.sleep(wait)

    raise RuntimeError(f"Failed to generate {img['filename']} after {MAX_RETRIES} attempts")

async def main():
    tasks = [generate_one(img) for img in IMAGES]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    for i, r in enumerate(results):
        if isinstance(r, Exception):
            print(f"FAILED: {IMAGES[i]['filename']} — {r}")
        else:
            print(f"OK: {r}")

asyncio.run(main())
