# /// script
# dependencies = ["openai", "python-dotenv"]
# requires-python = ">=3.11"
# ///
"""Generate images for the Teal Editorial Luxe theme (The Art of Typography)."""

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
    "Moody editorial photography with rich teal and warm amber tones. Cinematic "
    "lighting, shallow depth of field, luxurious refined aesthetic. "
    "No text, no logos, no overlays, no watermarks."
)

@dataclass(frozen=True)
class Asset:
    filename: str
    prompt: str
    size: str = "1024x1536"
    fmt: str = "jpeg"

ASSETS = [
    # === Full-panel photos (960x1080 in slide ≈ square, use 1024x1024) ===

    Asset(
        filename="hero-typography.jpg",
        prompt=(
            f"{STYLE} "
            "Close-up of vintage metal movable type letters arranged in a wooden "
            "compositor's tray. Warm amber side lighting highlights the raised letterforms. "
            "Shallow depth of field with some letters in sharp focus and others softly blurred. "
            "Rich teal-green shadows in the background. The mood is reverent and artisanal."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="origins-manuscript.jpg",
        prompt=(
            f"{STYLE} "
            "A Gutenberg-era wooden printing press in a dimly lit workshop. Warm candlelight "
            "illuminates aged wooden beams and scattered parchment pages. An ink-stained roller "
            "rests against the press frame. Deep teal shadows create dramatic contrast. "
            "Historical, atmospheric, reverent mood."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="ancient-scripts.jpg",
        prompt=(
            f"{STYLE} "
            "Close-up of ancient carved stone inscription with early alphabet characters, "
            "resembling Phoenician or early Greek lettering. Warm golden sunlight rakes across "
            "the weathered stone surface, creating deep shadows in the carved letters. "
            "Museum-quality macro photography. Teal-green marble veins in the stone."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="type-specimens.jpg",
        prompt=(
            f"{STYLE} "
            "Elegant flat lay of vintage typography specimen sheets and font catalogs spread "
            "across a dark teal desk surface. Various serif and sans-serif typeface samples "
            "visible. A brass magnifying glass and a calligraphy pen rest on the papers. "
            "Overhead shot, warm window light from the left side."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="type-drawers.jpg",
        prompt=(
            f"{STYLE} "
            "Rows of wooden typesetter drawers filled with small metal letterpress type, "
            "seen from above at a slight angle. Each compartment holds different characters. "
            "Warm amber light from one side, deep teal shadows. The organized grid pattern "
            "of the type case creates a satisfying visual rhythm. Detail shot."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="studio-workspace.jpg",
        prompt=(
            f"{STYLE} "
            "Modern typography design studio with a large monitor showing font design software. "
            "Clean minimal desk with sketches of letterforms, a Wacom tablet, and reference "
            "books. Large windows cast soft natural light. Plants add touches of teal-green. "
            "Professional, aspirational creative workspace."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="letterform-closeup.jpg",
        prompt=(
            f"{STYLE} "
            "Extreme close-up of a single beautiful serif capital letter 'A' carved in brass, "
            "photographed with dramatic side lighting. Every fine detail of the serifs and "
            "stroke contrast is visible. Dark teal background fades to black. The letter "
            "gleams with warm golden highlights. Macro photography, art object quality."
        ),
        size="1024x1024",
    ),

    # === Gallery photos (all landscape containers, use 1536x1024) ===

    Asset(
        filename="gallery-workshop.jpg",
        prompt=(
            f"{STYLE} "
            "Wide view of a traditional letterpress printing workshop. Multiple wooden type "
            "cabinets line the walls, a Vandercook proof press sits center. Ink rollers, "
            "printed sheets hanging to dry. Warm overhead industrial lighting mixed with "
            "natural window light. Teal-painted walls."
        ),
        size="1536x1024",
    ),
    Asset(
        filename="gallery-books.jpg",
        prompt=(
            f"{STYLE} "
            "Stack of beautifully bound typography reference books and vintage font specimen "
            "catalogs. Leather spines with gold lettering. One book is open showing a spread "
            "of elegant typeface samples. Warm reading lamp light. Dark moody background."
        ),
        size="1536x1024",
    ),
    Asset(
        filename="gallery-calligraphy.jpg",
        prompt=(
            f"{STYLE} "
            "Overhead view of a calligrapher's workspace: a pointed pen resting on a sheet "
            "of practice strokes, a glass ink well with dark blue-black ink, blotting paper. "
            "Warm natural light from a nearby window. Teal desk surface. Minimal, elegant "
            "composition."
        ),
        size="1536x1024",
    ),
    Asset(
        filename="gallery-poster.jpg",
        prompt=(
            f"{STYLE} "
            "A large-format typographic poster pinned to a concrete gallery wall. The poster "
            "features bold geometric sans-serif letterforms in teal and white. Warm gallery "
            "spotlight illuminates it from above. Clean, modern exhibition aesthetic."
        ),
        size="1536x1024",
    ),
    Asset(
        filename="gallery-woodtype.jpg",
        prompt=(
            f"{STYLE} "
            "Collection of large vintage wood type blocks in various sizes and typefaces, "
            "arranged loosely on a dark workbench. Some blocks show ink staining from years "
            "of use. Warm side lighting creates long shadows. Each block shows beautiful "
            "end-grain wood texture."
        ),
        size="1536x1024",
    ),

    # === Team avatars (square 1024x1024) ===

    Asset(
        filename="adrian-frutiger.jpg",
        prompt=(
            f"{STYLE} "
            "Professional portrait of an elderly Swiss-European man in his 70s with silver "
            "hair and kind eyes, wearing a dark turtleneck. Thoughtful, wise expression. "
            "Warm studio lighting from the left side. Dark teal background with subtle gradient. "
            "Shoulders-up headshot. A legendary type designer."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="zuzana-licko.jpg",
        prompt=(
            f"{STYLE} "
            "Professional portrait of a Slavic-American woman in her 50s with short stylish "
            "hair and an intelligent, creative expression. Wearing a modern black top. "
            "Warm lighting from one side. Dark teal background. Shoulders-up headshot. "
            "She radiates creative confidence and typographic passion."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="erik-spiekermann.jpg",
        prompt=(
            f"{STYLE} "
            "Professional portrait of a German man in his 60s with distinctive round glasses, "
            "short grey hair, and an animated engaged expression. Wearing a dark blazer. "
            "Warm studio lighting. Dark teal background. Shoulders-up headshot. "
            "He looks sharp, opinionated, and passionate about design."
        ),
        size="1024x1024",
    ),
    Asset(
        filename="jessica-hische.jpg",
        prompt=(
            f"{STYLE} "
            "Professional portrait of a young American woman in her early 30s with wavy "
            "auburn hair and a warm, confident smile. Wearing a dark green top. "
            "Warm natural lighting from one side. Dark teal background. Shoulders-up headshot. "
            "Creative energy, approachable, artistic."
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
