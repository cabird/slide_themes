# Theme Guide — Elegant Blue Serif Editorial

> **Source deck:** 15 slides at 1366 × 768 px (16:9). All brand references (`CloudPulse`, `cloudpulse.com`, `Your LOGO`, `11.15.35`) have been replaced with generic placeholders.

---

## 1. Aesthetic DNA (Quick Summary)

| Attribute | Value |
|---|---|
| **Three-Word Vibe** | Elegant, Editorial, Confident |
| **Visual Personality** | Editorial-corporate hybrid — luxurious serif typography paired with restrained blue-monochrome palette; feels like a high-end consulting report or annual review |
| **Mood & Emotion** | Authoritative calm. The deck projects quiet sophistication and strategic gravitas — it wants to be trusted, not to dazzle |
| **Design References** | Echoes classic editorial magazine layouts (Vogue Business, Monocle), Scandinavian corporate minimalism, and mid-century serif poster design. The rotated headline treatment recalls contemporary book jacket design |
| **Information Density** | 2 / 5 — generous white space; most slides carry a single idea with minimal supporting text |
| **Polish Level** | 4 / 5 — pixel-clean with considered spacing; occasional alignment looseness on a few interior slides keeps it from a perfect 5 |
| **Shape Language** | Geometric — circles, semicircles, and straight lines dominate. No organic blobs, rounded rectangles, or irregular shapes. Hard-edged geometry softened only by the fluid-wave artwork on slides 1 and 15 |

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage | Source |
|---|---|---|---|
| `bg.primary` | `#E8EDF4` | Main slide background for interior slides (slides 2–14) | `[Observed]` |
| `bg.dark` | `#2B4AC7` | Full-bleed background on title/closing slides (slides 1, 15); fill for large decorative circles and outcome panels | `[Observed]` |
| `bg.dark-deep` | `#1E3299` | Darker blue tones in the fluid-wave artwork and deeper circle fills (left side of slide 1) | `[Inferred – high confidence]` |
| `text.primary` | `#2B4AC7` | All body text, headings, labels on light backgrounds | `[Observed]` |
| `text.onDark` | `#FFFFFF` | Text on dark-blue backgrounds (slides 1, 7, 9, 15) | `[Observed]` |
| `text.secondary` | `#5A6A8A` | Muted supporting text / captions (slightly lighter blue-grey) | `[Inferred – medium confidence]` |
| `accent.1` | `#E8708A` | Pink/coral highlight — donut chart progress arcs, small accent icon strokes on slide 14 | `[Observed]` |
| `accent.2` | `#F5A0B0` | Lighter pink — inner ring of the large donut on slide 4 (99% NRR ring) | `[Inferred – medium confidence]` |
| `border` | `#B8C4DA` | Thin horizontal rules at slide top; thin vertical dividers between content columns | `[Observed]` |
| `border.dark` | `#2B4AC7` | Thicker horizontal bars used in the framework slide (slide 6) column headers | `[Observed]` |

**Additional color notes:**

- **Gradient usage:** The title slide (slide 1) and closing slide (slide 15) use a 3D fluid-wave gradient panel on the left ~35–40% of the slide. The gradient flows through `#1E3299` → `#2B4AC7` → `#4A6AE8` with specular white highlights suggesting a glossy, almost liquid-metal surface. The right portion is flat `#2B4AC7`. `[Observed]`
- **Color relationships:** Strictly monochromatic blue with a single coral/pink accent. The palette contains no greens, oranges, yellows, or purples. `[Observed]`
- **Light/dark orientation:** Interior slides are light-mode (`#E8EDF4` background). Bookend slides (1, 15) and specific data panels (slides 7, 9 outcome columns) are dark-mode blue. `[Observed]`
- **Color inversion rule:** Section openers / bookend slides invert the scheme — dark `#2B4AC7` background with white text. Interior content slides use `#E8EDF4` background with `#2B4AC7` text. `[Observed]`

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (% of slide height) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Playfair Display | serif | Regular Italic (400i) | ~12–16% | Normal | None | ~1.05 |
| `heading.section` | Playfair Display | serif | Regular Italic (400i) | ~8–10% | Normal | None | ~1.1 |
| `heading.sub` | Playfair Display | serif | Regular Italic (400i) | ~4–5% | Normal | None | ~1.2 |
| `heading.rotated` | Playfair Display | serif | Regular Italic (400i) | ~10–14% | Normal | None (rotated 90° CCW) | ~1.0 |
| `heading.rotatedLabel` | Inter | sans-serif | Regular (400) | ~1.5–2% | ~0.15em | Uppercase | ~1.2 |
| `body` | Inter | sans-serif | Regular (400) | ~2–2.5% | Normal | None | ~1.5 |
| `body.bold` | Inter | sans-serif | Bold / SemiBold (600–700) | ~2–2.5% | Normal | Uppercase (for labels like "CORE PRODUCT:") | ~1.5 |
| `caption` | Inter | sans-serif | Regular (400) | ~1.8–2% | Normal | None | ~1.4 |
| `label` | Inter | sans-serif | Regular (400) | ~1.2–1.5% | ~0.08em | Uppercase | ~1.3 |
| `number.hero` | Playfair Display | serif | Regular Italic (400i) | ~6–8% | Normal | None | ~1.0 |
| `number.donut` | Inter | sans-serif | SemiBold (600) | ~3–4% | Normal | None | ~1.0 |
| `tocNumber` | Playfair Display | serif | Regular Italic (400i) | ~5–6% | Normal | None | ~1.0 |
| `brand.wordmark` | Inter | sans-serif | Light (300) + SemiBold (600) | ~1.5% | ~0.15em | None — first word light, second word bold | ~1.0 |

**Additional typography notes:**

- **Dual-font system:** The deck uses exactly two typeface families — a decorative serif (Playfair Display Italic) for all headings and display numbers, and a clean sans-serif (Inter) for body, labels, and data. `[Observed]` The serif match could alternatively be *Cormorant Garamond Italic* or *Lora Italic*, but Playfair Display's high-contrast thick/thin strokes and distinctive italic 'Q' and 'g' are the closest match. `[Inferred – high confidence]`
- **Emphasis treatment:** Bold italic serif for headings on dark backgrounds; regular italic serif for headings on light backgrounds. Sans-serif bold uppercase is used for category labels (e.g., "CORE PRODUCT:", "SCENARIO 1"). `[Observed]`
- **The rotated heading pattern:** On slides 4, 5, 7, 8, 9, 10, 11, 12, 13, the slide title is rendered in very large Playfair Display Italic, rotated 90° counter-clockwise, positioned in the left ~20–30% of the slide. An upright uppercase sans-serif label often accompanies it (e.g., "SCENARIO 1", "ARR & CUSTOMER GROWTH"). This is the deck's most distinctive typographic feature. `[Observed]`
- **Number formatting:** Percentages use the `%` symbol directly adjacent (e.g., "25%", "99%"). Currency uses `$` prefix with `M` suffix (e.g., "$45M", "$90M"). Large counts use comma separators (e.g., "3,200", "6,400"). `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Sharp (0px) for rectangles, image frames, bars | All rectangular elements have hard 0px corners. `[Observed]` |
| Corner radius (special) | Full circle / semicircle for decorative shapes | Large blue circles and donut charts are perfect circles. The outcome panel on slides 7, 9 has a rounded-top (stadium/arch) shape. `[Observed]` |
| Borders | Thin solid (~1px) | Used for horizontal rules and vertical dividers in `border` color `#B8C4DA`. `[Observed]` |
| Shadows | None | No drop shadows, box shadows, or glows anywhere in the deck. `[Observed]` |
| Transparency/Opacity | Sparingly | Only observed on the fluid-wave gradient artwork (specular highlights). No frosted glass, semi-transparent cards, or overlays. `[Observed]` |
| Stroke weight (icons) | Medium (~2px) | White outline icons inside blue filled circles. `[Observed]` (slides 12, 13, 14) |
| Stroke weight (dividers) | Thin (~1px) | Horizontal and vertical rules. `[Observed]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred – high confidence]`
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px
- **Margin from slide edge (left/right):** ~5–6% of slide width (~68–82px at 1366px) `[Observed]`
- **Margin from slide edge (top):** ~5% of slide height above the horizontal top rule; ~3% between rule and content start `[Observed]`
- **Margin from slide edge (bottom):** ~5–8% `[Observed]`
- **Gap between major content blocks:** ~6–8% of slide width (horizontal) or ~5–6% of slide height (vertical) `[Observed]`
- **Gap between related elements (e.g., icon and label):** ~1.5–2% of slide width (~16–24px) `[Observed]`
- **Gap between donut chart and its label:** ~2% of slide height `[Observed]`
- **Vertical gap between list items (bulleted text):** ~2–3% of slide height `[Observed]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Asymmetric multi-column. The dominant pattern is a **left sidebar (~20–30% width) + main content area (~70–80%)**. The left sidebar holds the rotated serif heading; the main content occupies the remaining space and is itself subdivided into 2–3 columns as needed. `[Observed]`
- **Column proportions (common patterns):**
  - **30/70** — rotated heading left, content right (slides 4, 5, 7, 8, 9, 10, 11, 12, 13) `[Observed]`
  - **33/33/33** — three-column layout for table of contents (slide 2), framework columns (slide 6) `[Observed]`
  - **50/50** — title/closing slides with fluid-wave left, flat blue right (slides 1, 15) `[Observed]`
  - **33/33/33** — goal slide with half-circles and text panels (slide 3) `[Observed]`
  - **40/60** — two decorative circles left, text right (slide 14) `[Observed]`
- **Alignment bias:** Left-aligned for body text; large serif headings vary — centered on full-width slides (slides 2, 6), right-aligned when rotated heading claims the left column. `[Observed]`
- **Content safe zone:** 5–6% margins on all four sides. The horizontal top rule sits at ~7% from the top. `[Observed]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Massive serif italic headings (~12–16% of slide height) dominate through sheer scale. When rotated, they anchor the left zone and create a vertical typographic "monument." `[Observed]`
- **Supporting information de-emphasis:** Sans-serif body text at 2–2.5% height, standard weight, same blue color but vastly smaller. No color differentiation — hierarchy is achieved almost entirely through size contrast. `[Observed]`
- **Reading flow pattern:** L-shaped / left-anchor pattern on most slides — the eye is drawn first to the large rotated heading on the left, then moves right across the content. On centered slides (2, 6), reading is top-down center. `[Observed]`
- **Section separation:** Thin vertical divider lines (`border` color) separate content columns. Thin horizontal rules separate header areas from body content. No background-color cards or boxes are used for separation — the deck relies on lines and spacing. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** Airy. `[Observed]`
- **Generous white space:** The left rotated-heading column often has 70%+ empty space around the large heading. The light `#E8EDF4` background amplifies the airiness. `[Observed]`
- **Tightly grouped elements:** Icon + label pairs (slides 12, 13) are grouped with ~16px vertical gap. Donut charts and their labels sit close together inside blue panels. Bulleted lists have consistent but snug spacing. `[Observed]`

---

## 4. Component Library

### Title Header Block
- **Purpose:** Persistent brand identification at top of every interior slide (slides 2–14)
- **Anatomy:** `[Brand]` wordmark (top-left) + full-width horizontal rule
- **Visual Specs:** Wordmark in `text.primary` color; first word in lighter weight, second word in bold. Horizontal rule in `border` color (`#B8C4DA`), ~1px, spanning full slide width below the wordmark with ~16px gap
- **Typography:** `brand.wordmark` token
- **Placement Rules:** Wordmark at ~5% from left, ~3% from top. Horizontal rule at ~7% from top
- **Variations:** On dark slides (1, 15) the wordmark is white; the horizontal rule is omitted `[Observed]`

### Rotated Section Heading
- **Purpose:** Primary slide title — the deck's signature element
- **Anatomy:** Large serif italic text rotated 90° CCW + optional small uppercase sans-serif sub-label (rotated the same direction or vertical)
- **Visual Specs:** Text in `text.primary` (light bg) or `text.onDark` (dark bg). No background fill, no container
- **Typography:** `heading.rotated` for the main heading; `heading.rotatedLabel` for the sub-label
- **Placement Rules:** Left ~5% from left edge, vertically centered in the left ~20–30% column. Text reads bottom-to-top. Sub-label positioned just to the right of the main heading, also rotated
- **Variations:** Some slides (4, 11) have the heading slightly larger; slides 12, 13 omit the sub-label `[Observed]`

### Large Decorative Circle / Semicircle
- **Purpose:** Bold geometric accent — purely decorative or used to frame icon content
- **Anatomy:** Solid `bg.dark` blue circle, often cropped so only a semicircle is visible (cut at the slide edge or column edge)
- **Visual Specs:** Fill `#2B4AC7`, no border, no shadow. Diameter ~50–60% of slide height
- **Typography:** N/A (no text inside, except occasional icon)
- **Placement Rules:** Left edge of slide (slides 2, 3, 14), occasionally overlapping content columns. On slide 3, two semicircles appear side by side
- **Variations:** On slide 2, a right-pointing arrow (white, outline) sits inside the circle. On slide 14, two circles side-by-side with white outline icons inside. On slide 3, one contains a checkmark icon `[Observed]`

### Donut / Ring Chart
- **Purpose:** Display a single KPI percentage value
- **Anatomy:** Circular ring with `text.onDark` (white) stroke for the main arc + `accent.1` (pink/coral) stroke for a small progress indicator segment. Percentage number centered inside the ring. Descriptive label below
- **Visual Specs:** Ring stroke ~8–10px, outer diameter ~80–100px equivalent (~10–13% of slide height). Background of ring area: transparent on blue panels, white on light backgrounds. Small pink arc segment at the 12-o'clock position
- **Typography:** `number.donut` for the percentage; `caption` for the label below
- **Placement Rules:** Centered within their column/panel. Appear in vertical stacks (slides 7, 9) or horizontal rows (slides 4, 11)
- **Variations:** On slide 4, rings appear inside large blue filled circles (stat tiles). On slides 7, 9, 11, rings float inside a blue panel or stand alone against the light background `[Observed]`

### Stat Tile (Large Blue Circle)
- **Purpose:** Present a single key metric inside a prominent circular container
- **Anatomy:** Large solid blue circle + donut chart or text content centered inside + label text below the circle
- **Visual Specs:** Circle fill `bg.dark`, diameter ~25–30% of slide height. Text inside in `text.onDark`
- **Typography:** `number.donut` or `body` for the value inside; `caption` for the label below
- **Placement Rules:** Arranged in a 2×2 grid (slide 4) in the right ~60% of the slide
- **Variations:** Some circles contain donut charts (top row, slide 4), others contain only text metrics (bottom row, slide 4) `[Observed]`

### Icon + Label Row
- **Purpose:** Present a list of items with visual anchors (risk items, recommendations, action items)
- **Anatomy:** Blue filled circle (~40–48px diameter) containing a white outline icon + 1–2 lines of sans-serif text to the right
- **Visual Specs:** Circle fill `bg.dark`, icon stroke `text.onDark` at ~2px weight. Text in `text.primary`
- **Typography:** `body` for the label text
- **Placement Rules:** Vertically stacked with ~24–32px gap between rows. Positioned in the right ~40–50% of the slide. A thin vertical divider line runs alongside the stack (to its left)
- **Variations:** Slides 12, 13 use 4–5 stacked items. Icon subjects vary (gear, signal, cloud, trending-up, person) `[Observed]`

### Bulleted List
- **Purpose:** Present multiple points in a concise list format
- **Anatomy:** Small filled blue circle bullet (~6px diameter) or simple `•` character + body text
- **Visual Specs:** Bullet in `text.primary` color. Indent from bullet to text ~16px. Line spacing ~1.5
- **Typography:** `body` for list items
- **Placement Rules:** Left-aligned within their content column, typically in the right 60–70% of the slide
- **Variations:** Slides 5, 7, 8, 9, 10 use bullet lists. Some use larger solid dots (slide 5), others use a simpler `•` or `·` character `[Observed]`

### Outcome Panel (Arch-top Column)
- **Purpose:** Display scenario outcomes — KPI donut charts plus supporting text
- **Anatomy:** Tall, narrow column with a rounded/arch top (stadium shape) filled with `bg.dark`, containing vertically stacked donut charts, text metrics, and thin horizontal divider lines
- **Visual Specs:** Fill `bg.dark`. Width ~18–20% of slide width. Height ~75% of slide height. Top corners rounded into a semicircular arch. Internal dividers in `border` color (semi-transparent white)
- **Typography:** `heading.sub` for "Outcomes" label at top; `number.donut` for percentages; `caption` for metric descriptions
- **Placement Rules:** Positioned in the center-right area of scenario slides (slides 7, 9), approximately 50–70% from left
- **Variations:** Content inside varies (2 donut charts + text metrics on slide 7; 2 donuts + text on slide 9). Always blue-filled `[Observed]`

### Comparison Table
- **Purpose:** Side-by-side comparison of metrics across multiple scenarios
- **Anatomy:** Column headers (serif italic) with thick blue horizontal bars beneath + alternating metric rows with donut charts and plain text values, separated by thin horizontal rules
- **Visual Specs:** Header bars in `border.dark` (`#2B4AC7`), ~6px tall. Row dividers in `border` color, ~1px. No cell backgrounds — open/airy table structure
- **Typography:** `heading.sub` for column headers; `body.bold` (italic) for row labels; `number.donut` for percentage values; `body` for text values
- **Placement Rules:** Occupies the right ~70% of the slide (slide 11), with the rotated heading in the left 30%
- **Variations:** Only one instance observed (slide 11). Rows alternate between donut-chart values and plain-text values `[Observed]`

### Vertical Divider Line
- **Purpose:** Separate content columns or sections
- **Anatomy:** Single thin vertical line
- **Visual Specs:** Color `border` (`#B8C4DA`), weight ~1px, height spanning ~60–90% of slide height
- **Typography:** N/A
- **Placement Rules:** Positioned between content columns — after the rotated heading column (~28–30% from left), and sometimes between sub-columns within the content area
- **Variations:** Always the same weight and color. Sometimes full-height, sometimes partial `[Observed]`

### Horizontal Top Rule
- **Purpose:** Persistent structural element separating the brand header from slide content
- **Anatomy:** Full-width horizontal line
- **Visual Specs:** Color `border` (`#B8C4DA`), weight ~1px, full slide width
- **Typography:** N/A
- **Placement Rules:** At ~7% from top of slide, just below the `[Brand]` wordmark. Present on all interior slides (2–14)
- **Variations:** None — consistent across all interior slides `[Observed]`

### Image Frame
- **Purpose:** Contain a photograph within the slide layout
- **Anatomy:** Rectangular photograph with thin white border/spacing, slightly inset from the content area
- **Visual Specs:** Sharp corners (0px radius). Thin white margin (~4–6px) around the photo creating a "print" or "mounted" look against the light background. No drop shadow
- **Typography:** N/A
- **Placement Rules:** Centered horizontally within its content column (center of the 3-column area). Roughly occupying ~25–30% of slide width and ~50–55% of slide height
- **Variations:** Slides 5, 8, 10 use this component. Photo subjects differ but frame treatment is identical `[Observed]`

### Footer Bar (Title Slide Only)
- **Purpose:** Display date and URL on the title slide
- **Anatomy:** Two text elements — `[Date]` bottom-left and `[URL]` bottom-right — separated by a thin horizontal rule above
- **Visual Specs:** Text in `text.onDark` (white), horizontal rule in semi-transparent white
- **Typography:** `label` for both date and URL
- **Placement Rules:** Bottom ~5% of slide, full width, only on slide 1
- **Variations:** None observed; only appears once `[Observed]`

### Brand Sidebar (Title Slide Only)
- **Purpose:** Display the brand name vertically on the title slide
- **Anatomy:** Brand name text rotated 90° CCW with wide letter-spacing, positioned in the left panel
- **Visual Specs:** Text in `text.onDark`, uppercase, wide letter-spacing (~0.3em)
- **Typography:** `label` style, uppercase, spaced
- **Placement Rules:** Left ~3% from edge, vertically centered in the left panel area (slide 1 only)
- **Variations:** None `[Observed]`

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Prevalence:** 3 of 15 slides contain photographs (slides 5, 8, 10). Ratio: **20% — minimal / photo-sparse**. `[Observed]`
- **Placement patterns:** Photos appear in the center column of a 3-zone layout (rotated heading left, photo center, text/bullets right). Roughly centered horizontally between the rotated heading column and the right text column. `[Observed]`
- **Scale:** Photos occupy ~25–30% of slide width and ~50–55% of slide height — classified as **significant (25–50%)**. `[Observed]`
- **Subject matter:** Abstract/conceptual — a hand writing on sticky notes (slide 5), an AI-rendered brain visualization (slide 8), a hand holding a lightbulb (slide 10). No portraits, team photos, or product screenshots. `[Observed]`
- **Cropping conventions:** Contained rectangular crop, sharp corners, with a thin white border creating a "print" effect. Never full-bleed, never circular, never masked to custom shape. `[Observed]`
- **Color treatment:** Photos retain natural color — no desaturation, duotone, or heavy grading. The brain image (slide 8) has a cool purple/blue tone that harmonizes with the deck palette. The lightbulb image (slide 10) has a warm coral/teal gradient sky. `[Observed]`
- **Overlay usage:** None — no tint, no gradient overlay on photos. `[Observed]`
- **When photos are used vs. avoided:** Photos appear only on "Strategic Actions" slides (slides 8, 10) and the "Key Drivers" slide (slide 5). All other slide types (title, TOC, goal, data, framework, scenario, table, icon-list, closing) are photo-free. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon style:** Medium-weight outline / line icons inside solid blue filled circles. `[Observed]` (slides 3, 12, 13, 14)
- **Line weight:** ~2px stroke. `[Observed]`
- **Corner style:** Rounded line caps and joins. `[Observed]`
- **Color usage:** Monochrome — white icon strokes on `bg.dark` blue circle background. Exception: slide 14 has one icon with a pink/coral stroke (`accent.1`). `[Observed]`
- **Size relative to text:** Icon circles are ~40–48px diameter (~5–6% of slide height), roughly matching 2 lines of body text height. `[Observed]`
- **Icon subjects observed:** Gear/settings, signal/broadcast, cloud, trending-up chart, person/user, globe/network, clipboard/document, lightbulb, checkmark, arrow (right-pointing, on slide 2). `[Observed]`
- **Illustration style:** No illustrations other than the 3D fluid-wave artwork on slides 1 and 15, which functions as a decorative background rather than an illustration. `[Observed]`

### 5.3 Decorative Elements

- **Large solid blue circles/semicircles:** The primary decorative motif. Appear prominently on slides 2, 3, 14. Solid `bg.dark` fill, cropped at slide edges to create semicircles. Diameter ~50–65% of slide height. `[Observed]`
- **Fluid-wave 3D artwork:** A glossy, abstract fluid shape in deep blue gradients occupies the left ~35–40% of slides 1 and 15. Resembles folded silk or fluid dynamics render. `[Observed]`
- **Thick horizontal bars:** Solid blue rectangles (~6px tall, ~20% wide) used as visual separators in the framework grid (slide 6) and comparison table headers (slide 11). `[Observed]`
- **Prominence:** Decorative shapes are bold and large when present, but used sparingly — only 4–5 of 15 slides feature prominent decorative elements. They are background elements, never overlapping text. `[Observed]`
- **No patterns/textures:** The deck uses no background patterns, noise, grain, dots, or geometric textures. Backgrounds are flat solid colors. `[Observed]`

### 5.4 Data Visualization

**Donut / Ring Chart** (observed on slides 4, 7, 9, 11)

- **Chart type:** Donut/ring — a single-value radial progress indicator, not a multi-segment pie chart. `[Observed]`
- **Series colors:** Main arc in white (`#FFFFFF`) or `bg.dark` blue outline. Progress indicator arc segment in `accent.1` (`#E8708A` pink/coral), positioned at approximately 12-o'clock (top). `[Observed]`
- **Ring proportions:** Outer ring stroke ~8–10px. Inner void ~60–65% of outer diameter. `[Observed]`
- **Axis/gridline:** None — these are standalone ring charts, not embedded in axis-based coordinate systems. `[Observed]`
- **Label typography:** Center value uses `number.donut` (sans-serif semibold, ~3–4% height). Description text below uses `caption`. `[Observed]`
- **Emphasis technique:** The small pink arc is the emphasis — it draws attention to the metric's position/gap. On slides where the ring is on a dark background, the white ring dominates and the pink highlights the "remainder." `[Observed]`
- **Context:** Donut charts appear inside blue stat tiles (slide 4), inside arch-top outcome panels (slides 7, 9), and inline within a comparison table (slide 11). `[Observed]`

---

## 6. Slide Template Catalog

### Template 1: Title / Cover Slide

- **When to use:** Opening slide of the deck — sets the tone, presents the deck title
- **Observed on:** Slide 1
- **Placement map:**
  - Fluid-wave decorative panel: 0% from left, 0% from top, ~38% wide, 100% tall
  - `[Brand]` vertical sidebar text: ~2% from left, centered vertically in left panel
  - `[Logo]` placeholder: ~5% from left, ~5% from top
  - Headline block: ~45% from left, ~20% from top, ~50% wide, ~65% tall
  - Footer rule: 0% from left, ~88% from top, 100% wide
  - `[Date]`: ~5% from left, ~92% from top
  - `[URL]`: ~75% from left, ~92% from top
- **Text style mapping:** `heading.hero` (Playfair Display Italic) for the title; `label` for date, URL, and vertical brand name; `brand.wordmark` for logo
- **Color token mapping:** Background: `bg.dark` + gradient artwork. Text: `text.onDark`. Footer rule: semi-transparent white
- **Components used:** Brand Sidebar, Footer Bar
- **Variation rules:** Title text can reflow to 2–5 lines. The fluid-wave panel is always on the left. Can omit date/URL for simpler versions

### Template 2: Table of Contents

- **When to use:** Navigation / agenda slide listing all sections with page numbers
- **Observed on:** Slide 2
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Large blue semicircle (decorative): 0% from left, ~25% from top, ~15% wide, ~65% tall (cropped at left edge)
  - "Table of Contents" heading: ~35% from left, ~12% from top, ~55% wide
  - TOC grid: ~22% from left, ~40% from top, ~75% wide, ~50% tall (arranged in 5-column × 2-row grid)
  - Each TOC entry: Large serif italic number + small sans-serif description below
- **Text style mapping:** `heading.section` for "Table of Contents" heading; `tocNumber` for page numbers (serif italic); `caption` for section descriptions
- **Color token mapping:** Background: `bg.primary`. Text: `text.primary`. Circle: `bg.dark`
- **Components used:** Title Header Block, Large Decorative Circle, Horizontal Top Rule
- **Variation rules:** Grid can adjust to accommodate more or fewer sections. Semicircle + arrow is a fixed decorative element. Numbers should always be in italic serif

### Template 3: Goal / Statement Slide

- **When to use:** Present a singular goal, mission statement, or key message with decorative emphasis
- **Observed on:** Slide 3
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - "Goal" heading: ~75% from left, ~10% from top, ~20% wide
  - Three-column zone (below rule): evenly divided into thirds
    - Left third (0–33%): Text paragraph + half-circle cropped at left edge
    - Center third (33–66%): Large blue circle with checkmark icon
    - Right third (66–100%): Text paragraph
  - Thin vertical dividers at ~33% and ~66% from left
- **Text style mapping:** `heading.section` for "Goal"; `body` for supporting paragraphs
- **Color token mapping:** Background: `bg.primary`. Text: `text.primary`. Circles: `bg.dark`. Icon: `text.onDark`
- **Components used:** Title Header Block, Large Decorative Circle, Vertical Divider Line, Horizontal Top Rule
- **Variation rules:** The central circle can contain different icons. Text blocks can vary in length. Heading position can shift but stays in upper-right area

### Template 4: KPI / Stats Dashboard

- **When to use:** Display 2–4 key business metrics with prominent numbers, optionally with donut charts
- **Observed on:** Slide 4
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Info bar (bold labels + descriptions): ~30% from left, ~10% from top, ~65% wide, ~15% tall
  - Rotated heading: ~3% from left, vertically centered, ~22% wide
  - Stat tiles (2×2 grid of blue circles): ~40% from left, ~35% from top, ~55% wide, ~60% tall
- **Text style mapping:** `heading.rotated` for slide title; `body.bold` for info labels (e.g., "CORE PRODUCT:"); `body` for info values; `number.donut` inside circles; `caption` below circles
- **Color token mapping:** Background: `bg.primary`. Stat circles: `bg.dark`. Text inside circles: `text.onDark`. Donut accents: `accent.1`
- **Components used:** Title Header Block, Rotated Section Heading, Stat Tile, Donut Chart, Horizontal Top Rule
- **Variation rules:** Can display 2, 3, or 4 stat tiles. Tiles can contain donut charts or plain text metrics. The info bar at top is optional

### Template 5: Key Drivers / Category List with Photo

- **When to use:** Present 2–4 categorized information blocks with bullet points, anchored by a photograph
- **Observed on:** Slide 5
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Rotated heading: ~3% from left, ~55% from top, ~25% wide
  - Photo frame: ~8% from left, ~10% from top, ~30% wide, ~45% tall
  - Vertical divider: ~50% from left
  - Category blocks (3 stacked): ~50% from left, ~8% from top, ~48% wide, ~85% tall
    - Each: Serif italic sub-heading + bullet points to the right, with filled circle bullets along the vertical divider
- **Text style mapping:** `heading.rotated` for slide title; `heading.sub` for category names (italic serif); `body` for bullet text
- **Color token mapping:** Background: `bg.primary`. Text: `text.primary`. Bullets: `bg.dark`. Photo frame border: white
- **Components used:** Title Header Block, Rotated Section Heading, Image Frame, Bulleted List, Vertical Divider Line, Horizontal Top Rule
- **Variation rules:** Number of categories can vary (2–4). Photo can be omitted for a text-only variant. Categories are separated by vertical space, not horizontal rules

### Template 6: Framework / Process Grid

- **When to use:** Present a multi-column framework, process stages, or comparison categories with structured rows
- **Observed on:** Slide 6
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Large centered heading: ~10% from left, ~12% from top, ~80% wide, ~18% tall
  - 4-column grid: ~5% from left, ~40% from top, ~90% wide, ~55% tall
    - Each column: serif italic number ("01"–"04") + thick blue bar + serif italic sub-heading + thin rule + body text row + body text row
  - Thin vertical dividers between columns
- **Text style mapping:** `heading.section` for the main heading; `tocNumber` for column numbers; `heading.sub` for column headings; `body` for row text
- **Color token mapping:** Background: `bg.primary`. Text: `text.primary`. Thick bars: `border.dark`. Dividers: `border`
- **Components used:** Title Header Block, Vertical Divider Line, Horizontal Top Rule
- **Variation rules:** Can accommodate 3–5 columns. Row count can vary. The thick blue bars are a required element for the framework pattern

### Template 7: Scenario Detail (Rotated Title + Outcome Panel + Bullets)

- **When to use:** Present a scenario analysis with assumptions, quantitative outcomes, and strategic focus areas
- **Observed on:** Slides 7, 9
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Rotated heading (scenario name in quotes): ~3% from left, vertically centered, ~18% wide
  - Rotated sub-label (e.g., "SCENARIO 1"): ~19% from left, vertically centered
  - Vertical divider: ~25% from left
  - "Assumptions" column: ~27% from left, ~25% from top, ~22% wide
    - Serif italic sub-heading + bullet list
  - Outcome panel (arch-top blue column): ~50% from left, ~7% from top, ~20% wide, ~90% tall
    - "Outcomes" heading + donut charts + text metrics + dividers
  - "Strategic Focus" column: ~72% from left, ~20% from top, ~25% wide
    - Serif italic sub-heading + bullet list
- **Text style mapping:** `heading.rotated` for scenario name; `heading.rotatedLabel` for scenario number; `heading.sub` for sub-headings; `body` for bullet text; `number.donut` for donut values; `caption` for metric labels
- **Color token mapping:** Background: `bg.primary`. Outcome panel: `bg.dark`. Text in panel: `text.onDark`. Donut accent: `accent.1`
- **Components used:** Title Header Block, Rotated Section Heading, Outcome Panel, Donut Chart, Bulleted List, Vertical Divider Line, Horizontal Top Rule
- **Variation rules:** The outcome panel always appears. Assumption and Focus lists can vary in length. Donut count inside the panel can be 1–3

### Template 8: Strategic Actions (Rotated Title + Photo + Bullets)

- **When to use:** Present a list of action items or strategic initiatives alongside an illustrative image
- **Observed on:** Slides 8, 10
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Rotated heading: ~3% from left, ~50% from top, ~18% wide
  - Rotated sub-label (e.g., "SCENARIO 1"): ~3% from left, ~35% from top
  - Vertical divider: ~28% from left
  - Photo frame: ~35% from left, ~15% from top, ~28% wide, ~65% tall
  - Bullet list: ~68% from left, ~18% from top, ~28% wide
- **Text style mapping:** `heading.rotated` for slide title; `heading.rotatedLabel` for sub-label; `body` for bullet text
- **Color token mapping:** Background: `bg.primary`. Text: `text.primary`. Photo frame: white border
- **Components used:** Title Header Block, Rotated Section Heading, Image Frame, Bulleted List, Vertical Divider Line, Horizontal Top Rule
- **Variation rules:** Photo subject varies. Bullet count can be 3–6 items. The rotated heading can adapt to different-length titles

### Template 9: Comparison Table (Rotated Title + Data Grid)

- **When to use:** Side-by-side numerical/metric comparison across 2–4 scenarios or options
- **Observed on:** Slide 11
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Rotated heading: ~3% from left, vertically centered, ~22% wide
  - Rotated sub-label: ~20% from left, vertically centered
  - Table: ~32% from left, ~15% from top, ~65% wide, ~80% tall
    - Header row with thick blue bars
    - 5 data rows with thin dividers, alternating between donut charts and plain text
- **Text style mapping:** `heading.rotated` for title; `heading.rotatedLabel` for sub-label; `heading.sub` for column headers; `body` for row labels; `number.donut` for donut values; `body` for text values
- **Color token mapping:** Background: `bg.primary`. Header bars: `border.dark`. Dividers: `border`. Donut rings: `text.primary` with `accent.1` highlight
- **Components used:** Title Header Block, Rotated Section Heading, Comparison Table, Donut Chart, Horizontal Top Rule
- **Variation rules:** Column count can be 2–4. Row count can be 3–6. Not every row needs a donut — text-only rows are acceptable

### Template 10: Icon List (Rotated Title + Vertical Icon Stack)

- **When to use:** Present 3–6 items as an icon-anchored list (risks, recommendations, features, next steps)
- **Observed on:** Slides 12, 13
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Horizontal top rule: 0% from left, ~7% from top, 100% wide
  - Rotated heading: ~3% from left, ~50% from top, ~40% wide
  - Vertical divider: ~62% from left (acts as the icon-stack's left edge reference)
  - Icon + label stack: ~64% from left, ~8% from top, ~33% wide
    - 4–5 rows, each with blue circle icon + 1–2 lines body text
- **Text style mapping:** `heading.rotated` for title; `body` for item labels
- **Color token mapping:** Background: `bg.primary`. Icon circles: `bg.dark`. Icon strokes: `text.onDark`. Text: `text.primary`
- **Components used:** Title Header Block, Rotated Section Heading, Icon + Label Row, Vertical Divider Line, Horizontal Top Rule
- **Variation rules:** 3–6 icon items. Icon subjects should be relevant to content. The rotated heading can span 1–3 lines

### Template 11: Q&A / Discussion Slide

- **When to use:** "Any Questions?" or discussion prompt slide — near the end of the deck
- **Observed on:** Slide 14
- **Placement map:**
  - `[Brand]` wordmark: ~5% from left, ~3% from top
  - Vertical divider: ~33% from left (full height)
  - Two large blue semicircles: left one ~0–20% from left, right one ~20–40% from left (overlapping at divider)
    - Left circle: contains pink/coral outline icon
    - Right circle: contains white outline icon (lightbulb)
  - Heading "Any Questions?": ~55% from left, ~30% from top, ~40% wide
- **Text style mapping:** `heading.hero` for the question text (Playfair Display Italic, very large)
- **Color token mapping:** Background: `bg.primary`. Circles: `bg.dark`. Icons: `text.onDark` + `accent.1`. Text: `text.primary`
- **Components used:** Large Decorative Circle, Vertical Divider Line
- **Variation rules:** The two circles + icons are fixed decorative elements. Heading text can change. Can add a sub-line with contact information below the heading

### Template 12: Closing / Thank You Slide

- **When to use:** Final slide — closing message, thank-you, or sign-off
- **Observed on:** Slide 15
- **Placement map:**
  - Fluid-wave decorative panel: 0% from left, 0% from top, ~38% wide, 100% tall
  - `[Brand]` wordmark: ~5% from left, ~5% from top (white on dark)
  - "Thank You" heading: ~50% from left, ~35% from top, ~45% wide, ~30% tall
  - Flat blue panel: ~38% from left, 0% from top, ~62% wide, 100% tall
- **Text style mapping:** `heading.hero` (Playfair Display Italic, very large, white)
- **Color token mapping:** Background: `bg.dark` + gradient artwork. Text: `text.onDark`
- **Components used:** Brand Sidebar (wordmark only, not rotated)
- **Variation rules:** Can swap "Thank You" for other closing messages. Can add contact info, social links, or URL below the heading. The fluid-wave panel mirrors slide 1

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules)

1. **Always use Playfair Display Italic (or closest serif italic) for all headings** — this is the single most recognizable element of the theme. `[Observed]`
2. **Always use Inter (or similar geometric sans-serif) for body text and labels** — never mix a second serif or a humanist sans. `[Observed]`
3. **Maintain the blue monochrome palette** — all text, shapes, and fills should use variations of `#2B4AC7`. Pink/coral (`#E8708A`) is the only allowed accent and should be used sparingly (donut chart highlights, occasional icon stroke). `[Observed]`
4. **Include the horizontal top rule on every interior slide** — it establishes the structural rhythm of the deck. `[Observed]`
5. **Use the rotated heading pattern on content-heavy slides** — large serif italic title rotated 90° CCW in the left 20–30%. This is the deck's design signature. `[Observed]`
6. **Keep corners sharp (0px radius)** — rectangles, image frames, bars, and table cells all have hard edges. Only circles and the arch-top panel break this rule. `[Observed]`
7. **Maintain generous white space** — aim for information density ≤2/5. One main idea per slide. `[Observed]`
8. **Use thin divider lines (1px, light blue-grey) to separate content zones** — not background fills, cards, or thick borders. `[Observed]`
9. **Reserve dark blue backgrounds for bookend slides (title, closing) and specific data panels** — never for general content slides. `[Observed]`
10. **Size headings dramatically larger than body text** — a 5:1 to 8:1 ratio between heading and body font size is standard in this deck. `[Observed]`
11. **Place the `[Brand]` wordmark consistently at top-left of every slide.** `[Observed]`
12. **Use solid blue filled circles as decorative shapes** — not outlined circles, not gradient fills, not rounded rectangles. `[Observed]`

### ❌ DON'T (aesthetic-breaking anti-patterns)

1. **Never use a sans-serif for headings** — this instantly destroys the editorial character. `[Observed]`
2. **Never apply drop shadows, glows, or box shadows** to any element — the deck is completely shadow-free. `[Observed]`
3. **Never use rounded corners on rectangles** — no border-radius on cards, image frames, or containers. `[Observed]`
4. **Never introduce a third color family** (green, orange, yellow, purple) beyond blue and pink/coral. `[Observed]`
5. **Never use full-bleed photographs** — photos are always contained in rectangular frames, never edge-to-edge. `[Observed]`
6. **Never center body text paragraphs** — body copy is left-aligned within its column. Only the largest headings on centered slides (2, 6) are center-aligned. `[Observed]`
7. **Never use gradient fills on text** — text is always solid-colored (`text.primary` or `text.onDark`). `[Observed]`
8. **Never crowd the slide with more than 2 content zones + the rotated heading** — the layout should never feel dense. `[Observed]`
9. **Never use patterned or textured backgrounds** on interior slides — they should be flat `#E8EDF4`. `[Observed]`
10. **Never use upright (roman) serif text for headings** — headings must always be italic. The italic is intrinsic to the aesthetic. `[Observed]`
11. **Never use more than one photograph per slide** — and only on designated photo-bearing templates. `[Observed]`
12. **Never omit the rotated heading on slides that use the 30/70 layout** — it defines the template structure. `[Observed]`

---

## 8. Reproduction Checklist

- [ ] **Slide dimensions:** 1366 × 768 px (16:9 aspect ratio)
- [ ] **Background:** Use `#E8EDF4` for all interior slides; `#2B4AC7` (+ gradient artwork) for title and closing slides only
- [ ] **Font loading:** Load Playfair Display (Italic 400) and Inter (Regular 400, SemiBold 600) from Google Fonts
- [ ] **Headings:** All headings use Playfair Display Italic — never roman, never sans-serif
- [ ] **Body text:** All body, labels, and data text use Inter — regular weight, left-aligned
- [ ] **Color discipline:** Only two hue families — blue (`#2B4AC7` and tints) and pink/coral (`#E8708A`) — are allowed. Pink appears only in donut chart accents and rare icon strokes
- [ ] **Top rule:** Every interior slide has a full-width horizontal rule at ~7% from top in `#B8C4DA`
- [ ] **Brand placement:** `[Brand]` wordmark at ~5% from left, ~3% from top on every slide
- [ ] **Rotated headings:** On content slides, place the title in large Playfair Display Italic, rotated 90° CCW, in the left 20–30% column
- [ ] **Vertical dividers:** Use 1px `#B8C4DA` vertical lines to separate content columns
- [ ] **Sharp corners only:** All rectangular elements (frames, bars, containers) use 0px border radius
- [ ] **No shadows:** Zero drop shadows, box shadows, or glow effects anywhere
- [ ] **White space:** Maintain ≥5% margins from all slide edges; leave generous breathing room between elements
- [ ] **Photography:** Use sparingly (≤20% of slides). Contained in rectangular frames with white border. Never full-bleed
- [ ] **Donut charts:** White or blue ring with small pink arc at 12-o'clock. Percentage centered inside. Label below
- [ ] **Icons:** White outline icons inside solid blue circles (~40–48px diameter). Medium stroke weight (~2px)
- [ ] **Decorative circles:** Large solid `#2B4AC7` circles/semicircles — used boldly but not on every slide. Cropped at slide edges
- [ ] **Type scale:** Heading-to-body size ratio should be 5:1 to 8:1. Headings are dramatically larger
- [ ] **Bullet style:** Small filled blue circles or simple dots. Consistent indent ~16px
- [ ] **Number formatting:** Percentages with `%` suffix, currency with `$` prefix and `M` suffix, thousands with comma separators
- [ ] **Template selection:** Match content type to template — use Scenario Detail for analyses, Icon List for enumerations, KPI Dashboard for metrics, etc.
- [ ] **Consistency check:** Before finalizing, verify that every slide has the top rule, brand wordmark, correct background color, and consistent font usage
- [ ] **Dark/light mode:** Only title, closing, and specific data panels (outcome columns) use dark blue backgrounds. Everything else is light

---

## 9. Background/Texture Generation Prompt

> Create an abstract 3D fluid-wave sculpture rendered in deep cobalt blue (#2B4AC7) to midnight blue (#1E3299) tones, against a matching solid blue background. The form should resemble folded silk or slow-moving viscous fluid with smooth, glossy specular highlights in lighter blue and subtle white reflections. The shape should be organic and flowing, occupying roughly 60% of the frame, positioned left-of-center. The overall mood should be luxurious, calm, and corporate — like a detail from a premium annual report cover. No text, no people, no objects. The lighting should be soft and diffused, creating gentle gradients across the surface. Output in 16:9 aspect ratio at high resolution with a slight depth-of-field blur on the edges.

---

## 10. Uncertainties & Open Questions

### Confirmed Uncertainties

1. **Exact font identification:** While Playfair Display Italic is a very strong match for the serif headings (high-contrast strokes, elegant italic forms), the actual font could be a premium typeface like *Didot*, *Bodoni*, *Freight Display*, or *Noe Display*. Without source file access, this remains `[Inferred – high confidence]`. The sans-serif is almost certainly Inter or a near-identical geometric sans (Poppins, DM Sans).

2. **Exact hex values:** Colors were estimated from JPEG screenshots. JPEG compression and monitor calibration mean the primary blue could range from `#2844C0` to `#3350B8`. The pink/coral accent could range from `#E06880` to `#F07090`. The background ice-blue could be `#E5EAF2` to `#EBF0F6`. All marked `[Inferred]`.

3. **Fluid-wave artwork origin:** The 3D abstract background on slides 1 and 15 could be a stock asset, a custom Cinema4D/Blender render, or generated by AI. Its exact reproduction would require an image-generation tool or the original asset file.

4. **Animation/transitions:** Static screenshots reveal nothing about slide transitions, entrance animations, or hover states. The editorial aesthetic suggests minimal/no animations (simple cuts or subtle fades). `[Inferred – medium confidence]`

5. **Exact spacing values:** All spatial measurements are approximated from pixel analysis of JPEG screenshots. An 8px base grid is inferred from the consistent alignment patterns but cannot be confirmed without source files.

### Questions That Would Improve Reproduction Fidelity

1. **What is the exact heading typeface?** If it's a premium font (e.g., Freight Display, Noe Display, Canela), knowing the exact name would dramatically improve fidelity. Is Playfair Display Italic acceptable as the Google Fonts substitute?

2. **Was this created in PowerPoint, Keynote, or Google Slides?** Knowing the source application would clarify spacing grids, master-slide behavior, and export settings.

3. **Is the fluid-wave 3D artwork a reusable asset (SVG/PNG)?** If so, providing the file would eliminate the need to regenerate it and ensure pixel-perfect bookend slides.

4. **Are there any additional slides or alternate layouts** not included in these 15 that would reveal more templates (e.g., a team/profile grid, a timeline, a full-bleed image slide)?

5. **Is the pink/coral accent color a deliberate brand accent or incidental?** It appears only in donut chart indicators and one icon stroke — confirming whether it's a required brand color or simply a chart default would clarify its usage rules.
