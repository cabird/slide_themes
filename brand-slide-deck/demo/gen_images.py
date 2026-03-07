# /// script
# dependencies = ["openai"]
# requires-python = ">=3.11"
# ///
"""Generate images for the Brand Slide Deck theme (Artisan Coffee Collective)."""

import base64
from dataclasses import dataclass
from pathlib import Path
from openai import OpenAI

client = OpenAI()
OUT = Path(__file__).parent / "images"
OUT.mkdir(exist_ok=True)

# Style contract for consistency across all images
STYLE = (
    "Editorial photography style, warm earthy tones with caramel and dusty rose accents, "
    "soft natural lighting, shallow depth of field, minimal composition, "
    "high-end magazine aesthetic. No text, no logos, no overlays."
)

@dataclass(frozen=True)
class Asset:
    filename: str
    prompt: str
    size: str = "1536x1024"  # landscape
    fmt: str = "jpeg"        # jpeg for photos, png only if transparency needed

ASSETS = [
    # Slide 1 (cover) - hero coffee shot
    Asset(
        filename="hero-coffee.jpg",
        prompt=(
            f"{STYLE} "
            "Overhead view of a ceramic pour-over dripper with fresh coffee streaming into "
            "a handmade stoneware mug on a rustic wooden surface. A few scattered whole coffee "
            "beans nearby. Warm morning light from the side."
        ),
    ),
    # Slide 2 (welcome) - founder portrait
    Asset(
        filename="founder-portrait.jpg",
        prompt=(
            f"{STYLE} "
            "Portrait of a woman in her late 30s standing in an artisan coffee roastery, "
            "wearing a simple linen apron. She is looking slightly off-camera with a warm, "
            "confident expression. Soft window light from the left, roasting equipment blurred "
            "in the background. Warm skin tones."
        ),
        size="1024x1536",  # portrait
    ),
    # Slide 3 (contents) - small coffee detail
    Asset(
        filename="coffee-beans-detail.jpg",
        prompt=(
            f"{STYLE} "
            "Close-up of freshly roasted coffee beans in a small ceramic bowl on a linen cloth. "
            "Warm caramel and chocolate brown tones, tight crop, very shallow depth of field."
        ),
        size="1024x1024",
    ),
    # Slide 4 (values) - coffee farm/sourcing
    Asset(
        filename="coffee-farm.jpg",
        prompt=(
            f"{STYLE} "
            "Lush green coffee plantation on a hillside at golden hour. Rows of coffee plants "
            "with ripe red cherries visible. Misty mountains in the background. Warm, hopeful "
            "atmosphere suggesting sustainable farming."
        ),
    ),
    # Slide 5 (mission) - coffee origin/process
    Asset(
        filename="coffee-process.jpg",
        prompt=(
            f"{STYLE} "
            "Hands carefully sorting through freshly harvested coffee cherries on a wooden drying "
            "table. Mix of red and yellow cherries. Warm sunlight, rustic setting, close-up showing "
            "the human craft of coffee processing."
        ),
        size="1024x1536",  # portrait-ish for tall placement
    ),
    # Slide 6 (vision) - coffee future/sustainability
    Asset(
        filename="coffee-seedlings.jpg",
        prompt=(
            f"{STYLE} "
            "Young coffee seedlings growing in small terracotta pots on a wooden shelf in a nursery. "
            "Soft green leaves catching warm sunlight. Sense of growth and future potential. "
            "Earthy tones with fresh green accents."
        ),
    ),
    # Slide 7 (about) - roastery interior
    Asset(
        filename="roastery-interior.jpg",
        prompt=(
            f"{STYLE} "
            "Interior of a small artisan coffee roastery with a copper drum roaster as the focal point. "
            "Burlap bags of green beans stacked nearby. Warm industrial aesthetic with exposed brick, "
            "natural light from high windows."
        ),
    ),
    # Slide 7 (about) - cupping session
    Asset(
        filename="cupping-session.jpg",
        prompt=(
            f"{STYLE} "
            "Overhead view of a coffee cupping session: several small white ceramic cups arranged "
            "in a row with ground coffee and spoons. Clean, minimal table setting on light wood surface. "
            "Warm tones, professional but inviting."
        ),
    ),
    # Slide 8 (team) - team member 1
    Asset(
        filename="team-member-1.jpg",
        prompt=(
            f"{STYLE} "
            "Portrait of a woman in her late 30s, artisan coffee roaster, wearing a simple dark apron, "
            "standing arms crossed with a warm smile. Clean neutral background with soft warm lighting. "
            "Professional headshot style."
        ),
        size="1024x1536",
    ),
    # Slide 8 (team) - team member 2
    Asset(
        filename="team-member-2.jpg",
        prompt=(
            f"{STYLE} "
            "Portrait of a man in his early 30s, coffee buyer/agronomist, wearing a casual button-down "
            "shirt with rolled sleeves. Standing in front of shelves with coffee sample jars. "
            "Warm, approachable expression. Soft natural light."
        ),
        size="1024x1536",
    ),
    # Slide 8 (team) - team member 3
    Asset(
        filename="team-member-3.jpg",
        prompt=(
            f"{STYLE} "
            "Portrait of a woman in her late 20s, lead roaster, checking a coffee roasting machine gauge. "
            "Side profile, focused expression, warm industrial lighting from the roastery. "
            "Wearing a simple linen apron over a dark t-shirt."
        ),
        size="1024x1536",
    ),
]


def main():
    for i, asset in enumerate(ASSETS):
        out_path = OUT / asset.filename
        if out_path.exists():
            print(f"  [{i+1}/{len(ASSETS)}] SKIP (exists): {asset.filename}")
            continue

        print(f"  [{i+1}/{len(ASSETS)}] Generating: {asset.filename} ...", end=" ", flush=True)
        img = client.images.generate(
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

    print(f"\nAll {len(ASSETS)} assets in {OUT.resolve()}")


if __name__ == "__main__":
    main()
