// slides.js — "The Quiet Return"
// Theme: sage-editorial-nature

import {
  init, render, safeRect, splitRect, el, below, rightOf, vstack,
} from '../slidekit.bundle.min.js';

// -- Image Manifest --------------------------------------------------------------
const IMAGES = {
  heroForest:      './images/hero-forest.png',
  habitatLoss:     './images/habitat-loss.png',
  statWildlife:    './images/stat-wildlife.png',
  colWetland:      './images/col-wetland.png',
  colForest:       './images/col-forest.png',
  colGrassland:    './images/col-grassland.png',
  quoteTree:       './images/quote-tree.png',
  fieldRiver:      './images/field-river.png',
  fieldPlanting:   './images/field-planting.png',
  threatsPanel:    './images/threats-panel.png',
  communityNature: './images/community-nature.png',
  ctaMeadow:       './images/cta-meadow.png',
  ctaWaterway:     './images/cta-waterway.png',
};

// -- Design Tokens ---------------------------------------------------------------
const C = {
  bgPrimary:    '#FFFFFF',
  bgSecondary:  '#7A9A7E',  // sage green
  bgTertiary:   '#F5F5F3',  // warm gray
  textPrimary:  '#3D3D3D',  // charcoal
  textSecondary:'#7A7A7A',  // medium gray
  textHeading:  '#6B8F6B',  // green headings
  textOnGreen:  '#FFFFFF',  // white on green
  accent1:      '#6B8F6B',  // primary green accent
  accent2:      '#8AAE8A',  // lighter green
  border:       '#C4C4C4',  // divider lines
};

const SERIF = "'Lora', serif";
const SANS  = "'Source Sans 3', sans-serif";

// -- Helpers ---------------------------------------------------------------------

/** Small template label bottom-left, muted green at low opacity */
function templateLabel(name, id) {
  return el(
    `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(107,143,107,0.35);">${name}</p>`,
    { id, x: 130, y: 1048, w: 500, layer: 'overlay' },
  );
}

/** Template label white at low opacity (for green bg slides) */
function templateLabelOnGreen(name, id) {
  return el(
    `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.25);">${name}</p>`,
    { id, x: 130, y: 1048, w: 500, layer: 'overlay' },
  );
}

/** Returns <img> HTML with object-fit:cover */
function img(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;${extraStyle}">`;
}

/** Small section tag in top-right corner in green */
function sectionTag(text, id) {
  return el(
    `<p style="font-family:${SANS};font-size:12px;font-weight:400;color:${C.accent1};letter-spacing:0.5px;text-align:right;">${text}</p>`,
    { id, x: 1920 - 120 - 300, y: 32, w: 300 },
  );
}

/** SVG donut ring for the stat slide */
function donutSVG(pct, size = 160, ringWidth = 7) {
  const r = (size - ringWidth) / 2;
  const circ = 2 * Math.PI * r;
  const filledLen = circ * (pct / 100);
  const gapLen = circ - filledLen;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="${ringWidth}"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${C.accent1}" stroke-width="${ringWidth}"
      stroke-dasharray="${filledLen} ${gapLen}" stroke-dashoffset="${circ * 0.25}"/>
  </svg>`;
}


// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Lora', weights: [400], source: 'google' },
      { family: 'Source Sans 3', weights: [400, 500, 700], source: 'google' },
    ],
  });

  const safe = safeRect(); // { x: 120, y: 90, w: 1680, h: 900 }

  const slides = [

    // ================================================================
    // SLIDE 1 — HERO TITLE
    // Template: Hero Title Slide
    // ================================================================
    {
      id: 'hero-title',
      background: C.bgPrimary,
      notes: 'Opening hero slide. Full-bleed forest photo left 40%, title and subtitle on white right 60%.',
      elements: [
        // Full-bleed photo panel — left 40%
        el(img(IMAGES.heroForest), {
          id: 's1-photo', x: 0, y: 0, w: 768, h: 1080,
          layer: 'bg', overflow: 'clip',
        }),

        // Overlay label on photo — "ECOLOGICAL RESTORATION"
        el('', {
          id: 's1-label-bg', x: 60, y: 480, w: 260, h: 38,
          layer: 'bg',
          style: { background: C.bgSecondary },
          allowOverlap: true,
        }),
        el(
          `<p style="font-family:${SANS};font-size:12px;font-weight:500;color:${C.textOnGreen};letter-spacing:0.5px;">ECOLOGICAL RESTORATION</p>`,
          { id: 's1-label-text', x: 72, y: 488, w: 240, allowOverlap: true },
        ),

        // Large Lora heading — right side
        el(`<h1 style="font-family:${SERIF};font-size:82px;font-weight:400;color:${C.textHeading};line-height:1.12;">The Quiet<br>Return</h1>`, {
          id: 's1-heading', x: 880, y: 260, w: 860,
        }),

        // Subtitle
        el(`<p style="font-family:${SANS};font-size:26px;font-weight:400;color:${C.textPrimary};line-height:1.5;">Rewilding &amp; Ecological Restoration</p>`, {
          id: 's1-subtitle', x: 880, y: below('s1-heading', { gap: 32 }), w: 760,
        }),

        // Theme label — bottom-right, very low opacity
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(107,143,107,0.15);text-align:right;">Theme: sage-editorial-nature</p>`, {
          id: 's1-theme', x: 1920 - 130 - 400, y: 1048, w: 400, layer: 'overlay',
        }),

        templateLabel('Template: Hero Title Slide', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2 — SECTION DIVIDER
    // Template: Section Divider
    // ================================================================
    {
      id: 'section-divider',
      background: C.bgSecondary,
      notes: 'Section divider — full sage green background with centered white heading and subtitle.',
      elements: [
        // Large centered white heading
        el(`<h1 style="font-family:${SERIF};font-size:72px;font-weight:400;color:${C.textOnGreen};line-height:1.15;text-align:center;">Understanding<br>the Crisis</h1>`, {
          id: 's2-heading', x: 960 - 600, y: 340, w: 1200,
        }),

        // Thin white divider
        el('', {
          id: 's2-divider', x: 960 - 100, y: below('s2-heading', { gap: 32 }), w: 200, h: 1,
          style: { background: 'rgba(255,255,255,0.5)' },
        }),

        // Subtitle
        el(`<p style="font-family:${SANS};font-size:22px;font-weight:400;color:rgba(255,255,255,0.75);line-height:1.5;text-align:center;">Global biodiversity faces unprecedented challenges</p>`, {
          id: 's2-subtitle', x: 960 - 440, y: below('s2-divider', { gap: 28 }), w: 880,
        }),

        templateLabelOnGreen('Template: Section Divider', 's2-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 3 — CONTENT + PHOTO SPLIT
    // Template: Content + Photo Split
    // ================================================================
    {
      id: 'content-photo-1',
      background: C.bgPrimary,
      notes: 'Content + Photo Split — habitat-loss photo left 40%, habitat loss text right 60%.',
      elements: [
        // Full-bleed photo — left 40%
        el(img(IMAGES.habitatLoss), {
          id: 's3-photo', x: 0, y: 0, w: 768, h: 1080,
          layer: 'bg', overflow: 'clip',
        }),

        // Section tag — top-right
        sectionTag('The Quiet Return', 's3-tag'),

        // Section label
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:500;color:${C.textHeading};letter-spacing:0.5px;">HABITAT LOSS</p>`, {
          id: 's3-label', x: 880, y: 180, w: 500,
        }),

        // Heading
        el(`<h2 style="font-family:${SERIF};font-size:44px;font-weight:400;color:${C.textHeading};line-height:1.2;">The Fragmentation<br>of Wild Spaces</h2>`, {
          id: 's3-heading', x: 880, y: below('s3-label', { gap: 20 }), w: 820,
        }),

        // Thin divider
        el('', {
          id: 's3-divider', x: 880, y: below('s3-heading', { gap: 16 }), w: 200, h: 1,
          style: { background: C.border },
        }),

        // Body text
        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">As human development expands, <b>natural habitats are being divided into smaller, isolated fragments</b>. This fragmentation disrupts migration routes, limits genetic diversity, and pushes vulnerable species toward extinction.</p>`, {
          id: 's3-body1', x: 880, y: below('s3-divider', { gap: 24 }), w: 820,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">The consequences extend beyond individual species. <b>Entire ecosystems lose their resilience</b>, becoming more susceptible to disease, invasive species, and the compounding effects of climate change.</p>`, {
          id: 's3-body2', x: 880, y: below('s3-body1', { gap: 20 }), w: 820,
        }),

        templateLabel('Template: Content + Photo Split', 's3-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 4 — STAT HIGHLIGHT SPLIT
    // Template: Stat Highlight Split
    // ================================================================
    {
      id: 'stat-highlight',
      background: C.bgPrimary,
      notes: 'Stat Highlight Split — photo with dark overlay and donut ring left 50%, green panel with white text right 50%.',
      elements: [
        // Photo with dark overlay — left 50%
        el(img(IMAGES.statWildlife), {
          id: 's4-photo', x: 0, y: 0, w: 960, h: 1080,
          layer: 'bg', overflow: 'clip',
        }),
        // Dark overlay for legibility
        el('', {
          id: 's4-overlay', x: 0, y: 0, w: 960, h: 1080,
          layer: 'bg',
          style: { background: 'rgba(0,0,0,0.35)' },
          allowOverlap: true,
        }),

        // Donut ring — centered in left panel
        el(`<div style="text-align:center;">
          ${donutSVG(72, 180, 7)}
          <p style="font-family:${SANS};font-size:64px;font-weight:700;color:${C.textOnGreen};margin-top:-122px;line-height:180px;">72%</p>
        </div>`, {
          id: 's4-donut', x: 480 - 100, y: 220, w: 200, allowOverlap: true,
        }),

        // Supporting text below donut
        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textOnGreen};text-align:center;line-height:1.5;">of monitored ecosystems show<br>measurable decline</p>`, {
          id: 's4-stat-text', x: 480 - 220, y: below('s4-donut', { gap: 32 }), w: 440, allowOverlap: true,
        }),

        // Attribution
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};text-align:center;">Source: Global Ecosystem Assessment, 2024</p>`, {
          id: 's4-attribution', x: 480 - 200, y: below('s4-stat-text', { gap: 24 }), w: 400, allowOverlap: true,
        }),

        // Green panel — right 50%
        el('', {
          id: 's4-green-bg', x: 960, y: 0, w: 960, h: 1080,
          layer: 'bg',
          style: { background: C.bgSecondary },
        }),

        // Section tag on green panel
        el(`<p style="font-family:${SANS};font-size:12px;font-weight:400;color:rgba(255,255,255,0.6);letter-spacing:0.5px;text-align:right;">The Quiet Return</p>`, {
          id: 's4-tag', x: 1920 - 120 - 300, y: 32, w: 300, allowOverlap: true,
        }),

        // Panel heading label
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:500;color:${C.textOnGreen};letter-spacing:0.5px;">THE SCOPE OF DECLINE</p>`, {
          id: 's4-panel-label', x: 1040, y: 200, w: 760, allowOverlap: true,
        }),

        // Panel heading
        el(`<h2 style="font-family:${SERIF};font-size:38px;font-weight:400;color:${C.textOnGreen};line-height:1.25;">A Crisis of<br>Biodiversity Loss</h2>`, {
          id: 's4-panel-heading', x: 1040, y: below('s4-panel-label', { gap: 20 }), w: 760, allowOverlap: true,
        }),

        // Panel body text
        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textOnGreen};line-height:1.6;">The decline in global biodiversity is <b>not limited to a single region or species group</b>. From tropical rainforests to Arctic tundra, ecosystems are losing their capacity to sustain the complex web of life that depends on them.</p>`, {
          id: 's4-panel-body1', x: 1040, y: below('s4-panel-heading', { gap: 24 }), w: 760, allowOverlap: true,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textOnGreen};line-height:1.6;"><b>Without coordinated intervention</b>, the trajectory suggests continued acceleration of species loss over the coming decades.</p>`, {
          id: 's4-panel-body2', x: 1040, y: below('s4-panel-body1', { gap: 20 }), w: 760, allowOverlap: true,
        }),

        templateLabel('Template: Stat Highlight Split', 's4-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 5 — THREE-COLUMN GRID
    // Template: Three-Column Content Grid
    // ================================================================
    {
      id: 'three-column-grid',
      background: C.bgPrimary,
      notes: 'Three-Column Content Grid — heading with divider, 3 photos in a row, 3 text columns below.',
      elements: [
        // Section tag
        sectionTag('The Quiet Return', 's5-tag'),

        // Centered heading
        el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:400;color:${C.textHeading};line-height:1.2;text-align:center;">Pathways to Restoration</h2>`, {
          id: 's5-heading', x: 960 - 500, y: 100, w: 1000,
        }),

        // Short centered divider
        el('', {
          id: 's5-divider', x: 960 - 80, y: below('s5-heading', { gap: 16 }), w: 160, h: 1,
          style: { background: C.border },
        }),

        // Photo row — 3 photos
        ...(() => {
          const photos = [IMAGES.colWetland, IMAGES.colForest, IMAGES.colGrassland];
          const photoIds = ['s5-photo-0', 's5-photo-1', 's5-photo-2'];
          const gap = 24;
          const totalW = safe.w;
          const photoW = (totalW - gap * 2) / 3;
          const photoH = 280;
          const photoY = 230;

          return photos.map((src, i) => {
            const x = safe.x + i * (photoW + gap);
            return el(img(src), {
              id: photoIds[i], x, y: photoY, w: photoW, h: photoH,
              overflow: 'clip',
            });
          });
        })(),

        // Three text columns below photos
        ...(() => {
          const columns = [
            { title: 'Wetland Recovery', body: 'Restoring degraded wetlands revives <b>natural water filtration</b>, flood protection, and critical breeding habitats for amphibians, fish, and migratory birds.' },
            { title: 'Forest Regeneration', body: 'Allowing forests to regrow rebuilds <b>carbon sequestration capacity</b> while re-establishing corridors that enable wildlife movement across fragmented landscapes.' },
            { title: 'Grassland Revival', body: 'Revitalizing grassland ecosystems supports <b>soil health and pollinator populations</b>, underpinning agricultural resilience and native plant diversity.' },
          ];
          const gap = 24;
          const totalW = safe.w;
          const colW = (totalW - gap * 2) / 3;
          const colY = 540;

          return columns.map((col, i) => {
            const x = safe.x + i * (colW + gap);
            return [
              el(`<p style="font-family:${SERIF};font-size:24px;font-weight:400;color:${C.textHeading};line-height:1.3;">${col.title}</p>`, {
                id: `s5-col-title-${i}`, x, y: colY, w: colW,
              }),
              el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textPrimary};line-height:1.6;">${col.body}</p>`, {
                id: `s5-col-body-${i}`, x, y: below(`s5-col-title-${i}`, { gap: 12 }), w: colW,
              }),
            ];
          }).flat();
        })(),

        templateLabel('Template: Three-Column Content Grid', 's5-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 6 — QUOTE / TESTIMONIAL
    // Template: Quote / Testimonial
    // ================================================================
    {
      id: 'quote-testimonial',
      background: C.bgPrimary,
      notes: 'Quote slide — photo left 35%, large quote text right with attribution.',
      elements: [
        // Full-bleed photo — left 35%
        el(img(IMAGES.quoteTree), {
          id: 's6-photo', x: 0, y: 0, w: 672, h: 1080,
          layer: 'bg', overflow: 'clip',
        }),

        // Section tag
        sectionTag('The Quiet Return', 's6-tag'),

        // Large decorative quotation mark
        el(`<p style="font-family:${SERIF};font-size:160px;font-weight:400;color:rgba(107,143,107,0.12);line-height:1;">\u201C</p>`, {
          id: 's6-quote-mark', x: 780, y: 180, w: 200,
        }),

        // Quote text
        el(`<p style="font-family:${SERIF};font-size:30px;font-weight:400;color:${C.textPrimary};line-height:1.55;">When we step back and allow ecosystems to heal themselves, the results often exceed our most optimistic projections.</p>`, {
          id: 's6-quote', x: 800, y: 300, w: 920,
        }),

        // Thin divider
        el('', {
          id: 's6-divider', x: 800, y: below('s6-quote', { gap: 32 }), w: 160, h: 1,
          style: { background: C.border },
        }),

        // Attribution
        el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.5;">\u2014 Dr. Amara Osei, Meridian Institute for Ecological Research</p>`, {
          id: 's6-attribution', x: 800, y: below('s6-divider', { gap: 20 }), w: 920,
        }),

        templateLabel('Template: Quote / Testimonial', 's6-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 7 — CONTENT WITH INLINE PHOTOS
    // Template: Content with Inline Photos
    // ================================================================
    {
      id: 'content-inline-photos',
      background: C.bgPrimary,
      notes: 'Content with inline photos — heading, body text, then bottom row of photo + green callout + photo.',
      elements: [
        // Section tag
        sectionTag('The Quiet Return', 's7-tag'),

        // Centered heading
        el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:400;color:${C.textHeading};line-height:1.2;text-align:center;">Restoration in Practice</h2>`, {
          id: 's7-heading', x: 960 - 500, y: 100, w: 1000,
        }),

        // Divider
        el('', {
          id: 's7-divider', x: 960 - 80, y: below('s7-heading', { gap: 16 }), w: 160, h: 1,
          style: { background: C.border },
        }),

        // Body text 1
        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;text-align:center;">Across the globe, restoration programs are demonstrating that <b>degraded landscapes can recover</b> when given the right conditions. From river corridors to replanted forests, these projects combine scientific rigor with community engagement.</p>`, {
          id: 's7-body1', x: 960 - 560, y: below('s7-divider', { gap: 24 }), w: 1120,
        }),

        // Body text 2
        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;text-align:center;">The most effective approaches recognize that <b>ecological and human systems are deeply interconnected</b>, and that lasting restoration requires sustained commitment from local stakeholders.</p>`, {
          id: 's7-body2', x: 960 - 560, y: below('s7-body1', { gap: 16 }), w: 1120,
        }),

        // Bottom row — photo left, green callout center, photo right
        ...(() => {
          const bottomY = 600;
          const bottomH = 340;
          const gap = 24;
          const photoW = 520;
          const calloutW = safe.w - 2 * photoW - 2 * gap;
          const startX = safe.x;

          return [
            // Left photo
            el(img(IMAGES.fieldRiver), {
              id: 's7-photo-left', x: startX, y: bottomY, w: photoW, h: bottomH,
              overflow: 'clip',
            }),

            // Green callout box — center
            el(`<div style="background:${C.bgSecondary};padding:40px 32px;height:100%;box-sizing:border-box;display:flex;align-items:center;">
              <p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textOnGreen};line-height:1.6;text-align:center;"><b>148 river systems</b> across 12 countries have shown measurable ecological improvement within five years of active restoration.</p>
            </div>`, {
              id: 's7-callout', x: startX + photoW + gap, y: bottomY, w: calloutW, h: bottomH,
              overflow: 'clip',
            }),

            // Right photo
            el(img(IMAGES.fieldPlanting), {
              id: 's7-photo-right', x: startX + photoW + gap + calloutW + gap, y: bottomY, w: photoW, h: bottomH,
              overflow: 'clip',
            }),
          ];
        })(),

        templateLabel('Template: Content with Inline Photos', 's7-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 8 — ICON LIST + PHOTO PANEL
    // Template: Icon List + Photo Panel
    // ================================================================
    {
      id: 'icon-list-photo',
      background: C.bgPrimary,
      notes: 'Icon List + Photo Panel — heading and 2x2 icon grid left ~62%, threats-panel photo right ~38%.',
      elements: [
        // Section tag
        sectionTag('The Quiet Return', 's8-tag'),

        // Full-height photo panel — right 38%
        el(img(IMAGES.threatsPanel), {
          id: 's8-photo', x: 1920 - 730, y: 0, w: 730, h: 1080,
          layer: 'bg', overflow: 'clip',
        }),

        // Heading — left area
        el(`<h2 style="font-family:${SERIF};font-size:44px;font-weight:400;color:${C.textHeading};line-height:1.2;">Threats to Progress</h2>`, {
          id: 's8-heading', x: safe.x, y: 180, w: 900,
        }),

        // Thin divider
        el('', {
          id: 's8-divider', x: safe.x, y: below('s8-heading', { gap: 16 }), w: 160, h: 1,
          style: { background: C.border },
        }),

        // 2x2 icon + label grid
        ...(() => {
          const items = [
            { icon: '\u26A0', title: 'Habitat Fragmentation', desc: 'Roads, agriculture, and urban expansion continue to break apart contiguous wild areas.' },
            { icon: '\u2602', title: 'Climate Disruption', desc: 'Shifting weather patterns and rising temperatures undermine restoration timelines.' },
            { icon: '\u2698', title: 'Invasive Species', desc: 'Non-native organisms outcompete restored plant and animal communities.' },
            { icon: '\u2234', title: 'Funding Gaps', desc: 'Many restoration projects face uncertain long-term financial support.' },
          ];
          const gridX = safe.x;
          const gridY = 340;
          const colW = 440;
          const rowH = 200;
          const gapX = 60;

          return items.map((item, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const x = gridX + col * (colW + gapX);
            const y = gridY + row * rowH;

            return [
              // Icon circle
              el(`<div style="width:48px;height:48px;border-radius:50%;background:rgba(107,143,107,0.12);display:flex;align-items:center;justify-content:center;">
                <span style="font-size:20px;color:${C.accent1};">${item.icon}</span>
              </div>`, {
                id: `s8-icon-${i}`, x, y, w: 48, h: 48,
              }),
              // Title
              el(`<p style="font-family:${SANS};font-size:20px;font-weight:700;color:${C.textPrimary};line-height:1.3;">${item.title}</p>`, {
                id: `s8-title-${i}`, x: x + 64, y, w: colW - 64,
              }),
              // Description
              el(`<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${C.textPrimary};line-height:1.55;">${item.desc}</p>`, {
                id: `s8-desc-${i}`, x: x + 64, y: below(`s8-title-${i}`, { gap: 8 }), w: colW - 64,
              }),
            ];
          }).flat();
        })(),

        templateLabel('Template: Icon List + Photo Panel', 's8-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 9 — CONTENT + PHOTO SPLIT (second use)
    // Template: Content + Photo Split
    // ================================================================
    {
      id: 'content-photo-2',
      background: C.bgPrimary,
      notes: 'Content + Photo Split (second use) — community-nature photo left 40%, community partnerships text right 60%.',
      elements: [
        // Full-bleed photo — left 40%
        el(img(IMAGES.communityNature), {
          id: 's9-photo', x: 0, y: 0, w: 768, h: 1080,
          layer: 'bg', overflow: 'clip',
        }),

        // Section tag
        sectionTag('The Quiet Return', 's9-tag'),

        // Section label
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:500;color:${C.textHeading};letter-spacing:0.5px;">COMMUNITY PARTNERSHIPS</p>`, {
          id: 's9-label', x: 880, y: 180, w: 500,
        }),

        // Heading
        el(`<h2 style="font-family:${SERIF};font-size:44px;font-weight:400;color:${C.textHeading};line-height:1.2;">People at the Center<br>of Restoration</h2>`, {
          id: 's9-heading', x: 880, y: below('s9-label', { gap: 20 }), w: 820,
        }),

        // Thin divider
        el('', {
          id: 's9-divider', x: 880, y: below('s9-heading', { gap: 16 }), w: 200, h: 1,
          style: { background: C.border },
        }),

        // Body text
        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">The most enduring restoration efforts place <b>local communities at the heart of the process</b>. When residents become stewards of their own landscapes, the outcomes are more resilient and more equitable.</p>`, {
          id: 's9-body1', x: 880, y: below('s9-divider', { gap: 24 }), w: 820,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;"><b>Collaborative conservation models</b> bring together scientists, policymakers, landowners, and indigenous knowledge holders to design solutions that work across generations.</p>`, {
          id: 's9-body2', x: 880, y: below('s9-body1', { gap: 20 }), w: 820,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">From community-managed forests in South Asia to <b>participatory monitoring programs</b> in the Amazon basin, these partnerships demonstrate that ecological health and human well-being advance together.</p>`, {
          id: 's9-body3', x: 880, y: below('s9-body2', { gap: 20 }), w: 820,
        }),

        templateLabel('Template: Content + Photo Split', 's9-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 10 — CLOSING / CTA WITH STEPS
    // Template: Closing / CTA with Steps
    // ================================================================
    {
      id: 'closing-cta',
      background: C.bgPrimary,
      notes: 'Closing CTA — green panel + 2 photos across the top ~35%, three numbered steps across the bottom ~65%.',
      elements: [
        // Top banner — green panel left third
        el('', {
          id: 's10-green-panel', x: 0, y: 0, w: 672, h: 378,
          layer: 'bg',
          style: { background: C.bgSecondary },
        }),

        // CTA heading on green panel
        el(`<h2 style="font-family:${SERIF};font-size:52px;font-weight:400;color:${C.textOnGreen};line-height:1.15;">Take<br>Action</h2>`, {
          id: 's10-cta-heading', x: 120, y: 120, w: 440, allowOverlap: true,
        }),

        // Photo 1 — center of top banner
        el(img(IMAGES.ctaMeadow), {
          id: 's10-photo1', x: 672, y: 0, w: 624, h: 378,
          layer: 'bg', overflow: 'clip',
        }),

        // Photo 2 — right of top banner
        el(img(IMAGES.ctaWaterway), {
          id: 's10-photo2', x: 1296, y: 0, w: 624, h: 378,
          layer: 'bg', overflow: 'clip',
        }),

        // Three numbered steps — bottom area
        ...(() => {
          const steps = [
            { num: '01', title: 'Learn', desc: 'Understand the ecosystems in your region and the challenges they face. Seek out reliable sources and engage with local conservation organizations.' },
            { num: '02', title: 'Support', desc: 'Fund or volunteer with local restoration programs. Even modest contributions of time or resources can accelerate meaningful ecological recovery.' },
            { num: '03', title: 'Advocate', desc: 'Champion policy changes that protect and restore natural habitats. Engage elected officials and support legislation that prioritizes long-term ecological health.' },
          ];
          const gap = 48;
          const totalW = safe.w;
          const colW = (totalW - gap * 2) / 3;
          const stepY = 450;

          return steps.map((step, i) => {
            const x = safe.x + i * (colW + gap);
            return [
              // Large step number
              el(`<p style="font-family:${SANS};font-size:64px;font-weight:700;color:${C.textPrimary};line-height:1.0;">${step.num}</p>`, {
                id: `s10-num-${i}`, x, y: stepY, w: colW,
              }),

              // Thin green accent line
              el('', {
                id: `s10-line-${i}`, x, y: below(`s10-num-${i}`, { gap: 16 }), w: 48, h: 3,
                style: { background: C.accent1 },
              }),

              // Step title
              el(`<p style="font-family:${SERIF};font-size:26px;font-weight:400;color:${C.textHeading};line-height:1.3;">${step.title}</p>`, {
                id: `s10-title-${i}`, x, y: below(`s10-line-${i}`, { gap: 16 }), w: colW,
              }),

              // Step description
              el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textPrimary};line-height:1.6;">${step.desc}</p>`, {
                id: `s10-desc-${i}`, x, y: below(`s10-title-${i}`, { gap: 12 }), w: colW,
              }),
            ];
          }).flat();
        })(),

        templateLabel('Template: Closing / CTA with Steps', 's10-tpl'),
      ],
    },

  ];

  return await render(slides);
}
