# Slate Coral Corporate — Theme Guide

> **Theme Name:** `slate-coral-corporate`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Clean, Corporate, Authoritative
- **Visual Personality:** Corporate-professional with a modern editorial edge. The design leans toward minimalism but with confident use of a bold coral-red accent color that injects energy into an otherwise restrained navy-and-white palette. It straddles the line between traditional corporate and contemporary tech-forward presentations. [Observed]
- **Mood & Emotion:** Trust, competence, and forward momentum. The navy conveys reliability and seriousness, while the coral-red accent adds dynamism and urgency. The overall effect is of a well-established company that is also innovative. [Observed]
- **Design References:** Echoes the clean corporate design language of modern fintech and SaaS investor decks (circa 2020-2025). The large section-number treatment recalls editorial magazine design. The two-tone color splits reference contemporary annual report aesthetics. [Inferred, confidence: high]
- **Information Density:** 2 (relatively sparse -- most slides have a single focal message with generous white space; content slides are moderate but never cluttered)
- **Polish Level:** 4 (professional and polished, consistent design system, though some content slides rely on stock photography without heavy custom treatment)
- **Shape Language:** Geometric and sharp. Rectangular content blocks, sharp corners on color panels, no rounded or organic shapes outside of circular progress indicators and photo crops. [Observed]

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#E8EAF0` | Main slide background -- a very pale blue-gray used on most slides [Observed] |
| `bg.secondary` | `#152244` | Dark navy background used for closing/thank-you slides and inverted sections [Observed] |
| `bg.accent` | `#F5365C` | Coral-red background used for color-block panels and the TOC left panel [Observed] |
| `text.primary` | `#152244` | Main body and heading text on light backgrounds -- deep navy [Observed] |
| `text.secondary` | `#4A5568` | Muted supporting text, captions, and secondary labels [Inferred, confidence: high] |
| `text.heading` | `#152244` | Heading text, same deep navy as primary [Observed] |
| `text.onDark` | `#FFFFFF` | White text used on navy and coral-red backgrounds [Observed] |
| `text.onAccent` | `#FFFFFF` | White text used on the coral-red accent panels [Observed] |
| `accent.1` | `#F5365C` | Primary accent -- coral-red used for section numbers, the top-right tag, TOC panel, and chart highlights [Observed] |
| `accent.2` | `#152244` | Secondary accent -- deep navy used for chart bars, borders, ring indicators [Observed] |
| `accent.3` | `#6B1D3A` | Dark burgundy/maroon used for bold labels (e.g., "Annual Revenue:" labels on ref_06) and tertiary chart series [Observed] |
| `border` | `#CBD5E0` | Subtle light gray for divider lines between columns [Inferred, confidence: medium] |

**Additional color notes:**

- **Gradient usage:** No gradients are used. The palette relies on flat, solid color fills throughout. [Observed]
- **Color relationships:** The palette is built on a navy-and-coral complementary pair. The pale blue-gray background provides a neutral stage. The burgundy/maroon (`accent.3`) acts as a darker, muted variant of the coral-red. [Observed]
- **Light mode orientation:** The deck is predominantly light-mode, using the pale blue-gray (`bg.primary`) as the dominant background. Dark navy (`bg.secondary`) is reserved for the closing slide and occasionally for inverted emphasis. [Observed]
- **Color shifts between slide types:** Section divider slides use `bg.primary` with large coral-red numbers and navy text. Content slides with data sometimes use a 50/50 or 60/40 split between `bg.primary` (or white) and `bg.accent` (coral-red) panels. The closing slide inverts to a full `bg.secondary` navy background. [Observed]

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Josefin Sans | sans-serif | Light (300) | Very large (~10-12% of slide height) | +0.15em wide | Uppercase | 1.1 |
| `heading.section` | Josefin Sans | sans-serif | Light (300) | Large (~6-8% of slide height) | +0.12em wide | Uppercase | 1.15 |
| `heading.sub` | Josefin Sans | sans-serif | Regular (400) | Medium (~3-4% of slide height) | +0.08em | Uppercase | 1.2 |
| `body` | Josefin Sans | sans-serif | Regular (400) | Standard (~2-2.5% of slide height) | Normal | None | 1.5 |
| `caption` | Josefin Sans | sans-serif | Regular (400) | Small (~1.5-2% of slide height) | Normal | None | 1.4 |
| `label` | Josefin Sans | sans-serif | Bold (700) | Small (~1.5-2% of slide height) | +0.02em | None | 1.3 |
| `number.hero` | Josefin Sans | sans-serif | Regular (400) | Very large (~35-45% of slide height) | Normal | None | 0.9 |
| `number.stat` | Josefin Sans | sans-serif | Regular (400) | Large (~4-5% of slide height) | Normal | None | 1.0 |
| `tag` | Josefin Sans | sans-serif | Regular (400) | Small (~1.5% of slide height) | +0.15em wide | Uppercase | 1.0 |

[Observed] The typeface throughout the deck is a single sans-serif family with wide letter-spacing and a light, geometric feel. Josefin Sans from Google Fonts is the closest match -- it has the distinctively tall, thin letterforms, the slightly squared geometry, and the elegant light weight visible in the headings. The wide letter-spacing on headings is a deliberate stylistic choice.

[Inferred, confidence: medium] An alternative match could be Jost or Questrial, but Josefin Sans best captures the distinctive tall x-height and thin strokes seen in the uppercase headings.

**Additional typography notes:**

- **Single typeface system:** The entire deck appears to use one font family at different weights, creating hierarchy through size, weight, and letter-spacing rather than font pairing. [Observed]
- **Emphasis treatment:** Bold weight for labels/key terms (e.g., "Annual Revenue:", "Current Stock Price:"); color change to `accent.3` (burgundy) for emphasis labels; size increase for key numbers. [Observed]
- **Number/data formatting:** Currency uses dollar sign with no decimal for millions ("$120 million"). Percentages displayed prominently, sometimes inside circular ring indicators. EPS figures use 2 decimal places ("$0.37"). [Observed]
- **Special treatments:** The oversized section numbers (1, 2, 3, 4, 5, 6) are rendered in `accent.1` (coral-red) at an extremely large scale, acting as decorative/structural elements rather than purely informational. [Observed]

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Sharp (0px) | All rectangles, color blocks, and panels use perfectly square corners [Observed] |
| Borders | None to minimal | Content blocks rely on color contrast and spacing rather than borders; a thin vertical divider line appears on ref_14 between the two columns [Observed] |
| Shadows | None | No drop shadows or box shadows observed anywhere in the deck [Observed] |
| Transparency/Opacity | Sparingly | A slight transparency/overlay may be present on the cover slide (ref_01) where the background photo is washed out; the "Any Questions" slide (ref_17) uses a darker overlay on the photo [Observed] |
| Stroke weight | Medium (2px) | Applies to the line-style icons used on section divider slides [Observed] |
| Image borders | None | Photos are placed without borders or frames [Observed] |

### 2.4 Spacing Scale

- **Base unit:** 8px [Inferred, confidence: high]
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px [Inferred, confidence: high]
- **Margin from slide edge:** ~6-8% of slide width on left/right; ~5-8% of slide height on top/bottom [Observed]
- **Gap between major content blocks:** ~32-48px (~3-4% of slide width) [Observed]
- **Gap between related elements (e.g., icon and label):** ~8-16px (~1% of slide width) [Inferred, confidence: high]
- **Gap between heading and body text:** ~16-24px [Observed]
- **Photo grid gap (ref_04):** ~24px between the three images [Observed]

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** The deck alternates between single-column centered layouts (section dividers, closing) and two-column layouts (content slides). The two-column layouts use either 50/50 splits (ref_14, ref_16) or asymmetric splits roughly 40/60 (ref_07, ref_11) or 55/45 (ref_09). [Observed]
- **Column proportions:** 50/50 for dual-panel color-split slides; ~45/55 for photo-left + text-right content slides; ~60/40 for chart + data summary layouts (ref_09). [Observed]
- **Alignment bias:** Left-aligned for body text; headings are left-aligned on content slides and center-left on section dividers (where the large number shifts the visual center). The cover slide (ref_01) is centered. [Observed]
- **Content safe zone:** Approximately 6-8% margin from left/right edges and 5-8% from top/bottom. The top-right tag ("INVESTOR RELATIONS BRIEFING") sits within ~2% of the top and right edges, deliberately breaking the safe zone as a persistent navigation element. [Observed]

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Through extreme size contrast. Section titles and hero text are dramatically larger than all other elements. The oversized section numbers (~40% of slide height) create an unmissable anchor point. [Observed]
- **Supporting information de-emphasis:** Body text is significantly smaller, lighter weight, and positioned below or beside the main heading. Secondary data points use smaller type and muted formatting. [Observed]
- **Reading flow pattern:** Section dividers follow a center-weighted pattern (large number left-of-center, title right-of-center). Content slides follow an F-pattern (heading top, then left-to-right column scan). The TOC (ref_02) uses a left-to-right split with the image panel on the left and numbered list on the right. [Observed]
- **Section separation:** Primarily through color blocking (coral-red vs. pale blue-gray panels), generous white space, and the section divider slides themselves. No horizontal rules or card borders are used to separate content within slides. [Observed]

### 3.3 White Space Philosophy

- **Overall density:** Airy. The majority of slides have significant negative space, especially section dividers which are intentionally sparse. [Observed]
- **Where white space is used most generously:** Section divider slides (ref_03, 05, 08, 10, 13, 15) have roughly 50-60% empty space. The cover slide is also very spacious. [Observed]
- **Where elements are grouped tightly:** Content slides with data (ref_06, ref_09, ref_16) pack more information but still maintain comfortable spacing between data points. The three-column photo grid on ref_04 and ref_12 groups items relatively close together. [Observed]

---

## 4. Component Library

> **Top-Right Presentation Tag**
> - **Purpose:** Persistent branding/context label identifying the presentation type
> - **Anatomy:** Rectangular solid-fill bar with white uppercase text
> - **Visual Specs:** Fill: `accent.1` (#F5365C); no border; sharp corners (0px radius); padding ~12px vertical, ~24px horizontal
> - **Typography:** `tag` token -- Josefin Sans, Regular, small size, uppercase, wide letter-spacing, white color
> - **Placement Rules:** Anchored to the top-right corner of the slide, approximately 2% from the top edge and flush or near-flush with the right edge. Appears on section dividers and the closing slide. Does NOT appear on content slides or the cover slide. [Observed on ref_03, 05, 08, 10, 13, 15, 18]
> - **Variations:** None observed; always the same size, position, and color

> **Section Number + Title Block**
> - **Purpose:** Marks the beginning of a new section with a large decorative number and section title
> - **Anatomy:** Oversized numeral in coral-red (left), small line-style icon (center-top), section title in navy uppercase (right of number)
> - **Visual Specs:** Number fill: `accent.1`; title fill: `text.heading`; icon: `text.heading` outline style; no background container; no border
> - **Typography:** Number uses `number.hero` token; title uses `heading.section` token
> - **Placement Rules:** Number positioned roughly 15-25% from left, vertically centered; icon positioned just above the title text baseline; title positioned to the right of the number's vertical center. The whole group sits in the center-left of the slide. [Observed on ref_03, 05, 08, 10, 13, 15]
> - **Variations:** The number changes (1-6); the icon changes per section topic; the title text changes. Layout structure remains consistent across all six section dividers.

> **Cover Title Block**
> - **Purpose:** Opening slide headline with company identifier
> - **Anatomy:** Small company name tag (coral-red background, white text), large hero headline (navy), subtitle below (navy, smaller, uppercase)
> - **Visual Specs:** Company tag: fill `accent.1`, text white, sharp corners, small padding; headline: no container; subtitle: no container
> - **Typography:** Company tag uses `tag` token; headline uses `heading.hero` token; subtitle uses `heading.sub` token
> - **Placement Rules:** Centered horizontally, positioned in the center-to-upper-center of the slide. Company tag above the headline, subtitle below. [Observed on ref_01]
> - **Variations:** None observed

> **Photo + Text Content Block (Left Photo)**
> - **Purpose:** Pairs a large photograph with text content
> - **Anatomy:** Left half: full-height photograph (may be B&W or color); right half: heading + body text paragraphs
> - **Visual Specs:** Photo: no border, fills left ~40-50% of slide; text area: `bg.primary` or white background; heading in navy, body in dark text
> - **Typography:** Heading uses `heading.sub` token; body uses `body` token; bold labels use `label` token
> - **Placement Rules:** Photo flush to left edge, extending full height. Text content starts at ~50-55% from left, with top-aligned heading and body text below. [Observed on ref_07, ref_11]
> - **Variations:** ref_07 has a vertical stripe pattern on the far left edge alongside the photo; ref_11 shows a similar layout but with the heading in larger navy text and a paragraph below

> **Three-Column Photo Grid**
> - **Purpose:** Displays three related items/initiatives with supporting imagery
> - **Anatomy:** Three equal-width columns, each containing: rectangular photograph (top) + caption text (below)
> - **Visual Specs:** Photos: B&W treatment, no border, sharp corners; captions: `body` token in navy; background: `bg.primary`
> - **Typography:** Captions use `body` token, left-aligned within each column
> - **Placement Rules:** Evenly spaced across the slide width, roughly centered vertically with photos above and text below. Margin from edges ~8%. Gap between columns ~2-3% of slide width. [Observed on ref_04, ref_12]
> - **Variations:** ref_04 shows three photos with short captions; ref_12 shows three photos with headings and longer descriptions. ref_12 also includes a large navy heading spanning the top of the slide above the three columns.

> **Key Financial Highlights Block (Photo + Data List)**
> - **Purpose:** Pairs a visual element with a list of key data points
> - **Anatomy:** Left: large photograph or visual; right: vertical stack of labeled data points (bold label, value below)
> - **Visual Specs:** White/light background; data labels in `accent.3` (burgundy) bold; values in `text.primary` navy regular
> - **Typography:** Labels use `label` token in burgundy; values use `body` token
> - **Placement Rules:** Photo occupies ~40-45% left; data list occupies ~45-50% right; vertical data points separated by ~24-32px. [Observed on ref_06]
> - **Variations:** None observed

> **Bar Chart + Summary Panel**
> - **Purpose:** Displays quantitative data with a chart alongside narrative summary
> - **Anatomy:** Left panel (~60%): grouped bar chart with axis labels, legend, and bottom-row EPS figures; right panel (~40%): coral-red background with heading + circular stat indicators + text descriptions
> - **Visual Specs:** Left panel background: `bg.primary` or white; chart bars: `accent.2` (navy), `accent.3` (burgundy), `accent.1` (coral-red); right panel background: `accent.1` (coral-red); text on right panel: white
> - **Typography:** Chart labels: `caption` token; EPS values: `number.stat` token; right panel heading: `heading.sub` token (white); right panel descriptions: `body` token (white)
> - **Placement Rules:** Two-panel split, ~60/40. Chart centered in left panel. Right panel is full-height coral-red block. [Observed on ref_09]
> - **Variations:** None observed

> **Circular Stat Ring Indicator**
> - **Purpose:** Displays a percentage or metric inside a circular progress ring
> - **Anatomy:** Thin circular ring (navy outline, partially filled with coral-red or navy to show progress), percentage number centered inside, label text to the right
> - **Visual Specs:** Ring stroke: ~2-3px; ring track color: `border` light gray; ring fill color: `accent.1` or `accent.2`; center number: `number.stat` token
> - **Typography:** Center number uses `number.stat`; adjacent label uses `caption` or `body` token
> - **Placement Rules:** Used on ref_09 (right panel) and ref_16 (left panel), appearing alongside explanatory text. Ring diameter approximately 50-60px at slide scale. [Observed on ref_09, ref_16]
> - **Variations:** Used on both coral-red and light backgrounds, adjusting text color accordingly

> **Two-Column Color Split (50/50)**
> - **Purpose:** Presents two complementary topics side by side with distinct color zones
> - **Anatomy:** Left half: one color background with heading + data; right half: contrasting color background with heading + data. A thin vertical divider may appear at the center.
> - **Visual Specs:** Left panel: `bg.accent` (coral-red) or `bg.primary` (pale blue-gray); right panel: contrasting color; headings and body text in appropriate contrast colors (`text.onAccent` or `text.primary`)
> - **Typography:** Headings use `heading.sub`; labels use `label`; body uses `body`
> - **Placement Rules:** Exact 50/50 horizontal split. Content within each panel has ~8% internal margins. [Observed on ref_14, ref_16]
> - **Variations:** ref_14 uses coral-red (left) / pale blue-gray (right) with a subtle vertical line divider; ref_16 uses pale blue-gray (left) / coral-red (right) with an icon in the right panel

> **Line-Style Section Icon**
> - **Purpose:** Visual identifier for each section topic on divider slides
> - **Anatomy:** Single monochrome line-drawn icon depicting the section's subject matter
> - **Visual Specs:** Stroke color: `text.heading` (navy) on light backgrounds, `text.onDark` (white) on dark backgrounds; stroke weight: ~2px; style: outlined/line-art, not filled; sizing: roughly 48-64px (approximately 4-5% of slide height)
> - **Typography:** N/A
> - **Placement Rules:** Positioned between the large section number and the section title text, slightly above the title's cap height. [Observed on ref_03, 05, 08, 10, 13, 15, 16]
> - **Variations:** Icon subject changes per section; style remains consistent (line-drawn, uniform stroke weight)

> **Company Name Tag (Cover)**
> - **Purpose:** Identifies the presenting company on the cover slide
> - **Anatomy:** Small rectangular pill-like tag with company name in uppercase
> - **Visual Specs:** Fill: `accent.1` (coral-red); text: white; sharp corners; padding: ~8px vertical, ~16px horizontal
> - **Typography:** `tag` token
> - **Placement Rules:** Centered above the hero heading on the cover slide [Observed on ref_01]
> - **Variations:** None observed

> **TOC / Table of Contents List**
> - **Purpose:** Navigation/agenda overview listing sections with page numbers
> - **Anatomy:** Left panel: coral-red background with a B&W photo and a circular arrow icon; right panel: white/light background with numbered list of section titles
> - **Visual Specs:** Left panel: `bg.accent` fill; right panel: white or `bg.primary`; page numbers in `accent.1` or `accent.2`; section titles in `text.primary`
> - **Typography:** "TABLE OF CONTENTS" heading: `heading.sub` token; page numbers: `number.stat` token (large, coral-red); section titles: `body` token
> - **Placement Rules:** Two-column split, roughly 35/65 or 40/60. Each TOC entry is a single row with page number left-aligned and section title to the right. [Observed on ref_02]
> - **Variations:** None observed

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Prevalence:** 8 of 18 slides contain photographs (ref_01, 02, 04, 06, 07, 11, 12, 17). This classifies as moderate (~44%). [Observed]
- **Placement patterns:** Photos are used as full-bleed backgrounds with overlays (ref_01, ref_17), as left-panel fills in two-column layouts (ref_07, ref_11), as rectangular inline images in grids (ref_04, ref_12), and as a standalone object (ref_06 piggy bank). [Observed]
- **Scale:** Significant (25-50%) on slides where photos appear. Photos typically fill 35-50% of the slide area. [Observed]
- **Subject matter tendencies:** Corporate/business environments -- office spaces, laptops, desk setups, people working. One stock object photo (piggy bank for financial section). Professional but not overly posed. [Observed]
- **Cropping conventions:** Rectangular crops with sharp corners. No circular or masked crops. Photos are contained within their column or panel, not bleeding across the entire slide (except cover and closing Q&A slides). [Observed]
- **Color treatment:** A strong tendency toward **black-and-white / desaturated** treatment. Most content-slide photos are B&W (ref_02, 04, 07, 12). The cover background photo (ref_01) is desaturated/washed out. Some photos retain natural color (ref_06 piggy bank, ref_17). [Observed]
- **Overlay usage:** The cover slide (ref_01) uses a white/light semi-transparent overlay (~60-70% opacity) over the background photo. The "Any Questions" slide (ref_17) uses a darker overlay (~40-50% opacity) creating a moody, muted background. [Observed]
- **When photos are used vs. avoided:** Section divider slides, chart/data slides, and the closing "Thank You" slide do NOT use photography. Content slides explaining qualitative information DO use photography. [Observed]

### 5.2 Icons & Illustrations

- **Icon style:** Thin-to-medium line icons, outline-only (not filled). Clean, modern, and professional. [Observed]
- **Line weight and corner style:** Approximately 2px stroke weight with slightly rounded line caps but generally geometric/squared construction. [Observed]
- **Color usage:** Monochrome -- navy (`text.heading`) on light backgrounds; white on the coral-red right panel of ref_16. [Observed]
- **Size relative to surrounding text:** Icons are approximately 2-3x the height of adjacent heading text on section dividers. On content slides, they are smaller (roughly 1.5x body text height). [Observed]
- **Illustration style:** No illustrations present beyond icons. [Observed]
- **Icon subjects observed:** Financial building with chart, document/invoice, magnifying glass with chart, web app with stars, person with lock/credentials, calculator with money. Each section divider has a unique topic-relevant icon. [Observed]

### 5.3 Decorative Elements

- **Background patterns or textures:** Minimal. The cover slide background has a faded architectural photo that acts as a texture. Some content slides (ref_07) have a subtle vertical stripe pattern along the far left edge. [Observed]
- **Floating shapes, blobs, lines, dots:** Not present. The design is clean and decoration-free. [Observed]
- **Circular arrow icon:** A circle with an arrow (ref_02 TOC slide) serves as a decorative/navigational element on the table of contents. [Observed]
- **Prominence:** Very subtle. Decorative elements are nearly absent; the design relies on color blocking and typography for visual interest. [Observed]

### 5.4 Data Visualization

**Bar Chart (ref_09):**
- **Chart type:** Grouped vertical bar chart (3 series per group, 4 groups)
- **Series colors:** Series 1 (Revenue): `accent.2` (#152244, navy); Series 2 (EBITDA): `accent.3` (#6B1D3A, burgundy); Series 3 (Net Income): `accent.1` (#F5365C, coral-red) [Observed]
- **Axis/gridline visibility:** Minimal axis lines; light horizontal gridlines may be present but very subtle; y-axis labels visible, x-axis labels show quarters [Observed]
- **Label typography:** Data labels above each bar in `caption` token; axis labels in `caption` token; legend at top in `caption` token [Observed]
- **Bar corner radius:** Sharp (0px) [Observed]
- **Legend placement:** Top of chart area, horizontal, inline with series color squares [Observed]
- **Emphasis technique:** The three series use clearly distinct colors from the palette; no dimming or highlighting of individual series [Observed]
- **Additional data row:** EPS figures displayed below each quarterly group in `number.stat` token, creating a secondary data layer [Observed]

**Circular Progress Rings (ref_09, ref_16):**
- **Chart type:** Donut/ring progress indicators showing percentages
- **Series colors:** Ring track in light gray; filled portion in `accent.2` (navy) or `accent.1` (coral-red) [Observed]
- **Label typography:** Percentage value centered inside ring using `number.stat` token [Observed]

---

## 6. Slide Template Catalog

### Template 1: Hero / Title Slide

- **When to use:** Opening slide of the presentation. Sets the tone and identifies the presentation topic and presenting company.
- **Placement map:**
  - Company name tag: centered horizontally (~40% from left, ~30% from top, ~20% wide, ~5% tall)
  - Hero headline: centered horizontally (~15% from left, ~38% from top, ~70% wide, ~30% tall)
  - Subtitle: centered horizontally (~30% from left, ~70% from top, ~40% wide, ~5% tall)
  - Background: full-bleed photo with white semi-transparent overlay (~65% opacity)
- **Text style mapping:** Company tag: `tag`; headline: `heading.hero`; subtitle: `heading.sub`
- **Color token mapping:** Background: photo + white overlay; tag: `accent.1` fill, white text; headline: `text.heading`; subtitle: `text.heading`
- **Components used:** Company Name Tag, Cover Title Block
- **Variation rules:** Background photo can change; headline can be 1-3 lines; subtitle is optional. No top-right presentation tag on this slide. [Observed on ref_01]

### Template 2: Table of Contents / Agenda

- **When to use:** Second slide, providing an overview of the presentation sections.
- **Placement map:**
  - Left panel (photo + icon): 0% from left, 0% from top, ~35% wide, 100% tall
  - "TABLE OF CONTENTS" heading: ~40% from left, ~8% from top, ~50% wide, ~10% tall
  - TOC list entries: ~40% from left, ~22% from top, ~55% wide, ~70% tall (stacked vertically with ~8% spacing between items)
  - Each entry: page number (~40% from left) + section title (offset ~5% to the right of the number)
- **Text style mapping:** Heading: `heading.sub`; page numbers: `number.stat` (coral-red); section titles: `body`
- **Color token mapping:** Left panel: `bg.accent` (coral-red); right panel: white; heading: `text.heading`; numbers: `accent.1`; titles: `text.primary`
- **Components used:** TOC / Table of Contents List
- **Variation rules:** Number of entries can vary (4-8); left panel photo can change (always B&W); circular icon is optional. [Observed on ref_02]

### Template 3: Section Divider

- **When to use:** Transition slide marking the start of a new section. Used between content sections.
- **Placement map:**
  - Large section number: ~15% from left, ~20% from top, ~25% wide, ~55% tall
  - Section icon: ~38% from left, ~25% from top, ~8% wide, ~10% tall
  - Section title: ~38% from left, ~38% from top, ~55% wide, ~35% tall
  - Top-right tag: ~70% from left, ~2% from top, ~28% wide, ~5% tall
- **Text style mapping:** Number: `number.hero` (coral-red); title: `heading.section`; tag: `tag`
- **Color token mapping:** Background: `bg.primary`; number: `accent.1`; title: `text.heading`; tag: `accent.1` fill with white text
- **Components used:** Section Number + Title Block, Top-Right Presentation Tag, Line-Style Section Icon
- **Variation rules:** Number increments (1-6+); icon changes per topic; title text changes; layout structure remains fixed. Can accommodate 1-3 line titles. [Observed on ref_03, 05, 08, 10, 13, 15]

### Template 4: Three-Column Photo Grid

- **When to use:** Displaying three parallel initiatives, focus areas, or feature highlights with supporting imagery.
- **Placement map:**
  - Column 1 photo: ~6% from left, ~15% from top, ~27% wide, ~50% tall
  - Column 1 caption: ~6% from left, ~68% from top, ~27% wide, ~20% tall
  - Column 2 photo: ~37% from left, ~15% from top, ~27% wide, ~50% tall
  - Column 2 caption: ~37% from left, ~68% from top, ~27% wide, ~20% tall
  - Column 3 photo: ~67% from left, ~15% from top, ~27% wide, ~50% tall
  - Column 3 caption: ~67% from left, ~68% from top, ~27% wide, ~20% tall
- **Text style mapping:** Captions: `body`
- **Color token mapping:** Background: `bg.primary`; caption text: `text.primary`
- **Components used:** Three-Column Photo Grid
- **Variation rules:** Photos should be B&W; captions can be short phrases or 1-2 sentences. No heading above the grid on the simpler variant. [Observed on ref_04]

### Template 5: Photo + Data List (Key Highlights)

- **When to use:** Presenting key financial figures, KPIs, or summary data points alongside a relevant visual.
- **Placement map:**
  - Photo/visual: ~5% from left, ~10% from top, ~42% wide, ~80% tall
  - Data list container: ~52% from left, ~12% from top, ~42% wide, ~76% tall
  - Each data point: bold label + value below, stacked with ~6% vertical gap
- **Text style mapping:** Labels: `label` (burgundy/bold); values: `body`
- **Color token mapping:** Background: white or `bg.primary`; labels: `accent.3`; values: `text.primary`
- **Components used:** Key Financial Highlights Block
- **Variation rules:** 3-5 data points; photo can be any relevant image (color or B&W); labels can include percentages or growth indicators in parentheses. [Observed on ref_06]

### Template 6: Content + Photo Split (Left Image)

- **When to use:** Explaining a strategy, position, or qualitative content alongside supporting imagery.
- **Placement map:**
  - Photo panel: 0% from left, 0% from top, ~45% wide, 100% tall
  - Optional decorative stripe: 0% from left, 0% from top, ~3% wide, 100% tall (subtle vertical bar pattern)
  - Content heading: ~50% from left, ~15% from top, ~44% wide, ~20% tall
  - Body text: ~50% from left, ~38% from top, ~44% wide, ~50% tall
- **Text style mapping:** Heading: `heading.sub`; body: `body`
- **Color token mapping:** Photo panel: image (B&W preferred); content area: white or `bg.primary`; heading: `text.heading`; body: `text.primary`
- **Components used:** Photo + Text Content Block
- **Variation rules:** Photo can be color or B&W; body text can be paragraphs or bullet points; decorative stripe is optional. [Observed on ref_07, ref_11]

### Template 7: Bar Chart + Summary Panel

- **When to use:** Presenting quantitative data with a chart and accompanying narrative or key metrics.
- **Placement map:**
  - Chart panel: 0% from left, 0% from top, ~60% wide, 100% tall
  - Chart legend: ~5% from left, ~5% from top, ~50% wide, ~5% tall
  - Chart area: ~5% from left, ~12% from top, ~50% wide, ~60% tall
  - EPS row: ~5% from left, ~78% from top, ~50% wide, ~12% tall
  - Summary panel: ~60% from left, 0% from top, ~40% wide, 100% tall (coral-red background)
  - Summary heading: ~63% from left, ~10% from top, ~34% wide, ~10% tall
  - Stat indicators (stacked): ~63% from left, ~25% from top, ~34% wide, ~65% tall
- **Text style mapping:** Chart labels: `caption`; EPS values: `number.stat`; summary heading: `heading.sub` (white); stat labels: `label` (white); stat descriptions: `body` (white)
- **Color token mapping:** Left panel background: `bg.primary`; chart bars: `accent.2`, `accent.3`, `accent.1`; right panel background: `accent.1`; right panel text: `text.onAccent`
- **Components used:** Bar Chart, Circular Stat Ring Indicator, Top-Right Presentation Tag (none on this slide)
- **Variation rules:** Chart type could be adapted (line, area); number of stat indicators can vary (2-4); summary panel always on right. [Observed on ref_09]

### Template 8: Two-Column Color Split (Equal)

- **When to use:** Comparing two topics, showing dual data sets, or presenting complementary information side by side.
- **Placement map:**
  - Left panel: 0% from left, 0% from top, 50% wide, 100% tall
  - Left heading: ~5% from left, ~10% from top, ~40% wide, ~15% tall
  - Left content: ~5% from left, ~28% from top, ~40% wide, ~62% tall
  - Right panel: 50% from left, 0% from top, 50% wide, 100% tall
  - Right heading: ~55% from left, ~10% from top, ~40% wide, ~15% tall
  - Right content: ~55% from left, ~28% from top, ~40% wide, ~62% tall
  - Optional vertical divider: 50% from left, ~10% from top, ~0.2% wide, ~80% tall
- **Text style mapping:** Headings: `heading.sub`; labels: `label`; body: `body`
- **Color token mapping:** Variant A (ref_14): left panel `bg.accent`, right panel `bg.primary`; Variant B (ref_16): left panel `bg.primary`, right panel `bg.accent`. Text colors adapt for contrast (`text.onAccent` on coral-red, `text.primary` on light).
- **Components used:** Two-Column Color Split, Circular Stat Ring Indicator (on ref_16)
- **Variation rules:** Either panel can be the accent color; content within each panel can include data lists, ring indicators, paragraphs, or icons. [Observed on ref_14, ref_16]

### Template 9: Three-Column Photo Grid with Heading

- **When to use:** Similar to Template 4 but with a prominent heading spanning the full width above the grid. Suitable for showcasing competitive advantages, features, or team capabilities.
- **Placement map:**
  - Full-width heading: ~15% from left, ~5% from top, ~70% wide, ~12% tall
  - Column 1 photo: ~5% from left, ~22% from top, ~28% wide, ~42% tall
  - Column 1 title: ~5% from left, ~66% from top, ~28% wide, ~6% tall
  - Column 1 body: ~5% from left, ~73% from top, ~28% wide, ~20% tall
  - Column 2: same structure, starting at ~37% from left
  - Column 3: same structure, starting at ~67% from left
- **Text style mapping:** Main heading: `heading.sub`; column titles: `label`; column body: `caption`
- **Color token mapping:** Background: `bg.primary` or white; heading: `text.heading`; column titles: `text.heading`; body: `text.primary`
- **Components used:** Three-Column Photo Grid (with heading variant)
- **Variation rules:** Photos can be B&W or desaturated; column count could be reduced to 2 or expanded to 4 if needed. [Observed on ref_12]

### Template 10: Full-Bleed Photo with Centered Text Overlay

- **When to use:** Audience interaction slide (Q&A), atmospheric break, or visual emphasis moment.
- **Placement map:**
  - Background photo: 0% from left, 0% from top, 100% wide, 100% tall
  - Dark overlay: full coverage, ~40-50% opacity
  - Centered text: ~25% from left, ~35% from top, ~50% wide, ~30% tall
- **Text style mapping:** Text: `heading.section` (white)
- **Color token mapping:** Overlay: semi-transparent black or dark navy; text: `text.onDark`
- **Components used:** None specific (standalone layout)
- **Variation rules:** Photo subject can change; text can be a question, statement, or call to action; overlay opacity can vary slightly (30-50%). No top-right tag. [Observed on ref_17]

### Template 11: Closing / Thank You

- **When to use:** Final slide of the presentation. Simple, bold sign-off.
- **Placement map:**
  - Full background: solid `bg.secondary` (navy)
  - Top-right tag: ~70% from left, ~2% from top, ~28% wide, ~5% tall
  - Centered text: ~20% from left, ~38% from top, ~60% wide, ~24% tall
- **Text style mapping:** Main text: `heading.hero` (white, light weight)
- **Color token mapping:** Background: `bg.secondary` (#152244); text: `text.onDark` (white); tag: `accent.1` fill with white text
- **Components used:** Top-Right Presentation Tag
- **Variation rules:** Text can be "THANK YOU!", contact information, or a brief closing statement. Background is always the dark navy. Could optionally include a logo or contact details below the main text. [Observed on ref_18]

### Template 12: Stats / KPI Dashboard (Inferred)

- **When to use:** Presenting 3-6 key performance indicators in a scannable layout. Extrapolated from the data presentation patterns observed in ref_09 and ref_16.
- **Placement map:**
  - Section title: ~6% from left, ~8% from top, ~88% wide, ~10% tall
  - KPI row (3 columns): ~6% from left, ~25% from top, ~88% wide, ~35% tall
    - Each KPI: large number (top), label (middle), trend indicator or ring (bottom)
  - Supporting context row: ~6% from left, ~65% from top, ~88% wide, ~25% tall
- **Text style mapping:** Title: `heading.sub`; KPI numbers: `number.hero` (smaller scale, ~15% of slide height); KPI labels: `label`; context: `body`
- **Color token mapping:** Background: `bg.primary`; numbers: `accent.1` or `accent.2`; labels: `text.secondary`; context: `text.primary`
- **Components used:** Circular Stat Ring Indicator (optional per KPI)
- **Variation rules:** 3-6 KPIs; can include ring indicators, large numbers, or percentage values. Optional coral-red accent bar at top or bottom for visual anchoring. [Inferred, confidence: high -- based on data presentation patterns in ref_09, ref_14, ref_16]

### Template 13: Quote / Testimonial (Inferred)

- **When to use:** Featuring a key quote from a stakeholder, executive, or customer. Extrapolated from the typography and color patterns of the deck.
- **Placement map:**
  - Large quotation mark or accent element: ~8% from left, ~15% from top, ~10% wide, ~15% tall
  - Quote text: ~8% from left, ~32% from top, ~60% wide, ~30% tall
  - Attribution line: ~8% from left, ~68% from top, ~60% wide, ~8% tall
  - Optional photo (circular or rectangular): ~75% from left, ~25% from top, ~18% wide, ~40% tall
- **Text style mapping:** Quote: `heading.sub` (italic if available, otherwise light weight); attribution: `label`; decorative quotation mark: `number.hero` in coral-red
- **Color token mapping:** Background: `bg.primary`; quote text: `text.heading`; attribution: `text.secondary`; accent mark: `accent.1`
- **Components used:** None specific (unique layout)
- **Variation rules:** Can be full-width centered (no photo) or split with a photo. Background can be `bg.primary` or `bg.secondary` (with inverted text colors). [Inferred, confidence: high]

### Template 14: Process / Steps Flow (Inferred)

- **When to use:** Illustrating a sequential process, workflow, or roadmap with 3-5 steps.
- **Placement map:**
  - Section heading: ~6% from left, ~8% from top, ~88% wide, ~10% tall
  - Steps row: ~6% from left, ~28% from top, ~88% wide, ~55% tall
    - Each step: large number in coral-red (top), icon (middle), step title in navy (below icon), description text (bottom)
  - Steps arranged horizontally with ~3% gaps between columns
- **Text style mapping:** Heading: `heading.sub`; step numbers: `number.hero` (smaller, ~10% of slide height); step titles: `label`; descriptions: `caption`
- **Color token mapping:** Background: `bg.primary`; step numbers: `accent.1`; titles: `text.heading`; descriptions: `text.secondary`; optional connecting line between steps: `border`
- **Components used:** Line-Style Section Icon (repurposed at smaller scale), Section Number (repurposed at smaller scale)
- **Variation rules:** 3-5 steps; can be horizontal or vertical layout; connecting lines/arrows are optional and should be subtle. [Inferred, confidence: high -- based on the numbered section divider pattern and icon usage]

---

## 7. Do's and Don'ts (Style Invariants)

### DO (non-negotiable rules for matching this aesthetic)

1. Always use the pale blue-gray (`#E8EAF0`) as the default slide background, never pure white (except for photo-heavy content slides where white is appropriate). [Observed]
2. Always render section numbers in coral-red (`#F5365C`) at dramatically oversized scale on section divider slides -- they are a core visual signature. [Observed]
3. Always use uppercase with wide letter-spacing (+0.10em or more) for all headings and the presentation tag. [Observed]
4. Always use a single font family (Josefin Sans) throughout -- create hierarchy through weight, size, and spacing, not font pairing. [Observed]
5. Always include the coral-red top-right presentation tag on section divider and closing slides for visual continuity. [Observed]
6. Always use black-and-white treatment for photographs on content slides (excluding the cover and Q&A slides). [Observed]
7. Always maintain generous white space on section divider slides -- they should feel spacious and breathable with at least 40% empty space. [Observed]
8. Always use sharp corners (0px radius) on all rectangular elements, color blocks, and panels. [Observed]
9. Always use flat, solid color fills -- no gradients, no drop shadows, no glows. [Observed]
10. Always pair color-split layouts with high-contrast text (white on coral-red, navy on light backgrounds). [Observed]
11. Always use line-style outline icons (not filled/solid icons) with consistent ~2px stroke weight. [Observed]
12. Always left-align body text; center-align only hero text and closing statements. [Observed]

### DON'T (things that would immediately break the aesthetic)

1. Never use rounded corners on any element -- this is a sharp-edged, geometric design system. [Observed]
2. Never introduce a third color family beyond navy/coral-red/blue-gray (no greens, yellows, purples, etc.). The only permitted accent variant is the darker burgundy (`#6B1D3A`). [Observed]
3. Never use drop shadows, glows, or embossed effects on any element. [Observed]
4. Never use gradients -- all fills must be flat and solid. [Observed]
5. Never use filled/solid icons; always use line/outline-style icons. [Observed]
6. Never use more than one font family. [Observed]
7. Never place decorative elements (blobs, patterns, dots, starburst shapes) on slides -- the design is clean and minimal. [Observed]
8. Never use colorful/saturated photographs on content slides; convert to B&W or heavily desaturate. [Observed]
9. Never crowd a section divider slide with body text or data -- they should contain only the number, icon, title, and tag. [Observed]
10. Never center-align body text paragraphs or data lists -- body content should always be left-aligned. [Observed]
11. Never omit the coral-red accent entirely from a slide -- every slide should have at least one coral-red element (tag, number, panel, or accent). [Observed]
12. Never use thin or condensed font weights for headings -- maintain the distinctive light-to-regular weight with wide spacing. [Observed]

---

## 8. Reproduction Checklist

- [ ] **Background color:** Use `bg.primary` (#E8EAF0) as default. Use `bg.secondary` (#152244) only for closing slides. Use `bg.accent` (#F5365C) only for color-split panels. Never use pure white as a full-slide background.
- [ ] **Typography:** Use Josefin Sans (Google Fonts) as the sole typeface. Apply `heading.hero` for cover titles, `heading.section` for section dividers, `heading.sub` for content headings, `body` for paragraphs, `caption` for small labels, `label` for bold data labels.
- [ ] **Letter spacing:** Apply +0.12em to +0.15em letter spacing on all uppercase headings and tags. Body text uses normal spacing.
- [ ] **Text transform:** All headings, section titles, and tags must be uppercase. Body text and data values remain in normal case.
- [ ] **Color usage:** Limit to the defined palette (navy, coral-red, burgundy, pale blue-gray, white). Every slide must include at least one coral-red element.
- [ ] **Section dividers:** Must include an oversized coral-red number, a line-style icon, the section title in navy uppercase, and the top-right coral-red tag. Keep the slide spacious with at least 40% empty space.
- [ ] **Top-right tag:** Include on section dividers and closing slide. Omit on the cover slide and content slides.
- [ ] **Photography:** Use B&W treatment on content slides. Full-bleed photos get a semi-transparent overlay (white on cover, dark on Q&A).
- [ ] **Icons:** Use only thin line-style outline icons with ~2px stroke in navy (on light) or white (on dark/accent backgrounds).
- [ ] **Corners:** All rectangles, panels, and image containers must have 0px corner radius.
- [ ] **Shadows/effects:** No drop shadows, no glows, no gradients. All fills are flat and solid.
- [ ] **Spacing:** Maintain 6-8% margins from slide edges. Use consistent 8px-based spacing increments.
- [ ] **Color splits:** When using two-panel layouts, use a clean 50/50 division. One panel should be coral-red and the other pale blue-gray (or the light variant).
- [ ] **Data visualization:** Bar charts use navy/burgundy/coral-red series colors. Ring indicators use navy or coral-red fills on a light gray track. Sharp bar corners (0px).
- [ ] **Hierarchy:** Primary message through extreme size contrast. Supporting info through smaller size and lighter presence.
- [ ] **Layout selection:** Cover = Template 1; TOC = Template 2; New section = Template 3; Closing = Template 11; Data = Templates 7, 8, or 12; Content = Templates 4, 5, 6, or 9; Q&A = Template 10.
- [ ] **Consistency check:** Verify that no slide uses rounded corners, gradients, shadows, colored photos, or multiple fonts.
- [ ] **Brand neutrality:** Replace all company names with [Company], [Brand], or [Logo]. Replace specific product names with [Product].

---

## 9. Background/Texture Generation Prompt

Create a seamless, subtle background texture in a very pale cool blue-gray tone (hex #E8EAF0), with an extremely faint architectural or corporate interior impression -- think a washed-out, high-key photograph of a modern glass office building interior with clean vertical lines and diffused natural light, overlaid with a white semi-transparent wash at 70% opacity so that only the barest geometric suggestion of the architecture remains visible. The texture should be nearly flat with minimal contrast, serving as a refined backdrop that adds sophistication without competing with foreground content. No people, no objects, no text. The mood should be professional, calm, and quietly confident. The color must stay within the pale blue-gray family (#E5E8EE to #ECF0F5) with absolutely no warm tones, no saturated colors, and no dark shadows. Aspect ratio 16:9, high resolution, suitable for a presentation slide background.

---

## 10. Uncertainties & Open Questions

- **Font identification:** The typeface identification as Josefin Sans is a best-estimate match based on the geometric construction, tall x-height, and distinctive light weight. The actual font could be a commercial typeface like Josefin Sans Pro, Jost, or even a custom corporate font. The wide letter-spacing treatment makes precise identification more difficult. [Inferred, confidence: medium]
- **Exact hex values:** Color values for `bg.primary` (#E8EAF0), `accent.1` (#F5365C), and `bg.secondary` (#152244) are estimated from visual inspection. The actual values could vary by a few hex digits. The burgundy (`accent.3` #6B1D3A) is especially uncertain as it appears small in context. [Inferred, confidence: medium]
- **Body text weight:** It is difficult to distinguish between Regular (400) and Light (300) weight at body text sizes from screenshots alone. The headings are clearly light weight, but body text may be regular. [Inferred, confidence: medium]
- **Animation/transitions:** No animation or transition behavior can be inferred from static images. The clean, structured design suggests simple transitions (fade or cut) rather than complex animations. [Cannot be determined]
- **Grid pixel precision:** Exact spacing values are estimated from visual proportions. The actual base grid unit could be 4px, 8px, or a custom value. [Inferred, confidence: medium]

**Targeted questions to improve fidelity:**

1. What is the exact font family used? Is it Josefin Sans, or a different typeface?
2. Was this presentation created in PowerPoint, Google Slides, Keynote, or another tool? This would help determine exact slide dimensions and export quality.
3. Are the exact brand colors available (hex codes for the coral-red, navy, and background)?
4. Is the wide letter-spacing on headings a manual setting or part of the font's default configuration?
5. Should the B&W photo treatment be a true desaturation or a specific duotone/filter effect?
