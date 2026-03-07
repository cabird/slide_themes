# Deep Navy Corporate — Theme Guide

> **Theme Name:** `deep-navy-corporate`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Corporate, Polished, Authoritative
- **Visual Personality:** Bold corporate with modern SaaS influence — dark-mode dominant, data-driven, and professional with a tech-forward feel.
- **Mood & Emotion:** Trust, expertise, and growth. The dark navy palette conveys authority and sophistication, while teal/green accents inject energy and optimism. The overall feel is "we are the established experts who will grow your business."
- **Design References:** Modern SaaS pitch decks (circa 2022–2024), enterprise B2B marketing materials. Echoes the design language of modern enterprise B2B SaaS tools and fintech dashboards.
- **Information Density:** 3.5/5 — Moderately dense. Slides balance large hero text with supporting data points, stats, and UI mockup elements. Some slides are text-heavy with category grids.
- **Polish Level:** 4/5 — Highly polished with consistent branding, refined spacing, and professional photo treatments. Minor inconsistencies in edge alignment across some slides.
- **Shape Language:** Geometric/sharp with selective roundness — rectangular content blocks with slight corner radii, circular photo crops, and rounded pill-shaped badges/buttons.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#1B1464` | Main slide background — deep navy/indigo [Observed] |
| `bg.secondary` | `#FFFFFF` | Alternate light slide background for text-heavy content [Observed] |
| `bg.tertiary` | `#2A1F7A` | Slightly lighter navy for layered sections/cards on dark bg [Inferred, high confidence] |
| `text.primary` | `#FFFFFF` | Main body text on dark backgrounds [Observed] |
| `text.primary-dark` | `#1B1464` | Main body text on light backgrounds [Observed] |
| `text.secondary` | `#A8A3C7` | Muted/supporting text on dark backgrounds [Inferred, high confidence] |
| `text.secondary-dark` | `#6B7280` | Muted/supporting text on light backgrounds [Inferred, high confidence] |
| `text.heading` | `#FFFFFF` | Heading text on dark backgrounds [Observed] |
| `accent.1` | `#00C9A7` | Primary accent — teal/cyan, used for stats arrows, highlights, circular rings, active indicators [Observed] |
| `accent.2` | `#F97316` | Secondary accent — orange, used for step markers, numbered badges, warm CTAs [Observed] |
| `accent.3` | `#7C3AED` | Tertiary accent — purple, used for icons, category badges, process nodes [Observed] |
| `accent.4` | `#EF4444` | Quaternary accent — coral/red, used sparingly for chart elements [Observed] |
| `accent.5` | `#3B82F6` | Quinary accent — blue, used for process steps and secondary icons [Observed] |
| `border` | `#3D3580` | Lines, dividers, borders on dark backgrounds [Inferred, high confidence] |
| `border.light` | `#E5E7EB` | Lines, dividers on light backgrounds [Inferred, medium confidence] |

**Additional notes:**
- **Gradient usage:** Subtle radial gradient overlays on some dark slides — deep navy center fading to slightly purple-tinged edges, creating depth. Observed on the "Let's Grow Your Affiliate Channel" slide as a vignette effect. [Observed]
- **Color relationships:** Primarily a split-complementary scheme — deep indigo base with teal and orange as contrasting accents. Purple serves as an analogous bridge. [Inferred, high confidence]
- **Dark mode orientation:** This is a dark-mode-first deck. ~70% of slides use the dark navy background; ~30% use white. [Observed]
- **Color shift between slide types:** Section title/hero slides always use dark bg. Detail/content slides may use either dark or light bg. Process/step slides use light bg. Stats slides use dark bg. [Observed]

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | DM Sans | sans-serif | 700 (Bold) | Very large (~8–10% of slide height) | -0.02em [Inferred] | None | 1.1 |
| `heading.section` | DM Sans | sans-serif | 700 (Bold) | Large (~5–6%) | -0.01em [Inferred] | None | 1.2 |
| `heading.sub` | DM Sans | sans-serif | 500 (Medium) | Medium (~3–4%) | 0 | None | 1.3 |
| `body` | DM Sans | sans-serif | 400 (Regular) | Standard (~2–2.5%) | 0 | None | 1.5 |
| `caption` | DM Sans | sans-serif | 400 (Regular) | Small (~1.5–2%) | 0.02em [Inferred] | None | 1.4 |
| `label` | DM Sans | sans-serif | 500 (Medium) | Small (~1.5%) | 0.05em [Inferred] | Uppercase | 1.3 |
| `number.hero` | DM Sans | sans-serif | 700 (Bold) | Very large (~10–14% of slide height) | -0.02em [Inferred] | None | 1.0 |
| `brand.script` | Sacramento or Pacifico | cursive | 400 | Large (~6–8%) | 0 | None | 1.1 |

**Additional typography notes:**
- **Mixed-weight headings:** A distinctive feature is the use of mixed weights within a single heading — e.g., "Publisher" in regular/medium weight followed by "**Partnerships**" in bold. This creates visual emphasis without color change. [Observed]
- **Emphasis methods:** Bold weight change within headings; teal accent color for highlighted words or key stats; underline/line separator below headings (thin teal or white line). [Observed]
- **Number/data formatting:** Large numbers use comma separators (81,000). Percentages are displayed as large hero numbers with % sign at same weight. Dollar figures use $ prefix at matching size ($750,000). Stat labels appear smaller below in caption style. [Observed]
- **Brand logotype:** [Brand] uses a custom script-style font for the brand name (closest Google match: Sacramento or Pacifico) with the brand tagline in small uppercase tracking beneath it. [Observed]

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Slight to rounded (6–12px) | Cards and containers use ~8px; buttons/pills use full pill radius; photo circles are fully round [Observed] |
| Borders | Thin solid (1–2px) on dark bg | Used on stat cards and circular frames, typically in `accent.1` teal or semi-transparent white [Observed] |
| Shadows | Soft diffuse | Subtle drop shadows on card elements and UI mockups on light backgrounds; ~0 4px 20px rgba(0,0,0,0.15) [Inferred, medium confidence] |
| Transparency/Opacity | Used sparingly | Semi-transparent overlays on some card backgrounds (~10–20% white on dark navy); transparent text shadows [Inferred, medium confidence] |
| Stroke weight | Thin to medium (1–2px) | Circular photo rings use 2px stroke; divider lines use 1px [Observed] |

### 2.4 Spacing Scale

- **Base unit:** 8px [Inferred, high confidence]
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px
- **Margin from slide edge:** ~6–8% of slide width horizontally; ~8–10% vertically [Observed]
- **Gap between major content blocks:** ~32–48px (4–6 base units) [Inferred, high confidence]
- **Gap between related elements** (e.g., icon and label): ~8–16px (1–2 base units) [Inferred, high confidence]
- **Gap between stat number and its label:** ~4–8px [Observed]

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Mix of single-column (hero/title slides), 2-column (text + image or text + data), and multi-column grid (category/services slides with 3–4 columns). [Observed]
- **Column proportions:** 2-column layouts favor 50/50 or 55/45 split. Some slides use 60/40 with the larger side for text. [Observed]
- **Alignment bias:** Left-aligned text predominates. Headings are almost always left-aligned. Centered text used only for standalone stat numbers or the brand logo lockup. [Observed]
- **Content safe zone:** ~6% margins on left/right, ~8% on top, ~10% on bottom (to accommodate footer/page number). [Inferred, high confidence]

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Oversized bold heading text (hero type) dominates the slide, often occupying 30–40% of the vertical space. Color contrast (white on navy) creates immediate draw. [Observed]
- **Supporting information:** Rendered in smaller, lighter-weight text at reduced opacity or in `text.secondary` color. Positioned below or beside the main heading. [Observed]
- **Reading flow:** F-pattern on content slides (heading top-left → subtitle → body content scanning left-to-right). Z-pattern on title/hero slides (logo top-left → heading center-left → accent graphic right → CTA bottom). [Inferred, high confidence]
- **Section separation:** Color block changes (dark ↔ light bg), horizontal thin lines/dividers, generous whitespace gaps, and card containers. [Observed]

### 3.3 White Space Philosophy

- **Overall density:** Balanced — neither sparse nor cramped. Hero slides are airy; data/content slides are more compact but still breathable.
- **Generous white space:** Around hero headings, between the heading and subtitle, and in slide margins. [Observed]
- **Tight grouping:** Stats and their labels, icon+text pairs, step indicators with descriptions. [Observed]

---

## 4. Component Library

> **Title Header Block**
> - **Purpose:** Primary heading with optional subtitle on section/title slides
> - **Anatomy:** Category label (small uppercase) → Main heading (hero size, often mixed-weight) → Subtitle line (body size) → Optional thin horizontal divider line
> - **Visual Specs:** No background fill; heading in `text.heading` white; subtitle in `text.secondary`; optional teal divider line (~40px wide, 2px thick) between heading and subtitle
> - **Typography:** `label` for category, `heading.hero` for main title, `body` for subtitle
> - **Placement Rules:** Upper-left quadrant of slide, starting ~8% from left edge, ~10% from top
> - **Variations:** Centered variant for brand/logo slides [Observed]

> **KPI / Stat Tile**
> - **Purpose:** Display a large numeric value with a descriptive label
> - **Anatomy:** Large number (hero size) → Label text below (caption size) → Optional thin circular ring or accent border
> - **Visual Specs:** Number in `text.heading` white or `accent.1` teal; label in `text.secondary`; sometimes enclosed in a subtle bordered card with `border` color; ~8px radius
> - **Typography:** `number.hero` for the value, `caption` for the label
> - **Placement Rules:** Arranged in grids (2×2 or linear rows) on stat slides. Each tile occupies roughly equal column widths.
> - **Variations:** With circular accent ring around number; with upward arrow icon in `accent.1`; with percentage symbol [Observed]

> **Circular Photo Frame**
> - **Purpose:** Display team member or client headshots
> - **Anatomy:** Circular-cropped photo → 2px ring border in `accent.1` or white → Optional name label below
> - **Visual Specs:** Fully circular crop; border ring 2px in teal or white; sizes vary from ~48px (small avatar) to ~120px (featured)
> - **Typography:** `caption` for name labels
> - **Placement Rules:** In "Our Story" type slides or paired with testimonial text. Often arranged in clusters with slight overlap or staggered positioning.
> - **Variations:** With colored ring (teal), with white ring, without ring, with online status dot [Observed]

> **Step Process Indicator**
> - **Purpose:** Show a sequential process with numbered steps
> - **Anatomy:** Colored circle with step number (e.g., "Step 01") → Connecting dotted/dashed line → Step title below → Step description in body text
> - **Visual Specs:** Circle fill uses rotating accent colors (`accent.2` orange, `accent.5` blue, `accent.1` teal, `accent.3` purple); step label in white on colored circle; connecting lines dashed 1px in `text.secondary`
> - **Typography:** `label` for "Step 0X", `heading.sub` for step title, `body` for description
> - **Placement Rules:** Horizontal row across slide, typically in lower 60% of a light-background slide
> - **Variations:** 3-step and 4-step observed [Observed]

> **Numbered List Item**
> - **Purpose:** Highlight key points or features with prominent numbering
> - **Anatomy:** Large two-digit number (01, 02, 03, 04) in accent color → Title text (bold) → Description text (body)
> - **Visual Specs:** Number in `accent.2` orange or `accent.1` teal, oversized (~6–8% of slide height); title in `heading.sub` white; description in `body` `text.secondary`
> - **Typography:** `number.hero` for number, `heading.sub` for title, `body` for description
> - **Placement Rules:** Stacked vertically on the left side of slide, or arranged in 2×2 grid [Observed]

> **UI Mockup Card**
> - **Purpose:** Show product interface elements as social proof or feature illustration
> - **Anatomy:** White rounded card → Header with title + metric → Status badge ("Active") → Icon elements
> - **Visual Specs:** White background, ~12px corner radius, soft shadow, inner padding ~16px. Contains small metric numbers, green "Active" pill badge, user avatar thumbnails.
> - **Typography:** `heading.sub` for card title, `number.hero` for metric value, `caption` for labels
> - **Placement Rules:** Overlaid on dark backgrounds, often tilted/offset at slight angles for visual interest. Positioned in right portion of 2-column layouts.
> - **Variations:** With/without status badge, different metric types [Observed]

> **Category Grid Card**
> - **Purpose:** Display a category/service with icon and description
> - **Anatomy:** Small icon (circle with colored background) → Category title (bold) → Short description text
> - **Visual Specs:** Arranged in multi-column grid (3–4 columns, 2 rows). Each card has no visible border, relying on spacing for separation. Icon circles ~32px with accent fill.
> - **Typography:** `heading.sub` for category title, `caption` for description
> - **Placement Rules:** Grid layout occupying the right 60% of slide area, with heading on the left or top [Observed]

> **Logo Lockup**
> - **Purpose:** Brand identification
> - **Anatomy:** Script [Brand name] text → [Brand tagline] in small caps below → Optional small trademark symbol
> - **Visual Specs:** White on dark backgrounds; navy on light backgrounds. Script font for [Brand name] with serif/sans small-caps [Brand tagline] beneath. ~100–140px wide at standard placement.
> - **Typography:** `brand.script` for [Brand name], `label` uppercase for [Brand tagline]
> - **Placement Rules:** Top-left corner on most slides as a small lockup; centered and larger on section divider slides; appears on every slide. [Observed]

> **Footer / Slide Number**
> - **Purpose:** Page numbering and brand reference
> - **Anatomy:** "[Brand]" text left-aligned → Slide number right-aligned → Optional thin top border line
> - **Visual Specs:** Very small text in `text.secondary`, positioned at bottom ~3% from edges. Thin 1px line may separate footer from content.
> - **Typography:** `caption` for all footer text
> - **Placement Rules:** Bottom of every slide, full width [Observed]

> **Thin Divider Line**
> - **Purpose:** Visual separation between heading and body, or between content sections
> - **Anatomy:** Horizontal line, ~40–80px wide, 2px thick
> - **Visual Specs:** Color in `accent.1` teal or `text.secondary` muted. Not full-width — intentionally short as a design accent.
> - **Placement Rules:** Below hero headings, between title and subtitle [Observed]

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter:** Professional headshots of people (team members, clients). Business-casual to corporate styling. [Observed]
- **Cropping conventions:** Always circular crop for portraits. No rectangular photo crops observed. Photos are used small (avatar-scale, 48–120px) rather than as hero images. [Observed]
- **Color treatment:** Natural color grading, slightly warm. No heavy filters or duotone treatments. [Observed]
- **Overlay usage:** None on photos themselves. Photos sit on top of the dark navy background without additional overlays. [Observed]
- **When photos are used:** Only for people/team/testimonials. Never for abstract imagery, landscapes, or product shots. [Observed]

### 5.2 Icons & Illustrations

- **Icon style:** Simple flat filled circles with white icon glyphs inside. Solid filled style, not line-based. [Observed]
- **Line weight and corner style:** N/A — icons are solid fills within circles [Observed]
- **Color usage:** Icon background circles use accent colors (teal, orange, purple, blue). Icon glyphs are white. [Observed]
- **Size:** Small, ~24–36px, used in category grids and step indicators. [Observed]
- **Illustration style:** No complex illustrations. The deck relies on UI mockup screenshots, charts, and geometric shapes rather than custom illustrations. [Observed]

### 5.3 Decorative Elements

- **Background patterns/textures:** Subtle radial gradient vignette on some dark slides — slightly lighter in center, darker at edges. No noise, grain, or geometric patterns. [Observed]
- **Floating shapes:** Minimal. Small circular dots/nodes appear on some slides as decorative accents, in accent colors. [Observed]
- **Prominence:** Very subtle — decoration is minimal. The design relies on typography, spacing, and color contrast rather than decorative flourishes. [Observed]
- **Placement:** Small dot elements near slide edges or between content blocks. [Observed]

### 5.4 Data Visualization

> **Bar Chart**
> - **Chart type:** Vertical bar chart
> - **Series colors:** `accent.1` teal and `accent.4` coral/red for different series [Observed]
> - **Axis/gridline visibility:** Minimal — no visible gridlines or axes; chart floats freely [Inferred, medium confidence]
> - **Label typography:** `caption` for axis labels, `number.hero` for callout values
> - **Bar corner radius:** Slight radius on top edges (~4px) [Observed]
> - **Legend:** Inline or below chart in `caption` style [Inferred, medium confidence]
> - **Emphasis:** One bar highlighted with larger size or accent callout arrow [Observed]

> **Pie/Donut Chart**
> - **Chart type:** Donut/pie chart [Observed]
> - **Series colors:** Multiple accent colors (`accent.1` through `accent.5`) [Observed]
> - **Center label:** Large percentage or value displayed in donut center [Observed]

---

## 6. Slide Template Catalog

### Template: "Hero Title" (Section Opener)

- **When to use:** Opening a new section, introducing a major topic
- **Placement map:**
  - Logo: 4% from left, 5% from top, ~12% wide
  - Headline block: 6% from left, 25% from top, 55% wide, 35% tall
  - Subtitle: 6% from left, 62% from top, 45% wide
  - Accent divider line: 6% from left, 60% from top, ~8% wide
- **Text style mapping:** `heading.hero` for main title (mixed-weight), `body` for subtitle
- **Color token mapping:** `bg.primary` navy background, `text.heading` white text, `accent.1` for divider
- **Components used:** Logo Lockup, Thin Divider Line, Footer
- **Variation rules:** Can add a UI Mockup Card floating on right side; can add small stat number. [Observed]

### Template: "KPI Stats" (Our Story / Metrics)

- **When to use:** Displaying company statistics, key performance indicators, milestones
- **Placement map:**
  - Logo: 4% from left, 5% from top
  - Section heading: 6% from left, 8% from top, 40% wide
  - Stats grid: 6% from left, 25% from top, 88% wide, 55% tall (arranged 2×2 or 2×3)
  - Description text: right column or below stats, 45% wide
- **Text style mapping:** `number.hero` for stat values, `caption` for stat labels, `heading.section` for section title, `body` for descriptions
- **Color token mapping:** `bg.primary` dark, `text.heading` white numbers, `text.secondary` for labels, `accent.1` for highlight rings
- **Components used:** KPI Stat Tile (multiple), Logo Lockup, Circular Photo Frame, Footer
- **Variation rules:** 3–6 stat tiles; can include brand badges or award icons [Observed]

### Template: "Two-Column Content" (Text + Visual)

- **When to use:** Presenting a concept with supporting visual (UI mockup, chart, or photo grid)
- **Placement map:**
  - Left column (text): 6% from left, 15% from top, 45% wide
  - Right column (visual): 55% from left, 10% from top, 40% wide
  - Heading: within left column, top
  - Body paragraphs: within left column, below heading
- **Text style mapping:** `heading.section` for title, `heading.sub` for subtitle, `body` for paragraphs
- **Color token mapping:** Can use either `bg.primary` dark or `bg.secondary` white
- **Components used:** Title Header Block, UI Mockup Card or Chart, Logo Lockup, Footer
- **Variation rules:** Columns can swap (visual left, text right); visual can be chart, mockup, or photo cluster [Observed]

### Template: "Process Steps" (How It Works)

- **When to use:** Showing a sequential workflow or onboarding process
- **Placement map:**
  - Heading: 6% from left, 10% from top, 50% wide
  - Description: 6% from left, 22% from top, 40% wide
  - Steps row: 6% from left, 50% from top, 88% wide, 40% tall (horizontal arrangement)
- **Text style mapping:** `heading.section` for title, `body` for description, `label` for step numbers, `heading.sub` for step titles, `caption` for step descriptions
- **Color token mapping:** `bg.secondary` white background, `text.primary-dark` text, rotating accent colors for step circles
- **Components used:** Step Process Indicator (3–4), Logo Lockup, Footer
- **Variation rules:** 3 or 4 steps; can include small icons above each step [Observed]

### Template: "Category Grid" (Services / Channels)

- **When to use:** Displaying a taxonomy of services, channels, or categories
- **Placement map:**
  - Heading: 6% from left, 8% from top, 40% wide
  - Grid: 6% from left, 25% from top, 88% wide, 65% tall (3–4 columns × 2 rows)
- **Text style mapping:** `heading.section` for page title, `heading.sub` for category names, `caption` for descriptions
- **Color token mapping:** `bg.primary` dark or `bg.secondary` light, icon circles in accent colors
- **Components used:** Category Grid Card (6–8), Logo Lockup, Footer
- **Variation rules:** 2×3 or 2×4 grid; cards can have or omit icons [Observed]

### Template: "Numbered List" (Key Points / Benefits)

- **When to use:** Highlighting 3–4 key benefits, features, or principles
- **Placement map:**
  - List items stacked vertically: 6% from left, 15% from top, 50% wide
  - Each item: oversized number left-aligned, title + description to the right
- **Text style mapping:** `number.hero` for numbers, `heading.sub` for titles, `body` for descriptions
- **Color token mapping:** `bg.primary` dark, numbers in `accent.2` orange, text in white
- **Components used:** Numbered List Item (3–4), Logo Lockup, Footer
- **Variation rules:** Can be 2-column (2 items per row) for 4+ items [Observed]

### Template: "Full-Text Detail" (Content Heavy)

- **When to use:** Dense informational content — paragraphs, detailed descriptions, text-heavy explanations
- **Placement map:**
  - Heading: 6% from left, 8% from top, 88% wide
  - Body columns: 6% from left, 20% from top, 88% wide (can split into 2 columns)
- **Text style mapping:** `heading.section` for heading, `body` for all content, `heading.sub` for subheadings within
- **Color token mapping:** `bg.secondary` white or `bg.primary` dark
- **Components used:** Title Header Block, Footer
- **Variation rules:** Single or dual column text [Observed]

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. Always use the deep navy (`#1B1464`) as the default/primary slide background — at least 60% of slides should be dark.
2. Always left-align headings; never center main titles on content slides.
3. Always use mixed-weight headings — pair a regular/medium weight word with a bold word (e.g., "Publisher **Partnerships**") for visual rhythm.
4. Always crop photos in perfect circles with a thin accent-color ring border.
5. Always place the logo lockup on every slide — small in the top-left corner on content slides, centered and larger on section breaks.
6. Always use the teal accent (`#00C9A7`) as the primary highlight color for stats, active states, and divider accents.
7. Always display large stat numbers at hero scale with a small descriptive label beneath.
8. Always maintain at least 6% horizontal margin from slide edges.
9. Always use a consistent footer with brand name and slide number at the bottom of every slide.
10. Always use a short (~40–80px) horizontal divider line between heading and subtitle, colored in teal or white.
11. Always rotate through the accent color palette (teal → orange → purple → blue) for multi-item components like steps or category grids.

### ❌ DON'T (things that would immediately break the aesthetic)

1. Never use a light/pastel background as the primary deck color — white is secondary only.
2. Never use rectangular or square photo crops — always circular.
3. Never use more than one font family (except for the brand script logotype).
4. Never use heavy drop shadows or 3D effects — shadows should be subtle and diffuse at most.
5. Never use decorative borders or ornamental frames around content areas.
6. Never center-align body text paragraphs — always left-align.
7. Never use gradients on text — gradients are only for subtle background vignettes.
8. Never omit the brand logo from any slide.
9. Never use corner radii greater than 12px on content cards (except pill-shaped buttons).
10. Never use bright or saturated primary background colors (e.g., bright blue, bright purple) — the base must be deep, dark navy.
11. Never use more than 3 accent colors on a single slide — choose 1–2 from the accent palette per slide.
12. Never use thin/light font weights for headings — headings must feel bold and commanding.

---

## 8. Reproduction Checklist

- [ ] Set slide dimensions to 16:9 (1920×1080 or equivalent)
- [ ] Apply `bg.primary` deep navy (#1B1464) as default background
- [ ] Load DM Sans font (Regular 400, Medium 500, Bold 700) from Google Fonts
- [ ] Place logo lockup in top-left of every slide (~4% from left, ~5% from top)
- [ ] Add footer bar to every slide (brand name left, page number right, in `caption` style)
- [ ] Use `heading.hero` (bold, large) for main slide titles, left-aligned
- [ ] Apply mixed-weight technique to headings — one word lighter, key word bold
- [ ] Place a short teal divider line (~40–80px, 2px thick) below major headings
- [ ] Set all body text to `body` style (DM Sans Regular, ~2–2.5% of slide height)
- [ ] Use circular crops for all photographs with 2px teal or white ring border
- [ ] Display statistics as oversized numbers (`number.hero`) with small `caption` labels below
- [ ] For process/step slides, use rotating accent colors for step circles and connecting dashed lines
- [ ] Maintain 6–8% horizontal margins and 8–10% vertical margins from slide edges
- [ ] Use `bg.secondary` white for process steps, detail pages, or as alternating slides (max 30–40% of deck)
- [ ] For category grids, use 3–4 column layouts with small colored icon circles
- [ ] Keep decoration minimal — small dot accents only, no large geometric shapes
- [ ] Use numbered list items (01, 02, 03…) with oversized accent-colored numbers
- [ ] Apply soft radial gradient vignette on dark backgrounds (lighter center → darker edges) for depth
- [ ] For UI mockup elements, use white cards with ~12px radius, soft shadow, overlaid on dark bg
- [ ] Limit to 1–2 accent colors per slide; rotate through the full accent palette across the deck
- [ ] Check that text contrast meets readability standards (white on navy, dark on white)
- [ ] Use "Active" pill badges in teal for status indicators on UI mockup elements
- [ ] Ensure all heading text is left-aligned (exception: centered logo on section breaks)

---

## 9. Background/Texture Generation Prompt

Create a seamless, ultra-dark navy blue abstract background texture at 1920×1080 resolution. The base color should be a deep indigo-navy (#1B1464) with a very subtle radial gradient that lightens slightly toward the center (#2A1F7A) and darkens at the edges (#110E40). Add extremely subtle, barely perceptible noise grain at 2-3% opacity for texture. Optionally include 2-3 very faint, out-of-focus circular bokeh shapes in teal (#00C9A7) at 3-5% opacity scattered in the upper corners. The overall feel should be sophisticated, corporate, and modern — like a premium SaaS dashboard background. No stars, no patterns, no geometric shapes — just smooth, deep color with subtle depth.

---

## 10. Uncertainties & Open Questions

- **Font identification:** DM Sans is the closest Google Fonts match based on letterform analysis, but the actual font could be Poppins, Inter, or a proprietary corporate typeface. The mixed-weight heading style is distinctive. [Medium confidence]
- **Brand script font:** The brand logotype script font could be Sacramento, Pacifico, Dancing Script, or a custom hand-lettered wordmark. [Low confidence]
- **Exact navy hex:** The deep navy base could range from #1B1464 to #1E1B4B to #1A1454 — difficult to determine precisely from a composite collage image with shadows. [Medium confidence]
- **Slide transitions/animations:** Cannot determine any motion design, build animations, or transitions from static screenshots. The UI mockup elements shown at slight angles suggest possible entrance animations. [Not determinable]
- **Total slide count:** The collage shows ~15 slides but some are partially cropped. The complete deck likely has 20–30+ slides. [Inferred]

**Questions that would improve reproduction fidelity:**
1. What is the exact brand font family? Is the brand logotype a custom design or a commercially available script font?
2. Was this deck built in PowerPoint, Keynote, or Google Slides? (This affects available features like gradients and shape tools.)
3. Are there any animated/motion elements (e.g., stat counters, build-in sequences)?
4. Is there a brand style guide with exact hex values and font specifications?
5. Are there additional slide types not visible in this collage (e.g., agenda, thank you, Q&A, comparison tables)?
