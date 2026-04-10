# Slide Themes

A collection of 15 presentation themes built on [SlideKit](https://github.com/cabird/presentation_maker), a declarative slide framework that renders via [Reveal.js](https://revealjs.com/) at 1920x1080.

Each theme includes a full design specification, a working example deck, pre-built demo files, and slide preview thumbnails.

## Viewing a theme

Browse slide previews for all themes in [THEMES.md](THEMES.md), or open the PDF in each theme's `demo/` directory.

## Themes

| Theme | Vibe | Best for |
|-------|------|----------|
| **1920s-inventor-workshop** | Industrial, Intentional, Disciplined | Technical presentations, engineering workshops, and content that needs precision without being theatrical |
| **blue-purple-gradient-corporate** | Polished, Gradient-Forward, Corporate | SaaS pitch decks, fintech presentations, and modern corporate communications |
| **bold-pitch-modern** | Bold, Energetic, Approachable | Startup pitch decks, Series A/B fundraising, and co-working/SaaS products |
| **brand-slide-deck** | Minimal, Editorial, Refined | Premium brand pitches, luxury brand presentations, and editorial decks |
| **clean-dual-tone** | Clean, Corporate, Confident | SaaS pitch decks, fintech, and modern corporate presentations |
| **cobalt-serif-editorial** | Elegant, Editorial, Confident | Consulting reports, financial presentations, and institutional brands |
| **dark-purple-minimal** | Dark, Refined, Purposeful | Developer-centric brands, tech companies, and dark-mode SaaS presentations |
| **deep-navy-corporate** | Corporate, Polished, Authoritative | Enterprise B2B SaaS, fintech, and corporate pitch decks |
| **elegant-academic-serif** | Elegant, Academic, Warm | Academic institutions, cultural foundations, and consulting reports |
| **glassmorphic-gradient-overlay** | Futuristic, Translucent, Refined | Tech/SaaS, forward-looking brand presentations, and modern corporate decks |
| **indigo-saas-editorial** | Professional, Techy, Trustworthy | B2B SaaS, enterprise software, and modern business presentations |
| **mint-organic-corporate** | Fresh, Trustworthy, Organic | Fintech/trading platforms, wellness brands, and approachable corporate presentations |
| **sage-editorial-nature** | Warm, Natural, Photographic | Environmental topics, outdoor brands, and content-rich editorial presentations |
| **slate-coral-corporate** | Sophisticated, Editorial, Data-Driven | Investor briefings, market research, and premium brand presentations |
| **teal-editorial-luxe** | Refined, Editorial, Luxurious | Premium brand decks, editorial/magazine-style presentations, and luxury brands |


See [THEMES.md](THEMES.md) for detailed descriptions and slide previews of each theme.

## What's in each theme

```
<theme-name>/
├── theme.md              # Design spec: tokens, typography, components, templates, do's & don'ts
├── slides.js             # Example deck source (editable)
├── slide_previews/       # JPEG screenshots of each slide
└── demo/
    ├── index.html        # Viewer (needs local server)
    ├── presentation_bundle.html  # Self-contained single file (works via file://)
    ├── presentation.pdf  # PDF export
    └── images/           # Images used by the demo
```

- **theme.md** — The complete style specification: color palette, typography, spacing, component library, slide template catalog, and do's/don'ts. This is what you read to create new presentations in the theme.
- **slides.js** — A working example deck that imports SlideKit and defines slides as positioned elements.



## Using a theme

Themes are SlideKit decks — ES modules that import layout primitives and define slides as arrays of positioned elements:

```js
import { init, render, safeRect, el, below, vstack } from '../slidekit.bundle.min.js';

const C = {
  bgPrimary:   '#E8EDF4',
  textPrimary: '#2B4AC7',
  accent1:     '#E8658B',
};

const slides = [
  {
    id: 'title',
    background: C.bgPrimary,
    elements: [
      el('<h1 style="font-size:64px;">Your Title</h1>', { id: 'h', x: 130, y: 400, w: 1660 }),
    ],
  },
];

init({ fonts: ['Playfair Display:400,700', 'Inter:300,400,600'] });
render(slides);
```

Each theme's `slides.js` is a complete working example you can use as a starting point.

## Cookbooks

The `cookbooks/` directory contains layout reference material (not themes):

- **data-layout-cookbook** — 12 data visualization patterns (bar charts, trend lines, quadrant matrices, etc.)
- **slide-layout-cookbook** — 47 slide composition patterns across 10 categories (splits, full-bleed, grids, timelines, quotes, data viz, galleries, editorial layouts, and more)

## Building bundles

To build a self-contained HTML bundle for any theme:

```bash
python3 build_bundle.py <theme-name>/demo
# Outputs: <theme-name>/demo/presentation_bundle.html
```

This inlines all JS, CSS, and images into a single file that works offline.
