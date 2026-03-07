# Clean Dual-Tone — Theme Guide

> **Theme Name:** `clean-dual-tone`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Clean, Corporate, Confident
- **Visual Personality:** Minimalist-corporate with editorial touches. The design is structured and professional, using bold split-tone layouts and generous white space to convey authority and modernity. It leans editorial in its use of large typography and deliberate asymmetry. `[Observed]`
- **Mood & Emotion:** Trust, sophistication, and forward-thinking innovation. The deck feels like a premium SaaS pitch — polished, serious, and aspirational without being cold. `[Inferred – high confidence]`
- **Design References:** Echoes the brand language of modern fintech/AI startup decks (think modern SaaS brand aesthetics). Draws from Swiss/International Typographic Style with its grid discipline and clean sans-serifs, updated with contemporary dual-tone color blocking. `[Inferred – high confidence]`
- **Information Density:** 2 out of 5 — deliberately sparse. Each slide focuses on one message with ample breathing room. `[Observed]`
- **Polish Level:** 5 out of 5 — pixel-perfect execution with precise alignment, consistent spacing, and refined typographic hierarchy. `[Observed]`
- **Shape Language:** Geometric and sharp. All elements use straight edges and right angles (0px border radius). Rectangles and squares dominate; no organic or rounded shapes observed. `[Observed]`

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#FFFFFF` | Main slide background (light mode) `[Observed]` |
| `bg.secondary` | `#191A1F` | Dark sections, testimonial backgrounds, dark mode panels `[Observed]` |
| `bg.tertiary` | `#7A8B50` | Muted olive-green/sage accent backgrounds, decorative panels `[Observed]` |
| `bg.gradient.start` | `#1B2A4A` | Navy start of branded gradient `[Observed]` |
| `bg.gradient.end` | `#3B6FB5` | Blue end of branded gradient `[Observed]` |
| `text.primary` | `#1A1A1A` | Headings and body text on light backgrounds `[Observed]` |
| `text.secondary` | `#6B6B6B` | Muted supporting text, descriptions, captions `[Observed]` |
| `text.tertiary` | `#9B9B9B` | Section numbers, very light labels `[Inferred – high confidence]` |
| `text.heading` | `#1A1A1A` | Heading text (same as primary) `[Observed]` |
| `text.onDark` | `#FFFFFF` | Text on dark/gradient backgrounds `[Observed]` |
| `text.onDark.muted` | `#B0B8C8` | Muted text on dark backgrounds `[Inferred – medium confidence]` |
| `accent.1` | `#3B6FB5` | Primary accent — branded blue, gradient panels, CTAs `[Observed]` |
| `accent.2` | `#7A8B50` | Secondary accent — olive-green decorative blocks `[Observed]` |
| `border` | `#E5E5E5` | Subtle dividers and content separators `[Inferred – high confidence]` |

**Additional color notes:**
- **Gradient usage:** A navy-to-blue gradient (`#1B2A4A` → `#3B6FB5`, ~135° angle, top-left to bottom-right) is applied on branded overlay cards and section dividers. `[Observed]`
- **Color relationships:** The palette is largely neutral (whites, blacks, grays) with two accent colors — olive-green and navy-blue — creating a split-complementary scheme. `[Observed]`
- **Dark mode vs. light mode:** The deck alternates between light-dominant slides (white background) and dark-accent sections (near-black or gradient backgrounds). Light is the primary orientation. `[Observed]`
- **Color shifts by slide type:** Title/content slides use `bg.primary` (white). Section dividers and branded panels use the navy-blue gradient. Testimonial slides use `bg.secondary` (dark charcoal). The olive-green appears as a decorative accent panel, not a full background. `[Observed]`

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | DM Sans | sans-serif | 700 (Bold) | ~8–10% of slide height | -0.02em `[Inferred]` | None | 1.1 `[Inferred]` |
| `heading.section` | DM Sans | sans-serif | 700 (Bold) | ~5–6% of slide height | -0.01em `[Inferred]` | None | 1.2 `[Inferred]` |
| `heading.sub` | DM Sans | sans-serif | 600 (SemiBold) | ~3–4% of slide height | 0 | None | 1.3 `[Inferred]` |
| `body` | DM Sans | sans-serif | 400 (Regular) | ~2–2.5% of slide height | 0 | None | 1.5 `[Inferred]` |
| `caption` | DM Sans | sans-serif | 400 (Regular) | ~1.5–2% of slide height | 0.01em `[Inferred]` | None | 1.4 `[Inferred]` |
| `label` | DM Sans | sans-serif | 500 (Medium) | ~1.5% of slide height | 0.05em `[Inferred]` | Uppercase | 1.2 `[Inferred]` |
| `number.hero` | DM Sans | sans-serif | 300 (Light) | ~4–5% of slide height | 0 | None | 1.0 `[Inferred]` |
| `quote` | DM Sans | sans-serif | 700 (Bold) | ~3–4% of slide height | -0.01em `[Inferred]` | None | 1.3 `[Inferred]` |

**Font identification rationale:** The typeface displays clean geometric letterforms with circular 'o', even stroke width, and modern terminals. DM Sans is the closest Google Fonts match for this geometric sans-serif. Alternative candidates: Inter, Outfit, or Poppins. `[Inferred – high confidence]`

**Additional typography notes:**
- **No special treatments observed** — no outlined text, gradient fills, text shadows, or colored highlights behind text. Typography is clean and unadorned. `[Observed]`
- **Emphasis method:** Emphasis is conveyed through weight changes (Bold vs. Regular) and size contrast rather than color or decoration. `[Observed]`
- **Number formatting:** Section numbers use a lighter weight (300) and are styled as zero-padded two-digit strings (e.g., "01", "02"…"10"). `[Observed]`
- **Large decorative letterforms:** Oversized, cropped letterforms (e.g., a giant "e") are used as background design elements on accent panels. These use the heading font at extreme scale (~200–300% of slide height) with reduced opacity or tonal contrast against the background. `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Sharp (0px) | All cards, panels, and containers use 0 radius `[Observed]` |
| Borders | None | No visible borders on cards or content blocks `[Observed]` |
| Shadows | None | No drop shadows observed on any elements `[Observed]` |
| Transparency/Opacity | Sparingly | Used only on decorative oversized letterforms behind panels `[Observed]` |
| Stroke weight | N/A | No stroked/outlined elements observed `[Observed]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred – high confidence]`
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px `[Inferred – high confidence]`
- **Margin from slide edge:** ~8% of slide width on left/right, ~8% of slide height on top/bottom `[Observed]`
- **Gap between major content blocks:** ~5–6% of slide height `[Observed]`
- **Gap between related elements** (e.g., title and subtitle): ~2–3% of slide height `[Observed]`
- **Gap between list items** (agenda): ~3–4% of slide height `[Observed]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Asymmetric dual-column is the dominant layout pattern. Single-column layouts are used for list-heavy slides. `[Observed]`
- **Column proportions:** Typically 40/60 (accent panel / content area) on the title slide, and roughly 35/65 (photo / quote area) on testimonial slides. `[Observed]`
- **Alignment bias:** Strongly left-aligned. Headings, body text, and lists all begin at the left margin. No centered content blocks observed. `[Observed]`
- **Content safe zone:** ~8% margin from all edges. On dual-tone slides, each panel maintains its own internal margins of ~6–8%. `[Observed]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Large bold heading at the top of the content area, using `heading.hero` size and `text.primary` color. Position alone (top-left quadrant) establishes dominance. `[Observed]`
- **Supporting information de-emphasis:** Smaller size (`body` or `caption`), lighter color (`text.secondary`), and lower vertical position. `[Observed]`
- **Reading flow pattern:** F-pattern on content slides (scan heading left-to-right, then down the left margin). Z-pattern on dual-tone slides (logo top-left → heading top-right → content bottom-left → CTA bottom-right). `[Inferred – high confidence]`
- **Section separation:** Achieved through color blocking (different background colors for adjacent panels), vertical spacing, and implicit grouping. No visible divider lines used. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** Airy — generous white space throughout. The design breathes. `[Observed]`
- **Most generous white space:** Around headings, between the color-block boundary and content, and the bottom half of content slides. `[Observed]`
- **Tightest grouping:** Between list item numbers, titles, and descriptions in the agenda layout; between name, title, and quote in the testimonial layout. `[Observed]`

---

## 4. Component Library

### Logo Lockup

- **Purpose:** Brand identification and slide anchoring
- **Anatomy:** Geometric square icon (containing horizontal parallel lines) + Brand wordmark to the right `[Observed]`
- **Visual Specs:** Monochrome — uses `text.primary` on light backgrounds, `text.onDark` on dark backgrounds. No border, no shadow, no background container. `[Observed]`
- **Typography:** Wordmark appears in `heading.sub` weight, custom brand font (use DM Sans Medium as proxy) `[Inferred – medium confidence]`
- **Placement Rules:** Top-left corner of the slide, ~8% from left edge, ~6% from top edge. On the title slide, it sits in the white content panel (right side). On gradient overlay cards, it appears top-left within the card. `[Observed]`
- **Variations:** Light version (on dark backgrounds), dark version (on light backgrounds) `[Observed]`

### Numbered Agenda List

- **Purpose:** Table of contents / agenda displaying sequential sections
- **Anatomy:** Each item consists of (1) zero-padded section number, (2) bold section title, (3) regular-weight description line `[Observed]`
- **Visual Specs:** No borders, no separators, no background fills. Vertical rhythm maintained by consistent spacing between items. Numbers and titles are left-aligned along the same left margin. `[Observed]`
- **Typography:** Numbers use `number.hero` (Light weight, muted color). Titles use `heading.sub` (SemiBold, `text.primary`). Descriptions use `body` (Regular, `text.secondary`). `[Observed]`
- **Placement Rules:** Left-aligned, starting ~8% from left edge. The list occupies roughly the left 55–60% of the slide. Top item begins at ~12% from top. `[Observed]`
- **Variations:** None observed — single style. `[Observed]`

### Gradient Overlay Card

- **Purpose:** Branded accent panel for section dividers, taglines, or visual breaks
- **Anatomy:** Rectangular card with navy-to-blue gradient background, containing logo lockup (light variant) + heading + optional subtitle `[Observed]`
- **Visual Specs:** Background uses linear gradient from `bg.gradient.start` to `bg.gradient.end` (~135° angle). Sharp corners (0px radius). No border, no shadow. `[Observed]`
- **Typography:** Heading uses `heading.section` in `text.onDark`. Subtitle uses `body` in `text.onDark.muted`. `[Observed]`
- **Placement Rules:** On the agenda slide, positioned as an overlapping card in the bottom-right quadrant (~50% from left, ~45% from top, ~48% wide, ~50% tall), overlapping the main content area. `[Observed]`
- **Variations:** Could serve as a full-bleed section divider slide (inferred from the preview card). `[Inferred – high confidence]`

### Testimonial / Quote Block

- **Purpose:** Customer testimonial with photo, attribution, and quote
- **Anatomy:** (1) Portrait photograph, (2) person name, (3) person title/company, (4) large pull quote, (5) extended body text `[Observed]`
- **Visual Specs:** Photo occupies the left ~35% panel on a dark background (`bg.secondary`). Quote and attribution occupy the right ~65% on a slightly lighter background or same dark tone. `[Observed]`
- **Typography:** Name uses `heading.sub` (SemiBold, `text.onDark`). Title uses `caption` (`text.onDark.muted`). Pull quote uses `quote` (Bold, `text.onDark`). Body text uses `body` (Regular, `text.onDark.muted`). `[Observed]`
- **Placement Rules:** Full-width slide. Photo left-aligned, flush or nearly flush with left edge. Quote block begins at ~40% from left, ~25% from top. `[Observed]`
- **Variations:** None observed, but could support right-aligned photo variant. `[Inferred – low confidence]`

### Dual-Tone Split Panel

- **Purpose:** Decorative background structure for hero/title slides
- **Anatomy:** Two adjacent rectangular panels spanning the full slide — left panel uses `bg.tertiary` (olive-green), right panel uses `bg.primary` (white). The left panel contains oversized decorative letterforms and tagline text. `[Observed]`
- **Visual Specs:** Sharp division at approximately 40% from left edge. No gap, border, or transition between panels. Left panel may contain partially cropped, oversized typographic elements as decoration. `[Observed]`
- **Typography:** Decorative text on left panel uses extreme-scale heading font in a slightly lighter/darker shade of the panel color. Content text on right panel uses standard `heading.hero` and `body` tokens. `[Observed]`
- **Placement Rules:** Always full-bleed (edge-to-edge, top-to-bottom). Split line is vertical. `[Observed]`
- **Variations:** The split ratio could vary (50/50, 40/60, 30/70) depending on content needs. `[Inferred – medium confidence]`

### Footer / URL Bar

- **Purpose:** Displays brand URL for reference
- **Anatomy:** Single line of text showing website URL `[Observed]`
- **Visual Specs:** No background, no border. Text in `text.secondary` or `text.primary` depending on background context. `[Observed]`
- **Typography:** Uses `caption` style `[Observed]`
- **Placement Rules:** Bottom-left of the content area, ~8% from left edge, ~4% from bottom edge `[Observed]`
- **Variations:** None observed `[Observed]`

### Slide Number Indicator

- **Purpose:** Page/slide numbering
- **Anatomy:** Two-digit number (zero-padded, e.g., "01") on a dark strip or in a corner position `[Observed]`
- **Visual Specs:** Appears on a dark background strip in `text.onDark`. `[Observed]`
- **Typography:** Uses `number.hero` or `caption` style `[Observed]`
- **Placement Rules:** Top-right corner of the slide, on a dark vertical strip approximately 5–8% wide `[Observed]`
- **Variations:** None observed `[Observed]`

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter:** Professional headshots of real people for testimonials. No product screenshots, abstract imagery, or nature photos observed. `[Observed]`
- **Cropping conventions:** Rectangular crop, vertically oriented, occupying a dedicated panel of the slide. Not circular, not masked to unusual shapes. `[Observed]`
- **Color treatment:** Natural color grading, possibly slightly desaturated or cool-toned to maintain the professional, corporate aesthetic. No heavy filters. `[Observed]`
- **Overlay usage:** No color tint or gradient overlay on photographs. `[Observed]`
- **When photos are used:** Only in testimonial/quote slides. All other slides are text-only or use graphic elements. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon style:** The only icon observed is the Brand logo mark — a geometric square with horizontal parallel lines inside. No UI icons, illustrations, or icon sets observed elsewhere in the deck. `[Observed]`
- **Line weight:** Medium weight for the logo mark `[Observed]`
- **Color usage:** Monochrome — matches text color of surrounding context `[Observed]`

### 5.3 Decorative Elements

- **Oversized typography as texture:** Large cropped letterforms (e.g., a massive "e") are used as background decoration on the olive-green accent panel. These are rendered in a slightly different shade of the panel color, creating a subtle tone-on-tone effect. `[Observed]`
- **Prominence:** Subtle — the decorative type is clearly secondary to the foreground content. It reads as texture rather than content. `[Observed]`
- **Placement:** Confined to accent/colored panels, not used on white backgrounds. Typically bleeds off one or more edges of the panel. `[Observed]`
- **No other decorative elements:** No floating shapes, dots, lines, patterns, gradients, noise, or grain on content areas. `[Observed]`

### 5.4 Data Visualization

No data visualizations (charts, graphs, tables, infographics) were observed in the provided slides. `[Observed]`

If data visualization were needed, the following style would be consistent with the theme:
- Use `accent.1` and `accent.2` as primary series colors `[Inferred – medium confidence]`
- Sharp corners on bars (0px radius) `[Inferred – high confidence]`
- Minimal gridlines in `border` color `[Inferred – medium confidence]`
- Labels in `caption` style `[Inferred – medium confidence]`
- Clean, minimal chart style with no 3D effects `[Inferred – high confidence]`

---

## 6. Slide Template Catalog

### Template: Hero Title (Dual-Tone Split)

- **When to use:** Opening/title slide, section openers, brand statement slides
- **Placement map:**
  - Left accent panel: x: 0%, y: 0%, w: 40%, h: 100% — filled with `bg.tertiary`, contains oversized decorative letterform and tagline
  - Right content panel: x: 40%, y: 0%, w: 60%, h: 100% — filled with `bg.primary`
  - Logo lockup: x: 48%, y: 6%, w: 15%, h: 5% — top-left of right panel `[Observed]`
  - Headline block: x: 48%, y: 30%, w: 44%, h: 25% — large hero heading `[Observed]`
  - URL footer: x: 48%, y: 92%, w: 20%, h: 3% `[Observed]`
- **Text style mapping:** Headline → `heading.hero`, URL → `caption`, tagline on green panel → `body` in near-panel-color
- **Color token mapping:** Left panel bg → `bg.tertiary`, right panel bg → `bg.primary`, heading text → `text.primary`, URL → `text.secondary`
- **Components used:** Logo Lockup, Dual-Tone Split Panel, Footer/URL Bar
- **Variation rules:** Split ratio can adjust (35/65 or 45/55). Accent panel color could swap to `bg.secondary` or gradient. Decorative letterform is optional.

### Template: Table of Contents / Agenda

- **When to use:** Agenda slides, table of contents, chapter overviews, multi-section navigation
- **Placement map:**
  - Background: full slide `bg.primary` (white) `[Observed]`
  - Tagline header: x: 8%, y: 4%, w: 50%, h: 4% — small tagline text `[Observed]`
  - Numbered list region: x: 8%, y: 10%, w: 55%, h: 80% — contains 5–10 numbered items `[Observed]`
  - Gradient overlay card: x: 50%, y: 45%, w: 48%, h: 52% — overlapping branded panel `[Observed]`
- **Text style mapping:** Numbers → `number.hero`, titles → `heading.sub`, descriptions → `body`, tagline → `label`, card heading → `heading.section` in `text.onDark`
- **Color token mapping:** Background → `bg.primary`, text → `text.primary` / `text.secondary`, overlay card → gradient (`bg.gradient.start` → `bg.gradient.end`)
- **Components used:** Numbered Agenda List, Gradient Overlay Card, Logo Lockup (within card)
- **Variation rules:** Number of items can vary (5–12). Overlay card could be omitted for a simpler version. Card position could shift.

### Template: Testimonial / Quote

- **When to use:** Customer quotes, endorsements, team member highlights, editorial pull-quotes
- **Placement map:**
  - Left photo panel: x: 0%, y: 0%, w: 35%, h: 100% — dark background with portrait photo `[Observed]`
  - Slide number strip: x: 92%, y: 0%, w: 8%, h: 8% — dark strip with number `[Observed]`
  - Attribution (name + title): x: 5%, y: 70%, w: 25%, h: 15% — bottom of photo panel `[Observed]`
  - Pull quote: x: 40%, y: 20%, w: 52%, h: 30% — large bold quote text `[Observed]`
  - Body text: x: 40%, y: 55%, w: 52%, h: 25% — extended testimonial text `[Observed]`
- **Text style mapping:** Name → `heading.sub`, title → `caption`, quote → `quote`, body → `body`
- **Color token mapping:** Photo panel bg → `bg.secondary`, quote area bg → `bg.secondary` (slightly lighter tone possible), text → `text.onDark` / `text.onDark.muted`
- **Components used:** Testimonial/Quote Block, Slide Number Indicator
- **Variation rules:** Photo can be left or right. Quote length determines body text presence. Dark background is non-negotiable for this template.

### Template: Section Divider (Full Gradient)

- **When to use:** Section transitions, chapter openers, branded interstitial slides
- **Placement map:**
  - Background: full slide gradient from `bg.gradient.start` to `bg.gradient.end` `[Inferred from overlay card preview]`
  - Logo lockup: x: 8%, y: 8%, w: 15%, h: 5% (light variant) `[Inferred]`
  - Section heading: x: 8%, y: 35%, w: 60%, h: 20% `[Inferred]`
  - Subtitle: x: 8%, y: 58%, w: 50%, h: 10% `[Inferred]`
- **Text style mapping:** Heading → `heading.hero` in `text.onDark`, subtitle → `body` in `text.onDark.muted`
- **Color token mapping:** Background → gradient, all text → `text.onDark`
- **Components used:** Logo Lockup (light), Gradient background
- **Variation rules:** This template is inferred from the gradient card preview on the agenda slide. `[Inferred – high confidence]`

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. **Always use left-aligned headings** — no centered or right-aligned main headlines. `[Observed]`
2. **Maintain at least 8% margin** from all slide edges for content. `[Observed]`
3. **Use the dual-tone split layout** for at least the title/hero slide — this is the signature design element. `[Observed]`
4. **Keep corner radii at 0px** on all rectangles, cards, and containers. `[Observed]`
5. **Use zero-padded numbers** (01, 02, 03…) for sequential/agenda numbering. `[Observed]`
6. **Limit each slide to one primary message** with generous white space. `[Observed]`
7. **Use weight contrast** (Bold vs. Regular vs. Light) as the primary typographic hierarchy tool. `[Observed]`
8. **Apply the navy-blue gradient only on branded panels** or section dividers — not as a general background. `[Observed]`
9. **Keep photography natural** — no heavy filters, duotone treatments, or artistic overlays. `[Observed]`
10. **Place the logo lockup in the top-left** of the content area or branded panel. `[Observed]`
11. **Use `text.secondary` for supporting descriptions** to create clear visual hierarchy below bold titles. `[Observed]`
12. **Maintain consistent vertical rhythm** by using spacing values from the defined scale (multiples of 8px). `[Inferred – high confidence]`

### ❌ DON'T (things that would immediately break the aesthetic)

1. **Never use rounded corners** — no border-radius on any element. `[Observed]`
2. **Never add drop shadows** — the design is completely flat. `[Observed]`
3. **Never center body text** paragraphs — all text is left-aligned. `[Observed]`
4. **Never use more than 2 accent colors** on a single slide (olive-green OR navy-blue, not both simultaneously with equal weight). `[Observed]`
5. **Never use decorative fonts**, script fonts, or serif fonts — stick to the geometric sans-serif. `[Observed]`
6. **Never crowd a slide** — if content doesn't fit with generous spacing, split it across multiple slides. `[Observed]`
7. **Never use gradients on text** — gradients are only for panel/card backgrounds. `[Observed]`
8. **Never place content outside the safe zone** (8% margins) unless it's a full-bleed background panel. `[Observed]`
9. **Never use icon sets or emoji** — the design language is purely typographic. `[Observed]`
10. **Never use borders or outlines** on containers — separation is achieved through color blocking and spacing. `[Observed]`
11. **Never use a busy or textured background** on content areas — backgrounds are solid flat colors or clean gradients. `[Observed]`
12. **Never stack more than 3 levels** of typographic hierarchy on a single slide. `[Observed]`

---

## 8. Reproduction Checklist

- [ ] **Background color:** Set slide background to the correct token (`bg.primary` for content, `bg.secondary` for dark slides, gradient for dividers)
- [ ] **Font family:** Load DM Sans (or approved alternative) from Google Fonts in Regular (400), Medium (500), SemiBold (600), and Bold (700) weights
- [ ] **Heading treatment:** Main heading uses `heading.hero` or `heading.section` — Bold weight, `text.primary` or `text.onDark`, left-aligned
- [ ] **Body text:** Uses `body` style — Regular weight, `text.secondary` on light backgrounds, `text.onDark.muted` on dark
- [ ] **Margins:** Content respects ~8% margin from all edges of the slide (or from the panel edge on split layouts)
- [ ] **Corner radius:** All boxes, cards, and containers have 0px border radius
- [ ] **No shadows:** Zero drop shadows, box shadows, or glows on any element
- [ ] **No borders:** No visible borders on cards or containers; rely on color blocking for separation
- [ ] **Color palette compliance:** Only use colors from the defined token table; no off-palette colors
- [ ] **Gradient application:** Navy-blue gradient used only on branded overlay cards and section divider slides, applied at ~135° angle
- [ ] **Split layout:** Hero/title slides use the dual-tone split with accent color on the left (~40%) and white on the right (~60%)
- [ ] **Logo placement:** Top-left of content area, using dark variant on light backgrounds and light variant on dark/gradient backgrounds
- [ ] **Numbering format:** Section/slide numbers are two-digit zero-padded (01–99) in Light weight
- [ ] **Testimonial format:** Photo on left panel (dark bg), quote + attribution on right — full-bleed dark background
- [ ] **Typography hierarchy:** Maximum 3 levels per slide: heading → subheading/quote → body/caption
- [ ] **White space:** Maintain airy density — at least 30% of slide area should be empty
- [ ] **Alignment:** All text and content blocks are left-aligned within their containing panel
- [ ] **Decorative type:** Oversized letterforms on accent panels only, tone-on-tone coloring, cropped at panel edges
- [ ] **Image treatment:** Photos are rectangular, natural color, no overlays, confined to their panel
- [ ] **Consistency check:** Review all slides together to verify consistent spacing, color usage, and font sizing
- [ ] **Template selection:** Choose the correct layout template based on content type (hero → split, agenda → numbered list, quote → testimonial, transition → gradient divider)

---

## 9. Background/Texture Generation Prompt

Generate a minimal, corporate presentation slide background with a clean dual-tone split layout. The left panel (~40% width) should be a muted, earthy olive-green or sage tone (#7A8B50), featuring a single oversized, partially cropped sans-serif letterform rendered in a slightly lighter or darker shade of the same green, creating a subtle tone-on-tone typographic texture. The right panel (~60% width) should be pure white or very light off-white (#FFFFFF). The division between the two panels should be a perfectly sharp vertical line with no gradient, blur, or transition. The overall aesthetic should be ultra-clean, geometric, and high-end corporate — inspired by premium SaaS startup pitch decks. No patterns, grain, noise, gradients, or organic shapes. The composition should feel minimal, confident, and Swiss-design-influenced with strong geometric precision.

---

## 10. Uncertainties & Open Questions

### What could not be confidently determined:

- **Exact font identification:** The typeface is identified as a geometric sans-serif, mapped to DM Sans as the closest Google Fonts match. However, it could be a proprietary/custom brand font, Inter, Outfit, or another similar geometric sans-serif. `[Inferred – medium-high confidence]`
- **Exact hex color values:** Colors were estimated from visual inspection of screenshots, not sampled from a design file. The olive-green (`#7A8B50`), navy blue (`#1B2A4A`), and dark charcoal (`#191A1F`) could differ by ±10–15 units per channel. `[Inferred – medium confidence]`
- **Animation/transition behavior:** No transitions, animations, or motion design can be inferred from static screenshots. `[Unknown]`
- **Full slide count and additional templates:** Only 3 slides were analyzed. The full deck likely contains additional layout templates (e.g., data/stats slides, team grid, product demo screenshots, comparison tables) that could not be documented. `[Unknown]`
- **Exact spacing values:** Measurements are approximate percentages based on visual estimation. Actual values from the design tool may differ. `[Inferred – medium confidence]`

### Targeted questions to improve reproduction fidelity:

1. **What is the brand font?** Is it a commercially licensed typeface (e.g., Founders Grotesk, Circular, Graphik) or a Google Font? Knowing this would eliminate the biggest source of visual discrepancy.
2. **What tool was this created in?** Google Slides, PowerPoint, Keynote, or Figma? This affects available export options and layout precision.
3. **Are there additional slide templates** beyond the title, agenda, and testimonial layouts shown? Specifically, are there data visualization, team, product screenshot, or comparison slide templates?
4. **What are the exact brand colors?** A brand style guide or hex values from the design file would ensure color accuracy.
5. **Is the oversized letterform on the green panel always an "e"**, or does it change per slide/section (e.g., first letter of the section name)?
