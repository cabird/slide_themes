# Slide Themes Catalog

This repository contains presentation themes built on **SlideKit**, a declarative slide framework that renders via Reveal.js. Each theme defines design tokens (colors, typography), layout helpers, and a set of example slides demonstrating the theme's capabilities.

## Repository Structure

```
slide_themes/
├── THEMES.md                    # This file - theme catalog
├── slidekit.bundle.min.js       # Shared SlideKit runtime (single copy)
├── build_bundle.py              # Builds self-contained HTML bundles
├── cookbooks/                   # Layout reference material (not themes)
│   ├── data-layout-cookbook/
│   └── slide-layout-cookbook/
│
└── <theme-name>/                # Each theme follows this structure:
    ├── theme.md                 # Theme description (design tokens, layouts, style guide)
    ├── slides.js                # Source: example deck showcasing the theme
    ├── slide_previews/          # JPEG screenshots named by template type
    │   ├── hero-title.jpg
    │   ├── stats-dashboard.jpg
    │   └── ...
    └── demo/                    # Built/presentable assets
        ├── index.html           # Presentation viewer (needs local server)
        ├── slides_bundle.js     # Compiled bundle (SlideKit + slides, self-contained)
        ├── presentation_bundle.html  # Single-file bundle (works via file://, no server needed)
        ├── presentation.pdf     # PDF export of the demo deck
        └── images/              # Images used by the demo slides (if any)
```

### Key files explained

- **`theme.md`** - The complete style specification: aesthetic DNA, color palette, typography, spacing, component library, slide template catalog, and do's/don'ts. This is what a model should read to create new presentations in this theme.
- **`slides.js`** - A working example deck. Imports SlideKit functions (`init`, `render`, `el`, `safeRect`, etc.) and defines slides as objects with positioned elements. This is the editable source.
- **`demo/slides_bundle.js`** - The compiled version with SlideKit runtime baked in. This is what `demo/index.html` loads. You don't edit this directly.
- **`demo/presentation_bundle.html`** - A fully self-contained single HTML file with all JS and images inlined. Opens directly via `file://` with no server needed. Built by running `python3 build_bundle.py <theme>/demo`.
- **`slide_previews/`** - JPEG screenshots of each slide, named by template type (e.g., `hero-title.jpg`, `stats-dashboard.jpg`). Quick visual reference without opening the presentation.

### How to view a theme

**Option A** - Open the self-contained bundle directly (no server):
```
open <theme-name>/demo/presentation_bundle.html
```

**Option B** - Serve the repo and use the interactive viewer:
```bash
python3 -m http.server 8787
# Then open http://localhost:8787/<theme-name>/demo/index.html
```

### How to build the self-contained bundle

```bash
python3 build_bundle.py <theme-name>/demo
# Outputs: <theme-name>/demo/presentation_bundle.html
```

---

## Themes

### 1920s Inventor Workshop

**Vibe:** Industrial, Intentional, Disciplined
**Directory:** `1920s-inventor-workshop/`

Editorial-industrial minimalism inspired by 1920s workshop photography and Bauhaus restraint. Black-and-white palette with contextual accent colors. Uses IBM Plex Sans/Serif typography. Best for technical presentations, engineering workshops, and content that needs precision without being theatrical.

| | |
|:---:|:---:|
| ![slide](1920s-inventor-workshop/slide_previews/title.jpg) | ![slide](1920s-inventor-workshop/slide_previews/dark-statement-1.jpg) |
| ![slide](1920s-inventor-workshop/slide_previews/light-statement.jpg) | ![slide](1920s-inventor-workshop/slide_previews/transition-preparation.jpg) |
| ![slide](1920s-inventor-workshop/slide_previews/split-drafting.jpg) | ![slide](1920s-inventor-workshop/slide_previews/figure-process.jpg) |
| ![slide](1920s-inventor-workshop/slide_previews/transition-execution.jpg) | ![slide](1920s-inventor-workshop/slide_previews/split-machine.jpg) |
| ![slide](1920s-inventor-workshop/slide_previews/comparison.jpg) | ![slide](1920s-inventor-workshop/slide_previews/split-verification.jpg) |
| ![slide](1920s-inventor-workshop/slide_previews/dark-statement-2.jpg) | ![slide](1920s-inventor-workshop/slide_previews/closing.jpg) |

---

### Blue Purple Gradient Corporate

**Vibe:** Polished, Gradient-Forward, Corporate
**Directory:** `blue-purple-gradient-corporate/`

Modern corporate with bold blue-purple gradient statements and generous white space. Uses Inter font family throughout. Comparable to Stripe or Linear fintech aesthetics. Best for SaaS pitch decks, fintech presentations, and modern corporate communications.

| | |
|:---:|:---:|
| ![slide](blue-purple-gradient-corporate/slide_previews/hero-title.jpg) | ![slide](blue-purple-gradient-corporate/slide_previews/agenda.jpg) |
| ![slide](blue-purple-gradient-corporate/slide_previews/business-case.jpg) | ![slide](blue-purple-gradient-corporate/slide_previews/three-pillars.jpg) |
| ![slide](blue-purple-gradient-corporate/slide_previews/quote.jpg) | ![slide](blue-purple-gradient-corporate/slide_previews/process.jpg) |
| ![slide](blue-purple-gradient-corporate/slide_previews/split-metrics.jpg) | ![slide](blue-purple-gradient-corporate/slide_previews/research.jpg) |
| ![slide](blue-purple-gradient-corporate/slide_previews/success-factors.jpg) | ![slide](blue-purple-gradient-corporate/slide_previews/closing.jpg) |

---

### Bold Pitch Modern

**Vibe:** Bold, Energetic, Approachable
**Directory:** `bold-pitch-modern/`

Triadic-accent pitch deck with flat geometry, oversized Montserrat headings, and a grey canvas punctuated by blue and red section dividers. Uses overlapping circles, blob crops, and card grids. Best for startup pitch decks, Series A/B fundraising, and co-working/SaaS products.

| | |
|:---:|:---:|
| ![slide](bold-pitch-modern/slide_previews/slide_01_hero-title.png) | ![slide](bold-pitch-modern/slide_previews/slide_02_table-of-contents.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_03_section-our-story.png) | ![slide](bold-pitch-modern/slide_previews/slide_04_vision-quote.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_05_section-challenge.png) | ![slide](bold-pitch-modern/slide_previews/slide_06_mission-statement.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_07_section-spaces.png) | ![slide](bold-pitch-modern/slide_previews/slide_08_pain-point.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_09_solution.png) | ![slide](bold-pitch-modern/slide_previews/slide_10_product-split.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_11_how-it-works-red.png) | ![slide](bold-pitch-modern/slide_previews/slide_12_process-steps.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_13_section-growth.png) | ![slide](bold-pitch-modern/slide_previews/slide_14_comparison-table.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_15_testimonial.png) | ![slide](bold-pitch-modern/slide_previews/slide_16_future-plan.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_17_section-opportunity.png) | ![slide](bold-pitch-modern/slide_previews/slide_18_financial-cards.png) |
| ![slide](bold-pitch-modern/slide_previews/slide_19_qa-discussion.png) | ![slide](bold-pitch-modern/slide_previews/slide_20_thank-you.png) |

---

### Brand Slide Deck

**Vibe:** Minimal, Editorial, Refined
**Directory:** `brand-slide-deck/`

Minimalist editorial with the sensibility of a luxury fashion lookbook. Typographic drama using Playfair Display Black Italic headings. Evokes premium magazines like Kinfolk or Cereal with Swiss grid discipline. Best for premium brand pitches, luxury brand presentations, and editorial decks.

| | |
|:---:|:---:|
| ![slide](brand-slide-deck/slide_previews/cover.jpg) | ![slide](brand-slide-deck/slide_previews/welcome.jpg) |
| ![slide](brand-slide-deck/slide_previews/contents.jpg) | ![slide](brand-slide-deck/slide_previews/values.jpg) |
| ![slide](brand-slide-deck/slide_previews/mission.jpg) | ![slide](brand-slide-deck/slide_previews/vision.jpg) |
| ![slide](brand-slide-deck/slide_previews/about.jpg) | ![slide](brand-slide-deck/slide_previews/team.jpg) |
| ![slide](brand-slide-deck/slide_previews/founder.jpg) |  |

---

### Clean Dual Tone

**Vibe:** Clean, Corporate, Confident
**Directory:** `clean-dual-tone/`

Minimalist-corporate with editorial touches and bold split-tone layouts (white/dark). Uses DM Sans exclusively with strong heading/body size contrast. Best for SaaS pitch decks, fintech, and modern corporate presentations.

| | |
|:---:|:---:|
| ![slide](clean-dual-tone/slide_previews/hero-title.jpg) | ![slide](clean-dual-tone/slide_previews/agenda.jpg) |
| ![slide](clean-dual-tone/slide_previews/section-divider.jpg) | ![slide](clean-dual-tone/slide_previews/one-column.jpg) |
| ![slide](clean-dual-tone/slide_previews/split-content.jpg) | ![slide](clean-dual-tone/slide_previews/stats.jpg) |
| ![slide](clean-dual-tone/slide_previews/photo-feature.jpg) | ![slide](clean-dual-tone/slide_previews/timeline.jpg) |
| ![slide](clean-dual-tone/slide_previews/team.jpg) | ![slide](clean-dual-tone/slide_previews/testimonial.jpg) |
| ![slide](clean-dual-tone/slide_previews/closing.jpg) |  |

---

### Cobalt Serif Editorial

**Vibe:** Elegant, Editorial, Confident
**Directory:** `cobalt-serif-editorial/`

Editorial-corporate hybrid with luxurious serif typography (Playfair Display Italic) and restrained cobalt blue palette with coral accents. Projects quiet sophistication and strategic gravitas. Best for consulting reports, financial presentations, and institutional brands.

| | |
|:---:|:---:|
| ![slide](cobalt-serif-editorial/slide_previews/title.jpg) | ![slide](cobalt-serif-editorial/slide_previews/toc.jpg) |
| ![slide](cobalt-serif-editorial/slide_previews/goal.jpg) | ![slide](cobalt-serif-editorial/slide_previews/kpi-dashboard.jpg) |
| ![slide](cobalt-serif-editorial/slide_previews/key-drivers.jpg) | ![slide](cobalt-serif-editorial/slide_previews/framework.jpg) |
| ![slide](cobalt-serif-editorial/slide_previews/scenario-detail.jpg) | ![slide](cobalt-serif-editorial/slide_previews/strategic-actions.jpg) |
| ![slide](cobalt-serif-editorial/slide_previews/financial-summary.jpg) | ![slide](cobalt-serif-editorial/slide_previews/closing.jpg) |

---

### Dark Purple Minimal

**Vibe:** Dark, Refined, Purposeful
**Directory:** `dark-purple-minimal/`

Minimalist dark-mode with premium SaaS editorial sensibility. Deep blue-black background with restrained purple accent. Uses Inter throughout. Echoes Apple keynote aesthetics. Best for developer-centric brands, tech companies, and dark-mode SaaS presentations.

| | |
|:---:|:---:|
| ![slide](dark-purple-minimal/slide_previews/hero-title.jpg) | ![slide](dark-purple-minimal/slide_previews/feature-overview.jpg) |
| ![slide](dark-purple-minimal/slide_previews/benefits-testimonials.jpg) | ![slide](dark-purple-minimal/slide_previews/feature-screenshot.jpg) |
| ![slide](dark-purple-minimal/slide_previews/closing-cta.jpg) |  |

---

### Deep Navy Corporate

**Vibe:** Corporate, Polished, Authoritative
**Directory:** `deep-navy-corporate/`

Bold corporate with modern SaaS influence and tech-forward data-driven design. Deep navy authority balanced by teal/green and orange accents. Uses DM Sans. Best for enterprise B2B SaaS, fintech, and corporate pitch decks.

| | |
|:---:|:---:|
| ![slide](deep-navy-corporate/slide_previews/hero-title.jpg) | ![slide](deep-navy-corporate/slide_previews/kpi-stats.jpg) |
| ![slide](deep-navy-corporate/slide_previews/two-column.jpg) | ![slide](deep-navy-corporate/slide_previews/process-steps.jpg) |
| ![slide](deep-navy-corporate/slide_previews/category-grid.jpg) | ![slide](deep-navy-corporate/slide_previews/numbered-list.jpg) |
| ![slide](deep-navy-corporate/slide_previews/full-text-detail.jpg) |  |

---

### Elegant Academic Serif

**Vibe:** Elegant, Academic, Warm
**Directory:** `elegant-academic-serif/`

Clean editorial with warm institutional feel combining classic serif typography (Playfair Display) and bold color blocking in navy and coral. Best for academic institutions, cultural foundations, and consulting reports.

| | |
|:---:|:---:|
| ![slide](elegant-academic-serif/slide_previews/title.jpg) | ![slide](elegant-academic-serif/slide_previews/section-1.jpg) |
| ![slide](elegant-academic-serif/slide_previews/text-image.jpg) | ![slide](elegant-academic-serif/slide_previews/title-photo.jpg) |
| ![slide](elegant-academic-serif/slide_previews/section-2.jpg) | ![slide](elegant-academic-serif/slide_previews/stats.jpg) |
| ![slide](elegant-academic-serif/slide_previews/text-map.jpg) | ![slide](elegant-academic-serif/slide_previews/full-text.jpg) |
| ![slide](elegant-academic-serif/slide_previews/masked-photo.jpg) | ![slide](elegant-academic-serif/slide_previews/closing.jpg) |

---

### Glassmorphic Gradient Overlay

**Vibe:** Futuristic, Translucent, Refined
**Directory:** `glassmorphic-gradient-overlay/`

Modern/techy luxury with glassmorphism as core visual language — frosted translucent panels float over dark backgrounds creating depth. Cyan-violet gradients with Poppins typography. Best for tech/SaaS, forward-looking brand presentations, and modern corporate decks.

| | |
|:---:|:---:|
| ![slide](glassmorphic-gradient-overlay/slide_previews/title.jpg) | ![slide](glassmorphic-gradient-overlay/slide_previews/what-is-bio.jpg) |
| ![slide](glassmorphic-gradient-overlay/slide_previews/creatures.jpg) | ![slide](glassmorphic-gradient-overlay/slide_previews/stats.jpg) |
| ![slide](glassmorphic-gradient-overlay/slide_previews/team.jpg) | ![slide](glassmorphic-gradient-overlay/slide_previews/quote.jpg) |
| ![slide](glassmorphic-gradient-overlay/slide_previews/data-viz.jpg) | ![slide](glassmorphic-gradient-overlay/slide_previews/types.jpg) |
| ![slide](glassmorphic-gradient-overlay/slide_previews/twilight.jpg) | ![slide](glassmorphic-gradient-overlay/slide_previews/closing.jpg) |

---

### Indigo SaaS Editorial

**Vibe:** Professional, Techy, Trustworthy
**Directory:** `indigo-saas-editorial/`

Corporate-modern SaaS blending enterprise credibility with startup energy. Deep indigo with semantic color accents. Clean and authoritative yet not stuffy. Uses DM Sans exclusively. Best for B2B SaaS, enterprise software, and modern business presentations.

| | |
|:---:|:---:|
| ![slide](indigo-saas-editorial/slide_previews/hero.jpg) | ![slide](indigo-saas-editorial/slide_previews/features.jpg) |
| ![slide](indigo-saas-editorial/slide_previews/process.jpg) | ![slide](indigo-saas-editorial/slide_previews/avatars.jpg) |
| ![slide](indigo-saas-editorial/slide_previews/capabilities.jpg) | ![slide](indigo-saas-editorial/slide_previews/growth.jpg) |
| ![slide](indigo-saas-editorial/slide_previews/impact.jpg) | ![slide](indigo-saas-editorial/slide_previews/differentiator.jpg) |

---

### Mint Organic Corporate

**Vibe:** Fresh, Trustworthy, Organic
**Directory:** `mint-organic-corporate/`

Modern corporate with nature-inspired warmth and organic rounded shapes. Mint green monochromatic palette blends financial professionalism with wellness softness. Uses DM Serif Display headings with DM Sans body. Best for fintech/trading platforms, wellness brands, and approachable corporate presentations.

| | |
|:---:|:---:|
| ![slide](mint-organic-corporate/slide_previews/overview-mosaic.jpg) | ![slide](mint-organic-corporate/slide_previews/feature-list.jpg) |
| ![slide](mint-organic-corporate/slide_previews/team-grid.jpg) | ![slide](mint-organic-corporate/slide_previews/roadmap-timeline.jpg) |
| ![slide](mint-organic-corporate/slide_previews/problem-radial.jpg) | ![slide](mint-organic-corporate/slide_previews/case-study.jpg) |

---

### Sage Editorial Nature

**Vibe:** Warm, Natural, Photographic
**Directory:** `sage-editorial-nature/`

Nature-inspired editorial with warm sage and earthy tones. Heavy use of photography with text overlays. Lora serif headings with Source Sans Pro body. Best for environmental topics, outdoor brands, and content-rich editorial presentations.

| | |
|:---:|:---:|
| ![slide](sage-editorial-nature/slide_previews/hero-title.jpg) | ![slide](sage-editorial-nature/slide_previews/section-divider.jpg) |
| ![slide](sage-editorial-nature/slide_previews/content-photo-1.jpg) | ![slide](sage-editorial-nature/slide_previews/stat-highlight.jpg) |
| ![slide](sage-editorial-nature/slide_previews/three-column-grid.jpg) | ![slide](sage-editorial-nature/slide_previews/quote-testimonial.jpg) |
| ![slide](sage-editorial-nature/slide_previews/content-inline-photos.jpg) | ![slide](sage-editorial-nature/slide_previews/icon-list-photo.jpg) |
| ![slide](sage-editorial-nature/slide_previews/content-photo-2.jpg) | ![slide](sage-editorial-nature/slide_previews/closing-cta.jpg) |

---

### Slate Coral Corporate

**Vibe:** Sophisticated, Editorial, Data-Driven
**Directory:** `slate-coral-corporate/`

Refined corporate aesthetic blending warm editorial photography with structured data presentation. Deep navy authority (#152244) balanced by coral-red accents (#F5365C) on a cool slate backdrop (#E8EAF0). Uses Josefin Sans. Best for investor briefings, market research, and premium brand presentations.

| | |
|:---:|:---:|
| ![slide](slate-coral-corporate/slide_previews/hero-title.jpg) | ![slide](slate-coral-corporate/slide_previews/table-of-contents.jpg) |
| ![slide](slate-coral-corporate/slide_previews/three-col-grid.jpg) | ![slide](slate-coral-corporate/slide_previews/key-highlights.jpg) |
| ![slide](slate-coral-corporate/slide_previews/content-photo-split.jpg) | ![slide](slate-coral-corporate/slide_previews/chart-summary.jpg) |
| ![slide](slate-coral-corporate/slide_previews/color-split.jpg) | ![slide](slate-coral-corporate/slide_previews/grid-with-heading.jpg) |
| ![slide](slate-coral-corporate/slide_previews/stats-dashboard.jpg) | ![slide](slate-coral-corporate/slide_previews/quote.jpg) |
| ![slide](slate-coral-corporate/slide_previews/process-steps.jpg) | ![slide](slate-coral-corporate/slide_previews/qa-slide.jpg) |
| ![slide](slate-coral-corporate/slide_previews/closing.jpg) |  |

---

### Teal Editorial Luxe

**Vibe:** Refined, Editorial, Luxurious
**Directory:** `teal-editorial-luxe/`

High-fashion magazine sensibility with typographic sophistication. Muted teal and classic serif letterforms (Playfair Display headings, Lato Light body). The most comprehensive theme with 20 layout templates. Best for premium brand decks, editorial/magazine-style presentations, and luxury brands.

| | |
|:---:|:---:|
| ![slide](teal-editorial-luxe/slide_previews/hero-title.jpg) | ![slide](teal-editorial-luxe/slide_previews/table-of-contents.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/section-divider.jpg) | ![slide](teal-editorial-luxe/slide_previews/one-column.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/two-columns.jpg) | ![slide](teal-editorial-luxe/slide_previews/three-columns.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/comparison.jpg) | ![slide](teal-editorial-luxe/slide_previews/quote-highlight.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/data-table.jpg) | ![slide](teal-editorial-luxe/slide_previews/big-data-kpi.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/process-flow.jpg) | ![slide](teal-editorial-luxe/slide_previews/timeline.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/chart-data-viz.jpg) | ![slide](teal-editorial-luxe/slide_previews/vertical-steps.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/device-mockup.jpg) | ![slide](teal-editorial-luxe/slide_previews/photo-gallery.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/team-profiles.jpg) | ![slide](teal-editorial-luxe/slide_previews/contact-info.jpg) |
| ![slide](teal-editorial-luxe/slide_previews/thanks-closing.jpg) | ![slide](teal-editorial-luxe/slide_previews/resource-asset.jpg) |

---
