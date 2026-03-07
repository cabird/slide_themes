// slides.js — "The Global Artisan Chocolate Market"
// Slate Coral Corporate theme — investor briefing style

import {
  init, render, safeRect, splitRect, el, below,
} from '../slidekit.bundle.min.js';

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:    '#E8EAF0',
  bgSecondary:  '#152244',
  bgAccent:     '#F5365C',
  textPrimary:  '#152244',
  textSecondary:'#4A5568',
  textOnDark:   '#FFFFFF',
  textOnAccent: '#FFFFFF',
  accent1:      '#F5365C',  // coral-red
  accent2:      '#152244',  // navy
  accent3:      '#6B1D3A',  // burgundy
  border:       '#CBD5E0',
};

const FONT = 'Josefin Sans';

const IMAGES = {
  heroBg:           './images/hero-bg.jpg',
  tocPanel:         './images/toc-panel.jpg',
  segmentArtisan:   './images/segment-artisan.jpg',
  segmentOrigin:    './images/segment-single-origin.jpg',
  segmentPremium:   './images/segment-premium.jpg',
  highlightsPhoto:  './images/highlights-photo.jpg',
  supplyPhoto:      './images/supply-photo.jpg',
  prefSustainable:  './images/pref-sustainable.jpg',
  prefFlavor:       './images/pref-flavor.jpg',
  prefPackaging:    './images/pref-packaging.jpg',
  qaBg:             './images/qa-bg.jpg',
};

// -- Helpers ---------------------------------------------------------------------

function templateLabel(name, id) {
  return el(
    `<p style="font-family:${FONT},sans-serif;font-size:13px;font-weight:400;color:rgba(21,34,68,0.18);letter-spacing:0.02em;">Template: ${name}</p>`,
    { id, x: 120, y: 1040, w: 340 },
  );
}

function topRightTag(id) {
  return el(
    `<div style="background:${C.accent1};padding:12px 28px;">
      <p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:400;color:${C.textOnAccent};text-transform:uppercase;letter-spacing:0.15em;line-height:1.0;">Artisan Chocolate Briefing</p>
    </div>`,
    { id, x: 1920, y: 20, w: 380, anchor: 'tr' },
  );
}

function sectionDivider(slideId, num, title, iconSvg) {
  return {
    id: slideId,
    background: C.bgPrimary,
    elements: [
      // Large coral-red number
      el(`<p style="font-family:${FONT},sans-serif;font-size:350px;font-weight:400;color:${C.accent1};line-height:0.9;opacity:0.9;">${num}</p>`, {
        id: `${slideId}-num`, x: 200, y: 160, w: 380,
      }),

      // Line-style icon
      el(`<div style="color:${C.accent2};">${iconSvg}</div>`, {
        id: `${slideId}-icon`, x: 680, y: 300, w: 56, h: 56,
      }),

      // Section title
      el(`<h2 style="font-family:${FONT},sans-serif;font-size:64px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">${title}</h2>`, {
        id: `${slideId}-title`, x: 680, y: below(`${slideId}-icon`, { gap: 24 }), w: 900,
      }),

      // Top-right tag
      topRightTag(`${slideId}-tag`),

      // Template label
      templateLabel('Section Divider', `${slideId}-tpl`),
    ],
  };
}

// Simple ring indicator using conic-gradient
function ringIndicator(id, x, y, size, pct, color, label) {
  const trackColor = 'rgba(255,255,255,0.25)';
  return [
    el(`<div style="width:${size}px;height:${size}px;border-radius:50%;background:conic-gradient(${color} 0deg, ${color} ${pct * 3.6}deg, ${trackColor} ${pct * 3.6}deg, ${trackColor} 360deg);display:flex;align-items:center;justify-content:center;">
      <div style="width:${size - 14}px;height:${size - 14}px;border-radius:50%;background:${C.accent1};display:flex;align-items:center;justify-content:center;">
        <span style="font-family:${FONT},sans-serif;font-size:${Math.round(size * 0.26)}px;font-weight:400;color:${C.textOnAccent};">${pct}%</span>
      </div>
    </div>`, {
      id: `${id}-ring`, x, y, w: size, h: size,
    }),
    el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:400;color:${C.textOnAccent};line-height:1.4;">${label}</p>`, {
      id: `${id}-label`, x: x + size + 16, y: y + Math.round(size / 2) - 10, w: 200,
    }),
  ];
}

// Ring for light backgrounds
function ringIndicatorLight(id, x, y, size, pct, color, label) {
  const trackColor = '#CBD5E0';
  return [
    el(`<div style="width:${size}px;height:${size}px;border-radius:50%;background:conic-gradient(${color} 0deg, ${color} ${pct * 3.6}deg, ${trackColor} ${pct * 3.6}deg, ${trackColor} 360deg);display:flex;align-items:center;justify-content:center;">
      <div style="width:${size - 14}px;height:${size - 14}px;border-radius:50%;background:${C.bgPrimary};display:flex;align-items:center;justify-content:center;">
        <span style="font-family:${FONT},sans-serif;font-size:${Math.round(size * 0.26)}px;font-weight:400;color:${C.textPrimary};">${pct}%</span>
      </div>
    </div>`, {
      id: `${id}-ring`, x, y, w: size, h: size,
    }),
    el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:400;color:${C.textPrimary};line-height:1.4;">${label}</p>`, {
      id: `${id}-label`, x: x + size + 16, y: y + Math.round(size / 2) - 10, w: 200,
    }),
  ];
}

// -- SVG Icons (line-style, 2px stroke, navy) ------------------------------------

const ICONS = {
  market: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#152244" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="6" width="40" height="36" rx="0"/>
    <polyline points="10,34 18,22 26,28 38,14"/>
    <circle cx="38" cy="14" r="2"/>
  </svg>`,
  supply: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#152244" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4,36 L16,36 L16,20 L4,20 Z"/>
    <path d="M18,36 L30,36 L30,12 L18,12 Z"/>
    <path d="M32,36 L44,36 L44,24 L32,24 Z"/>
    <line x1="10" y1="16" x2="10" y2="12"/>
    <line x1="24" y1="8" x2="24" y2="4"/>
    <line x1="38" y1="20" x2="38" y2="16"/>
  </svg>`,
  trends: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#152244" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="24" cy="24" r="20"/>
    <path d="M24,4 L24,24 L40,32"/>
    <path d="M14,10 Q24,20 34,10"/>
  </svg>`,
};

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Josefin Sans', weights: [300, 400, 700], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: HERO TITLE
    // ================================================================
    {
      id: 'hero-title',
      background: C.bgPrimary,
      elements: [
        // Full-bleed background image with white overlay
        el(`<img src="${IMAGES.heroBg}" style="width:100%;height:100%;object-fit:cover;">`, {
          id: 's1-bg-img', x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
        }),
        el('', {
          id: 's1-bg-overlay', x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
          style: { background: 'rgba(232,234,240,0.70)' },
        }),

        // Company name tag
        el(`<div style="background:${C.accent1};padding:10px 24px;display:inline-block;">
          <p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:400;color:${C.textOnAccent};text-transform:uppercase;letter-spacing:0.15em;line-height:1.0;">Cacao &amp; Vine</p>
        </div>`, {
          id: 's1-company', x: 960, y: 280, w: 220, anchor: 'tc',
        }),

        // Hero headline
        el(`<h1 style="font-family:${FONT},sans-serif;font-size:108px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.15em;line-height:1.1;text-align:center;">The Global Artisan<br>Chocolate Market</h1>`, {
          id: 's1-title', x: 960, y: below('s1-company', { gap: 32 }), w: 1500, anchor: 'tc',
        }),

        // Subtitle
        el(`<p style="font-family:${FONT},sans-serif;font-size:26px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;text-align:center;line-height:1.2;">Investor Briefing &mdash; Q4 2026</p>`, {
          id: 's1-subtitle', x: 960, y: below('s1-title', { gap: 28 }), w: 700, anchor: 'tc',
        }),

        // Theme name
        el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:400;color:rgba(21,34,68,0.12);">Theme: slate-coral-corporate</p>`, {
          id: 's1-theme', x: 1800, y: 1040, w: 280, anchor: 'tr',
        }),

        templateLabel('Hero Title', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2: TABLE OF CONTENTS
    // ================================================================
    {
      id: 'table-of-contents',
      background: C.bgPrimary,
      elements: (() => {
        const tocEntries = [
          { num: '03', title: 'Market Overview' },
          { num: '06', title: 'Production & Supply' },
          { num: '09', title: 'Consumer Trends' },
          { num: '12', title: 'Stats Dashboard' },
          { num: '13', title: 'Expert Insights' },
          { num: '15', title: 'Q&A' },
        ];

        const elements = [
          // Left panel — coral-red with B&W image
          el('', {
            id: 's2-left-bg', x: 0, y: 0, w: 640, h: 1080, layer: 'bg',
            style: { background: C.bgAccent },
          }),
          el(`<img src="${IMAGES.tocPanel}" style="width:100%;height:100%;object-fit:cover;filter:grayscale(100%) contrast(1.2);opacity:0.3;">`, {
            id: 's2-left-img', x: 0, y: 0, w: 640, h: 1080, layer: 'bg',
          }),

          // "Table of Contents" heading on right
          el(`<h2 style="font-family:${FONT},sans-serif;font-size:48px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">Table of Contents</h2>`, {
            id: 's2-heading', x: 740, y: 120, w: 900,
          }),
        ];

        // TOC entries
        const startY = 260;
        const entryGap = 110;
        for (let i = 0; i < tocEntries.length; i++) {
          const e = tocEntries[i];
          const yPos = startY + i * entryGap;

          // Page number
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:42px;font-weight:400;color:${C.accent1};line-height:1.0;">${e.num}</p>`, {
              id: `s2-num-${i}`, x: 740, y: yPos, w: 80,
            }),
          );
          // Section title
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:22px;font-weight:400;color:${C.textPrimary};line-height:1.3;letter-spacing:0.02em;">${e.title}</p>`, {
              id: `s2-entry-${i}`, x: 850, y: yPos + 8, w: 700,
            }),
          );
          // Separator line
          if (i < tocEntries.length - 1) {
            elements.push(
              el('', {
                id: `s2-sep-${i}`, x: 740, y: yPos + 70, w: 860, h: 1,
                style: { background: C.border },
              }),
            );
          }
        }

        elements.push(templateLabel('Table of Contents', 's2-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3: SECTION DIVIDER — 1 Market Overview
    // ================================================================
    sectionDivider('section-1', '1', 'Market<br>Overview', ICONS.market),

    // ================================================================
    // SLIDE 4: THREE-COLUMN PHOTO GRID
    // ================================================================
    {
      id: 'three-col-grid',
      background: C.bgPrimary,
      elements: (() => {
        const cols = 3;
        const gap = 32;
        const colW = (safe.w - gap * (cols - 1)) / cols;
        const imgH = 480;
        const gridY = safe.y + 60;

        const segments = [
          { img: IMAGES.segmentArtisan, title: 'Artisan Bars', desc: 'Small-batch bean-to-bar makers crafting single-estate dark and milk varieties with unique flavor profiles.' },
          { img: IMAGES.segmentOrigin, title: 'Single-Origin', desc: 'Estate-specific cacao sourced from premier growing regions in Ghana, Ecuador, and Madagascar.' },
          { img: IMAGES.segmentPremium, title: 'Premium Confections', desc: 'Luxury truffles, pralines, and filled chocolates positioned at the highest price tiers.' },
        ];

        const elements = [];

        for (let i = 0; i < segments.length; i++) {
          const s = segments[i];
          const cx = safe.x + i * (colW + gap);

          // B&W photo
          elements.push(
            el(`<img src="${s.img}" style="width:100%;height:100%;object-fit:cover;filter:grayscale(100%) contrast(1.2);">`, {
              id: `s4-img-${i}`, x: cx, y: gridY, w: colW, h: imgH,
            }),
          );
          // Title
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:22px;font-weight:700;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;line-height:1.3;">${s.title}</p>`, {
              id: `s4-title-${i}`, x: cx, y: below(`s4-img-${i}`, { gap: 20 }), w: colW,
            }),
          );
          // Description
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:17px;font-weight:400;color:${C.textSecondary};line-height:1.5;">${s.desc}</p>`, {
              id: `s4-desc-${i}`, x: cx, y: below(`s4-title-${i}`, { gap: 10 }), w: colW,
            }),
          );
        }

        elements.push(templateLabel('Three-Column Photo Grid', 's4-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 5: KEY HIGHLIGHTS — Photo + Data List
    // ================================================================
    {
      id: 'key-highlights',
      background: C.bgPrimary,
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.45, gap: 60 });

        const dataPoints = [
          { label: 'Global Market Size:', value: '$18.7 Billion (2026)' },
          { label: 'Annual Growth Rate:', value: '8.2% CAGR (2021\u20132026)' },
          { label: 'Top Region:', value: 'Western Europe (42% share)' },
          { label: 'Average Price Point:', value: '$14.50 per 100g bar' },
          { label: 'Active Artisan Brands:', value: '340+ worldwide' },
        ];

        const elements = [
          // Left: Cocoa pod photo
          el(`<img src="${IMAGES.highlightsPhoto}" style="width:100%;height:100%;object-fit:cover;">`, {
            id: 's5-photo', x: left.x, y: left.y, w: left.w, h: left.h,
          }),

          // Right: heading
          el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:700;color:${C.accent1};text-transform:uppercase;letter-spacing:0.12em;line-height:1.0;">Key Highlights</p>`, {
            id: 's5-eyebrow', x: right.x, y: right.y + 40, w: right.w,
          }),
          el(`<h2 style="font-family:${FONT},sans-serif;font-size:40px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">Market at<br>a Glance</h2>`, {
            id: 's5-title', x: right.x, y: below('s5-eyebrow', { gap: 16 }), w: right.w,
          }),
        ];

        let lastId = 's5-title';
        for (let i = 0; i < dataPoints.length; i++) {
          const d = dataPoints[i];
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:15px;font-weight:700;color:${C.accent3};line-height:1.3;letter-spacing:0.02em;">${d.label}</p>`, {
              id: `s5-label-${i}`, x: right.x, y: below(lastId, { gap: i === 0 ? 36 : 24 }), w: right.w,
            }),
          );
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.3;">${d.value}</p>`, {
              id: `s5-val-${i}`, x: right.x, y: below(`s5-label-${i}`, { gap: 4 }), w: right.w,
            }),
          );
          lastId = `s5-val-${i}`;
        }

        elements.push(templateLabel('Photo + Data List', 's5-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 6: SECTION DIVIDER — 2 Production & Supply
    // ================================================================
    sectionDivider('section-2', '2', 'Production<br>&amp; Supply', ICONS.supply),

    // ================================================================
    // SLIDE 7: CONTENT + PHOTO SPLIT
    // ================================================================
    {
      id: 'content-photo-split',
      background: C.bgPrimary,
      elements: (() => {
        return [
          // Left: B&W photo of chocolate tempering (flush to left)
          el(`<img src="${IMAGES.supplyPhoto}" style="width:100%;height:100%;object-fit:cover;filter:grayscale(100%) contrast(1.2);">`, {
            id: 's7-photo', x: 0, y: 0, w: 860, h: 1080, layer: 'bg',
          }),

          // Right: content area
          el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:700;color:${C.accent1};text-transform:uppercase;letter-spacing:0.12em;">Supply Chain</p>`, {
            id: 's7-eyebrow', x: 950, y: 140, w: 820,
          }),
          el(`<h2 style="font-family:${FONT},sans-serif;font-size:40px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">From Bean<br>to Shelf</h2>`, {
            id: 's7-title', x: 950, y: below('s7-eyebrow', { gap: 16 }), w: 820,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.7;">The artisan chocolate supply chain begins at estate-level cacao farms in equatorial regions. Fermentation and drying are managed on-site to preserve the unique terroir of each harvest.</p>`, {
            id: 's7-body1', x: 950, y: below('s7-title', { gap: 28 }), w: 820,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.7;">Beans are shipped directly to small-batch manufacturers who control every stage of production: roasting, cracking, winnowing, refining, conching, and tempering. This vertical integration ensures quality consistency and traceability.</p>`, {
            id: 's7-body2', x: 950, y: below('s7-body1', { gap: 20 }), w: 820,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.7;">Average lead time from harvest to retail shelf is <strong style="color:${C.textPrimary};">14\u201318 weeks</strong>. Logistics costs represent 12% of final retail price, down from 19% in 2020 due to improved direct-trade networks.</p>`, {
            id: 's7-body3', x: 950, y: below('s7-body2', { gap: 20 }), w: 820,
          }),

          templateLabel('Content + Photo Split', 's7-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 8: BAR CHART + SUMMARY
    // ================================================================
    {
      id: 'chart-summary',
      background: C.bgPrimary,
      elements: (() => {
        // Chart data (fictional)
        const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
        const revenue = [42, 51, 58, 68]; // millions
        const cogs    = [24, 28, 31, 36];
        const net     = [12, 16, 19, 24];
        const maxVal  = 70;
        const barH    = 360;
        const chartX  = 140;
        const chartY  = 220;
        const groupW  = 200;
        const barW    = 42;
        const barGap  = 8;

        const elements = [
          // Left panel background
          el('', {
            id: 's8-left-bg', x: 0, y: 0, w: 1140, h: 1080, layer: 'bg',
            style: { background: C.bgPrimary },
          }),
          // Right panel background (coral-red)
          el('', {
            id: 's8-right-bg', x: 1140, y: 0, w: 780, h: 1080, layer: 'bg',
            style: { background: C.accent1 },
          }),

          // Chart heading
          el(`<h2 style="font-family:${FONT},sans-serif;font-size:36px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">Quarterly Performance</h2>`, {
            id: 's8-chart-title', x: 140, y: 100, w: 800,
          }),

          // Legend
          el(`<div style="display:flex;gap:24px;align-items:center;">
            <div style="display:flex;align-items:center;gap:8px;"><div style="width:14px;height:14px;background:${C.accent2};"></div><span style="font-family:${FONT},sans-serif;font-size:13px;color:${C.textSecondary};">Revenue</span></div>
            <div style="display:flex;align-items:center;gap:8px;"><div style="width:14px;height:14px;background:${C.accent3};"></div><span style="font-family:${FONT},sans-serif;font-size:13px;color:${C.textSecondary};">COGS</span></div>
            <div style="display:flex;align-items:center;gap:8px;"><div style="width:14px;height:14px;background:${C.accent1};"></div><span style="font-family:${FONT},sans-serif;font-size:13px;color:${C.textSecondary};">Net Income</span></div>
          </div>`, {
            id: 's8-legend', x: 140, y: 170, w: 600,
          }),
        ];

        // Draw bars for each quarter
        for (let q = 0; q < 4; q++) {
          const groupX = chartX + q * groupW + 40;
          const revH = Math.round((revenue[q] / maxVal) * barH);
          const cogsH = Math.round((cogs[q] / maxVal) * barH);
          const netH = Math.round((net[q] / maxVal) * barH);

          // Revenue bar (navy)
          elements.push(
            el('', {
              id: `s8-bar-rev-${q}`, x: groupX, y: chartY + barH - revH, w: barW, h: revH,
              style: { background: C.accent2 },
            }),
          );
          // COGS bar (burgundy)
          elements.push(
            el('', {
              id: `s8-bar-cogs-${q}`, x: groupX + barW + barGap, y: chartY + barH - cogsH, w: barW, h: cogsH,
              style: { background: C.accent3 },
            }),
          );
          // Net bar (coral)
          elements.push(
            el('', {
              id: `s8-bar-net-${q}`, x: groupX + (barW + barGap) * 2, y: chartY + barH - netH, w: barW, h: netH,
              style: { background: C.accent1 },
            }),
          );

          // Revenue label on top
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:12px;font-weight:400;color:${C.textSecondary};text-align:center;">$${revenue[q]}M</p>`, {
              id: `s8-lbl-rev-${q}`, x: groupX - 4, y: chartY + barH - revH - 22, w: 50,
            }),
          );

          // Quarter label below bars
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:15px;font-weight:400;color:${C.textPrimary};text-align:center;letter-spacing:0.05em;">${quarters[q]}</p>`, {
              id: `s8-qlbl-${q}`, x: groupX, y: chartY + barH + 16, w: groupW - 60,
            }),
          );
        }

        // Chart baseline
        elements.push(
          el('', {
            id: 's8-baseline', x: chartX, y: chartY + barH, w: 840, h: 1,
            style: { background: C.border },
          }),
        );

        // EPS row below chart
        const epsVals = ['$0.31', '$0.38', '$0.44', '$0.56'];
        elements.push(
          el(`<p style="font-family:${FONT},sans-serif;font-size:13px;font-weight:700;color:${C.accent3};text-transform:uppercase;letter-spacing:0.05em;">EPS</p>`, {
            id: 's8-eps-label', x: 140, y: chartY + barH + 80, w: 60,
          }),
        );
        for (let q = 0; q < 4; q++) {
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:28px;font-weight:400;color:${C.textPrimary};text-align:center;">${epsVals[q]}</p>`, {
              id: `s8-eps-${q}`, x: chartX + q * groupW + 40, y: chartY + barH + 70, w: groupW - 60,
            }),
          );
        }

        // RIGHT PANEL: summary with ring indicators
        elements.push(
          el(`<h3 style="font-family:${FONT},sans-serif;font-size:28px;font-weight:300;color:${C.textOnAccent};text-transform:uppercase;letter-spacing:0.12em;line-height:1.2;">Financial<br>Summary</h3>`, {
            id: 's8-summary-title', x: 1200, y: 120, w: 640,
          }),
        );

        // Ring indicators on coral background
        elements.push(
          ...ringIndicator('s8-r1', 1200, 280, 70, 68, C.textOnAccent, 'Revenue growth YoY'),
          ...ringIndicator('s8-r2', 1200, 400, 70, 42, C.textOnAccent, 'Gross margin expansion'),
          ...ringIndicator('s8-r3', 1200, 520, 70, 85, C.textOnAccent, 'Direct-trade sourcing'),
        );

        elements.push(
          el(`<p style="font-family:${FONT},sans-serif;font-size:16px;font-weight:400;color:${C.textOnAccent};line-height:1.6;opacity:0.9;">Strong quarterly progression driven by expanding DTC channels and premium product mix. Net income acceleration reflects improved operational efficiency and lower raw material costs in H2.</p>`, {
            id: 's8-summary-body', x: 1200, y: 650, w: 620,
          }),
        );

        elements.push(templateLabel('Bar Chart + Summary', 's8-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 9: SECTION DIVIDER — 3 Consumer Trends
    // ================================================================
    sectionDivider('section-3', '3', 'Consumer<br>Trends', ICONS.trends),

    // ================================================================
    // SLIDE 10: COLOR SPLIT — Two-Column
    // ================================================================
    {
      id: 'color-split',
      background: C.bgPrimary,
      elements: (() => {
        const elements = [
          // Left panel — coral-red
          el('', {
            id: 's10-left-bg', x: 0, y: 0, w: 960, h: 1080, layer: 'bg',
            style: { background: C.accent1 },
          }),
          // Right panel — pale bg
          el('', {
            id: 's10-right-bg', x: 960, y: 0, w: 960, h: 1080, layer: 'bg',
            style: { background: C.bgPrimary },
          }),

          // LEFT content: Direct-to-Consumer
          el(`<h3 style="font-family:${FONT},sans-serif;font-size:36px;font-weight:300;color:${C.textOnAccent};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">Direct-to-<br>Consumer</h3>`, {
            id: 's10-left-title', x: 80, y: 120, w: 780,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:17px;font-weight:400;color:${C.textOnAccent};line-height:1.6;opacity:0.9;">E-commerce and subscription models now represent 34% of artisan chocolate sales, up from 18% in 2021. Brands like Solstice Cacao and Velvet & Bean have built loyal followings through direct online sales, tasting clubs, and curated gift boxes.</p>`, {
            id: 's10-left-body', x: 80, y: below('s10-left-title', { gap: 24 }), w: 780,
          }),

          // Ring indicators on coral
          ...ringIndicator('s10-lr1', 80, 480, 64, 34, C.textOnAccent, 'DTC sales share'),
          ...ringIndicator('s10-lr2', 80, 580, 64, 72, C.textOnAccent, 'Subscription retention'),
          ...ringIndicator('s10-lr3', 80, 680, 64, 28, C.textOnAccent, 'YoY DTC growth'),

          el(`<p style="font-family:${FONT},sans-serif;font-size:48px;font-weight:400;color:${C.textOnAccent};line-height:1.0;opacity:0.15;">$6.4B</p>`, {
            id: 's10-left-big', x: 80, y: 860, w: 400,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:400;color:${C.textOnAccent};opacity:0.7;">DTC Channel Revenue (2026)</p>`, {
            id: 's10-left-sublabel', x: 80, y: below('s10-left-big', { gap: 8 }), w: 400,
          }),

          // RIGHT content: Retail Partnerships
          el(`<h3 style="font-family:${FONT},sans-serif;font-size:36px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">Retail<br>Partnerships</h3>`, {
            id: 's10-right-title', x: 1040, y: 120, w: 780,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:17px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Specialty retailers and high-end grocers remain the dominant distribution channel at 48% of total volume. Key partners include Maison Luxe, Artisan Collective, and premium department store chains across Western Europe and North America.</p>`, {
            id: 's10-right-body', x: 1040, y: below('s10-right-title', { gap: 24 }), w: 780,
          }),

          // Ring indicators on light bg
          ...ringIndicatorLight('s10-rr1', 1040, 480, 64, 48, C.accent2, 'Retail channel share'),
          ...ringIndicatorLight('s10-rr2', 1040, 580, 64, 91, C.accent2, 'Partner satisfaction'),
          ...ringIndicatorLight('s10-rr3', 1040, 680, 64, 15, C.accent2, 'New store openings'),

          el(`<p style="font-family:${FONT},sans-serif;font-size:48px;font-weight:400;color:${C.textPrimary};line-height:1.0;opacity:0.15;">$9.0B</p>`, {
            id: 's10-right-big', x: 1040, y: 860, w: 400,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:400;color:${C.textSecondary};">Retail Channel Revenue (2026)</p>`, {
            id: 's10-right-sublabel', x: 1040, y: below('s10-right-big', { gap: 8 }), w: 400,
          }),

          // Vertical divider
          el('', {
            id: 's10-divider', x: 960, y: 80, w: 1, h: 920,
            style: { background: C.border },
          }),

          templateLabel('Two-Column Color Split', 's10-tpl'),
        ];
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 11: THREE-COL PHOTO GRID + HEADING
    // ================================================================
    {
      id: 'grid-with-heading',
      background: C.bgPrimary,
      elements: (() => {
        const cols = 3;
        const gap = 32;
        const colW = (safe.w - gap * (cols - 1)) / cols;
        const imgH = 400;
        const gridY = 240;

        const prefs = [
          { img: IMAGES.prefSustainable, title: 'Sustainability', desc: 'Consumers increasingly prioritize ethically sourced, fair-trade certified, and carbon-neutral production practices.' },
          { img: IMAGES.prefFlavor, title: 'Flavor Innovation', desc: 'New flavor profiles combining exotic spices, florals, and fermented ingredients are driving premium purchasing decisions.' },
          { img: IMAGES.prefPackaging, title: 'Artisan Packaging', desc: 'Hand-wrapped, limited-edition packaging and storytelling-driven labels boost perceived value and gift-market appeal.' },
        ];

        const elements = [
          // Full-width heading
          el(`<h2 style="font-family:${FONT},sans-serif;font-size:44px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;text-align:center;line-height:1.15;">Key Consumer Preferences</h2>`, {
            id: 's11-heading', x: 960, y: 110, w: 1200, anchor: 'tc',
          }),
        ];

        for (let i = 0; i < prefs.length; i++) {
          const p = prefs[i];
          const cx = safe.x + i * (colW + gap);

          // B&W photo
          elements.push(
            el(`<img src="${p.img}" style="width:100%;height:100%;object-fit:cover;filter:grayscale(100%) contrast(1.2);">`, {
              id: `s11-img-${i}`, x: cx, y: gridY, w: colW, h: imgH,
            }),
          );
          // Title
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:700;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;line-height:1.3;">${p.title}</p>`, {
              id: `s11-title-${i}`, x: cx, y: below(`s11-img-${i}`, { gap: 20 }), w: colW,
            }),
          );
          // Description
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.5;">${p.desc}</p>`, {
              id: `s11-desc-${i}`, x: cx, y: below(`s11-title-${i}`, { gap: 10 }), w: colW,
            }),
          );
        }

        elements.push(templateLabel('Three-Col Photo Grid + Heading', 's11-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 12: STATS / KPI DASHBOARD
    // ================================================================
    {
      id: 'stats-dashboard',
      background: C.bgPrimary,
      elements: (() => {
        const kpis = [
          { value: '$18.7B', label: 'Global Market Size', sub: '2026 Estimate' },
          { value: '8.2%', label: 'CAGR Growth Rate', sub: '2021\u20132026' },
          { value: '340+', label: 'Artisan Brands', sub: 'Worldwide' },
          { value: '62%', label: 'Repeat Purchase Rate', sub: 'Premium Segment' },
        ];

        const cols = 4;
        const gap = 40;
        const cardW = (safe.w - gap * (cols - 1)) / cols;
        const gridY = 340;

        const elements = [
          // Heading
          el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:700;color:${C.accent1};text-transform:uppercase;letter-spacing:0.12em;">Market Snapshot</p>`, {
            id: 's12-eyebrow', x: safe.x, y: safe.y + 40, w: 400,
          }),
          el(`<h2 style="font-family:${FONT},sans-serif;font-size:44px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">Key Performance<br>Indicators</h2>`, {
            id: 's12-title', x: safe.x, y: below('s12-eyebrow', { gap: 16 }), w: 800,
          }),
        ];

        for (let i = 0; i < kpis.length; i++) {
          const k = kpis[i];
          const cx = safe.x + i * (cardW + gap);

          // Accent bar at top of each KPI
          elements.push(
            el('', {
              id: `s12-bar-${i}`, x: cx, y: gridY, w: 60, h: 4,
              style: { background: C.accent1 },
            }),
          );
          // Big number
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:64px;font-weight:400;color:${C.textPrimary};line-height:1.0;">${k.value}</p>`, {
              id: `s12-val-${i}`, x: cx, y: below(`s12-bar-${i}`, { gap: 20 }), w: cardW,
            }),
          );
          // Label
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:700;color:${C.textPrimary};line-height:1.3;letter-spacing:0.02em;">${k.label}</p>`, {
              id: `s12-label-${i}`, x: cx, y: below(`s12-val-${i}`, { gap: 12 }), w: cardW,
            }),
          );
          // Sub
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.3;">${k.sub}</p>`, {
              id: `s12-sub-${i}`, x: cx, y: below(`s12-label-${i}`, { gap: 6 }), w: cardW,
            }),
          );
        }

        // Supporting context row
        elements.push(
          el(`<p style="font-family:${FONT},sans-serif;font-size:17px;font-weight:400;color:${C.textSecondary};line-height:1.6;">The artisan chocolate market continues to outpace conventional confectionery growth, driven by premiumization, sustainability demands, and expanding DTC channels. Western Europe leads consumption, while Asia-Pacific represents the fastest-growing opportunity at 14.3% CAGR.</p>`, {
            id: 's12-context', x: safe.x, y: 740, w: safe.w,
          }),
        );

        // Horizontal divider
        elements.push(
          el('', {
            id: 's12-divider', x: safe.x, y: 720, w: safe.w, h: 1,
            style: { background: C.border },
          }),
        );

        elements.push(templateLabel('Stats / KPI Dashboard', 's12-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 13: QUOTE / TESTIMONIAL
    // ================================================================
    {
      id: 'quote',
      background: C.bgPrimary,
      elements: [
        // Large decorative quotation mark
        el(`<p style="font-family:${FONT},sans-serif;font-size:280px;font-weight:400;color:${C.accent1};line-height:0.8;opacity:0.15;">\u201C</p>`, {
          id: 's13-quote-mark', x: 120, y: 80, w: 300,
        }),

        // Quote text
        el(`<p style="font-family:${FONT},sans-serif;font-size:34px;font-weight:300;color:${C.textPrimary};line-height:1.6;letter-spacing:0.02em;">The artisan chocolate movement represents a fundamental shift in how consumers value craft, provenance, and transparency. We are witnessing the emergence of chocolate as a fine-food category on par with specialty coffee and natural wine.</p>`, {
          id: 's13-quote', x: 200, y: 340, w: 1200,
        }),

        // Attribution
        el(`<p style="font-family:${FONT},sans-serif;font-size:16px;font-weight:700;color:${C.accent3};letter-spacing:0.05em;line-height:1.4;">Dr. Amara Osei</p>`, {
          id: 's13-author', x: 200, y: below('s13-quote', { gap: 40 }), w: 600,
        }),
        el(`<p style="font-family:${FONT},sans-serif;font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.4;">Director of Food Markets Research, Meridian Institute</p>`, {
          id: 's13-role', x: 200, y: below('s13-author', { gap: 6 }), w: 600,
        }),

        // Accent line
        el('', {
          id: 's13-accent-line', x: 200, y: below('s13-role', { gap: 32 }), w: 80, h: 3,
          style: { background: C.accent1 },
        }),

        templateLabel('Quote / Testimonial', 's13-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 14: PROCESS STEPS — Bean to Bar
    // ================================================================
    {
      id: 'process-steps',
      background: C.bgPrimary,
      elements: (() => {
        const steps = [
          { num: '01', title: 'Sourcing', desc: 'Ethically sourced cacao beans from estate farms in Ecuador, Ghana, and Madagascar with full traceability.', color: C.accent1 },
          { num: '02', title: 'Roasting', desc: 'Small-batch roasting at precise temperatures to develop complex flavor profiles unique to each origin.', color: C.accent2 },
          { num: '03', title: 'Tempering', desc: 'Controlled crystallization process ensuring glossy finish, satisfying snap, and optimal mouthfeel.', color: C.accent3 },
          { num: '04', title: 'Packaging', desc: 'Hand-wrapped in artisan-designed packaging with origin stories and tasting notes for each edition.', color: C.accent1 },
        ];

        const cols = 4;
        const gap = 40;
        const colW = (safe.w - gap * (cols - 1)) / cols;
        const stepsY = 380;

        const elements = [
          // Heading
          el(`<p style="font-family:${FONT},sans-serif;font-size:14px;font-weight:700;color:${C.accent1};text-transform:uppercase;letter-spacing:0.12em;">Our Process</p>`, {
            id: 's14-eyebrow', x: safe.x, y: safe.y + 40, w: 400,
          }),
          el(`<h2 style="font-family:${FONT},sans-serif;font-size:44px;font-weight:300;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.12em;line-height:1.15;">Bean to Bar</h2>`, {
            id: 's14-title', x: safe.x, y: below('s14-eyebrow', { gap: 16 }), w: 600,
          }),
          el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">The four essential stages that transform raw cacao into premium artisan chocolate.</p>`, {
            id: 's14-desc', x: safe.x, y: below('s14-title', { gap: 12 }), w: 800,
          }),
        ];

        // Connecting line between steps
        const lineY = stepsY + 24;
        const lineStartX = safe.x + colW / 2 + 30;
        const lineEndX = safe.x + (cols - 1) * (colW + gap) + colW / 2 - 30;
        elements.push(
          el('', {
            id: 's14-connect-line', x: lineStartX, y: lineY, w: lineEndX - lineStartX, h: 2,
            style: { background: `repeating-linear-gradient(90deg, ${C.border} 0px, ${C.border} 8px, transparent 8px, transparent 18px)` },
          }),
        );

        for (let i = 0; i < steps.length; i++) {
          const s = steps[i];
          const cx = safe.x + i * (colW + gap);
          const centerX = cx + colW / 2;

          // Step number circle
          elements.push(
            el(`<div style="width:48px;height:48px;background:${s.color};display:flex;align-items:center;justify-content:center;">
              <span style="font-family:${FONT},sans-serif;font-size:16px;font-weight:400;color:#FFFFFF;letter-spacing:0.05em;">${s.num}</span>
            </div>`, {
              id: `s14-circle-${i}`, x: centerX - 24, y: stepsY, w: 48, h: 48,
            }),
          );
          // Step title
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:22px;font-weight:700;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;line-height:1.3;text-align:center;">${s.title}</p>`, {
              id: `s14-step-title-${i}`, x: cx, y: below(`s14-circle-${i}`, { gap: 24 }), w: colW,
              style: { textAlign: 'center' },
            }),
          );
          // Step description
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.6;text-align:center;">${s.desc}</p>`, {
              id: `s14-step-desc-${i}`, x: cx, y: below(`s14-step-title-${i}`, { gap: 10 }), w: colW,
              style: { textAlign: 'center' },
            }),
          );
        }

        elements.push(templateLabel('Process / Steps Flow', 's14-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 15: Q&A — Full-Bleed Photo Overlay
    // ================================================================
    {
      id: 'qa-slide',
      background: C.bgSecondary,
      elements: [
        // Full-bleed background image
        el(`<img src="${IMAGES.qaBg}" style="width:100%;height:100%;object-fit:cover;">`, {
          id: 's15-bg-img', x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
        }),
        // Dark overlay
        el('', {
          id: 's15-overlay', x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
          style: { background: 'rgba(21,34,68,0.55)' },
        }),

        // Centered text
        el(`<h2 style="font-family:${FONT},sans-serif;font-size:72px;font-weight:300;color:${C.textOnDark};text-transform:uppercase;letter-spacing:0.15em;text-align:center;line-height:1.15;">Any Questions?</h2>`, {
          id: 's15-title', x: 960, y: 440, w: 1000, anchor: 'tc',
        }),
        el(`<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:400;color:rgba(255,255,255,0.7);text-align:center;letter-spacing:0.05em;line-height:1.4;">We welcome your questions and discussion</p>`, {
          id: 's15-subtitle', x: 960, y: below('s15-title', { gap: 24 }), w: 700, anchor: 'tc',
        }),

        templateLabel('Full-Bleed Photo Overlay', 's15-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 16: CLOSING / THANK YOU
    // ================================================================
    {
      id: 'closing',
      background: C.bgSecondary,
      elements: [
        // Top-right tag
        topRightTag('s16-tag'),

        // Thank you
        el(`<h1 style="font-family:${FONT},sans-serif;font-size:96px;font-weight:300;color:${C.textOnDark};text-transform:uppercase;letter-spacing:0.15em;text-align:center;line-height:1.1;">Thank You</h1>`, {
          id: 's16-title', x: 960, y: 380, w: 1200, anchor: 'tc',
        }),

        // Company name
        el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.15em;text-align:center;">Cacao &amp; Vine &mdash; Investor Briefing Q4 2026</p>`, {
          id: 's16-company', x: 960, y: below('s16-title', { gap: 32 }), w: 800, anchor: 'tc',
        }),

        // Accent line
        el('', {
          id: 's16-accent', x: 960 - 40, y: below('s16-company', { gap: 24 }), w: 80, h: 3,
          style: { background: C.accent1 },
        }),

        templateLabel('Closing / Thank You', 's16-tpl'),
      ],
    },

  ];

  return await render(slides);
}
