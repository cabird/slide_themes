# Glassmorphic Gradient Overlay — Theme Guide

> **Theme Name:** `glassmorphic-gradient-overlay`

**Source:** [Source]

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Futuristic, Translucent, Refined `[Observed]`
- **Visual Personality:** Modern/techy with a premium luxury underpinning. Glassmorphism is the core design language — frosted translucent panels float over dark and light backgrounds, creating depth and sophistication. `[Observed]`
- **Mood & Emotion:** Cool confidence and technological elegance. The glowing gradient orbs and frosted glass evoke a digital-native, forward-looking energy. `[Observed]`
- **Design References:** Apple's Big Sur glassmorphism (2020+), Microsoft Fluent Design, UI/UX dashboard aesthetics. The gradient orbs recall vaporwave and cosmic design trends. `[Inferred – high confidence]`
- **Information Density:** 2.5/5 — Moderate to sparse. Content is given generous breathing room with heavy reliance on whitespace and single focal points per slide. `[Observed]`
- **Polish Level:** 4.5/5 — Near pixel-perfect. Consistent spacing, refined typography, cohesive color system, and careful treatment of transparency and blur effects. `[Observed]`
- **Shape Language:** Geometric/rounded — Rectangles with generous corner radii dominate. Decorative elements are soft organic spheres and orbs, not hard-edged shapes. `[Observed]`

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#0A1628` | Main dark slide background (deep navy) `[Observed]` |
| `bg.secondary` | `#F5F7FA` | Light/alternate slide background (off-white) `[Observed]` |
| `text.primary` | `#FFFFFF` | Main body text on dark backgrounds `[Observed]` |
| `text.primary.light` | `#1A1A2E` | Main body text on light backgrounds `[Observed]` |
| `text.secondary` | `#94A3B8` | Muted/supporting text, captions, labels `[Inferred – high confidence]` |
| `text.heading` | `#FFFFFF` | Heading text on dark backgrounds (same as text.primary) `[Observed]` |
| `accent.1` | `#00D4FF → #7B2FFF` | Primary accent gradient (cyan-to-violet), used on orbs, KPI numbers, chart segments, highlights `[Observed]` |
| `accent.1.start` | `#00D4FF` | Cyan/teal gradient start point `[Observed]` |
| `accent.1.end` | `#7B2FFF` | Violet/purple gradient end point `[Observed]` |
| `accent.2` | `#FF6B35` | Secondary accent (orange/coral), used sparingly on badges, dots, small highlight shapes `[Observed]` |
| `border` | `rgba(255,255,255,0.25)` | Glass panel borders — thin translucent white `[Observed]` |
| `glass.fill` | `rgba(255,255,255,0.10–0.18)` | Glassmorphic panel background fill `[Inferred – high confidence]` |

**Additional notes:**
- **Gradient usage:** The primary gradient (`accent.1`) runs from cyan (#00D4FF) to violet (#7B2FFF), typically top-left to bottom-right or radial. Applied to: floating decorative orbs, KPI number fills, chart segment colors, and occasional button/badge backgrounds. `[Observed]`
- **Color relationships:** Complementary split — cool blues/cyans against warm violet, with a contrasting warm orange as a tertiary pop. The palette is primarily analogous in the cool range (navy → cyan → violet). `[Inferred – high confidence]`
- **Dark mode vs. light mode:** The deck has a strong dual-mode system. Dark variant uses `bg.primary` (#0A1628) with white text; light variant uses `bg.secondary` (#F5F7FA) with dark text. Both variants use identical accent colors and glassmorphism treatment. `[Observed]`
- **Color shifts between slide types:** Section dividers and hero slides use dark backgrounds; data/stat slides often use light backgrounds; mixed layouts exist. The glassmorphic panels adapt — on dark they are light-frosted, on light they are subtly frosted with lower contrast. `[Observed]`

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Poppins | sans-serif | 700 (Bold) | ~10% of slide height | -0.02em | None | 1.1 |
| `heading.section` | Poppins | sans-serif | 600 (SemiBold) | ~5–6% of slide height | -0.01em | None | 1.2 |
| `heading.sub` | Poppins | sans-serif | 500 (Medium) | ~3–4% of slide height | 0 | None | 1.3 |
| `body` | Poppins | sans-serif | 400 (Regular) | ~2–2.5% of slide height | 0.01em | None | 1.6 |
| `caption` | Poppins | sans-serif | 400 (Regular) | ~1.5% of slide height | 0.02em | None | 1.4 |
| `label` | Poppins | sans-serif | 500 (Medium) | ~1.5% of slide height | 0.05em | Uppercase | 1.2 |
| `number.hero` | Poppins | sans-serif | 700 (Bold) | ~15–18% of slide height | -0.03em | None | 1.0 |

`[Inferred – high confidence for font family. Poppins is the closest Google Fonts match: geometric sans-serif with rounded terminals, clean proportions, wide weight range. The original may use Outfit or Inter but Poppins best matches the observed letterforms.]`

**Additional typography notes:**
- **Gradient fills on text:** Hero KPI numbers (101, 57, 88 visible on light-theme slides) use the `accent.1` cyan-to-violet gradient as a text fill, not a solid color. This is a signature treatment. `[Observed]`
- **Italic emphasis:** Some slides use italic styling for creative/quote text (visible on "Create Anything." slide and quote layouts). Poppins Italic or a similar geometric italic is used. `[Observed]`
- **Emphasis hierarchy:** Bold weight for emphasis, color change (accent.1 gradient or accent.2 orange) for highlights, never underlines. `[Observed]`
- **Number formatting:** Large KPI numbers displayed without commas, pure numeric. Percentage values shown as "60%" — number in hero style, % sign at same or slightly smaller size. `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Rounded (12–20px / ~1.5–2.5% of slide width) | Applied to glass panels, image frames, content cards consistently `[Observed]` |
| Borders | Thin solid (1px) | `rgba(255,255,255,0.25)` on glass panels over dark backgrounds; nearly invisible or `rgba(0,0,0,0.06)` on light backgrounds `[Observed]` |
| Shadows | Soft diffuse, subtle | Minimal drop shadow on glass panels; glow effect around gradient orbs `[Observed]` |
| Transparency/Opacity | Used frequently — core design language | Glass panels: 10–18% white fill with backdrop blur (~20px). Gradient orbs: ~60–80% opacity with blur/glow. `[Observed]` |
| Stroke weight | Thin (1px) | Consistent 1px borders on glassmorphic panels and divider lines `[Observed]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred – high confidence]`
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px `[Inferred – high confidence]`
- **Margin from slide edge:** ~8% horizontal, ~7% vertical `[Observed]`
- **Gap between major content blocks:** ~5–6% of slide height `[Observed]`
- **Gap between related elements:** ~1.5–2% of slide height (e.g., icon to label, heading to subheading) `[Observed]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Flexible grid — single column for hero/title slides, 2-column (50/50 or 60/40) for text+image layouts, 3-column for card grids and team profiles, 4-column for stat tiles. `[Observed]`
- **Column proportions:** Image+text slides use approximately 55/45 or 60/40 splits. Team/profile grids use equal columns (3×1 or 4×1). Stat grids use equal-width columns. `[Observed]`
- **Alignment bias:** Left-aligned for body text and headings in text-heavy layouts; centered for hero titles, stat numbers, and profile cards. `[Observed]`
- **Content safe zone:** ~8% margin from left/right edges, ~7% from top/bottom. Content never bleeds to edges except for full-bleed photography on image-heavy layouts. `[Observed]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Large font size (heading.hero or number.hero), bold weight, high contrast color (white on dark / gradient fill on light). Positioned in the upper 40% of the slide or left half of split layouts. `[Observed]`
- **Supporting information de-emphasis:** Smaller font (body/caption), muted color (text.secondary #94A3B8), positioned below or to the side of the primary message. `[Observed]`
- **Reading flow:** Z-pattern on split layouts (heading top-left → image top-right → body bottom-left → CTA bottom-right). Top-down center for single-column hero/stat slides. `[Inferred – high confidence]`
- **Section/content separation:** Primarily through glassmorphic card panels and generous whitespace. Thin 1px divider lines used sparingly. No heavy color blocks for separation. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** Airy — content is generously spaced with ample breathing room. `[Observed]`
- **White space most generous:** Around hero titles, between major content blocks, and within glassmorphic panels (internal padding is generous, ~4–6% of slide dimensions). `[Observed]`
- **Tight grouping:** Icon+label pairs, stat number+description pairs, profile photo+name combos are grouped tightly to show relationship. `[Observed]`

---

## 4. Component Library

### Glass Panel / Card

- **Purpose:** Primary content container — holds text blocks, profile info, stat data, or image groups on top of the background. `[Observed]`
- **Anatomy:** Rounded rectangle with translucent fill, thin white border, backdrop blur effect. May contain heading, body text, icon, or sub-components.
- **Visual Specs:** Fill: `glass.fill` (rgba(255,255,255,0.10–0.18)). Border: 1px `border` token. Radius: 12–20px. Shadow: subtle diffuse. Backdrop-blur: ~20px. Padding: ~4–5% of slide width. `[Observed]`
- **Typography:** Internal text uses `heading.sub` for titles, `body` for descriptions, `caption` for metadata.
- **Placement Rules:** Can appear anywhere — single large panel behind hero content, multiple cards in a grid, or floating panels in asymmetric layouts.
- **Variations:** (1) Large hero panel — full-width behind title text. (2) Content card — smaller, used in grids. (3) Subtle panel — reduced opacity on light backgrounds. `[Observed]`

### Title Header Block

- **Purpose:** Primary title area for slide headlines. `[Observed]`
- **Anatomy:** Hero heading (1–3 words) + optional subtitle line below.
- **Visual Specs:** No background fill on text itself — text sits on glass panel or directly on bg. Heading in `text.heading` token, subtitle in `text.secondary`.
- **Typography:** Heading uses `heading.hero` (700 weight, large). Subtitle uses `heading.sub` or `body` (400–500 weight).
- **Placement Rules:** Typically upper-left quadrant on split layouts; centered on hero slides. ~8% from left edge, ~12–18% from top. `[Observed]`
- **Variations:** (1) Left-aligned with body text below. (2) Centered over glass panel. (3) Italic/creative styling for editorial slides. `[Observed]`

### Stat Tile / KPI Block

- **Purpose:** Displays large numeric data points with supporting labels. `[Observed]`
- **Anatomy:** Large number (gradient-filled), title/label below, optional descriptive body text.
- **Visual Specs:** Number uses `number.hero` with `accent.1` gradient fill. Label uses `heading.sub` in `text.primary.light` or `text.primary`. Description uses `body` in `text.secondary`. Background: light variant (`bg.secondary`) or within a glass panel.
- **Typography:** Number: `number.hero` (gradient fill). Title: `heading.sub`. Body: `body`.
- **Placement Rules:** Arranged in 2–4 column grids. Each tile occupies ~22–30% width with ~3% gap. Vertically centered in their grid row. `[Observed]`
- **Variations:** (1) Number above text. (2) Number with percentage symbol. (3) With or without glass panel background. `[Observed]`

### Team / Profile Card

- **Purpose:** Displays team member information. `[Observed]`
- **Anatomy:** Circular photo crop + name text + role/title text below.
- **Visual Specs:** Photo: circular crop (~15–20% of slide width diameter), no border or thin white border. Name: `heading.sub` in `text.primary`/`text.primary.light`. Role: `caption` in `text.secondary`. Card background: glassmorphic panel or transparent.
- **Typography:** Name: `heading.sub`. Role: `caption`.
- **Placement Rules:** 3–4 cards in a horizontal row, equally spaced. Centered alignment within each card. `[Observed]`
- **Variations:** (1) On dark background with glass panel. (2) On light background without panel. (3) With extended bio text below role. `[Observed]`

### Image Frame

- **Purpose:** Contains photographs or visual content within the layout. `[Observed]`
- **Anatomy:** Rectangular image with rounded corners, optional glassmorphic overlay card on top.
- **Visual Specs:** Radius: 12–16px. No border typically. May have a subtle shadow. Aspect ratios: 16:9, 4:3, or square depending on layout.
- **Typography:** Optional caption below in `caption` style.
- **Placement Rules:** Right side of 60/40 splits, or in 2–3 column grids. Full-height on some layouts (~70% of slide height). `[Observed]`
- **Variations:** (1) Single large image (right half). (2) Gallery grid (2×2 or 3×1). (3) Image with glassmorphic text overlay panel. `[Observed]`

### Quote Block

- **Purpose:** Displays testimonial or emphasized editorial text. `[Observed]`
- **Anatomy:** Large italic text, optional attribution line below.
- **Visual Specs:** Text in `heading.section` with italic style, `text.primary` color on dark backgrounds. No quotation marks as graphic elements. Background: `bg.primary` with possible glass panel.
- **Typography:** Quote text: `heading.section` italic. Attribution: `caption` or `label`.
- **Placement Rules:** Centered or left-aligned, occupying ~70% of slide width. Vertically centered. `[Observed]`
- **Variations:** Single-line vs. multi-line quote. `[Observed]`

### Section Divider / Agenda Module

- **Purpose:** Navigation and chapter markers within the presentation. `[Observed]`
- **Anatomy:** Numbered items (01, 02, 03…) with section titles, arranged vertically or in a grid.
- **Visual Specs:** Numbers in `heading.sub` with `accent.1` gradient or `text.secondary`. Titles in `heading.sub` weight 500–600. Active/current item may be highlighted with accent color. Background: `bg.primary` with glass panel.
- **Typography:** Numbers: `heading.sub`. Titles: `heading.sub`.
- **Placement Rules:** Full slide, centered, or in a column occupying ~60% width. `[Observed]`
- **Variations:** (1) Vertical list. (2) Grid layout. (3) With connecting lines between items. `[Observed]`

### Tag / Badge

- **Purpose:** Small categorical labels or callout indicators. `[Observed]`
- **Anatomy:** Small rounded rectangle or pill shape with text inside.
- **Visual Specs:** Fill: `accent.2` (#FF6B35) for orange badges, or `accent.1` gradient. Text: `label` style in white. Radius: pill (50%) or rounded (8px). Padding: ~1% horizontal, ~0.5% vertical.
- **Typography:** `label` (uppercase, 500 weight, small size).
- **Placement Rules:** Positioned near slide corners, adjacent to titles, or overlaid on images. "120+ SLIDE" badge visible on cover slide. `[Observed]`
- **Variations:** (1) Circular badge. (2) Pill-shaped. (3) With icon. `[Observed]`

### Footer / Slide Number

- **Purpose:** Consistent slide identification. `[Observed]`
- **Anatomy:** Small slide number, typically in bottom corner.
- **Visual Specs:** Text in `caption` style, `text.secondary` color. No background panel.
- **Typography:** `caption` (regular weight, ~1.2% of slide height).
- **Placement Rules:** Bottom-right corner, ~3% from right edge, ~3% from bottom edge. `[Observed — visible on light-theme slides as "21", "29"]`
- **Variations:** Number only, no additional footer text observed. `[Observed]`

### Decorative Gradient Orb

- **Purpose:** Floating background decoration that adds depth, color vibrancy, and visual interest. `[Observed]`
- **Anatomy:** Soft-edged sphere/circle with gradient fill and blur/glow.
- **Visual Specs:** Fill: `accent.1` gradient (cyan→violet), radial. Size: ~15–40% of slide dimension. Opacity: 60–80%. Blur: heavy (~30–50px Gaussian). No border.
- **Placement Rules:** Positioned behind content, in corners or off-center. Usually 1–3 orbs per dark-background slide. On light backgrounds, orbs are smaller and more subtle. Never overlapping text directly. `[Observed]`
- **Variations:** (1) Large dominant orb. (2) Small accent orb. (3) Pair of orbs at opposite corners. `[Observed]`

### Divider Line

- **Purpose:** Subtle visual separator between content sections. `[Observed]`
- **Anatomy:** Thin horizontal or vertical line.
- **Visual Specs:** 1px stroke, `border` token color (rgba(255,255,255,0.25) on dark, rgba(0,0,0,0.08) on light). No decorative endpoints.
- **Placement Rules:** Between content blocks, inside glass panels to separate header from body. `[Inferred – medium confidence]`
- **Variations:** Horizontal only observed. `[Observed]`

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter:** Professional/corporate — team headshots, workspace environments, lifestyle imagery. Diverse subjects. `[Observed]`
- **Cropping conventions:** Circular crop for team profiles. Rectangular with rounded corners (12–16px radius) for editorial/gallery images. Contained within layout grid — never full bleed without a glass panel overlay. `[Observed]`
- **Color treatment:** Natural, slightly cool color grading. Moderate contrast, not oversaturated. No duotone or heavy filters. `[Observed]`
- **Overlay usage:** Glassmorphic panels overlay portions of images to hold text. No full-image color tints. `[Observed]`
- **When photos are used:** Primarily on split text+image layouts, gallery slides, and profile cards. Hero/title slides may omit photography entirely, relying on gradient orbs instead. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon style:** Thin line (1.5–2px stroke weight), minimalist. `[Observed — visible on content card slides]`
- **Line weight and corner style:** Rounded corners, consistent thin weight. `[Inferred – medium confidence]`
- **Color usage:** Monochrome white on dark backgrounds, or `accent.1` gradient on light backgrounds. `[Observed]`
- **Size relative to text:** ~1.5–2× the body text size, used as visual anchors in content cards. `[Observed]`
- **Illustrations:** None observed — deck relies on photography and abstract decorative elements. `[Observed]`

### 5.3 Decorative Elements

- **Floating gradient orbs:** The signature decorative element — soft-edged circles with cyan-to-violet gradient, heavy blur, 60–80% opacity. 1–3 per slide on dark backgrounds, 0–1 (smaller/subtler) on light backgrounds. `[Observed]`
- **Prominence:** Prominent on dark slides (large, vivid color), subtle on light slides (small, subdued). They create ambient color without competing with content. `[Observed]`
- **Placement:** Corners, behind glass panels, offset from center. Never directly behind critical text. `[Observed]`
- **No other patterns:** No noise/grain textures, no geometric patterns, no dot grids. The glassmorphic blur effect serves as the primary textural element. `[Observed]`

### 5.4 Data Visualization

- **Chart types observed:** Pie/donut charts, bar charts. `[Observed — visible on slide_04]`
- **Series colors:** Mapped to the `accent.1` gradient range — segments use #00D4FF, #4A6FFF, #7B2FFF, and variations. `accent.2` (#FF6B35) may be used for a highlight segment. `[Observed]`
- **Axis/gridline visibility:** Minimal — thin gridlines if present, low opacity. No heavy axis lines. `[Inferred – medium confidence]`
- **Label typography:** `caption` for axis labels, `heading.sub` for chart titles, `number.hero` (smaller variant) for data callouts. `[Inferred – medium confidence]`
- **Bar corner radius:** Rounded top corners (~4–6px), matching the overall rounded shape language. `[Inferred – high confidence]`
- **Legend:** Small, positioned below or to the right of chart. Uses `caption` style with color dot indicators. `[Inferred – medium confidence]`
- **Emphasis:** Highlighted segment may use higher opacity or the contrasting `accent.2` orange. `[Inferred – medium confidence]`

---

## 6. Slide Template Catalog

### Template: Hero Title (Dark)

- **When to use:** Opening slide, section openers, dramatic statements. `[Observed — slide_01 cover, slide_02 grid]`
- **Placement map:**
  - Glass panel: 15% from left, 20% from top, 70% wide, 45% tall
  - Headline block: 18% from left, 25% from top, 64% wide, 15% tall
  - Subtitle block: 18% from left, 42% from top, 50% wide, 8% tall
  - Decorative orbs: 2–3 positioned at (5%, 10%), (70%, 60%), (85%, 30%)
- **Text style mapping:** Headline: `heading.hero`. Subtitle: `heading.sub`.
- **Color token mapping:** Background: `bg.primary`. Text: `text.heading`, `text.secondary`. Accents: `accent.1` gradient orbs.
- **Components used:** Glass Panel, Title Header Block, Decorative Gradient Orb, Badge (optional).
- **Variation rules:** Subtitle is optional. Badge (e.g., "120+ SLIDES") can be added to bottom-left corner. Number of orbs can vary (1–3).

### Template: Text + Image Split

- **When to use:** Content slides pairing narrative text with supporting imagery. `[Observed — slide_02, slide_04 grids]`
- **Placement map:**
  - Text region: 8% from left, 15% from top, 42% wide, 70% tall
  - Heading: 8% from left, 18% from top, 40% wide, 12% tall
  - Body text: 8% from left, 33% from top, 40% wide, 30% tall
  - Image region: 55% from left, 10% from top, 38% wide, 75% tall
- **Text style mapping:** Heading: `heading.section`. Body: `body`. Caption: `caption`.
- **Color token mapping:** Background: `bg.primary` or `bg.secondary`. Text adapts to background. Image frame uses standard rounded corners.
- **Components used:** Title Header Block, Image Frame, Glass Panel (optional overlay on image).
- **Variation rules:** Image can be left or right. Can be 60/40 or 50/50 split. Multiple images in a column or grid on the image side.

### Template: Image Gallery Grid

- **When to use:** Portfolio, case study, visual showcase slides. `[Observed — slide_02 grid]`
- **Placement map:**
  - Grid region: 8% from left, 15% from top, 84% wide, 75% tall
  - Images: 2×2 or 3×1 grid with ~2% gaps between images
  - Optional heading: 8% from left, 5% from top, 50% wide, 8% tall
- **Text style mapping:** Heading: `heading.section`. Captions: `caption`.
- **Color token mapping:** Background: `bg.primary` or `bg.secondary`. Image frames: rounded corners, no border.
- **Components used:** Image Frame, Title Header Block (optional).
- **Variation rules:** 2×2, 3×1, or 2×3 grid arrangements. Can include a text column alongside the grid (becomes a hybrid with Text+Image Split).

### Template: Stats / KPI Grid

- **When to use:** Data highlights, key metrics, performance indicators. `[Observed — slide_03 light-theme grid]`
- **Placement map:**
  - Section heading: 8% from left, 8% from top, 50% wide, 8% tall
  - Stat tiles: arranged in 2–4 column grid, 8% from left, 25% from top, 84% wide, 50% tall
  - Each tile: ~22% wide with ~3% gaps
  - Number: centered in tile, top 40%
  - Label + description: centered in tile, bottom 50%
- **Text style mapping:** Section heading: `heading.section`. Numbers: `number.hero` (gradient fill). Labels: `heading.sub`. Descriptions: `body`.
- **Color token mapping:** Background: `bg.secondary`. Numbers: `accent.1` gradient fill. Labels: `text.primary.light`. Descriptions: `text.secondary`.
- **Components used:** Stat Tile / KPI Block, Title Header Block, Footer / Slide Number.
- **Variation rules:** 2, 3, or 4 columns. With or without description text. Glass panel behind each tile optional.

### Template: Team / Profile Grid

- **When to use:** Team introductions, speaker bios, stakeholder pages. `[Observed — slide_02, slide_04]`
- **Placement map:**
  - Section heading: 8% from left, 8% from top, 50% wide, 8% tall
  - Profile cards: 3–4 column grid, centered, 10% from top of content area
  - Each card: circular photo (~18% of slide width), name centered below, role centered below name
  - Card spacing: ~5% horizontal gaps
- **Text style mapping:** Section heading: `heading.section`. Names: `heading.sub`. Roles: `caption`.
- **Color token mapping:** Dark variant: `bg.primary` background, `text.primary` names, `text.secondary` roles. Light variant: `bg.secondary` background, `text.primary.light` names.
- **Components used:** Team / Profile Card, Glass Panel (optional background card), Title Header Block.
- **Variation rules:** 3 or 4 profiles per row. With or without glass panel. Optional extended bio text.

### Template: Quote / Editorial

- **When to use:** Testimonials, key statements, inspirational quotes. `[Observed — slide_02 grid]`
- **Placement map:**
  - Quote text: centered, 15% from left, 25% from top, 70% wide, 40% tall
  - Attribution: centered, below quote, 30% from left, 70% from top, 40% wide, 5% tall
  - Decorative orbs: 1–2 background orbs
- **Text style mapping:** Quote: `heading.section` italic. Attribution: `caption` or `label`.
- **Color token mapping:** Background: `bg.primary`. Quote text: `text.primary`. Attribution: `text.secondary`.
- **Components used:** Quote Block, Decorative Gradient Orb.
- **Variation rules:** With or without attribution. Can include a small circular photo of the speaker. Quote length: 1–3 lines.

### Template: Data Visualization

- **When to use:** Charts, graphs, data stories. `[Observed — slide_04 grid]`
- **Placement map:**
  - Chart title: 8% from left, 8% from top, 50% wide, 8% tall
  - Chart area: centered, 10% from left, 22% from top, 55% wide, 60% tall
  - Legend / annotations: right side or below chart, 70% from left, 25% from top, 22% wide, 50% tall
  - Data callouts: positioned adjacent to chart segments
- **Text style mapping:** Title: `heading.section`. Axis labels: `caption`. Data labels: `label`. Callout numbers: `number.hero` (smaller).
- **Color token mapping:** Background: `bg.primary` or `bg.secondary`. Chart colors: gradient range from `accent.1.start` through `accent.1.end`. Highlight segment: `accent.2`.
- **Components used:** Glass Panel (optional chart container), Title Header Block, Decorative Gradient Orb (background).
- **Variation rules:** Pie/donut, bar, or other chart types. With or without glass panel container.

### Template: Content Cards Grid

- **When to use:** Feature lists, service offerings, process steps, benefit breakdowns. `[Observed — slide_02 grid]`
- **Placement map:**
  - Section heading: 8% from left, 8% from top, 50% wide, 8% tall
  - Cards: 2–3 column grid, 8% from left, 22% from top, 84% wide, 65% tall
  - Each card: glass panel, icon at top, heading below, description below heading
- **Text style mapping:** Section heading: `heading.section`. Card heading: `heading.sub`. Card body: `body`. Icon: sized ~2× body text.
- **Color token mapping:** Background: `bg.primary`. Card fill: `glass.fill`. Card border: `border`. Card text: `text.primary`, `text.secondary`.
- **Components used:** Glass Panel, Title Header Block, Icon + Label (within cards).
- **Variation rules:** 2, 3, or 4 columns. With or without icons. Optional numbering (01, 02, 03).

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. Always use glassmorphic panels (translucent fill + thin white border + blur) as the primary content container on dark backgrounds. `[Observed]`
2. Always maintain ~8% horizontal margins and ~7% vertical margins from slide edges. `[Observed]`
3. Always use the cyan-to-violet gradient (`#00D4FF` → `#7B2FFF`) as the primary accent — never as a flat solid. `[Observed]`
4. Always round corners on rectangles, image frames, and cards (12–20px radius). `[Observed]`
5. Always include 1–3 floating gradient orbs on dark-background slides for ambient color and depth. `[Observed]`
6. Always use Poppins (or closest geometric sans-serif) across all text — single font family, varied by weight. `[Inferred – high confidence]`
7. Always apply gradient fill to large standalone numbers (KPI/stat displays). `[Observed]`
8. Always use circular crops for profile/team photos. `[Observed]`
9. Always preserve generous whitespace — let content breathe inside and between components. `[Observed]`
10. Always adapt the theme for both dark (#0A1628) and light (#F5F7FA) backgrounds while keeping accent colors consistent. `[Observed]`

### ❌ DON'T (things that would immediately break the aesthetic)

1. Never use sharp/square corners (0px radius) on any content container or image frame. `[Observed]`
2. Never use opaque/solid background fills for content cards — always use glassmorphic transparency. `[Observed]`
3. Never use thick borders (>2px) — all borders are thin (1px) and translucent. `[Observed]`
4. Never use heavy drop shadows — shadows are barely visible, diffuse, and only for subtle depth. `[Observed]`
5. Never use more than one font family — the entire deck is a single sans-serif typeface at different weights. `[Inferred – high confidence]`
6. Never use hard geometric patterns (stripes, chevrons, grids) as backgrounds — only soft gradient orbs. `[Observed]`
7. Never apply solid flat colors for accent highlights — the gradient treatment is essential to the identity. `[Observed]`
8. Never crowd content — this is an airy design system; never exceed information density 3/5. `[Observed]`
9. Never use warm or saturated background colors — backgrounds are either deep cool navy or neutral off-white. `[Observed]`
10. Never omit the glassmorphic treatment from dark-background slides — the frosted glass effect is the core identity. `[Observed]`
11. Never use decorative orbs on the same position as critical text — orbs are background elements only. `[Observed]`

---

## 8. Reproduction Checklist

- [ ] Set slide background to `bg.primary` (#0A1628) for dark slides or `bg.secondary` (#F5F7FA) for light slides `[Observed]`
- [ ] Apply glassmorphic panel (rgba(255,255,255,0.10–0.18) fill, 1px rgba(255,255,255,0.25) border, 12–20px radius, backdrop-blur ~20px) to all content containers on dark backgrounds `[Observed]`
- [ ] Use Poppins font family throughout — Bold (700) for headlines, SemiBold (600) for section headings, Medium (500) for subheadings, Regular (400) for body `[Inferred – high confidence]`
- [ ] Maintain ~8% horizontal and ~7% vertical margins from all slide edges `[Observed]`
- [ ] Apply cyan-to-violet gradient (#00D4FF → #7B2FFF) for accent elements: orbs, KPI numbers, highlights, chart colors `[Observed]`
- [ ] Use orange (#FF6B35) sparingly as secondary accent — only for badges, small dots, or single highlight elements `[Observed]`
- [ ] Add 1–3 floating gradient orbs (blurred, 60–80% opacity) to dark-background slides `[Observed]`
- [ ] Use smaller/subtler orbs (or none) on light-background slides `[Observed]`
- [ ] Round all rectangle corners to 12–20px — no sharp corners anywhere `[Observed]`
- [ ] Apply gradient text fill to hero KPI numbers on light backgrounds `[Observed]`
- [ ] Crop team/profile photos to circular shapes `[Observed]`
- [ ] Keep all borders at 1px, translucent white on dark / near-invisible on light `[Observed]`
- [ ] Use `text.secondary` (#94A3B8) for supporting text, captions, and labels `[Inferred – high confidence]`
- [ ] Maintain airy spacing — generous padding inside glass panels (~4–5% of slide width) `[Observed]`
- [ ] Ensure text is always highly legible against its background — white on dark, near-black on light `[Observed]`
- [ ] Apply rounded corners (4–6px) to bar chart tops when using data visualizations `[Inferred – high confidence]`
- [ ] Map chart series colors to the gradient range (cyan → blue → violet) with optional orange highlight `[Observed]`
- [ ] Use consistent slide number in bottom-right corner (caption style, muted color) `[Observed]`
- [ ] Keep content cards in clean grid arrangements (2, 3, or 4 columns) with even spacing `[Observed]`
- [ ] Verify dark/light variant consistency — accent colors and component shapes must be identical across both modes `[Observed]`

---

## 9. Background/Texture Generation Prompt

Generate a dark deep-navy background (#0A1628) with two to three large, soft-edged, luminous gradient orbs floating in the composition. The orbs should use a radial gradient from bright cyan (#00D4FF) through electric blue (#4A6FFF) to rich violet (#7B2FFF), with roughly 60–80% opacity and heavy Gaussian blur so they feel ethereal and ambient rather than sharp. Position the orbs asymmetrically — one larger orb in the upper-right area and a smaller one in the lower-left, with an optional third medium orb partially visible at the top-left edge. The overall effect should be a futuristic, glassmorphic-ready background that evokes a cosmic, translucent digital environment — clean enough to place frosted-glass UI panels and white text on top without visual interference. No stars, no grid lines, no geometric patterns — only smooth gradient light forms on a deep, quiet navy field.

---

## 10. Uncertainties & Open Questions

- **Font identification:** The exact font could not be definitively identified from preview images at this resolution. Poppins is the best Google Fonts match based on letterform proportions (geometric, rounded terminals, wide x-height), but the original may be **Outfit**, **Inter**, **Plus Jakarta Sans**, or a custom/licensed typeface. `[Confidence: medium]`
- **Exact glass panel blur radius:** Backdrop-blur value estimated at ~20px but could range from 12–30px depending on the rendering engine. PowerPoint's built-in blur may differ from CSS backdrop-blur. `[Confidence: medium]`
- **Glass panel opacity:** Estimated at 10–18% white fill, but the exact value depends on the number of overlapping layers and background content. `[Confidence: medium]`
- **Animation/transitions:** Cannot determine any slide transitions, build animations, or morph effects from static screenshots. The glassmorphism style pairs well with smooth fade/dissolve transitions. `[Confidence: N/A]`
- **Orange accent usage rules:** The exact rules for when `accent.2` (#FF6B35) is used vs. the gradient are unclear — it appears on badges and small decorative elements but the trigger logic is uncertain. `[Confidence: low–medium]`

**Targeted questions for improved fidelity:**

1. What is the exact font family used in the original template?
2. What is the exact backdrop-blur and opacity value for the glassmorphic panels in PowerPoint?
3. Are there specific rules for when to use the dark variant vs. the light variant (e.g., by content type or section)?
4. Does the template include predefined color variants or accent color alternatives beyond cyan-violet and orange?
5. What transitions or animations (if any) are built into the PowerPoint template?
