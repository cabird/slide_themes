# Bold Pitch Modern -- Theme Guide

> **Theme Name:** `bold-pitch-modern`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Bold, Energetic, Approachable
- **Visual Personality:** High-energy startup pitch deck with a confident, modern SaaS aesthetic. The design is bold and unapologetic -- oversized headlines dominate every slide, while organic rounded shapes and generous border-radii soften the aggressive typography into something approachable. It sits at the intersection of "investor pitch" and "product launch keynote." `[Observed]`
- **Mood & Emotion:** Confidence, momentum, and accessibility. The alternating blue/red/light backgrounds create a rhythmic energy that keeps the viewer moving forward. The rounded shapes and photo-heavy layouts humanize what could otherwise be a purely corporate deck. `[Observed]`
- **Design References:** Echoes modern fintech and crypto startup pitch decks (Y Combinator Demo Day aesthetic). Borrows from contemporary product-launch presentation styles with their oversized type, organic blob masks, and bold color blocking. The red-circle iconography recalls Material Design's FAB buttons. `[Inferred -- high confidence]`
- **Information Density:** 2 out of 5 -- deliberately sparse. Most slides carry a single headline and one supporting element (photo, card, or icon row). The process-steps slide (slide 12) is the densest at roughly 3/5. `[Observed]`
- **Polish Level:** 4 out of 5 -- polished and intentional with consistent spacing, but the organic blob shapes and casual photo crops give it a slightly less rigid feel than pixel-perfect corporate decks. `[Observed]`
- **Shape Language:** Organic-rounded hybrid. Shapes use very large border-radii (100-200px on photos, 40-48px on cards/panels, 24px on table rows), circular crops, and organic blob/amoeba masks for photos. No sharp 0px corners anywhere except the slide edge itself. Circles are used heavily as icon containers and photo masks. `[Observed]`

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage |
|---|---|---|
| `bg.primary` | `#ECEEF1` | Main slide background for light/content slides `[Observed]` |
| `bg.blue` | `#3939F5` | Blue section divider backgrounds, overlay cards, branded panels `[Observed]` |
| `bg.red` | `#EF4444` | Red section divider backgrounds, accent panels `[Observed]` |
| `bg.white` | `#FFFFFF` | Card interiors, table row backgrounds, quote card fills `[Observed]` |
| `text.primary` | `#1A1A2E` | Main headings and body text on light backgrounds `[Observed]` |
| `text.secondary` | `#5A5A6E` | Supporting body text, descriptions on light backgrounds `[Inferred -- high confidence]` |
| `text.onColor` | `#FFFFFF` | All text on blue or red backgrounds `[Observed]` |
| `text.onColor.muted` | `#D0D0FF` | Muted text on blue backgrounds (header bar text) `[Inferred -- medium confidence]` |
| `accent.blue` | `#3939F5` | Blue accent elements -- circle shapes, quote card backgrounds, table headers `[Observed]` |
| `accent.red` | `#EF4444` | Red accent elements -- circle icons, numbered badges, arrow icons, navigation dots `[Observed]` |
| `icon.onRed` | `#FFFFFF` | White icons/glyphs inside red circle badges `[Observed]` |
| `border` | `#D8DAE0` | Subtle borders on white cards against light grey backgrounds `[Inferred -- high confidence]` |

**Additional color notes:**
- **No gradients observed.** All color fills are flat/solid. `[Observed]`
- **Color relationships:** A triadic system -- electric blue, coral-red, and cool grey. Blue and red serve as co-equal accent colors, never appearing together on the same background. Grey is the neutral mediator. `[Observed]`
- **Three background modes:** The deck cycles through three background colors: (1) light grey `bg.primary` for content slides, (2) `bg.blue` for blue section dividers, (3) `bg.red` for red section dividers. This creates a visual rhythm: light-blue-light-red-light-blue-light-red. `[Observed]`
- **Color shift rules:** Blue backgrounds use white text exclusively. Red backgrounds use white text exclusively. Light grey backgrounds use dark text with blue or red accent elements. Blue and red never appear as background colors on the same slide. `[Observed]`

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | Montserrat | sans-serif | 900 (Black) | ~12-15% of slide height | -0.02em `[Inferred]` | None | 1.0 `[Inferred]` |
| `heading.section` | Montserrat | sans-serif | 800 (ExtraBold) | ~8-10% of slide height | -0.01em `[Inferred]` | None | 1.1 `[Inferred]` |
| `heading.sub` | Montserrat | sans-serif | 700 (Bold) | ~4-5% of slide height | 0 | None | 1.2 `[Inferred]` |
| `body` | Montserrat | sans-serif | 400 (Regular) | ~2.5-3% of slide height | 0 | None | 1.5 `[Inferred]` |
| `body.emphasis` | Montserrat | sans-serif | 700 (Bold) | ~2.5-3% of slide height | 0 | None | 1.5 `[Inferred]` |
| `caption` | Montserrat | sans-serif | 400 (Regular) | ~1.5-2% of slide height | 0 | None | 1.4 `[Inferred]` |
| `label` | Montserrat | sans-serif | 600 (SemiBold) | ~1.5% of slide height | 0.12em `[Inferred]` | Uppercase | 1.2 `[Inferred]` |
| `label.header` | Montserrat | sans-serif | 500 (Medium) | ~1.5% of slide height | 0.15em `[Inferred]` | Uppercase | 1.2 `[Inferred]` |
| `number.badge` | Montserrat | sans-serif | 700 (Bold) | ~2% of slide height | 0 | None | 1.0 `[Inferred]` |
| `heading.italic` | Montserrat | sans-serif | 800 Italic (ExtraBold Italic) | ~8-10% of slide height | -0.01em `[Inferred]` | None | 1.1 `[Inferred]` |
| `subtitle.italic` | Montserrat | sans-serif | 400 Italic (Regular Italic) | ~2.5-3% of slide height | 0 | None | 1.5 `[Inferred]` |

**Font identification rationale:** The typeface is a geometric sans-serif with high x-height, even stroke width, and distinctive round terminals. The extreme-bold weights produce the chunky, impactful headlines characteristic of the deck. Montserrat is the closest Google Fonts match, particularly at Black/ExtraBold weights. Alternative candidates: Poppins (slightly more rounded), Nunito Sans (lighter feel). `[Inferred -- high confidence]`

**Additional typography notes:**
- **Italic as a feature:** Several slides use bold-italic for headings (slide 1 subtitle, slide 16 heading "Future Plan"). This is a distinctive stylistic choice -- italics signal vision/aspiration content. `[Observed]`
- **Oversized display type:** Hero headings are extremely large, often 12-15% of slide height, and may wrap to 2 lines. This is the single most distinctive typographic feature of the theme. `[Observed]`
- **Emphasis method:** Weight changes (Regular to Bold) and color shifts (dark to blue/red) convey emphasis. No underlines, highlights, or decorative treatments. `[Observed]`
- **Number formatting in badges:** Numbers inside red circles are zero-padded two-digit strings ("03", "06", "08"). `[Observed]`
- **Table header text:** Bold weight, white color on blue background. `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius (photo selective) | 120-200px | Single-corner rounding on photos that bleed to slide edges. Bottom-left or top-right corner only. `[Observed]` |
| Corner radius (photo all-corners) | 60px | Photos floating on blue backgrounds with all four corners rounded (e.g., slide 13). `[Observed]` |
| Corner radius (cards/panels) | 32-48px | White content cards (32px), blue overlay cards (48px), quote cards (40px), financial cards (40px). `[Observed]` |
| Corner radius (table rows) | 24px | Full-width rounded pill rows in comparison tables. `[Observed]` |
| Corner radius (small elements) | 24px | Blue accent square, pill badges inside financial cards (32px). `[Observed]` |
| Corner radius (photo strips) | 80-100px | Top corners on bottom-bleed photo strips (slides 7, 19). `[Observed]` |
| Borders | None to very subtle | Cards on light grey may have a faint 1px border matching `border` token; most elements borderless `[Observed]` |
| Shadows | None | No drop shadows observed on any elements `[Observed]` |
| Transparency/Opacity | Sparingly | Used on the blue overlay pill card (slide 8) which sits over a photo with slight translucency `[Observed]` |
| Stroke weight | Medium (2px) | Used inside red circle icons for arrow/check/shield glyphs `[Observed]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred -- high confidence]`
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px `[Inferred -- high confidence]`
- **Margin from slide edge:** ~7-8% of slide width on left/right, ~8-10% of slide height on top/bottom `[Observed]`
- **Gap between major content blocks:** ~5-6% of slide height `[Observed]`
- **Gap between related elements** (e.g., heading and body text): ~2-3% of slide height `[Observed]`
- **Gap between icon-list rows:** ~3-4% of slide height `[Observed]`
- **Header bar height:** ~8% of slide height (contains presentation title left and slide number right) `[Observed]`
- **Footer bar height:** ~6% of slide height (contains URL bottom-left) `[Observed]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Asymmetric two-column is the dominant layout pattern. Approximately 70% of slides use a text-left / visual-right split. Single-column centered layouts appear on the table-of-contents, process-steps, comparison-table, and Q&A slides. `[Observed]`
- **Column proportions:** Most commonly 45/55 (text/visual) or 40/60. The product-explanation slide (slide 10) uses a 40/60 photo-left / text-right split. Section dividers with photos vary from 45/55 to 50/50. `[Observed]`
- **Alignment bias:** Left-aligned for headings and body text on light-background slides. Centered headings on full-color section dividers. `[Observed]`
- **Content safe zone:** ~7-8% margin from left/right edges, ~10% from top (below header bar), ~8% from bottom (above footer). The header bar and footer URL occupy dedicated zones outside the main content area. `[Observed]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Massive bold headings (often the largest element on the slide) positioned in the left half or center of the slide. Size is the primary hierarchy tool -- headings are 3-5x larger than body text. `[Observed]`
- **Supporting information de-emphasis:** Smaller body text in Regular weight, positioned below or to the right of the heading. On blue/red backgrounds, supporting text may be slightly translucent white. `[Observed]`
- **Reading flow pattern:** L-pattern on most content slides -- eye enters at the oversized heading (left), scans down to body text, then moves right to the photo/visual. On section dividers, an F-pattern anchors on the centered heading. `[Observed]`
- **Section separation:** Achieved through dramatic background color changes (light grey to blue to red). Within light slides, white rounded cards create contained content blocks against the grey background. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** Airy -- generous white space with typically only 2-3 content elements per slide. `[Observed]`
- **Most generous white space:** The bottom-right and bottom-left quadrants of content slides are often largely empty. Section dividers have enormous breathing room around single-word headings. `[Observed]`
- **Tightest grouping:** Inside process-step grids (slide 12), within card interiors (slide 18), and between icon + label pairs (slide 9). `[Observed]`

---

## 4. Component Library

### Header Bar

- **Purpose:** Persistent navigation/branding strip across all slides
- **Anatomy:** (1) Presentation type label in small caps on the left, (2) two-digit slide number on the right `[Observed]`
- **Visual Specs:** No visible background container -- text floats at the top of the slide. On light backgrounds, text is dark grey/charcoal. On blue/red backgrounds, text is white or translucent white. `[Observed]`
- **Typography:** `label.header` style (uppercase, letter-spaced, medium weight) for the left label. `number.badge` for the slide number. `[Observed]`
- **Placement Rules:** Left label ~7% from left edge, ~4% from top. Slide number ~93% from left, ~4% from top. `[Observed]`
- **Variations:** Color adapts to background (dark text on light bg, white text on colored bg). The left label reads "[PRESENTATION TYPE]" and does not change per slide. `[Observed]`

### Footer URL Bar

- **Purpose:** Website reference at bottom of slide
- **Anatomy:** Single line of URL text `[Observed]`
- **Visual Specs:** No background container. Text uses `label` style in uppercase with generous letter-spacing. `[Observed]`
- **Typography:** `label` token, uppercase `[Observed]`
- **Placement Rules:** Bottom-left corner, ~7% from left edge, ~4% from bottom edge. `[Observed]`
- **Variations:** On light backgrounds, text is dark. On blue/red backgrounds, text is white. `[Observed]`

### Red Circle Badge (Numbered)

- **Purpose:** Numbered indicator for table-of-contents items and step sequences
- **Anatomy:** Solid red circle containing a white two-digit number `[Observed]`
- **Visual Specs:** Fill `accent.red`, diameter 72px (on 1920×1080 canvas). Number centered inside in white `number.badge` at ~30px font size. `[Observed]`
- **Typography:** `number.badge` in white, zero-padded (e.g., "03"), font-weight 700 `[Observed]`
- **Placement Rules:** Inline with list items, left of the label text. ~8px gap between badge edge and text. Label text is 28px font-weight 600, vertically centered with badge. `[Observed]`
- **Variations:** None observed `[Observed]`

### Red Circle Icon

- **Purpose:** Accent icon for feature lists, process steps, and checklists
- **Anatomy:** Solid red circle containing a white line-icon glyph `[Observed]`
- **Visual Specs:** Fill `accent.red`, diameter 72-80px. Icon glyph is white, medium stroke, centered. Font-size ~45% of circle diameter. `[Observed]`
- **Typography:** N/A (icon only)
- **Placement Rules:** Left-aligned in rows for checklists/process lists (72px, slides 12/16), or in a horizontal row for feature icon sets (80px, slide 9). ~16-18px gap to accompanying text. Label text vertically centered with circle. `[Observed]`
- **Variations:** Arrow-right icon (process steps, slide 12), checkmark icon (checklist, slide 16), shield icon (features, slide 9), chevron-right icon (navigation dot, slides 2/4/8 bottom-right). `[Observed]`

### Navigation Dot

- **Purpose:** Small navigation/pagination indicator at bottom-right of slides
- **Anatomy:** Small red or grey circle with a white chevron-right arrow inside `[Observed]`
- **Visual Specs:** Diameter ~3% of slide height. Red fill on light backgrounds, grey/translucent on colored backgrounds. `[Observed]`
- **Placement Rules:** Bottom-right corner, ~93% from left, ~88% from top `[Observed]`
- **Variations:** Red on light backgrounds, grey/muted on blue or red backgrounds `[Observed]`

### White Rounded Card

- **Purpose:** Container for text content on light-background slides
- **Anatomy:** Rectangular container with large rounded corners containing text `[Observed]`
- **Visual Specs:** Fill `bg.white`, corner radius 32-40px, no border or very faint 1px border. No shadow. Internal padding ~48-56px. `[Observed]`
- **Typography:** Varies by context -- `body` for quote cards (slide 6), `body.emphasis` for metric labels (slide 18) `[Observed]`
- **Placement Rules:** Positioned within the content area, typically left-center on light slides `[Observed]`
- **Variations:** Small quote card (slide 6), full-width table row (slide 14), two-column metric cards (slide 18) `[Observed]`

### Blue Overlay Pill Card

- **Purpose:** Floating text callout overlaying a photo or split-screen boundary
- **Anatomy:** Rounded rectangle with blue fill containing centered white text `[Observed]`
- **Visual Specs:** Fill `accent.blue`, corner radius 40-48px (pill-like). May have slight translucency. Padding ~48px internal. `[Observed]`
- **Typography:** `body` or `heading.sub` in `text.onColor` `[Observed]`
- **Placement Rules:** Overlays the boundary between the light-grey upper portion and the photo lower portion, centered horizontally, vertically bridging the two zones. `[Observed]`
- **Variations:** Used on slide 8 (pain-point statement) and slide 15 (testimonial quote). `[Observed]`

### Blue Square Accent

- **Purpose:** Small decorative blue square used as a visual anchor near text or between elements
- **Anatomy:** Solid blue rounded-corner square, ~6-8% of slide width `[Observed]`
- **Visual Specs:** Fill `accent.blue`, corner radius 24px `[Observed]`
- **Placement Rules:** Positioned between the text card and the photo on quote/portrait slides (slide 6). `[Observed]`
- **Variations:** None observed `[Observed]`

### Organic Blob Photo Mask (Double-Pill SVG Mask)

- **Purpose:** Decorative photo-cropping shape that adds energy and softness
- **Anatomy:** Two overlapping pill (stadium) shapes rotated 45°, used as an SVG `<mask>` to clip a photograph into an organic blob `[Observed]`
- **Visual Specs:** The mask is built from two `<rect>` elements with `rx/ry` equal to half the rect height (making the ends perfect semicircles), grouped and rotated 45° around the viewBox center. This creates a distinctive double-lobe blob that looks organic but is mathematically precise. `[Implemented]`
- **Placement Rules:** Right-center of the slide on colored-background dividers. Slide 3: 850×850 element at (880, 80). Slide 11: 950×950 element at (920, 40). `[Implemented]`
- **Variations:** Slide 3 -- photo masked on blue background. Slide 11 -- photo (device on dark background) masked on red background, larger size.

#### SVG Mask Implementation

The blob shape is an SVG mask with a 700×700 viewBox. Two pill-shaped `<rect>` elements (each 350×230 with rx=ry=115) are stacked vertically and rotated 45° around the center:

```html
<svg viewBox="0 0 700 700" style="width:100%;height:100%;">
  <defs>
    <mask id="uniqueMaskId">
      <g transform="rotate(45 350 350)">
        <rect x="175" y="110" width="350" height="230" rx="115" ry="115" fill="white"/>
        <rect x="175" y="300" width="350" height="230" rx="115" ry="115" fill="white"/>
      </g>
    </mask>
  </defs>
  <image
    href="path/to/photo.jpg"
    x="147" y="-9" width="449" height="674"
    preserveAspectRatio="xMidYMid slice"
    mask="url(#uniqueMaskId)"
  />
</svg>
```

**Image placement math:** After the 45° rotation, the leftmost visible point of the mask is at x≈147 and the rightmost at x≈596 (width≈449). The image `x`, `width`, and `height` values are derived from this to fill the mask area while preserving a 2:3 aspect ratio. See the rotation formula derivation below.

**Mask ID uniqueness:** Each slide must use a unique mask `id` (e.g., `s3-pillMask`, `s11-pillMask`) since SVG mask IDs are global in the DOM.

#### Rotation Math

The 2D rotation formula for point (x,y) around center (cx,cy) by angle θ:
```
x' = cx + (x - cx)·cos(θ) - (y - cy)·sin(θ)
```

For θ=45°, cx=cy=350, cos=sin=0.7071:
```
x' = 350 + 0.7071·(x - y)
```

The mask's leftmost point is on the lower pill's left semicircle (center 290,415, radius 115). Minimizing x' means minimizing (x-y), which occurs at parameterized angle α=45°:
```
x_min = 290 - 115·cos(45°) = 208.7
y_max = 415 + 115·sin(45°) = 496.3
x' = 350 + 0.7071·(208.7 - 496.3) ≈ 147
```

Similarly, the rightmost point gives x'≈596. So the mask spans x: 147–596 (width ≈ 449).

#### Image Generation Requirements for Blob-Masked Photos

Photos destined for the blob mask need different framing than rectangular crops:

- **Focal element size:** The subject should occupy only ~25-30% of the frame width (not 40%+). The pill mask reveals an irregular subset of the image, so generous margins prevent the subject from being clipped.
- **Centering:** The focal element must be centered both horizontally and vertically in the generated image.
- **Background fill:** Ensure ample background around the subject. For dark-backdrop images (like device mockups), the dark background should extend well beyond where the subject ends.
- **Aspect ratio:** Portrait orientation (2:3) works best with the default mask geometry.

### Comparison Table

- **Purpose:** Feature comparison across multiple options
- **Anatomy:** (1) Blue header row with white bold column labels, (2) alternating white rows with text data `[Observed]`
- **Visual Specs:** Each row is a single full-width rounded pill (not individual cells). Header row fill `accent.blue` with `text.onColor` bold text. Data rows fill `bg.white` with `text.primary`. All rows have 24px rounded corners. Rows are separated by ~10px vertical gaps (grey background shows through). No visible vertical cell dividers -- column values are positioned using percentage widths inside each pill. Table spans the full safe zone width (1680px on 1920×1080 canvas). Row height 72px. `[Observed]`
- **Typography:** Header: `heading.sub` in white. Body cells: `body` in dark `[Observed]`
- **Placement Rules:** Horizontally centered, ~10% from left, ~10% from right, spanning ~80% width. Header row starts ~12% from top. `[Observed]`
- **Variations:** None observed `[Observed]`

### Two-Column Metric Cards

- **Purpose:** Side-by-side data display for financial or comparative information
- **Anatomy:** Two white rounded cards, each topped by a colored pill-shaped header (red for left, blue for right). Card bodies contain stacked metric rows separated by thin lines. `[Observed]`
- **Visual Specs:** Card fill `bg.white`, corner radius 40px. Header pills inside cards are full-width banners with fill `accent.red` (left) or `accent.blue` (right), corner radius 32px, centered text at 22px font-weight 700, 16px vertical padding. Interior metrics separated by thin grey hairlines. `[Observed]`
- **Typography:** Header pill: 22px uppercase bold in white, centered. Metric labels: `body` (18px), metric values: `body.emphasis` (22px bold). `[Observed]`
- **Placement Rules:** Side by side with ~3% gap, each card ~44% wide, centered on slide. `[Observed]`
- **Variations:** None observed `[Observed]`

### Overlapping Circle Photo Mask

- **Purpose:** Artistic photo treatment using overlapping geometric circles
- **Anatomy:** Two large overlapping circles -- one filled with `accent.blue`, one containing a circular-cropped photograph (dark fill visible). The blue circle partially hides behind the photo circle. `[Observed]`
- **Visual Specs:** Blue circle ~35% of slide width, photo circle ~35% of slide width. Overlap ~15-20% of their diameters. Blue circle positioned left-behind, photo circle positioned right-front. `[Observed]`
- **Placement Rules:** Left side of slide, extending from ~0% to ~40% horizontally, vertically centered. `[Observed]`
- **Variations:** None observed `[Observed]`

### Rounded-Corner Photo Frame

- **Purpose:** Standard photo treatment with selective corner rounding
- **Anatomy:** Rectangular photograph with one or two corners rounded (not all four) `[Observed]`
- **Visual Specs:** Photo crops typically have 1-2 corners with very large radius (120-200px) and the remaining corners at 0px (flush with slide edge). This creates a bold, asymmetric, modern look. The rounding is prominent and unmissable -- not subtle. `[Observed]`
- **Placement Rules:** Varies by slide -- top-left with bottom-right rounded (slide 9), left with top-right rounded (slide 10), right with bottom-left rounded (slides 5, 13, 15). Photos often bleed to one or two slide edges. `[Observed]`
- **Variations:** Bottom-right corner rounded (slide 9 — bleeds left+top); bottom-left corner rounded (slides 5, 13, 15); top-right corner rounded (slides 10, 20); top-left corner rounded (slide 6); top corners rounded (slide 7 bottom photo strip); circular crop (slide 17). The rounded corner is always the one closest to the center of the slide. `[Observed]`
- **Person photos:** When the photo subject is a person, add `object-position:top` to the `<img>` style so the head/face stays visible at the top of the frame rather than being cropped by default centering. `[Implemented]`
- **Edge-bleeding photos and anchors:** When a photo bleeds to slide edges, use SlideKit `anchor` points for clarity. For example, a photo bleeding to the bottom-right uses `anchor: 'br'` at `x: 1920, y: 1080`. A photo bleeding to the top-left uses `anchor: 'tl'` at `x: 0, y: 0`. This makes the bleed intent explicit and simplifies dimension calculations. `[Implemented]`

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Prevalence:** 16 of 20 slides contain photographs. This is an image-heavy deck (80%). `[Observed]`
- **Placement patterns:** Photos appear as right-panel fills (slides 1, 5, 13, 15), left-panel fills (slides 10, 20), bottom strips (slides 7, 19), blob-masked centerpieces (slides 3, 11), overlapping circles (slide 4), circular crops (slide 17), full lower-half backgrounds (slide 8), top-left corner blocks (slide 9 — bleeds left+top edges), and right-panel portraits with space above or below (slides 6, 15). `[Observed]`
- **Scale:** Dominant (>50% of slide area) on section dividers. Significant (25-50%) on content slides. `[Observed]`
- **Subject matter:** Professional business contexts -- people using laptops, people in meetings, people holding products, hands working with devices, professional headshot portraits, office/workspace environments. `[Observed]`
- **Cropping conventions:** Highly varied and distinctive. This deck uses at least 7 different cropping approaches: rectangular with selective corner rounding, organic blob masks, overlapping circles, full circular crop, bottom-edge strip, top-corner block, and full-panel fill. `[Observed]`
- **Focal point alignment:** When a photo contains a person, the focal area (head/face) is typically in the upper portion. Use `object-position:top` on the `<img>` element so the top of the photo aligns with the top of its container, preventing the head from being cropped by `object-fit:cover`'s default centering. This is critical for portrait-oriented photos placed in landscape-oriented or shorter containers. `[Implemented]`
- **Color treatment:** Natural color with slight cool-tone grading. Professional, well-lit photos. Some photos are naturally darker (evening/screen-lit contexts). No artificial color overlays or duotone treatments. `[Observed]`
- **Overlay usage:** No color tints on photos. The blue overlay pill card (slide 8) floats above a photo but does not tint it. `[Observed]`
- **When photos are used:** Nearly every slide includes at least one photo. Only the table-of-contents (slide 2), process-steps grid (slide 12), comparison table (slide 14), future-plan checklist (slide 16), and financial cards (slide 18) are photo-free. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon style:** Solid filled circles with thin white line-icons inside. The red circle is the universal icon container. `[Observed]`
- **Line weight:** Medium (2px) for icon glyphs inside circles `[Observed]`
- **Corner style:** Rounded line caps/joins inside icons `[Observed]`
- **Color usage:** Monochrome -- always white glyph on red circle. No multi-color or gradient icons. `[Observed]`
- **Size relative to text:** Icon circles are approximately 1.5-2x the height of adjacent body text `[Observed]`
- **Icon vocabulary observed:** Right-arrow (process steps), checkmark (checklist items), chevron-right (navigation), shield (security), double-chevron (speed), quotation marks (testimonial -- red circle with white quotes). `[Observed]`
- **No illustrations observed.** `[Observed]`

### 5.3 Decorative Elements

- **Organic blob shapes:** Large amoeba/cloud shapes used as photo masks on colored-background section dividers (slides 3, 11). These are the most distinctive decorative element in the deck. The blob has smooth, flowing curves without sharp inflection points. `[Observed]`
- **Overlapping circles:** Geometric overlapping circles used on slide 4 -- one solid blue, one photo-filled black. `[Observed]`
- **Prominence:** Prominent -- the blob shapes and circle overlaps are major compositional elements, not subtle background textures. `[Observed]`
- **Placement:** Center-right of blue/red section dividers. Left side on the vision-quote slide. `[Observed]`
- **Blue accent square:** Small decorative solid-blue rounded square on slide 6. `[Observed]`
- **No patterns, textures, noise, grain, or geometric backgrounds observed.** All backgrounds are flat solid colors. `[Observed]`

### 5.4 Data Visualization

- **No chart types observed.** Data is presented through comparison tables (slide 14) and metric cards (slide 18) rather than charts or graphs. `[Observed]`
- **The device mockup (slide 11)** shows a phone screen with an app interface -- this is treated as a photograph/screenshot, not as data visualization. `[Observed]`

---

## 6. Slide Template Catalog

---

### Template 1: Hero Title (Slide 1)

- **When to use:** Opening slide of the presentation. Establishes the brand, tagline, and visual tone.
- **Placement map:**
  - Header bar: 0-100% width, 0-8% height (presentation label left, slide number right)
  - Headline block: 7% from left, 35% from top, 40% wide, 20% tall
  - Subtitle (italic): 7% from left, 58% from top, 40% wide, 5% tall
  - Logo icon: centered at ~58% from left, 70% from top, 6% wide (small red rounded-square app icon)
  - Photo region: ~57% from left, 0% from top, ~43% wide, ~91% tall (bleeds top and right edges, space below, bottom-left corner rounded 200px, `object-position:bottom` to show the bottom of the photo and crop from the top)
  - Footer URL: 7% from left, 92% from top
- **Text style mapping:** Headline uses `heading.hero` (white). Subtitle uses `subtitle.italic` (white). Header bar uses `label.header` (white/translucent).
- **Color token mapping:** Background `bg.blue`. All text `text.onColor`.
- **Components used:** Header Bar, Footer URL Bar, Rounded-Corner Photo Frame (bottom-left corner rounded, anchored top-right).
- **Variation rules:** Photo can be swapped for any professional/product image. Headline can be 1-2 words (brand name). Subtitle can be a tagline up to ~8 words. The red icon between text and photo is optional. Use `object-position:bottom` for workspace photos where the people/desks are in the lower portion of the image.

---

### Template 2: Table of Contents / Agenda (Slide 2)

- **When to use:** Overview slide showing presentation structure and section numbers.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - "Content" heading: 7% from left, 60% from top, 35% wide, 25% tall (oversized, bottom-left anchored)
  - Left column of items: 40% from left, 12% from top, 25% wide, items stacked every ~11% of height
  - Right column of items: 70% from left, 12% from top, 25% wide, items stacked every ~11% of height
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** "Content" label uses `heading.hero` (black, massive). Each item has a Red Circle Badge (`number.badge` inside) + item label in `body` (dark).
- **Color token mapping:** Background `bg.primary`. Heading `text.primary`. Badges `accent.red`. Item text `text.primary`.
- **Components used:** Header Bar, Footer URL Bar, Red Circle Badge (Numbered), Navigation Dot.
- **Variation rules:** Can support 8-12 items in 2 columns. Section numbers should match actual slide numbers. The oversized "Content" heading anchors the bottom-left as a decorative element.

---

### Template 3: Section Divider -- Blue with Blob Photo (Slide 3)

- **When to use:** Transition slide marking a new section on a blue background with an organic-shaped photo.
- **Placement map:**
  - Header bar: full width, 0-8% height (white text)
  - Section heading: 7% from left, 30% from top, 35% wide, 15% tall (white, extra-bold)
  - Double-pill blob photo mask: SVG element at x:880, y:80, w:850, h:850 (right-center of slide)
  - Footer URL: 7% from left, 92% from top (white)
  - Navigation dot: 93% from left, 90% from top (muted)
- **Text style mapping:** Heading uses `heading.hero` (white, extra-bold).
- **Color token mapping:** Background `bg.blue`. Text `text.onColor`.
- **Components used:** Header Bar, Footer URL Bar, Double-Pill SVG Blob Mask, Navigation Dot.
- **Variation rules:** Heading can be 1-3 words. Photo subject should relate to the section topic. Photo must be generated with subject at ~25-30% frame width, centered, with generous margins for mask clipping.

**Minimal code example:**
```javascript
el(
  `<svg viewBox="0 0 700 700" style="width:100%;height:100%;">
    <defs>
      <mask id="s3-pillMask">
        <g transform="rotate(45 350 350)">
          <rect x="175" y="110" width="350" height="230" rx="115" ry="115" fill="white"/>
          <rect x="175" y="300" width="350" height="230" rx="115" ry="115" fill="white"/>
        </g>
      </mask>
    </defs>
    <image
      href="${IMAGES.photo}"
      x="147" y="-9" width="449" height="674"
      preserveAspectRatio="xMidYMid slice"
      mask="url(#s3-pillMask)"
    />
  </svg>`,
  { id: 's3-blob-photo', x: 880, y: 80, w: 850, h: 850 },
),
```

---

### Template 4: Vision Quote with Overlapping Circles (Slide 4)

- **When to use:** Vision statement or aspirational quote paired with a distinctive photo treatment.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Overlapping circles: 0% from left, 15% from top, 42% wide, 70% tall (blue circle behind, black photo circle in front, both extending off left edge)
  - Vision text block: 50% from left, 30% from top, 45% wide, 15% tall (regular weight, larger size)
  - Bold emphasis line: 50% from left, 52% from top, 45% wide, 5% tall
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Vision text uses `body` at slightly larger scale (~3.5% of slide height), regular weight. Bold emphasis line uses `body.emphasis`.
- **Color token mapping:** Background `bg.primary`. Circles use `accent.blue` (back circle) and photo fill (front circle). Text `text.primary` / `text.secondary`.
- **Components used:** Header Bar, Footer URL Bar, Overlapping Circle Photo Mask, Navigation Dot.
- **Variation rules:** The vision paragraph can be 2-3 sentences. The bold emphasis line is the key takeaway. Photo should be conceptually related to the vision.

---

### Template 5: Section Divider -- Red with Rounded Photo (Slide 5)

- **When to use:** Section transition on a red background with a large photo occupying the right half.
- **Placement map:**
  - Header bar: 0-45% width left portion, 0-6% height (white text, no slide number visible due to photo overlay)
  - Section heading: 7% from left, 55% from top, 35% wide, 20% tall
  - Photo region: 48% from left, 0% from top, 52% wide, 72% tall (bleeds top and right edges, bottom-left corner has large radius 200px, does NOT bleed to bottom -- red background visible below)
  - Footer URL: 7% from left, 92% from top (white)
  - Navigation dot: 93% from left, 90% from top (muted)
- **Text style mapping:** Heading uses `heading.hero` (white, extra-bold).
- **Color token mapping:** Background `bg.red`. Text `text.onColor`.
- **Components used:** Header Bar, Footer URL Bar, Rounded-Corner Photo Frame (bottom-left corner rounded), Navigation Dot.
- **Variation rules:** Heading can be 1-2 bold words. Photo can be swapped. The distinctive feature is the single very large rounded bottom-left corner (200px) on the photo creating bold asymmetry.

---

### Template 6: Mission Statement with Portrait (Slide 6)

- **When to use:** Company mission, founder quote, or brief manifesto paired with a portrait photo.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - White rounded card: 7% from left, 28% from top, 45% wide, 30% tall (contains centered mission text)
  - Blue accent square: 50% from left, 65% from top, 7% wide, 10% tall
  - Portrait photo: 60% from left, ~10% from top, 40% wide, ~90% tall (bleeds right and bottom edges, space above, top-left corner rounded 160px, `object-position:top` for person photos)
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Mission text inside card uses `body` or slightly larger, centered alignment.
- **Color token mapping:** Background `bg.primary`. Card `bg.white`. Accent square `accent.blue`. Text `text.primary`.
- **Components used:** Header Bar, Footer URL Bar, White Rounded Card, Blue Square Accent, Navigation Dot.
- **Variation rules:** The portrait should be a professional headshot or half-body shot of a person. The mission text should be a single paragraph (2-4 sentences). The blue accent square is a decorative element bridging the card and photo.

---

### Template 7: Section Divider -- Blue with Bottom Photo Strip (Slide 7)

- **When to use:** Section transition with centered heading and a photo anchoring the bottom of the slide.
- **Placement map:**
  - Header bar: full width, 0-8% height (white text)
  - Section heading: centered horizontally, 25% from top, 70% wide, 15% tall (centered text)
  - Photo strip: 7% from left, 60% from top, 86% wide, 40% tall (bleeds bottom edge, top corners rounded 100px)
  - Footer URL: not visible (covered by photo)
- **Text style mapping:** Heading uses `heading.hero` (white, centered).
- **Color token mapping:** Background `bg.blue`. Text `text.onColor`.
- **Components used:** Header Bar, Rounded-Corner Photo Frame (top-left and top-right corners rounded).
- **Variation rules:** Heading can be 2-4 words, centered. The photo strip creates a grounding visual weight at the bottom. Photo top corners are rounded while bottom bleeds off the slide.

---

### Template 8: Pain Point Statement with Photo Overlay (Slide 8)

- **When to use:** Presenting a problem, pain point, or challenge that needs to be communicated with emotional weight.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Light grey zone: 0-100% width, 0-50% height (background `bg.primary`)
  - Dark photo zone: 0-100% width, 45-100% height (photo fills bottom half, bleeds all edges)
  - Blue overlay pill card: 22% from left, 32% from top, 56% wide, 25% tall (straddles the boundary between grey and photo zones)
  - Footer URL: 7% from left, 92% from top (white, over photo)
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Text inside blue pill uses `body` (white, centered). ~2-3 sentences.
- **Color token mapping:** Upper zone `bg.primary`. Lower zone: photo. Pill card `accent.blue` (possibly slight transparency). Text `text.onColor`.
- **Components used:** Header Bar, Footer URL Bar, Blue Overlay Pill Card, Navigation Dot.
- **Variation rules:** The pain point text should be concise (1-3 sentences). The photo should be moody/dark to contrast with the bright blue pill. The pill card MUST overlap both zones -- this is the defining visual gesture.

---

### Template 9: Solution with Icon Features (Slide 9)

- **When to use:** Presenting a solution overview with a supporting photo and 3 key benefit icons.
- **Placement map:**
  - Header bar: 0-45% width, 0-8% height (covered by photo on left side)
  - "The Solution" heading: 7% from left, 45% from top, 35% wide, 25% tall (oversized, bold)
  - Photo region: 0% from left, 0% from top, ~57% wide, 50% tall (bleeds left and top edges, bottom-right corner rounded 120px)
  - Solution description: 50% from left, 42% from top, 45% wide, 10% tall
  - Icon row: 50% from left, 60% from top, 45% wide, 18% tall (3 red circle icons at 80px with labels to the right)
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Heading uses `heading.hero` (black). Description uses `body` (dark). Icon labels use `body` (dark, centered under each icon).
- **Color token mapping:** Background `bg.primary`. Icons `accent.red`. Text `text.primary`.
- **Components used:** Header Bar, Footer URL Bar, Rounded-Corner Photo Frame, Red Circle Icon (3x), Navigation Dot.
- **Variation rules:** Always 3 icons in a horizontal row. Each icon has a single-word label below. The photo should relate to the solution being described.

---

### Template 10: Product Explanation Split (Slide 10)

- **When to use:** Explaining a product, service, or concept with a photo on the left and large heading + description on the right.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Photo region: 0% from left, 12% from top, 40% wide, 88% tall (bleeds left and bottom edges, top-right corner rounded 120px)
  - Heading: 45% from left, 12% from top, 50% wide, 30% tall (oversized, 2 lines)
  - Description: 45% from left, 50% from top, 50% wide, 15% tall
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Heading uses `heading.hero` (black, 2-line wrap). Description uses `body` (dark).
- **Color token mapping:** Background `bg.primary`. Text `text.primary`.
- **Components used:** Header Bar, Rounded-Corner Photo Frame (top-right corner rounded), Navigation Dot.
- **Variation rules:** Heading should be 1-3 words that wrap across 2 lines for maximum visual impact. Description paragraph supports 2-3 sentences. Photo can be any portrait or product image.

---

### Template 11: How It Works -- Red with Device Mockup (Slide 11)

- **When to use:** Demonstrating a product, app, or digital tool with a device mockup on a bold red background.
- **Placement map:**
  - Header bar: full width, 0-8% height (white text)
  - Heading: 7% from left, 33% from top, 35% wide, 25% tall (white, bold italic)
  - Double-pill blob photo mask: SVG element at x:920, y:40, w:950, h:950 (larger than slide 3 variant)
  - Footer URL: 7% from left, 92% from top (white)
  - Navigation dot: 93% from left, 90% from top (muted)
- **Text style mapping:** Heading uses `heading.italic` (white, bold italic).
- **Color token mapping:** Background `bg.red`. Text `text.onColor`.
- **Components used:** Header Bar, Footer URL Bar, Double-Pill SVG Blob Mask (dark variant), Navigation Dot.
- **Variation rules:** The device mockup (phone, tablet, or laptop) is part of the masked photo -- not a separate element. The photo should show the device on a dark background, with the device centered at ~25-30% of frame width and generous dark margins so the blob mask clips cleanly around it.

**Minimal code example:**
```javascript
el(
  `<svg viewBox="0 0 700 700" style="width:100%;height:100%;">
    <defs>
      <mask id="s11-pillMask">
        <g transform="rotate(45 350 350)">
          <rect x="175" y="110" width="350" height="230" rx="115" ry="115" fill="white"/>
          <rect x="175" y="300" width="350" height="230" rx="115" ry="115" fill="white"/>
        </g>
      </mask>
    </defs>
    <image
      href="${IMAGES.devicePhoto}"
      x="147" y="-9" width="449" height="674"
      preserveAspectRatio="xMidYMid slice"
      mask="url(#s11-pillMask)"
    />
  </svg>`,
  { id: 's11-blob-photo', x: 920, y: 40, w: 950, h: 950 },
),
```

---

### Template 12: Process Steps Grid (Slide 12)

- **When to use:** Sequential step-by-step process, workflow, or how-to instructions.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Left column (5 steps): 7% from left, 12% from top, 44% wide, 78% tall (5 rows, each ~14% tall)
  - Right column (5 steps): 52% from left, 12% from top, 44% wide, 78% tall (5 rows, each ~14% tall)
  - Each row: Red Circle Icon (arrow-right, 72px) on the left + description text to its right, vertically centered
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Step descriptions use `body` (dark). No step numbers -- icons serve as bullets.
- **Color token mapping:** Background `bg.primary`. Icons `accent.red`. Text `text.primary`.
- **Components used:** Header Bar, Footer URL Bar, Red Circle Icon (arrow variant, 10x), Navigation Dot.
- **Variation rules:** Supports 6-10 steps in a 2-column grid. Each step is a brief description (1-2 lines). No headings -- the slide relies on the preceding section divider for context. Steps read left-column-top-to-bottom, then right-column-top-to-bottom.

---

### Template 13: Section Divider -- Blue with Rounded Photo Right (Slide 13)

- **When to use:** Section transition similar to Template 3 but with a rectangular rounded-corner photo instead of a blob mask.
- **Placement map:**
  - Header bar: full width, 0-8% height (white text)
  - Section heading: 7% from left, 35% from top, 42% wide, 25% tall (white, multi-line)
  - Photo region: 50% from left, 15% from top, 45% wide, 55% tall (all corners rounded 60px)
  - Footer URL: 7% from left, 92% from top (white)
  - Navigation dot: 93% from left, 90% from top (white)
- **Text style mapping:** Heading uses `heading.hero` (white).
- **Color token mapping:** Background `bg.blue`. Text `text.onColor`.
- **Components used:** Header Bar, Footer URL Bar, Rounded-Corner Photo Frame (all corners rounded), Navigation Dot.
- **Variation rules:** Differs from Template 3 in that the photo uses a clean rounded rectangle instead of an organic blob. Use this variant when the section topic is more analytical/structured. Use Template 3 when the topic is more creative/aspirational.

---

### Template 14: Comparison Table (Slide 14)

- **When to use:** Feature comparison, competitive analysis, or any tabular data with 3-5 columns and 4-6 rows.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Table region: 8% from left, 12% from top, 84% wide, 72% tall
    - Header row: full table width, ~10% of slide height, blue background, rounded corners
    - Data rows: full table width, each ~10% of slide height, white background, rounded corners, ~1% gap between rows
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Header cells: `heading.sub` (white, bold). Data cells: `body` (dark).
- **Color token mapping:** Background `bg.primary`. Header row `accent.blue`. Data rows `bg.white`. Text in header `text.onColor`. Text in data `text.primary`.
- **Components used:** Header Bar, Footer URL Bar, Comparison Table, Navigation Dot.
- **Variation rules:** Supports 3-5 columns. First column is the feature/category label (slightly bolder). Rows use fully rounded corners with small gaps between them -- do NOT use traditional grid lines. The whole table floats on the light grey background.

---

### Template 15: User Feedback / Testimonial (Slide 15)

- **When to use:** Customer testimonial, user review, or endorsement quote.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - "User Feedback" heading: 7% from left, 14% from top, 35% wide, 22% tall (oversized, black)
  - Blue quote card: 7% from left, 55% from top, 50% wide, 25% tall (rounded corners, blue bg)
  - Red quote-mark icon: positioned at the boundary between photo and heading area, ~70% from left, 45% from top
  - Photo region: 65% from left, 0% from top, 35% wide, ~91% tall (bleeds top and right edges, space below, only bottom-left corner rounded 120px — signature single-corner treatment, `object-position:top` for person photos)
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Section heading uses `heading.hero` (black). Quote text inside blue card uses `body.emphasis` (white, italic). Attribution uses `body` (white).
- **Color token mapping:** Background `bg.primary`. Quote card `accent.blue`. Quote icon `accent.red` with white quotation marks. Photo: natural color.
- **Components used:** Header Bar, Footer URL Bar, Blue Overlay Pill Card (used as quote container), Red Circle Icon (quotation marks variant), Rounded-Corner Photo Frame.
- **Variation rules:** Quote text should be 1-2 sentences. Attribution line starts with a dash. The red quote-mark icon floating between the text and photo areas is a distinctive accent.

---

### Template 16: Future Plan / Checklist (Slide 16)

- **When to use:** Roadmap items, future goals, next steps, or any checklist-style content.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Heading: 7% from left, 48% from top, 35% wide, 25% tall (oversized, bold italic, black)
  - Checklist column: 42% from left, 12% from top, 50% wide, 78% tall (5 rows, each ~14% tall)
  - Each row: Red Circle Icon (checkmark, 72px) on the left + description text to its right, vertically centered
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Heading uses `heading.italic` (black, bold italic). Checklist items use `body` (dark).
- **Color token mapping:** Background `bg.primary`. Icons `accent.red`. Text `text.primary`.
- **Components used:** Header Bar, Footer URL Bar, Red Circle Icon (checkmark variant, 5x), Navigation Dot.
- **Variation rules:** Supports 4-6 checklist items. The heading sits in the bottom-left as a decorative anchor while the list items occupy the right side. Each item is 1-2 lines of text.

---

### Template 17: Section Divider -- Red with Circular Photo (Slide 17)

- **When to use:** Section transition on a red background with a circular-cropped photo.
- **Placement map:**
  - Header bar: full width, 0-8% height (white text)
  - Circular photo: 12% from left, 20% from top, 30% wide, 55% tall (perfect circle crop)
  - Section heading: 48% from left, 30% from top, 48% wide, 30% tall (white, multi-line)
  - Footer URL: 7% from left, 92% from top (white)
  - Navigation dot: 93% from left, 90% from top (muted)
- **Text style mapping:** Heading uses `heading.hero` (white).
- **Color token mapping:** Background `bg.red`. Text `text.onColor`.
- **Components used:** Header Bar, Footer URL Bar, Navigation Dot. Photo uses circular crop.
- **Variation rules:** The circular photo is the distinguishing feature vs. other red section dividers. Use when the section involves people/teams. Photo should be a candid business scene or portrait.

---

### Template 18: Two-Column Financial / Data Cards (Slide 18)

- **When to use:** Financial data, investment details, side-by-side metrics, or any two-category data display.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Left card: 7% from left, 12% from top, 42% wide, 72% tall
    - Red header pill: full card width, centered text 22px bold uppercase, border-radius 32px, 16px vertical padding
    - Metric rows: 3 stacked items with thin divider lines
  - Right card: 52% from left, 12% from top, 42% wide, 72% tall
    - Blue header pill: full card width, centered text 22px bold uppercase, border-radius 32px, 16px vertical padding
    - Metric rows: 3 stacked items with thin divider lines
  - Footer URL: 7% from left, 92% from top
  - Navigation dot: 93% from left, 90% from top
- **Text style mapping:** Header pills: `heading.sub` (white). Metric labels: `body` (dark). Metric values: `body.emphasis` (dark, bold).
- **Color token mapping:** Background `bg.primary`. Left header pill `accent.red`. Right header pill `accent.blue`. Card bodies `bg.white`.
- **Components used:** Header Bar, Footer URL Bar, Two-Column Metric Cards, Navigation Dot.
- **Variation rules:** Each card supports 2-4 metric rows. Metric values can be dollar amounts, percentages, or short text. Thin grey hairlines separate rows within each card. The red/blue header pills create the visual connection to the theme's dual-accent system.

---

### Template 19: Q&A / Discussion (Slide 19)

- **When to use:** Question-and-answer session, discussion break, or audience interaction prompt.
- **Placement map:**
  - Header bar: full width, 0-8% height
  - Heading: centered horizontally, 20% from top, 70% wide, 15% tall (centered, bold, black)
  - Photo strip: 7% from left, 58% from top, 86% wide, 42% tall (bleeds bottom edge, top corners rounded 80px)
  - Footer URL: not visible (covered by photo)
- **Text style mapping:** Heading uses `heading.hero` (black, centered).
- **Color token mapping:** Background `bg.primary`. Text `text.primary`.
- **Components used:** Header Bar, Rounded-Corner Photo Frame (bottom-bleed strip with rounded top corners).
- **Variation rules:** Heading should be a brief question or prompt ("Any Questions?", "Let's Discuss", etc.). The photo strip shows people in conversation/collaboration. Keep the upper portion spacious -- the emptiness emphasizes the invitation to participate.

---

### Template 20: Thank You / Closing (Slide 20)

- **When to use:** Final slide of the presentation. Expresses gratitude and closes with a personal touch.
- **Placement map:**
  - Header bar: full width, 0-8% height (white text)
  - Portrait photo: 0% from left, 15% from top, 38% wide, 85% tall (bleeds left and bottom edges, top-right corner rounded 120px)
  - Heading: 45% from left, 30% from top, 50% wide, 20% tall (white, bold)
  - Navigation dot: 93% from left, 90% from top (muted)
- **Text style mapping:** Heading uses `heading.hero` (white).
- **Color token mapping:** Background `bg.blue`. Text `text.onColor`.
- **Components used:** Header Bar, Rounded-Corner Photo Frame (top-right corner rounded), Navigation Dot.
- **Variation rules:** The portrait photo should be of the presenter or team leader. "Thank You!" is the standard closing text but can be customized. Contact details (email, social handles) could be added below the heading as `body` text in white.

---

## 7. Do's and Don'ts (Style Invariants)

### DO (non-negotiable rules for matching this aesthetic)

1. **Always use oversized, extra-bold headlines.** Headings should be the single most dominant element on every slide -- aim for 10-15% of slide height. `[Observed]`
2. **Always include the header bar** with "[PRESENTATION TYPE]" in small caps on the left and the two-digit slide number on the right. `[Observed]`
3. **Always include the footer URL** in small caps at the bottom-left of every slide (except where covered by photos). `[Observed]`
4. **Always use generous rounded corners** -- 120-200px on photo selective corners, 60px on all-corner photos, 32-48px on cards/panels, 80-100px on photo strip top corners, 24px on table rows. These radii are bold and prominent, not subtle. `[Observed]`
5. **Always alternate background colors** across the deck: light grey for content, blue for one set of section dividers, red for another set. Never use the same background color for more than 3 consecutive slides. `[Observed]`
6. **Always use red circle icons** as the universal bullet/indicator element. Arrows for process steps, checkmarks for checklists, and thematic icons for features. `[Observed]`
7. **Always use photos with creative cropping** -- selective corner rounding, blob masks, circular crops, or overlapping circles. Avoid plain rectangular photos with uniform corners. `[Observed]`
8. **Always maintain at least 7% margin** from slide edges for text content. `[Observed]`
9. **Always limit each slide to one primary message.** Maximum 2-3 content elements per slide (heading + visual + supporting text). `[Observed]`
10. **Always use flat, solid color fills** for backgrounds and accent elements. No gradients. `[Observed]`
11. **Always use Montserrat (or equivalent geometric sans-serif)** for all text. This is a single-font-family system. `[Inferred -- high confidence]`
12. **Always use italic style for aspirational/visionary headings** (subtitle on slide 1, "Future Plan" on slide 16). `[Observed]`

### DON'T (things that would immediately break the aesthetic)

1. **Never use sharp/square corners** (0px radius) on any card, container, or photo mask. Everything must be rounded. `[Observed]`
2. **Never use drop shadows** on any element. The design is completely flat. `[Observed]`
3. **Never use gradients** for backgrounds or fills. All colors are solid flat fills. `[Observed]`
4. **Never use blue and red as accents on the same slide.** These colors alternate between slides, never coexist (exception: the financial cards on slide 18 where each card has its own header color). `[Observed]`
5. **Never use small, timid headlines.** If a heading doesn't feel oversized, it's too small. `[Observed]`
6. **Never center body text** on content slides. Body text is left-aligned. (Centered text is only used inside overlay cards and on section dividers.) `[Observed]`
7. **Never use traditional table grid lines.** Tables use separated rounded rows with gaps between them, not bordered cells. `[Observed]`
8. **Never use text-only slides without any visual element.** Even the most text-heavy slides (12, 14, 16) include red circle icons as visual anchors. `[Observed]`
9. **Never use thin or light-weight fonts for headings.** Headings must be ExtraBold (800) or Black (900) weight. `[Observed]`
10. **Never use more than one photo cropping style per slide.** Each slide commits to one masking approach (blob OR circle OR rounded-corner rectangle). `[Observed]`
11. **Never omit the header bar** -- it is the consistent thread that ties all slides together regardless of background color. `[Observed]`
12. **Never use decorative patterns, textures, noise, or grain** in backgrounds. Backgrounds are always clean flat colors. `[Observed]`

---

## 8. Reproduction Checklist

- [ ] **Background color selected:** Is the slide using `bg.primary` (light grey), `bg.blue`, or `bg.red`? Does it maintain the alternating rhythm with adjacent slides?
- [ ] **Header bar present:** Does the slide have "[PRESENTATION TYPE]" top-left and a two-digit slide number top-right, with color appropriate to the background?
- [ ] **Footer URL present:** Is "WWW.[WEBSITE].COM" displayed bottom-left in small caps (unless covered by a photo bleed)?
- [ ] **Headline is oversized:** Is the main heading at least 10% of slide height and using ExtraBold/Black weight?
- [ ] **Single-font system:** Is every text element using Montserrat (or the chosen geometric sans-serif)? No secondary fonts?
- [ ] **Rounded corners applied:** Do photo selective corners use 120-200px? All-corner photos 60px? Cards/panels 32-48px? Table rows 24px? Photo strips 80-100px? Are the curves bold and prominent?
- [ ] **Photo creatively cropped:** If the slide has a photo, is it using one of the theme's cropping approaches (selective corner rounding, blob mask, circular crop, overlapping circles, bottom strip)?
- [ ] **Red circle icons used correctly:** Are bullet/step/checklist elements using red filled circles with white line-icon glyphs (not plain bullet points)?
- [ ] **Color discipline maintained:** Blue and red are not both used as accent colors on the same slide (except the dual-card financial template)?
- [ ] **Text on colored backgrounds is white:** All text on `bg.blue` or `bg.red` backgrounds uses `text.onColor` (white)?
- [ ] **Information density is low:** Does the slide have a maximum of 2-3 primary content elements? Is there ample breathing room?
- [ ] **No shadows or gradients:** Are all fills flat/solid with no box-shadow or gradient effects?
- [ ] **Navigation dot present:** Is the small red/grey navigation circle with chevron in the bottom-right corner?
- [ ] **Correct template selected:** Does the layout match one of the 20 cataloged templates for the content type?
- [ ] **Body text alignment:** Is body text left-aligned on content slides? Centered only inside overlay cards or on section dividers?
- [ ] **Italic used for aspiration:** Are italic headings reserved for visionary/future-facing content only?
- [ ] **Photo subjects are professional:** Do photos show people in business contexts, workspaces, or professional settings?
- [ ] **Spacing margins respected:** Is text content at least 7% from slide edges? Is the header bar in the top 8% zone?
- [ ] **Brand names replaced:** Are all instances of brand, company, or product names replaced with [Brand], [Company], or [Product] placeholders?

---

## 9. Background/Texture Generation Prompt

Create a minimal, clean solid-color background at 1366x768 pixels. The background should be a single flat fill in cool light grey (#ECEEF1) with absolutely no texture, grain, noise, patterns, or gradients. The surface should feel like smooth matte paper -- completely uniform and pristine. Alternatively, generate the same flat fill in electric blue (#3939F5) or coral red (#EF4444) for section divider slides. The key quality is absolute flatness and cleanliness -- these backgrounds exist to let bold typography and creative photo crops be the stars. No decorative elements, no vignettes, no subtle gradients.

---

## 10. Uncertainties & Open Questions

- **Exact font identification:** The typeface is confidently a geometric sans-serif in the Montserrat/Poppins family, but without access to source files, the exact font cannot be confirmed. Montserrat at Black weight is the best match for the extreme-bold headlines. `[Inferred -- high confidence]`
- **Exact hex values:** Color values for `bg.blue` and `bg.red` are sampled visually from compressed JPEG images. The blue could range from `#3939F5` to `#4040FF`; the red could range from `#EF4444` to `#F04545`. `[Inferred -- high confidence]`
- **Blob shape generation:** ~~Resolved.~~ The blob shapes on slides 3 and 11 are implemented as SVG double-pill masks (two stadium-shaped rects rotated 45°). See the "Double-Pill SVG Mask" component documentation above for full implementation details and math. `[Implemented]`
- **Animation/transitions:** Static images cannot reveal slide transitions. Given the bold, energetic style, the deck likely uses quick/punchy transitions (cut, push, or fade) rather than slow dissolves. `[Cannot determine]`
- **Navigation dot behavior:** The small circle with chevron at the bottom-right appears on most slides. It may be an interactive hyperlink element in the source tool or purely decorative. `[Cannot determine]`

**Questions that would improve reproduction fidelity:**
1. What is the exact brand font? Is it Montserrat, or a custom/premium typeface like Gilroy, Satoshi, or General Sans?
2. Was this created in Google Slides, PowerPoint, Keynote, or Figma? (This affects how blob shapes and selective corner rounding are implemented.)
3. ~~Are the blob shapes hand-drawn SVG paths, or generated from a specific shape library?~~ Resolved: double-pill SVG mask.
4. Is the navigation dot in the bottom-right interactive (clickable link) or purely decorative?
5. What are the exact RGB/hex values for the blue and red -- can you provide them from the source file's color picker?
