# Indigo SaaS Editorial — Theme Guide

> **Theme Name:** `indigo-saas-editorial`

> **Source:** [Source]
> **Slide count analyzed:** 9 distinct slide layouts visible in a 3×3 composite grid
> **Aspect ratio:** 16:9 (widescreen) `[Inferred – high confidence]`

---

## 1. Aesthetic DNA (Quick Summary)

- **Three-Word Vibe:** Professional, Techy, Trustworthy
- **Visual Personality:** Corporate-modern SaaS — clean, structured, and authoritative without being stuffy. Blends enterprise credibility with startup energy. Leans editorial with strong typographic hierarchy.
- **Mood & Emotion:** Confidence and competence. The deck feels like a polished pitch from a well-funded AI/SaaS company — it says "we are serious, reliable, and innovative." The generous white space and restrained palette evoke calm authority.
- **Design References:** Echoes the visual language of modern B2B SaaS brands (modern B2B SaaS brands). The vertical accent bar motif and section labeling pattern recall editorial magazine design. The deep indigo/navy hero slides nod to enterprise trust signaling (think modern SaaS pitch decks).
- **Information Density:** 3/5 — Balanced. Slides carry moderate amounts of content but use hierarchy and whitespace to keep things scannable. Some slides (business functions) are denser at 4/5.
- **Polish Level:** 4.5/5 — Highly polished. Consistent spacing, aligned elements, professional typography, and carefully placed screenshots. Minor inconsistencies in screenshot resolutions.
- **Shape Language:** Geometric/sharp — predominantly rectangular containers, sharp-cornered cards, with occasional rounded elements (circular icons, pill-shaped tags, rounded avatar photo).

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage | Confidence |
|---|---|---|---|
| `bg.primary` | `#FFFFFF` | Main slide background for content slides | `[Observed]` |
| `bg.dark` | `#0B0B5E` | Dark hero/accent slide background (deep indigo-navy) | `[Inferred – high]` |
| `bg.composite-gap` | `#4355DB` | The blue visible between slides in the composite (likely the portfolio presentation background, not part of the deck itself) | `[Observed]` |
| `text.primary` | `#0D0D2B` | Main heading text on light backgrounds (near-black navy) | `[Inferred – high]` |
| `text.secondary` | `#4A4A6A` | Body/supporting text on light backgrounds | `[Inferred – medium]` |
| `text.heading` | `#0D0D2B` | Same as text.primary — headings use weight/size for distinction, not color | `[Inferred – high]` |
| `text.onDark` | `#FFFFFF` | All text on dark backgrounds | `[Observed]` |
| `text.muted` | `#8888A0` | Subtle labels, footer text, copyright lines | `[Inferred – medium]` |
| `accent.blue` | `#3B4FE8` | Primary accent — vertical bars, icons, interactive elements, highlights | `[Inferred – high]` |
| `accent.yellow` | `#FFB808` | Secondary accent — dot indicators, small highlight pips on process slides | `[Inferred – medium]` |
| `accent.green` | `#2EC46D` | Tertiary accent — checkmarks, success indicators | `[Inferred – medium]` |
| `accent.red` | `#E83B3B` | Tertiary accent — X/close indicators, negative state markers | `[Inferred – medium]` |
| `tag.blue` | `#3B4FE8` | Tag/chip background for categories (Lead Gen, App Gen) | `[Inferred – medium]` |
| `tag.green` | `#22C55E` | Tag/chip for success categories (Customer Success) | `[Inferred – medium]` |
| `tag.amber` | `#F59E0B` | Tag/chip for warm categories (Sales, Awareness) | `[Inferred – medium]` |
| `tag.purple` | `#8B5CF6` | Tag/chip for nurture categories (Lead Nurture, App Nurture) | `[Inferred – low]` |
| `border` | `#E2E2EA` | Subtle borders on cards, divider lines | `[Inferred – medium]` |
| `icon.bg` | `#3B4FE8` | Circular icon backgrounds (blue filled circles with white icons) | `[Inferred – high]` |

**Additional color notes:**
- **Gradient usage:** No prominent gradients observed on slide content itself. The dark hero slide (`bg.dark`) may use a very subtle radial gradient lightening from center, but this is uncertain. `[Inferred – low]`
- **Color relationships:** The palette is essentially monochromatic (deep navy family) with a single dominant blue accent. Yellow, green, and red are used sparingly as semantic/status colors. This is a **blue-dominant, high-contrast** palette.
- **Dark mode vs. light mode:** The deck is primarily light-mode (white backgrounds). Dark slides appear only for hero/case-study introductions (Slide 1). Approximately 90% of slides use `bg.primary` (white).
- **Color shifts between slide types:** Dark background (`bg.dark`) is reserved exclusively for hero/case-study/title slides. All content slides use white. Section labels and vertical accent bars remain `accent.blue` across all slides.

### 2.2 Typography Styles

| Style Token | Font Family (Google Fonts) | Fallback | Weight | Size (relative) | Letter Spacing | Transform | Line Height |
|---|---|---|---|---|---|---|---|
| `heading.hero` | DM Sans | sans-serif | 700 (Bold) | Very large (~8–10% of slide height) | -0.02em (tight) `[Inferred]` | None | ~1.1 |
| `heading.section` | DM Sans | sans-serif | 700 (Bold) | Large (~5–6% of slide height) | -0.01em | None | ~1.15 |
| `heading.sub` | DM Sans | sans-serif | 600 (SemiBold) | Medium (~3–4%) | Normal | None | ~1.2 |
| `body` | DM Sans | sans-serif | 400 (Regular) | Standard (~2–2.5%) | Normal | None | ~1.5 |
| `caption` | DM Sans | sans-serif | 400 (Regular) | Small (~1.5%) | Normal | None | ~1.4 |
| `label.section` | DM Sans | sans-serif | 500 (Medium) | Small (~1.5–2%) | Normal | None | ~1.3 |
| `label.tag` | DM Sans | sans-serif | 500 (Medium) | Very small (~1.2%) | 0.02em | None | ~1.2 |
| `number.hero` | DM Sans | sans-serif | 700 (Bold) | Very large | -0.02em | None | ~1.0 |
| `footer` | DM Sans | sans-serif | 400 (Regular) | Very small (~1%) | Normal | None | ~1.3 |
| `logo` | DM Sans | sans-serif | 500 (Medium) | Small (~1.5%) | Normal | None | ~1.0 |

**Typography identification notes:**
- The typeface across the deck appears to be a single font family — a geometric/humanist sans-serif with clean, slightly rounded terminals. `[Inferred – medium]`
- **Best Google Fonts match:** **DM Sans** (primary recommendation). The letterforms, x-height, and weight range closely match what's visible. Alternative candidates: **Inter**, **Plus Jakarta Sans**, or **Manrope**. `[Inferred – medium]`
- The font fallback stack should be: `'DM Sans', 'Inter', system-ui, -apple-system, sans-serif`

**Additional typography notes:**
- **Special treatments:** Bold weight is used for key phrases within body text (e.g., "growth and b..." on the Partner in Growth slide). No outlined text, gradient fills, or text shadows observed. `[Observed]`
- **Emphasis method:** Bold weight + sometimes `accent.blue` color for inline emphasis within paragraphs. `[Observed]`
- **Number/data formatting:** No special number formatting observed. Standard decimal notation. `[Observed]`
- **Text case:** Headings use **Title Case** or **Sentence case** — never ALL CAPS. Section labels use **Title Case** (e.g., "Our Forte", "Where We Come In"). `[Observed]`

### 2.3 Object Styling

| Property | Value | Notes |
|---|---|---|
| Corner radius | Slight to rounded (4–12px range) | Cards and screenshots use ~8px radius. Circular elements (icons) are fully round. Tags/chips use pill shape (~16px). `[Inferred – high]` |
| Borders | Thin solid (1px) or none | Most elements have no visible border. Some screenshot containers may have a subtle `border` token border. `[Inferred – medium]` |
| Shadows | Soft diffuse | Product screenshots appear to have a subtle drop shadow (~0 4px 16px rgba(0,0,0,0.08)). Not prominent. `[Inferred – medium]` |
| Transparency/Opacity | Used sparingly | Some overlay effects on dark slide screenshots. Otherwise, elements are opaque. `[Observed]` |
| Stroke weight | Thin to medium (1–2px) | Icon strokes inside blue circles appear to be ~2px white lines. Divider lines are ~1px. `[Inferred – medium]` |

### 2.4 Spacing Scale

- **Base unit:** 8px `[Inferred – high]`
- **Common spacing values:** 8px, 16px, 24px, 32px, 48px, 64px (following an 8px grid)
- **Margin from slide edge (left/right):** ~6–8% of slide width (~70–90px on a 1280px slide) `[Inferred – high]`
- **Margin from slide edge (top):** ~5–6% of slide height `[Inferred – medium]`
- **Margin from slide edge (bottom):** ~6–8% of slide height (footer area) `[Inferred – medium]`
- **Gap between major content blocks:** ~32–48px (3–5% of slide height) `[Inferred – medium]`
- **Gap between related elements (e.g., section label and heading):** ~8–12px `[Inferred – medium]`
- **Gap between heading and body text:** ~16–24px `[Inferred – medium]`
- **Gap between icon and label:** ~12–16px `[Inferred – medium]`

---

## 3. Layout System

### 3.1 Grid & Structure

- **Grid type:** Primarily **single-column** for text-heavy slides, with **asymmetric two-column** (roughly 55/45 or 60/40) for slides that pair text content with screenshots/visuals (Slides 2, 3, 5, 8). `[Observed]`
- **Column proportions:** When two-column, the text column occupies ~55–60% of the width (left), and the visual/screenshot column occupies ~40–45% (right). `[Inferred – high]`
- **Alignment bias:** Strongly **left-aligned**. All headings, body text, and section labels are flush-left. No centered headings observed on content slides. `[Observed]`
- **Content safe zone:** Approximately 7% margin on left/right edges, 5% from top, 8% from bottom (footer zone). This creates a content area of roughly **86% width × 87% height**. `[Inferred – medium]`

### 3.2 Visual Hierarchy

- **Primary message emphasis:** Large, bold heading text (`heading.section` or `heading.hero`) placed in the upper-left quadrant. Size contrast is the primary tool — headings are 3–4× the body text size. `[Observed]`
- **Supporting information de-emphasis:** Body text uses lighter weight (Regular vs. Bold), slightly smaller size, and sometimes the `text.secondary` color token. Placed below the heading with clear vertical separation. `[Observed]`
- **Reading flow pattern:** **F-pattern** — readers scan the section label (top-left), then the heading (below it, left-aligned), then body text, then visual elements on the right. `[Observed]`
- **Section/content block separation:** Primarily through **vertical whitespace**. Some slides use the blue vertical accent bar as a visual anchor. No heavy horizontal divider lines observed between content blocks. `[Observed]`

### 3.3 White Space Philosophy

- **Overall density:** **Balanced** — content occupies roughly 60% of slide area, with 40% breathing room. `[Inferred – high]`
- **Where white space is used most generously:** Below the heading block and above the footer. The bottom third of many content slides is relatively open. `[Observed]`
- **Where elements are grouped tightly:** Section label + heading pairs are tightly grouped (8–12px gap). Feature list items (icon + text pairs) are tightly stacked. Tags/chips in business function slides are clustered together. `[Observed]`

---

## 4. Component Library

### **Vertical Accent Bar + Section Label**

- **Purpose:** Establishes the slide's category/section before the main heading. This is the deck's **most distinctive and recognizable** design element.
- **Anatomy:** A thick vertical bar (3–4px wide, ~20–24px tall) in `accent.blue`, followed by a small text label in `label.section` style.
- **Visual Specs:** Fill: `accent.blue`. No border. No shadow. No radius (sharp rectangle). Approximately 3px wide × 20px tall.
- **Typography:** `label.section` token — DM Sans Medium, small size, dark text.
- **Placement Rules:** Top-left of the slide, within the content safe zone. Positioned ~5% from top, ~7% from left. Always the first visual element read on a content slide.
- **Variations:** None observed — highly consistent across all content slides. `[Observed]`
- **Slides observed on:** Slides 2 ("Our Forte"), 3 ("Our Process"), 5 ("Capabilities"), 6 ("Where We Come In"), 7 ("[Brand]'s Impact On Business Functions"), 8 ("Our Secret Ingredient"), 9 ("[Brand]'s Impact On Business Functions").

### **Title Header Block**

- **Purpose:** The main slide heading that communicates the slide's key message.
- **Anatomy:** Heading text (1–2 lines), sometimes with a bold keyword highlighted. Directly below the section label component.
- **Visual Specs:** No background fill. No border. Pure typographic element.
- **Typography:** `heading.section` token — DM Sans Bold, large size, `text.heading` color. Some headings use `heading.hero` for extra-large slides.
- **Placement Rules:** Left-aligned, ~12px below the section label. Occupies roughly the top 15–25% of the slide.
- **Variations:** Some headings are 1-line (e.g., "External Business"), others span 2 lines (e.g., "Your All-in-One, AI Powered Documentation Partner"). Bold inline words seen in "Your Partner in **Growth**". `[Observed]`

### **Body Text Block**

- **Purpose:** Supporting explanatory text below the heading.
- **Anatomy:** 1–3 lines of descriptive text.
- **Visual Specs:** No background. No border.
- **Typography:** `body` token — DM Sans Regular, standard size, `text.secondary` color.
- **Placement Rules:** Left-aligned, ~16–24px below the heading. Occupies a max width of ~55% of slide width (doesn't stretch full width).
- **Variations:** None significant. `[Observed]`

### **Feature Card / Icon-Text Pair**

- **Purpose:** Highlights a key feature or benefit with an icon.
- **Anatomy:** Blue filled circle icon (left) + feature title (bold) + short description (regular weight), arranged horizontally.
- **Visual Specs:** Icon: circular, ~40px diameter, fill `icon.bg` (`accent.blue`), white line icon inside. Text: left of icon. May have subtle card background or none.
- **Typography:** Title: `heading.sub` or bold `body`. Description: `body` or `caption`.
- **Placement Rules:** Stacked vertically in a list, typically in the left 55% of a two-column layout.
- **Variations:** Seen on Slide 2 with "AI Driven Speed" and "Cost Effective" features. `[Observed]`

### **Screenshot / Product Frame**

- **Purpose:** Showcases the product UI or documentation output.
- **Anatomy:** A browser/app screenshot, sometimes with subtle shadow, sometimes inside a browser chrome frame or desktop monitor mockup.
- **Visual Specs:** Rounded corners (~8px). Subtle drop shadow. May be slightly overlapping or layered for depth on dark slides.
- **Typography:** N/A (image element).
- **Placement Rules:** Right side of two-column layouts, or centered in visual-heavy slides. On dark hero slides, screenshots are layered and rotated slightly for visual interest.
- **Variations:** (1) Flat screenshot with shadow, (2) Browser chrome frame, (3) Desktop monitor mockup (Slide 5), (4) Layered/overlapping screenshots (Slide 1). `[Observed]`

### **Desktop Monitor Mockup**

- **Purpose:** Shows product in context within a realistic monitor frame.
- **Anatomy:** Monitor frame (dark bezel) containing a product screenshot. Monitor sits on a stand.
- **Visual Specs:** Dark gray/black monitor frame. Screenshot fills the screen area.
- **Typography:** N/A.
- **Placement Rules:** Centered or right-aligned on the slide. Takes up ~40–50% of slide width.
- **Variations:** Seen on Slide 5 (Capabilities). `[Observed]`

### **Tag / Chip / Badge**

- **Purpose:** Labels categories, business functions, or features in compact form.
- **Anatomy:** Pill-shaped background with label text inside.
- **Visual Specs:** Pill shape (border-radius ~16px), filled with category-specific color (`tag.blue`, `tag.green`, `tag.amber`, `tag.purple`). Text: white, `label.tag` style.
- **Typography:** `label.tag` — DM Sans Medium, very small, white, slight letter-spacing.
- **Placement Rules:** Used in cascading/funnel diagrams on business function slides. Arranged in a staircase/waterfall pattern.
- **Variations:** Different colors per business function category. `[Observed]`

### **Cascading Funnel / Staircase Diagram**

- **Purpose:** Visualizes business process stages in a descending pattern.
- **Anatomy:** Colored tags arranged in a descending staircase from top-left to bottom-right, with connecting areas/spaces between them.
- **Visual Specs:** Tags use various `tag.*` color tokens. Background may have subtle connecting shapes.
- **Typography:** `label.tag` on each tag.
- **Placement Rules:** Occupies the central-to-lower portion of the slide (~50–60% of slide area). Left-aligned start.
- **Variations:** "External Business" version shows Lead Gen → Lead Nurture → Sales → Customer Success → Awareness → Recall. "Internal Business" version shows App Gen → App Nurture. `[Observed]`

### **AI Avatar Photo**

- **Purpose:** Humanizes the AI avatar feature with a realistic portrait.
- **Anatomy:** Large photorealistic headshot of a person, tightly cropped.
- **Visual Specs:** Appears to be a natural photo (or AI-generated portrait). No heavy filters. Natural skin tones. May have subtle circular or rounded crop.
- **Typography:** N/A.
- **Placement Rules:** Left side of the slide or centered, taking up ~30–40% of slide area. Text wraps around or beside it.
- **Variations:** Seen only on Slide 4. `[Observed]`

### **Language Example Row**

- **Purpose:** Demonstrates multilingual capability with flag + text pairs.
- **Anatomy:** Country flag icon (small, ~20px) + sample text in that language, arranged in horizontal rows.
- **Visual Specs:** Flags appear to be standard emoji or small image flags. Text in `body` or `caption` style.
- **Typography:** `body` or `caption` token.
- **Placement Rules:** Stacked vertically below the heading/body on the AI Avatars slide.
- **Variations:** Shows English, Japanese, French, Chinese examples. `[Observed]`

### **Footer Bar**

- **Purpose:** Consistent brandingat the bottom of every slide.
- **Anatomy:**  logo/wordmark on the left. URL in the center/right. Sometimes includes playback controls or navigation dots.
- **Visual Specs:** Minimal — text only, no background fill or border. Very small text in `footer` style. Color: `text.muted`.
- **Typography:** `footer` token — DM Sans Regular, very small.
- **Placement Rules:** Bottom of every slide, spanning full width within the safe zone. ~3–4% from bottom edge.
- **Variations:** Dark slides show white footer text. Light slides show dark/muted footer text. `[Observed]`

### **Logo Lockup**

- **Purpose:** Brand identification.
- **Anatomy:** <brand> as a text wordmark. May have a small icon/symbol preceding it.
- **Visual Specs:** Text-based logo. On dark backgrounds: white. On light backgrounds: dark navy (`text.primary`).
- **Typography:** `logo` token.
- **Placement Rules:** Top-left corner on dark hero slides. Bottom-left in footer area on content slides.
- **Variations:** White on dark, dark on light. `[Observed]`

### **Divider / Accent Line**

- **Purpose:** Subtle section separation or bottom-of-content-area demarcation.
- **Anatomy:** Thin horizontal line.
- **Visual Specs:** 1px, `border` token color.
- **Typography:** N/A.
- **Placement Rules:** Above the footer area on some slides. `[Inferred – medium]`
- **Variations:** May not appear on all slides. `[Inferred – low]`

### **Small Annotation Label**

- **Purpose:** Labels specific areas or provides contextual notes (e.g., "AREAS OF EXTERNAL BUSINESS FUNCTIONS" below the funnel diagram).
- **Anatomy:** Small uppercase or title-case text.
- **Visual Specs:** `text.muted` color, very small size.
- **Typography:** `caption` token, possibly with slight letter-spacing or uppercase transform.
- **Placement Rules:** Below diagrams or visual elements, left-aligned.
- **Variations:** Seen on Slides 7 and 9. `[Observed]`

---

## 5. Imagery & Graphics Style Guide

### 5.1 Photography

- **Subject matter:** Product UI screenshots dominate. One AI-generated/stock portrait of a woman (Slide 4). No nature, abstract, or workspace photography. `[Observed]`
- **Cropping conventions:** Screenshots are contained within rounded-rectangle frames. The portrait is tightly cropped (head and shoulders). No full-bleed photos observed. `[Observed]`
- **Color treatment:** Natural colors, no desaturation or duotone effects. Screenshots maintain their original UI colors. `[Observed]`
- **Overlay usage:** On the dark hero slide (Slide 1), screenshots may sit atop the dark background with no overlay. No color tint overlays observed. `[Observed]`
- **When photos are used vs. avoided:** Real photography (portrait) used only for the avatar feature slide. Product screenshots used on most content slides. Abstract or decorative photography is completely absent. `[Observed]`

### 5.2 Icons & Illustrations

- **Icon style:** **Thin-to-medium line icons**, white on `accent.blue` filled circles. Clean, geometric style. `[Observed]`
- **Line weight and corner style:** ~2px stroke, appears to use **rounded** line caps and joins. `[Inferred – medium]`
- **Color usage:** Monochrome white icons on solid blue circular backgrounds. Icons are not multi-colored. `[Observed]`
- **Size relative to surrounding text:** Icons in feature cards are roughly 2–2.5× the height of the body text beside them (~36–48px diameter circles). `[Inferred – medium]`
- **Illustration style:** No hand-drawn or isometric illustrations observed. The deck relies on screenshots and iconography rather than custom illustration. `[Observed]`

### 5.3 Decorative Elements

- **Background patterns or textures:** None observed. Backgrounds are solid flat colors (white or deep indigo). `[Observed]`
- **Floating shapes, blobs, lines, dots:** Minimal. Small yellow/amber dots appear on some slides (Slide 3 process steps) as step indicators. Small colored dots/pips may be used as bullet markers. No large decorative shapes or blobs. `[Observed]`
- **How prominent vs. subtle:** Very subtle — decorative elements are nearly invisible and never compete with content. `[Observed]`
- **Where they appear:** Small indicator dots near process steps. Possibly small navigation dots in the footer area of some slides. `[Observed]`

### 5.4 Data Visualization

- **Chart types observed:** No traditional charts (bar, line, pie) observed. Data is presented through the **cascading/staircase funnel diagram** on business function slides (Slides 7 and 9). `[Observed]`
- **Series colors:** Mapped to `tag.*` color tokens — blue, purple/lavender, amber, green for different business function categories. `[Observed]`
- **Axis/gridline visibility:** N/A — no traditional chart axes. `[Observed]`
- **Label typography:** `label.tag` style (small, white on colored pill backgrounds). `[Observed]`
- **Emphasis technique:** Color differentiation between categories. No dimming/highlighting of individual series observed. `[Observed]`

---

## 6. Slide Template Catalog

### Template 1: "Dark Hero / Case Study Intro"

*(Observed on: Slide 1)*

- **When to use:** Opening slide, case study introduction, or brand showcase. Sets the tone with bold visual impact.
- **Placement map:**
  - Logo: 7% from left, 4% from top
  - URL/meta: top-right corner, ~4% from top, right-aligned
  - Headline block: 7% from left, 25% from top, 40% wide, 30% tall
  - Body/subtext: 7% from left, 60% from top, 35% wide
  - Screenshot cluster: 40% from left, 15% from top, 55% wide, 70% tall (layered, overlapping)
  - Footer: 7% from left, 92% from top
- **Text style mapping:** `heading.hero` for main title, `body` for supporting text, `footer` for bottom branding
- **Color token mapping:** Background: `bg.dark`. Text: `text.onDark`. Accent elements in screenshots provide color contrast.
- **Components used:** Logo Lockup, Screenshot (layered variant), Footer Bar
- **Variation rules:** Swap client name/logo. Different screenshots. Keep the large left-aligned heading + overlapping screenshots pattern. Heading can be 2–4 lines.

### Template 2: "Feature Showcase (Two-Column)"

*(Observed on: Slide 2 — "Our Forte")*

- **When to use:** Highlighting key product features or value propositions with supporting visuals.
- **Placement map:**
  - Section label: 7% from left, 5% from top
  - Headline: 7% from left, 8% from top, 50% wide
  - Body text: 7% from left, 20% from top, 45% wide
  - Feature cards (icon + text): 7% from left, 35% from top, 45% wide, stacked vertically
  - Screenshot(s): 55% from left, 10% from top, 40% wide, 75% tall
  - Footer: bottom, full width
- **Text style mapping:** `label.section` for category, `heading.section` for title, `body` for description, `heading.sub` + `caption` for feature cards
- **Color token mapping:** Background: `bg.primary`. Text: `text.heading`, `text.secondary`. Icons: `icon.bg`. Accent bar: `accent.blue`.
- **Components used:** Vertical Accent Bar + Section Label, Title Header Block, Body Text Block, Feature Card (×2–3), Screenshot, Footer Bar
- **Variation rules:** Number of feature cards can vary (2–4). Screenshots can be swapped. Keep text on left, visuals on right.

### Template 3: "Process / Steps"

*(Observed on: Slide 3 — "Our Process" / "The [Brand] Way")*

- **When to use:** Explaining a multi-step process, workflow, or methodology.
- **Placement map:**
  - Section label: 7% from left, 5% from top
  - Headline: 7% from left, 8% from top, 45% wide
  - Body text: 7% from left, 18% from top, 40% wide
  - Process visualization: 7% from left, 35% from top, 86% wide, 50% tall (screenshots with step labels)
  - Step labels: distributed across the process area, each with a small numbered indicator
  - Footer: bottom, full width
- **Text style mapping:** `label.section` for category, `heading.section` for title, `body` for intro text, `heading.sub` for step titles, `caption` for step descriptions
- **Color token mapping:** Background: `bg.primary`. Accent dots: `accent.yellow` or `accent.blue` for step indicators.
- **Components used:** Vertical Accent Bar + Section Label, Title Header Block, Screenshot (multiple, arranged in sequence), Footer Bar
- **Variation rules:** Number of steps can vary (2–5). Screenshot arrangement can be horizontal or staggered. Step indicators maintain consistent styling.

### Template 4: "Avatar / People Feature"

*(Observed on: Slide 4 — "Our AI Avatars Speak Your Users' Native Language")*

- **When to use:** Showcasing human-centric features, team introductions, or AI persona capabilities.
- **Placement map:**
  - Avatar photo: 10% from left, 15% from top, 30% wide, 55% tall
  - Small icons/avatars: above or near the photo, ~15% from left, ~10% from top
  - Headline: 35% from left, 15% from top, 55% wide
  - Body text: 35% from left, 35% from top, 55% wide
  - Language examples: 7% from left, 65% from top, 86% wide (rows of flag + text)
  - Footer: bottom, full width
- **Text style mapping:** `heading.section` for title, `body` for description, `body`/`caption` for language examples
- **Color token mapping:** Background: `bg.primary`. Text: standard dark tokens.
- **Components used:** AI Avatar Photo, Language Example Row, Title Header Block, Footer Bar
- **Variation rules:** Different portrait photo. Different language examples. Keep the large photo + text balance.

### Template 5: "Capabilities / Integration"

*(Observed on: Slide 5 — "Capabilities" / "Your Workflow, Our Expertise: A Perfect Fit")*

- **When to use:** Demonstrating integrations, workflow compatibility, or technical capabilities.
- **Placement map:**
  - Section label: 7% from left, 5% from top
  - Headline: 7% from left, 8% from top, 55% wide
  - Body text: 7% from left, 18% from top, 50% wide
  - Monitor mockup: centered or 30% from left, 35% from top, 50% wide, 55% tall
  - Footer: bottom, full width
- **Text style mapping:** `label.section`, `heading.section`, `body`
- **Color token mapping:** Background: `bg.primary`. Monitor: dark frame.
- **Components used:** Vertical Accent Bar + Section Label, Title Header Block, Body Text Block, Desktop Monitor Mockup, Footer Bar
- **Variation rules:** Monitor content can change. Can substitute with laptop or phone mockup. Keep the "content in device" visual metaphor.

### Template 6: "Value Proposition / Growth"

*(Observed on: Slide 6 — "Where We Come In" / "Your Partner in Growth")*

- **When to use:** Articulating partnership value, growth messaging, or service benefits with text-heavy content.
- **Placement map:**
  - Section label: 7% from left, 5% from top
  - Headline: 7% from left, 8% from top, 55% wide
  - Body text: 7% from left, 18% from top, 50% wide
  - Sub-sections (2 blocks): 55% from left, 30% from top, 38% wide, each ~20% tall, stacked
  - Small decorative elements: bottom-right area
  - Footer: bottom, full width
- **Text style mapping:** `label.section`, `heading.section`, `body`, `heading.sub` for sub-section titles
- **Color token mapping:** Background: `bg.primary`. Bold text: `text.heading`.
- **Components used:** Vertical Accent Bar + Section Label, Title Header Block, Body Text Block (multiple sub-blocks), Footer Bar
- **Variation rules:** Number of sub-sections can vary (2–3). Small decorative screenshots or graphics can be placed in the lower-right.

### Template 7: "Business Impact / Funnel"

*(Observed on: Slides 7 and 9 — "External Business" and "Internal Business")*

- **When to use:** Showing business process flows, funnel visualizations, or impact across business functions.
- **Placement map:**
  - Section label: 7% from left, 5% from top
  - Headline: 7% from left, 10% from top, 40% wide
  - Body text: 7% from left, 18% from top, 45% wide
  - Diagram legend / chips: 55% from right, 8% from top (small tag labels)
  - Cascading funnel: 7% from left, 35% from top, 60% wide, 45% tall
  - Annotation label: 7% from left, 82% from top
  - Summary text: centered, ~85% from top (if present)
  - Footer: bottom, full width
- **Text style mapping:** `label.section`, `heading.section`, `body`, `label.tag` for chips, `caption` for annotations
- **Color token mapping:** Background: `bg.primary`. Tags: `tag.blue`, `tag.green`, `tag.amber`, `tag.purple`.
- **Components used:** Vertical Accent Bar + Section Label, Title Header Block, Body Text Block, Tag/Chip/Badge, Cascading Funnel Diagram, Small Annotation Label, Footer Bar
- **Variation rules:** Number of funnel stages varies by slide (External has 6, Internal has 2). Colors assigned to each function category. Keep the staircase/waterfall visual pattern.

### Template 8: "Differentiator / Secret Sauce"

*(Observed on: Slide 8 — "Our Secret Ingredient" / "What sets us apart")*

- **When to use:** Explaining unique value, competitive differentiators, or "how it works" content.
- **Placement map:**
  - Section label: 7% from left, 5% from top
  - Headline: 7% from left, 10% from top, 50% wide
  - Body text: 7% from left, 20% from top, 50% wide
  - Screenshots / product visuals: 55% from left, 15% from top, 40% wide, 70% tall (may show video player or product UI)
  - Footer: bottom, full width
- **Text style mapping:** `label.section`, `heading.section`, `body`
- **Color token mapping:** Background: `bg.primary`. Standard text tokens.
- **Components used:** Vertical Accent Bar + Section Label, Title Header Block, Body Text Block, Screenshot, Footer Bar
- **Variation rules:** Visuals can include video player screenshots, product comparisons, or side-by-side demonstrations.

---

## 7. Do's and Don'ts (Style Invariants)

### ✅ DO (non-negotiable rules for matching this aesthetic)

1. **Always include the vertical blue accent bar** (`accent.blue`, ~3–4px wide) before every section label. This is the single most recognizable design element in the deck. `[Observed]`
2. **Always left-align all headings and body text.** No centered or right-aligned text blocks on content slides. `[Observed]`
3. **Maintain at least 6–7% margin from left/right slide edges** for all content. `[Observed]`
4. **Use a single font family** (DM Sans or equivalent geometric sans-serif) across the entire deck. Differentiate hierarchy through weight and size only. `[Observed]`
5. **Keep backgrounds either pure white (`#FFFFFF`) or deep indigo-navy (`bg.dark`)** — no in-between tones, no light grays, no off-whites. `[Observed]`
6. **Place the <brand> wordmark in the footer** of every slide, bottom-left. `[Observed]`
7. **Use the section label pattern** ("Our Forte", "Capabilities", etc.) at the top of every content slide to categorize the slide. `[Observed]`
8. **Restrict color accents to blue** (`accent.blue`) as the dominant accent. Use other colors (yellow, green, red) only for semantic meaning (indicators, category tags). `[Observed]`
9. **Show product screenshots in realistic contexts** — with rounded corners, subtle shadows, and optionally in device mockups. Never flat, borderless paste. `[Observed]`
10. **Use Title Case or Sentence case for headings** — never ALL CAPS for main headings. `[Observed]`
11. **Keep body text to 2–3 lines maximum** per text block. Break longer content into sub-sections. `[Observed]`
12. **Reserve dark backgrounds exclusively for hero/title/case-study slides.** All explanatory content slides use white. `[Observed]`

### ❌ DON'T (things that would immediately break the aesthetic)

1. **Never center-align headings or body text** on content slides. The left-aligned editorial style is fundamental. `[Observed]`
2. **Never use gradients on text** or as background fills on content slides. The palette is flat/solid. `[Observed]`
3. **Never use more than 2 font weights on a single slide** (typically Regular + Bold). Avoid Light, Thin, or Black weights. `[Inferred – high]`
4. **Never use rounded corners greater than 12px on rectangular containers.** Only pills (tags/chips) should be fully rounded. `[Inferred – high]`
5. **Never use colored backgrounds** (other than white or the specific `bg.dark` indigo) for content slides. No light blue, light gray, or pastel section backgrounds. `[Observed]`
6. **Never use decorative illustrations, hand-drawn elements, or emoji** as content elements. The deck relies on screenshots and clean iconography. `[Observed]`
7. **Never add drop shadows with high spread or dark opacity.** Shadows should be barely perceptible (~5–10% opacity). `[Inferred – high]`
8. **Never place more than 3 screenshots on a single white-background slide.** Dark hero slides can layer more. `[Observed]`
9. **Never use ALL CAPS for headings.** ALL CAPS is reserved for very small annotation labels, if at all. `[Observed]`
10. **Never omit the section label + vertical bar pattern** from content slides. Every non-hero slide needs this anchor. `[Observed]`
11. **Never use icon styles other than thin/medium line icons** on solid blue circles. No 3D icons, no filled/solid icons, no multi-color icons. `[Observed]`
12. **Never crowd a slide beyond ~65% content density.** Maintain generous whitespace, especially in the bottom third. `[Observed]`

---

## 8. Reproduction Checklist

Use this checklist for **every slide** created in the [Brand] style:

- [ ] **Background** is either pure white (`#FFFFFF`) or deep indigo-navy (`bg.dark` `#0B0B5E`). No other background colors.
- [ ] **Font** is DM Sans (or Inter/Plus Jakarta Sans fallback) — one family only, no mixing.
- [ ] **Section label** with vertical blue accent bar is present in the top-left on all content slides.
- [ ] **Heading** is left-aligned, bold weight, using `heading.section` or `heading.hero` token.
- [ ] **Body text** is left-aligned, regular weight, `text.secondary` color, max 2–3 lines.
- [ ] **Left/right margins** are at least 6–7% of slide width.
- [ ] **Top margin** is ~5% of slide height (enough for section label placement).
- [ ] **Footer** with appears at the bottom-left of every slide.
- [ ] **Accent color** is `accent.blue` (`#3B4FE8`). No unapproved accent colors.
- [ ] **Screenshots** have rounded corners (~8px), subtle shadow, and are placed in the right half of two-column layouts.
- [ ] **Icons** are thin/medium white line icons on solid `accent.blue` circular backgrounds.
- [ ] **Tags/chips** use pill shape with category-appropriate colors from the `tag.*` palette.
- [ ] **Typography hierarchy** uses only size and weight (not color or decoration) to establish levels.
- [ ] **White space** is generous — bottom third of slides should have breathing room unless a diagram fills it.
- [ ] **No centered text blocks** — everything is left-aligned.
- [ ] **No gradients, patterns, or textures** on backgrounds.
- [ ] **Dark slides** are used only for hero/title/case-study introductions, never for regular content.
- [ ] **Reading flow** follows F-pattern: section label → heading → body → visuals (left to right, top to bottom).
- [ ] **Bold inline emphasis** is used sparingly within body text for key terms.
- [ ] **Slide follows one of the 8 template types** defined in Section 6 — do not invent new layouts.
- [ ] **Content density** does not exceed ~65% of slide area.
- [ ] **Overall feeling** is professional, clean, and trustworthy — not playful, not overly designed.

---

## 9. Background/Texture Generation Prompt

> Create a clean, minimal abstract background for a professional SaaS presentation slide. The image should be predominantly **deep indigo-navy** (hex approximately #0B0B5E) with very subtle, barely visible geometric light effects — perhaps a soft radial gradient brightening slightly toward the center, or extremely faint concentric circles radiating outward. The overall feel should be dark, sophisticated, and techy — like the hero slide of a modern AI company's pitch deck. No visible patterns, no noise texture, no stars, no gradients with strong color shifts. The surface should feel like polished dark glass or a deep digital void. Keep it abstract and understated so that white text and layered UI screenshots will pop cleanly against it. Aspect ratio 16:9.

---

## 10. Uncertainties & Open Questions

### Confirmed Uncertainties

- **Font identification:** The typeface could not be definitively identified from the composite image. DM Sans is the closest Google Fonts match based on letterform characteristics, but it could also be **Inter**, **Plus Jakarta Sans**, **Manrope**, or a proprietary/commercial font (e.g., Circular, Graphik, General Sans). `[Inferred – medium confidence]`
- **Exact hex color values:** All color values are estimated from a compressed composite image. The deep blue background could range from `#0B0B5E` to `#1A1A8C`. Accent blue could range from `#3347FF` to `#4361EE`. Screen color sampling was not possible. `[Inferred – medium confidence]`
- **Tag/chip exact colors:** The business function tag colors (blue, green, amber, purple) are best estimates based on small elements at reduced resolution. `[Inferred – low confidence]`
- **Animation and transitions:** No information can be determined about slide transitions, element animations, or build sequences from static images. `[Cannot determine]`
- **Slide count:** Only 9 slides are visible in the composite. The full deck likely contains more slides, and there may be additional template types not represented (e.g., a closing/CTA slide, a team slide, a pricing slide, a table/comparison slide). `[Inferred – high confidence]`
- **Interactive elements:** Some slides appear to have video player controls or navigation elements. Their exact behavior cannot be determined. `[Cannot determine]`
- **Spacing precision:** All spacing values are estimated from a composite image where individual slides are small. Actual pixel values may differ significantly. `[Inferred – medium confidence]`
- **Source of composite:** This analysis is based on a **single composite image from the source** showing multiple slides arranged in a grid. The blue gaps between slides are likely the portfolio presentation background, not part of the deck itself. Individual slide detail is limited by the composite resolution.

### Questions That Would Most Improve Reproduction Fidelity

1. **What is the exact brand font?** If it's a commercial font (e.g., Circular, Graphik, or General Sans), knowing this would dramatically improve text rendering accuracy.
2. **What tool was this created in?** (Google Slides, PowerPoint, Keynote, Figma, Canva) — this would inform export settings, default spacing, and available features.
3. **Can you provide the exact brand color hex codes?** Especially the primary dark blue background and the accent blue — even one confirmed value would anchor all others.
4. **Are there additional slide types not shown?** (closing slide, pricing, team, data tables, agenda/TOC) — knowing the full template catalog would complete the design system.
5. **Is the deck intended for live presentation, async viewing (sent as PDF), or video recording?** This affects information density, animation expectations, and speaker notes requirements.
