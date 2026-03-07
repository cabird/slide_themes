// slides.js — "The Future of Space Tourism"
// Deep Navy Corporate theme proof-of-concept

import {
  init, render, safeRect, splitRect, el,
  below, rightOf, connect,
} from '../slidekit.bundle.min.js';

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:    '#1B1464',
  bgSecondary:  '#FFFFFF',
  bgTertiary:   '#2A1F7A',
  textPrimary:  '#FFFFFF',
  textPrimaryDk:'#1B1464',
  textSecondary:'#A8A3C7',
  textSecDark:  '#6B7280',
  accent1:      '#00C9A7',  // teal
  accent2:      '#F97316',  // orange
  accent3:      '#7C3AED',  // purple
  accent4:      '#EF4444',  // coral/red
  accent5:      '#3B82F6',  // blue
  border:       '#3D3580',
  borderLight:  '#E5E7EB',
};

const FONT = 'DM Sans';
const ACCENTS = [C.accent1, C.accent2, C.accent3, C.accent5];

// -- Helpers ---------------------------------------------------------------------

function templateLabel(name, id, dark = true) {
  const color = dark ? 'rgba(255,255,255,0.22)' : 'rgba(27,20,100,0.18)';
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:400;color:${color};letter-spacing:0.02em;">Template: ${name}</p>`,
    { id, x: 120, y: 960, w: 340 },
  );
}

function footer(slideNum, id, dark = true) {
  const brandColor = dark ? C.textSecondary : C.textSecDark;
  const numColor = dark ? C.textSecondary : C.textSecDark;
  return [
    el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${brandColor};letter-spacing:0.05em;text-transform:uppercase;">AstroVentures</p>`, {
      id: `${id}-brand`, x: 120, y: 970, w: 200,
    }),
    el(`<p style="font-family:${FONT};font-size:14px;font-weight:400;color:${numColor};text-align:right;">${slideNum}</p>`, {
      id: `${id}-num`, x: 1660, y: 970, w: 80,
    }),
  ];
}

function logoLockup(id, dark = true) {
  const color = dark ? C.textPrimary : C.textPrimaryDk;
  const tagColor = dark ? C.textSecondary : C.textSecDark;
  return el(`<div>
    <p style="font-family:'Sacramento',cursive;font-size:32px;color:${color};margin:0;line-height:1.2;">AstroVentures</p>
    <p style="font-family:${FONT};font-size:10px;font-weight:500;color:${tagColor};text-transform:uppercase;letter-spacing:3px;margin:0;">Beyond Earth</p>
  </div>`, { id, x: 120, y: 50, w: 200 });
}

function dividerLine(id, x, y) {
  return el('', { id, x, y, w: 60, h: 3, style: { background: C.accent1, borderRadius: '2px' } });
}

function bgVignette(id) {
  return el(`<div style="width:100%;height:100%;background:radial-gradient(ellipse at center, ${C.bgTertiary} 0%, ${C.bgPrimary} 70%, #110E40 100%);"></div>`, {
    id, x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
  });
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'DM Sans', weights: [400, 500, 700], source: 'google' },
      { family: 'Sacramento', weights: [400], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: HERO TITLE (Section Opener)
    // ================================================================
    {
      id: 'hero-title',
      background: C.bgPrimary,
      notes: 'Hero Title — Section Opener',
      elements: [
        bgVignette('s1-vig'),
        logoLockup('s1-logo'),

        // Headline
        el(`<h1 style="font-family:${FONT};font-size:82px;font-weight:700;color:${C.textPrimary};line-height:1.1;letter-spacing:-0.02em;">The Future of<br><span style="font-weight:400;">Space</span> <strong>Tourism</strong></h1>`, {
          id: 's1-title', x: safe.x, y: safe.y + 180, w: 1000, h: 200,
        }),

        dividerLine('s1-divider', safe.x, below('s1-title', { gap: 28 })),

        el(`<p style="font-family:${FONT};font-size:24px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Commercial spaceflight is no longer science fiction.<br>Discover the companies, technology, and economics shaping humanity's next great adventure.</p>`, {
          id: 's1-subtitle', x: safe.x, y: below('s1-divider', { gap: 24 }), w: 780,
        }),

        // Decorative dot accents
        el('', { id: 's1-dot1', x: 1650, y: 200, w: 12, h: 12, style: { background: C.accent1, borderRadius: '50%' }, opacity: 0.5 }),
        el('', { id: 's1-dot2', x: 1700, y: 260, w: 8, h: 8, style: { background: C.accent3, borderRadius: '50%' }, opacity: 0.4 }),

        ...footer('01', 's1-ft'),
        templateLabel('Hero Title', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2: KPI STATS (Our Story / Metrics)
    // ================================================================
    {
      id: 'kpi-stats',
      background: C.bgPrimary,
      notes: 'KPI Stats — Metrics overview',
      elements: (() => {
        const stats = [
          { value: '$9.1B', label: 'Market Size by 2030', accent: C.accent1 },
          { value: '2,500+', label: 'Tickets Sold', accent: C.accent2 },
          { value: '700+', label: 'Successful Launches', accent: C.accent3 },
          { value: '12', label: 'Active Companies', accent: C.accent5 },
        ];
        const cols = 4;
        const gap = 32;
        const cardW = (safe.w - gap * (cols - 1)) / cols;
        const gridY = safe.y + 260;

        const elements = [
          bgVignette('s2-vig'),
          logoLockup('s2-logo'),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent1};text-transform:uppercase;letter-spacing:4px;">Our Story</p>`, {
            id: 's2-eyebrow', x: safe.x, y: safe.y + 60, w: 400,
          }),
          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.2;letter-spacing:-0.01em;"><span style="font-weight:400;">Space Tourism</span> <strong>by the Numbers</strong></h2>`, {
            id: 's2-title', x: safe.x, y: below('s2-eyebrow', { gap: 16 }), w: 700, h: 120,
          }),
          dividerLine('s2-divider', safe.x, below('s2-title', { gap: 16 })),
        ];

        for (let i = 0; i < stats.length; i++) {
          const s = stats[i];
          const cx = safe.x + i * (cardW + gap);
          elements.push(
            el(`<div style="border:1px solid ${C.border};border-radius:8px;padding:36px 24px;text-align:center;">
              <p style="font-family:${FONT};font-size:56px;font-weight:700;color:${C.textPrimary};margin:0;line-height:1.0;letter-spacing:-0.02em;">${s.value}</p>
              <div style="width:40px;height:2px;background:${s.accent};margin:16px auto;border-radius:1px;"></div>
              <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.4;letter-spacing:0.02em;">${s.label}</p>
            </div>`, {
              id: `s2-stat${i}`, x: cx, y: gridY, w: cardW,
            }),
          );
        }

        elements.push(
          ...footer('02', 's2-ft'),
          templateLabel('KPI Stats', 's2-tpl'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3: TWO-COLUMN CONTENT (Text + Visual)
    // ================================================================
    {
      id: 'two-column',
      background: C.bgPrimary,
      notes: 'Two-Column Content — Text + Visual',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.52, gap: 60 });
        return [
          bgVignette('s3-vig'),
          logoLockup('s3-logo'),

          // Left: text
          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent1};text-transform:uppercase;letter-spacing:4px;">Overview</p>`, {
            id: 's3-eyebrow', x: left.x, y: left.y + 60, w: left.w,
          }),
          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.2;letter-spacing:-0.01em;"><span style="font-weight:400;">Orbital</span> <strong>Experiences</strong></h2>`, {
            id: 's3-title', x: left.x, y: below('s3-eyebrow', { gap: 16 }), w: left.w, h: 110,
          }),
          dividerLine('s3-divider', left.x, below('s3-title', { gap: 16 })),
          el(`<p style="font-family:${FONT};font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.7;">From suborbital hops lasting minutes to week-long stays aboard commercial space stations, the range of experiences is expanding rapidly. Ticket prices have dropped from $55M to under $500K in a decade.</p>`, {
            id: 's3-body1', x: left.x, y: below('s3-divider', { gap: 24 }), w: left.w,
          }),
          el(`<p style="font-family:${FONT};font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.7;">By 2030, analysts project over <strong style="color:${C.textPrimary};">10,000 passengers per year</strong> will travel beyond the Kármán line.</p>`, {
            id: 's3-body2', x: left.x, y: below('s3-body1', { gap: 20 }), w: left.w,
          }),

          // Right: UI mockup card
          el(`<div style="background:${C.bgTertiary};border:1px solid ${C.border};border-radius:10px;padding:32px;">
            <p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent1};text-transform:uppercase;letter-spacing:2px;margin:0 0 20px 0;">Mission Dashboard</p>
            <div style="display:flex;justify-content:space-between;margin-bottom:24px;">
              <div><p style="font-family:${FONT};font-size:36px;font-weight:700;color:${C.textPrimary};margin:0;">284</p><p style="font-family:${FONT};font-size:13px;color:${C.textSecondary};margin:4px 0 0 0;">Flights This Year</p></div>
              <div><p style="font-family:${FONT};font-size:36px;font-weight:700;color:${C.accent1};margin:0;">99.7%</p><p style="font-family:${FONT};font-size:13px;color:${C.textSecondary};margin:4px 0 0 0;">Safety Record</p></div>
            </div>
            <div style="background:${C.bgPrimary};border-radius:6px;padding:16px;">
              <p style="font-family:${FONT};font-size:13px;font-weight:500;color:${C.textSecondary};margin:0 0 12px 0;">Revenue Growth</p>
              <div style="display:flex;align-items:flex-end;gap:6px;height:60px;">
                <div style="flex:1;background:${C.accent1}44;border-radius:3px 3px 0 0;height:30%;"></div>
                <div style="flex:1;background:${C.accent1}66;border-radius:3px 3px 0 0;height:45%;"></div>
                <div style="flex:1;background:${C.accent1}88;border-radius:3px 3px 0 0;height:55%;"></div>
                <div style="flex:1;background:${C.accent1}aa;border-radius:3px 3px 0 0;height:70%;"></div>
                <div style="flex:1;background:${C.accent1};border-radius:3px 3px 0 0;height:100%;"></div>
              </div>
            </div>
            <div style="margin-top:16px;display:flex;align-items:center;gap:8px;">
              <span style="display:inline-block;padding:4px 12px;background:${C.accent1}33;color:${C.accent1};font-family:${FONT};font-size:12px;font-weight:500;border-radius:20px;">● Active</span>
              <span style="font-family:${FONT};font-size:13px;color:${C.textSecondary};">Next launch in 14 days</span>
            </div>
          </div>`, {
            id: 's3-mockup', x: right.x, y: right.y + 40, w: right.w,
          }),

          ...footer('03', 's3-ft'),
          templateLabel('Two-Column Content', 's3-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 4: PROCESS STEPS (How It Works)
    // ================================================================
    {
      id: 'process-steps',
      background: C.bgSecondary,
      notes: 'Process Steps — How It Works (light bg)',
      elements: (() => {
        const steps = [
          { num: '01', title: 'Medical Screening', desc: 'Complete health evaluations and fitness certification for spaceflight readiness.', color: C.accent2 },
          { num: '02', title: 'Training Program', desc: 'Six months of intensive preparation including zero-G simulation and emergency drills.', color: C.accent5 },
          { num: '03', title: 'Launch Day', desc: 'Board the spacecraft, complete final checks, and experience the thrill of liftoff.', color: C.accent1 },
          { num: '04', title: 'Orbit & Return', desc: 'Enjoy weightlessness and Earth views before a guided re-entry and landing.', color: C.accent3 },
        ];
        const cols = 4;
        const gap = 40;
        const cardW = (safe.w - gap * (cols - 1)) / cols;
        const stepsY = safe.y + 420;
        const circleSize = 56;

        const elements = [
          logoLockup('s4-logo', false),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent3};text-transform:uppercase;letter-spacing:4px;">How It Works</p>`, {
            id: 's4-eyebrow', x: safe.x, y: safe.y + 80, w: 400,
          }),
          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimaryDk};line-height:1.2;letter-spacing:-0.01em;"><span style="font-weight:400;">Your Journey</span> <strong>to Space</strong></h2>`, {
            id: 's4-title', x: safe.x, y: below('s4-eyebrow', { gap: 16 }), w: 600, h: 110,
          }),
          el(`<p style="font-family:${FONT};font-size:20px;font-weight:400;color:${C.textSecDark};line-height:1.6;">From application to splashdown — the four-step process that takes you from Earth to orbit and back safely.</p>`, {
            id: 's4-desc', x: safe.x, y: below('s4-title', { gap: 12 }), w: 700,
          }),
        ];

        // Dashed connecting line
        const lineY = stepsY + circleSize / 2;
        const lineStartX = safe.x + cardW / 2 + circleSize / 2 + 8;
        const lineEndX = safe.x + (cols - 1) * (cardW + gap) + cardW / 2 - circleSize / 2 - 8;
        elements.push(
          el('', {
            id: 's4-connect-line', x: lineStartX, y: lineY - 1, w: lineEndX - lineStartX, h: 2,
            style: { background: `repeating-linear-gradient(90deg, ${C.textSecDark} 0px, ${C.textSecDark} 6px, transparent 6px, transparent 14px)` },
          }),
        );

        for (let i = 0; i < steps.length; i++) {
          const s = steps[i];
          const cx = safe.x + i * (cardW + gap);
          const centerX = cx + cardW / 2;
          // Step circle
          elements.push(
            el(`<div style="width:${circleSize}px;height:${circleSize}px;border-radius:50%;background:${s.color};display:flex;align-items:center;justify-content:center;">
              <span style="font-family:${FONT};font-size:14px;font-weight:700;color:#FFFFFF;text-transform:uppercase;letter-spacing:1px;">Step ${s.num}</span>
            </div>`, {
              id: `s4-circle${i}`, x: centerX - circleSize / 2, y: stepsY, w: circleSize, h: circleSize,
            }),
          );
          // Step title
          elements.push(
            el(`<p style="font-family:${FONT};font-size:20px;font-weight:500;color:${C.textPrimaryDk};line-height:1.3;text-align:center;">${s.title}</p>`, {
              id: `s4-step-title${i}`, x: cx, y: below(`s4-circle${i}`, { gap: 20 }), w: cardW,
              style: { textAlign: 'center' },
            }),
          );
          // Step description
          elements.push(
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecDark};line-height:1.6;text-align:center;">${s.desc}</p>`, {
              id: `s4-step-desc${i}`, x: cx, y: below(`s4-step-title${i}`, { gap: 10 }), w: cardW,
              style: { textAlign: 'center' },
            }),
          );
        }

        elements.push(
          ...footer('04', 's4-ft', false),
          templateLabel('Process Steps', 's4-tpl', false),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 5: CATEGORY GRID (Services / Channels)
    // ================================================================
    {
      id: 'category-grid',
      background: C.bgPrimary,
      notes: 'Category Grid — Services / Channels',
      elements: (() => {
        const categories = [
          { icon: '🚀', title: 'Suborbital Flights', desc: 'Brief weightlessness at the edge of space, perfect for first-timers.', color: C.accent1 },
          { icon: '🛰️', title: 'Orbital Stays', desc: 'Multi-day missions aboard commercial space stations in LEO.', color: C.accent2 },
          { icon: '🌙', title: 'Lunar Flybys', desc: 'Circle the Moon and witness Earthrise from cislunar space.', color: C.accent3 },
          { icon: '🔭', title: 'Space Research', desc: 'Private microgravity labs for scientific experiments.', color: C.accent5 },
          { icon: '🏗️', title: 'Station Modules', desc: 'Modular habitats for corporate events and film production.', color: C.accent2 },
          { icon: '🌍', title: 'Zero-G Training', desc: 'Parabolic flight programs for pre-mission preparation.', color: C.accent1 },
        ];
        const cols = 3;
        const rows = 2;
        const gap = 28;
        const cardW = (safe.w - gap * (cols - 1)) / cols;
        const cardH = 195;
        const gridY = safe.y + 210;
        const iconSize = 44;

        const elements = [
          bgVignette('s5-vig'),
          logoLockup('s5-logo'),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent1};text-transform:uppercase;letter-spacing:4px;">Services</p>`, {
            id: 's5-eyebrow', x: safe.x, y: safe.y + 50, w: 400,
          }),
          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.2;letter-spacing:-0.01em;"><span style="font-weight:400;">Experience</span> <strong>Categories</strong></h2>`, {
            id: 's5-title', x: safe.x, y: below('s5-eyebrow', { gap: 14 }), w: 600, h: 60,
          }),
        ];

        for (let i = 0; i < categories.length; i++) {
          const c = categories[i];
          const col = i % cols;
          const row = Math.floor(i / cols);
          const cx = safe.x + col * (cardW + gap);
          const cy = gridY + row * (cardH + gap);

          elements.push(
            el(`<div style="border:1px solid ${C.border};border-radius:8px;padding:28px;">
              <div style="width:${iconSize}px;height:${iconSize}px;border-radius:50%;background:${c.color}22;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
                <span style="font-size:22px;">${c.icon}</span>
              </div>
              <p style="font-family:${FONT};font-size:20px;font-weight:500;color:${C.textPrimary};margin:0 0 10px 0;line-height:1.3;">${c.title}</p>
              <p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.6;">${c.desc}</p>
            </div>`, {
              id: `s5-card${i}`, x: cx, y: cy, w: cardW,
            }),
          );
        }

        elements.push(
          ...footer('05', 's5-ft'),
          templateLabel('Category Grid', 's5-tpl'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 6: NUMBERED LIST (Key Points / Benefits)
    // ================================================================
    {
      id: 'numbered-list',
      background: C.bgPrimary,
      notes: 'Numbered List — Key Benefits',
      elements: (() => {
        const items = [
          { title: 'Proven Safety Record', desc: 'Over 700 successful commercial flights with a 99.7% mission success rate across all providers.' },
          { title: 'Affordable Access', desc: 'Suborbital ticket prices have dropped below $250K, making space accessible to a wider audience.' },
          { title: 'Scientific Value', desc: 'Private missions contribute to microgravity research, materials science, and pharmaceutical development.' },
          { title: 'Economic Growth', desc: 'The space tourism sector creates over 15,000 high-skill jobs and stimulates adjacent industries.' },
        ];

        const { left, right } = splitRect(safe, { ratio: 0.5, gap: 60 });
        const startY = safe.y + 200;
        const itemH = 160;
        const itemGap = 20;

        const elements = [
          bgVignette('s6-vig'),
          logoLockup('s6-logo'),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent2};text-transform:uppercase;letter-spacing:4px;">Key Benefits</p>`, {
            id: 's6-eyebrow', x: safe.x, y: safe.y + 50, w: 400,
          }),
          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.2;letter-spacing:-0.01em;"><span style="font-weight:400;">Why</span> <strong>Space Tourism?</strong></h2>`, {
            id: 's6-title', x: safe.x, y: below('s6-eyebrow', { gap: 14 }), w: 600, h: 60,
          }),
          dividerLine('s6-divider', safe.x, below('s6-title', { gap: 14 })),
        ];

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const num = String(i + 1).padStart(2, '0');
          const col = i < 2 ? left : right;
          const row = i % 2;
          const yPos = startY + row * (itemH + itemGap);
          const numW = 80;

          elements.push(
            el(`<p style="font-family:${FONT};font-size:56px;font-weight:700;color:${C.accent2};line-height:1.0;letter-spacing:-0.02em;">${num}</p>`, {
              id: `s6-num${i}`, x: col.x, y: yPos, w: numW,
            }),
            el(`<p style="font-family:${FONT};font-size:20px;font-weight:500;color:${C.textPrimary};line-height:1.3;margin:0 0 8px 0;">${item.title}</p>`, {
              id: `s6-item-title${i}`, x: col.x + numW + 16, y: yPos, w: col.w - numW - 16,
            }),
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.6;">${item.desc}</p>`, {
              id: `s6-item-desc${i}`, x: col.x + numW + 16, y: below(`s6-item-title${i}`, { gap: 8 }), w: col.w - numW - 16,
            }),
          );
        }

        elements.push(
          ...footer('06', 's6-ft'),
          templateLabel('Numbered List', 's6-tpl'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 7: FULL-TEXT DETAIL (Content Heavy)
    // ================================================================
    {
      id: 'full-text-detail',
      background: C.bgSecondary,
      notes: 'Full-Text Detail — Content Heavy (light bg)',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.5, gap: 60 });

        return [
          logoLockup('s7-logo', false),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent3};text-transform:uppercase;letter-spacing:4px;">Detailed Analysis</p>`, {
            id: 's7-eyebrow', x: safe.x, y: safe.y + 60, w: 400,
          }),
          el(`<h2 style="font-family:${FONT};font-size:42px;font-weight:700;color:${C.textPrimaryDk};line-height:1.2;letter-spacing:-0.01em;"><span style="font-weight:400;">Regulatory</span> <strong>Framework</strong></h2>`, {
            id: 's7-title', x: safe.x, y: below('s7-eyebrow', { gap: 14 }), w: safe.w, h: 56,
          }),
          el('', {
            id: 's7-divider', x: safe.x, y: below('s7-title', { gap: 16 }),
            w: safe.w, h: 1, style: { background: C.borderLight },
          }),

          // Left column
          el(`<p style="font-family:${FONT};font-size:22px;font-weight:500;color:${C.textPrimaryDk};line-height:1.3;margin:0 0 12px 0;">Licensing & Compliance</p>`, {
            id: 's7-sub1', x: left.x, y: below('s7-divider', { gap: 28 }), w: left.w,
          }),
          el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecDark};line-height:1.7;">The FAA's Office of Commercial Space Transportation oversees all US launch and re-entry operations. Operators must obtain a launch license, demonstrate vehicle safety through rigorous testing, and carry liability insurance. The regulatory "learning period" established in 2004 has been extended through 2028, allowing the industry to innovate while building a safety track record.</p>`, {
            id: 's7-para1', x: left.x, y: below('s7-sub1', { gap: 10 }), w: left.w,
          }),
          el(`<p style="font-family:${FONT};font-size:22px;font-weight:500;color:${C.textPrimaryDk};line-height:1.3;margin:0 0 12px 0;">Passenger Safety Standards</p>`, {
            id: 's7-sub2', x: left.x, y: below('s7-para1', { gap: 24 }), w: left.w,
          }),
          el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecDark};line-height:1.7;">Informed consent is currently the primary passenger protection mechanism. Participants must acknowledge risks in writing before flight. Industry groups are developing voluntary safety standards covering vehicle design, crew training, and medical screening protocols to build public confidence ahead of formal regulation.</p>`, {
            id: 's7-para2', x: left.x, y: below('s7-sub2', { gap: 10 }), w: left.w,
          }),

          // Right column
          el(`<p style="font-family:${FONT};font-size:22px;font-weight:500;color:${C.textPrimaryDk};line-height:1.3;margin:0 0 12px 0;">International Coordination</p>`, {
            id: 's7-sub3', x: right.x, y: below('s7-divider', { gap: 28 }), w: right.w,
          }),
          el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecDark};line-height:1.7;">The Outer Space Treaty of 1967 assigns liability to launching states for damage caused by space objects. As commercial spaceflight grows, ICAO and UNOOSA are coordinating with national agencies to develop harmonized airspace integration procedures and cross-border liability frameworks that protect passengers and third parties.</p>`, {
            id: 's7-para3', x: right.x, y: below('s7-sub3', { gap: 10 }), w: right.w,
          }),
          el(`<p style="font-family:${FONT};font-size:22px;font-weight:500;color:${C.textPrimaryDk};line-height:1.3;margin:0 0 12px 0;">Insurance & Liability</p>`, {
            id: 's7-sub4', x: right.x, y: below('s7-para3', { gap: 24 }), w: right.w,
          }),
          el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecDark};line-height:1.7;">Operators carry $500M minimum third-party liability coverage. The government provides an additional indemnification layer up to $3.1B for catastrophic events, creating a public-private risk-sharing model that encourages investment while protecting communities near launch sites.</p>`, {
            id: 's7-para4', x: right.x, y: below('s7-sub4', { gap: 10 }), w: right.w,
          }),

          ...footer('07', 's7-ft', false),
          templateLabel('Full-Text Detail', 's7-tpl', false),
        ];
      })(),
    },

  ];

  return await render(slides);
}
