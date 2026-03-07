# /// script
# dependencies = ["openai", "python-dotenv"]
# requires-python = ">=3.11"
# ///
"""Generate all images for bold-pitch-modern theme demo deck."""

import asyncio
import base64
from pathlib import Path

from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv(Path.home() / ".env")
client = AsyncOpenAI()

OUT = Path(__file__).parent / "images"
OUT.mkdir(parents=True, exist_ok=True)

STYLE = (
    "STYLE: Professional commercial photography. Modern co-working and office "
    "environments. Natural lighting with cool-tone color grading. Contemporary "
    "business casual aesthetic. Clean, well-composed shots with shallow depth "
    "of field where appropriate. Photorealistic quality. "
    "COLOR PALETTE: Warm wood tones, white and grey interiors, natural greens "
    "from plants, warm artificial lighting accents. "
    "RULES: No text, no logos, no watermarks, no decorative borders. No "
    "artificial color filters or duotone effects. No stock photo watermarks."
)

IMAGES = [
    {
        "filename": "hero-workspace.jpg",
        "size": "1024x1536",
        "prompt": (
            f"{STYLE}\n\n"
            "A stunning modern co-working space interior shot from a slight angle. "
            "High ceilings with exposed industrial beams, large windows flooding "
            "the space with natural light. Several professionals working at clean "
            "wooden desks with laptops. Lush green plants throughout. The space "
            "feels premium, airy, and aspirational. Warm afternoon light. "
            "Portrait orientation, vertical composition."
        ),
    },
    {
        "filename": "team-collab.jpg",
        "size": "1024x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "A diverse group of four professionals brainstorming around a "
            "whiteboard in a bright modern office. They are engaged and smiling. "
            "Casual business attire. Natural light from windows. The mood is "
            "collaborative and energetic. Shot from medium distance, showing "
            "the group and some of the workspace. Square composition."
        ),
    },
    {
        "filename": "person-laptop.jpg",
        "size": "1024x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "Close-up of a young professional working intently on a laptop in "
            "a modern workspace. Slightly moody lighting with screen glow on "
            "their face. They look focused and determined. Clean desk with a "
            "coffee cup nearby. Shallow depth of field. Square composition, "
            "the person fills most of the frame."
        ),
    },
    {
        "filename": "crowded-office.jpg",
        "size": "1024x1536",
        "prompt": (
            f"{STYLE}\n\n"
            "A cramped, uninspiring traditional corporate office with grey "
            "cubicles, fluorescent overhead lighting, and cluttered desks. "
            "Papers and filing cabinets everywhere. A few workers look bored "
            "or fatigued at their desks. The space feels closed-in, dated, and "
            "soul-crushing. Muted, flat lighting. Portrait orientation. This "
            "image represents what modern workers want to escape from."
        ),
    },
    {
        "filename": "founder-portrait.jpg",
        "size": "1024x1536",
        "prompt": (
            f"{STYLE}\n\n"
            "Professional headshot portrait of a confident woman in her 30s "
            "wearing a dark navy blazer over a simple white top. She has a warm, "
            "approachable smile. Clean, slightly blurred modern office background. "
            "Warm natural lighting from the side. The portrait exudes leadership, "
            "warmth, and competence. Shot from chest up, portrait orientation."
        ),
    },
    {
        "filename": "modern-lounge.jpg",
        "size": "1536x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "A wide panoramic view of a modern co-working lounge area. "
            "Comfortable couches and armchairs in warm tones, a coffee bar in "
            "the background, hanging pendant lights, green plants, and wooden "
            "accents. A few people relaxing with laptops. The space feels like "
            "a premium hotel lobby meets creative studio. Warm, inviting "
            "atmosphere. Wide landscape composition."
        ),
    },
    {
        "filename": "frustrated-worker.jpg",
        "size": "1536x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "A person sitting alone at a small, cluttered home desk in a dimly "
            "lit room. They look tired and frustrated, rubbing their temples. "
            "Laptop screen glowing in the semi-darkness. The space is cramped "
            "with personal items encroaching on the workspace. This represents "
            "the isolation and difficulty of remote work without proper space. "
            "Moody, low-key lighting. Landscape composition."
        ),
    },
    {
        "filename": "bright-desk.jpg",
        "size": "1024x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "A beautifully designed individual workstation in a modern co-working "
            "space. Clean white desk with a large monitor, a plant, and minimal "
            "accessories. Bright natural sunlight streaming through floor-to-ceiling "
            "windows. The desk overlooks a green courtyard or city view. The space "
            "feels open, clean, and inspiring. Square composition."
        ),
    },
    {
        "filename": "hands-tablet.jpg",
        "size": "1024x1536",
        "prompt": (
            f"{STYLE}\n\n"
            "Close-up of hands holding a tablet device in a modern workspace "
            "setting. The person is standing at a high table or counter. We can "
            "see the tablet screen at an angle showing colorful abstract UI "
            "elements (no readable text). Modern watch on their wrist. The "
            "background shows a blurred modern office space. Portrait orientation, "
            "focused on the hands and device."
        ),
    },
    {
        "filename": "phone-app.jpg",
        "size": "1024x1536",
        "prompt": (
            f"{STYLE}\n\n"
            "A modern smartphone floating against a very dark charcoal background. "
            "The phone screen displays a clean, minimal app interface with colorful "
            "blocks and cards representing a booking or reservation app. Blue and "
            "coral accent colors on the screen. No readable text on the phone "
            "screen, just colored UI shapes and blocks. Professional product "
            "photography style with subtle shadow beneath the phone. The phone "
            "is centered and takes up about 40% of the frame width. Portrait "
            "orientation."
        ),
    },
    {
        "filename": "meeting-glass.jpg",
        "size": "1024x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "An energetic team meeting in a glass-walled conference room inside "
            "a modern co-working space. Five professionals around a table, some "
            "standing, some seated, gesturing enthusiastically. A large screen "
            "or whiteboard with abstract charts visible. The glass walls show "
            "the open workspace beyond. The mood is dynamic and productive. "
            "Shot from outside the glass room, looking in. Square composition."
        ),
    },
    {
        "filename": "happy-member.jpg",
        "size": "1024x1536",
        "prompt": (
            f"{STYLE}\n\n"
            "A smiling young professional man in a modern co-working space. He "
            "is sitting in a comfortable chair with a laptop, looking directly "
            "at the camera with a genuine, warm smile. Business casual outfit "
            "(button-up shirt, no tie). The background shows a blurred modern "
            "workspace with natural light. The mood is positive and authentic. "
            "Shot from chest up, portrait orientation."
        ),
    },
    {
        "filename": "networking.jpg",
        "size": "1024x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "A casual networking event in a modern co-working space. A small "
            "group of diverse professionals standing in a circle, chatting with "
            "drinks in hand. Warm evening lighting, string lights or pendant "
            "lamps visible. The space has exposed brick and modern furniture. "
            "The mood is social, warm, and community-oriented. Shot from "
            "medium distance. Square composition."
        ),
    },
    {
        "filename": "long-table.jpg",
        "size": "1536x1024",
        "prompt": (
            f"{STYLE}\n\n"
            "A wide shot of professionals collaborating at a long communal "
            "wooden table in a modern co-working space. Laptops open, papers "
            "spread out, people leaning in to discuss. Natural light from large "
            "windows. Plants and modern decor in the background. The atmosphere "
            "is productive and collegial. Landscape composition, wide angle."
        ),
    },
    {
        "filename": "confident-leader.jpg",
        "size": "1024x1536",
        "prompt": (
            f"{STYLE}\n\n"
            "A confident professional man in his 40s standing in a modern "
            "co-working space. He is wearing a dark sweater over a collared "
            "shirt. Arms crossed casually, warm genuine smile. The background "
            "shows a bright, blurred modern office with large windows. Natural "
            "lighting. The portrait conveys trust, experience, and approachability. "
            "Shot from waist up, portrait orientation."
        ),
    },
]

SEMAPHORE = asyncio.Semaphore(4)
MAX_RETRIES = 3


async def generate_one(img: dict) -> str:
    path = OUT / img["filename"]
    if path.exists():
        print(f"  SKIP (exists): {path.name}")
        return str(path)

    for attempt in range(MAX_RETRIES):
        try:
            async with SEMAPHORE:
                print(f"  Generating: {img['filename']} ...", flush=True)
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
            print(f"  Done: {img['filename']}")
            return str(path)
        except Exception as e:
            wait = 2 ** attempt
            print(
                f"  Attempt {attempt + 1} failed for {img['filename']}: {e}. "
                f"Retrying in {wait}s..."
            )
            await asyncio.sleep(wait)

    raise RuntimeError(
        f"Failed to generate {img['filename']} after {MAX_RETRIES} attempts"
    )


async def main():
    tasks = [generate_one(img) for img in IMAGES]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    for i, r in enumerate(results):
        if isinstance(r, Exception):
            print(f"  FAILED: {IMAGES[i]['filename']} — {r}")
        else:
            print(f"  OK: {r}")


if __name__ == "__main__":
    asyncio.run(main())
