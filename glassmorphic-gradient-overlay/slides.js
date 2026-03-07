// slides.js — "The Luminous Deep: Bioluminescence in the Ocean"
// Theme: Glassmorphic Gradient Overlay

import {
  init, render, safeRect, splitRect, el, below, rightOf, vstack, group,
} from '../slidekit.bundle.min.js';

// -- Image Manifest --------------------------------------------------------------
const IMAGES = {
  jellyfishGlow:    './images/jellyfish-glow.png',
  anglerfishLure:   './images/anglerfish-lure.png',
  glowingOrganisms: './images/glowing-organisms.png',
  twilightZone:     './images/twilight-zone.png',
  bioParticles:     './images/bio-particles.png',
};

// -- Design Tokens ---------------------------------------------------------------
const C = {
  bgPrimary:    '#0A1628',
  bgSecondary:  '#F5F7FA',
  textPrimary:  '#FFFFFF',
  textLight:    '#1A1A2E',
  textSecondary:'#94A3B8',
  accentCyan:   '#00D4FF',
  accentViolet: '#7B2FFF',
  accentOrange: '#FF6B35',
  glassFill:    'rgba(255,255,255,0.12)',
  glassBorder:  'rgba(255,255,255,0.25)',
};

const FONT = "'Poppins', sans-serif";

// -- Helper Functions ------------------------------------------------------------

function templateLabel(name, id, color = 'rgba(255,255,255,0.25)') {
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:400;color:${color};">${name}</p>`,
    { id, x: 130, y: 1080 - 32, w: 350, h: 18, layer: 'overlay' },
  );
}

function glassPanel(innerHTML, props) {
  return el(
    `<div style="background:${C.glassFill};border:1px solid ${C.glassBorder};border-radius:16px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);padding:40px;box-sizing:border-box;width:100%;height:100%;">${innerHTML}</div>`,
    props,
  );
}

function gradientOrb(id, x, y, size, opacity = 0.6) {
  return el('', {
    id,
    x: x - size / 2,
    y: y - size / 2,
    w: size,
    h: size,
    layer: 'bg',
    style: {
      background: `radial-gradient(circle, ${C.accentCyan} 0%, ${C.accentViolet} 70%, transparent 100%)`,
      borderRadius: '50%',
      filter: 'blur(60px)',
      opacity: String(opacity),
    },
  });
}

function img(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;${extraStyle}">`;
}

function gradientText(text, fontSize = '72px', weight = '700') {
  return `<span style="font-family:${FONT};font-size:${fontSize};font-weight:${weight};background:linear-gradient(135deg,${C.accentCyan},${C.accentViolet});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.0;">${text}</span>`;
}

function slideNumber(num, id) {
  return el(
    `<p style="font-family:${FONT};font-size:14px;font-weight:400;color:${C.textSecondary};text-align:right;">${num}</p>`,
    { id, x: 1920 - 130 - 60, y: 1080 - 36, w: 60, h: 18 },
  );
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Poppins', weights: [400, 500, 600, 700], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: HERO TITLE (DARK)
    // ================================================================
    {
      id: 'title',
      background: C.bgPrimary,
      notes: 'Opening slide — Hero Title (Dark) template',
      elements: [
        gradientOrb('s1-orb1', 200, 180, 500, 0.5),
        gradientOrb('s1-orb2', 1500, 700, 600, 0.4),
        gradientOrb('s1-orb3', 900, 950, 350, 0.3),

        glassPanel('', {
          id: 's1-glass', x: safe.x + 10, y: safe.y + 60, w: safe.w - 20, h: 600,
        }),

        el(`<h1 style="font-family:${FONT};font-size:96px;font-weight:700;color:${C.textPrimary};line-height:1.05;letter-spacing:-0.02em;">The Luminous Deep</h1>`, {
          id: 's1-title', x: safe.x + 60, y: safe.y + 130, w: safe.w - 120, h: 120,
        }),

        el(`<p style="font-family:${FONT};font-size:28px;font-weight:400;color:${C.textSecondary};line-height:1.5;">Bioluminescence in the Ocean — Nature's Living Light Show</p>`, {
          id: 's1-subtitle', x: safe.x + 60, y: below('s1-title', { gap: 28 }), w: 800,
        }),

        el(`<p style="font-family:${FONT};font-size:16px;font-weight:500;color:${C.accentCyan};letter-spacing:0.05em;text-transform:uppercase;">A Deep-Sea Exploration</p>`, {
          id: 's1-badge', x: safe.x + 60, y: below('s1-subtitle', { gap: 40 }), w: 400,
        }),

        el(`<p style="font-family:${FONT};font-size:14px;font-weight:400;color:rgba(255,255,255,0.3);letter-spacing:0.05em;text-align:right;">Theme: Glassmorphic Gradient Overlay</p>`, {
          id: 's1-theme', x: 1920 - 130 - 380, y: 1080 - 36, w: 380, h: 18,
        }),

        templateLabel('Hero Title (Dark)', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2: TEXT + IMAGE SPLIT — "What is Bioluminescence?"
    // ================================================================
    {
      id: 'what-is-bio',
      background: C.bgPrimary,
      notes: 'Text + Image Split template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.50, gap: 60 });
        return [
          gradientOrb('s2-orb1', 100, 900, 300, 0.3),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accentCyan};letter-spacing:0.1em;text-transform:uppercase;">Chapter 01</p>`, {
            id: 's2-eyebrow', x: left.x, y: safe.y + 20, w: left.w,
          }),

          el(`<h2 style="font-family:${FONT};font-size:52px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">What is<br>Bioluminescence?</h2>`, {
            id: 's2-heading', x: left.x, y: below('s2-eyebrow', { gap: 16 }), w: left.w, h: 140,
          }),

          el(`<p style="font-family:${FONT};font-size:19px;font-weight:400;color:${C.textSecondary};line-height:1.7;">Bioluminescence is the production and emission of light by living organisms. It occurs through a chemical reaction involving a light-emitting molecule called <strong style="color:${C.textPrimary};font-weight:600;">luciferin</strong> and an enzyme called <strong style="color:${C.textPrimary};font-weight:600;">luciferase</strong>.</p>`, {
            id: 's2-body1', x: left.x, y: below('s2-heading', { gap: 28 }), w: left.w,
          }),

          el(`<p style="font-family:${FONT};font-size:19px;font-weight:400;color:${C.textSecondary};line-height:1.7;">Found across the tree of life — from bacteria to fish — this remarkable adaptation serves purposes ranging from predation to communication to camouflage.</p>`, {
            id: 's2-body2', x: left.x, y: below('s2-body1', { gap: 16 }), w: left.w,
          }),

          el(img(IMAGES.jellyfishGlow, 'border-radius:16px;'), {
            id: 's2-img', x: right.x, y: safe.y, w: right.w, h: safe.h, overflow: 'clip',
            style: { borderRadius: '16px' },
          }),

          slideNumber('02', 's2-num'),
          templateLabel('Text + Image Split', 's2-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 3: IMAGE GALLERY GRID — "Creatures of Light"
    // ================================================================
    {
      id: 'creatures',
      background: C.bgPrimary,
      notes: 'Image Gallery Grid template',
      elements: (() => {
        const imgW = 560;
        const imgH = 560;
        const gap = 32;
        const totalW = imgW * 2 + gap;
        const startX = (1920 - totalW) / 2;
        const startY = safe.y + 120;

        return [
          gradientOrb('s3-orb1', 1700, 200, 400, 0.35),
          gradientOrb('s3-orb2', 200, 800, 350, 0.25),

          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.15;text-align:center;">Creatures of Light</h2>`, {
            id: 's3-heading', x: safe.x, y: safe.y + 10, w: safe.w, h: 60,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};text-align:center;">Deep-sea organisms that illuminate the darkness</p>`, {
            id: 's3-sub', x: safe.x, y: below('s3-heading', { gap: 12 }), w: safe.w,
          }),

          el(img(IMAGES.anglerfishLure, 'border-radius:16px;'), {
            id: 's3-img1', x: startX, y: startY, w: imgW, h: imgH, overflow: 'clip',
            style: { borderRadius: '16px' },
          }),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textSecondary};text-align:center;">Anglerfish — Bioluminescent Lure</p>`, {
            id: 's3-cap1', x: startX, y: startY + imgH + 12, w: imgW,
          }),

          el(img(IMAGES.glowingOrganisms, 'border-radius:16px;'), {
            id: 's3-img2', x: startX + imgW + gap, y: startY, w: imgW, h: imgH, overflow: 'clip',
            style: { borderRadius: '16px' },
          }),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textSecondary};text-align:center;">Glowing Deep-Sea Organisms</p>`, {
            id: 's3-cap2', x: startX + imgW + gap, y: startY + imgH + 12, w: imgW,
          }),

          slideNumber('03', 's3-num'),
          templateLabel('Image Gallery Grid', 's3-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 4: STATS / KPI GRID — "By the Numbers"
    // ================================================================
    {
      id: 'stats',
      background: C.bgSecondary,
      notes: 'Stats / KPI Grid template',
      elements: (() => {
        const stats = [
          { value: '76%', label: 'Of Ocean Creatures', desc: 'produce bioluminescence' },
          { value: '700+', label: 'Known Species', desc: 'of bioluminescent fish' },
          { value: '3800m', label: 'Average Depth', desc: 'of bioluminescent activity' },
        ];

        const tileW = 440;
        const gap = 48;
        const totalW = tileW * 3 + gap * 2;
        const startX = (1920 - totalW) / 2;
        const tileY = safe.y + 220;

        const statEls = [];
        for (let i = 0; i < stats.length; i++) {
          const s = stats[i];
          const tx = startX + i * (tileW + gap);

          statEls.push(
            el(
              `<div style="text-align:center;">${gradientText(s.value, '80px', '700')}</div>`,
              { id: `s4-val${i}`, x: tx, y: tileY, w: tileW, h: 100 },
            ),
            el(
              `<p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textLight};text-align:center;line-height:1.3;">${s.label}</p>`,
              { id: `s4-label${i}`, x: tx, y: tileY + 110, w: tileW },
            ),
            el(
              `<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};text-align:center;line-height:1.4;">${s.desc}</p>`,
              { id: `s4-desc${i}`, x: tx, y: tileY + 150, w: tileW },
            ),
          );
        }

        return [
          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.textLight};line-height:1.15;text-align:center;">By the Numbers</h2>`, {
            id: 's4-heading', x: safe.x, y: safe.y + 30, w: safe.w, h: 60,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};text-align:center;">The scale of nature's light show beneath the waves</p>`, {
            id: 's4-sub', x: safe.x, y: below('s4-heading', { gap: 12 }), w: safe.w,
          }),

          ...statEls,

          slideNumber('04', 's4-num'),
          templateLabel('Stats / KPI Grid', 's4-tpl', 'rgba(26,26,46,0.2)'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 5: TEAM / PROFILE GRID — "Research Team"
    // ================================================================
    {
      id: 'team',
      background: C.bgPrimary,
      notes: 'Team / Profile Grid template',
      elements: (() => {
        const team = [
          { name: 'Dr. Marina Voss', role: 'Lead Researcher', color: C.accentCyan },
          { name: 'Dr. Kenji Tanaka', role: 'Marine Biologist', color: C.accentViolet },
          { name: 'Dr. Amara Diop', role: 'Biochemist', color: C.accentOrange },
        ];

        const cardW = 360;
        const gap = 80;
        const totalW = cardW * 3 + gap * 2;
        const startX = (1920 - totalW) / 2;
        const avatarSize = 120;
        const avatarY = safe.y + 200;

        const teamEls = [];
        for (let i = 0; i < team.length; i++) {
          const t = team[i];
          const cx = startX + i * (cardW + gap);
          const avatarCx = cx + (cardW - avatarSize) / 2;

          teamEls.push(
            el('', {
              id: `s5-avatar${i}`, x: avatarCx, y: avatarY, w: avatarSize, h: avatarSize,
              style: {
                background: `linear-gradient(135deg, ${t.color}, ${C.accentViolet})`,
                borderRadius: '50%',
                border: `2px solid ${C.glassBorder}`,
              },
            }),
            el(
              `<p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textPrimary};text-align:center;line-height:1.3;">${t.name}</p>`,
              { id: `s5-name${i}`, x: cx, y: avatarY + avatarSize + 24, w: cardW },
            ),
            el(
              `<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};text-align:center;line-height:1.4;">${t.role}</p>`,
              { id: `s5-role${i}`, x: cx, y: avatarY + avatarSize + 58, w: cardW },
            ),
          );
        }

        return [
          gradientOrb('s5-orb1', 150, 150, 350, 0.3),
          gradientOrb('s5-orb2', 1750, 900, 400, 0.25),

          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.15;text-align:center;">Research Team</h2>`, {
            id: 's5-heading', x: safe.x, y: safe.y + 20, w: safe.w, h: 60,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};text-align:center;">The scientists illuminating the mysteries of living light</p>`, {
            id: 's5-sub', x: safe.x, y: below('s5-heading', { gap: 12 }), w: safe.w,
          }),

          ...teamEls,

          slideNumber('05', 's5-num'),
          templateLabel('Team / Profile Grid', 's5-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 6: QUOTE / EDITORIAL
    // ================================================================
    {
      id: 'quote',
      background: C.bgPrimary,
      notes: 'Quote / Editorial template',
      elements: [
        gradientOrb('s6-orb1', 300, 250, 500, 0.4),
        gradientOrb('s6-orb2', 1600, 750, 450, 0.35),

        glassPanel('', {
          id: 's6-glass', x: safe.x + 80, y: safe.y + 100, w: safe.w - 160, h: 520,
        }),

        el(`<h2 style="font-family:${FONT};font-size:42px;font-weight:600;font-style:italic;color:${C.textPrimary};line-height:1.4;text-align:center;">\u201CThe deep sea is the largest museum on the planet — it is the largest gallery of living light, and we have barely begun to explore it.\u201D</h2>`, {
          id: 's6-quote', x: safe.x + 160, y: safe.y + 200, w: safe.w - 320, h: 240,
        }),

        el(`<p style="font-family:${FONT};font-size:16px;font-weight:500;color:${C.accentCyan};text-align:center;letter-spacing:0.05em;">DR. EDITH WIDDER</p>`, {
          id: 's6-attr1', x: safe.x + 160, y: below('s6-quote', { gap: 32 }), w: safe.w - 320,
        }),

        el(`<p style="font-family:${FONT};font-size:14px;font-weight:400;color:${C.textSecondary};text-align:center;">Marine Biologist & Deep-Sea Explorer</p>`, {
          id: 's6-attr2', x: safe.x + 160, y: below('s6-attr1', { gap: 8 }), w: safe.w - 320,
        }),

        slideNumber('06', 's6-num'),
        templateLabel('Quote / Editorial', 's6-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 7: DATA VISUALIZATION — "Light Production Methods"
    // ================================================================
    {
      id: 'data-viz',
      background: C.bgPrimary,
      notes: 'Data Visualization template — SVG donut chart',
      elements: (() => {
        const segments = [
          { label: 'Bacterial Symbiosis', pct: 40, color: C.accentCyan },
          { label: 'Intrinsic Chemistry', pct: 30, color: '#4A6FFF' },
          { label: 'Coelenterazine', pct: 20, color: C.accentViolet },
          { label: 'Other Methods', pct: 10, color: C.accentOrange },
        ];

        const cx = 580, cy = 300, r = 200, sw = 50;
        const circumference = 2 * Math.PI * r;
        let offset = 0;
        let arcs = '';
        for (const seg of segments) {
          const dash = (seg.pct / 100) * circumference;
          const gap = circumference - dash;
          arcs += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${seg.color}" stroke-width="${sw}" stroke-dasharray="${dash} ${gap}" stroke-dashoffset="-${offset}" stroke-linecap="round" opacity="0.9"/>`;
          offset += dash;
        }

        const donutSvg = `<svg viewBox="0 0 1160 600" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
          ${arcs}
          <text x="${cx}" y="${cy - 10}" text-anchor="middle" fill="${C.textPrimary}" font-family="${FONT}" font-size="48" font-weight="700">76%</text>
          <text x="${cx}" y="${cy + 30}" text-anchor="middle" fill="${C.textSecondary}" font-family="${FONT}" font-size="16" font-weight="400">of deep-sea life</text>
        </svg>`;

        const legendStartX = safe.x + 700;
        const legendStartY = safe.y + 240;
        const legendEls = [];
        for (let i = 0; i < segments.length; i++) {
          const s = segments[i];
          const ly = legendStartY + i * 64;
          legendEls.push(
            el('', {
              id: `s7-dot${i}`, x: legendStartX, y: ly + 4, w: 14, h: 14,
              style: { background: s.color, borderRadius: '50%' },
            }),
            el(
              `<p style="font-family:${FONT};font-size:17px;font-weight:500;color:${C.textPrimary};line-height:1.3;">${s.label}</p>`,
              { id: `s7-leg-label${i}`, x: legendStartX + 28, y: ly, w: 300 },
            ),
            el(
              `<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.3;">${s.pct}% of observed species</p>`,
              { id: `s7-leg-pct${i}`, x: legendStartX + 28, y: ly + 24, w: 300 },
            ),
          );
        }

        return [
          gradientOrb('s7-orb1', 100, 200, 350, 0.2),

          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.15;">Light Production Methods</h2>`, {
            id: 's7-heading', x: safe.x, y: safe.y + 20, w: safe.w, h: 60,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};">How deep-sea organisms create their own light</p>`, {
            id: 's7-sub', x: safe.x, y: below('s7-heading', { gap: 12 }), w: safe.w,
          }),

          el(donutSvg, {
            id: 's7-chart', x: safe.x - 40, y: safe.y + 140, w: 700, h: 600,
          }),

          ...legendEls,

          slideNumber('07', 's7-num'),
          templateLabel('Data Visualization', 's7-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 8: CONTENT CARDS GRID — "Types of Bioluminescence"
    // ================================================================
    {
      id: 'types',
      background: C.bgPrimary,
      notes: 'Content Cards Grid template',
      elements: (() => {
        const cards = [
          { num: '01', title: 'Defensive', body: 'Counter-illumination camouflage, startling predators with sudden flashes, or releasing glowing fluid to confuse attackers.' },
          { num: '02', title: 'Predatory', body: 'Luring prey with bioluminescent appendages, like the anglerfish\u2019s iconic glowing lure dangling above its jaws.' },
          { num: '03', title: 'Communication', body: 'Species-specific light patterns for mate attraction, territorial signaling, and coordinated group behaviors.' },
        ];

        const cardW = 480;
        const gap = 40;
        const totalW = cardW * 3 + gap * 2;
        const startX = (1920 - totalW) / 2;
        const cardY = safe.y + 180;
        const cardH = 380;

        const cardEls = [];
        for (let i = 0; i < cards.length; i++) {
          const c = cards[i];
          const cx = startX + i * (cardW + gap);

          cardEls.push(
            glassPanel(
              `<div style="font-family:${FONT};">
                <p style="font-size:32px;font-weight:700;background:linear-gradient(135deg,${C.accentCyan},${C.accentViolet});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0 0 16px 0;">${c.num}</p>
                <p style="font-size:24px;font-weight:600;color:${C.textPrimary};margin:0 0 16px 0;line-height:1.3;">${c.title}</p>
                <p style="font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.7;margin:0;">${c.body}</p>
              </div>`,
              { id: `s8-card${i}`, x: cx, y: cardY, w: cardW, h: cardH },
            ),
          );
        }

        return [
          gradientOrb('s8-orb1', 1750, 150, 400, 0.3),
          gradientOrb('s8-orb2', 100, 900, 300, 0.2),

          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.15;text-align:center;">Types of Bioluminescence</h2>`, {
            id: 's8-heading', x: safe.x, y: safe.y + 20, w: safe.w, h: 60,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};text-align:center;">The three primary functions of living light in the deep ocean</p>`, {
            id: 's8-sub', x: safe.x, y: below('s8-heading', { gap: 12 }), w: safe.w,
          }),

          ...cardEls,

          slideNumber('08', 's8-num'),
          templateLabel('Content Cards Grid', 's8-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 9: TEXT + IMAGE SPLIT — "The Twilight Zone"
    // ================================================================
    {
      id: 'twilight',
      background: C.bgPrimary,
      notes: 'Text + Image Split template (variant 2)',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.50, gap: 60 });
        return [
          gradientOrb('s9-orb1', 80, 800, 280, 0.25),

          el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accentCyan};letter-spacing:0.1em;text-transform:uppercase;">Chapter 02</p>`, {
            id: 's9-eyebrow', x: left.x, y: safe.y + 20, w: left.w,
          }),

          el(`<h2 style="font-family:${FONT};font-size:52px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">The Twilight<br>Zone</h2>`, {
            id: 's9-heading', x: left.x, y: below('s9-eyebrow', { gap: 16 }), w: left.w, h: 140,
          }),

          el(`<p style="font-family:${FONT};font-size:19px;font-weight:400;color:${C.textSecondary};line-height:1.7;">The mesopelagic zone, between 200 and 1,000 meters deep, is where sunlight fades to near-total darkness. This is the frontier of bioluminescence — where <strong style="color:${C.textPrimary};font-weight:600;">90% of creatures</strong> produce their own light.</p>`, {
            id: 's9-body1', x: left.x, y: below('s9-heading', { gap: 28 }), w: left.w,
          }),

          el(`<p style="font-family:${FONT};font-size:19px;font-weight:400;color:${C.textSecondary};line-height:1.7;">Here, in perpetual twilight, evolution has crafted an extraordinary arsenal of living light — from the faintest bacterial glow to the brilliant flash of a frightened squid.</p>`, {
            id: 's9-body2', x: left.x, y: below('s9-body1', { gap: 16 }), w: left.w,
          }),

          el(img(IMAGES.twilightZone, 'border-radius:16px;'), {
            id: 's9-img', x: right.x, y: safe.y, w: right.w, h: safe.h, overflow: 'clip',
            style: { borderRadius: '16px' },
          }),

          slideNumber('09', 's9-num'),
          templateLabel('Text + Image Split', 's9-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 10: CLOSING / HERO TITLE (DARK) VARIANT
    // ================================================================
    {
      id: 'closing',
      background: C.bgPrimary,
      notes: 'Closing — Hero Title (Dark) variant with background image',
      elements: [
        el(img(IMAGES.bioParticles, 'opacity:0.35;'), {
          id: 's10-bg', x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
        }),

        gradientOrb('s10-orb1', 400, 300, 500, 0.3),
        gradientOrb('s10-orb2', 1400, 700, 450, 0.25),

        glassPanel('', {
          id: 's10-glass', x: safe.x + 200, y: safe.y + 120, w: safe.w - 400, h: 480,
        }),

        el(`<h2 style="font-family:${FONT};font-size:72px;font-weight:700;color:${C.textPrimary};line-height:1.1;text-align:center;">Thank You</h2>`, {
          id: 's10-heading', x: safe.x + 240, y: safe.y + 200, w: safe.w - 480, h: 90,
        }),

        el(`<p style="font-family:${FONT};font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.6;text-align:center;">The Luminous Deep — A journey into nature's living light</p>`, {
          id: 's10-subtitle', x: safe.x + 240, y: below('s10-heading', { gap: 20 }), w: safe.w - 480,
        }),

        el(`<p style="font-family:${FONT};font-size:16px;font-weight:500;color:${C.accentCyan};text-align:center;letter-spacing:0.05em;">luminousdeep.research \u00B7 @luminousdeep</p>`, {
          id: 's10-contact', x: safe.x + 240, y: below('s10-subtitle', { gap: 24 }), w: safe.w - 480,
        }),

        slideNumber('10', 's10-num'),
        templateLabel('Hero Title (Dark)', 's10-tpl'),
      ],
    },
  ];

  return await render(slides);
}
