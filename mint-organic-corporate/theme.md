# Mint Organic Corporate — Theme Guide

> **Theme Name:** `mint-organic-corporate`

> **Source:** [Source]
> **Slides Analyzed:** 6 (slide_01.png through slide_06.png)
> **Date:** 2025

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Fresh, Trustworthy, Organic `[Observed]`
- **Visual Personality:** Modern-corporate with a nature-inspired, approachable warmth. It blends financial professionalism with a fresh, almost wellness-brand softness through its green palette and rounded shapes. `[Observed]`
- **Mood & Emotion:** Calm confidence. The palette and rounded forms evoke growth, stability, and optimism — appropriate for a trading consultancy trying to feel accessible rather than intimidating. `[Observed]`
- **Design References:** Echoes the modern SaaS/fintech design language of 2023–2024 (think modern fintech brands) crossed with the organic shape language popular in wellness and sustainability branding. The serif + sans-serif pairing recalls editorial finance magazines. `[Inferred – high confidence]`
- **Information Density:** 2 out of 5. Slides are spacious with few content elements per slide — usually one heading, one supporting block, and generous whitespace. `[Observed]`
- **Polish Level:** 4.5 out of 5. Highly polished with consistent spacing, considered color progressions, and deliberate compositional choices. `[Observed]`
- **Shape Language:** Overwhelmingly organic/circular. Circles dominate (decorative, icon containers, photo masks, data bubbles). Pill/stadium shapes are the secondary form. Sharp corners are almost entirely absent. `[Observed]`

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage | Source |
|---|---|---|---|
| `bg.primary` | `#DAFBE1` | Light mint green — main slide background (slides 03, 05, 06) | `[Observed]` |
| `bg.secondary` | `#1D3F4E` | Dark teal — alternate background for contrast slides (slide 02) | `[Observed]` |
| `bg.white` | `#FFFFFF` | Pure white — used for top sections (slide 04), white cards, and photo frame circles | `[Observed]` |
| `text.primary` | `#1A2F3D` | Deep navy-teal — main heading text on light backgrounds | `[Observed]` |
| `text.secondary` | `#3D5A5A` | Muted teal-gray — body text, descriptions on light backgrounds | `[Inferred – high confidence]` |
| `text.heading` | `#1A2F3D` | Same as text.primary; headings use weight/size for differentiation | `[Observed]` |
| `text.onDark` | `#FFFFFF` | White text used on dark teal and dark green backgrounds | `[Observed]` |
| `text.onDark.muted` | `#B0D4C8` | Slightly muted light green for secondary text on dark backgrounds | `[Inferred – medium confidence]` |
| `accent.1` | `#5CC87C` | Bright medium green — primary accent (pill cards, name tags, circles, icon backgrounds on light slides) | `[Observed]` |
| `accent.2` | `#3A8B85` | Medium teal-green — secondary accent (mid-tone cards in gradient sequences, icon circles) | `[Observed]` |
| `accent.3` | `#2B6B6A` | Darker teal — tertiary accent for deeper tones in multi-step progressions | `[Inferred – high confidence]` |
| `category.label` | `#3E9B6A` | Medium green — used for uppercase category/section labels (e.g., "WHY CHOOSE US?") | `[Observed]` |
| `border` | `#C5E8D0` | Very light green — subtle borders, not prominently used | `[Inferred – medium confidence]` |
| `decorative.circle` | `#2D6060` | Dark teal circles used as decorative background elements (slide 02) | `[Observed]` |

**Additional color notes:**

- **Gradient usage:** No explicit linear/radial CSS-style gradients are applied. Instead, the deck achieves a gradient effect through **color stepping** — placing elements side by side in progressively darker greens (slide 03: white → light green → teal → dark teal; slide 04: three columns from light mint → medium green → dark teal). `[Observed]`
- **Color relationships:** Monochromatic green palette spanning from near-white mint (`#DAFBE1`) through medium greens (`#5CC87C`) to deep teal-navy (`#1D3F4E`). This is a single-hue system with saturation and brightness variations. `[Observed]`
- **Light vs. dark mode:** The deck is primarily light-mode oriented (4 of 6 slides use light mint backgrounds). Slide 02 (team) uses a dark teal background as a section divider/contrast beat. `[Observed]`
- **Color shifting between slide types:** Informational/feature slides use light mint backgrounds. People-focused or high-impact slides can shift to dark teal. The problem statement slide (05) uses a brighter, more saturated green as its background. `[Observed]`

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | DM Serif Display | serif | Regular (400) | Very large (~8–10% of slide height) | Normal (0) | None | ~1.1 |
| `heading.section` | DM Serif Display | serif | Regular (400) | Large (~6–7% of slide height) | Normal (0) | None | ~1.15 |
| `heading.sub` | DM Sans | sans-serif | SemiBold (600) | Medium (~3–4% of slide height) | Normal | None | ~1.3 |
| `body` | DM Sans | sans-serif | Regular (400) | Standard (~2–2.5% of slide height) | Normal | None | ~1.5 |
| `caption` | DM Sans | sans-serif | Regular (400) | Small (~1.5–2%) | Normal | None | ~1.4 |
| `label.category` | DM Sans | sans-serif | Medium (500) | Small (~1.5–2%) | Wide (~0.15em) | UPPERCASE | ~1.2 |
| `label.page` | DM Sans | sans-serif | Medium (500) | Small (~1.2–1.5%) | Wide (~0.1em) | UPPERCASE | ~1.0 |
| `label.year` | DM Sans | sans-serif | Medium (500) | Small (~1.5%) | Normal | None | ~1.0 |
| `name.card` | DM Sans | sans-serif | SemiBold (600) | Medium (~2.5–3%) | Normal | None | ~1.2 |
| `role.card` | DM Sans | sans-serif | Regular (400) | Small (~1.5–2%) | Normal | None | ~1.3 |

`[Font identification is Inferred – high confidence]` The serif heading font has moderate stroke contrast, slightly old-style terminals, and a warm, editorial character. DM Serif Display is the closest Google Fonts match. The sans-serif companion appears to be from the same DM family — DM Sans — a geometric humanist sans-serif that pairs naturally. Alternative candidates: the serif could be Playfair Display (but the stroke contrast seems lower), and the sans could be Plus Jakarta Sans or Inter.

**Additional typography notes:**

- **Special treatments:** No outlined text, gradient fills, or text shadows observed. Text is always solid-color fills. `[Observed]`
- **Emphasis:** Bold weight is used sparingly for key statistics (e.g., "**30%**", "**20%**" on slide 06). Color change is not used for inline emphasis. `[Observed]`
- **Heading vs. body contrast:** The design creates strong hierarchy through the serif/sans-serif split rather than just size. Headings are always serif; everything else is sans-serif. `[Observed]`
- **Number/data formatting:** Percentages are displayed with the number in bold (e.g., "**30%**"). No special number fonts or tabular figures observed. `[Observed]`
- **Quotation marks:** Displayed as standard curly quotes with a space after the opening mark (slide 06). `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes | Source |
|---|---|---|---|
| Corner radius | **Pill (fully rounded / 50% of height)** for cards; **Full circle** for icon containers and decorative elements | No sharp corners anywhere in the deck | `[Observed]` |
| Borders | **None** | Objects rely on fill color and whitespace for separation, not borders | `[Observed]` |
| Shadows | **None** | Completely flat design — no drop shadows, box shadows, or glows | `[Observed]` |
| Transparency/Opacity | **Used sparingly** | Large semi-transparent white/light circle on slide 05 background; some decorative teal circles on slide 02 appear slightly translucent | `[Observed]` |
| Stroke weight | **Medium (2–3px)** for icons inside circles | Icons use a consistent medium stroke weight | `[Observed]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred – high confidence]` (all spacing appears to follow an 8px grid)
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px
- **Margin from slide edge:** ~5–6% of slide width on left/right; ~5% of slide height on top/bottom `[Observed]`
- **Gap between major content blocks:** ~5–8% of slide height (e.g., between heading group and content cards) `[Observed]`
- **Gap between related elements:** ~2–3% of slide width (e.g., icon circle to its pill card label) `[Observed]`
- **Gap between category label and heading:** ~1.5–2% of slide height `[Observed]`
- **Gap between pill card rows:** ~2–3% of slide height (slide 03) `[Observed]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Asymmetric and varied per slide template. Common patterns include: `[Observed]`
  - **Split layout (40/60 or 35/65):** Heading on the left, content block(s) on the right (slides 02, 03)
  - **Center-focused radial:** Central heading with elements radiating outward (slide 05)
  - **Three-column equal grid:** Bottom section divided into thirds (slide 04)
  - **Asymmetric overlap:** Photo + overlapping circles/cards (slide 06)
- **Column proportions:** When using a two-zone split, the heading occupies roughly 35–40% of width, and content fills 55–60%. `[Observed]`
- **Alignment bias:** Left-aligned. Headings are consistently left-aligned. Body text within cards is left-aligned. The only centered text appears in the radial/circular layout (slide 05) and category labels on some slides. `[Observed]`
- **Content safe zone:** Approximately 5–6% margins on all sides. No content touches slide edges. `[Observed]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Hero headings use the serif typeface at very large size, creating an immediate focal point through size and typographic contrast (serif vs. sans-serif surroundings). `[Observed]`
- **Supporting information de-emphasized:** Body text is smaller, sans-serif, and often in a slightly muted color or contained within colored pill cards that guide the eye sequentially. `[Observed]`
- **Reading flow pattern:** Generally **F-pattern** — the eye enters at the top-left (year/category label), moves to the heading, then scans right and downward through content cards. Slide 05 uses a **radial/circular pattern** emanating from center. `[Observed]`
- **Section separation:** Content blocks are separated by **color fills** (pill cards, column backgrounds) and **whitespace** — never by lines or borders. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** Airy. The deck is generously spaced with low information density per slide. `[Observed]`
- **Most generous whitespace:** Around headings (large breathing room above and below hero text) and slide margins. `[Observed]`
- **Tightest grouping:** Within pill cards (icon + text pairs) and within the three-column grid on slide 04 where columns sit flush against each other. `[Observed]`

---

## 4. Component Library

### Title Header Block

- **Purpose:** Establishes the slide topic with a category label above a large serif heading.
- **Anatomy:** Category label (uppercase sans-serif) → Hero heading (serif) stacked vertically, left-aligned.
- **Visual Specs:** No background fill, no border. Sits directly on the slide background.
- **Typography:** `label.category` for the category; `heading.hero` or `heading.section` for the heading.
- **Placement Rules:** Top-left quadrant of the slide, starting at ~5% from left edge, ~15–25% from top. Category label sits ~1.5% above the heading.
- **Variations:** On dark backgrounds (slide 02), the heading is white (`text.onDark`) and the category label uses `accent.1`. On light backgrounds, heading uses `text.primary` and category label uses `category.label`.
- **Observed on:** All slides (02, 03, 04, 05, 06).

### Year Marker

- **Purpose:** Persistent branding/date element.
- **Anatomy:** Simple text "2024" in the top-left corner.
- **Visual Specs:** No container or background. Plain text.
- **Typography:** `label.year` — small sans-serif, medium weight.
- **Placement Rules:** Top-left corner, ~5% from left, ~4% from top. Always present.
- **Variations:** Green (`accent.1`) on dark backgrounds; dark teal (`text.primary`) on light backgrounds.
- **Observed on:** All slides.

### Page Number

- **Purpose:** Slide/page numbering.
- **Anatomy:** Text formatted as "PAGE XX" in uppercase.
- **Visual Specs:** No container.
- **Typography:** `label.page` — small uppercase sans-serif with letter spacing.
- **Placement Rules:** Bottom-left or bottom-right corner, ~5% from edge, ~4% from bottom. Position varies by slide.
- **Variations:** On light backgrounds uses `text.primary`; on dark backgrounds uses `text.onDark.muted` or `accent.1`.
- **Observed on:** Slides 02, 03, 04, 05, 06.

### Pill Card (Feature Row)

- **Purpose:** Displays a single feature, benefit, or value proposition as a compact card.
- **Anatomy:** Rounded pill-shaped container with text content (1–2 lines) left-aligned inside.
- **Visual Specs:**
  - Fill: Varies — `#FFFFFF`, `accent.1`, `accent.2`, or `bg.secondary` (creates a color progression down the slide).
  - Border: None.
  - Radius: Fully rounded (pill shape, radius = 50% of height).
  - Shadow: None.
  - Padding: ~3% horizontal, ~2% vertical.
- **Typography:** `body` or `heading.sub` depending on content.
- **Placement Rules:** Right side of the slide, stacked vertically with ~2–3% gaps between rows. Each pill spans ~45–55% of slide width.
- **Variations:** Color varies to create a top-to-bottom gradient progression (white → light green → teal → dark teal on slide 03). Text color inverts (dark on light fills, white on dark fills).
- **Observed on:** Slides 03, 04.

### Icon Circle

- **Purpose:** Visual indicator / category icon paired with content.
- **Anatomy:** Perfect circle containing a centered line icon.
- **Visual Specs:**
  - Fill: Varies by context — `accent.1`, `accent.2`, `bg.secondary`, or `#DAFBE1` (light mint).
  - Size: ~8–10% of slide width (diameter).
  - Icon stroke: Medium weight (~2–3px), same color as text appropriate for the fill.
  - Border: None.
  - Shadow: None.
- **Typography:** N/A (icon only).
- **Placement Rules:** Positioned to the left of pill cards (slides 03, 04) or within circular content bubbles (slide 05). On slide 04, sits at the top of each column.
- **Variations:** On light backgrounds, circle fill is `accent.1` or `accent.2` with dark icons. On dark backgrounds, circle fill is darker with light icons. Size varies — smaller when paired with pill cards (~7%), larger when standalone on slide 05 (~18–22%).
- **Observed on:** Slides 03, 04, 05, 06.

### Team Member Card

- **Purpose:** Displays a team member's photo, name, and role.
- **Anatomy:** Circular photo (white border) + pill-shaped name card (with name and role text).
- **Visual Specs:**
  - Photo: Circular crop with white border (~3px).
  - Name pill: `accent.1` fill, fully rounded.
  - Padding inside pill: ~3% horizontal.
- **Typography:** `name.card` for name; `role.card` for title/role.
- **Placement Rules:** Left side of slide in a staggered grid arrangement with decorative circles. Photos and name pills are loosely aligned but intentionally offset for an organic feel.
- **Variations:** Photo position alternates (left of pill, then adjacent) to create visual rhythm.
- **Observed on:** Slide 02.

### Decorative Circle

- **Purpose:** Non-content background decoration to create visual rhythm and fill space.
- **Anatomy:** Solid-fill circles of varying sizes.
- **Visual Specs:**
  - Fill: `decorative.circle` (~`#2D6060` on dark backgrounds) or `accent.2` on light backgrounds.
  - Opacity: ~80–100%.
  - Size: Varies widely from ~5% to ~40% of slide width.
- **Placement Rules:** Scattered in grid-like or organic arrangements. On slide 02, they fill a loose 4-column grid on the left. On slide 05, a very large semi-transparent white/mint circle sits centrally behind content.
- **Variations:** Size, opacity, and color vary. Some are content-bearing (slide 05); most are purely decorative.
- **Observed on:** Slides 02, 05, 06.

### Content Bubble (Problem/Challenge)

- **Purpose:** Displays a challenge, problem, or data point inside a circular container.
- **Anatomy:** Dark teal circle containing an icon at the top and 1–3 lines of text centered below it.
- **Visual Specs:**
  - Fill: `bg.secondary` (`#1D3F4E`).
  - Size: ~18–25% of slide width (diameter).
  - Text color: `text.onDark`.
  - Icon: Small, white/light, centered at top of circle.
- **Typography:** `caption` for the text content; icon uses medium stroke.
- **Placement Rules:** Arranged radially around a central heading (slide 05), positioned at roughly 10/2/4/8 o'clock positions.
- **Observed on:** Slide 05.

### Testimonial Block

- **Purpose:** Displays a customer quote with attribution.
- **Anatomy:** Large green circle containing: icon badge at top-left edge, name in bold, quote text below.
- **Visual Specs:**
  - Fill: `accent.1` for the large circle.
  - Text: `text.primary` for the name, `text.primary` for quote body.
  - Icon badge: Small white circle with green icon, positioned at the circle's edge.
- **Typography:** `name.card` for the person's name; `body` for the quote text.
- **Placement Rules:** Right side of slide, overlapping with the photo area.
- **Observed on:** Slide 06.

### Stat Badge

- **Purpose:** Highlights a key metric or statistic.
- **Anatomy:** White circle containing an icon at top and stat text (with bold number) below.
- **Visual Specs:**
  - Fill: `#FFFFFF`.
  - Size: ~15–18% of slide width.
  - Icon: `accent.2` or `accent.1` colored.
  - Text: `text.primary`, number portion in bold.
- **Typography:** `body` with inline bold for the number/percentage.
- **Placement Rules:** Overlapping content areas, positioned to draw attention.
- **Observed on:** Slide 06.

### Three-Column Grid

- **Purpose:** Displays a progression or timeline (e.g., Short/Medium/Long Term).
- **Anatomy:** Three equal-width columns filling the bottom ~55% of the slide, each with a distinct background color.
- **Visual Specs:**
  - Column fills progress from light to dark: `#DAFBE1` → `accent.2` → `bg.secondary`.
  - Each column contains: Icon Circle at top, heading (`heading.sub`), body text below.
  - No gaps between columns (flush).
  - Text color adapts: dark text on light column, white text on dark columns.
- **Placement Rules:** Bottom portion of slide, spanning full width within the content safe zone.
- **Observed on:** Slide 04.

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter:** Professional people — business professionals, traders, consultants. Always individuals (not groups), always engaged and smiling or confident. `[Observed]`
- **Cropping conventions:** Circular crop with white border for headshots (slide 02). On slide 06, the photo is cropped to fill the left portion of the slide with the figure cut off at the waist/laptop level, with no hard rectangular frame — the image blends into the slide background using color-matched green tones. `[Observed]`
- **Color treatment:** Photos appear naturally graded but with a slight green/teal color cast to harmonize with the deck palette. The subject on slide 06 wears a green blazer that matches `accent.1`. This suggests photo selection (or color grading) to match the brand palette. `[Observed]`
- **Overlay usage:** No heavy overlays. The photo on slide 06 sits on the `bg.primary` mint background, and the figure is cut out (or shot on a matching background) so it integrates seamlessly. `[Observed]`
- **When photos are used:** Only for people (team slides, testimonial/case study slides). Never for abstract imagery, products, or environments. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon style:** Medium line weight, slightly rounded corners — a clean, modern outline style. `[Observed]`
- **Line weight:** ~2–3px stroke, consistent across all icons. `[Observed]`
- **Corner style:** Slightly rounded (not sharp, not fully soft). `[Observed]`
- **Color usage:** Monochrome — icons use a single color that contrasts with their circle container fill. Dark icons on light fills, light/white icons on dark fills. `[Observed]`
- **Size:** Icons are ~40–50% of their containing circle's diameter. The circles themselves are ~8–10% of slide width. `[Observed]`
- **Icon subjects observed:** Calendar with checkmark, trophy/cup, target/crosshair, lightning bolt/arrow, expand arrows, group of people, crown, flame/fire, chart/presentation board, trend line. `[Observed]`
- **No illustrations present.** The deck uses icons exclusively, no complex illustrations. `[Observed]`

### 5.3 Decorative Elements

- **Floating circles:** The primary decorative device. Solid-colored circles of varying sizes appear as background elements, especially on slides 02 and 05. `[Observed]`
- **Prominence:** Moderate — decorative circles are clearly visible but sit behind content layers. They use muted teal tones (`decorative.circle`) that blend with the background rather than demanding attention. `[Observed]`
- **Placement:** On slide 02 (dark background), decorative circles fill the left two-thirds in a loose grid pattern. On slide 05, a very large semi-transparent light circle (~50% of slide width) sits centrally behind the heading. On slide 06, a large `accent.1` circle overlaps the right side. `[Observed]`
- **No patterns or textures:** No noise, grain, geometric patterns, or background textures are used. Backgrounds are solid flat colors. `[Observed]`
- **No lines, dots, or non-circular shapes** are used decoratively. `[Observed]`

### 5.4 Data Visualization

- **No charts or graphs observed.** Data is presented through stat badges (numbers with bold formatting inside circular containers) rather than traditional data visualization. `[Observed]`
- **Number formatting:** Key statistics use bold weight for the number + percent sign (e.g., "**30%**", "**20%**"). `[Observed]`

---

## 6. Slide Template Catalog

### Template: "Feature List" (Slide 03 — The [Brand] Advantage)

- **When to use:** Listing 3–5 key benefits, features, or value propositions with supporting icons.
- **Placement map:**
  - Year marker: 5% from left, 4% from top
  - Category label: 5% from left, 32% from top
  - Heading block: 5% from left, 36% from top, ~35% wide, ~20% tall
  - Feature rows (icon + pill): 48% from left, 12% from top, ~50% wide; rows spaced ~15% apart vertically
  - Page number: 5% from left, 92% from top
- **Text style mapping:** `label.category` → `heading.hero` → `body` inside pills
- **Color token mapping:** Background: `bg.primary`. Pill cards step through: `#FFFFFF` → `accent.1` → `accent.2` → `bg.secondary`. Text inverts from dark to light as pill darkens.
- **Components used:** Title Header Block, Year Marker, Page Number, Icon Circle, Pill Card (×4)
- **Variation rules:** Number of rows can vary (3–5). Color progression should always step from lightest at top to darkest at bottom. Each row must have an icon circle to its left.

### Template: "Team Grid" (Slide 02 — Meet the Minds Behind [Brand])

- **When to use:** Introducing team members with photos and titles.
- **Placement map:**
  - Year marker: 60% from left, 5% from top (right-aligned on this slide)
  - Category label: 60% from left, 40% from top
  - Heading block: 60% from left, 44% from top, ~35% wide, ~30% tall
  - Team member cards: 5% from left, 8% from top, ~55% wide; staggered rows
  - Page number: 60% from left, 90% from top
- **Text style mapping:** `label.category` (green on dark) → `heading.hero` (white) → `name.card` + `role.card` inside pills
- **Color token mapping:** Background: `bg.secondary`. Name pills: `accent.1`. Decorative circles: `decorative.circle`. Text: `text.onDark`.
- **Components used:** Title Header Block, Year Marker, Page Number, Team Member Card (×3), Decorative Circle (×8–10)
- **Variation rules:** Number of team members can vary (2–5). Maintain the staggered, organic arrangement — never align in a rigid grid. Decorative circles fill empty spaces. Always use dark background for this template.

### Template: "Roadmap / Timeline" (Slide 04 — The Future of [Brand])

- **When to use:** Presenting a phased plan, timeline, or progression (typically 3 stages).
- **Placement map:**
  - Year marker: 5% from left, 4% from top
  - Page number: 88% from left, 4% from top
  - Category label: ~center, 13% from top
  - Heading: ~center, 16% from top, centered text
  - Three-column grid: 0% from left, 45% from top, 100% wide, 55% tall
  - Within each column: Icon circle at ~55% from top (15% from column top), heading at ~75%, body at ~82%
- **Text style mapping:** `label.category` (centered) → `heading.section` (centered) → `heading.sub` per column → `body` per column
- **Color token mapping:** Top: `bg.white`. Columns left-to-right: `bg.primary` → `accent.2` → `bg.secondary`. Icon circles use contrasting fills within each column.
- **Components used:** Title Header Block (centered variant), Year Marker, Page Number, Three-Column Grid, Icon Circle (×3)
- **Variation rules:** This template is specifically for 3-phase content. Column colors must progress from light to dark left-to-right. The top white section provides breathing room for the heading.

### Template: "Problem / Radial" (Slide 05 — The Challenges Traders Face Today)

- **When to use:** Presenting a central problem with 3–5 surrounding pain points or challenges.
- **Placement map:**
  - Year marker: 5% from left, 5% from top
  - Background large circle: centered at ~50%/50%, ~55% diameter, semi-transparent white/light mint
  - Category label: centered, ~35% from top
  - Heading: centered, ~38% from top, ~45% wide
  - Content bubbles: Positioned radially — top-left (~15%, 20%), top-right (~75%, 18%), bottom-left (~12%, 62%), bottom-right (~72%, 65%)
  - Page number: 5% from left, 92% from top
- **Text style mapping:** `label.category` (centered) → `heading.hero` (centered, dark) → `caption` inside content bubbles
- **Color token mapping:** Background: bright green (`#6BD88B` or slightly more saturated variant of `accent.1`). Content bubbles: `bg.secondary`. Large decorative circle: `bg.primary` at ~30% opacity. `[Observed/Inferred]`
- **Components used:** Title Header Block (centered variant), Year Marker, Page Number, Content Bubble (×4), Decorative Circle (large, semi-transparent)
- **Variation rules:** 3–5 content bubbles can be used, arranged radially. Bubble sizes can vary slightly to create visual interest. The central large soft circle is required as a focal-point anchor.

### Template: "Case Study / Testimonial" (Slide 06 — [Brand] in Action)

- **When to use:** Showcasing a client success story, testimonial, or case study with a human photo.
- **Placement map:**
  - Year marker: 5% from left, 5% from top
  - Category label: 5% from left, 52% from top
  - Heading: 5% from left, 56% from top, ~35% wide
  - Photo: Left-center, ~25% from left, 15% from top, ~40% wide, ~80% tall (cutout figure)
  - Icon badges: ~65% from left, ~15% from top (small circles with icons)
  - Supporting text: ~68% from left, ~18% from top, ~28% wide
  - Testimonial circle: ~62% from left, ~40% from top, ~35% diameter
  - Stat badge: ~48% from left, ~68% from top, ~18% diameter
  - Page number: 5% from left, 92% from top
- **Text style mapping:** `label.category` → `heading.section` → `name.card` for testimonial attribution → `body` for quote → `body` with bold for stat
- **Color token mapping:** Background: `bg.primary`. Testimonial circle: `accent.1`. Stat badge: `#FFFFFF`. Icon badges: `accent.1` with dark icon, or `bg.secondary` with green icon.
- **Components used:** Title Header Block, Year Marker, Page Number, Testimonial Block, Stat Badge, Icon Circle (×2), photo (cutout)
- **Variation rules:** Photo should feature a person whose clothing harmonizes with the green palette. Testimonial and stat elements overlap the photo area, creating depth. The layout is asymmetric and layered — avoid rigid alignment.

### Template: "Overview / Mosaic" (Slide 01)

- **When to use:** Providing a visual overview or table-of-contents showing multiple slides at a glance.
- **Placement map:** 2×2 grid of slide thumbnails, each occupying ~48% width and ~48% height with small gaps.
- **Color token mapping:** Reflects the individual slide palettes in miniature.
- **Components used:** This is a meta-template showing other slides.
- **Variation rules:** Used only for overview/contents purposes. Not a content template.

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. **Always use circular or pill-shaped containers** — every container in the deck uses either a perfect circle or a fully-rounded pill shape (radius = 50% of height). Never use partially-rounded rectangles. `[Observed]`
2. **Always include the "2024" year marker** in the top-left corner of every slide. `[Observed]`
3. **Always pair a category label above the hero heading** — use uppercase, letter-spaced sans-serif in green (`category.label` color) followed by a large serif heading. `[Observed]`
4. **Always use the serif font (DM Serif Display) for headings only** and sans-serif (DM Sans) for everything else. Never mix them within a single text block. `[Observed]`
5. **Always maintain the monochromatic green palette** — every color in the deck is a variation of green/teal, from pale mint to deep navy-teal. No other hue families are introduced. `[Observed]`
6. **Always create color progressions** when displaying lists or sequences — step from lightest to darkest (or vice versa) across items. `[Observed]`
7. **Always keep backgrounds flat** — use solid color fills with no gradients, patterns, textures, or noise. `[Observed]`
8. **Always maintain generous margins** (~5–6% from all edges) and airy spacing between elements. `[Observed]`
9. **Always use medium-weight line icons inside circles** — icons should be simple, outline-style, monochrome, and centered in their circular container. `[Observed]`
10. **Always crop photos into circles** for headshots. For larger photos, use cutout figures on color-matched backgrounds. `[Observed]`
11. **Always left-align headings** (except on centered templates like the roadmap or problem slides). `[Observed]`
12. **Always include a "PAGE XX" marker** on slides, in uppercase with letter spacing. `[Observed]`

### ❌ DON'T (things that would immediately break the aesthetic)

1. **Never use sharp/square corners** on any container, card, or image frame. Every shape must be circular or pill-shaped. `[Observed]`
2. **Never use drop shadows, box shadows, or glows** — the design is entirely flat. `[Observed]`
3. **Never use borders or outlines on containers** — shapes are defined by fill color against the background, not by borders. `[Observed]`
4. **Never introduce colors outside the green/teal monochromatic palette** — no reds, blues, oranges, purples, or yellows. `[Observed]`
5. **Never use more than 4–5 content elements per slide** — maintain low information density. `[Observed]`
6. **Never use serif fonts for body text, labels, or captions** — serif is reserved exclusively for headings. `[Observed]`
7. **Never center-align body text paragraphs** within pill cards or alongside content — body text is always left-aligned. `[Observed]`
8. **Never use photographic images as full-bleed backgrounds** — photos are always contained in shapes (circles, cutouts) and sit on top of solid-color backgrounds. `[Observed]`
9. **Never use decorative shapes other than circles** — no triangles, squares, hexagons, or organic blobs. The shape language is exclusively circular. `[Observed]`
10. **Never use bullet points or numbered lists with traditional markers** — content is organized into pill cards and icon + text pairs instead. `[Observed]`
11. **Never use gradient backgrounds or gradient text fills** — all fills are solid, flat colors. `[Observed]`
12. **Never place text directly on a photo** without a shape container (circle, pill) between the text and image. `[Observed]`

---

## 8. Reproduction Checklist

- [ ] **Palette check:** Every color used is within the green/teal monochromatic spectrum (`#DAFBE1` ↔ `#1D3F4E`). No other hues present.
- [ ] **Typography pairing:** Headings use DM Serif Display (serif); all other text uses DM Sans (sans-serif). No other fonts.
- [ ] **Category + heading pattern:** Every slide has an uppercase, letter-spaced category label directly above the serif heading.
- [ ] **Year marker present:** "2024" (or current year) appears in the top-left corner, ~5% from edges.
- [ ] **Page number present:** "PAGE XX" appears in a bottom corner, uppercase with letter spacing.
- [ ] **Shape language:** All containers are either perfect circles or pill shapes (fully rounded). Zero sharp corners anywhere.
- [ ] **No shadows/borders:** Design is completely flat — no drop shadows, border strokes, or glow effects.
- [ ] **Flat backgrounds:** Slide backgrounds are solid single-color fills. No gradients, patterns, or textures.
- [ ] **Color progression:** When listing items, colors step from light to dark (or vice versa) across elements.
- [ ] **Icon treatment:** Icons are medium-weight outline style, single color, centered inside circular containers.
- [ ] **Photo treatment:** Headshots are circular-cropped. Larger photos use cutout figures on color-matched backgrounds. No full-bleed photos.
- [ ] **Margins:** Content stays within a ~5–6% margin from all slide edges.
- [ ] **Information density:** No more than 4–5 major content elements per slide. Generous whitespace.
- [ ] **Heading alignment:** Left-aligned by default; centered only on roadmap/problem-type centered layouts.
- [ ] **Text color adaptation:** Dark text on light backgrounds; white text on dark backgrounds. Always ensure high contrast.
- [ ] **Decorative circles:** Use solid-fill circles as background decoration to fill space and add visual rhythm. Vary sizes.
- [ ] **Template selection:** Choose template based on content type — feature list for benefits, radial for problems, timeline for roadmap, team grid for people, case study for testimonials.
- [ ] **Serif heading size:** Hero headings should be large enough to dominate the slide (~8–10% of slide height). They are the primary focal point.
- [ ] **Body text restraint:** Keep body text short (1–3 lines per card). This deck favors brevity.
- [ ] **Color token consistency:** Use the defined tokens consistently — don't introduce ad-hoc colors.

---

## 9. Background/Texture Generation Prompt

> Create a clean, minimal abstract background in a soft mint green color (#DAFBE1). The background should be a flat, solid color with very subtle, overlapping translucent circles of slightly varying green tones — pale mint white and soft sage green — creating gentle depth without any texture, grain, or noise. The circles should be large (20–50% of the image width), softly blurred or at very low opacity (10–20%), and arranged asymmetrically with some overlapping. The overall feel should be fresh, calm, organic, and professional — like a modern fintech or wellness brand. No patterns, no sharp edges, no dark elements. The result should work as a presentation slide background with ample space for overlaid text and content elements.

---

## 10. Uncertainties & Open Questions

### Confirmed Uncertainties

- **Font identification:** The serif heading font is identified as DM Serif Display with high confidence based on letterform analysis, but it could also be Playfair Display, Lora, or a custom/licensed serif. The sans-serif is likely DM Sans but could be Plus Jakarta Sans, Inter, or Outfit. `[Inferred – high confidence]`
- **Exact hex values:** Colors were estimated from compressed PNG screenshots. The exact brand hex codes may differ by ±5–10 values per channel from the estimates provided. `[Inferred – high confidence]`
- **Slide 01 purpose:** Slide 01 appears to be a portfolio presentation overview (4 slides shown in a 2×2 grid) rather than an actual presentation slide. It's unclear if this is part of the deck or a portfolio showcase. `[Observed]`
- **Animations/transitions:** Cannot determine any motion design, transitions, or animation behavior from static screenshots. `[N/A]`
- **Total slide count:** Page numbers reference pages 10, 12, 17, and 20, suggesting the full deck has 20+ slides. Only 5 unique content slides (plus the overview) were analyzed. There are likely additional template types (e.g., a title/cover slide, agenda slide, closing/CTA slide, data/chart slide) not represented here.

### Targeted Questions to Improve Fidelity

1. **Do you have access to the brand's actual font names?** This would eliminate the font identification uncertainty and ensure perfect typographic reproduction.
2. **Is there a brand guidelines document or style guide available?** This would confirm exact hex codes, spacing values, and logo usage rules.
3. **Are there additional slide types in the full deck** (e.g., cover slide, agenda, data charts, closing CTA) that weren't included in these 6 screenshots?
4. **What tool was this deck created in** (Figma, Google Slides, PowerPoint, Keynote, Canva)? This affects how spacing and sizing values should be interpreted.
5. **Are there any animated elements or transitions** in the original deck (e.g., circle elements scaling in, pills sliding from right, photo parallax)?
