# Dark Purple Minimal — Theme Guide

> **Theme Name:** `dark-purple-minimal`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Dark, Refined, Purposeful
- **Visual Personality:** Minimalist-techy with a premium SaaS editorial sensibility. Clean lines, restrained palette, and meticulous spacing convey engineering precision and design confidence. [Observed]
- **Mood & Emotion:** Professional authority blended with quiet sophistication. The dark-mode palette signals modernity and developer-centric values; the single purple accent creates a signature identity without visual noise. [Observed]
- **Design References:** Echoes the 2020s dark-mode SaaS movement (modern dark-mode SaaS brands). Shares DNA with Swiss typography's grid discipline and Apple's dark keynote aesthetics. The restrained color strategy recalls monochromatic editorial design. [Inferred, high confidence]
- **Information Density:** 2/5 — generous white space with typically 3–5 content elements per slide. [Observed]
- **Polish Level:** 5/5 — pixel-perfect alignment, consistent token usage, no orphaned elements or visual artifacts. [Observed]
- **Shape Language:** Geometric and sharp. Rectangles with very slight corner radii dominate. Circles appear only as icon containers. No organic/blobby shapes. [Observed]

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#0A0B0F` | Main slide background — consistent across all 9 slides [Observed] |
| `bg.secondary` | `#1C1E26` | Card fills, container backgrounds (slides 02, 03, 05) [Observed] |
| `bg.tertiary` | `#14151A` | Subtle surface differentiation for nested containers [Inferred, medium confidence] |
| `text.primary` | `#FFFFFF` | Headings, bold titles, CTA links [Observed] |
| `text.secondary` | `#8A8F98` | Body text, descriptions, muted copy [Observed] |
| `text.heading` | `#FFFFFF` | Hero headings — same as `text.primary` [Observed] |
| `text.tertiary` | `#6B7280` | Slide numbers, vertical sidebar text, least-emphasis text [Inferred, medium confidence] |
| `accent.1` | `#5E6AD2` | Primary purple — section labels, accent bars, highlighted elements, CTA hover states (all slides) [Observed] |
| `accent.2` | `#7C85DB` | Lighter purple — secondary accent, gradient endpoints, subtle highlights [Inferred, medium confidence] |
| `border` | `#2A2D35` | Card borders, horizontal dividers, separator lines [Observed] |
| `quote.text` | `#C8CCD4` | Testimonial quote body text — brighter than `text.secondary` (slide 03) [Observed] |

**Additional notes:**
- **Gradient usage:** A very subtle radial gradient glow (purple-blue tint, approximately `#5E6AD2` at 5–8% opacity) appears in the upper-right quadrant of some slides, creating depth without competing with content. [Observed on slide 01, Inferred on others, medium confidence]
- **Color relationships:** Near-monochromatic dark palette anchored by a single purple accent hue. The palette uses value/lightness shifts within the same blue-gray family rather than introducing new hues. [Observed]
- **Dark mode orientation:** Exclusively dark — no light-mode slides in the deck. All backgrounds are near-black, all foreground text is light. [Observed]
- **Color consistency across slide types:** Background and text tokens remain constant. The purple accent (`accent.1`) is the only color that carries semantic meaning (marking section labels, interactive elements, and visual accents). [Observed]

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Inter | sans-serif | 600 (Semibold) | ~6–7% of slide height [Observed] | -0.02em [Inferred, high confidence] | None | ~1.1 [Inferred, high confidence] |
| `heading.section` | Inter | sans-serif | 500 (Medium) | ~1.8–2% of slide height [Observed] | 0em (normal) [Inferred, medium confidence] | None | ~1.4 [Inferred, medium confidence] |
| `heading.sub` | Inter | sans-serif | 600 (Semibold) | ~2.5–3% of slide height [Observed] | -0.01em [Inferred, medium confidence] | None | ~1.2 [Inferred, medium confidence] |
| `body` | Inter | sans-serif | 400 (Regular) | ~2% of slide height [Observed] | 0em (normal) [Inferred, medium confidence] | None | ~1.55 [Inferred, high confidence] |
| `caption` | Inter | sans-serif | 400 (Regular) | ~1.2–1.5% of slide height [Observed] | 0em [Inferred, low confidence] | None | ~1.4 [Inferred, low confidence] |
| `label` | Inter | sans-serif | 400 (Regular) | ~1.2% of slide height [Observed] | 0.02em [Inferred, low confidence] | Rotated 90° CCW [Observed] | ~1.4 [Inferred, low confidence] |
| `cta` | Inter | sans-serif | 500 (Medium) | ~1.8–2% of slide height [Observed] | 0em [Inferred, medium confidence] | None | ~1.4 [Inferred, medium confidence] |

**Additional typography notes:**
- **Font identification:** Inter is identified based on distinguishing letterform characteristics (double-story 'a', flat-topped 't', open apertures, geometric proportions) and the brand's known usage. Inter is available on Google Fonts. [Inferred, high confidence]
- **Special treatments:** None observed — no outlined text, gradient fills, text shadows, or colored highlights behind text. The design relies entirely on weight and color contrast for typographic hierarchy. [Observed]
- **Emphasis method:** Weight change (Regular → Semibold) and color change (`text.secondary` → `text.primary`, or `text.primary` → `accent.1`) are the only emphasis mechanisms. [Observed]
- **Number formatting:** Slide numbers use zero-padded two-digit format (e.g., "04", "05"). [Observed]

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Slight (6–8px) [Observed] | Applied to feature cards; no fully rounded or pill shapes except circular icon containers |
| Borders | Thin solid (~1px) [Observed] | Color: `border` token (`#2A2D35`). Applied to cards and divider lines |
| Shadows | None [Observed] | No drop shadows, box shadows, or glow effects on any element |
| Transparency/Opacity | Sparingly [Inferred, medium confidence] | Possible very subtle opacity layering on cards; background gradient glow uses low opacity (~5–8%) |
| Stroke weight (icons) | Thin to medium (1.5–2px) [Observed] | Consistent across all line-style icons (slides 02, 03, 05) |
| Accent bar | 3–4px wide vertical bar [Observed] | Used on testimonial quote blocks (slide 03); color: `accent.1` |

### 2.4 Spacing Scale

- **Base unit:** 8px [Inferred, high confidence — all observed spacing aligns to 8px multiples]
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px [Inferred, high confidence]
- **Margin from slide left edge:** ~11–12% of slide width [Observed]
- **Margin from slide top:** ~13–15% of slide height [Observed]
- **Margin from slide right edge:** ~3–5% of slide width (content bleeds closer to right edge) [Observed]
- **Margin from slide bottom:** ~4–6% of slide height [Observed]
- **Gap between section label and hero heading:** ~1.5–2% of slide height (~16px) [Observed]
- **Gap between hero heading and body text:** ~3% of slide height (~32px) [Observed]
- **Gap between body text and CTA link:** ~3–4% of slide height (~32–40px) [Observed]
- **Card grid gap:** ~2% of slide width (~20–24px) [Observed]
- **Card internal padding:** ~5–6% of card width (~20–24px) [Observed]
- **Gap between icon and title inside cards:** ~2% of card height (~12–16px) [Observed]
- **Gap between title and description inside cards:** ~1.5% of card height (~8–12px) [Observed]

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Asymmetric 2-column layout dominates (7 of 9 slides). Single-column centered layout used for hero/CTA slides (slides 01, 09). [Observed]
- **Column proportions:** ~45% left (text content) / ~55% right (visual content — cards or screenshots). [Observed on slides 02–08]
- **Alignment bias:** Strongly left-aligned. All text content anchors to the left column. No centered body text on content slides. [Observed]
- **Content safe zone:** Left: ~11% of slide width. Top: ~13% of slide height. Right: ~3–5% of slide width. Bottom: ~4–6% of slide height. [Observed]
- **Vertical sidebar:** A persistent vertical text element sits at ~2% from the left edge, outside the main content safe zone. [Observed on slides 01–08]
- **Logo position:** Top-left corner, ~2.5% from left, ~3% from top, ~2.5% of slide width. [Observed on all slides]

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Hero headings use the largest type size (`heading.hero`), white color, and Semibold weight, positioned in the upper-left of the reading zone — the highest-attention area. [Observed]
- **Supporting information de-emphasis:** Body text drops to `text.secondary` color (gray) and Regular weight, creating a clear luminance-based hierarchy. [Observed]
- **Section categorization:** Purple section labels (`heading.section` in `accent.1`) sit above the hero heading, acting as a breadcrumb/category indicator. [Observed on slides 01–08]
- **Reading flow:** F-pattern. The eye enters at the section label (top-left), drops to the hero heading, scans right to the visual content, then returns left to the body text and CTA. [Observed]
- **Content separation:** Sections are separated primarily through vertical white space. Horizontal divider lines (`border` color) are used sparingly (slide 03). Cards provide visual grouping through contained fills. [Observed]

### 3.3 White Space Philosophy

- **Overall density:** Airy — generous padding around all elements, content rarely exceeds 60% of available slide area. [Observed]
- **Most generous white space:** Between the hero heading and the right-column visual content; between major content blocks vertically; and in the bottom third of text-heavy slides. [Observed]
- **Tightest grouping:** Inside feature cards (icon → title → description) and between section label and hero heading — these are semantically linked elements that group tightly. [Observed]

---

## 4. Component Library

> **Section Label**
> - **Purpose:** Categorizes the slide content (e.g., "[Brand] Overview", "Issue Tracking", "Cycles", "Projects", "Roadmaps") [Observed]
> - **Anatomy:** Single line of text, no background or container
> - **Visual Specs:** No fill, no border, no shadow. Text only. [Observed]
> - **Typography:** `heading.section` — Inter Medium, ~1.8–2% height, color `accent.1` (#5E6AD2) [Observed]
> - **Placement Rules:** Top-left of content zone, ~11% from left, ~13% from top. Always appears above the hero heading. [Observed]
> - **Variations:** Text content changes per section but styling is constant. [Observed]

> **Hero Heading Block**
> - **Purpose:** Delivers the primary message of the slide [Observed]
> - **Anatomy:** 1–2 lines of large heading text. May include a subtitle line in `accent.1` color on hero slides. [Observed]
> - **Visual Specs:** No background, no container. Text only. [Observed]
> - **Typography:** `heading.hero` — Inter Semibold, ~6–7% height, color `text.primary` (#FFFFFF), tight letter spacing (-0.02em) [Observed]
> - **Placement Rules:** Below Section Label with ~1.5–2% gap. Left-aligned within the left column (~11% from left, ~17–20% from top). Max width ~40% of slide width on 2-column layouts. [Observed]
> - **Variations:** On the closing CTA slide (slide 09), the heading is centered and may occupy a wider proportion of the slide. [Observed]

> **Body Text Block**
> - **Purpose:** Provides supporting detail for the hero heading [Observed]
> - **Anatomy:** 1–3 lines of body copy. [Observed]
> - **Visual Specs:** No background, no container. Text only. [Observed]
> - **Typography:** `body` — Inter Regular, ~2% height, color `text.secondary` (#8A8F98), ~1.55 line height [Observed]
> - **Placement Rules:** Below the hero heading with ~3% gap. Same left alignment. Max width ~35–40% of slide width. [Observed]
> - **Variations:** None — consistent treatment across all slides. [Observed]

> **CTA Link**
> - **Purpose:** Directs attention to further information (e.g., "See all features →") [Observed]
> - **Anatomy:** Text string followed by a right-pointing arrow character (→). No button container. [Observed]
> - **Visual Specs:** No fill, no border. Text is `text.primary` (#FFFFFF) or `accent.1` (#5E6AD2). Arrow is inline with text. [Observed]
> - **Typography:** `cta` — Inter Medium, ~1.8–2% height, white or accent color [Observed]
> - **Placement Rules:** Below body text with ~3–4% gap. Same left alignment as body. [Observed on slides 01, 04, 06, 07, 08]
> - **Variations:** May appear as a standalone link or as part of a button-like element on the closing slide (slide 09). [Observed]

> **Feature Card**
> - **Purpose:** Presents a feature or capability with an icon, title, and short description [Observed on slides 02, 05]
> - **Anatomy:** Container → line icon (top) → bold title → gray description text [Observed]
> - **Visual Specs:** Fill `bg.secondary` (#1C1E26), border 1px solid `border` (#2A2D35), corner radius 6–8px, no shadow. Internal padding ~5–6% of card width. [Observed]
> - **Typography:** Title uses `heading.sub` (Inter Semibold, white). Description uses `body` (Inter Regular, `text.secondary`). [Observed]
> - **Placement Rules:** Arranged in a 2×2 grid in the right column (~50–55% from left, ~15–85% vertically). Grid gap ~2% of slide width. Each card occupies ~23–25% of slide width and ~30–35% of slide height. [Observed]
> - **Variations:** Icon style varies by topic (wrench, sparkle, lightning, keyboard) but all use the same line-style treatment. Card size and padding are constant. [Observed]

> **Circular Icon Container**
> - **Purpose:** Holds an icon for a benefit or feature list item [Observed on slide 03]
> - **Anatomy:** Circular container → centered icon inside [Observed]
> - **Visual Specs:** Circle diameter ~3% of slide width (~40–48px). Fill `bg.secondary` (#1C1E26) with subtle border ring in `border` (#2A2D35). Icon is white, line-style, centered within circle. [Observed]
> - **Typography:** N/A — icon only, no text inside the circle [Observed]
> - **Placement Rules:** Left-aligned at the start of each benefit item row, vertically centered with the adjacent title text. [Observed]
> - **Variations:** One variation uses a purple-tinted fill and icon (the "Easy transition" item on slide 03), signaling a differentiated/highlighted item. [Observed]

> **Benefit Item**
> - **Purpose:** Presents a benefit point with icon, title, and description [Observed on slide 03]
> - **Anatomy:** Circular Icon Container (left) + bold title (right of icon) + gray description below title [Observed]
> - **Visual Specs:** No container fill — items sit directly on `bg.primary`. Separated from each other by ~3–4% of slide height. [Observed]
> - **Typography:** Title uses `heading.sub` (Inter Semibold, white). Description uses `body` (Inter Regular, `text.secondary`). [Observed]
> - **Placement Rules:** Stacked vertically in the left column. 3 benefit items with a divider line separating them from a 4th transition item. [Observed]
> - **Variations:** The 4th item ("Easy transition from current tool") has a purple-tinted circular icon and includes em-dash-bulleted sub-items. [Observed]

> **Testimonial Quote Block**
> - **Purpose:** Displays a customer testimonial with attribution [Observed on slide 03]
> - **Anatomy:** Left vertical accent bar → quote text → company logo + company name below [Observed]
> - **Visual Specs:** Accent bar: 3–4px wide, color `accent.1` (#5E6AD2), full height of quote text block. No container fill or border beyond the accent bar. [Observed]
> - **Typography:** Quote text uses `quote.text` color (#C8CCD4), Inter Regular or Medium, ~2% height. Company name uses `heading.sub` style, white. [Observed]
> - **Placement Rules:** Right column, stacked vertically (2 quotes per slide). Each quote block occupies ~40% of slide width and ~25–30% of slide height. [Observed on slide 03]
> - **Variations:** Different company attributions ([Brand] with green icon, [Brand] with circular mark). Logo + name pattern is consistent. [Observed]

> **Product Screenshot**
> - **Purpose:** Shows the [Brand] product UI in context to demonstrate a feature [Observed on slides 04, 06, 07, 08]
> - **Anatomy:** A contained dark-UI screenshot occupying the right column. No visible frame, border, or drop shadow — the dark UI blends naturally with the dark slide background. [Observed]
> - **Visual Specs:** No explicit border or frame. Screenshot sits on `bg.primary` and its own dark UI provides natural containment. May have a very subtle rounded corner crop (~8px). [Observed]
> - **Typography:** N/A — screenshot is a raster image [Observed]
> - **Placement Rules:** Right column, ~48–50% from left edge, ~8–12% from top, extending to ~95–97% right and ~90–92% bottom. [Observed]
> - **Variations:** Screenshot content varies (board view, cycles timeline, projects view, roadmap) but sizing and positioning are consistent. [Observed]

> **Horizontal Divider**
> - **Purpose:** Visually separates content sections within a slide [Observed on slide 03]
> - **Anatomy:** Single thin horizontal line [Observed]
> - **Visual Specs:** Height ~1px, color `border` (#2A2D35), width spans the left content column. [Observed]
> - **Typography:** N/A [Observed]
> - **Placement Rules:** Between vertically stacked content groups, spanning the width of the left column. [Observed on slide 03]
> - **Variations:** None observed — used sparingly, only when needed to separate semantically distinct groups within the same column. [Observed]

> **Logo Lockup**
> - **Purpose:** Brand identification on every slide [Observed]
> - **Anatomy:** [Brand]'s stylized layered diamond/chevron mark. Mark only — no wordmark on content slides. [Observed]
> - **Visual Specs:** White or light-colored mark on dark background. Size ~2.5% of slide width. [Observed]
> - **Typography:** N/A — graphic mark only [Observed]
> - **Placement Rules:** Top-left corner, ~2.5% from left edge, ~3% from top edge. Consistent position across all 9 slides. [Observed]
> - **Variations:** May appear larger or with wordmark on the closing CTA slide (slide 09). [Inferred, medium confidence]

> **Vertical Sidebar Text**
> - **Purpose:** Provides a thematic label or tagline along the left margin [Observed on slides 01–08]
> - **Anatomy:** Single line of text, rotated 90° counter-clockwise [Observed]
> - **Visual Specs:** No background or container. Color `text.tertiary` (~#6B7280 or similar gray). [Observed]
> - **Typography:** `label` — Inter Regular, ~1.2% height, rotated 90° CCW [Observed]
> - **Placement Rules:** Far left edge of slide, ~2% from left, vertically centered or positioned in the upper half. [Observed]
> - **Variations:** Text content may vary (e.g., "It's time for a change") but position and styling are fixed. Not present on the closing slide (slide 09). [Observed]

> **Slide Number**
> - **Purpose:** Sequential slide identifier [Observed on slides 01–08]
> - **Anatomy:** Two-digit zero-padded number (e.g., "04", "05", "06") [Observed]
> - **Visual Specs:** No background or container. Color `text.tertiary` (gray). [Observed]
> - **Typography:** `caption` — Inter Regular, ~1.2–1.5% height, gray [Observed]
> - **Placement Rules:** Bottom-left corner, ~2.5% from left edge, ~95–96% from top. [Observed]
> - **Variations:** Not visible on the closing slide (slide 09). Numbers appear to continue the deck's global numbering (starting at 04, suggesting this is a subset of a larger deck). [Observed]

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

No photography is used in this deck. All visual content consists of product screenshots (dark UI captures) and vector icons/illustrations. [Observed]

### 5.2 Icons & Illustrations

- **Icon style:** Thin-to-medium line icons (stroke weight ~1.5–2px). Clean geometric style with slightly rounded corners on path joins. [Observed on slides 02, 03, 05]
- **Line weight:** Consistent 1.5–2px across all icons. [Observed]
- **Corner style:** Slightly rounded joins (not sharp 90° miters, not fully rounded) — creates a precise but approachable feel. [Inferred, medium confidence]
- **Color usage:** Monochrome white (#FFFFFF) for all standard icons. One variation uses `accent.1` purple for a highlighted/differentiated icon (slide 03, "Easy transition" item). [Observed]
- **Size relative to text:** Icons are approximately 1.5–2× the height of the adjacent heading text. Inside feature cards, icons are ~4–5% of slide height. Inside circular containers, icons are ~60% of the container diameter. [Observed]
- **Illustration style:** No standalone illustrations. The line icons serve as the sole illustrative elements. [Observed]

### 5.3 Decorative Elements

- **Background glow:** A very subtle radial gradient glow appears in the upper-right quadrant of some slides. The glow uses a purple/blue tint (likely `accent.1` at 3–8% opacity) radiating outward and fading to transparent. It adds atmospheric depth without competing with content. [Observed on slide 01, Inferred on others, medium confidence]
- **Background texture:** The background may have an extremely subtle noise/grain texture overlay, adding tactile richness to the flat dark surface. If present, it is at very low opacity (<3%). [Inferred, low confidence]
- **Floating shapes, blobs, lines, dots:** None. The design is deliberately free of decorative clutter. [Observed]
- **Prominence:** Decorative elements are near-invisible — perceptible only on close inspection. They serve as atmosphere, not as design features. [Observed]
- **Placement:** Upper-right quadrant for the radial glow (if present). Noise/grain would be applied as a full-slide overlay. [Inferred, medium confidence]

### 5.4 Data Visualization

No charts, graphs, or data visualizations are present in this deck. Quantitative information is communicated through text and product screenshots only. [Observed]

---

## 6. Slide Template Catalog

### Template: Hero Title (Slide 01)

- **When to use:** Opening or transition slides that introduce a major section with a bold statement and supporting copy.
- **Placement map:**
  - Section label: x=11%, y=13%, w=30%, h=2% [Observed]
  - Hero heading: x=11%, y=17%, w=45%, h=12% [Observed]
  - Body text: x=11%, y=32%, w=38%, h=8% [Observed]
  - CTA link: x=11%, y=42%, w=20%, h=3% [Observed]
  - Vertical sidebar text: x=2%, y=30%, w=1.5%, h=40% (rotated 90° CCW) [Observed]
  - Logo: x=2.5%, y=3%, w=2.5%, h=4% [Observed]
  - Slide number: x=2.5%, y=95%, w=3%, h=2.5% [Observed]
  - Background glow region: x=60%, y=0%, w=40%, h=50% (radial, very subtle) [Inferred, medium confidence]
- **Text style mapping:** Section label → `heading.section` in `accent.1`; Hero heading → `heading.hero` in `text.primary`; Body → `body` in `text.secondary`; CTA → `cta` in `text.primary`.
- **Color token mapping:** Background `bg.primary`; all text regions as specified above.
- **Components used:** Section Label, Hero Heading Block, Body Text Block, CTA Link, Logo Lockup, Vertical Sidebar Text, Slide Number.
- **Variation rules:** Heading can span 1–2 lines. Body text 1–3 lines. CTA is optional. Subtitle line in `accent.1` is optional.

### Template: Feature Overview + Card Grid (Slides 02, 05)

- **When to use:** Presenting 4 related features or capabilities with icon-driven cards.
- **Placement map:**
  - Section label: x=11%, y=13%, w=30%, h=2% [Observed]
  - Hero heading: x=11%, y=17%, w=38%, h=10% [Observed]
  - Body text: x=11%, y=30%, w=35%, h=8% [Observed]
  - Card grid (2×2): x=50%, y=15%, w=46%, h=70% [Observed]
    - Top-left card: x=50%, y=15%, w=22%, h=33%
    - Top-right card: x=74%, y=15%, w=22%, h=33%
    - Bottom-left card: x=50%, y=50%, w=22%, h=33%
    - Bottom-right card: x=74%, y=50%, w=22%, h=33%
  - Vertical sidebar text: x=2%, y=30%, w=1.5%, h=40% [Observed]
  - Logo: x=2.5%, y=3%, w=2.5%, h=4% [Observed]
  - Slide number: x=2.5%, y=95%, w=3%, h=2.5% [Observed]
- **Text style mapping:** Section label → `heading.section`; Hero → `heading.hero`; Body → `body`; Card titles → `heading.sub`; Card descriptions → `body`.
- **Color token mapping:** Background `bg.primary`; Cards fill `bg.secondary`, border `border`; Card icon color `text.primary`; Card title `text.primary`; Card description `text.secondary`.
- **Components used:** Section Label, Hero Heading Block, Body Text Block, Feature Card (×4), Logo Lockup, Vertical Sidebar Text, Slide Number.
- **Variation rules:** Card count must be exactly 4 (2×2 grid). Icon style must be line-style, monochrome white. Card descriptions should be 1–2 lines maximum.

### Template: Benefits + Testimonials (Slide 03)

- **When to use:** Presenting value propositions alongside social proof from customer quotes.
- **Placement map:**
  - Section label: x=11%, y=13%, w=30%, h=2% [Observed]
  - Hero heading: x=11%, y=17%, w=40%, h=10% [Observed]
  - Benefit items (3 stacked): x=11%, y=30%, w=38%, h=35% [Observed]
    - Each item: icon circle (left, ~3% width) + title + description to right
  - Horizontal divider: x=11%, y=67%, w=35%, h=0.2% [Observed]
  - Transition item: x=11%, y=70%, w=38%, h=15% [Observed]
  - Testimonial blocks (2 stacked): x=55%, y=20%, w=40%, h=65% [Observed]
    - Each block: accent bar (left edge) + quote text + company attribution
  - Vertical sidebar text: x=2%, y=30%, w=1.5%, h=40% [Observed]
  - Logo: x=2.5%, y=3%, w=2.5%, h=4% [Observed]
  - Slide number: x=2.5%, y=95%, w=3%, h=2.5% [Observed]
- **Text style mapping:** Section label → `heading.section`; Hero → `heading.hero`; Benefit titles → `heading.sub`; Benefit descriptions → `body`; Quote text → `body` in `quote.text` color; Company names → `heading.sub`.
- **Color token mapping:** Background `bg.primary`; Accent bar `accent.1`; Divider `border`; Circular icon containers fill `bg.secondary`, border `border`.
- **Components used:** Section Label, Hero Heading Block, Benefit Item (×3–4), Circular Icon Container, Horizontal Divider, Testimonial Quote Block (×2), Logo Lockup, Vertical Sidebar Text, Slide Number.
- **Variation rules:** Benefit count can be 3–5. Testimonial count can be 1–3. The highlighted transition item is optional.

### Template: Feature + Screenshot (Slides 04, 06, 07, 08)

- **When to use:** Showcasing a specific product feature with descriptive text and a corresponding UI screenshot.
- **Placement map:**
  - Section label: x=11%, y=13%, w=30%, h=2% [Observed]
  - Hero heading: x=11%, y=17%, w=38%, h=10% [Observed]
  - Body text: x=11%, y=30%, w=35%, h=10% [Observed]
  - CTA link: x=11%, y=42%, w=20%, h=3% [Observed]
  - Product screenshot: x=48%, y=8%, w=49%, h=84% [Observed]
  - Vertical sidebar text: x=2%, y=30%, w=1.5%, h=40% [Observed]
  - Logo: x=2.5%, y=3%, w=2.5%, h=4% [Observed]
  - Slide number: x=2.5%, y=95%, w=3%, h=2.5% [Observed]
- **Text style mapping:** Section label → `heading.section`; Hero → `heading.hero`; Body → `body`; CTA → `cta`.
- **Color token mapping:** Background `bg.primary`; Screenshot has no explicit border (dark UI blends with dark background).
- **Components used:** Section Label, Hero Heading Block, Body Text Block, CTA Link, Product Screenshot, Logo Lockup, Vertical Sidebar Text, Slide Number.
- **Variation rules:** Screenshot content varies but must always be a dark-themed UI capture. CTA link is optional. Body text 1–3 lines.

### Template: Closing CTA (Slide 09)

- **When to use:** Final slide of the deck — calls the audience to action with minimal distraction.
- **Placement map:**
  - Logo: x=45%, y=20%, w=10%, h=10% (centered, possibly larger than content slides) [Inferred, medium confidence]
  - Hero heading: x=20%, y=38%, w=60%, h=12% (centered) [Inferred, medium confidence]
  - Body text: x=25%, y=54%, w=50%, h=8% (centered) [Inferred, medium confidence]
  - CTA button/link: x=35%, y=66%, w=30%, h=5% (centered, possibly styled as a button with `accent.1` fill) [Inferred, medium confidence]
  - URL/web address: x=35%, y=80%, w=30%, h=3% (centered, small, gray) [Inferred, medium confidence]
- **Text style mapping:** Hero → `heading.hero` (centered); Body → `body` (centered); CTA → `cta` or button label.
- **Color token mapping:** Background `bg.primary`; CTA may use `accent.1` as fill or text color.
- **Components used:** Logo Lockup (centered, possibly larger), Hero Heading Block (centered), Body Text Block (centered), CTA Link/Button.
- **Variation rules:** This is the most minimal template. No sidebar text, no slide number, no section label. Keep element count to 3–5. Background may feature a slightly enhanced version of the radial glow.

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. **Always use the dark background** (`bg.primary` #0A0B0F) as the base for every slide. [Observed]
2. **Always left-align text content** on content slides — headings, body, CTAs all share the same left edge (~11% from slide left). [Observed]
3. **Always use Inter** (or closest available sans-serif) as the sole typeface. No secondary fonts. [Observed/Inferred, high confidence]
4. **Always maintain the section label → heading → body → CTA vertical sequence** in the left column. [Observed]
5. **Always use `accent.1` (#5E6AD2)** as the only accent color. Restrict it to section labels, accent bars, and interactive elements. [Observed]
6. **Always maintain generous margins** — minimum ~11% from left, ~13% from top, ~3% from right. [Observed]
7. **Always use the luminance hierarchy** — white for primary emphasis, gray for secondary, purple for categorical labels. [Observed]
8. **Always include the logo lockup** in the top-left corner on every slide. [Observed]
9. **Always use line-style icons** with 1.5–2px stroke weight and monochrome white color. [Observed]
10. **Always use the slight corner radius** (6–8px) on card-style containers. [Observed]
11. **Always use `bg.secondary` (#1C1E26)** for card fills with 1px `border` (#2A2D35) borders. [Observed]
12. **Always keep information density low** — maximum 5–6 distinct content elements per slide. [Observed]

### ❌ DON'T (things that would immediately break the aesthetic)

1. **Never use a light or white background** on any slide. [Observed]
2. **Never center-align body text** on content slides (centering is reserved for the closing CTA slide only). [Observed]
3. **Never introduce a second accent color** — the palette is strictly monochromatic-dark plus one purple accent. [Observed]
4. **Never add drop shadows or glow effects** to cards, text, or UI elements. [Observed]
5. **Never use filled/solid icons** — only line-style icons are on-brand. [Observed]
6. **Never use rounded corners greater than 8px** on rectangular elements (no pill shapes, no fully rounded rectangles). [Observed]
7. **Never use decorative illustrations, stock photos, or ornamental graphics.** Visual content is limited to product screenshots and line icons. [Observed]
8. **Never crowd the slide** — if more than 6 content elements are needed, split across multiple slides. [Observed]
9. **Never use colored backgrounds for text blocks** (no highlight boxes, no colored banners behind headings). [Observed]
10. **Never use font weights heavier than Semibold (600)** — no Bold (700), Black (900), or extra-bold weights. [Inferred, high confidence]
11. **Never mix multiple font families.** One font (Inter) across all text elements. [Observed]
12. **Never place content in the bottom-right quadrant** below the main visual — this area is reserved as breathing room. [Observed]

---

## 8. Reproduction Checklist

- [ ] Set slide background to `bg.primary` (#0A0B0F) [Observed]
- [ ] Place [Brand] logo lockup at top-left (x=2.5%, y=3%, ~2.5% width) [Observed]
- [ ] Add vertical sidebar text at far-left margin (x=2%, rotated 90° CCW, `text.tertiary`) on all content slides [Observed]
- [ ] Add two-digit slide number at bottom-left (x=2.5%, y=95%, `caption` style, `text.tertiary`) [Observed]
- [ ] Use `heading.section` style in `accent.1` color for the section/category label above the heading [Observed]
- [ ] Use `heading.hero` style (Inter Semibold, ~6–7% height, white, -0.02em letter spacing) for the main heading [Observed]
- [ ] Use `body` style (Inter Regular, ~2% height, `text.secondary` gray) for supporting text [Observed]
- [ ] Maintain left alignment at ~11% from slide left edge for all text content [Observed]
- [ ] Maintain top margin of ~13% before the first text element [Observed]
- [ ] Select the appropriate template based on content type (Hero Title, Feature + Cards, Benefits + Testimonials, Feature + Screenshot, Closing CTA) [Observed]
- [ ] For 2-column layouts, split at approximately 45% left / 55% right [Observed]
- [ ] Style feature cards with `bg.secondary` fill, 1px `border`, 6–8px corner radius, ~5–6% internal padding [Observed]
- [ ] Use line-style icons only (1.5–2px stroke, white, geometric) [Observed]
- [ ] For testimonial blocks, include 3–4px left accent bar in `accent.1` [Observed]
- [ ] Product screenshots must have dark UI themes — light UI screenshots are off-brand [Observed]
- [ ] Limit accent color usage to `accent.1` (#5E6AD2) only — no additional hues [Observed]
- [ ] Ensure a clear luminance hierarchy: white headings > gray body > purple labels [Observed]
- [ ] Keep ~3% gap between heading and body text, ~1.5–2% gap between section label and heading [Observed]
- [ ] Use the CTA format "Action phrase →" (text + right arrow) for call-to-action links [Observed]
- [ ] Ensure no element has a drop shadow or outer glow [Observed]
- [ ] On the closing slide, center all content and omit sidebar text and slide number [Observed]
- [ ] Verify information density is ≤5–6 distinct content elements per slide [Observed]
- [ ] Apply the optional subtle radial glow (purple/blue, 3–8% opacity, upper-right) for atmospheric depth [Inferred, medium confidence]
- [ ] Test all text against the dark background for sufficient contrast (WCAG AA minimum) [Inferred, high confidence]
- [ ] Confirm Inter font is loaded from Google Fonts before rendering [Inferred, high confidence]

---

## 9. Background/Texture Generation Prompt

Generate a seamless dark background texture at 1920×1080 resolution. The base color is a very deep blue-black (#0A0B0F), almost pure black with the faintest blue undertone. In the upper-right quadrant, place a subtle radial gradient glow using a muted indigo-violet (#5E6AD2) at 5–8% opacity, softly radiating from approximately 75% right and 20% down, fading to transparent over roughly 40% of the image. Overlay an extremely subtle film grain noise texture at 2–3% opacity to add tactile depth without visible pattern. The overall impression should be a premium, calm, nearly black surface with just enough atmospheric light to create visual interest without competing with any foreground content — imagine a polished obsidian surface catching a distant purple LED reflection. No stars, no gradients with visible banding, no geometric patterns.

---

## 10. Uncertainties & Open Questions

- **Font identification:** Inter is inferred from visual characteristics and the brand's known identity, but cannot be confirmed from static screenshots alone. If the actual font is a custom version of Inter or a proprietary face (e.g., the brand's own variable font build), reproduction fidelity may differ slightly in metrics. [Inferred, high confidence but not certain]
- **Exact hex values:** All color hex codes are estimated from visual inspection of compressed PNG screenshots. Actual brand colors may differ by 5–15 units per channel. The official brand purple may not be exactly #5E6AD2. [Inferred, medium confidence]
- **Letter spacing and line height:** Typographic metrics (letter spacing, line height) are estimated from visual rhythm and cannot be pixel-measured from screenshots. Actual values may differ by ±0.01em for letter spacing and ±0.05 for line height ratios. [Inferred, medium confidence]
- **Animations and transitions:** Static screenshots cannot reveal slide transitions, element entrance animations, or hover states. The brand typically uses smooth, fast transitions (~200–300ms) but this cannot be confirmed. [Cannot be determined]
- **Background texture/grain:** Whether the background includes a subtle noise/grain texture overlay is uncertain — the dark background appears to have very slight texture variation but this could be PNG compression artifacts. [Inferred, low confidence]
- **Closing slide (slide 09) exact layout:** The centered layout of the closing CTA slide was harder to measure precisely than the consistent 2-column content slides. Placement percentages for this template are less reliable. [Inferred, medium confidence]
- **Slide numbering origin:** Slide numbers start at "04", suggesting these 9 slides are a subset of a larger deck. The full deck structure and whether earlier slides follow the same design system is unknown. [Observed numbering, Inferred context]
- **Font weight distinction:** Whether hero headings use Semibold (600) or Bold (700) weight could not be determined definitively from screenshots. Semibold is the more common choice in this aesthetic category. [Inferred, medium confidence]

**Targeted questions that would most improve reproduction fidelity:**
1. Can you confirm the brand font — is it Inter, a custom Inter variant, or another typeface?
2. What are the official brand color values (especially the primary purple)?
3. Does the background use a noise/grain texture overlay, or is it a flat solid color?
4. What tool was this deck created in (Figma, Keynote, Google Slides, PowerPoint)?
5. Are there slide transitions or element animations in the original presentation?
