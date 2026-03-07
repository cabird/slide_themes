// slides.js — "Strategic Innovation Roadmap"
// Theme: cobalt-serif-editorial

import {
  init, render, safeRect, splitRect, el, below, rightOf, vstack, group,
} from '../slidekit.bundle.min.js';

// -- Image Manifest --------------------------------------------------------------
const IMAGES = {
  strategicPlanning:  './images/strategic-planning.png',
  abstractConcept:    './images/abstract-concept.png',
  innovationBulb:     './images/innovation-lightbulb.png',
};

// -- Design Tokens ---------------------------------------------------------------
const C = {
  bgPrimary:    '#E8EDF4',   // ice-blue interior
  bgDark:       '#2B4AC7',   // cobalt for bookend slides + shapes
  bgDarkDeep:   '#1E3299',   // deeper blue for gradient accents
  textPrimary:  '#2B4AC7',   // all text on light bg
  textOnDark:   '#FFFFFF',   // text on dark-blue bg
  textSecondary:'#5A6A8A',   // muted supporting text
  accent1:      '#E8658B',   // pink/coral for chart highlights
  accent2:      '#F5A0B0',   // lighter pink ring
  border:       '#B8C4DA',   // thin divider lines
  borderDark:   '#2B4AC7',   // thick bars
};

const SERIF  = "'Playfair Display', serif";
const SANS   = "'Inter', sans-serif";

// -- Helpers ---------------------------------------------------------------------

function templateLabel(name, id) {
  return el(
    `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(43,74,199,0.35);">${name}</p>`,
    { id, x: 130, y: 1048, w: 420, layer: 'overlay' },
  );
}

function templateLabelOnDark(name, id) {
  return el(
    `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.2);">${name}</p>`,
    { id, x: 130, y: 1048, w: 420, layer: 'overlay' },
  );
}

function brandWordmark(id, dark = false) {
  const color = dark ? C.textOnDark : C.textPrimary;
  return el(
    `<p style="font-family:${SANS};font-size:16px;letter-spacing:0.15em;color:${color};"><span style="font-weight:300;">STRATO</span><span style="font-weight:600;">CORP</span></p>`,
    { id, x: 96, y: 32, w: 220 },
  );
}

function topRule(id) {
  return el('', {
    id, x: 0, y: 76, w: 1920, h: 1,
    layer: 'bg',
    style: { background: C.border },
  });
}

function img(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;${extraStyle}">`;
}

// SVG donut chart — single-value ring
function donutSVG(pct, size = 90, ringWidth = 8, bgColor = '#FFFFFF', accentColor = C.accent1) {
  const r = (size - ringWidth) / 2;
  const circ = 2 * Math.PI * r;
  const accentLen = circ * (pct / 100);
  const gapLen = circ - accentLen;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${bgColor}" stroke-width="${ringWidth}" opacity="0.3"/>
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${accentColor}" stroke-width="${ringWidth}"
      stroke-dasharray="${accentLen} ${gapLen}" stroke-dashoffset="${circ * 0.25}" stroke-linecap="round"/>
  </svg>`;
}

function donutWithLabel(pct, label, idPrefix, opts = {}) {
  const { size = 90, textColor = C.textOnDark, accentColor = C.accent1, bgRing = 'rgba(255,255,255,0.25)' } = opts;
  return `<div style="text-align:center;">
    ${donutSVG(pct, size, 8, bgRing, accentColor)}
    <p style="font-family:${SANS};font-size:28px;font-weight:600;color:${textColor};margin-top:-${size/2 + 14}px;line-height:${size}px;">${pct}%</p>
    <p style="font-family:${SANS};font-size:13px;font-weight:400;color:${textColor};opacity:0.8;margin-top:6px;">${label}</p>
  </div>`;
}

// Rotated heading — the theme's signature element
function rotatedHeading(text, id, opts = {}) {
  const { x = 58, y = 540, fontSize = 96, color = C.textPrimary, w = 600 } = opts;
  return el(
    `<p style="font-family:${SERIF};font-style:italic;font-size:${fontSize}px;font-weight:400;color:${color};line-height:1.05;white-space:nowrap;">${text}</p>`,
    {
      id,
      x, y, w,
      style: {
        transformOrigin: 'left top',
        transform: 'rotate(-90deg)',
      },
      allowOverlap: true,
    },
  );
}

function rotatedSubLabel(text, id, opts = {}) {
  const { x = 165, y = 540, color = C.textPrimary } = opts;
  return el(
    `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${color};letter-spacing:0.15em;text-transform:uppercase;white-space:nowrap;">${text}</p>`,
    {
      id,
      x, y, w: 300,
      style: {
        transformOrigin: 'left top',
        transform: 'rotate(-90deg)',
      },
      allowOverlap: true,
    },
  );
}

function verticalDivider(id, x, y = 90, h = 900) {
  return el('', {
    id, x, y, w: 1, h,
    style: { background: C.border },
    allowOverlap: true,
  });
}

function bulletList(items, opts = {}) {
  const { color = C.textPrimary, fontSize = 18 } = opts;
  return items.map(item =>
    `<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:14px;">
      <span style="color:${C.bgDark};font-size:8px;line-height:${fontSize * 1.5}px;">●</span>
      <span style="font-family:${SANS};font-size:${fontSize}px;font-weight:400;color:${color};line-height:1.5;">${item}</span>
    </div>`
  ).join('');
}


// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Playfair Display', weights: [400], source: 'google' },
      { family: 'Inter', weights: [300, 400, 600, 700], source: 'google' },
    ],
  });

  const safe = safeRect(); // { x: 120, y: 90, w: 1680, h: 900 }

  const slides = [

    // ================================================================
    // SLIDE 1 — TITLE / COVER (full cobalt bg)
    // Template 1: Title / Cover Slide
    // ================================================================
    {
      id: 'title',
      background: C.bgDark,
      notes: 'Opening slide — Title/Cover template. Full cobalt blue background with fluid wave decorative panel left, title right.',
      elements: [
        // Fluid-wave decorative panel (left ~38%)
        el('', {
          id: 's1-wave-bg', x: 0, y: 0, w: 730, h: 1080,
          layer: 'bg',
          style: {
            background: `linear-gradient(160deg, ${C.bgDarkDeep} 0%, ${C.bgDark} 40%, #4A6AE8 75%, ${C.bgDark} 100%)`,
          },
        }),
        // Subtle wave overlay shape
        el('', {
          id: 's1-wave-accent', x: 200, y: 150, w: 500, h: 780,
          layer: 'bg',
          style: {
            background: `radial-gradient(ellipse at 30% 50%, rgba(74,106,232,0.5) 0%, transparent 70%)`,
            borderRadius: '50%',
          },
          allowOverlap: true,
        }),

        // Brand vertical sidebar text — rotated
        el(
          `<p style="font-family:${SANS};font-size:13px;font-weight:400;color:rgba(255,255,255,0.4);letter-spacing:0.3em;text-transform:uppercase;white-space:nowrap;">STRATOCORP</p>`,
          {
            id: 's1-brand-sidebar', x: 38, y: 700, w: 300,
            style: {
              transformOrigin: 'left top',
              transform: 'rotate(-90deg)',
            },
          },
        ),

        // Main title — right side
        el(`<h1 style="font-family:${SERIF};font-style:italic;font-size:82px;font-weight:400;color:${C.textOnDark};line-height:1.08;">Strategic<br>Innovation<br>Roadmap</h1>`, {
          id: 's1-title', x: 830, y: 200, w: 920,
        }),

        // Subtitle
        el(`<p style="font-family:${SANS};font-size:22px;font-weight:400;color:rgba(255,255,255,0.65);line-height:1.6;">A forward-looking framework for sustainable growth, market differentiation, and organizational transformation</p>`, {
          id: 's1-subtitle', x: 830, y: below('s1-title', { gap: 36 }), w: 780,
        }),

        // Footer rule
        el('', {
          id: 's1-footer-rule', x: 0, y: 920, w: 1920, h: 1,
          layer: 'bg',
          style: { background: 'rgba(255,255,255,0.2)' },
        }),

        // Date — bottom-left
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.45);letter-spacing:0.08em;text-transform:uppercase;">June 2025</p>`, {
          id: 's1-date', x: 96, y: 950, w: 300,
        }),

        // URL — bottom-right
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.45);text-align:right;letter-spacing:0.08em;">stratocorp.io/innovation</p>`, {
          id: 's1-url', x: 1920 - 96 - 400, y: 950, w: 400,
        }),

        // Theme label — bottom-right, very low opacity
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.12);text-align:right;">Theme: cobalt-serif-editorial</p>`, {
          id: 's1-theme', x: 1920 - 130 - 400, y: 1048, w: 400, layer: 'overlay',
        }),

        templateLabelOnDark('Template: Title / Cover Slide', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2 — TABLE OF CONTENTS (ice-blue bg)
    // Template 2: Table of Contents
    // ================================================================
    {
      id: 'toc',
      background: C.bgPrimary,
      notes: 'Table of Contents — Large semicircle with arrow left, numbered section list in grid.',
      elements: [
        brandWordmark('s2-brand'),
        topRule('s2-rule'),

        // Large blue semicircle — left edge
        el('', {
          id: 's2-semicircle', x: -180, y: 220, w: 360, h: 560,
          layer: 'bg',
          style: { background: C.bgDark, borderRadius: '50%' },
        }),
        // Arrow icon inside semicircle
        el(`<p style="font-family:${SANS};font-size:36px;color:${C.textOnDark};text-align:center;">→</p>`, {
          id: 's2-arrow', x: 30, y: 470, w: 80, allowOverlap: true,
        }),

        // "Table of Contents" heading — centered
        el(`<h2 style="font-family:${SERIF};font-style:italic;font-size:64px;font-weight:400;color:${C.textPrimary};line-height:1.1;">Table of Contents</h2>`, {
          id: 's2-heading', x: 500, y: 120, w: 900,
        }),

        // TOC grid — 5 columns × 2 rows
        ...(() => {
          const items = [
            { num: '03', desc: 'Goal &\nStrategic Vision' },
            { num: '04', desc: 'Current\nLandscape' },
            { num: '05', desc: 'Key Drivers &\nAssumptions' },
            { num: '06', desc: 'Innovation\nFramework' },
            { num: '07', desc: 'Scenario 1:\nAccelerated Growth' },
            { num: '08', desc: 'Strategic\nActions' },
            { num: '09', desc: 'Financial\nSummary' },
            { num: '10', desc: 'Closing\nRemarks' },
          ];
          const startX = 360;
          const startY = 340;
          const colW = 240;
          const rowH = 210;
          const cols = 4;

          return items.map((item, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = startX + col * colW;
            const y = startY + row * rowH;
            return [
              el(`<p style="font-family:${SERIF};font-style:italic;font-size:52px;font-weight:400;color:${C.textPrimary};line-height:1.0;">${item.num}</p>`, {
                id: `s2-num-${i}`, x, y, w: 200,
              }),
              el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};line-height:1.45;white-space:pre-line;">${item.desc}</p>`, {
                id: `s2-desc-${i}`, x, y: below(`s2-num-${i}`, { gap: 10 }), w: 200,
              }),
            ];
          }).flat();
        })(),

        templateLabel('Template: Table of Contents', 's2-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 3 — GOAL / STATEMENT (ice-blue bg)
    // Template 3: Goal / Statement
    // ================================================================
    {
      id: 'goal',
      background: C.bgPrimary,
      notes: 'Goal slide — Two overlapping semicircles with checkmark, heading top-right, two text blocks.',
      elements: [
        brandWordmark('s3-brand'),
        topRule('s3-rule'),

        // "Goal" heading — top-right
        el(`<h2 style="font-family:${SERIF};font-style:italic;font-size:64px;font-weight:400;color:${C.textPrimary};line-height:1.1;text-align:right;">Goal</h2>`, {
          id: 's3-heading', x: 1440, y: 110, w: 340,
        }),

        // Left semicircle — cropped at left edge
        el('', {
          id: 's3-circle-left', x: -80, y: 260, w: 440, h: 440,
          layer: 'bg',
          style: { background: C.bgDark, borderRadius: '50%' },
        }),

        // Center circle with checkmark
        el('', {
          id: 's3-circle-center', x: 460, y: 280, w: 400, h: 400,
          layer: 'bg',
          style: { background: C.bgDark, borderRadius: '50%' },
        }),
        el(`<p style="font-size:64px;color:${C.textOnDark};text-align:center;line-height:1;">✓</p>`, {
          id: 's3-checkmark', x: 560, y: 430, w: 200, allowOverlap: true,
        }),

        // Vertical dividers
        verticalDivider('s3-div1', 640, 110, 850),
        verticalDivider('s3-div2', 960, 110, 850),

        // Left text block
        el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textPrimary};line-height:1.6;">Establish a unified innovation strategy that accelerates time-to-market by 40% while maintaining operational excellence across all business units.</p>`, {
          id: 's3-text-left', x: 130, y: 750, w: 480,
        }),

        // Right text block
        el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textPrimary};line-height:1.6;">Drive sustainable competitive advantage through systematic investment in emerging technologies, talent development, and cross-functional collaboration frameworks.</p>`, {
          id: 's3-text-right', x: 1000, y: 280, w: 760,
        }),

        templateLabel('Template: Goal / Statement', 's3-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 4 — KPI DASHBOARD (ice-blue bg)
    // Template 4: KPI / Stats Dashboard
    // ================================================================
    {
      id: 'kpi-dashboard',
      background: C.bgPrimary,
      notes: 'KPI Dashboard — Rotated heading left: "Current Landscape". Right: 4 blue stat circles with donut charts.',
      elements: [
        brandWordmark('s4-brand'),
        topRule('s4-rule'),

        // Rotated heading — left column
        rotatedHeading('Current\u2003Landscape', 's4-rot-heading', { x: 60, y: 680, fontSize: 72 }),

        // Horizontal thin rule near top-right content zone
        el('', {
          id: 's4-content-rule', x: 420, y: 130, w: 1380, h: 1,
          style: { background: C.border },
          allowOverlap: true,
        }),

        // Info bar — labels below rule
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:600;color:${C.textPrimary};letter-spacing:0.08em;text-transform:uppercase;">CORE PRODUCT: <span style="font-weight:400;text-transform:none;letter-spacing:0;">Enterprise AI Platform</span></p>`, {
          id: 's4-info1', x: 420, y: 155, w: 520,
        }),
        el(`<p style="font-family:${SANS};font-size:14px;font-weight:600;color:${C.textPrimary};letter-spacing:0.08em;text-transform:uppercase;">MARKET SEGMENT: <span style="font-weight:400;text-transform:none;letter-spacing:0;">B2B SaaS · Mid-Market</span></p>`, {
          id: 's4-info2', x: 1000, y: 155, w: 520,
        }),

        // 4 stat circles — 2×2 grid
        ...(() => {
          const stats = [
            { value: '92%', label: 'Customer Retention', pct: 92, hasDonut: true },
            { value: '3.2×', label: 'Revenue Multiple', pct: 78, hasDonut: true },
            { value: '$45M', label: 'Annual Recurring Revenue', pct: 0, hasDonut: false },
            { value: '6,400', label: 'Active Enterprise Users', pct: 0, hasDonut: false },
          ];
          const gridX = 750;
          const gridY = 240;
          const circleSize = 210;
          const gapX = 120;
          const gapY = 60;
          const cols = 2;

          return stats.map((stat, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const cx = gridX + col * (circleSize + gapX);
            const cy = gridY + row * (circleSize + gapY);

            const innerContent = stat.hasDonut
              ? `<div style="text-align:center;padding-top:30px;">
                  ${donutSVG(stat.pct, 80, 7, 'rgba(255,255,255,0.25)', C.accent1)}
                  <p style="font-family:${SANS};font-size:30px;font-weight:600;color:${C.textOnDark};margin-top:-58px;line-height:80px;">${stat.value}</p>
                </div>`
              : `<p style="font-family:${SERIF};font-style:italic;font-size:42px;font-weight:400;color:${C.textOnDark};text-align:center;line-height:1.0;padding-top:85px;">${stat.value}</p>`;

            return [
              // Blue circle
              el(innerContent, {
                id: `s4-stat-${i}`, x: cx, y: cy, w: circleSize, h: circleSize,
                style: { background: C.bgDark, borderRadius: '50%' },
                overflow: 'clip',
              }),
              // Label below
              el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textPrimary};text-align:center;">${stat.label}</p>`, {
                id: `s4-label-${i}`, x: cx - 20, y: cy + circleSize + 14, w: circleSize + 40,
              }),
            ];
          }).flat();
        })(),

        templateLabel('Template: KPI / Stats Dashboard', 's4-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 5 — KEY DRIVERS + PHOTO (ice-blue bg)
    // Template 5: Key Drivers / Category List with Photo
    // ================================================================
    {
      id: 'key-drivers',
      background: C.bgPrimary,
      notes: 'Key Drivers — strategic-planning.png upper-left, large heading bottom-left, category list right with vertical divider and blue dots.',
      elements: [
        brandWordmark('s5-brand'),
        topRule('s5-rule'),

        // Photo — upper-left area
        el(img(IMAGES.strategicPlanning), {
          id: 's5-photo', x: 130, y: 110, w: 520, h: 380,
          overflow: 'clip',
          style: { border: '4px solid #FFFFFF' },
        }),

        // Large Playfair italic heading — bottom-left
        el(`<h2 style="font-family:${SERIF};font-style:italic;font-size:62px;font-weight:400;color:${C.textPrimary};line-height:1.1;">Key Drivers &<br>Assumptions</h2>`, {
          id: 's5-heading', x: 130, y: 560, w: 540,
        }),

        // Vertical divider
        verticalDivider('s5-divider', 750, 110, 860),

        // Category blocks — right side
        ...(() => {
          const categories = [
            {
              title: 'Market Dynamics',
              items: [
                'Accelerating digital transformation across verticals',
                'Consolidation among mid-tier competitors',
                'Growing regulatory complexity in data governance',
              ],
            },
            {
              title: 'Technology Trends',
              items: [
                'Generative AI reaching enterprise-grade maturity',
                'Edge computing enabling real-time analytics',
                'API-first architecture becoming table stakes',
              ],
            },
            {
              title: 'Organizational Readiness',
              items: [
                'Cross-functional innovation teams established',
                'R&D budget increased 25% year-over-year',
                'Strategic partnerships with 3 tier-one vendors',
              ],
            },
          ];

          const elements = [];
          const catX = 800;
          const catW = 960;
          let prevId = null;

          categories.forEach((cat, ci) => {
            const headId = `s5-cat-head-${ci}`;
            const bodyId = `s5-cat-body-${ci}`;
            const yPos = prevId ? below(prevId, { gap: 32 }) : 130;

            elements.push(
              el(`<p style="font-family:${SERIF};font-style:italic;font-size:24px;font-weight:400;color:${C.textPrimary};line-height:1.3;">${cat.title}</p>`, {
                id: headId, x: catX, y: yPos, w: catW,
              }),
              el(bulletList(cat.items), {
                id: bodyId, x: catX, y: below(headId, { gap: 12 }), w: catW,
              }),
            );
            prevId = bodyId;
          });

          return elements;
        })(),

        templateLabel('Template: Key Drivers / Category List with Photo', 's5-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 6 — FRAMEWORK GRID (ice-blue bg)
    // Template 6: Framework / Process Grid
    // ================================================================
    {
      id: 'framework',
      background: C.bgPrimary,
      notes: 'Innovation Framework — Large centered heading, 4-column grid with numbered items and blue bars.',
      elements: [
        brandWordmark('s6-brand'),
        topRule('s6-rule'),

        // Large centered heading
        el(`<h2 style="font-family:${SERIF};font-style:italic;font-size:64px;font-weight:400;color:${C.textPrimary};line-height:1.1;text-align:center;">Innovation Framework</h2>`, {
          id: 's6-heading', x: 160, y: 120, w: 1600, anchor: 'tl',
        }),

        // 4-column grid
        ...(() => {
          const columns = [
            { num: '01', title: 'Discover', desc: 'Market research, competitive analysis, and customer insight gathering to identify opportunity spaces.' },
            { num: '02', title: 'Design', desc: 'Rapid prototyping, design sprints, and stakeholder validation to shape viable solutions.' },
            { num: '03', title: 'Develop', desc: 'Agile engineering, continuous integration, and iterative testing to build at scale.' },
            { num: '04', title: 'Deploy', desc: 'Phased rollout, performance monitoring, and feedback loops to ensure market success.' },
          ];
          const colCount = 4;
          const gap = 40;
          const gridX = 160;
          const gridW = 1600;
          const colW = (gridW - gap * (colCount - 1)) / colCount;
          const gridY = 360;

          const elements = [];

          columns.forEach((col, i) => {
            const x = gridX + i * (colW + gap);

            // Vertical dividers between columns
            if (i > 0) {
              elements.push(
                verticalDivider(`s6-coldiv-${i}`, x - gap / 2, 340, 600),
              );
            }

            // Serif italic number
            elements.push(
              el(`<p style="font-family:${SERIF};font-style:italic;font-size:44px;font-weight:400;color:${C.textPrimary};line-height:1.0;">${col.num}</p>`, {
                id: `s6-num-${i}`, x, y: gridY, w: colW,
              }),
            );

            // Thick blue bar
            elements.push(
              el('', {
                id: `s6-bar-${i}`, x, y: below(`s6-num-${i}`, { gap: 16 }), w: colW, h: 5,
                style: { background: C.borderDark },
              }),
            );

            // Column heading — serif italic
            elements.push(
              el(`<p style="font-family:${SERIF};font-style:italic;font-size:26px;font-weight:400;color:${C.textPrimary};line-height:1.2;">${col.title}</p>`, {
                id: `s6-title-${i}`, x, y: below(`s6-bar-${i}`, { gap: 20 }), w: colW,
              }),
            );

            // Thin rule
            elements.push(
              el('', {
                id: `s6-thin-${i}`, x, y: below(`s6-title-${i}`, { gap: 16 }), w: colW, h: 1,
                style: { background: C.border },
              }),
            );

            // Description text
            elements.push(
              el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};line-height:1.6;">${col.desc}</p>`, {
                id: `s6-desc-${i}`, x, y: below(`s6-thin-${i}`, { gap: 16 }), w: colW,
              }),
            );
          });

          return elements;
        })(),

        templateLabel('Template: Framework / Process Grid', 's6-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 7 — SCENARIO DETAIL (ice-blue bg)
    // Template 7: Scenario Detail with Outcome Panel
    // ================================================================
    {
      id: 'scenario-detail',
      background: C.bgPrimary,
      notes: 'Scenario Detail — Rotated heading left, assumptions center-left, arch-top blue outcome panel center, strategic focus right.',
      elements: [
        brandWordmark('s7-brand'),
        topRule('s7-rule'),

        // Rotated heading
        rotatedHeading('Accelerated\u2003Growth', 's7-rot-heading', { x: 55, y: 700, fontSize: 68 }),
        rotatedSubLabel('SCENARIO 1', 's7-rot-label', { x: 185, y: 450 }),

        // Vertical divider after rotated heading
        verticalDivider('s7-div1', 340, 100, 880),

        // Assumptions column
        el(`<p style="font-family:${SERIF};font-style:italic;font-size:26px;font-weight:400;color:${C.textPrimary};line-height:1.2;">Assumptions</p>`, {
          id: 's7-assumptions-head', x: 380, y: 200, w: 360,
        }),
        el(bulletList([
          'TAM expands 35% through new verticals',
          'Product-led growth captures 60% of new accounts',
          'Engineering velocity doubles with AI tooling',
          'Net retention remains above 115%',
        ], { fontSize: 16 }), {
          id: 's7-assumptions-list', x: 380, y: below('s7-assumptions-head', { gap: 20 }), w: 360,
        }),

        // Outcome panel — arch-top blue column
        el('', {
          id: 's7-outcome-bg', x: 800, y: 100, w: 340, h: 880,
          layer: 'bg',
          style: {
            background: C.bgDark,
            borderRadius: '170px 170px 0 0',
          },
        }),
        el(`<p style="font-family:${SERIF};font-style:italic;font-size:24px;font-weight:400;color:${C.textOnDark};text-align:center;">Outcomes</p>`, {
          id: 's7-outcomes-head', x: 820, y: 190, w: 300, allowOverlap: true,
        }),
        // Donut 1
        el(donutWithLabel(87, 'Revenue Growth', 's7-d1'), {
          id: 's7-donut1', x: 870, y: 280, w: 200, allowOverlap: true,
        }),
        // Divider inside panel
        el('', {
          id: 's7-panel-div1', x: 840, y: 470, w: 260, h: 1,
          style: { background: 'rgba(255,255,255,0.2)' },
          allowOverlap: true,
        }),
        // Donut 2
        el(donutWithLabel(64, 'Market Share', 's7-d2'), {
          id: 's7-donut2', x: 870, y: 500, w: 200, allowOverlap: true,
        }),
        // Divider
        el('', {
          id: 's7-panel-div2', x: 840, y: 690, w: 260, h: 1,
          style: { background: 'rgba(255,255,255,0.2)' },
          allowOverlap: true,
        }),
        // Text metrics
        el(`<div style="text-align:center;">
          <p style="font-family:${SERIF};font-style:italic;font-size:36px;color:${C.textOnDark};">$90M</p>
          <p style="font-family:${SANS};font-size:13px;color:rgba(255,255,255,0.8);margin-top:6px;">Projected ARR</p>
        </div>`, {
          id: 's7-metric1', x: 860, y: 720, w: 220, allowOverlap: true,
        }),
        el(`<div style="text-align:center;">
          <p style="font-family:${SERIF};font-style:italic;font-size:36px;color:${C.textOnDark};">12,800</p>
          <p style="font-family:${SANS};font-size:13px;color:rgba(255,255,255,0.8);margin-top:6px;">Enterprise Users</p>
        </div>`, {
          id: 's7-metric2', x: 860, y: 840, w: 220, allowOverlap: true,
        }),

        // Strategic Focus column — right
        el(`<p style="font-family:${SERIF};font-style:italic;font-size:26px;font-weight:400;color:${C.textPrimary};line-height:1.2;">Strategic Focus</p>`, {
          id: 's7-focus-head', x: 1200, y: 200, w: 580,
        }),
        el(bulletList([
          'Expand into healthcare and financial services verticals',
          'Launch self-serve tier targeting mid-market segment',
          'Build strategic alliances with 5 systems integrators',
          'Invest in AI-native product features for competitive moat',
          'Establish regional offices in EMEA and APAC',
        ], { fontSize: 16 }), {
          id: 's7-focus-list', x: 1200, y: below('s7-focus-head', { gap: 20 }), w: 580,
        }),

        templateLabel('Template: Scenario Detail', 's7-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 8 — STRATEGIC ACTIONS + PHOTO (ice-blue bg)
    // Template 8: Strategic Actions with Photo
    // ================================================================
    {
      id: 'strategic-actions',
      background: C.bgPrimary,
      notes: 'Strategic Actions — Rotated heading left, abstract-concept.png center, bullet list right.',
      elements: [
        brandWordmark('s8-brand'),
        topRule('s8-rule'),

        // Rotated heading
        rotatedHeading('Strategic\u2003Actions', 's8-rot-heading', { x: 55, y: 660, fontSize: 70 }),
        rotatedSubLabel('SCENARIO 1', 's8-rot-label', { x: 170, y: 390 }),

        // Vertical divider
        verticalDivider('s8-div1', 370, 100, 880),

        // Photo — center column
        el(img(IMAGES.abstractConcept), {
          id: 's8-photo', x: 430, y: 160, w: 520, h: 680,
          overflow: 'clip',
          style: { border: '4px solid #FFFFFF' },
        }),

        // Bullet list — right column
        el(`<p style="font-family:${SERIF};font-style:italic;font-size:24px;font-weight:400;color:${C.textPrimary};line-height:1.2;">Priority Initiatives</p>`, {
          id: 's8-list-head', x: 1020, y: 180, w: 740,
        }),
        el(bulletList([
          'Deploy enterprise AI copilot across all customer-facing workflows by Q3',
          'Acquire complementary analytics startup to accelerate roadmap by 18 months',
          'Restructure sales organization around vertical specialization',
          'Launch partner certification program targeting 200 consultancies',
          'Establish innovation lab with dedicated $8M annual budget',
          'Implement continuous discovery framework with quarterly customer panels',
        ], { fontSize: 17 }), {
          id: 's8-list-body', x: 1020, y: below('s8-list-head', { gap: 24 }), w: 740,
        }),

        templateLabel('Template: Strategic Actions with Photo', 's8-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 9 — COMPARISON TABLE (ice-blue bg)
    // Template 9: Comparison Table
    // ================================================================
    {
      id: 'financial-summary',
      background: C.bgPrimary,
      notes: 'Financial Summary — Rotated heading left, comparison table with 3 scenario columns and donut charts.',
      elements: [
        brandWordmark('s9-brand'),
        topRule('s9-rule'),

        // Rotated heading
        rotatedHeading('Financial\u2003Summary', 's9-rot-heading', { x: 55, y: 680, fontSize: 68 }),
        rotatedSubLabel('ARR & CUSTOMER GROWTH', 's9-rot-label', { x: 175, y: 530 }),

        // Vertical divider after heading zone
        verticalDivider('s9-div1', 360, 100, 880),

        // Table — right ~65% of slide
        ...(() => {
          const elements = [];
          const tableX = 420;
          const tableW = 1380;
          const colCount = 3;
          const labelW = 260;
          const dataW = (tableW - labelW) / colCount;
          const headerY = 150;

          // Column headers
          const scenarios = ['Scenario 1', 'Scenario 2', 'Scenario 3'];
          scenarios.forEach((name, i) => {
            const x = tableX + labelW + i * dataW;
            elements.push(
              el(`<p style="font-family:${SERIF};font-style:italic;font-size:22px;font-weight:400;color:${C.textPrimary};text-align:center;">${name}</p>`, {
                id: `s9-col-${i}`, x, y: headerY, w: dataW,
              }),
              // Thick blue bar under header
              el('', {
                id: `s9-bar-${i}`, x: x + 20, y: below(`s9-col-${i}`, { gap: 12 }), w: dataW - 40, h: 5,
                style: { background: C.borderDark },
              }),
            );
          });

          // Data rows
          const rows = [
            { label: 'Revenue Growth', values: ['87%', '52%', '31%'], hasDonut: true, pcts: [87, 52, 31] },
            { label: 'Market Share', values: ['64%', '45%', '28%'], hasDonut: true, pcts: [64, 45, 28] },
            { label: 'Projected ARR', values: ['$90M', '$68M', '$52M'], hasDonut: false },
            { label: 'Enterprise Users', values: ['12,800', '9,200', '7,100'], hasDonut: false },
            { label: 'NPS Score', values: ['78', '65', '54'], hasDonut: false },
          ];

          let prevRowId = 's9-bar-0';
          rows.forEach((row, ri) => {
            const rowY = below(prevRowId, { gap: ri === 0 ? 28 : 20 });

            // Row label
            elements.push(
              el(`<p style="font-family:${SANS};font-size:16px;font-weight:600;color:${C.textPrimary};font-style:italic;">${row.label}</p>`, {
                id: `s9-rowlabel-${ri}`, x: tableX, y: rowY, w: labelW,
              }),
            );

            // Row values
            row.values.forEach((val, vi) => {
              const x = tableX + labelW + vi * dataW;
              if (row.hasDonut) {
                const pct = row.pcts[vi];
                elements.push(
                  el(`<div style="display:flex;align-items:center;justify-content:center;gap:12px;">
                    ${donutSVG(pct, 48, 5, C.border, C.accent1)}
                    <span style="font-family:${SANS};font-size:22px;font-weight:600;color:${C.textPrimary};">${val}</span>
                  </div>`, {
                    id: `s9-val-${ri}-${vi}`, x, y: rowY, w: dataW,
                  }),
                );
              } else {
                elements.push(
                  el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};text-align:center;">${val}</p>`, {
                    id: `s9-val-${ri}-${vi}`, x, y: rowY, w: dataW,
                  }),
                );
              }
            });

            // Thin horizontal divider after row
            elements.push(
              el('', {
                id: `s9-rowdiv-${ri}`, x: tableX, y: below(`s9-rowlabel-${ri}`, { gap: 16 }), w: tableW, h: 1,
                style: { background: C.border },
              }),
            );

            prevRowId = `s9-rowdiv-${ri}`;
          });

          return elements;
        })(),

        templateLabel('Template: Comparison Table', 's9-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 10 — CLOSING / THANK YOU (full cobalt bg)
    // Template 12: Closing / Thank You Slide
    // ================================================================
    {
      id: 'closing',
      background: C.bgDark,
      notes: 'Closing slide — Full cobalt blue background. Fluid wave left, Thank You in large white Playfair italic right.',
      elements: [
        // Fluid-wave decorative panel (left ~38%)
        el('', {
          id: 's10-wave-bg', x: 0, y: 0, w: 730, h: 1080,
          layer: 'bg',
          style: {
            background: `linear-gradient(160deg, ${C.bgDarkDeep} 0%, ${C.bgDark} 40%, #4A6AE8 75%, ${C.bgDark} 100%)`,
          },
        }),
        el('', {
          id: 's10-wave-accent', x: 180, y: 200, w: 520, h: 700,
          layer: 'bg',
          style: {
            background: `radial-gradient(ellipse at 40% 45%, rgba(74,106,232,0.45) 0%, transparent 70%)`,
            borderRadius: '50%',
          },
          allowOverlap: true,
        }),

        // Brand wordmark — top-left, white
        brandWordmark('s10-brand', true),

        // "Thank You" — right half, centered vertically
        el(`<h1 style="font-family:${SERIF};font-style:italic;font-size:96px;font-weight:400;color:${C.textOnDark};line-height:1.1;text-align:center;">Thank You</h1>`, {
          id: 's10-thankyou', x: 820, y: 380, w: 940,
        }),

        // Contact info
        el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:rgba(255,255,255,0.55);text-align:center;line-height:1.6;">stratocorp.io/innovation<br>innovation@stratocorp.io</p>`, {
          id: 's10-contact', x: 920, y: below('s10-thankyou', { gap: 40 }), w: 740,
        }),

        templateLabelOnDark('Template: Closing / Thank You', 's10-tpl'),
      ],
    },

  ];

  return await render(slides);
}
