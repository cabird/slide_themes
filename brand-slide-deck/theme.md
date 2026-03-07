# Brand Slide Deck — Theme Guide

> **Theme Name:** `brand-slide-deck`

> **Analysis based on:** 6 screenshot images containing ~15+ unique slide layouts

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Minimal, Editorial, Refined
- **Visual Personality:** Minimalist editorial — the design language of a high-fashion lookbook or luxury brand book. Clean, restrained, and intentional with every element. It favors typographic drama over decorative embellishment. `[Observed]`
- **Mood & Emotion:** Sophisticated confidence. The deck evokes the feeling of flipping through a premium fashion magazine — unhurried, curated, and effortlessly elegant. There's warmth from the photography that prevents it from feeling cold or sterile. `[Observed]`
- **Design References:** Echoes Swiss International Typographic Style (grid discipline, generous white space) blended with contemporary editorial magazine design (Kinfolk, Cereal Magazine). The bold serif titling references classic Didone typography from high-fashion mastheads (Vogue, Harper's Bazaar). `[Inferred – high confidence]`
- **Information Density:** 2 out of 5 — Very airy. Most slides carry a single message with generous breathing room. Even the denser slides (Values, Contents) maintain restrained text volumes. `[Observed]`
- **Polish Level:** 4.5 out of 5 — Near pixel-perfect. Consistent alignment, deliberate spacing, and meticulous typography. The only deduction is minor (e.g., "VERISON" typo in headers suggests a template rather than a final deliverable). `[Observed]`
- **Shape Language:** Geometric and sharp. All shapes are strictly rectangular with sharp 0px corners. No rounded corners, organic blobs, or decorative geometric elements anywhere in the deck. `[Observed]`

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage | Confidence |
|---|---|---|---|
| `bg.primary` | `#FFFFFF` | Main slide background — clean white used on every slide | `[Observed]` |
| `bg.secondary` | `#FAF9F9` | Off-white/warm white seen in some slide areas and the source page background | `[Observed]` |
| `text.primary` | `#1A1714` | All headings, section titles, body text — near-black with very slight warm undertone | `[Observed]` |
| `text.secondary` | `#626160` | Muted supporting text, captions, smaller descriptive paragraphs | `[Observed]` |
| `text.heading` | `#1A1714` | Same as text.primary — headings use size/weight/style for differentiation, not color | `[Observed]` |
| `accent.1` | `#1A1714` | Primary accent is black itself — used for progress bars, divider lines, button borders | `[Observed]` |
| `accent.2` | `#5C3923` | Warm dark brown — present in photography tones; available for subtle warm accents | `[Inferred – medium confidence]` |
| `border` | `#1A1714` | Thin black lines for borders, dividers, and the header rule | `[Observed]` |
| `surface.muted` | `#B9B9B9` | Light gray used sparingly for secondary borders or muted elements | `[Inferred – medium confidence]` |
| `photo.warm` | `#A98C68` | Dominant photography color tone — warm caramel/tan for color grading reference | `[Observed]` |
| `photo.blush` | `#CFB6AC` | Secondary photography tone — dusty rose/blush seen in skin tones and soft backgrounds | `[Observed]` |

**Additional Color Notes:**

- **Gradient usage:** None. The deck uses zero gradients anywhere — backgrounds, text fills, and overlays are all flat solid colors. `[Observed]`
- **Color relationships:** Strictly monochromatic (black + white) with warmth introduced only through photography. The design system itself is achromatic. `[Observed]`
- **Light mode orientation:** This is a definitively light-mode design. The white background with black text is foundational and non-negotiable. `[Observed]`
- **Color shifts between slide types:** None. Every slide uses the same white background with black text. There are no dark section dividers, inverted color slides, or accent-colored backgrounds anywhere in the deck. Consistency is absolute. `[Observed]`

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative to slide height) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | **Playfair Display** | serif | 900 (Black) / Italic | ~10–14% of slide height | -0.02em (tight) | None (Title Case or ALL CAPS) | ~1.0–1.05 | 
| `heading.section` | **Playfair Display** | serif | 800–900 (ExtraBold/Black) / Italic | ~6–8% of slide height | -0.01em | UPPERCASE | ~1.1 |
| `heading.sub` | **Playfair Display** | serif | 700 (Bold) / Italic | ~3–4% of slide height | Normal | UPPERCASE | ~1.2 |
| `heading.editorial` | **Playfair Display** | serif | 900 (Black) / Italic | ~5–7% of slide height | -0.01em | Title Case mixed | ~1.05–1.1 |
| `body` | **DM Sans** | sans-serif | 400 (Regular) | ~1.8–2.2% of slide height | 0.01em | Sentence case | ~1.5–1.6 |
| `body.uppercase` | **DM Sans** | sans-serif | 400 (Regular) | ~1.5–1.8% of slide height | 0.08–0.12em (wide) | UPPERCASE | ~1.6 |
| `caption` | **DM Sans** | sans-serif | 400 (Regular) | ~1.2–1.5% of slide height | 0.05em | UPPERCASE or Sentence case | ~1.4 |
| `label` | **DM Sans** | sans-serif | 500 (Medium) | ~1–1.3% of slide height | 0.1em (very wide) | UPPERCASE | ~1.3 |
| `label.header` | **DM Sans** | sans-serif | 400–500 | ~1% of slide height | 0.08em | UPPERCASE | ~1.2 |
| `number.hero` | **Playfair Display** | serif | 900 (Black) | ~5–6% of slide height | Normal | N/A | ~1.0 |
| `number.index` | **DM Sans** | sans-serif | 700 (Bold) | ~3–4% of slide height | Normal | N/A | ~1.0 |
| `name.stylized` | **Playfair Display** | serif | 700–900 / Italic | ~3–5% of slide height | -0.01em | UPPERCASE | ~1.1 |

**Additional Typography Notes:**

- **Primary heading font identification:** The heading typeface is a high-contrast Didone serif used exclusively in bold/black italic. Playfair Display Black Italic is the closest Google Fonts match. The font features dramatic thick-thin stroke contrast, ball terminals, and elegant italic forms characteristic of fashion editorial typography. `[Inferred – high confidence]`
- **Body font identification:** The sans-serif body text is clean, geometric, and modern with uniform stroke widths. DM Sans is the recommended Google Fonts match (alternatives: Work Sans, Inter). `[Inferred – high confidence]`
- **Special treatments:**
  - Large section titles (VALUES, VISION, MISSION, FOUNDER, etc.) are placed at the **bottom-left** of slides in enormous italic serif — this is the deck's most distinctive typographic signature `[Observed]`
  - The "CREATIVE STUDIO" label uses small uppercase text inside a thin-bordered rectangle `[Observed]`
  - The "BEAUTY IS AN EXPRESSION" text on the Mission slide uses the editorial serif in a stacked, art-directed layout with controlled line breaks `[Observed]`
  - The "HELLO I AM JAMES SMITH" text uses a stacked serif layout where "I AM JAMES SMITH" is in large italic serif below "HELLO" `[Observed]`
- **Emphasis conventions:** Emphasis is achieved through size and weight changes, never through color, underlines, or background highlights. Bold italic serif = primary emphasis. Regular sans-serif = supporting role. `[Observed]`
- **Number/data formatting:**
  - Section numbers: "01", "02", "03", "04" — zero-padded two-digit format `[Observed]`
  - Team member numbers: "/01", "/02", "/03" — forward-slash prefix format `[Observed]`
  - List numbers: "1.", "2.", "3." — standard decimal with period, right-aligned `[Observed]`
  - Percentage values: "70%", "56%", "40%" — no space between number and percent sign `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | **Sharp (0px)** | Every rectangle, image frame, button, and card uses perfectly square corners with no rounding whatsoever `[Observed]` |
| Borders | **Thin solid (1px)** | Used on the header rule line, content labels ("CONTENT", "CREATIVE STUDIO"), divider lines, and some image frames. Always black (`#1A1714`) `[Observed]` |
| Shadows | **None** | Zero drop shadows, box shadows, or glow effects on any element within the slides themselves. (The mockup presentation images show realistic shadows, but those are the mockup — not the slide design.) `[Observed]` |
| Transparency/Opacity | **Never** | No transparent overlays, semi-transparent panels, or opacity-reduced elements observed `[Observed]` |
| Stroke weight | **Thin (1px)** | All borders and divider lines appear to be 1px weight — extremely refined `[Observed]` |
| Image borders | **None or 1px solid** | Most photos sit flush with no border. Some have a very subtle 1px frame `[Observed]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred – high confidence]` (based on consistent spacing increments)
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px
- **Margin from slide edge (left/right):** ~6–8% of slide width `[Observed]`
- **Margin from slide edge (top):** ~5–6% of slide height (below the header bar) `[Observed]`
- **Margin from slide edge (bottom):** ~8–10% of slide height (large section titles sit in this zone) `[Observed]`
- **Header bar height:** ~4–5% of slide height `[Observed]`
- **Gap between major content blocks:** ~5–8% of slide height `[Observed]`
- **Gap between related elements (e.g., number and its text):** ~1.5–2% of slide height `[Observed]`
- **Gap between photo and adjacent text:** ~3–4% of slide width `[Observed]`
- **Gap between numbered list items:** ~2–3% of slide height `[Observed]`
- **Interior padding within bordered labels:** ~1% height, ~2% width `[Observed]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Asymmetric modular grid. The deck uses a flexible combination of single-column, two-column, and multi-module layouts. Most slides feature an asymmetric split (text-heavy region + image region). `[Observed]`
- **Column proportions observed:**
  - Cover slide ([Deck Title]): ~55% text left / ~45% image right `[Observed]`
  - Welcome slide: ~55% text left / ~45% photo right `[Observed]`
  - Founder slide: ~35% photo left / ~65% text right `[Observed]`
  - Values slide: ~50% numbered grid left / ~50% photo + bullets right `[Observed]`
  - Vision slide: ~30% photo left / ~70% text right `[Observed]`
  - About Deck slide: ~50/50 two-column text with photos `[Observed]`
  - Our Team slide: Equal-width columns (3-column grid for team members) `[Observed]`
- **Alignment bias:** Strongly **left-aligned**. All body text, headings, and labels are left-aligned. No centered text blocks observed anywhere. The large bottom-left section titles anchor the left edge. `[Observed]`
- **Content safe zone:**
  - Left margin: ~6% of slide width `[Observed]`
  - Right margin: ~6% of slide width (photos sometimes extend to ~3% from right edge) `[Observed]`
  - Top margin: ~5% of slide height (header occupies this zone) `[Observed]`
  - Bottom margin: ~4% of slide height (below the large section title) `[Observed]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** The slide's topic is communicated through the enormous bold italic serif section title (VALUES, VISION, MISSION, etc.) placed at the bottom-left. Despite its low position, its massive scale makes it the first element the eye catches. On content-forward slides like the cover, the hero title ("[Deck Title]") dominates through sheer typographic scale. `[Observed]`
- **Supporting information de-emphasis:** Body text is dramatically smaller than headings (roughly 1/5th to 1/8th the heading size), set in a lightweight sans-serif. This extreme size contrast creates a clear two-tier hierarchy. Secondary text also uses the muted gray color token (`#626160`) in some instances. `[Observed]`
- **Reading flow pattern:** **L-pattern / Editorial scan.** The eye is drawn first to the large bottom-left title, then travels up-right to the main content area, then scans the supporting text. On photo-heavy slides, the photo serves as the anchor that draws the eye, with text providing context. `[Inferred – high confidence]`
- **Visual separation of sections:** Primarily through **generous white space**. No colored background blocks, cards, or heavy divider lines are used to separate sections. Thin 1px horizontal rules appear in the header and occasionally between content sections. Numbering (01, 02, 03, 04) provides implicit sectioning. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** Very airy — approaching sparse. `[Observed]`
- **Where white space is most generous:** Between the header and main content; around the large section title at the bottom-left; between major content blocks (text vs. photo regions). The bottom-left section title typically has substantial clear space above it. `[Observed]`
- **Where elements are grouped tightly:** Within content modules — numbered items (01–04) sit close to their associated text; name/post labels are grouped tightly with their photos on the team slide; skills bars are compact. `[Observed]`

---

## 4. Component Library

### **Header Bar**
- **Purpose:** Persistent branding and metadata strip at the top of every slide
- **Anatomy:** Three text elements arranged horizontally — "[Deck Title]" (left), "@2027" (center), "VERISON .2" (right) — sitting on or above a thin horizontal rule
- **Visual Specs:** Background: transparent (part of white slide); border: 1px solid `border` token below; no fill; padding: ~1.5% slide height vertical
- **Typography:** `label.header` token — small uppercase sans-serif, wide letter spacing
- **Placement Rules:** Pinned to the very top of every slide, spanning full width within margins
- **Variations:** Some slides show only "[Deck Title]" on the left with "@2027" center or omitted; the right-side version label may vary or be absent `[Observed]`

### **Section Title Block**
- **Purpose:** Declares the slide's topic/section name as a dramatic typographic anchor
- **Anatomy:** Single text element — the section name in enormous bold italic serif
- **Visual Specs:** Fill: `text.primary`; no background, border, or shadow
- **Typography:** `heading.hero` or `heading.section` token — Playfair Display Black Italic, UPPERCASE
- **Placement Rules:** Bottom-left corner of the slide, aligned to the left margin (~6% from left edge), sitting ~4–10% above the slide bottom. Takes up roughly 10–15% of slide height
- **Variations:** Sometimes the title is the only text on the bottom third of the slide (VALUES, VISION, MISSION, FOUNDER, CONTENTS, OUR TEAM, ABOUT DECK). On cover slides, the hero title moves to the center-left area `[Observed]`

### **Tag / Label Chip**
- **Purpose:** Categorization label or call-to-action identifier (e.g., "CREATIVE STUDIO", "CONTENT")
- **Anatomy:** Text centered inside a thin-bordered rectangle
- **Visual Specs:** Fill: transparent (ghost style); border: 1px solid `border` (#1A1714); corner radius: 0px; padding: ~1% height × ~2.5% width
- **Typography:** `label` token — small uppercase sans-serif, wide tracking
- **Placement Rules:** Appears in the upper-left content area on cover slides ("CREATIVE STUDIO") or within content flow on contents slides ("CONTENT")
- **Variations:** All observed instances use the same ghost/outline style. No filled versions seen `[Observed]`

### **Numbered Content Block (Grid)**
- **Purpose:** Presents 2–4 parallel points, values, or features in a structured grid
- **Anatomy:** Large two-digit number ("01", "02", etc.) + paragraph of body text beneath
- **Visual Specs:** No background, border, or card styling — items are separated purely by whitespace and grid positioning
- **Typography:** Number uses `number.index` (bold sans-serif, ~3–4% slide height); text uses `body` token
- **Placement Rules:** Arranged in a 2×2 grid, typically in the left or center portion of the slide. Numbers are left-aligned above their text blocks
- **Variations:** Seen on Values slide with 4 items (01–04). Spacing between columns is ~4% of slide width; between rows is ~4% of slide height `[Observed]`

### **Team Member Card**
- **Purpose:** Displays a team member with photo, name, title, and brief description
- **Anatomy:** Index number ("/01", "/02", "/03") + rectangular portrait photo + name label + post/title label + description text
- **Visual Specs:** No card border, shadow, or background — elements are grouped through proximity
- **Typography:** Number: `number.index` with "/" prefix; Name: `label` (bold uppercase sans-serif); Title: `caption` (regular uppercase); Description: `body` (small regular)
- **Placement Rules:** Arranged in equal-width columns (3 across), each member taking ~28–30% of slide width with ~3% gaps
- **Variations:** Photos are rectangular, flush with no border. Numbers use the distinctive "/01" slash-prefix format `[Observed]`

### **Skills / Progress Bar**
- **Purpose:** Visualizes competency or metric levels as horizontal bars
- **Anatomy:** Label ("SKILLS") + multiple horizontal bars with percentage labels to the right
- **Visual Specs:** Bar fill: solid `text.primary` (#1A1714); bar height: ~1.5% of slide height; bar background: implied (unfilled area is white); no border radius (sharp ends)
- **Typography:** Label: `caption` uppercase; Percentage: `caption` right-aligned
- **Placement Rules:** Found on the Founder slide, positioned in the right content area below the bio text. Bars are stacked vertically with ~1% slide height gaps
- **Variations:** Only observed once. Bar widths correspond proportionally to their percentage values (70%, 56%, 40%) `[Observed]`

### **Founder / Bio Block**
- **Purpose:** Presents a key person (founder/CEO) with photo, name, biography, and skills
- **Anatomy:** Portrait photo (left) + stylized name heading + body text paragraph + skills bars
- **Visual Specs:** Two-column layout (~35% photo / ~65% text). Photo is rectangular with no border
- **Typography:** Name: `name.stylized` (large serif italic, uppercase); Bio: `body` (regular sans-serif); Section title "FOUNDER" at bottom-left using `heading.section`
- **Placement Rules:** Photo in the upper-left content area; text to the right; "FOUNDER" section title anchored at bottom-left
- **Variations:** The Welcome slide uses a similar bio layout but with a different photo placement (right side) and includes a handwritten-style signature `[Observed]`

### **Photo Frame**
- **Purpose:** Contains photography within the slide layout
- **Anatomy:** Rectangular image, sometimes with a very subtle 1px border
- **Visual Specs:** Corner radius: 0px (always); border: none or 1px solid `border`; no shadow, rounded mask, or decorative frame
- **Placement Rules:** Photos are placed flush against content areas, often in the upper portion of slides. Common positions: upper-right (cover, mission), upper-left (founder), right side (welcome), distributed across grid (values, about)
- **Variations:** Photos come in multiple aspect ratios — tall portrait (~3:4), landscape (~4:3), and near-square. Multiple photos on a single slide maintain similar tonal qualities `[Observed]`

### **Numbered List (Table of Contents)**
- **Purpose:** Sequential agenda or table of contents
- **Anatomy:** Number + period + section name, arranged vertically with consistent spacing
- **Visual Specs:** No borders, bullets, or decorative elements. Numbers are right-aligned, section names are left-aligned with a small gap
- **Typography:** Numbers: `body` or `caption` (regular weight); Section names: `body.uppercase` (uppercase, wide tracking)
- **Placement Rules:** Vertically stacked list, typically in the right portion of the Contents slide. Items numbered 1–11
- **Variations:** Seen alongside a small photo and body text paragraph. The "CONTENT" tag chip appears nearby `[Observed]`

### **Project / Item List**
- **Purpose:** Lists named items (projects, features) with descriptions
- **Anatomy:** Numbered label (e.g., "1. PROJECT NAME") + description text, repeated vertically
- **Visual Specs:** Separated by thin 1px horizontal rule lines between items. No background or card styling
- **Typography:** Item name: `label` (uppercase, bold); Description: `caption` (regular, smaller)
- **Placement Rules:** Found on the Vision slide, occupying the right column in a two-column layout
- **Variations:** 5–6 items visible with consistent spacing `[Observed]`

### **Divider Line**
- **Purpose:** Visual separation between content sections or list items
- **Anatomy:** Single horizontal line
- **Visual Specs:** 1px solid `border` (#1A1714); spans the width of the content column (not full slide width)
- **Typography:** N/A
- **Placement Rules:** Used in the header bar (full width), between project list items, and occasionally between content sections
- **Variations:** Always horizontal; no vertical dividers observed `[Observed]`

### **Editorial Quote / Statement Block**
- **Purpose:** Displays a large typographic statement as the slide's focal point
- **Anatomy:** Large multi-line serif text in italic, stacked with deliberate line breaks
- **Visual Specs:** No quotation marks, no background box, no decorative elements
- **Typography:** `heading.editorial` — Playfair Display Black Italic, ~5–7% slide height, tight line height (~1.05)
- **Placement Rules:** Upper-left content area on the Mission slide ("BEAUTY IS AN EXPRESSION"); additional context text below
- **Variations:** The Welcome slide's "HELLO I AM JAMES SMITH" uses a similar stacked editorial approach with the serif heading `[Observed]`

### **Person Info Block**
- **Purpose:** Displays a name and title/position in a structured format
- **Anatomy:** Two rows — "Name Title" label + actual name; "Post Title" label + actual title — separated by a thin horizontal rule
- **Visual Specs:** Labels left-aligned, values right-aligned (or left-aligned with spacing)
- **Typography:** Labels: `caption`; Values: `body` or `caption`
- **Placement Rules:** Seen on the Mission slide in the lower-left area, below the editorial quote
- **Variations:** Simple key-value pair layout `[Observed]`

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter tendencies:** Fashion-forward portraiture and lifestyle imagery. Subjects are predominantly women in stylish, contemporary clothing. Accessories feature prominently — leather bags, sunglasses, structured garments. Occasional lifestyle/adventure imagery (vintage van on the Vision slide). `[Observed]`
- **Cropping conventions:** Contained within sharp rectangular frames — never full-bleed, never circular, never masked to organic shapes. Photos maintain generous internal composition with the subject well-framed. `[Observed]`
- **Color treatment:** Warm color grading with a slight desaturation. Tones lean toward earth tones — caramel, tan, olive, brown, cream. Skin tones are warm and natural. No cold/blue color grading. The warmth of the photography is the primary source of color in the otherwise black-and-white design system. Key color values from photography: `#A98C68` (caramel), `#CFB6AC` (blush), `#5C3923` (deep brown), `#915E3B` (warm sienna). `[Observed]`
- **Overlay usage:** None. No color tints, gradient overlays, or opacity layers are applied over any photographs. Images are presented cleanly without post-processing overlays. `[Observed]`
- **When photos are used vs. avoided:** Every slide contains at least one photograph. Photos are integral to the design language — they provide visual interest, warmth, and brand personality. Slides never rely solely on text or graphics. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon usage:** Not present. The deck contains zero icons, pictograms, or illustrative elements. All communication is achieved through typography and photography alone. `[Observed]`
- **Illustration style:** Not present. No illustrations of any kind. `[Observed]`

### 5.3 Decorative Elements

- **Background patterns or textures:** None. All backgrounds are flat solid white. No noise, grain, geometric patterns, or textural treatments. `[Observed]`
- **Floating shapes:** None. No decorative shapes, blobs, dots, or abstract elements. `[Observed]`
- **How prominent:** N/A — decorative restraint is absolute. The only visual elements are typography, photography, and thin rule lines. `[Observed]`
- **Where they appear:** N/A `[Observed]`

### 5.4 Data Visualization

- **Chart types observed:** Only horizontal progress bars on the Founder slide (Skills section). `[Observed]`
- **Bar style:**
  - Solid fill using `text.primary` (#1A1714) `[Observed]`
  - Sharp/square ends (0px radius) `[Observed]`
  - Bar height: ~8–12px equivalent at slide scale `[Observed]`
  - Background track: implicit white (no visible track background) `[Observed]`
- **Label typography:** Percentage labels use `caption` token, positioned to the right of each bar `[Observed]`
- **No other chart types** (pie, donut, line, bar chart, table) are present in the deck `[Observed]`

---

## 6. Slide Template Catalog

### Template: "Cover / Title Slide"

- **When to use:** Opening slide or major section break. Introduces the deck name and brand positioning statement.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - Tag label ("CREATIVE STUDIO"): ~6% left, ~18% top, ~15% wide, ~4% tall
  - Body text paragraph: ~6% left, ~25% top, ~40% wide, ~15% tall
  - Hero title ("[Deck Title]"): ~6% left, ~60% top, ~50% wide, ~30% tall
  - Feature photo: ~55% left, ~5% top, ~40% wide, ~50% tall
- **Text style mapping:** Hero title → `heading.hero`; Tag → `label` inside bordered chip; Body → `body`; Header → `label.header`
- **Color token mapping:** Background: `bg.primary`; All text: `text.primary`; Tag border: `border`
- **Components used:** Header Bar, Tag/Label Chip, Photo Frame, Section Title Block (as hero)
- **Variation rules:** The hero title position can shift based on content length. Photo can be placed upper-right or right-center. Body text is optional. `[Observed]`

### Template: "Welcome / Personal Introduction"

- **When to use:** Introducing a person (founder, speaker, host) with their name and personal statement.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - Stylized name ("HELLO I AM JAMES SMITH"): ~6% left, ~12% top, ~35% wide, ~20% tall
  - Body text (bio paragraph): ~6% left, ~35% top, ~40% wide, ~35% tall
  - Signature line: ~6% left, ~72% top, ~15% wide, ~3% tall
  - Portrait photo: ~55% left, ~8% top, ~38% wide, ~70% tall
  - Section title ("WELCOME"): ~6% left, ~88% top, ~35% wide, ~8% tall
- **Text style mapping:** Name → `name.stylized`; Bio → `body`; Signature → `caption` italic; Section title → `heading.section`
- **Color token mapping:** All `bg.primary` background; `text.primary` for all text
- **Components used:** Header Bar, Editorial Quote Block (name), Photo Frame, Section Title Block
- **Variation rules:** Photo can be left or right. Name styling is stacked serif. `[Observed]`

### Template: "Contents / Agenda"

- **When to use:** Table of contents or agenda listing all sections of the presentation.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - Body text paragraph: ~6% left, ~10% top, ~45% wide, ~25% tall
  - Photo: ~55% left, ~10% top, ~20% wide, ~25% tall
  - Numbered list: ~55% left, ~10% top, ~38% wide, ~65% tall
  - "CONTENT" tag chip: ~6% left, ~65% top, ~12% wide, ~4% tall
  - Section title ("CONTENTS"): ~6% left, ~85% top, ~40% wide, ~10% tall
- **Text style mapping:** List items → `body.uppercase`; Numbers → `body`; Body → `body`; Tag → `label`; Section title → `heading.section`
- **Color token mapping:** Standard black on white throughout
- **Components used:** Header Bar, Numbered List, Tag/Label Chip, Photo Frame, Section Title Block
- **Variation rules:** Photo placement can vary. List can be 8–12 items. `[Observed]`

### Template: "Values / Numbered Grid"

- **When to use:** Presenting 4 parallel points, values, principles, or features.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - Full-width uppercase text block: ~6% left, ~8% top, ~88% wide, ~10% tall
  - Numbered grid (2×2):
    - "01": ~6% left, ~22% top, ~22% wide, ~18% tall
    - "02": ~30% left, ~22% top, ~22% wide, ~18% tall
    - "03": ~6% left, ~42% top, ~22% wide, ~18% tall
    - "04": ~30% left, ~42% top, ~22% wide, ~18% tall
  - Photo(s): ~55% left, ~15% top, ~38% wide, ~30% tall
  - Bullet list: ~55% left, ~50% top, ~38% wide, ~15% tall
  - Section title ("VALUES"): ~6% left, ~85% top, ~30% wide, ~10% tall
- **Text style mapping:** Numbers → `number.index`; Grid text → `body`; Intro text → `body.uppercase`; Bullets → `body`; Section title → `heading.section`
- **Color token mapping:** Standard monochrome
- **Components used:** Header Bar, Numbered Content Block (Grid), Photo Frame, Section Title Block
- **Variation rules:** Can accommodate 2, 3, or 4 items. Photos can be single or multiple. `[Observed]`

### Template: "Mission / Statement"

- **When to use:** A bold statement, mission declaration, or inspirational quote as the slide's centerpiece.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - Editorial statement text: ~6% left, ~10% top, ~35% wide, ~25% tall
  - "TITLE HERE" label: ~6% left, ~38% top, ~20% wide, ~3% tall
  - Subtitle text: ~6% left, ~42% top, ~30% wide, ~5% tall
  - Person info block: ~6% left, ~65% top, ~35% wide, ~12% tall
  - Photo: ~55% left, ~8% top, ~38% wide, ~55% tall
  - Section title ("MISSION"): ~6% left, ~85% top, ~35% wide, ~10% tall
- **Text style mapping:** Statement → `heading.editorial`; Title label → `label`; Subtitle → `caption`; Person info → `body`; Section title → `heading.section`
- **Color token mapping:** Standard monochrome
- **Components used:** Header Bar, Editorial Quote Block, Person Info Block, Photo Frame, Section Title Block
- **Variation rules:** The statement text drives the layout — shorter statements can be larger. Photo placement is flexible. `[Observed]`

### Template: "Vision / Project List"

- **When to use:** Presenting a vision statement with a list of projects, initiatives, or offerings.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - Tag chip: ~6% left, ~10% top, ~12% wide, ~4% tall
  - Large editorial heading: ~35% left, ~8% top, ~58% wide, ~25% tall
  - Project list (5–6 items): ~35% left, ~35% top, ~58% wide, ~40% tall
  - Photo(s): ~6% left, ~15% top, ~25% wide, ~25% tall
  - Bullet list: ~6% left, ~55% top, ~25% wide, ~15% tall
  - Section title ("VISION"): ~6% left, ~85% top, ~30% wide, ~10% tall
- **Text style mapping:** Heading → `heading.editorial`; Project names → `label`; Project descriptions → `caption`; Section title → `heading.section`
- **Color token mapping:** Standard monochrome
- **Components used:** Header Bar, Tag/Label Chip, Editorial Quote Block, Project/Item List, Photo Frame, Divider Line, Section Title Block
- **Variation rules:** Can use one or two photos. List length is flexible (3–8 items). `[Observed]`

### Template: "About / Two-Column Text"

- **When to use:** Detailed descriptive content with longer text passages — about sections, detailed explanations.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - "ABOUT THE BRAND" heading: ~50% left, ~10% top, ~44% wide, ~4% tall
  - Left text column: ~6% left, ~10% top, ~40% wide, ~50% tall
  - Right text column: ~50% left, ~15% top, ~44% wide, ~45% tall
  - Photos (2–3 small): scattered in lower-right or right area, ~20% wide each
  - Section title ("ABOUT DECK"): ~6% left, ~85% top, ~40% wide, ~10% tall
- **Text style mapping:** Sub-heading → `heading.sub`; Body text → `body`; Section title → `heading.section`
- **Color token mapping:** Standard monochrome
- **Components used:** Header Bar, Photo Frame, Section Title Block
- **Variation rules:** Text can be single column for shorter content. Photo arrangement is flexible. `[Observed]`

### Template: "Our Team / Multi-Person Grid"

- **When to use:** Introducing team members (3 people per slide).
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall (or minimal)
  - Team member 1: ~6% left, ~8% top, ~28% wide, ~65% tall
  - Team member 2: ~36% left, ~8% top, ~28% wide, ~65% tall
  - Team member 3: ~66% left, ~8% top, ~28% wide, ~65% tall
  - Within each member column:
    - Number ("/01"): top, ~3% tall
    - Photo: below number, ~40% of column height
    - Name: below photo, `label`
    - Title: below name, `caption`
    - Description: below title, `body`
  - Section title ("OUR TEAM"): ~6% left, ~85% top, ~35% wide, ~10% tall
- **Text style mapping:** Number → `number.index` with "/" prefix; Name → `label` bold uppercase; Title → `caption` uppercase; Description → `body`; Section title → `heading.section`
- **Color token mapping:** Standard monochrome
- **Components used:** Header Bar, Team Member Card (×3), Section Title Block
- **Variation rules:** Can adjust to 2 or 4 members by changing column widths. `[Observed]`

### Template: "Founder / Bio"

- **When to use:** Spotlighting a single person with detailed biography and skills.
- **Placement map:**
  - Header bar: 0% left, 0% top, 100% wide, ~5% tall
  - Portrait photo: ~6% left, ~10% top, ~30% wide, ~40% tall
  - Name heading: ~42% left, ~10% top, ~50% wide, ~8% tall
  - Bio paragraph: ~42% left, ~20% top, ~50% wide, ~18% tall
  - Skills bars: ~42% left, ~42% top, ~40% wide, ~15% tall
  - Section title ("FOUNDER"): ~6% left, ~85% top, ~35% wide, ~10% tall
- **Text style mapping:** Name → `name.stylized`; Bio → `body.uppercase` or `body`; Skills label → `caption`; Percentages → `caption`; Section title → `heading.section`
- **Color token mapping:** Standard monochrome; bars use `accent.1` (black)
- **Components used:** Header Bar, Photo Frame, Skills/Progress Bar, Section Title Block
- **Variation rules:** Skills section is optional. Bio length can vary. `[Observed]`

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. **Always use a white (#FFFFFF) background** — every slide must have a clean white base with no exceptions `[Observed]`
2. **Always include the header bar** at the top of every slide with brand name, year, and version in small uppercase sans-serif `[Observed]`
3. **Always place the section title in the bottom-left** in large bold italic serif (Playfair Display Black Italic) — this is the deck's most distinctive design signature `[Observed]`
4. **Always use sharp 0px corner radius** on every element — images, buttons, containers, and bars `[Observed]`
5. **Always include at least one photograph** on every slide to provide warmth and visual interest `[Observed]`
6. **Always left-align all text** — headings, body text, labels, and lists must be left-aligned `[Observed]`
7. **Always maintain extreme typographic contrast** — headings should be 4–8× larger than body text `[Observed]`
8. **Always use only black (#1A1714) and white** for the design system elements (text, borders, bars); let photography be the sole source of color `[Observed]`
9. **Always use thin 1px borders** when borders are needed — never thick or decorative `[Observed]`
10. **Always use generous white space** — leave at least 30% of the slide as empty white space `[Observed]`
11. **Always use zero-padded numbers** (01, 02, 03) for grid/card numbering, and slash-prefixed numbers (/01, /02) for team member indexing `[Observed]`
12. **Always use UPPERCASE** for section titles, labels, and header text `[Observed]`

### ❌ DON'T (things that would immediately break the aesthetic)

1. **Never use rounded corners** — no border-radius on any element, ever. This is a hard geometric design `[Observed]`
2. **Never use color backgrounds** — no colored sections, accent panels, or dark slides. The background is always white `[Observed]`
3. **Never center-align text** — all text is left-aligned. Centered text would break the editorial grid `[Observed]`
4. **Never use drop shadows or box shadows** — the design is flat and shadow-free `[Observed]`
5. **Never use gradients** — all fills are flat solid colors `[Observed]`
6. **Never use icons, emojis, or illustrations** — the visual language relies exclusively on typography and photography `[Observed]`
7. **Never use more than two typefaces** — stick to the serif heading font and sans-serif body font `[Observed]`
8. **Never use colored text** (blue links, red warnings, green indicators) — all text is black or dark gray `[Observed]`
9. **Never use decorative elements** — no blobs, abstract shapes, patterns, or ornamental borders `[Observed]`
10. **Never use transparency or opacity overlays** on photos or backgrounds `[Observed]`
11. **Never make body text larger than ~2.5% of slide height** — the size hierarchy must be preserved `[Observed]`
12. **Never crowd the slide** — if content doesn't fit with generous spacing, split it across multiple slides `[Observed]`

---

## 8. Reproduction Checklist

- [ ] **Background:** Set slide background to pure white (`#FFFFFF`). No exceptions.
- [ ] **Header bar:** Add persistent top header with brand name (left), year (center), version (right) in `label.header` style, separated by a thin 1px rule below.
- [ ] **Section title:** Place the slide's section name at the bottom-left in `heading.hero` or `heading.section` style (Playfair Display Black Italic, UPPERCASE, ~8–14% of slide height).
- [ ] **Typography pairing:** Use only Playfair Display (Black Italic) for headings and DM Sans (Regular/Medium) for body text. No other fonts.
- [ ] **Color discipline:** Use only `#1A1714` (near-black) for all text, borders, and graphic elements. Use `#626160` for secondary/muted text only.
- [ ] **Corner radius:** Set all corner radii to 0px — images, containers, buttons, bars, everything.
- [ ] **Borders:** When using borders, set to 1px solid `#1A1714`. Use sparingly (header rule, tag chips, list dividers).
- [ ] **Shadows:** Remove all shadows from every element.
- [ ] **Margins:** Maintain ~6–8% margins from left/right edges and ~5% from top (below header).
- [ ] **Photography:** Include at least one rectangular photo per slide. Apply warm color grading (earth tones: caramel, tan, cream). No filters, overlays, or circular crops.
- [ ] **Alignment:** Left-align all text without exception.
- [ ] **White space:** Ensure at least 25–35% of the slide area is empty white space.
- [ ] **Number formatting:** Use "01", "02" for content grid items; "/01", "/02" for team members; "1.", "2." for agenda lists.
- [ ] **Tag chips:** Use ghost-style bordered rectangles (1px solid, transparent fill, 0px radius) for category labels.
- [ ] **Hierarchy check:** Verify that the heading is at least 4× the size of body text.
- [ ] **No icons or illustrations:** Communicate everything through type and photography.
- [ ] **No gradients or decorative elements:** Keep all elements flat and minimal.
- [ ] **Template selection:** Choose the appropriate template based on content type:
  - Title/cover → Cover Template
  - Person intro → Welcome or Founder Template
  - List/agenda → Contents Template
  - Parallel points → Values (Numbered Grid) Template
  - Statement/quote → Mission Template
  - Feature list → Vision Template
  - Descriptions → About (Two-Column) Template
  - Team → Our Team Template
- [ ] **Consistency check:** Before finalizing, verify that all slides share the same header bar, margin proportions, font pairing, and section title treatment.
- [ ] **Photo tone check:** Verify all photos share a warm, earth-toned color palette — reject cool-blue, neon, or heavily saturated images.

---

## 9. Background/Texture Generation Prompt

> Create a perfectly flat, solid white background with zero texture, zero grain, and zero pattern. The surface should be a pure, clean white (#FFFFFF) with absolutely no visual noise, gradients, shadows, or dimensional effects. This is a high-fashion editorial design context where the background must be completely invisible — acting as negative space that makes bold black serif typography and warm-toned fashion photography the sole focal points. The background should feel like the blank page of a premium printed magazine or luxury brand lookbook. No elements, no decoration, no subtle textures — just pure, pristine white emptiness.

---

## 10. Uncertainties & Open Questions

### Confirmed Uncertainties

- **Exact heading font:** The serif heading font is identified as closest to **Playfair Display Black Italic**, but the actual typeface could be a commercial font like **Didot**, **Bodoni**, **Freight Display**, or a custom typeface. The exact family cannot be confirmed from screenshots alone. `[Inferred – high confidence in match, medium confidence in exact identification]`
- **Exact body font:** The sans-serif is identified as **DM Sans** but could be **Work Sans**, **Inter**, **Manrope**, or another geometric sans-serif. `[Inferred – medium confidence]`
- **Exact spacing values:** All spacing measurements are approximate percentages estimated from screenshots. Actual pixel/point values from the source file would improve precision. `[Inferred – medium confidence]`
- **"VERISON .2" intentionality:** The header reads "VERISON .2" (misspelled) on every slide — unclear if this is intentional branding or a typo in the template. `[Observed but uncertain intent]`
- **Animation/transition behavior:** Cannot be determined from static images. Given the minimal aesthetic, transitions are likely subtle (fade, none) rather than dramatic. `[Unknown]`
- **Photo treatment specifics:** Whether a specific color-grading LUT or filter preset is applied to photos cannot be determined from screenshots. `[Unknown]`

### Targeted Questions to Improve Reproduction Fidelity

1. **Do you know the exact brand font used for the headings?** (Confirming Playfair Display vs. a commercial serif like Didot or Bodoni would significantly improve typographic accuracy.)
2. **What is the body/sans-serif font family?** (Confirming DM Sans vs. Work Sans, Inter, or another geometric sans would lock down the type system.)
3. **Was this template built in PowerPoint, Keynote, or Google Slides?** (The slide_06 image shows all three app icons — knowing the source tool would clarify grid spacing, font rendering, and export conventions.)
4. **Is the warm color grading on photos a deliberate brand requirement, or are the photos simply chosen for their existing warm tone?** (This determines whether the AI should actively warm-grade images or just select warm-toned stock photos.)
5. **Should the "VERISON .2" header text be corrected to "VERSION .2" or kept as-is for brand fidelity?**
