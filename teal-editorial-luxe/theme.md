# Teal Editorial Luxe — Theme Guide

> **Theme Name:** `teal-editorial-luxe`

> Reverse-engineered from a 40-slide elegant serif presentation template. Source: [Source]

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Refined, Editorial, Luxurious
- **Visual Personality:** Editorial — high-fashion magazine sensibility with typographic sophistication. The deck feels like a curated lookbook: restrained palette, generous white space on the content side, and high-contrast serif typography that commands attention.
- **Mood & Emotion:** Poised confidence with understated elegance. The combination of muted teal backgrounds, close-up beauty photography, and classic serif letterforms evokes prestige and creative authority — like opening a Vogue spread or a premium brand pitch deck.
- **Design References:** Echoes the editorial layout conventions of modern luxury magazines (Kinfolk, Cereal) and the typographic traditions of Didone/Modern serif typefaces (Bodoni, Didot). The two-tone heading treatment (upright + italic) is a hallmark of high-end fashion editorial design. The muted steel-blue palette nods toward Scandinavian minimalism.
- **Information Density:** 2 — Slides are deliberately sparse; content is given room to breathe. Even data-heavy slides (charts, tables) maintain generous spacing.
- **Polish Level:** 5 — Pixel-perfect. Consistent element placement, uniform line weights, precise typographic pairing, and meticulous alignment throughout all 40 slides.
- **Shape Language:** Geometric/sharp — all shapes are rectilinear. No rounded corners, no organic blobs. L-shaped corner accents, straight line dividers, and circular photo crops (team profiles only) are the extent of shape usage. The sole organic element is the 6-pointed asterisk ornament.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage | Confidence |
|---|---|---|---|
| `bg.primary` | `#6B9A9E` | Main teal/steel-blue background for content panels and full-width slides | [Inferred — high] |
| `bg.secondary` | `#2F4858` | Darker navy background for resource/asset slides (slides 20, 30–39) | [Inferred — medium] |
| `bg.photo` | N/A | Photo-filled panels use full-bleed imagery with no overlay | [Observed] |
| `text.primary` | `#FFFFFF` | All headings, body text, captions, labels, and data on teal/navy backgrounds | [Observed] |
| `text.heading` | `#FFFFFF` | Same as `text.primary` — headings are distinguished by size/weight, not color | [Observed] |
| `text.secondary` | `#FFFFFF` at ~70% opacity | Muted supporting text (subtitles, descriptions) — same white but lighter weight or smaller size gives visual distinction | [Inferred — medium] |
| `accent.1` | `#FFFFFF` | Primary accent — all decorative lines, borders, asterisk ornaments, icons | [Observed] |
| `accent.dark` | `#3D6B6F` | Darker teal-tinted asterisk variant (used on the table slide 09) | [Inferred — medium] |
| `accent.muted` | `#A8C4CB` | Light muted steel-blue asterisk/icon tint (used on the table slide 09) | [Inferred — medium] |
| `border` | `#FFFFFF` | All divider lines, L-shaped borders, table rules | [Observed] |
| `icon.resource` | `#8EAAB5` | Monochromatic icon fill color on resource slides (slides 31, 33, 35, 37, 39) | [Inferred — medium] |

**Additional notes:**

- **No gradients observed** — all backgrounds are flat, solid fills. [Observed]
- **Color relationships:** Monochromatic scheme anchored in the teal–navy range (~180–200° hue). White provides all contrast. The palette is essentially two-color: teal + white for content slides, navy + white/muted-blue for resource slides. [Observed]
- **Dark-mode orientation:** The deck is inherently dark-on-light — white text over dark teal/navy backgrounds throughout. There is no light-mode variant. [Observed]
- **Color shifts by slide type:** Content slides use `bg.primary` (teal). Resource/asset slides (20, 30–39) shift to `bg.secondary` (dark navy). The 50/50 split slides pair `bg.primary` with a full-bleed photo panel. [Observed]

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Playfair Display | serif | 700 (Bold) | Very large (~10–12% of slide height) | Normal | None (mixed case) | ~1.05 |
| `heading.section` | Playfair Display | serif | 700 | Large (~6–8% of slide height) | Normal | None | ~1.1 |
| `heading.sub` | Playfair Display | serif | 400 Italic | Medium (~3–4%) | Normal | None | ~1.2 |
| `body` | Lato | sans-serif | 300 (Light) | Standard (~2–2.5%) | +0.02em | None | ~1.6 |
| `caption` | Lato | sans-serif | 300 | Small (~1.5–1.8%) | +0.02em | None | ~1.5 |
| `label` | Lato | sans-serif | 400 (Regular) | Small (~1.5%) | +0.05em | Uppercase | ~1.3 |
| `number.hero` | Playfair Display | serif | 700 | Very large (~15–20% of slide height) | Normal | None | ~1.0 |
| `number.stat` | Playfair Display | serif | 700 | Large (~10%) | Normal | None | ~1.0 |
| `quote` | Playfair Display Italic | serif | 400 Italic | Large (~4–5%) | Normal | None | ~1.4 |

**Heading font identification:** Playfair Display — identified by extreme stroke contrast (paper-thin hairlines against thick vertical strokes), ball terminals, and characteristic Didone proportions. Matches Google Fonts "Playfair Display" closely. [Observed — high confidence]

**Body font identification:** A clean, geometric sans-serif at light weight. Most likely Lato (Light 300) based on character proportions, x-height, and the slightly humanist terminals. Could also be Source Sans Pro or Montserrat Light. [Inferred — medium confidence]

**Special treatments:**

- **Mixed upright + italic heading pattern:** Two-word headings consistently use upright style for the first word and italic for the second: "Elegant *Serif*", "One *column*", "Two *columns*", "Photo *showcase*", "Table of *contents*". This is the deck's signature typographic device. [Observed]
- **No text shadows, outlined text, gradient fills, or colored highlights** observed anywhere. [Observed]
- **Emphasis:** Shown exclusively through the upright/italic contrast in headings and through size changes. Bold weight is used only at the heading level; body text stays at light weight throughout. [Observed]
- **Number/data formatting:** Large statistics use `number.stat` token with abbreviated suffixes (e.g., "950+", "$120M"). No comma separators observed in large numbers. [Observed]

### 2.3 Object Styling

| Property | Value | Notes | Confidence |
|---|---|---|---|
| Corner radius | Sharp (0px) | All rectangles, photo panels, text blocks — no rounding anywhere | [Observed] |
| Borders | Thin solid (~0.5–1px) | White only (`border` token). Used for L-shaped corner accents, table rules, heading underlines | [Observed] |
| Shadows | None | No drop shadows, box shadows, or glow effects anywhere in the deck | [Observed] |
| Transparency/Opacity | Sparingly | Possible subtle opacity on secondary body text; no explicit overlay on photos | [Inferred — low] |
| Stroke weight | Thin (~0.5–1px) | Consistent hairline weight for all decorative lines and borders | [Observed] |

### 2.4 Spacing Scale

- **Base unit:** ~8px (at 1920×1080 reference resolution) [Inferred — medium]
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px [Inferred — medium]
- **Margin from slide edge:** ~6–8% of slide width (~115–154px at 1920w) for content within teal panels; photos extend to absolute edge (0% margin) [Observed]
- **Gap between major content blocks:** ~4–6% of slide height (~43–65px) [Inferred — medium]
- **Gap between heading and body text:** ~2–3% of slide height, often separated by a thin line divider [Observed]
- **Gap between related elements (e.g., icon and label):** ~1–1.5% of slide height (~11–16px) [Inferred — medium]
- **Column gutter (multi-column layouts):** ~3–4% of slide width (~58–77px) [Inferred — medium]

---

## 3. Layout System

### 3.1 Grid & Structure

- **Primary grid:** Asymmetric 50/50 split — the dominant layout. One half is a full-bleed photo (no padding), the other half is a teal content panel with internal padding. [Observed]
- **Secondary grid:** Full-width teal (`bg.primary`) background with 1-, 2-, or 3-column content area centered within ~80–85% of slide width. [Observed]
- **Tertiary grid:** Full-width dark navy (`bg.secondary`) for resource slides. [Observed]
- **Column proportions:** 50/50 for split layouts (photo | content). For multi-column text, equal-width columns (33/33/33 for three-column, 50/50 for two-column). [Observed]
- **Alignment bias:** Left-aligned text throughout. Headings, body, and lists are all flush-left within their content zone. Centered alignment used only for team profile cards (slide 17) and chart labels. [Observed]
- **Content safe zone:** Within the teal content panel of split layouts: ~8% left margin, ~8% right margin, ~10% top margin, ~8% bottom margin (as percentage of the panel dimensions, not full slide). [Inferred — medium]

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Size dominance — hero headings in Playfair Display at very large sizes anchor the eye. The mixed upright/italic treatment adds secondary emphasis to the keyword. [Observed]
- **Supporting information de-emphasis:** Lighter font weight (Lato Light 300), significantly smaller size, and generous vertical spacing below the heading create clear subordination. [Observed]
- **Reading flow:** F-pattern on split slides (top heading → body text → data/bullets flowing downward on the content side, with the photo acting as an anchor on the opposite side). Full-width slides use a top-down center pattern. [Inferred — high]
- **Section/block separation:** Thin white horizontal lines (~1px) serve as the primary separator between heading and body. Vertical space separates content blocks. No cards, no colored block backgrounds — the teal panel itself is the only container. [Observed]

### 3.3 White Space Philosophy

- **Overall density:** Airy — deliberate use of negative space is a core aesthetic principle. Slides rarely fill more than 40–50% of their available area with content.
- **Generous white space:** Above and below headings, around bullet lists, between columns, and in the wide margins of content panels. The photo panel also acts as visual breathing room.
- **Tight grouping:** Elements within a component (e.g., name + role in team cards, stat number + label in KPI blocks, icon + category heading) are grouped closely to establish association.

---

## 4. Component Library

> **Title Header Block**
> - **Purpose:** Primary slide heading, establishing topic
> - **Anatomy:** 1–3 word heading in `heading.hero` or `heading.section`, often followed by a thin white horizontal line, then subtitle/description in `body`
> - **Visual Specs:** No background fill (inherits slide background), no border, no shadow. Thin white line separator (~1px, 30–50% of content width) placed ~16px below heading.
> - **Typography:** Heading uses `heading.hero` or `heading.section` (Playfair Display Bold). First word upright, second word italic for two-word titles. Subtitle uses `body` (Lato Light).
> - **Placement Rules:** Upper portion of content zone, ~10% from top of panel. Left-aligned.
> - **Variations:** Single-word headings (all upright or all italic), three-word headings (first two upright, last italic). [Observed]

> **Asterisk Ornament**
> - **Purpose:** Decorative branding element; visual signature of the deck
> - **Anatomy:** 6-pointed asterisk/snowflake shape, ~3–4% of slide height
> - **Visual Specs:** Filled white (`accent.1`). On slide 09 (table), appears in three tint variants: dark teal (`accent.dark`), white (`accent.1`), and muted blue (`accent.muted`).
> - **Typography:** N/A
> - **Placement Rules:** Appears on nearly every content slide. Position varies: top-right area, bottom-left area, or vertically centered. Typically placed in a low-information zone to avoid competing with content.
> - **Variations:** Three-tint variant on table slide; single white fill on all others. Absent from resource slides (30–39). [Observed]

> **L-Shaped Corner Border**
> - **Purpose:** Decorative framing accent, adds structure without enclosing content
> - **Anatomy:** Two thin white lines meeting at a right angle, ~10–15% of slide dimension per arm
> - **Visual Specs:** Stroke color `border` (#FFFFFF), weight ~0.5–1px, sharp 90° corner
> - **Placement Rules:** Typically appears in 1–2 corners per slide (top-left, top-right, or bottom-right). Never forms a complete rectangle.
> - **Variations:** Sometimes appears as a single corner accent; sometimes two opposing corners for diagonal balance. Absent from resource slides. [Observed]

> **Thin Line Divider**
> - **Purpose:** Visual separator between heading and body, or between content sections
> - **Anatomy:** Horizontal line, `border` color, ~0.5–1px weight
> - **Visual Specs:** Width varies: ~30–50% of content area width for heading separators; ~100% width for table row rules
> - **Placement Rules:** Directly below headings (with ~8–16px spacing above and below), between table rows, between KPI stat groups
> - **Variations:** Full-width in tables; partial-width under headings. [Observed]

> **Vertical Edge Line**
> - **Purpose:** Subtle framing accent on the far-left edge of some slides
> - **Anatomy:** Thin vertical white line running ~60–80% of slide height
> - **Visual Specs:** `border` color, ~0.5–1px weight, positioned at ~2–3% from left edge
> - **Placement Rules:** Appears on select content slides, always on the far left
> - **Variations:** Length varies by slide. [Observed]

> **Section Divider**
> - **Purpose:** Marks the start of a new section (e.g., "01", "02", "03")
> - **Anatomy:** Large serif numeral (`number.hero`), section title in `heading.section` (upright + italic), optional description in `body`, L-shaped border accents
> - **Visual Specs:** Background `bg.primary`, text `text.primary`. 50/50 split with photo panel.
> - **Typography:** Number uses `number.hero` (Playfair Display Bold, very large). Title uses `heading.section`. Description uses `body`.
> - **Placement Rules:** Full 50/50 split layout. Content on left, photo on right. Number positioned upper area, title centered vertically.
> - **Variations:** None observed — consistent format across section dividers. [Observed]

> **Table of Contents List**
> - **Purpose:** Navigational overview of deck sections
> - **Anatomy:** 3 numbered items, each with serif numeral + section title + thin line separator
> - **Visual Specs:** Full teal background. Numbered items arranged vertically with generous spacing. Thin horizontal line dividers between items.
> - **Typography:** Numbers in `number.stat` or `number.hero`, titles in `heading.sub` (Playfair Italic), descriptions in `body`
> - **Placement Rules:** Full-width teal slide. Content centered. Asterisk ornament present.
> - **Variations:** None observed. [Observed]

> **Stat/KPI Tile**
> - **Purpose:** Displaying key metrics and statistics prominently
> - **Anatomy:** Large serif number (`number.stat`) + label text (`caption` or `body`) + thin line separator between stat groups
> - **Visual Specs:** No card container — stats float directly on `bg.primary`. Separated by thin horizontal lines.
> - **Typography:** Number in `number.stat` (Playfair Display Bold). Label in `body` or `caption` (Lato Light).
> - **Placement Rules:** Appears in the content panel of a 50/50 split (slide 10). Typically 2–4 stats arranged vertically.
> - **Variations:** None observed. [Observed]

> **Bullet List**
> - **Purpose:** Structured body text content
> - **Anatomy:** Bullet point (small circle or dash) + text item in `body`
> - **Visual Specs:** White bullet markers, left-aligned, ~2% indent from content margin
> - **Typography:** `body` (Lato Light)
> - **Placement Rules:** Below the heading + separator line combo, within the content zone
> - **Variations:** None observed — consistent minimal styling. [Observed]

> **Quote Block**
> - **Purpose:** Featured quotation or highlighted statement
> - **Anatomy:** Large italic serif text, possibly with attribution below
> - **Visual Specs:** Full teal background. Quote text uses `quote` token (Playfair Display Italic). No quotation marks, no card background, no border.
> - **Typography:** `quote` (Playfair Display Italic, ~4–5% of slide height)
> - **Placement Rules:** Centered on a full-width teal slide (slide 08). Asterisk ornament present.
> - **Variations:** None observed. [Observed]

> **Data Table**
> - **Purpose:** Structured comparison or data display
> - **Anatomy:** Column headers + row data + horizontal rules between rows. No vertical rules. Three-tint asterisks as column identifiers.
> - **Visual Specs:** Full teal background. `border` lines between rows (~0.5–1px). No cell shading.
> - **Typography:** Column headers in `label` (Lato Regular, uppercase). Cell data in `body` (Lato Light).
> - **Placement Rules:** Full-width teal slide (slide 09). Table centered with ~8% margins.
> - **Variations:** Three-tint asterisk column headers are unique to this component. [Observed]

> **Photo Panel**
> - **Purpose:** Visual anchor providing editorial imagery alongside content
> - **Anatomy:** Full-bleed photograph with no border, no overlay, no caption
> - **Visual Specs:** Occupies exactly 50% of slide width. No rounded corners. Photo extends to slide edges (top, bottom, and one side).
> - **Placement Rules:** In 50/50 splits — LEFT side for the hero title (slide 00), RIGHT side for all other content slides (03, 04, 05, 10, 18, 19).
> - **Variations:** None — always full-bleed, sharp corners, no treatment. [Observed]

> **Photo Gallery Grid**
> - **Purpose:** Showcasing multiple images in an editorial layout
> - **Anatomy:** Asymmetric grid of 3–4 photos: one large landscape image, one tall portrait, and 1–2 smaller square/landscape images
> - **Visual Specs:** Full teal background. Small consistent gaps (~1–2%) between photos. Sharp corners on all images.
> - **Typography:** Optional captions in `caption`
> - **Placement Rules:** Full-width teal slide (slide 16). Grid occupies central ~80% of slide.
> - **Variations:** None observed. [Observed]

> **Team Profile Card**
> - **Purpose:** Displaying team members with photo, name, and role
> - **Anatomy:** Circular portrait photo + name in serif (`heading.sub`) + role/title in sans-serif (`caption`) + L-shaped corner accents
> - **Visual Specs:** Full teal background. Photos are circular-cropped (~12–15% of slide width diameter). White asterisk ornament present. L-shaped borders as framing.
> - **Typography:** Name in `heading.sub` (Playfair Display). Role in `caption` (Lato).
> - **Placement Rules:** 4 profiles arranged horizontally, evenly spaced (slide 17).
> - **Variations:** None observed. [Observed]

> **Contact Info Block**
> - **Purpose:** Displaying contact details (phone, email, address)
> - **Anatomy:** Small icon + contact detail text, arranged vertically. Heading above in serif.
> - **Visual Specs:** White icons and text on `bg.primary`. 50/50 split with photo panel.
> - **Typography:** Heading in `heading.section` (Playfair Display). Contact details in `body` (Lato).
> - **Placement Rules:** Content-left, photo-right 50/50 split (slide 18).
> - **Variations:** None observed. [Observed]

> **Device Mockup Frame**
> - **Purpose:** Presenting digital content (app screens, websites) in context
> - **Anatomy:** Phone or laptop outline frame containing a screenshot/placeholder
> - **Visual Specs:** White or light device frame on full teal background. Sharp corners.
> - **Typography:** N/A within the frame
> - **Placement Rules:** Full-width teal slide (slide 15). Device centered.
> - **Variations:** Phone and laptop variants. [Observed]

> **Bar/Column Chart**
> - **Purpose:** Data visualization for comparisons
> - **Anatomy:** Vertical bars + axis labels + optional legend
> - **Visual Specs:** Bars in white or white-variant fills on `bg.primary`. Thin axis lines.
> - **Typography:** Labels in `caption` (Lato). Values in `number.stat` or `body`.
> - **Placement Rules:** Full-width teal slide (slide 13).
> - **Variations:** Grouped bar charts, single-series charts. [Observed]

> **Pie/Donut Chart**
> - **Purpose:** Data visualization for proportions
> - **Visual Specs:** Segments in white/muted-teal tints on `bg.primary`. Labels positioned outside or inside segments.
> - **Placement Rules:** Full-width teal slides (slides 13, 28). Often combined with other chart types on dashboard slides.
> - **Variations:** Donut variant with center label. [Observed]

> **Timeline**
> - **Purpose:** Showing chronological sequence of events
> - **Anatomy:** Horizontal line with evenly spaced nodes/markers + date/event labels above and below
> - **Visual Specs:** White line and markers on `bg.primary`. Alternating label positions.
> - **Typography:** Date/titles in `heading.sub`, descriptions in `caption`
> - **Placement Rules:** Full-width teal slide (slide 12). Timeline centered vertically.
> - **Variations:** None observed. [Observed]

> **Process/Flow Diagram**
> - **Purpose:** Illustrating workflow or sequential steps
> - **Anatomy:** Connected nodes/boxes with directional lines/arrows
> - **Visual Specs:** White outlines and connecting lines on `bg.primary`. No filled backgrounds on nodes.
> - **Typography:** Node labels in `body` or `caption`
> - **Placement Rules:** Full-width teal slide (slide 11).
> - **Variations:** Circular/radial variant (slide 22). [Observed]

> **Pyramid/Triangle Diagram**
> - **Purpose:** Showing hierarchical levels (most to least, foundational to pinnacle)
> - **Anatomy:** Triangular shape divided into horizontal tiers with labels per tier
> - **Visual Specs:** White outlines/lines on `bg.primary`. Tier labels in `body` or `caption`.
> - **Placement Rules:** Full-width teal slide (slide 25).
> - **Variations:** None observed. [Observed]

> **Icon Grid (Resource)**
> - **Purpose:** Providing ready-to-use icon assets organized by category
> - **Anatomy:** Category heading (sans-serif) + grid of monochromatic flat icons (~70+ per category)
> - **Visual Specs:** `bg.secondary` (dark navy) background. Icons in `icon.resource` color (~#8EAAB5). No borders or backgrounds on individual icons.
> - **Typography:** Category headings in `label` (Lato Regular/Medium, uppercase or title case). No individual icon labels.
> - **Placement Rules:** Full-width dark navy slides (31, 33, 35, 37, 39). Two category columns per slide.
> - **Variations:** Different icon categories (Educational, Medical, Business, etc.). [Observed]

> **Map (Resource)**
> - **Purpose:** Geographic reference or location-based content
> - **Anatomy:** Simplified world/regional map rendered in monochromatic style
> - **Visual Specs:** `bg.secondary` background. Map in muted steel-blue (`icon.resource`) with white labels or markers.
> - **Placement Rules:** Full-width dark navy slide (slide 30).
> - **Variations:** None observed. [Observed]

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter:** Close-up editorial portraits — beauty/fashion aesthetic. Subjects are predominantly women with diverse appearances. Focus on skin texture (dewy, glossy), makeup, and accessories (earrings, necklaces). Occasional botanical/still-life elements. [Observed]
- **Cropping:** Full-bleed, edge-to-edge within their designated panel. No borders, padding, or frames. Tight cropping on faces and upper bodies. [Observed]
- **Color treatment:** Warm, natural tones with soft, controlled studio or natural lighting. Skin tones are preserved accurately. No desaturation, duotone, or color filters applied. [Observed]
- **Overlay usage:** None — no color tint, gradient overlay, or opacity mask on any photo. [Observed]
- **When photos are used:** In 50/50 split layouts (hero title, section dividers, one/two-column content, KPI, contact, closing) and in the photo gallery (slide 16). Photos are NOT used on full-width teal data/diagram slides or on resource slides. [Observed]
- **Special case — team profiles (slide 17):** Circular crop applied to portrait photos. Consistent sizing across all four profiles. This is the only instance of non-rectangular photo cropping. [Observed]

### 5.2 Icons & Illustrations

- **Icon style:** Monochromatic flat/outline icons — thin to medium line weight, simplified glyph forms. [Observed]
- **Line weight and corner style:** Medium line weight (~1.5–2px equivalent), with both rounded and sharp corners depending on icon subject. [Inferred — medium]
- **Color usage:** Single-color monochrome — muted steel-blue/gray (`icon.resource` ~#8EAAB5) on dark navy background. No multi-color icons. [Observed]
- **Size:** Small (~2–3% of slide width per icon) in grid layouts. Contact icons (slide 18) slightly larger. [Observed]
- **Illustration style:** No illustrations observed — the deck relies entirely on photography and geometric diagrams. [Observed]

### 5.3 Decorative Elements

- **6-pointed asterisk ornament:** The signature decorative element. White, ~3–4% of slide height, appears on nearly every content slide. Functions as a subtle branding watermark. Not centered — placed in varying positions (top-right, bottom-left, mid-right) to create visual interest without competing with content. [Observed]
- **L-shaped corner borders:** Thin white right-angle corner accents (~10–15% arm length relative to slide dimension). Create an implied frame without enclosing content. Appear in 1–2 corners per slide. [Observed]
- **Thin vertical edge line:** A single thin white line on the far-left edge of some slides, running most of the slide height. Adds subtle structure. [Observed]
- **No background patterns, textures, noise, grain, or geometric patterns observed.** Backgrounds are uniformly flat fills. [Observed]
- **Prominence:** Subtle — all decorative elements are thin, white, and secondary to content. They enhance refinement without drawing focus.
- **Absent on resource slides:** Decorative elements (asterisk, L-borders, edge line) are not used on slides 20, 30–39. [Observed]

### 5.4 Data Visualization

- **Chart types observed:** Bar/column chart (slide 13), pie chart, donut chart, line graph (slide 28 dashboard). [Observed]
- **Series colors:** White and white-variant tints (lighter and darker shades of the teal background). The limited palette maintains the monochromatic aesthetic. [Inferred — medium]
- **Axis/gridline visibility:** Minimal — thin white axis lines, no heavy gridlines. Gridlines, if present, are very faint. [Observed]
- **Label typography:** `caption` (Lato Light/Regular) for axis labels and data labels. Values in `body` or `number.stat`. [Inferred — medium]
- **Bar corner radius:** Sharp (0px) — consistent with the deck's geometric shape language. [Observed]
- **Legend placement:** Adjacent to or below chart. Minimal styling. [Inferred — medium]
- **Emphasis technique:** No differential coloring or highlighting observed — all series appear to use similar tonal values. [Inferred — low]

---

## 6. Slide Template Catalog

### Template: Hero Title (Slide 00)

- **When to use:** Opening/title slide of the presentation
- **Placement map:**
  - Photo region: 0% from left, 0% from top, 50% wide, 100% tall (full-bleed left)
  - Content panel: 50% from left, 0% from top, 50% wide, 100% tall (`bg.primary` fill)
  - Headline block: 58% from left, ~30% from top, ~35% wide, ~25% tall
  - Subtitle/description: 58% from left, ~60% from top, ~35% wide, ~10% tall
  - Asterisk ornament: ~85% from left, ~15% from top
- **Text style mapping:** Heading in `heading.hero`, subtitle in `body`
- **Color token mapping:** Background `bg.primary`, text `text.primary`, decorative `accent.1`
- **Components used:** Title Header Block, Asterisk Ornament, Photo Panel, L-Shaped Corner Border
- **Variation rules:** Photo can be swapped; heading text can be 1–3 words with upright+italic pattern. Photo always on LEFT for this template.

### Template: Table of Contents (Slide 01)

- **When to use:** Agenda or overview slide listing deck sections
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Heading: ~8% from left, ~10% from top, ~40% wide
  - Content list: ~8% from left, ~25% from top, ~80% wide, ~60% tall
  - Asterisk ornament: varies
- **Text style mapping:** Heading in `heading.section`, section numbers in `number.stat`, section titles in `heading.sub`, descriptions in `body`
- **Color token mapping:** Background `bg.primary`, all text `text.primary`
- **Components used:** Title Header Block, Table of Contents List, Thin Line Divider, Asterisk Ornament
- **Variation rules:** 2–5 items. Consistent numbering (01, 02, 03…).

### Template: Section Divider (Slide 02)

- **When to use:** Beginning of a new major section
- **Placement map:**
  - Content panel: 0% from left, 0% from top, 50% wide, 100% tall (`bg.primary`)
  - Photo region: 50% from left, 0% from top, 50% wide, 100% tall (full-bleed right)
  - Section number: ~8% from left, ~15% from top (very large)
  - Section title: ~8% from left, ~45% from top
  - Description: ~8% from left, ~60% from top, ~35% wide
- **Text style mapping:** Number in `number.hero`, title in `heading.section`, description in `body`
- **Color token mapping:** Background `bg.primary`, text `text.primary`, borders `border`
- **Components used:** Section Divider component, L-Shaped Corner Border, Photo Panel
- **Variation rules:** Number changes per section (01, 02, 03…). Title and description change. Photo swappable.

### Template: One Column — Content + Photo (Slides 03, similar)

- **When to use:** Standard content slide with a single text column alongside an image
- **Placement map:**
  - Content panel: 0% from left, 0% from top, 50% wide, 100% tall (`bg.primary`)
  - Photo region: 50% from left, 0% from top, 50% wide, 100% tall
  - Heading: ~8% from left, ~12% from top
  - Line separator: ~8% from left, ~20% from top, ~30% wide
  - Body text: ~8% from left, ~25% from top, ~35% wide
  - Bullet list: ~8% from left, ~45% from top, ~35% wide
  - Asterisk ornament: ~35% from left, ~80% from top
- **Text style mapping:** Heading in `heading.section`, body in `body`, bullets in `body`
- **Color token mapping:** Background `bg.primary`, text `text.primary`
- **Components used:** Title Header Block, Thin Line Divider, Bullet List, Asterisk Ornament, Photo Panel, L-Shaped Corner Border
- **Variation rules:** Text length flexible. Bullet list optional. Photo always on RIGHT.

### Template: Two Columns — Content + Photo (Slides 04–05)

- **When to use:** Content requiring two parallel text columns alongside an image
- **Placement map:**
  - Content panel: 0% from left, 0% from top, 50% wide, 100% tall (`bg.primary`)
  - Photo region: 50% from left, 0% from top, 50% wide, 100% tall
  - Heading: ~8% from left, ~12% from top
  - Line separator: below heading
  - Two text columns: ~8% from left, ~30% from top, each ~18% wide with ~4% gutter
- **Text style mapping:** Heading in `heading.section`, columns in `body`
- **Color token mapping:** Background `bg.primary`, text `text.primary`
- **Components used:** Title Header Block, Thin Line Divider, Photo Panel, Asterisk Ornament
- **Variation rules:** Columns can hold bullets, paragraphs, or mixed content.

### Template: Three Columns — Full Width (Slide 06)

- **When to use:** Comparing or listing three parallel items without a photo
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Three equal columns: each ~27% wide with ~3% gutters, starting at ~8% from left
  - Column headings: top of each column
  - Column body text: below heading
- **Text style mapping:** Column headings in `heading.sub` (Playfair Italic), body in `body`
- **Color token mapping:** Background `bg.primary`, text `text.primary`
- **Components used:** Title Header Block (per column), Asterisk Ornament, Thin Line Divider
- **Variation rules:** 2–4 columns possible. Headings should follow italic serif pattern.

### Template: Comparison (Slide 07)

- **When to use:** Side-by-side comparison of two concepts, plans, or options
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Two large content blocks: each ~40% wide, ~4% gutter, starting ~8% from left
  - Block headings at top, body content below
- **Text style mapping:** Block headings in `heading.section`, body in `body`
- **Components used:** Title Header Block, Thin Line Divider, Asterisk Ornament
- **Variation rules:** Can include bullet lists, stats, or mixed content in each block.

### Template: Quote/Highlight (Slide 08)

- **When to use:** Featured quotation, testimonial, or key statement
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Quote text: centered horizontally and vertically, ~70% wide, ~30% tall
  - Attribution: below quote, smaller text
- **Text style mapping:** Quote in `quote`, attribution in `caption`
- **Color token mapping:** Background `bg.primary`, text `text.primary`
- **Components used:** Quote Block, Asterisk Ornament
- **Variation rules:** Quote length flexible. Attribution optional.

### Template: Data Table (Slide 09)

- **When to use:** Structured data comparison in tabular format
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Table: centered, ~80% wide, ~60% tall
  - Column headers at top row
  - 3–5 data rows below
- **Text style mapping:** Headers in `label`, cell data in `body`
- **Color token mapping:** Background `bg.primary`, rules `border`, text `text.primary`
- **Components used:** Data Table, Three-tint Asterisk variant, Thin Line Divider
- **Variation rules:** 3–6 columns, 3–8 rows. Horizontal rules only — never vertical gridlines.

### Template: Big Data / KPI (Slide 10)

- **When to use:** Highlighting 2–4 key metrics or statistics
- **Placement map:**
  - Content panel: 0% from left, 0% from top, 50% wide, 100% tall (`bg.primary`)
  - Photo region: 50% from left, 0% from top, 50% wide, 100% tall
  - Heading: ~8% from left, ~12% from top
  - Stat group 1: ~8% from left, ~30% from top (large number + label)
  - Line separator: full content width
  - Stat group 2: ~8% from left, ~50% from top
  - Stat group 3: ~8% from left, ~70% from top
- **Text style mapping:** Heading in `heading.section`, numbers in `number.stat`, labels in `caption`
- **Components used:** Title Header Block, Stat/KPI Tile, Thin Line Divider, Photo Panel
- **Variation rules:** 2–4 stat groups. Number format flexible (%, $, +, M, K suffixes).

### Template: Process/Flow Diagram (Slide 11)

- **When to use:** Illustrating workflows, decision trees, or multi-step processes
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Heading: top area
  - Diagram: centered, ~75% wide, ~60% tall
- **Text style mapping:** Heading in `heading.section`, node labels in `body` or `caption`
- **Components used:** Process/Flow Diagram, Title Header Block, Asterisk Ornament

### Template: Timeline (Slide 12)

- **When to use:** Chronological events, milestones, or project phases
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Heading: top area
  - Timeline: centered vertically, ~85% wide, ~40% tall
- **Text style mapping:** Heading in `heading.section`, dates/titles in `heading.sub`, descriptions in `caption`
- **Components used:** Timeline, Title Header Block, Asterisk Ornament

### Template: Chart/Data Visualization (Slides 13, 28)

- **When to use:** Presenting data insights, trends, or comparisons via charts
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Heading: top area
  - Chart: centered, ~70% wide, ~55% tall
  - Legend: below or beside chart
- **Text style mapping:** Heading in `heading.section`, labels in `caption`, values in `body`
- **Components used:** Bar/Column Chart, Pie/Donut Chart, Title Header Block
- **Variation rules:** Slide 28 is a dashboard variant with multiple smaller charts on one slide.

### Template: Vertical Steps (Slide 14)

- **When to use:** Numbered step-by-step process or instructions
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Steps: left-aligned vertical list, each with number + title + description
- **Text style mapping:** Numbers in `number.stat`, titles in `heading.sub`, descriptions in `body`
- **Components used:** Title Header Block, Asterisk Ornament

### Template: Device Mockup (Slide 15)

- **When to use:** Showcasing digital products, apps, or website designs
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Device frame: centered, ~40–50% wide, ~70% tall
  - Optional caption below
- **Components used:** Device Mockup Frame, Title Header Block

### Template: Photo Gallery (Slide 16)

- **When to use:** Showcasing multiple images, portfolio pieces, or visual examples
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Heading: top area
  - Photo grid: centered, ~80% wide, ~65% tall — asymmetric arrangement
- **Components used:** Photo Gallery Grid, Title Header Block, Asterisk Ornament
- **Variation rules:** 3–5 photos. At least one large anchor image. Mix landscape and portrait orientations.

### Template: Team Profiles (Slide 17)

- **When to use:** Introducing team members or key personnel
- **Placement map:**
  - Full background: `bg.primary`, 100% × 100%
  - Heading: top area
  - 4 profile cards: evenly spaced horizontally, ~20% wide each, centered vertically
- **Components used:** Team Profile Card, Title Header Block, Asterisk Ornament, L-Shaped Corner Border

### Template: Contact Info (Slide 18)

- **When to use:** Providing contact details or call-to-action information
- **Placement map:**
  - Content panel: 0% from left, 50% wide, 100% tall (`bg.primary`)
  - Photo: 50% from left, 50% wide, 100% tall
  - Contact details: stacked vertically in content panel
- **Components used:** Contact Info Block, Photo Panel, Title Header Block

### Template: Thanks / Closing (Slide 19)

- **When to use:** Final slide — thank you, Q&A, or closing message
- **Placement map:**
  - Content panel: 0% from left, 50% wide, 100% tall (`bg.primary`)
  - Photo: 50% from left, 50% wide, 100% tall
  - Giant heading: centered in content panel
  - Optional subtext below
- **Text style mapping:** Heading in `heading.hero` (Playfair Display Italic, very large), subtext in `body`
- **Components used:** Title Header Block, Photo Panel, Asterisk Ornament, L-Shaped Corner Border

### Template: Resource / Asset Page (Slides 20, 30–39)

- **When to use:** Supplementary resource slides providing reusable assets (icons, maps)
- **Placement map:**
  - Full background: `bg.secondary` (dark navy), 100% × 100%
  - Content: two-column grid of categorized icons or a single map element
- **Text style mapping:** Category headings in `label`, no body text
- **Color token mapping:** Background `bg.secondary`, icons `icon.resource`, text `text.primary`
- **Components used:** Icon Grid, Map
- **Variation rules:** Different icon categories per slide. No decorative elements. Purely utilitarian.

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. **Always use Playfair Display (or equivalent Didone serif) for all headings** — this is the typographic cornerstone. [Observed]
2. **Apply the upright + italic heading pattern** for two-word titles: first word upright, second word italic (e.g., "Project *Proposal*"). [Observed]
3. **Maintain the 50/50 split** for content + photo slides — exactly half content panel, half photo. No 60/40 or 70/30 variations. [Observed]
4. **Keep photos full-bleed** within their panel — no borders, padding, rounded corners, or overlays. [Observed]
5. **Use only white text and white decorative elements** on the teal/navy backgrounds. There are no other text colors in this deck. [Observed]
6. **Include the asterisk ornament** on content slides — it's the deck's visual signature. Place it in a low-information zone. [Observed]
7. **Use thin (~1px) white line dividers** beneath headings and between content sections — not thick, not colored. [Observed]
8. **Maintain generous whitespace** — content should never fill more than ~50% of the available area. Let the design breathe. [Observed]
9. **Keep body text in a light-weight sans-serif** (Lato Light or equivalent) — the contrast between heavy serif headings and delicate sans-serif body is essential. [Observed]
10. **Use sharp corners everywhere** (0px border radius) — no rounding on any element. [Observed]
11. **Use horizontal rules only in tables** — never vertical gridlines. [Observed]
12. **Place L-shaped corner accents** in 1–2 corners per slide for subtle framing. [Observed]

### ❌ DON'T (things that would immediately break the aesthetic)

1. **Never use a light background with dark text** — this deck is exclusively white-on-dark. [Observed]
2. **Never use rounded corners** on photos, content blocks, or any element. [Observed]
3. **Never add drop shadows or glow effects** — the deck has zero shadow usage. [Observed]
4. **Never use more than the two-background system** (teal `bg.primary` for content, navy `bg.secondary` for resources). No gradients, no third background color. [Observed]
5. **Never center-align body text** — all body text is left-aligned. [Observed]
6. **Never use bold weight for body text** — body stays at light weight (300). Bold is reserved for headings. [Observed]
7. **Never add borders or frames around photos** — photos are always frameless and full-bleed. [Observed]
8. **Never use color for emphasis in text** — emphasis comes from size and italic style, not color changes (everything is white). [Observed]
9. **Never add background patterns, textures, or noise** — backgrounds are pure flat fills. [Observed]
10. **Never place decorative elements (asterisks, L-borders) on resource slides** (30–39). [Observed]
11. **Never use vertical gridlines in tables** — only horizontal rules. [Observed]
12. **Never overcrowd a slide** — if content exceeds ~50% density, split across two slides. [Observed]

---

## 8. Reproduction Checklist

- [ ] **Background:** Use `bg.primary` (#6B9A9E teal) for content slides, `bg.secondary` (#2F4858 navy) for resource slides. Never use gradients.
- [ ] **Headings:** Set all headings in Playfair Display Bold (700). For two-word titles, use upright first word + italic second word.
- [ ] **Body text:** Set all body text in Lato Light (300) or equivalent light sans-serif. Left-aligned, generous line height (~1.6).
- [ ] **Text color:** All text is #FFFFFF. No exceptions. Use size/weight/style for hierarchy, not color.
- [ ] **50/50 split:** For slides with photos, divide exactly in half — content panel on one side, full-bleed photo on the other. Photo on left only for hero title; photo on right for all other content slides.
- [ ] **Line separator:** Place a thin white horizontal line (~1px) between heading and body text. Width ~30–50% of content area.
- [ ] **Asterisk ornament:** Include on every content slide. Position in a low-content corner or zone. Use white fill. Omit on resource slides.
- [ ] **L-shaped corners:** Add 1–2 thin white right-angle corner accents per slide. Arm length ~10–15% of slide dimension.
- [ ] **Margins:** Maintain ~8% margin from content panel edges. Photos extend to slide edges (0% margin).
- [ ] **Sharp corners:** 0px border radius on every element — photos, panels, diagrams, chart bars, tables.
- [ ] **Photos:** Use editorial-style portraits with warm, natural tones. Full-bleed, no overlay, no treatment. Circular crop only for team profile cards.
- [ ] **Tables:** Horizontal rules only, no vertical gridlines. Headers in uppercase sans-serif.
- [ ] **Charts:** Use white and teal tints only. Minimal axis lines. Sharp corners on bars.
- [ ] **Resource slides:** Dark navy background, monochromatic icons in muted steel-blue, no decorative elements.
- [ ] **Spacing:** Use generous whitespace. Major blocks separated by ~4–6% of slide height. Related elements grouped tightly (~1–1.5%).
- [ ] **Data numbers:** Use Playfair Display Bold at large sizes for statistics. Include unit suffixes (%, $, +, M, K).
- [ ] **Font loading:** Load from Google Fonts: `Playfair Display:ital,wght@0,400;0,700;1,400;1,700` and `Lato:wght@300;400`.
- [ ] **Quote slides:** Use Playfair Display Italic at large size. Center on full-width teal background. No quotation mark characters.
- [ ] **Consistency check:** Every slide should feel like it belongs to the same deck — same teal, same serif, same decorative vocabulary.
- [ ] **Information density:** Keep sparse (level 2 out of 5). Fewer elements, more breathing room.

---

## 9. Background/Texture Generation Prompt

> Create a flat, solid-color digital background in a muted, desaturated teal-blue tone (approximately hex #6B9A9E). The color should feel sophisticated and calming, reminiscent of weathered sea glass or dusty sage-teal. The background must be perfectly uniform with absolutely no gradients, patterns, textures, noise, or grain — a single flat fill of color. The tone sits between blue and green (approximately 180–190° hue), with medium saturation (~30–35%) and medium lightness (~55–60%). This background is designed to serve as the canvas for a high-end editorial presentation with white serif typography and fashion photography. It should feel luxurious, understated, and magazine-quality. Avoid any warmth, purple shift, or vivid saturation — the mood is cool, composed, and refined.

---

## 10. Uncertainties & Open Questions

### Cannot be confidently determined from screenshots:

1. **Exact teal hex code:** The primary background teal is estimated at ~#6B9A9E but could range from #5E8F93 to #7BA5A9 depending on display calibration and export settings. Sampling from PNG screenshots is unreliable due to compression and color space conversion. [Inferred — medium confidence]

2. **Body font identity:** The sans-serif body font is identified as Lato Light (300) based on character proportions, but it could be Source Sans 3 Light, Montserrat Light, or Open Sans Light. These fonts are nearly indistinguishable at small sizes in screenshots. [Inferred — medium confidence]

3. **Exact stroke/line weights:** Decorative lines (dividers, L-shaped borders, edge lines) are estimated at ~0.5–1px but could be 0.75px, 1px, or 1.5px. Resolution and anti-aliasing make precise measurement impossible. [Inferred — low confidence]

4. **Asterisk ornament position rules:** The asterisk appears on nearly all content slides but in varying positions. It's unclear whether placement follows a systematic rule (e.g., alternate corners per slide) or is manually positioned per-slide for visual balance. [Inferred — low confidence]

5. **Animation and transition behavior:** Cannot be determined from static PNG screenshots. The deck may use slide transitions (fade, push) and element animations (fade-in, fly-in) but none are observable. [Unknown]

6. **Exact spacing values:** All spacing measurements (margins, gutters, gaps) are visual estimates from screenshots and could be off by 1–2% of slide dimensions. [Inferred — medium confidence]

7. **Dark navy exact hex:** The resource slide background is estimated at ~#2F4858 but could range from #2B4257 to #3A5A6E. [Inferred — medium confidence]

8. **Icon resource color:** Estimated at ~#8EAAB5 but highly uncertain due to small icon size and background influence. [Inferred — low confidence]

### Targeted questions to improve reproduction fidelity:

1. **Do you know the exact brand fonts used?** If this deck came from a template marketplace, the font names may be specified in the template metadata. Confirming Playfair Display and the sans-serif body font would eliminate the largest source of uncertainty.

2. **Was this exported from Google Slides, PowerPoint, or Keynote?** The export tool affects color space and pixel rendering, which would help calibrate the hex code estimates.

3. **Can you provide the hex color codes from the template's theme settings?** Even approximate values from the platform's color picker would dramatically improve color accuracy.

4. **Is there a specific rule for asterisk ornament placement**, or is it placed ad hoc per slide? Knowing the logic (if any) would improve automated slide generation.

5. **Are there predefined animations/transitions in the original template?** This would complete the motion design aspect of the theme, which cannot be inferred from static images.
