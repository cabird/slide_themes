# Blue-Purple Gradient Corporate — Theme Guide

> **Theme Name:** `blue-purple-gradient-corporate`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Polished, Gradient-Forward, Corporate
- **Visual Personality:** Modern corporate with a confident, clean edge. Sits between minimalism and editorial — generous white space on content slides, bold gradient statements on feature slides. Not playful, not brutalist — refined and intentional. `[Observed]`
- **Mood & Emotion:** Professional trust and quiet authority. The blue-to-purple gradient conveys innovation without being flashy; the restrained white content slides signal clarity and competence. `[Observed]`
- **Design References:** Echoes the SaaS/fintech presentation language of 2022–2024 — clean geometric sans-serif type, gradient accent panels, flat data layouts. Comparable to Stripe or Linear brand aesthetics applied to slide decks. `[Inferred – high confidence]`
- **Information Density:** 3 / 5 — Balanced. Content slides carry a moderate amount of information but never feel crowded. Generous margins and clear hierarchy prevent visual overload. `[Observed]`
- **Polish Level:** 4.5 / 5 — High-fidelity, production-quality deck. Consistent spacing, cohesive color application, and professional typography throughout. `[Observed]`
- **Shape Language:** Geometric and sharp. No organic blobs, rounded decorative shapes, or free-form illustrations. All visual elements follow rectangular and linear geometry. `[Observed]`

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage | Source |
|---|---|---|---|
| `bg.primary` | `#FFFFFF` | Main slide background for all content slides | `[Observed]` |
| `bg.secondary` | `#F8F9FA` | Alternate panel background (right side of split layouts, subtle card fills) | `[Observed]` |
| `bg.gradient.start` | `#5B6BF0` | Left/starting color of the hero gradient | `[Observed]` |
| `bg.gradient.end` | `#8B5CF6` | Right/ending color of the hero gradient | `[Observed]` |
| `text.primary` | `#1E293B` | Main body text on light backgrounds | `[Inferred – high confidence]` |
| `text.secondary` | `#64748B` | Muted/supporting text, captions, labels | `[Inferred – high confidence]` |
| `text.heading` | `#0F172A` | Heading text on light backgrounds (slightly darker than body) | `[Inferred – medium confidence]` |
| `text.on-gradient` | `#FFFFFF` | All text placed on gradient backgrounds | `[Observed]` |
| `accent.1` | `#5B6BF0` | Primary accent — used for key numbers, active states, emphasis | `[Observed]` |
| `accent.2` | `#8B5CF6` | Secondary accent — used alongside accent.1 in gradient contexts | `[Observed]` |
| `accent.3` | `#7C3AED` | Midpoint accent for single-color emphasis when gradient is not used | `[Inferred – medium confidence]` |
| `border` | `#E2E8F0` | Lines, dividers, table separators on light backgrounds | `[Inferred – high confidence]` |
| `border.subtle` | `#CBD5E1` | Dotted/dashed separators (table rows) | `[Inferred – high confidence]` |

**Additional color notes:**

- **Gradient usage:** The primary gradient is a linear gradient flowing **left → right** from `#5B6BF0` (blue) to `#8B5CF6` (purple). It is applied as a full-bleed background on title and closing slides, and as a left-panel background on split-layout slides. `[Observed]`
- **Color relationships:** The palette is **analogous** — blue to purple on the cool spectrum. No warm accent colors are present. The monochromatic text scale (dark navy through slate gray) complements the cool accent tones. `[Observed]`
- **Light mode orientation:** The deck is exclusively light-mode for content slides. The gradient panels serve as the "dark mode" counterpoint, always carrying white text. There is no true dark-mode content slide. `[Observed]`
- **Color shift by slide type:** Title/closing slides → full gradient background with white text. Content slides → white background with dark text. Split slides → gradient left panel + white/light-gray right panel. Feature numbers and KPI values on white slides use `accent.1` or `accent.3` as text color. `[Observed]`

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative to slide height) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Inter | sans-serif | 700 (Bold) | ~8–10% | -0.02em `[Inferred – medium]` | None (sentence/title case) | 1.1 |
| `heading.hero.light` | Inter | sans-serif | 300 (Light) | ~8–10% | -0.02em `[Inferred – medium]` | None | 1.1 |
| `heading.section` | Inter | sans-serif | 600 (Semi-Bold) | ~5–6% | -0.01em `[Inferred – medium]` | None | 1.2 |
| `heading.sub` | Inter | sans-serif | 600 (Semi-Bold) | ~3–4% | 0 | None | 1.3 |
| `body` | Inter | sans-serif | 400 (Regular) | ~2–2.5% | 0 | None | 1.5 |
| `body.bold` | Inter | sans-serif | 600 (Semi-Bold) | ~2–2.5% | 0 | None | 1.5 |
| `caption` | Inter | sans-serif | 400 (Regular) | ~1.5–2% | 0.01em `[Inferred – low]` | None | 1.4 |
| `label` | Inter | sans-serif | 500 (Medium) | ~1.5% | 0.03em `[Inferred – medium]` | Uppercase (on some labels) | 1.2 |
| `number.hero` | Inter | sans-serif | 700 (Bold) | ~10–12% | -0.02em `[Inferred – medium]` | None | 1.0 |
| `table.header` | Inter | sans-serif | 600 (Semi-Bold) | ~1.8–2% | 0 | None | 1.3 |
| `table.cell` | Inter | sans-serif | 400 (Regular) | ~1.5–1.8% | 0 | None | 1.4 |

**Font identification note:** The typeface is a geometric sans-serif with even stroke weight, open apertures, and a neutral x-height. **Inter** is the best Google Fonts match. Alternative candidates include **DM Sans** (slightly softer) and **Poppins** (more geometric, rounder). `[Inferred – high confidence]`

**Additional typography notes:**

- **Mixed-weight hero treatment:** On gradient backgrounds, hero headings use a distinctive **light + bold** combination within a single line or phrase. For example, the first word in a lighter weight (300) and the second word in bold (700), creating visual rhythm and emphasis (observed on slide 7: "Improvement" in light weight + "Opportunities" in bold). This is a signature stylistic choice. `[Observed]`
- **Emphasis methods:** Bold weight change (400 → 600/700); accent color for key numbers/data points; NO underlines, no italic emphasis observed. `[Observed]`
- **Number/data formatting:** Large KPI numbers use `number.hero` style in `accent.1` or `accent.3` color. Percentage signs and units appear in smaller weight alongside the number. `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes | Source |
|---|---|---|---|
| Corner radius | Sharp (0px) to Slight (4px) | Content blocks and panels use sharp corners; cards may have 4px rounding at most | `[Observed]` |
| Borders | Mostly none; dotted/dashed for table rows | No thick borders anywhere. Separation is achieved through spacing and background color shifts, not outlines | `[Observed]` |
| Shadows | None | No drop shadows observed on any element — completely flat design | `[Observed]` |
| Transparency/Opacity | Sparingly | Light opacity may be used on photo overlays within gradient panels, but not prominently | `[Inferred – medium confidence]` |
| Stroke weight | Thin (1px) | Divider lines and table separators are thin (≈1px), never heavy | `[Observed]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred – high confidence]` — all spacing appears to follow an 8px grid (8, 16, 24, 32, 48, 64, 80)
- **Common spacing values:** 8px (tight grouping), 16px (related elements), 24px (subsections), 32px (between content blocks), 48–64px (major section gaps) `[Inferred – high confidence]`
- **Margin from slide edge:** ~8% of slide width on left/right; ~8–10% of slide height on top/bottom `[Observed]`
- **Gap between major content blocks:** ~4–6% of slide height `[Observed]`
- **Gap between related elements** (e.g., icon and label, heading and body): ~1.5–2% of slide height `[Observed]`
- **Column gutter** (in multi-column layouts): ~3–4% of slide width `[Inferred – high confidence]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** The deck uses a flexible grid system with these primary configurations: `[Observed]`
  - **Single column:** Used on title, closing, and text-heavy content slides
  - **2-column (50/50):** Used on split-layout slides (gradient panel + content panel) — observed on slide 7
  - **2-column (asymmetric ~60/40 or 55/45):** Used on some content slides for text + supporting visual
  - **3-column equal:** Used for card grids, KPI/stat blocks, and feature comparisons
  - **Multi-row structured:** Used for tables and list-based layouts
- **Column proportions:** Split layouts are 50/50. Content grids are equal-width columns. Text + sidebar layouts lean ~60/40. `[Observed]`
- **Alignment bias:** Left-aligned on content slides (headings, body text). Centered on hero/closing slides (gradient backgrounds). Table content is center-aligned within columns. `[Observed]`
- **Content safe zone:** 8% from left and right edges, 8–10% from top and bottom edges. On split-layout slides, each panel has its own internal safe zone of ~6–8% from the panel edges. `[Observed]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Large type size + bold weight + position (upper-left on content slides, center on gradient slides). On gradient slides, the white-on-gradient contrast creates maximum emphasis. On content slides, the `text.heading` color with `heading.section` sizing draws the eye first. `[Observed]`
- **Supporting information de-emphasis:** Smaller size, lighter weight (400), muted color (`text.secondary`). Secondary content sits below or to the right of the primary message. `[Observed]`
- **Reading flow pattern:** **F-pattern** on content slides (heading top-left → supporting text flows down-left → secondary content right). **Z-pattern** on split slides (gradient heading top-left → photo bottom-left → table content right). **Center-focused** on title/closing slides. `[Observed]`
- **Section separation:** Achieved primarily through **white space** and **background color shifts** (white vs. gradient vs. light gray). Thin dotted lines separate table rows. No heavy divider lines, colored section bars, or card borders are used to separate content blocks. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** Balanced to airy — leans toward generous spacing. `[Observed]`
- **Where white space is used most generously:** Around hero headings on gradient slides (large padding above and below), between major content sections on white slides, margins from slide edges. `[Observed]`
- **Where elements are grouped tightly:** Within table rows (cells are close together), within KPI blocks (number + label are tight), within icon + text pairings. `[Observed]`

---

## 4. Component Library

> **Title Header Block**
> - **Purpose:** Primary heading for content slides `[Observed]`
> - **Anatomy:** Heading text (1–2 lines), optional subtitle text below
> - **Visual Specs:** No background fill; no border; no shadow. Text sits directly on `bg.primary`
> - **Typography:** `heading.section` for the heading; `body` or `caption` in `text.secondary` for subtitle
> - **Placement Rules:** Top-left of content area, spanning ~60–80% of slide width. Top edge at ~10% from slide top
> - **Variations:** On gradient backgrounds, uses `heading.hero` + `heading.hero.light` mixed-weight style in `text.on-gradient`

> **Gradient Hero Panel**
> - **Purpose:** Full-bleed or half-slide gradient panel for emphasis slides `[Observed]`
> - **Anatomy:** Gradient background fill; heading text; optional subtitle; optional photo region
> - **Visual Specs:** Linear gradient `bg.gradient.start` → `bg.gradient.end` (left → right). Fills entire slide (title/closing) or left 50% (split layouts)
> - **Typography:** `heading.hero` mixed with `heading.hero.light` in `text.on-gradient`
> - **Placement Rules:** Full bleed on slide 1 and slide 12. Left half on split-layout slides
> - **Variations:** With embedded photo (photo in lower ~55% of panel, heading in upper portion); without photo (text centered or upper-left)

> **Split Layout Frame**
> - **Purpose:** Two-panel slide with gradient feature panel and content panel `[Observed – slide 7]`
> - **Anatomy:** Left panel (gradient background + heading + optional photo); right panel (white/light-gray background + structured content like tables or lists)
> - **Visual Specs:** 50/50 width split. Left panel uses gradient fill. Right panel uses `bg.primary` or `bg.secondary`. No visible divider line between panels — the color shift creates separation
> - **Typography:** Left panel: `heading.hero` / `heading.hero.light`. Right panel: `heading.sub` / `body` / `table.*` tokens
> - **Placement Rules:** Panels are edge-to-edge (full bleed) vertically and horizontally
> - **Variations:** Right panel content can be a table, bullet list, or card grid

> **Data Table**
> - **Purpose:** Structured tabular data display `[Observed – slide 7]`
> - **Anatomy:** Column headers (bold), data rows, dotted/dashed horizontal separators between rows. NO vertical lines. NO solid gridlines
> - **Visual Specs:** Headers use `table.header` style in `text.heading` color. Cells use `table.cell` style in `text.primary` color. Row separators are 1px dotted/dashed lines in `border.subtle` color. No cell background fills (transparent). No outer border
> - **Typography:** `table.header` for column labels; `table.cell` for data
> - **Placement Rules:** Typically fills ~80% of the right panel width on split layouts; centered within the panel. ~6% internal padding from panel edges
> - **Variations:** 3-column observed (Focus Area / Initiative / Target); could scale to 2–5 columns

> **KPI / Stat Block**
> - **Purpose:** Display a large key metric or statistic with supporting context `[Observed – slide 3]`
> - **Anatomy:** Large number (hero-sized), unit/label below or beside, brief description text
> - **Visual Specs:** Number uses `number.hero` in `accent.1` or `accent.3` color. Label uses `caption` in `text.secondary`. No border, no card background — floating elements on `bg.primary`
> - **Typography:** `number.hero` for the figure; `caption` or `label` for context
> - **Placement Rules:** Arranged in a horizontal row (2–4 stats across) with equal spacing, or vertically stacked. Centered within the content area
> - **Variations:** With or without supporting description paragraph below the stat

> **Agenda / Numbered List**
> - **Purpose:** Ordered list of topics, agenda items, or sequential steps `[Observed – slides 2, 6]`
> - **Anatomy:** Section heading, numbered items with titles and optional descriptions
> - **Visual Specs:** Numbers use `accent.1` color in `heading.sub` weight. Item titles use `body.bold`. Descriptions use `body` in `text.secondary`. Generous vertical spacing (~3–4% slide height) between items
> - **Typography:** `heading.sub` or custom accent-colored numbers; `body.bold` for item titles; `body` for descriptions
> - **Placement Rules:** Right-aligned column or full-width below a section heading. Left margin aligned with other content
> - **Variations:** Simple numbered list (numbers only) vs. expanded list (number + title + description)

> **Process / Flow Step Indicator**
> - **Purpose:** Show sequential steps in a process or workflow `[Observed – slide 6]`
> - **Anatomy:** Step numbers or icons, step labels, connecting lines or arrows between steps
> - **Visual Specs:** Step indicators use `accent.1` fill with `text.on-gradient` numbers. Connecting elements are thin lines in `border` color. Step labels use `body.bold` below each indicator
> - **Typography:** `label` or `body.bold` for step names; step numbers in bold white on accent circles
> - **Placement Rules:** Horizontally arranged across the slide width, vertically centered or in the upper content area
> - **Variations:** Linear (left → right) or wrapped multi-row for many steps

> **Content Card / Feature Block**
> - **Purpose:** Grouping related content (icon + heading + body) in a grid layout `[Observed – slide 4]`
> - **Anatomy:** Optional icon or small graphic, heading text, body paragraph
> - **Visual Specs:** No visible card border or shadow. Grouping achieved through spacing and alignment. May use `bg.secondary` as a subtle fill on some cards, or remain on `bg.primary` with spacing-only separation
> - **Typography:** `heading.sub` for card heading; `body` for card description
> - **Placement Rules:** Arranged in 2–3 column grids with equal widths and consistent gutters (~3–4% slide width)
> - **Variations:** With icon (icon above heading) or without icon (heading + body only)

> **Divider Line**
> - **Purpose:** Subtle visual separator between content sections `[Observed]`
> - **Anatomy:** Thin horizontal line
> - **Visual Specs:** 1px solid or dotted line in `border` color. Spans ~30–80% of the content area width
> - **Typography:** N/A
> - **Placement Rules:** Between major content sections, horizontally centered or left-aligned with content
> - **Variations:** Solid (section divider) vs. dotted/dashed (table row separator)

> **Photo Frame (Gradient Panel Embed)**
> - **Purpose:** Photographic imagery embedded within a gradient panel `[Observed – slide 7]`
> - **Anatomy:** Rectangular photo, no visible border or frame, may have slight rounded corners (0–4px)
> - **Visual Specs:** Photo fills ~85–90% of panel width, positioned in the lower ~55% of the gradient panel. No overlay tint observed — photo appears at full color/saturation. Edges are sharp or very slightly rounded
> - **Typography:** N/A
> - **Placement Rules:** Only within gradient panels, never on white content slides. Heading text sits above the photo
> - **Variations:** Full-width within panel, or slightly inset with gradient padding visible on sides

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter tendencies:** Business/workplace context — diverse people in office, retail, meeting, and café settings. Professional, approachable, modern workplace scenarios. Subjects include: people using tablets/devices, colleagues in meetings, workers serving customers, teams celebrating, individuals at desks. `[Observed – slides 1–4, 6–12]`
- **Frequency:** Photography is used **extensively** — 11 of 12 slides contain at least one photograph. This deck is image-heavy. The only slide without a photo uses icon-based design instead (slide 5). `[Observed]`
- **Cropping conventions:** Multiple cropping styles are used throughout: `[Observed]`
  - **Cutout / no-background:** Person photos with background removed, placed on gradient backgrounds (slide 1). May include floating 3D decorative elements nearby.
  - **Rectangular contained:** Photos contained within gradient panels on split-layout slides (slides 3, 6, 8, 10, 11, 12). Fills a portion of the gradient panel.
  - **Circular crop:** Small circular portraits used inline with content items (slide 7 — 3 circular photos aligned with pain points).
  - **Rectangular on white:** Photos placed on white content areas, typically upper-right or upper-left, with rounded or sharp corners (slides 2, 4, 9).
- **Color treatment:** Natural color, not desaturated or duotoned. Photos retain original warm/neutral tones, which contrast against the cool gradient background or sit naturally on white backgrounds. `[Observed]`
- **Overlay usage:** No color overlay or gradient tint applied over photos. The gradient panel acts as the framing context, but photos themselves are unmodified. `[Observed]`
- **Placement patterns:** Photo placement alternates between left and right sides across slides, maintaining visual variety. On gradient slides, photos occupy roughly 40–60% of the panel. On white content slides, photos typically fill ~35–45% of the slide area. `[Observed]`
- **When photos are used vs. avoided:** Photos appear on nearly every slide. The only exception is process/flow diagrams that use icons instead. Photography is a core design element, not an afterthought. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon style:** Thin to medium line-weight icons, likely from a consistent icon set. `[Inferred – medium confidence]`
- **Line weight and corner style:** Medium weight (~1.5–2px), likely rounded corners to match the friendly-but-professional tone. `[Inferred – medium confidence]`
- **Color usage:** Monochrome (`text.primary` or `accent.1`), consistent single color per icon. `[Inferred – medium confidence]`
- **Size relative to surrounding text:** ~2–3x the height of accompanying body text. `[Inferred – medium confidence]`
- **Illustration style:** No illustrations observed. The deck relies on typography, color, and spatial composition rather than illustrative elements. `[Observed]`

### 5.3 Decorative Elements

- **Background patterns or textures:** **None.** All backgrounds are solid colors, solid gradients, or photographs. No noise, grain, geometric patterns, or texture overlays. `[Observed]`
- **Floating shapes, blobs, lines, dots:** **None.** The design is completely free of decorative abstract shapes. `[Observed]`
- **Prominence:** N/A — decorative elements are entirely absent. This is a defining characteristic of the aesthetic. `[Observed]`
- **Where they appear:** Nowhere. The absence of decorative elements is an intentional design choice that reinforces the clean, professional identity. `[Observed]`

### 5.4 Data Visualization

- **Table (observed on slide 7):** `[Observed]`
  - 3-column tabular layout with text-only data
  - Headers in `table.header` style, center-aligned
  - Row separators: thin dotted/dashed horizontal lines (`border.subtle`)
  - **No vertical lines, no solid gridlines** — this is distinctive
  - No alternating row fills or zebra striping
  - Clean, minimal table treatment

- **Charts (possible on slide 5):** `[Inferred – medium confidence]`
  - If bar/line charts are present, they likely use `accent.1` and `accent.2` as series colors
  - Axis lines would be thin (`border` color), gridlines either absent or very subtle
  - Labels would use `caption` style
  - Bar corner radius: 0px (sharp) to match overall geometric shape language
  - Legend placement: below or right of chart, using `caption` style

---

## 6. Slide Template Catalog

### Template 1: Hero Title `[Observed – slide 1]`

- **When to use:** Opening/title slide. First slide of the deck or major section openers
- **Placement map:**
  - Background: full-bleed gradient (`bg.gradient.start` → `bg.gradient.end`, left → right), 100% width × 100% height
  - Headline block: ~8% from left, ~25–35% from top, ~65% wide, ~20% tall
  - Subtitle block: ~8% from left, ~48–55% from top, ~50% wide, ~8% tall
- **Text style mapping:** Headline uses `heading.hero` mixed with `heading.hero.light`; subtitle uses `body` at regular weight
- **Color token mapping:** Background: gradient. All text: `text.on-gradient`
- **Components used:** Gradient Hero Panel
- **Variation rules:** Headline can be 1–3 lines. Subtitle is optional. Text position can shift vertically but should stay in the left 70% of the slide. No imagery on this template

### Template 2: Content — Text & Stats `[Observed – slides 3, 8]`

- **When to use:** Presenting key metrics, KPIs, or data highlights alongside explanatory text
- **Placement map:**
  - Background: `bg.primary` (solid white), 100% × 100%
  - Section heading: ~8% from left, ~8% from top, ~70% wide, ~8% tall
  - Stat blocks: ~8% from left, ~22% from top, arranged in a row spanning ~84% width, each stat block ~25% wide, ~20% tall
  - Supporting body text: ~8% from left, ~55% from top, ~84% wide, ~30% tall
- **Text style mapping:** Section heading: `heading.section`. Stat numbers: `number.hero` in `accent.1`. Stat labels: `caption` in `text.secondary`. Body: `body`
- **Color token mapping:** Background: `bg.primary`. Headings: `text.heading`. Stats: `accent.1` / `accent.3`. Body: `text.primary`
- **Components used:** Title Header Block, KPI / Stat Block, Divider Line (optional)
- **Variation rules:** Number of stat blocks: 2–4. Stats can be arranged in a single row or 2×2 grid. Body text below stats is optional

### Template 3: Split — Gradient + Content `[Observed – slide 7]`

- **When to use:** Feature highlights, section transitions, or emphasis slides that pair a visual statement with structured data
- **Placement map:**
  - Left panel: 0% from left, 0% from top, 50% wide, 100% tall — filled with gradient background
    - Heading: ~10% from left panel edge (5% of slide), ~15% from top, ~80% of panel width (40% slide width), ~15% tall
    - Photo region: ~5% from left panel edge, ~40% from top, ~90% of panel width (45% slide width), ~55% tall
  - Right panel: 50% from left, 0% from top, 50% wide, 100% tall — filled with `bg.primary` or `bg.secondary`
    - Content heading: ~56% from slide left, ~12% from top, ~40% wide, ~6% tall
    - Table/content: ~56% from slide left, ~22% from top, ~40% wide, ~65% tall
- **Text style mapping:** Left heading: `heading.hero` + `heading.hero.light` mixed weight in `text.on-gradient`. Right heading: `heading.sub`. Right content: `table.header` / `table.cell` or `body`
- **Color token mapping:** Left panel: gradient bg + `text.on-gradient`. Right panel: `bg.primary` or `bg.secondary` + `text.primary`
- **Components used:** Gradient Hero Panel, Photo Frame, Data Table (or Content Card grid)
- **Variation rules:** Right panel can contain: table, bullet list, card grid, or body text. Photo on left panel is optional — can be heading-only. Panel split can be exactly 50/50 or shift to 45/55

### Template 4: Agenda / Overview `[Observed – slide 2]`

- **When to use:** Table of contents, agenda, or overview of topics to be covered
- **Placement map:**
  - Background: `bg.primary`, 100% × 100%
  - Section heading: ~8% from left, ~8% from top, ~35% wide, ~10% tall
  - Agenda items: ~45% from left, ~10% from top, ~48% wide, ~75% tall (right column)
- **Text style mapping:** Section heading: `heading.section`. Item numbers: `heading.sub` in `accent.1`. Item titles: `body.bold`. Item descriptions: `body` in `text.secondary`
- **Color token mapping:** Background: `bg.primary`. Heading: `text.heading`. Numbers: `accent.1`. Item text: `text.primary` / `text.secondary`
- **Components used:** Title Header Block, Agenda / Numbered List
- **Variation rules:** 3–7 agenda items. Can be a simple numbered list or expanded with descriptions. Left heading can be a short phrase or single word. Items can span full width instead of right column

### Template 5: Multi-Column Content Grid `[Observed – slides 4, 10]`

- **When to use:** Presenting multiple parallel concepts, features, or categories side by side
- **Placement map:**
  - Background: `bg.primary`, 100% × 100%
  - Section heading: ~8% from left, ~8% from top, ~70% wide, ~10% tall
  - Content cards: ~8% from left, ~22% from top, spanning ~84% width, divided into 2–3 equal columns with ~3% gutter
  - Each card: heading region (~6% tall) + body region (~25% tall)
- **Text style mapping:** Section heading: `heading.section`. Card headings: `heading.sub`. Card bodies: `body`
- **Color token mapping:** Background: `bg.primary`. Card headings: `text.heading`. Card bodies: `text.primary`. Optional icon: `accent.1`
- **Components used:** Title Header Block, Content Card / Feature Block
- **Variation rules:** 2–3 columns. Can include icons above each card heading. Cards may have `bg.secondary` background fill or remain borderless on `bg.primary`. A 2×2 grid is acceptable for 4 items

### Template 6: Process / Flow `[Observed – slide 6]`

- **When to use:** Showing sequential steps, workflows, timelines, or phase progressions
- **Placement map:**
  - Background: `bg.primary`, 100% × 100%
  - Section heading: ~8% from left, ~8% from top, ~60% wide, ~10% tall
  - Process steps: ~8% from left, ~28% from top, spanning ~84% width, ~40% tall
  - Each step: ~15–20% wide, containing step indicator (circle/number) at top + label below
  - Connecting lines: horizontal lines between step indicators, ~1% tall
  - Optional supporting text: ~8% from left, ~72% from top, ~84% wide, ~18% tall
- **Text style mapping:** Section heading: `heading.section`. Step numbers: `label` in `text.on-gradient` (on accent circles). Step labels: `body.bold`. Supporting text: `body`
- **Color token mapping:** Background: `bg.primary`. Step circles: `accent.1` fill. Connecting lines: `border`. Labels: `text.primary`
- **Components used:** Title Header Block, Process / Flow Step Indicator
- **Variation rules:** 3–6 steps. Can be horizontal (preferred) or vertical. Connecting elements can be solid lines or arrows. Steps may include brief descriptions below labels

### Template 7: Closing / Thank You `[Observed – slide 12]`

- **When to use:** Final slide, closing message, contact information, or call to action
- **Placement map:**
  - Background: full-bleed gradient (`bg.gradient.start` → `bg.gradient.end`, left → right), 100% × 100%
  - Closing message: centered horizontally, ~35–45% from top, ~60% wide, ~15% tall
  - Contact/CTA text: centered horizontally, ~55–65% from top, ~50% wide, ~10% tall
- **Text style mapping:** Closing message: `heading.hero`. Contact info: `body` in `text.on-gradient`
- **Color token mapping:** Background: gradient. All text: `text.on-gradient`
- **Components used:** Gradient Hero Panel
- **Variation rules:** Text is centered (unlike left-aligned title slide). Can include email, URL, or brief CTA. Minimal content — no more than 3–4 lines total. Mirrors the aesthetic of Template 1 but with centered alignment

### Template 8: Quote / Pullquote `[Inferred – high confidence]`

- **When to use:** Featuring a testimonial, key quote, or impactful statement
- **Placement map:**
  - Background: `bg.primary` or `bg.secondary`, 100% × 100%
  - Quotation mark or accent element: ~8% from left, ~20% from top, ~5% wide, ~8% tall (decorative open-quote in `accent.1`)
  - Quote text: ~15% from left, ~30% from top, ~70% wide, ~25% tall
  - Attribution: ~15% from left, ~60% from top, ~50% wide, ~5% tall
- **Text style mapping:** Quote: `heading.section` at regular or medium weight, italic if supported. Attribution: `caption` in `text.secondary`
- **Color token mapping:** Background: `bg.primary`. Quote text: `text.heading`. Attribution: `text.secondary`. Accent element: `accent.1`
- **Components used:** Title Header Block (adapted)
- **Variation rules:** Quote can be 1–4 lines. Attribution line includes name and optional role/source. An oversized quotation mark in `accent.1` serves as the decorative anchor. Alternatively, a thin vertical accent bar on the left can replace the quotation mark

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. **Always use the blue-to-purple linear gradient** (`#5B6BF0` → `#8B5CF6`, left → right) for feature backgrounds — it is the signature visual element of the deck. `[Observed]`
2. **Maintain at least ~8% margin** from all slide edges on content slides — content should never touch the edges. `[Observed]`
3. **Use mixed font weights** (light + bold) on gradient-background hero headings to create the signature typographic rhythm. `[Observed]`
4. **Keep table styling minimal** — dotted/dashed horizontal row separators only, no vertical lines, no solid gridlines, no cell fills. `[Observed]`
5. **Use the accent color for numbers/data points** — KPIs and statistics should use `accent.1` or `accent.3` to make them pop against the white background. `[Observed]`
6. **Apply the "bookend" structure** — open and close the deck with full-bleed gradient slides, keep intermediate slides on white backgrounds. `[Observed]`
7. **Use photography extensively** — nearly every slide should include a photo. Use cutout photos on gradient slides, rectangular photos on white content slides, and circular crops for inline content. Alternate photo placement (left/right) across slides for visual variety. `[Observed]`
8. **Use spatial separation over decorative separation** — content blocks should be separated by white space, not by borders, lines, or colored dividers. `[Observed]`
9. **Keep the color palette strictly cool-toned** — only blues, purples, and neutral grays. No warm accents (orange, red, yellow, green). `[Observed]`
10. **Left-align text on content slides, center text on gradient slides** — these alignment rules are consistent and should not be mixed. `[Observed]`

### ❌ DON'T (things that would immediately break the aesthetic)

1. **Never add drop shadows** to any element — the design is completely flat. `[Observed]`
2. **Never use decorative shapes** (blobs, dots, geometric patterns, abstract backgrounds). The aesthetic relies on clean solid colors and gradients only. `[Observed]`
3. **Never apply rounded corners greater than 4px** — this is a sharp, geometric design. Pill shapes, large radii, and bubble elements are off-brand. `[Observed]`
4. **Never use warm accent colors** (oranges, reds, yellows, greens). The palette is exclusively cool-toned. Introducing a warm color would clash immediately. `[Observed]`
5. **Never use more than 2 type weights on a single content slide** (e.g., bold headings + regular body). The mixed light+bold treatment is reserved exclusively for gradient-background hero text. `[Observed]`
6. **Never center body text paragraphs** on content slides — body text must be left-aligned. `[Observed]`
7. **Never add borders or outlines to content cards or blocks** — separation is achieved through spacing, not strokes. `[Observed]`
8. **Never use vertical lines in tables** — only horizontal dotted/dashed separators. `[Observed]`
9. **Never leave a slide without visual interest** — most slides should have a photo or icon-based graphic. Only process/flow slides may rely purely on icons. `[Observed]`
10. **Never crowd the slide** — if content requires more than ~60% of the slide area, split it across two slides. White space is non-negotiable. `[Observed]`
11. **Never use texture, noise, or grain overlays** on any surface — backgrounds must be clean solid colors or smooth gradients. `[Observed]`

---

## 8. Reproduction Checklist

Use this checklist every time a new slide is created to ensure consistency:

- [ ] **Background check:** Is the background correct for this slide type? (gradient for title/closing, white for content, split for feature)
- [ ] **Gradient direction:** If using the gradient, confirm it flows left → right from `#5B6BF0` to `#8B5CF6`
- [ ] **Margins applied:** Content respects ~8% margins from all slide edges
- [ ] **Font family consistent:** All text uses Inter (or selected geometric sans-serif) — no font mixing
- [ ] **Heading weight correct:** Content slides use Semi-Bold/Bold; gradient slides use Light + Bold mixed
- [ ] **Text color matches context:** Dark text (`text.primary` / `text.heading`) on white backgrounds; white text (`text.on-gradient`) on gradient backgrounds
- [ ] **Accent color for data:** KPIs, statistics, and key numbers use `accent.1` (#5B6BF0) or `accent.3` (#7C3AED)
- [ ] **No shadows present:** Confirm zero drop shadows on all elements
- [ ] **No decorative elements:** No blobs, dots, patterns, or texture overlays
- [ ] **Table formatting correct:** Dotted row separators, no vertical lines, no cell fills, no solid gridlines
- [ ] **Photo placement valid:** Photos appear on nearly every slide — cutouts on gradient backgrounds, rectangular on white slides, circular crops for inline items. Only process/flow slides may omit photos.
- [ ] **Alignment rules followed:** Left-aligned on content slides, centered on gradient slides
- [ ] **Spacing hierarchy maintained:** Tight spacing within groups, generous spacing between sections
- [ ] **Color palette check:** Only blues (#5B6BF0), purples (#8B5CF6, #7C3AED), dark navies (#0F172A, #1E293B), slates (#64748B), and whites/light grays (#FFFFFF, #F8F9FA, #E2E8F0) — no warm colors
- [ ] **Typography hierarchy applied:** No more than 3 levels of type hierarchy per slide (heading + body + caption)
- [ ] **Corner radius check:** 0px (sharp) or maximum 4px — nothing rounder
- [ ] **Information density appropriate:** No more than ~60% of slide area filled with content
- [ ] **Bookend structure maintained:** First and last slides use full-bleed gradient; intermediate slides use white or split layouts
- [ ] **Template selection logical:** Template matches content type (stats → Stats template, steps → Process template, etc.)
- [ ] **Consistency with prior slides:** Verify spacing, type sizes, and color usage match established patterns from previous slides in the deck

---

## 9. Background/Texture Generation Prompt

Generate a smooth, seamless abstract gradient background suitable for a corporate presentation slide. The gradient should flow horizontally from a rich medium blue (#5B6BF0) on the left to a vibrant medium purple (#8B5CF6) on the right, with a smooth, continuous transition between the two hues. The gradient must be perfectly clean — no noise, no grain, no texture, no geometric patterns, no lens flare, no light leaks. The color field should be absolutely flat and uniform with no visible banding. The overall impression should be modern, professional, and digitally precise — the kind of polished gradient background used in a high-end SaaS or fintech presentation deck. Render at 1920×1080 resolution with no elements, objects, or text — pure color gradient only.

---

## 10. Uncertainties & Open Questions

### Cannot Be Confidently Determined

- **Exact font family:** The typeface is a geometric sans-serif consistent with Inter, DM Sans, or Poppins. Without inspecting the source file metadata, the exact family cannot be confirmed. Inter is the best guess based on letter geometry and spacing characteristics. `[High uncertainty]`
- **Exact hex color values:** All hex codes are estimated from visual analysis of screenshot images. Actual values may differ by ±5–10 points per channel. The gradient endpoints (#5B6BF0 and #8B5CF6) are approximations. `[Medium uncertainty]`
- **Letter spacing and line height:** These micro-typographic values are estimated from visual proportions and cannot be precisely measured from screenshots. `[Medium uncertainty]`
- **Animation and transition behavior:** Static screenshots provide no information about slide transitions, build animations, entrance effects, or motion design. `[Complete uncertainty]`
- **Icon details:** Icons are present on some slides but are too small at screenshot resolution to identify the exact icon set, stroke weight, or detailed styling. `[High uncertainty]`
- **Slide footer/numbering:** No slide numbers or footer elements were clearly visible, but they may be present at very small size or outside the visible area of the screenshots. `[Medium uncertainty]`
- **Source tool:** Whether this deck was created in Google Slides, PowerPoint, Keynote, Figma, or another tool is unknown. This affects available features (e.g., exact gradient rendering, font embedding). `[Complete uncertainty]`

### Questions That Would Most Improve Reproduction Fidelity

1. **What is the exact font family?** If this is a licensed/brand font, knowing the name would eliminate the biggest reproduction uncertainty. If it's a Google Font, confirming which one (Inter vs. DM Sans vs. Poppins) would ensure perfect typographic matching.
2. **What tool was this deck created in?** (Google Slides, PowerPoint, Keynote, Figma) — this affects gradient rendering, font availability, and spacing behavior.
3. **Are there specific brand colors with exact hex codes?** Confirming the exact gradient start/end values and the primary accent color would remove color estimation uncertainty.
4. **Are animations or transitions used?** If so, what style (fade, slide, morph, none)?
5. **What icon set is used?** (e.g., Phosphor, Lucide, Material Symbols, Heroicons) — knowing this would ensure component consistency across new slides.
