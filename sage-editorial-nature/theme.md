# Sage Editorial Nature — Theme Guide

> **Theme Name:** `sage-editorial-nature`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Earthy, Editorial, Restrained
- **Visual Personality:** Editorial-meets-corporate. The design marries nature photography with clean, structured typography in a way that feels like a high-end nonprofit annual report or a museum exhibit catalogue. It is sophisticated without being flashy, serious without being cold.
- **Mood & Emotion:** Quiet authority and contemplative urgency. The muted green palette and dramatic black-and-white/desaturated photography create a tone of gravitas and environmental reverence. There is a deliberate tension between the beauty of nature imagery and the seriousness of the content.
- **Design References:** Echoes mid-2010s editorial design (e.g., Kinfolk magazine, Cereal magazine) combined with nonprofit communications (WWF, National Geographic Society reports). The restrained color palette and generous white space recall Scandinavian design sensibility. [Observed]
- **Information Density:** 2 out of 5. Slides carry limited text, with generous white space and large typography. Content is sparse by design. [Observed]
- **Polish Level:** 4 out of 5. Clean alignment, consistent spacing, professional photography, and coherent color usage. Minor inconsistencies in text sizing across slides prevent a perfect 5. [Observed]
- **Shape Language:** Geometric/sharp. Rectangles dominate -- photo frames, text blocks, color panels, and overlay boxes are all hard-edged rectangles with zero corner radius. The only circular element is the stat ring on slide 4. [Observed]

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#FFFFFF` | Main slide background (white panels on slides 1, 2, 3, 5, 6) [Observed] |
| `bg.secondary` | `#7A9A7E` | Muted sage/olive green used for accent panels, overlays, and section backgrounds (slides 4 right panel, 7 top banner, 1 label box) [Observed] |
| `bg.tertiary` | `#F5F5F3` | Very light warm gray, used as a subtle alternate background on slide 3 [Inferred -- high confidence] |
| `text.primary` | `#3D3D3D` | Main body text, dark charcoal gray (slides 2, 3, 5, 6) [Observed] |
| `text.secondary` | `#7A7A7A` | Muted/supporting text, medium gray (captions, attribution text on slide 4, 5) [Observed] |
| `text.heading` | `#6B8F6B` | Green heading text used for large titles (slides 1, 2, 5, 6) [Observed] |
| `text.onGreen` | `#FFFFFF` | White text used on green backgrounds (slides 4, 6, 7) [Observed] |
| `accent.1` | `#6B8F6B` | Primary accent green -- used for headings, labels, icons, stat rings, and the label/tag elements [Observed] |
| `accent.2` | `#8AAE8A` | Lighter green accent -- used in the stat ring fill and hover states [Inferred -- medium confidence] |
| `border` | `#C4C4C4` | Light gray lines used as dividers under headings (slides 3, 5) [Observed] |

**Additional notes:**
- **Gradient usage:** No gradients are used anywhere in the deck. Color is applied flat. [Observed]
- **Color relationships:** The palette is monochromatic green (sage/olive tones) against a neutral white-and-charcoal base. The green serves as the sole chromatic accent. [Observed]
- **Dark mode vs. light mode:** The deck is firmly light-mode oriented, with white as the dominant background. Dark tones come exclusively from photography. [Observed]
- **Color shifts between slide types:** Section dividers and emphasis panels invert the scheme: green background with white text (slide 4 right panel, slide 7 top banner). Standard content slides use white background with green/charcoal text. [Observed]

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Lora | serif | Regular (400) | Very large (~8-10% of slide height) | Normal | None | ~1.15 |
| `heading.section` | Lora | serif | Regular (400) | Large (~5-6% of slide height) | Normal | None | ~1.2 |
| `heading.sub` | Lora | serif | Regular (400) | Medium (~3-4% of slide height) | Normal | None | ~1.25 |
| `body` | Source Sans 3 | sans-serif | Regular (400) | Standard (~2-2.5% of slide height) | Normal | None | ~1.5 |
| `body.emphasis` | Source Sans 3 | sans-serif | Bold (700) | Standard (~2-2.5% of slide height) | Normal | None | ~1.5 |
| `caption` | Source Sans 3 | sans-serif | Regular (400) | Small (~1.5% of slide height) | Normal | None | ~1.4 |
| `label` | Source Sans 3 | sans-serif | Medium (500) | Small (~1.5-2% of slide height) | +0.5px | None | ~1.3 |
| `number.hero` | Source Sans 3 | sans-serif | Bold (700) | Very large (~10-12% of slide height) | -1px (tight) | None | ~1.0 |
| `tag` | Source Sans 3 | sans-serif | Regular (400) | Very small (~1% of slide height) | +0.5px | None | ~1.2 |

[Observed] The heading typeface is a transitional serif with elegant, slightly old-style characteristics -- Lora from Google Fonts is the closest match. Body text is a clean humanist sans-serif; Source Sans 3 (formerly Source Sans Pro) is the best Google Fonts match.

[Inferred -- medium confidence] The exact fonts may be Garamond/EB Garamond for headings and Open Sans or Lato for body. Lora + Source Sans 3 are the recommended Google Fonts substitutes.

**Additional typography notes:**
- **Bold emphasis within body text:** Key phrases are set in bold weight within otherwise regular-weight body text. This is the primary method of inline emphasis (slides 2, 3, 4, 5, 6, 7). [Observed]
- **No italic usage observed.** Emphasis is exclusively through weight changes. [Observed]
- **No underlines observed.** [Observed]
- **Heading color as emphasis:** Headings use `text.heading` (green) rather than `text.primary`, creating a color-based hierarchy distinction. [Observed]
- **Number formatting:** Large stat numbers use `number.hero` style (slide 4: "80%"). Step numbers use the same style at a slightly smaller size (slide 7: "01", "02", "03"). [Observed]
- **Attribution/source text:** Small, muted text in `text.secondary` color, set in `caption` style (slide 4 attribution, slide 5 source). [Observed]

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Sharp (0px) | All rectangles, photo frames, text boxes, and panels have zero corner radius. The only exception is the circular stat ring on slide 4. [Observed] |
| Borders | None on most elements / Thin solid on dividers | Divider lines are ~1px solid `border` token. No visible borders on photo frames or cards. [Observed] |
| Shadows | None | No drop shadows, box shadows, or glows are used anywhere. [Observed] |
| Transparency/Opacity | Used sparingly | Semi-transparent dark overlay on some photos (slide 4 left panel has a slight dark overlay behind the stat). Green overlay panels may have slight transparency. [Observed] |
| Stroke weight | Thin (1px) for dividers, Medium (1.5-2px) for icons | Dividers are thin. Icons on slides 6 and 7 use a slightly heavier stroke. [Observed] |

### 2.4 Spacing Scale

- **Base unit:** 8px [Inferred -- high confidence, based on observed alignment patterns]
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px
- **Margin from slide edge:** ~6-8% of slide width horizontally; ~8-10% of slide height vertically [Observed]
- **Gap between major content blocks:** ~32-48px (~4-6% of slide height) [Observed]
- **Gap between related elements (e.g., icon and label):** ~8-16px (~1-2% of slide height) [Observed]
- **Gap between heading and divider line:** ~8px [Observed]
- **Gap between divider line and body text:** ~16-24px [Observed]
- **Column gutter in multi-column layouts:** ~24-32px (~2-3% of slide width) [Observed, slide 3]

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** The deck alternates between asymmetric two-panel splits and centered single-column layouts. [Observed]
  - **Two-panel split (slides 1, 2, 4, 6):** Photo panel on one side + content panel on the other. Proportions vary: ~40/60 (slides 1, 2), ~50/50 (slide 4), ~65/35 (slide 6). [Observed]
  - **Centered single-column (slides 3, 5):** Content is centered horizontally with a single heading at top and content below. [Observed]
  - **Hybrid (slide 7):** Top banner strip + bottom three-column grid. [Observed]
- **Column proportions:** Photo panels range from 35% to 50% of slide width. Text panels occupy the remainder. [Observed]
- **Alignment bias:** Headings are centered within their panel or centered on the full slide. Body text within panels is centered or left-aligned depending on context. The overall feel is center-biased. [Observed]
- **Content safe zone:** Approximately 6-8% margin from left/right edges, 8-10% from top/bottom edges within each panel. [Observed]

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Large serif headings in green (`text.heading`) at the top or center of the content panel. Size contrast is the dominant hierarchy tool -- headings are 3-4x the size of body text. [Observed]
- **Supporting information de-emphasis:** Body text uses `text.primary` (charcoal) at a smaller size. Secondary information uses `text.secondary` (medium gray) and `caption` size. [Observed]
- **Reading flow pattern:** Left-to-right on split layouts (photo draws the eye first, then text). Top-down center on single-column layouts. The deck uses an editorial flow where the photo sets context and the text provides substance. [Observed]
- **Section/content block separation:** Primarily through white space and thin horizontal divider lines. Color block panels (green backgrounds) create strong section breaks. No cards or bordered containers are used. [Observed]

### 3.3 White Space Philosophy

- **Overall density:** Airy. The deck breathes generously, with large margins and limited text per slide. [Observed]
- **Where white space is most generous:** Around headings, between the photo panel and text panel edges, and below body text. The right-side text panels on split layouts have substantial padding. [Observed]
- **Where elements are grouped tightly:** Icon + label pairs (slide 6), step number + icon + description clusters (slide 7), and photo + caption groupings (slide 3). [Observed]

---

## 4. Component Library

> **Title Header Block**
> - **Purpose:** Displays the main heading for a slide or section.
> - **Anatomy:** Heading text, optional thin horizontal divider line below.
> - **Visual Specs:** No background fill, no border, no shadow. Divider line is 1px solid `border` token, spanning ~10-15% of slide width, centered beneath heading.
> - **Typography:** `heading.section` (Lora, regular, green `text.heading` color).
> - **Placement Rules:** Centered horizontally in the content area, positioned ~10-15% from the top of the slide.
> - **Variations:** With divider (slides 3, 5) and without divider (slides 4, 6). Hero variant uses `heading.hero` size (slide 1).
> - **Observed on:** Slides 1, 2, 3, 4, 5, 6.

> **Section Label / Tag**
> - **Purpose:** Identifies the section or category of the slide. Acts as a subtle wayfinding element.
> - **Anatomy:** Small text on a muted green rectangular background.
> - **Visual Specs:** Fill color `bg.secondary` with slight transparency, sharp corners (0px radius), padding ~8px vertical / ~16px horizontal. On some slides, this appears as plain text without a background.
> - **Typography:** `tag` style (Source Sans 3, regular, white or green text depending on background).
> - **Placement Rules:** Top-right corner of the slide (slides 2-6 show a small tag reading the deck title). On the hero slide (slide 1), a larger version overlays the photo at mid-left.
> - **Variations:** (a) Small corner tag -- top-right, text only in green. (b) Overlay label -- on photo panel with green background fill.
> - **Observed on:** Slides 1, 2, 3, 4, 5, 6.

> **Photo Panel**
> - **Purpose:** Provides visual context and emotional grounding through photography.
> - **Anatomy:** Full-height rectangular photo region, edge-to-edge vertically, occupying a percentage of slide width.
> - **Visual Specs:** No border, no rounded corners, no shadow. Photos are cropped to fill the rectangular region. Some panels have a subtle dark overlay for text legibility.
> - **Typography:** N/A (no text directly on most photo panels, except when combined with an overlay label or stat).
> - **Placement Rules:** Left side on split layouts (slides 1, 2), left side on stat layouts (slide 4), right side on list layouts (slide 6). Width varies: 35-50% of slide.
> - **Variations:** (a) Single photo, full panel. (b) Multi-photo panel -- two or more photos stacked vertically (slide 6). (c) Photo with dark overlay + stat overlay (slide 4). (d) Photo strip banner at top of slide (slide 7).
> - **Observed on:** Slides 1, 2, 3, 4, 5, 6, 7.

> **Stat Ring / KPI Circle**
> - **Purpose:** Displays a key statistic or percentage in a visually prominent circular gauge.
> - **Anatomy:** Circular ring (donut-style progress indicator) with a large number centered inside. Supporting text below the ring.
> - **Visual Specs:** Ring stroke color `accent.1`, ring track color semi-transparent white or light gray, ring stroke width ~6-8px. Circle diameter ~15-18% of slide height. Sharp stroke ends (not rounded).
> - **Typography:** `number.hero` for the percentage number inside the ring. `caption` for supporting text below.
> - **Placement Rules:** Centered within a photo panel or color overlay area. Vertically centered or slightly above center.
> - **Variations:** None observed, but could adapt to different fill percentages.
> - **Observed on:** Slide 4.

> **Green Overlay Text Block**
> - **Purpose:** Highlights a key message or callout against a green background for emphasis.
> - **Anatomy:** Green (`bg.secondary`) rectangular background, white heading text, white body text.
> - **Visual Specs:** Fill `bg.secondary`, sharp corners, padding ~5-8% of panel dimensions on all sides. No border, no shadow.
> - **Typography:** `heading.sub` for the heading (white), `body` for supporting text (white).
> - **Placement Rules:** Used as a full panel (slide 4 right side, ~50% of slide) or as a callout box within a slide (slide 5 bottom center, slide 6 right side overlay on photos).
> - **Variations:** (a) Full-width panel. (b) Contained box overlaying content. (c) Top banner strip (slide 7 top ~35% of slide).
> - **Observed on:** Slides 4, 5, 6, 7.

> **Icon + Label Pair**
> - **Purpose:** Presents a concept or category with a small icon and descriptive label.
> - **Anatomy:** Small line icon (left), text label (right or below).
> - **Visual Specs:** Icon in `accent.1` green, ~16-24px size, thin-to-medium line weight. Label in `text.primary` or `body` style.
> - **Typography:** `body` for the label text.
> - **Placement Rules:** Arranged in a 2x2 grid (slide 6) or in a horizontal row. Consistent spacing between pairs (~24-32px).
> - **Variations:** (a) Icon left of text, inline. (b) Icon above text, centered (slide 7 steps).
> - **Observed on:** Slides 6, 7.

> **Numbered Step Block**
> - **Purpose:** Presents sequential actions or processes in numbered order.
> - **Anatomy:** Large number (01, 02, 03), small line icon below, body text description below icon.
> - **Visual Specs:** No background fill, no border. Number in `text.primary`, icon in `accent.1` or `text.secondary`, description in `body` style.
> - **Typography:** `number.hero` for the step number, `body` for the description with `body.emphasis` for key terms.
> - **Placement Rules:** Arranged in a horizontal row of 3 columns, evenly spaced, below a banner or header region. Each column is ~30% of slide width with ~3% gutters.
> - **Variations:** Could extend to 4 steps by narrowing columns.
> - **Observed on:** Slide 7.

> **Thin Divider Line**
> - **Purpose:** Visually separates heading from body content or marks section breaks.
> - **Anatomy:** Single horizontal line.
> - **Visual Specs:** 1px solid, color `border` (#C4C4C4). Width varies: short (~10-15% of slide width, centered) below headings, or wider (~30-40%) as section separators.
> - **Typography:** N/A.
> - **Placement Rules:** Centered horizontally below heading text, with ~8px gap above and ~16-24px gap below.
> - **Variations:** Short centered (slides 3, 5) or spanning a text block width.
> - **Observed on:** Slides 3, 5.

> **Body Text Block with Bold Emphasis**
> - **Purpose:** Main content text with key phrases highlighted in bold.
> - **Anatomy:** Paragraph of body text where selected phrases are set in bold weight.
> - **Visual Specs:** No special background or border.
> - **Typography:** `body` (regular weight) with inline `body.emphasis` (bold weight) for key phrases. Color `text.primary`.
> - **Placement Rules:** Centered or left-aligned within the content panel, below heading and divider. Maximum width ~80-90% of the content panel width.
> - **Variations:** Single paragraph (slides 2, 4) or multiple paragraphs with spacing (slide 5).
> - **Observed on:** Slides 2, 3, 4, 5, 6, 7.

> **Multi-Photo Grid Row**
> - **Purpose:** Displays multiple photos in a horizontal row, typically above related text columns.
> - **Anatomy:** 3 equally-sized square or near-square photos in a row, edge-to-edge with small gutters.
> - **Visual Specs:** Photos appear to be desaturated or muted in tone. No borders, sharp corners, no shadows. Gutter ~2-3% of slide width.
> - **Typography:** N/A (text appears in separate blocks below).
> - **Placement Rules:** Spanning the full content width, positioned in the upper-middle portion of the slide (~20-50% from top).
> - **Variations:** Could adapt to 2 or 4 photos. Photos may be color or grayscale.
> - **Observed on:** Slide 3.

> **Attribution / Source Line**
> - **Purpose:** Credits a source or provides attribution for a statistic or quote.
> - **Anatomy:** Single line of small text.
> - **Visual Specs:** No background, no border.
> - **Typography:** `caption` style, color `text.secondary`.
> - **Placement Rules:** Positioned directly below the content it attributes, left-aligned or centered with the parent block.
> - **Variations:** None observed.
> - **Observed on:** Slides 4, 5.

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Prevalence:** 7 of 7 slides contain photographs. This is an image-heavy deck (100%). [Observed]
- **Placement patterns:** Photos appear in several recurring positions:
  - **Left panel** in a vertical split (slides 1, 2, 4): Photo occupies ~35-50% of slide width, full height.
  - **Right panel** stacked vertically (slide 6): Two photos stacked, occupying ~35% of slide width.
  - **Horizontal row above text columns** (slide 3): Three photos spanning full width.
  - **Bottom row flanking a callout** (slide 5): Two photos at bottom-left and bottom-right, ~30% each.
  - **Top banner strip** (slide 7): Two photos in the upper ~35% of the slide alongside a green panel.
  [Observed]
- **Scale:** Photos are dominant (>50% of slide area) on slides 1, 2, and 4. Significant (25-50%) on slides 3, 5, 6, and 7. [Observed]
- **Subject matter tendencies:** Wildlife (lions, big cats, primates), natural landscapes (mountains, forests, vegetation), and environmental/human activity scenes (roads, industrial areas). All subjects relate to nature and ecology. [Observed]
- **Cropping conventions:** All photos are cropped to fill rectangular containers -- no circular crops, no decorative masks, no rounded corners. Photos bleed to the edge of their panel without any visible border or frame. [Observed]
- **Color treatment:** Photos range from natural full-color to desaturated/muted tones. Slide 3 photos appear nearly grayscale. Other slides use photos with naturally dark, moody lighting (low-key photography). Overall color grading is cool-to-neutral with muted saturation. [Observed]
- **Overlay usage:** Some photo panels have a semi-transparent dark overlay to improve text/stat legibility (slide 4 left panel). The green panel areas (slides 4, 6, 7) are solid color blocks rather than photo overlays. [Observed]
- **When photos are used vs. avoided:** Photos appear on every slide. They serve as either the primary visual (split layouts) or secondary context (grids, banners). No slide is purely text-only. [Observed]

### 5.2 Icons & Illustrations

- **Icon style:** Thin line icons, minimalist and geometric. [Observed, slides 6, 7]
- **Line weight and corner style:** Thin (~1.5-2px stroke), with slightly rounded corners on icon paths. [Observed]
- **Color usage:** Monochrome -- icons use `accent.1` (green) or `text.secondary` (gray). No multi-color icons. [Observed]
- **Size relative to surrounding text:** Icons are approximately 1.5-2x the height of adjacent body text (~24-32px equivalent). [Observed]
- **Illustration style:** No illustrations are present. The deck relies entirely on photography and simple line icons. [Observed]

### 5.3 Decorative Elements

- **Background patterns or textures:** None. Backgrounds are solid flat colors (white or sage green). [Observed]
- **Floating shapes, blobs, lines, dots:** None. The design is clean and free of decorative embellishments. [Observed]
- **Prominence:** N/A -- no decorative elements are used.
- **Design philosophy:** The deck achieves visual interest through photography and typography contrast rather than decorative elements. This is a core characteristic of the aesthetic. [Observed]

### 5.4 Data Visualization

- **Chart type observed:** Donut/ring chart (slide 4) showing a single percentage (80%).
- **Series colors:** Ring fill uses `accent.1` green; track uses semi-transparent white or light gray.
- **Axis/gridline visibility:** N/A (single ring chart, no axes).
- **Label typography:** `number.hero` for the center value, `caption` for supporting label.
- **Ring details:** Stroke width ~6-8px, sharp stroke ends, approximately 270-degree fill for 80%. [Observed]
- **Legend placement:** No separate legend. The value is displayed inside the ring.
- **Emphasis technique:** The single stat is isolated and given generous space, making it the focal point of its panel.

---

## 6. Slide Template Catalog

### Template: Hero Title Slide

- **When to use:** Opening slide of the presentation. Sets the visual tone, introduces the topic with a dramatic photo and large headline.
- **Placement map:**
  - Photo panel: 0% from left, 0% from top, ~40% wide, 100% tall
  - Overlay label (optional): ~5% from left, ~42% from top, ~25% wide, ~8% tall (on top of photo)
  - Headline block: ~48% from left, ~25% from top, ~45% wide, ~50% tall
- **Text style mapping:**
  - Overlay label: `label` style, white text on `bg.secondary` fill
  - Headline: `heading.hero` style, `text.heading` color
- **Color token mapping:** Left panel is a full-bleed photo (dark/moody). Right panel background is `bg.primary` (white). Overlay label uses `bg.secondary`.
- **Components used:** Photo Panel, Section Label (overlay variant), Title Header Block (hero variant).
- **Variation rules:** Photo can be on the left or right. Headline can be 2-4 lines. A subtitle in `body` style can be added below the headline. The overlay label is optional.

### Template: Content + Photo Split

- **When to use:** Standard content slide that pairs a key message or explanatory text with a supporting photograph.
- **Placement map:**
  - Photo panel: 0% from left, 0% from top, ~40% wide, 100% tall
  - Section label: ~45% from left, ~15% from top, ~20% wide, ~5% tall
  - Body text block: ~45% from left, ~25% from top, ~48% wide, ~55% tall
  - Tag (deck title): ~88% from left, ~3% from top, ~10% wide, ~3% tall
- **Text style mapping:**
  - Section label: `label` style, `text.heading` color
  - Body text: `body` style with `body.emphasis` for key phrases, `text.primary` color
- **Color token mapping:** Photo panel is full-bleed imagery. Content panel background is `bg.primary`.
- **Components used:** Photo Panel, Section Label (text-only variant), Body Text Block with Bold Emphasis, Tag.
- **Variation rules:** Photo can be left or right. Body text can range from 1-3 paragraphs. A `heading.sub` heading can be added above the body text. Photo panel width can range from 35-50%.

### Template: Three-Column Content Grid

- **When to use:** Presenting three parallel points, comparisons, or categories with equal visual weight. Good for systems, processes described in parallel, or feature overviews.
- **Placement map:**
  - Heading: ~30% from left, ~8% from top, ~40% wide, ~8% tall (centered)
  - Divider line: ~45% from left, ~17% from top, ~10% wide, ~0.5% tall (centered)
  - Photo row: ~5% from left, ~22% from top, ~90% wide, ~30% tall (3 equal photos with gutters)
  - Text column 1: ~5% from left, ~55% from top, ~28% wide, ~35% tall
  - Text column 2: ~36% from left, ~55% from top, ~28% wide, ~35% tall
  - Text column 3: ~67% from left, ~55% from top, ~28% wide, ~35% tall
  - Tag: ~88% from left, ~3% from top, ~10% wide, ~3% tall
- **Text style mapping:**
  - Heading: `heading.section`, `text.heading` color
  - Column text: `body` with `body.emphasis` for key phrases, `text.primary` color
- **Color token mapping:** Background `bg.primary` (or `bg.tertiary` for subtle warmth). Photos may be desaturated.
- **Components used:** Title Header Block (with divider), Multi-Photo Grid Row, Body Text Block with Bold Emphasis, Tag.
- **Variation rules:** Can work without photos (text-only columns). Photos can be color or grayscale. Can reduce to 2 columns or expand to 4. Each column can optionally include an icon above the text.

### Template: Stat Highlight Split

- **When to use:** Featuring a key statistic, KPI, or data point alongside a contextual message. High-impact slide for a single compelling number.
- **Placement map:**
  - Photo panel with overlay: 0% from left, 0% from top, ~50% wide, 100% tall
  - Stat ring: ~15% from left, ~18% from top, ~20% wide, ~25% tall (centered in photo panel)
  - Stat supporting text: ~8% from left, ~48% from top, ~34% wide, ~25% tall
  - Attribution: ~8% from left, ~75% from top, ~34% wide, ~5% tall
  - Green content panel: ~50% from left, 0% from top, ~50% wide, 100% tall
  - Panel heading label: ~55% from left, ~15% from top, ~40% wide, ~8% tall
  - Panel body text: ~55% from left, ~30% from top, ~40% wide, ~50% tall
  - Tag: ~88% from left, ~3% from top, ~10% wide, ~3% tall
- **Text style mapping:**
  - Stat number: `number.hero`, white
  - Stat supporting text: `body`, white
  - Attribution: `caption`, `text.secondary` (or white if on dark background)
  - Panel heading: `label`, `text.onGreen`
  - Panel body: `heading.sub`, `text.onGreen` with `body.emphasis` for key phrases
- **Color token mapping:** Left panel is a dark photo with semi-transparent overlay. Right panel is `bg.secondary` (green). Text on green is `text.onGreen` (white).
- **Components used:** Photo Panel (with overlay), Stat Ring / KPI Circle, Green Overlay Text Block, Attribution / Source Line, Tag.
- **Variation rules:** Stat ring can show any percentage. Can swap stat ring for a large `number.hero` text without the ring. Photo and green panels can swap sides. Supporting text length can vary.

### Template: Content with Inline Photos

- **When to use:** A text-focused slide that includes supporting photos below or alongside the main content. Good for detailed explanations that benefit from visual evidence.
- **Placement map:**
  - Heading: ~25% from left, ~8% from top, ~50% wide, ~8% tall (centered)
  - Divider line: ~45% from left, ~17% from top, ~10% wide, ~0.5% tall
  - Body text block 1: ~15% from left, ~22% from top, ~70% wide, ~12% tall
  - Body text block 2: ~15% from left, ~37% from top, ~70% wide, ~10% tall
  - Left photo: ~5% from left, ~55% from top, ~30% wide, ~35% tall
  - Green callout box: ~37% from left, ~60% from top, ~26% wide, ~25% tall
  - Right photo: ~65% from left, ~55% from top, ~30% wide, ~35% tall
  - Tag: ~88% from left, ~3% from top, ~10% wide, ~3% tall
- **Text style mapping:**
  - Heading: `heading.section`, `text.heading`
  - Body blocks: `body` with `body.emphasis`, `text.primary`
  - Callout text: `body`, `text.onGreen` (white on green)
- **Color token mapping:** Background `bg.primary`. Callout box fill `bg.secondary`.
- **Components used:** Title Header Block (with divider), Body Text Block with Bold Emphasis, Photo Panel (contained), Green Overlay Text Block (contained box variant), Tag.
- **Variation rules:** Photos can be omitted for a text-only variant. Callout box is optional. Number of body text blocks can vary from 1-3. Photos can be replaced with charts or diagrams.

### Template: Icon List + Photo Panel

- **When to use:** Listing items, features, threats, or categories with icons, paired with a visual photo panel for context.
- **Placement map:**
  - List heading: ~5% from left, ~15% from top, ~55% wide, ~8% tall
  - Icon+label grid (2x2): ~5% from left, ~30% from top, ~55% wide, ~45% tall
    - Row 1, Col 1: ~5% from left, ~30% from top, ~25% wide, ~15% tall
    - Row 1, Col 2: ~32% from left, ~30% from top, ~25% wide, ~15% tall
    - Row 2, Col 1: ~5% from left, ~50% from top, ~25% wide, ~15% tall
    - Row 2, Col 2: ~32% from left, ~50% from top, ~25% wide, ~15% tall
  - Photo panel (right): ~62% from left, 0% from top, ~38% wide, 100% tall
  - Overlay text on photos: ~65% from left, ~50% from top, ~30% wide, ~20% tall
  - Tag: ~88% from left, ~3% from top, ~10% wide, ~3% tall
- **Text style mapping:**
  - List heading: `heading.sub`, `text.heading`
  - Icon labels: `body`, `text.primary`
  - Overlay text: `heading.sub`, `text.onGreen`
- **Color token mapping:** Left area `bg.primary`. Right photo panel is full-bleed photos (may be stacked). Green overlay text sits on `bg.secondary`.
- **Components used:** Title Header Block, Icon + Label Pair (grid arrangement), Photo Panel (stacked variant), Green Overlay Text Block, Tag.
- **Variation rules:** Icon grid can be 2x2, 3x2, or a vertical list. Photo panel can be single or stacked. Overlay text is optional. Icons can be replaced with bullet points for a simpler variant.

### Template: Closing / CTA with Steps

- **When to use:** Final slide providing actionable next steps, a call to action, or a summary of key takeaways. Ends the presentation on an instructional note.
- **Placement map:**
  - Top banner (green + photos): 0% from left, 0% from top, 100% wide, ~35% tall
    - Green panel: 0% from left, 0% from top, ~35% wide, ~35% tall
    - Photo 1: ~35% from left, 0% from top, ~32% wide, ~35% tall
    - Photo 2: ~67% from left, 0% from top, ~33% wide, ~35% tall
  - CTA heading (on green): ~5% from left, ~10% from top, ~25% wide, ~10% tall
  - Step 1: ~5% from left, ~45% from top, ~28% wide, ~50% tall
  - Step 2: ~36% from left, ~45% from top, ~28% wide, ~50% tall
  - Step 3: ~67% from left, ~45% from top, ~28% wide, ~50% tall
- **Text style mapping:**
  - CTA heading: `heading.sub`, `text.onGreen` (italic or regular)
  - Step numbers: `number.hero`, `text.primary`
  - Step descriptions: `body` with `body.emphasis`, `text.primary`
- **Color token mapping:** Top banner `bg.secondary` (green) + photos. Bottom area `bg.primary` (white).
- **Components used:** Green Overlay Text Block (banner variant), Photo Panel (banner photos), Numbered Step Block, Icon + Label Pair.
- **Variation rules:** Can have 2-4 steps. Top banner can be omitted for a simpler CTA. Step icons are optional. Can replace steps with a single large CTA message. Banner photos can be replaced with a single full-width photo.

### Template: Section Divider [Inferred -- high confidence]

- **When to use:** Transitioning between major sections of the presentation. Creates a visual pause and resets the viewer's attention.
- **Placement map:**
  - Full-slide background: `bg.secondary` (green) or full-bleed photo with green overlay
  - Section title: ~15% from left, ~35% from top, ~70% wide, ~20% tall (centered)
  - Optional subtitle: ~20% from left, ~58% from top, ~60% wide, ~10% tall (centered)
  - Optional thin divider: centered, between title and subtitle
- **Text style mapping:**
  - Section title: `heading.hero`, `text.onGreen` (white)
  - Subtitle: `body`, `text.onGreen` (white, slightly translucent)
- **Color token mapping:** Background `bg.secondary` or photo with `bg.secondary` overlay at ~60-70% opacity. All text `text.onGreen`.
- **Components used:** Title Header Block (hero variant, inverted colors), Thin Divider Line (optional).
- **Variation rules:** Can use a full green background, a full-bleed photo with green overlay, or a split with a large green panel. Text is always white. Keep content minimal -- only title and optional subtitle.

### Template: Quote / Testimonial [Inferred -- high confidence]

- **When to use:** Featuring a powerful quote, testimonial, or key message that deserves standalone emphasis. Based on the deck's editorial tone and use of large text with attribution (observed in slide 4 attribution pattern and slide 2's quote-like body text).
- **Placement map:**
  - Photo panel (left): 0% from left, 0% from top, ~35% wide, 100% tall
  - Quote text: ~42% from left, ~25% from top, ~50% wide, ~40% tall
  - Attribution line: ~42% from left, ~70% from top, ~30% wide, ~5% tall
  - Optional thin divider: ~42% from left, ~67% from top, ~10% wide, ~0.5% tall
  - Tag: ~88% from left, ~3% from top, ~10% wide, ~3% tall
- **Text style mapping:**
  - Quote text: `heading.sub` or large `body`, `text.primary`, with key phrases in `body.emphasis`
  - Attribution: `caption`, `text.secondary`
- **Color token mapping:** Photo panel is full-bleed imagery. Content area `bg.primary`. No green accent panel.
- **Components used:** Photo Panel, Body Text Block with Bold Emphasis (large variant), Attribution / Source Line, Tag.
- **Variation rules:** Can omit the photo panel for a centered text-only quote. Attribution can include name, title, and organization. A decorative oversized quotation mark in `accent.1` at low opacity could be added as a subtle embellishment while staying on-theme.

---

## 7. Do's and Don'ts (Style Invariants)

### DO (non-negotiable rules for matching this aesthetic)

1. **Always use sharp corners (0px radius)** on all rectangles, photo frames, panels, and boxes. The only exception is the circular stat ring element. [Observed]
2. **Always pair photography with text** -- every slide should include at least one photograph. This is an image-heavy editorial style. [Observed]
3. **Always use the muted sage green (`#6B8F6B` - `#7A9A7E` range) as the sole chromatic accent.** No other hue should appear. [Observed]
4. **Always use bold weight (not italic, not underline, not color) for inline text emphasis** within body paragraphs. [Observed]
5. **Always maintain generous white space** -- content should feel airy, not cramped. Minimum 6% margins from slide edges. [Observed]
6. **Always use a serif font (Lora) for headings and a sans-serif font (Source Sans 3) for body text.** This contrast is central to the editorial personality. [Observed]
7. **Always use the green-background/white-text inversion** for emphasis panels and callout blocks. This is the deck's primary method of creating visual weight. [Observed]
8. **Always crop photos to sharp-edged rectangles** that fill their container completely. No gaps, no rounded masks, no decorative borders. [Observed]
9. **Always keep information density low.** Limit text to essential points. One main idea per slide. [Observed]
10. **Always use photography with dark, moody, or muted tones.** Avoid bright, saturated, or overly cheerful photography. [Observed]
11. **Always use centered headings** (within their panel or full-slide). Body text may be centered or left-aligned. [Observed]
12. **Always include a small section tag** in the top-right corner for navigation/wayfinding (except on the hero slide). [Observed]

### DON'T (things that would immediately break the aesthetic)

1. **Never use rounded corners** on any rectangular element (photos, boxes, panels, buttons). [Observed]
2. **Never use drop shadows or glows** on any element. The design is completely flat. [Observed]
3. **Never use gradients.** All color fills are solid and flat. [Observed]
4. **Never introduce a second chromatic color** (e.g., blue, red, orange). The palette is monochromatic green + neutrals only. [Observed]
5. **Never use decorative elements** such as blobs, patterns, dots, confetti, or geometric floating shapes. Visual interest comes from photography and typography, not decoration. [Observed]
6. **Never use bright, saturated, or high-key photography.** Photos should be moody, muted, or desaturated. [Observed]
7. **Never crowd a slide with dense text.** If you have more than 3-4 short sentences, split across multiple slides. [Observed]
8. **Never use italic text** for emphasis. Use bold weight only. [Observed]
9. **Never use colored text for body content** -- body text is always `text.primary` (charcoal) on light backgrounds or `text.onGreen` (white) on green backgrounds. [Observed]
10. **Never use borders or outlines around photos.** Photos sit flush in their containers with no frame treatment. [Observed]
11. **Never center-align long body text paragraphs** of more than 3 lines -- switch to left-alignment for readability. [Observed]
12. **Never use more than one stat ring or KPI element per slide.** Keep data presentations focused on a single key metric. [Observed]

---

## 8. Reproduction Checklist

- [ ] **Background color:** Use `bg.primary` (#FFFFFF) for standard slides. Use `bg.secondary` (#7A9A7E) for emphasis panels, section dividers, and callout blocks.
- [ ] **Heading font:** Use Lora (Google Fonts) for all headings. Regular weight for standard headings, no bold headings observed.
- [ ] **Body font:** Use Source Sans 3 (Google Fonts) for all body text, labels, captions, and numbers.
- [ ] **Color restriction:** Only use colors from the defined token palette. No additional hues beyond the sage green accent.
- [ ] **Heading color:** Set headings in `text.heading` (#6B8F6B) on white backgrounds, `text.onGreen` (#FFFFFF) on green backgrounds.
- [ ] **Body text color:** Use `text.primary` (#3D3D3D) on white backgrounds, `text.onGreen` (#FFFFFF) on green backgrounds.
- [ ] **Bold emphasis:** Apply bold weight to key phrases within body text. Do not use italic, underline, or color for emphasis.
- [ ] **Corner radius:** Set to 0px on all rectangular elements. Only use circles for stat rings.
- [ ] **No shadows:** Do not apply drop shadows, box shadows, or glows to any element.
- [ ] **No gradients:** All fills must be solid, flat colors.
- [ ] **Margins:** Maintain at least 6-8% margin from left/right slide edges and 8-10% from top/bottom.
- [ ] **Photography required:** Include at least one photograph on every slide.
- [ ] **Photo treatment:** Use dark, moody, or desaturated photos. Crop to sharp-edged rectangles.
- [ ] **Photo placement:** Use photos as left/right panels (35-50% width) in split layouts, as horizontal rows in grid layouts, or as banner strips.
- [ ] **Divider lines:** Use thin (1px) gray (#C4C4C4) lines centered below headings where appropriate.
- [ ] **Green callout blocks:** Use `bg.secondary` fill with white text for emphasis. Sharp corners, generous padding (~5-8%).
- [ ] **Section tag:** Place a small tag with the section/deck name in the top-right corner of each slide (except the hero).
- [ ] **Template selection:** Match content type to the appropriate template -- use Hero Title for openers, Content + Photo Split for standard content, Stat Highlight for key metrics, Section Divider for transitions, Closing/CTA for the final slide.
- [ ] **Information density:** Keep it low. One main idea per slide. Maximum 3-4 short text blocks.
- [ ] **White space:** Ensure generous spacing between elements. When in doubt, add more space.
- [ ] **Icon style:** If using icons, use thin line icons in monochrome green or gray.
- [ ] **Number formatting:** Large numbers use `number.hero` style. Step numbers use zero-padded format (01, 02, 03).
- [ ] **Consistency check:** Verify that every slide uses the same font pairing, color tokens, and spacing scale. No element should feel like it belongs to a different deck.

---

## 9. Background/Texture Generation Prompt

Create a subtle, atmospheric background image suitable for a nature-conservation editorial presentation. The image should feature a close-up of natural elements -- dense forest canopy, weathered tree bark, misty mountain ridge, or underwater coral -- rendered in deeply muted, desaturated tones with cool shadows and very low contrast. The overall mood should be somber, contemplative, and dignified, as if photographed at dusk or dawn with soft diffused light. Colors should be limited to dark olive greens, charcoal grays, muted earth browns, and deep teal undertones. The image should be dark enough (average luminance below 30%) that white text could be overlaid with full legibility. Avoid any bright highlights, saturated colors, or cheerful warmth. The composition should be abstract enough to serve as a background without a clear focal subject -- think texture and atmosphere rather than a specific scene. Resolution should be 1920x1080 pixels at 72dpi. Style reference: National Geographic documentary still, shot on film with a muted color grade.

---

## 10. Uncertainties & Open Questions

### Uncertainties

- **Exact font identification:** The heading serif font is difficult to pinpoint precisely from screenshots. Lora is the closest Google Fonts match, but it could be EB Garamond, Playfair Display, or a proprietary serif like Adobe Garamond. The body sans-serif could be Open Sans, Lato, or Nunito Sans rather than Source Sans 3. [Inferred -- medium confidence]
- **Exact hex codes:** Colors were estimated from screenshots and may vary depending on display calibration and export compression. The green accent could range from `#6B8F6B` to `#7A9A7E` to `#809E80`. [Inferred -- medium confidence]
- **Slide 3 background:** It is unclear whether slide 3's background is pure white (#FFFFFF) or a very subtle warm gray (#F5F5F3). [Observed with ambiguity]
- **Photo overlay opacity:** The exact opacity of the dark overlay on slide 4's photo panel could not be determined precisely. Estimated at 20-40%. [Inferred -- low confidence]
- **Animation and transitions:** No information can be extracted about slide transitions, text animation, or build sequences from static images. [Cannot be determined]
- **Stat ring specifics:** The exact stroke width, gap between ring and text, and whether the ring has rounded or square end caps cannot be precisely measured from the screenshot. [Inferred -- medium confidence]
- **Slide aspect ratio:** Appears to be standard 16:9 (1920x1080), but could not be confirmed precisely. [Inferred -- high confidence]

### Targeted Questions

1. **Do you know the brand fonts used in this deck?** Identifying the exact heading serif and body sans-serif would significantly improve reproduction fidelity.
2. **Was this deck created in Google Slides, PowerPoint, or Keynote?** This would help determine available font rendering, spacing behavior, and export characteristics.
3. **What is the exact hex code for the green accent color?** The sage green is the most critical color token, and knowing the precise value would anchor the entire palette.
4. **Are there any additional slide types not shown in these 7 slides** (e.g., a data-heavy chart slide, a team slide, or an agenda/table of contents)? This would help complete the template catalog.
5. **Are there any animation or transition effects applied to the slides?** Knowing whether elements build in sequentially or if slide transitions are used would help the generator plan content revelation timing.
