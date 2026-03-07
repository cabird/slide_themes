# Elegant Academic Serif — Theme Guide

> **Theme Name:** `elegant-academic-serif`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Elegant, Academic, Warm
- **Visual Personality:** Clean editorial with a warm institutional feel. Combines classic serif typography with bold color blocking, creating a professional yet approachable aesthetic. Not overly corporate—it feels more like a well-designed school or cultural institution brand. [Observed]
- **Mood & Emotion:** Trust, warmth, and scholarly sophistication. The navy conveys authority and tradition, while the salmon/coral brings approachability and modern freshness. [Observed]
- **Design References:** Echoes Scandinavian/Nordic editorial design—clean grids, generous white space, confident use of serif italics, and a restrained two-tone color system. Reminiscent of modern European institutional branding (universities, cultural foundations). [Inferred – high confidence]
- **Information Density:** 2 out of 5 — Deliberately sparse. Most slides carry a single message with generous breathing room. [Observed]
- **Polish Level:** 4 out of 5 — Highly polished with consistent spacing, deliberate typography, and cohesive color application. [Observed]
- **Shape Language:** Geometric/sharp — All elements use sharp rectangular forms. No rounded corners, no organic shapes. The only curve is in the masked photo (organic circular crop on one slide). [Observed]

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#FFFFFF` | White slide backgrounds (content slides, stats slides) [Observed] |
| `bg.secondary` | `#1D2D5E` | Deep navy blue backgrounds (title, section dividers) [Observed] |
| `bg.tertiary` | `#E8896A` | Warm salmon/coral backgrounds (section dividers, closing slide) [Observed] |
| `text.primary` | `#1D2D5E` | Main body text on light backgrounds (same as navy bg color) [Observed] |
| `text.secondary` | `#5A6A8A` | Muted/supporting body text on white backgrounds [Inferred – medium confidence] |
| `text.heading` | `#1D2D5E` | Headings on light backgrounds [Observed] |
| `text.inverted` | `#FFFFFF` | All text on dark (navy/coral) backgrounds [Observed] |
| `accent.1` | `#E8896A` | Primary accent — salmon/coral for highlights, numbers, emphasis [Observed] |
| `accent.2` | `#3D8E8E` | Teal/dark cyan accent — used in the logo mark and map highlights [Observed] |
| `accent.watermark` | `#2A3D6E` | Slightly lighter navy for large watermark numbers on navy bg [Observed] |
| `accent.watermark-coral` | `#D47A5E` | Slightly darker salmon for watermark numbers on coral bg [Observed] |
| `border` | `#C8CED8` | Light gray used for thin horizontal divider lines on content slides [Observed] |
| `number.highlight` | `#E8896A` | Coral color used for hero numbers/statistics [Observed] |

**Additional notes:**
- **No gradients used anywhere.** The palette is strictly flat/solid. [Observed]
- **Color relationships:** Complementary split — deep navy blue and warm coral sit on opposite sides of the color wheel, creating strong visual contrast. The teal serves as a bridging accent. [Observed]
- **Light mode orientation.** White and light backgrounds dominate content slides; dark backgrounds are reserved for section breaks, title, and closing. [Observed]
- **Color shifts between slide types:** Title and section divider slides use navy or coral full-bleed backgrounds with white text. Content/data slides use white backgrounds with navy text. This creates a clear rhythm of "break → content → break." [Observed]

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Playfair Display | serif | Bold Italic | Very large (~10-12% of slide height) | Normal | None | ~1.05 (very tight) |
| `heading.section` | Playfair Display | serif | Bold Italic | Large (~8-10% of slide height) | Normal | None | ~1.1 |
| `heading.sub` | Playfair Display | serif | Bold Italic | Medium (~5-6% of slide height) | Normal | None | ~1.15 |
| `body` | Inter | sans-serif | Regular (400) | Standard (~2.5% of slide height) | Normal | None | ~1.5 |
| `body.bold` | Inter | sans-serif | Semi-Bold (600) | Standard (~2.5% of slide height) | Normal | None | ~1.5 |
| `caption` | Inter | sans-serif | Regular (400) | Small (~1.8% of slide height) | Normal | None | ~1.4 |
| `label` | Inter | sans-serif | Regular (400) | Small (~2% of slide height) | Normal | None | ~1.3 |
| `number.hero` | Playfair Display | serif | Bold | Very large (~12% of slide height) | Normal | None | ~1.0 |
| `number.watermark` | Playfair Display | serif | Bold | Massive (~50-60% of slide height) | Normal | None | ~1.0 |
| `footer` | Inter | sans-serif | Regular (400) | Very small (~1.5% of slide height) | Normal | None | ~1.3 |
| `logo.text` | Inter | sans-serif | Semi-Bold (600) | Small (~2% of slide height) | Slightly tight (-0.02em) | None | ~1.2 |

**Additional typography notes:**
- **The defining typographic feature is the use of italic serif for ALL headings.** The heading font is a high-contrast transitional/modern serif with elegant italic forms. Playfair Display Italic is the closest Google Fonts match. [Observed — font match inferred, high confidence]
- **Body text is a clean, neutral geometric/humanist sans-serif.** Inter is the best Google Fonts match based on the letterforms, x-height, and proportions visible. [Inferred – high confidence]
- **Emphasis in body text** is shown via bold weight (same font, heavier weight). Some body text uses `bold` for the first few words of a sentence. [Observed]
- **Number formatting:** Statistics are displayed in the serif heading font at large sizes, colored in coral accent. Percentages include the `%` sign at the same size. [Observed]
- **Watermark numbers** (01, 02, 03) are set in the serif font at massive scale, in a nearly-same-tone-as-background color, creating a subtle large-scale decorative element. They are partially clipped by slide edges. [Observed]

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Sharp (0px) | All elements have perfectly square corners — cards, images, color blocks [Observed] |
| Borders | Thin solid (~1px) | Used sparingly for horizontal dividers separating stat rows [Observed] |
| Shadows | None | No drop shadows anywhere in the deck [Observed] |
| Transparency/Opacity | Used sparingly | Only for watermark numbers (~10-15% lighter than background) [Observed] |
| Stroke weight | Thin (1px) | Only for divider lines between stats [Observed] |

### 2.4 Spacing Scale

- **Base unit:** ~8px (at 1920x1080 reference) [Inferred – high confidence]
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px [Inferred – high confidence]
- **Margin from slide edge:** ~6-8% of slide width on left/right, ~6-8% from top/bottom [Observed]
- **Gap between major content blocks:** ~5-6% of slide height [Observed]
- **Gap between related elements:** ~2-3% of slide height (e.g., heading to subheading, icon to label) [Observed]
- **Footer zone:** Bottom ~8% of slide height reserved for logo and page number [Observed]

---

## 3. Layout System

### 3.1 Grid & Structure
- **Grid type:** Primarily single-column and asymmetric two-column layouts. [Observed]
- **Column proportions:** When two-column, typically 55/45 or 60/40 split (text-heavy side is wider). [Observed]
- **Alignment bias:** Strongly left-aligned. All headings, body text, and labels are left-justified. [Observed]
- **Content safe zone:** Approximately 7% margin on all sides. Footer elements sit at the very bottom within this margin. [Observed]

### 3.2 Visual Hierarchy
- **Primary message emphasis:** Large italic serif heading positioned in the upper-left quadrant. Size is the dominant hierarchy signal — headings are 3-5x larger than body text. [Observed]
- **Supporting information de-emphasis:** Body text is set in a much smaller sans-serif at regular weight, with generous vertical distance from the heading. [Observed]
- **Reading flow pattern:** Top-down left-aligned (F-pattern). The eye enters at the heading (upper left), then scans down to body text, then across to any right-side content (images, numbers). [Observed]
- **Section separation:** Achieved through full-background color changes between slides, not through visual dividers within slides. Within slides, generous white space and subtle thin lines separate content blocks. [Observed]

### 3.3 White Space Philosophy
- **Overall density:** Airy — generously spaced with substantial empty areas on most slides. [Observed]
- **Most generous white space:** Around headings and between the heading block and body text. The middle-right portion of many slides is left completely empty. [Observed]
- **Tightest grouping:** Footer area (logo + page number) and stat rows (label + number pairs). [Observed]

---

## 4. Component Library

> **Logo Lockup**
> - **Purpose:** Brand identifier
> - **Anatomy:** Square icon (teal background with white "S" lettermark) + two-line text ([Brand Name] / [Brand Name])
> - **Visual Specs:** Icon is a small square with `accent.2` teal fill, sharp corners. Text uses `logo.text` style in white (on dark backgrounds) or navy (on light backgrounds). [Observed]
> - **Placement Rules:** Top-left corner on title slide; bottom-left corner on content slides as part of footer. On closing slide, centered vertically in upper portion. [Observed]
> - **Variations:** White version (on navy/coral backgrounds), navy version (on white backgrounds). [Observed]

> **Watermark Number**
> - **Purpose:** Large decorative section number creating visual interest and indicating section
> - **Anatomy:** Two-digit number (01, 02, 03) rendered at massive scale
> - **Visual Specs:** Font is `number.watermark` token. Color is a slight tonal shift from the background (~10-15% lighter on navy, ~10-15% darker on coral). Often cropped by slide edges — number extends beyond visible area. [Observed]
> - **Placement Rules:** Right-aligned, vertically centered or slightly above center. The number overflows the right edge and sometimes the top edge of the slide. [Observed]
> - **Variations:** Navy-on-navy (section divider), coral-on-coral (section divider). Not used on content/white slides. [Observed]

> **Footer Bar**
> - **Purpose:** Persistent slide identification
> - **Anatomy:** Logo lockup (small) on the left + slide number on the right, sitting at the very bottom of the slide
> - **Visual Specs:** Logo uses small version. Slide number uses `footer` text style. Both sit within the bottom margin zone (~2-3% from bottom edge). [Observed]
> - **Placement Rules:** Present on all content slides (white and coral backgrounds). On navy section dividers, the logo appears without a page number. [Observed]

> **Stat Row**
> - **Purpose:** Displaying key metrics/KPIs
> - **Anatomy:** Left-aligned label text + right-aligned large number, separated by a thin horizontal divider line above
> - **Visual Specs:** Label uses `label` or `body` token. Number uses `number.hero` token in `accent.1` (coral) color. Divider line is `border` token, 1px solid. [Observed]
> - **Placement Rules:** Stacked vertically in the right half of stats slides, with 3 rows visible per slide. [Observed]
> - **Variations:** With or without a descriptive text block on the left side of the slide. [Observed]

> **Section Heading Block**
> - **Purpose:** Primary message area
> - **Anatomy:** Large italic serif heading, optionally followed by a subtitle or body text
> - **Visual Specs:** Uses `heading.hero` or `heading.section` depending on prominence. Left-aligned, positioned in the upper-left quadrant. [Observed]
> - **Placement Rules:** Sits approximately 25-35% from the top, 7% from the left edge. [Observed]

> **Image Frame (Rectangular)**
> - **Purpose:** Displaying photographs within content slides
> - **Anatomy:** Sharp-cornered rectangular image, edge-to-edge on one side or contained within the grid
> - **Visual Specs:** No border, no shadow, no rounded corners. Images are cropped to fill their container. [Observed]
> - **Placement Rules:** Right half of two-column layouts, or as a background with text overlay. [Observed]

> **Image Frame (Masked/Organic)**
> - **Purpose:** Displaying photographs with a softer, more distinctive treatment
> - **Anatomy:** Photo masked into an organic/rounded blob shape
> - **Visual Specs:** The mask is an irregular curved shape (resembling a rounded trapezoid or natural form). No border. [Observed — single instance on masked photo slide]
> - **Placement Rules:** Right side of a two-column layout. [Observed]

> **Divider Line**
> - **Purpose:** Separating stat rows or content sections
> - **Anatomy:** Thin horizontal line
> - **Visual Specs:** 1px solid, `border` color token (~light gray). Full width of the stat column. [Observed]

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography
- **Subject matter:** Landscape/nature (aerial coastal shot), workplace/lifestyle (person in café/workspace). Consistent with an educational/regional institution theme. [Observed]
- **Cropping conventions:** Rectangular full-bleed (filling half the slide or entire background), or masked into organic shape. [Observed]
- **Color treatment:** Natural, slightly warm color grading. No desaturation, no duotone. Colors feel authentic but polished. [Observed]
- **Overlay usage:** On the title photo slide (middle-center), a subtle teal color block overlaps or sits behind the photo area. No heavy overlays or tints. [Observed]
- **When photos are used:** Section title slides and content slides that need visual context. Never on stats/data slides. [Observed]

### 5.2 Icons & Illustrations
- **No icons observed** in any slide. The deck relies entirely on typography, color, and photography. [Observed]
- **Map illustration:** One slide features a simplified geographic outline map (of [Region]) rendered in a flat, muted style with location markers. Fill uses a very light gray with `accent.2` teal labels. [Observed]

### 5.3 Decorative Elements
- **Watermark numbers** are the primary decorative element (see Component Library). They are large, subtle, and integrated into the background — not overlaid on content. [Observed]
- **No background patterns, textures, noise, or grain.** Backgrounds are flat solid colors. [Observed]
- **No floating shapes, blobs, dots, or abstract decorations** (except the watermark numbers). [Observed]
- **Overall:** Decoration is extremely restrained. The aesthetic relies on typography and color contrast, not ornament. [Observed]

### 5.4 Data Visualization
- **Map chart observed:** Flat outline map of a geographic region with teal location markers and labels. Minimal styling, no fills or shading beyond a light gray base. [Observed]
- **No bar charts, line charts, pie charts, or tables observed.** Data is displayed as standalone large numbers (KPI style). [Observed]

---

## 6. Slide Template Catalog

### Template: "Title Slide" (Slide 1 — top-left)
- **When to use:** Opening slide of the presentation
- **Placement map:**
  - Logo lockup: 7% from left, 8% from top
  - Headline block: 7% from left, 55% from top, ~60% wide
  - Subtitle/author: 7% from left, 75% from top, ~40% wide
- **Text style mapping:** Heading uses `heading.hero` in white. Subtitle uses `body` in white.
- **Color token mapping:** Background `bg.secondary` (navy), all text `text.inverted` (white)
- **Components used:** Logo Lockup (white version), Section Heading Block

### Template: "Section Divider with Number" (Slides 2, 4, 6 — navy and coral variants)
- **When to use:** Introducing a new major section of the presentation
- **Placement map:**
  - Watermark number: right-aligned, centered vertically, overflowing right edge by ~30%
  - Headline block: 7% from left, 35-45% from top, ~55% wide
  - Optional body text: 7% from left, below heading, ~45% wide
  - Footer: bottom 3%, logo left, page number right
- **Text style mapping:** Heading uses `heading.section` in white. Body uses `body` in white.
- **Color token mapping:** Background alternates between `bg.secondary` (navy) and `bg.tertiary` (coral). Watermark uses `accent.watermark` or `accent.watermark-coral`.
- **Components used:** Watermark Number, Section Heading Block, Footer Bar
- **Variation rules:** Navy background for primary sections, coral background for secondary/alternate sections. Body text is optional.

### Template: "Content — Text + Image" (Slide 3 — top-right)
- **When to use:** Presenting a concept with supporting photography
- **Placement map:**
  - Headline: 7% from left, 8% from top, ~40% wide
  - Body text: 7% from left, 45% from top, ~40% wide
  - Image: right 45% of slide, full height
  - Footer: bottom 3%
- **Text style mapping:** Heading uses `heading.sub` in navy. Body uses `body` in navy.
- **Color token mapping:** Background `bg.primary` (white), text `text.primary` (navy)
- **Components used:** Section Heading Block, Image Frame (rectangular), Footer Bar

### Template: "Title Slide with Photo" (Slide 5 — middle-center)
- **When to use:** Section opening with strong visual impact
- **Placement map:**
  - Logo lockup: centered, ~15% from top
  - Headline: centered, ~40% from top, ~50% wide
  - Subtitle: centered, below headline, ~40% wide
  - Photo: right ~50% of slide as background, may extend behind text area
- **Text style mapping:** Heading uses `heading.hero` in white. Subtitle uses `body` in white.
- **Color token mapping:** Left portion uses `accent.2` (teal) background. Photo fills right portion.
- **Components used:** Logo Lockup (white), Section Heading Block

### Template: "Stats / KPIs" (Slides 7, 9 — bottom-left, bottom-right of row 3)
- **When to use:** Presenting numerical data and key metrics
- **Placement map:**
  - Headline: 7% from left, 8% from top, ~40% wide
  - Body text (optional): 7% from left, ~65% from top, ~35% wide
  - Stat rows (3 stacked): right ~45% of slide, vertically distributed from ~15% to ~75%
  - Footer: bottom 3%
- **Text style mapping:** Heading uses `heading.sub` in navy. Stats labels use `label`. Stat numbers use `number.hero` in coral.
- **Color token mapping:** Background `bg.primary` (white), numbers `accent.1` (coral), dividers `border`
- **Components used:** Section Heading Block, Stat Row (×3), Divider Line, Footer Bar
- **Variation rules:** Left-side body text can be present or absent. The layout works with or without descriptive paragraph.

### Template: "Content — Text + Graphic/Map" (Slide 8 — middle of row 3)
- **When to use:** Presenting geographic or diagrammatic information
- **Placement map:**
  - Headline: 7% from left, 8% from top, ~45% wide
  - Body text: 7% from left, ~65% from top, ~40% wide
  - Graphic/map: centered in right ~50%, vertically centered
  - Footer: bottom 3%
- **Text style mapping:** Heading uses `heading.sub` in navy. Body uses `body` in navy.
- **Color token mapping:** Background `bg.primary` (white), map outline in light gray, labels in `accent.2` (teal)
- **Components used:** Section Heading Block, Footer Bar

### Template: "Full-Width Text" (Slide 10 — bottom-left)
- **When to use:** Making a bold statement or presenting a key message without imagery
- **Placement map:**
  - Headline: 7% from left, 15% from top, ~85% wide (spans nearly full width)
  - Body text: 7% from left, ~65% from top, ~45% wide
  - Footer: bottom 3%
- **Text style mapping:** Heading uses `heading.hero` in navy. Body uses `body` in navy.
- **Color token mapping:** Background `bg.primary` (white), text `text.primary` (navy)
- **Components used:** Section Heading Block, Footer Bar

### Template: "Content — Text + Masked Photo" (Slide 11 — bottom-center)
- **When to use:** Content slide with a more creative/editorial photo treatment
- **Placement map:**
  - Headline: 7% from left, 8% from top, ~40% wide
  - Body text: 7% from left, ~55% from top, ~40% wide
  - Masked photo: right ~50% of slide, vertically centered, organic blob mask
  - Footer: bottom 3%
- **Text style mapping:** Heading uses `heading.sub` in navy. Body uses `body` in navy.
- **Color token mapping:** Background `bg.primary` (white), text `text.primary` (navy)
- **Components used:** Section Heading Block, Image Frame (Masked/Organic), Footer Bar

### Template: "Closing / Thank You Slide" (Slide 12 — bottom-right)
- **When to use:** Final slide with contact information
- **Placement map:**
  - Logo lockup: centered, ~25% from top (larger than standard)
  - "Thank you" heading: 7% from left, ~60% from top
  - Contact info: 7% from left, ~75% from top
- **Text style mapping:** Heading uses `heading.hero` in white. Contact uses `body` in white.
- **Color token mapping:** Background `bg.tertiary` (coral), text `text.inverted` (white)
- **Components used:** Logo Lockup (white, larger variant)

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)
1. Always use italic serif (Playfair Display Italic) for ALL headings — this is the defining typographic choice. [Observed]
2. Always use clean sans-serif (Inter) for body text — the contrast between serif headings and sans-serif body is essential. [Observed]
3. Maintain at least ~7% margin from all slide edges for content. [Observed]
4. Use full-bleed solid color backgrounds for section dividers (navy or coral only). [Observed]
5. Keep all corners sharp (0px radius) on all elements. [Observed]
6. Place the logo lockup consistently — top-left on title slides, bottom-left on content slides. [Observed]
7. Place the slide/page number in the bottom-right corner. [Observed]
8. Use coral/salmon color for emphasis numbers and hero statistics. [Observed]
9. Left-align all text (headings, body, labels). Never center body text. [Observed]
10. Use generous white space — content should breathe. Slides should feel open, not crowded. [Observed]
11. When using watermark numbers, make them large enough to extend beyond slide edges, and keep them nearly the same tone as the background. [Observed]
12. Maintain strict two-column asymmetric layouts (text left, visual right) for content slides. [Observed]

### ❌ DON'T (things that would immediately break the aesthetic)
1. Never use rounded corners on any element (cards, images, buttons). [Observed]
2. Never use drop shadows anywhere. [Observed]
3. Never use gradients — all backgrounds and fills must be flat solid colors. [Observed]
4. Never use more than one photo per slide. [Observed]
5. Never center-align headings on content slides (only the title+photo slide uses centered text). [Observed]
6. Never use upright/roman style for headings — they must always be italic. [Observed]
7. Never use decorative icons, emoji, or illustrative embellishments (the design is purely typographic). [Observed]
8. Never introduce additional colors beyond the defined palette (navy, coral, teal, white, gray). [Observed]
9. Never make watermark numbers opaque/prominent — they must be subtle, nearly blending with the background. [Observed]
10. Never use text smaller than the `caption` token — maintain readability and elegance. [Inferred – high confidence]
11. Never fill a slide with dense paragraphs — keep text concise, favoring short sentences or fragments. [Observed]
12. Never put body text in the serif font — serif is exclusively for headings and display numbers. [Observed]

---

## 8. Reproduction Checklist

- [ ] **Color:** Use only the defined palette — navy (`#1D2D5E`), coral (`#E8896A`), white (`#FFFFFF`), teal (`#3D8E8E`), and gray (`#C8CED8` for borders).
- [ ] **Backgrounds:** White for content slides, navy or coral for section dividers/title/closing. No gradients.
- [ ] **Heading font:** Playfair Display Bold Italic for all headings. No exceptions.
- [ ] **Body font:** Inter Regular for all body, labels, captions, and footer text.
- [ ] **Heading style:** Always italic. Scale headings large (10-12% of slide height for hero, 5-8% for sub-headings).
- [ ] **Alignment:** Left-align all text except on the centered title+photo template.
- [ ] **Margins:** 7% on all sides minimum. Footer sits in the bottom 3%.
- [ ] **Footer:** Include small logo lockup (bottom-left) and page number (bottom-right) on all content slides.
- [ ] **Sharp corners:** 0px radius on everything — images, containers, blocks.
- [ ] **No shadows:** Do not add drop shadows to any element.
- [ ] **Stats/KPIs:** Display numbers in coral serif font, large size. Stack with labels separated by thin gray lines.
- [ ] **Watermark numbers:** On section dividers, add a large 2-digit number (~50-60% of slide height) in a color ~10-15% offset from the background. Align right, allow overflow.
- [ ] **Photography:** Use rectangular crops (sharp corners) or organic blob masks. Natural color grading, no filters.
- [ ] **Content layout:** Use asymmetric two-column (55/45 or 60/40) for text+image slides.
- [ ] **White space:** Keep slides airy. Never fill more than 60% of a slide with content.
- [ ] **Color rhythm:** Alternate between white content slides and colored section dividers to create visual rhythm.
- [ ] **Logo:** Use teal square icon + text lockup. White version on dark/coral backgrounds, navy version on white backgrounds.
- [ ] **Text emphasis:** Use bold weight (same sans-serif) for in-line emphasis, never underline or color.
- [ ] **Decorative restraint:** The only decorative element allowed is the watermark number. No icons, no patterns, no ornaments.
- [ ] **Consistency check:** Every slide should use the same margin, footer style, and font pairing.

---

## 9. Background/Texture Generation Prompt

> Create a perfectly flat, solid-colored background with no texture, noise, or pattern. The color should be a deep, rich navy blue (#1D2D5E) or warm salmon coral (#E8896A). The background must be completely uniform with zero visual variation — no gradients, no subtle textures, no grain. Optionally, superimpose a very large, two-digit sans-serif or serif number (like "01" or "04") in a color only 10-15% lighter or darker than the background, positioned in the right portion of the image and partially cropped by the right edge, creating a subtle watermark effect. The overall feel should be clean, institutional, and Scandinavian in its restraint.

---

## 10. Uncertainties & Open Questions

- **Heading font identification:** The italic serif is very likely Playfair Display, but could also be Lora, Cormorant, or a proprietary/commercial font like Canela or Freight Display. Without access to the source file, this is an informed estimate. [Inferred – high confidence for Playfair Display]
- **Body font identification:** The sans-serif is very likely Inter, but could be Roboto, Work Sans, or a custom institutional typeface. Letterforms are too small in the composite image for 100% certainty. [Inferred – high confidence for Inter]
- **Exact hex values:** Colors were estimated from the composite image at web resolution. The actual brand colors may differ by a few hex values. The navy could range from `#1A2A58` to `#1F3060`, and the coral from `#E07A5A` to `#EC9078`. [Inferred – medium confidence]
- **Animation/transitions:** Cannot determine from static images. Likely simple fade or cut transitions given the clean, restrained aesthetic. [Inferred – medium confidence]
- **Logo icon detail:** The teal square icon appears to contain a stylized [Brand initial] monogram, but exact details are hard to discern at this resolution. [Observed at low resolution]

**Questions that would improve reproduction fidelity:**
1. What is the exact heading font used? Is it Playfair Display, or a commercial alternative like Canela or Freight Display Italic?
2. What is the exact body font? Is it Inter, or something else like Roboto or a custom institutional typeface?
3. What are the official brand color hex codes for the navy and coral?
4. Was this designed in PowerPoint, Google Slides, Keynote, or Figma?
5. Are there any slide transition or animation conventions for this deck?
