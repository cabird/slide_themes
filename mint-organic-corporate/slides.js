// slides.js — "SteerWise Trading Academy"
// Steerwise theme: fresh, trustworthy, organic green palette
// Circular/pill shapes, flat design, DM Serif Display + DM Sans

import {
  init, render, safeRect, splitRect, el,
  below, rightOf, centerVWith, group, connect,
} from '../slidekit.bundle.min.js';

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:    '#DAFBE1',   // light mint green
  bgSecondary:  '#1D3F4E',   // dark teal
  bgWhite:      '#FFFFFF',
  bgBrightGreen:'#6BD88B',   // bright green (problem slide bg)
  textPrimary:  '#1A2F3D',   // deep navy-teal
  textSecondary:'#3D5A5A',   // muted teal-gray body
  textOnDark:   '#FFFFFF',
  textOnDarkMuted: '#B0D4C8',
  accent1:      '#5CC87C',   // bright medium green
  accent2:      '#3A8B85',   // medium teal-green
  accent3:      '#2B6B6A',   // darker teal
  categoryLabel:'#3E9B6A',   // category labels
  decorCircle:  '#2D6060',   // decorative circles on dark bg
  border:       '#C5E8D0',
};

const SERIF = 'DM Serif Display';
const SANS  = 'DM Sans';

// Pill radius: fully rounded = 9999px
const pill = (bg) =>
  `background:${bg};border-radius:9999px;padding:18px 32px;`;

// -- Helper Functions ------------------------------------------------------------

function templateLabel(name, id, dark = false, extra = {}) {
  const color = dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.18)';
  return el(
    `<p style="font-family:${SANS};font-size:13px;font-weight:400;color:${color};letter-spacing:0.02em;">Template: ${name}</p>`,
    { id, ...extra },
  );
}

function yearMarker(id, dark = false, extra = {}) {
  const color = dark ? C.accent1 : C.textPrimary;
  return el(
    `<p style="font-family:${SANS};font-size:18px;font-weight:500;color:${color};">2025</p>`,
    { id, w: 80, h: 28, ...extra },
  );
}

function pageNumber(num, id, dark = false, extra = {}) {
  const color = dark ? C.textOnDarkMuted : C.textPrimary;
  return el(
    `<p style="font-family:${SANS};font-size:14px;font-weight:500;color:${color};letter-spacing:0.1em;text-transform:uppercase;">PAGE ${num}</p>`,
    { id, w: 120, h: 24, ...extra },
  );
}

function categoryLabel(text, id, dark = false, extra = {}) {
  const color = dark ? C.accent1 : C.categoryLabel;
  return el(
    `<p style="font-family:${SANS};font-size:18px;font-weight:500;color:${color};text-transform:uppercase;letter-spacing:0.15em;">${text}</p>`,
    { id, h: 28, ...extra },
  );
}

function sectionHeading(text, id, dark = false, extra = {}) {
  const color = dark ? C.textOnDark : C.textPrimary;
  return el(
    `<h2 style="font-family:'${SERIF}',serif;font-size:64px;font-weight:400;color:${color};line-height:1.15;">${text}</h2>`,
    { id, ...extra },
  );
}

function decorCircle(id, x, y, size, color, opacity = 0.85) {
  return el(
    `<div style="width:100%;height:100%;border-radius:50%;background:${color};"></div>`,
    { id, x, y, w: size, h: size, opacity, layer: 'bg' },
  );
}

function iconCircle(icon, id, size, bg, iconColor) {
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${bg};display:flex;align-items:center;justify-content:center;margin:0 auto;"><span style="font-size:${Math.round(size * 0.4)}px;color:${iconColor};line-height:1;">${icon}</span></div>`;
}

// -- Image Assets ----------------------------------------------------------------

const IMAGES = {
  sarahChen:    './images/sarah-chen.jpg',
  marcusObi:    './images/marcus-obi.jpg',
  elenaTorres:  './images/elena-torres.jpg',
  jamesRivera:  './images/james-rivera.jpg',
};

function img(src) {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;">`;
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'DM Serif Display', weights: [400], source: 'google' },
      { family: 'DM Sans', weights: [400, 500, 600, 700], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: OVERVIEW / MOSAIC
    // ================================================================
    {
      id: 'overview-mosaic',
      background: C.bgPrimary,
      notes: 'Overview / Mosaic — visual table-of-contents',
      elements: (() => {
        const gap = 24;
        const cols = 3;
        const rows = 2;
        const thumbW = (safe.w - gap * (cols - 1)) / cols;
        const headerH = 160;
        const gridY = safe.y + headerH + 30;
        const thumbH = (safe.h - headerH - 30 - gap - 40) / rows;

        const thumbs = [
          { label: 'Feature List',         color: C.accent1, textColor: C.textPrimary },
          { label: 'Team Grid',            color: C.bgSecondary, textColor: C.textOnDark },
          { label: 'Roadmap / Timeline',   color: C.bgWhite, textColor: C.textPrimary },
          { label: 'Problem / Radial',     color: C.bgBrightGreen, textColor: C.textPrimary },
          { label: 'Case Study',           color: C.accent2, textColor: C.textOnDark },
          { label: 'Contact',              color: C.bgPrimary, textColor: C.textPrimary },
        ];

        const elements = [
          yearMarker('s1-year', false, { x: safe.x, y: safe.y }),
          categoryLabel('Deck Overview', 's1-cat', false, { x: safe.x, y: safe.y + 44, w: 400 }),
          el(`<h1 style="font-family:'${SERIF}',serif;font-size:52px;font-weight:400;color:${C.textPrimary};line-height:1.15;">SteerWise Trading Academy</h1>`, {
            id: 's1-title', x: safe.x, y: below('s1-cat', { gap: 12 }), w: safe.w, h: 66,
          }),
        ];

        for (let i = 0; i < thumbs.length; i++) {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const tx = safe.x + col * (thumbW + gap);
          const ty = gridY + row * (thumbH + gap);
          const t = thumbs[i];

          const borderStyle = t.color === C.bgWhite || t.color === C.bgPrimary
            ? `border:2px solid ${C.border};` : '';

          elements.push(
            el(`<div style="width:100%;height:100%;border-radius:9999px;background:${t.color};${borderStyle}display:flex;align-items:center;justify-content:center;">
              <p style="font-family:${SANS};font-size:22px;font-weight:600;color:${t.textColor};text-align:center;">${t.label}</p>
            </div>`, {
              id: `s1-thumb${i}`, x: tx, y: ty, w: thumbW, h: thumbH,
            }),
          );
        }

        elements.push(
          pageNumber('01', 's1-page', false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel('Overview / Mosaic', 's1-tpl', false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 260 }),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 2: FEATURE LIST
    // ================================================================
    {
      id: 'feature-list',
      background: C.bgPrimary,
      notes: 'Feature List — The SteerWise Advantage',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.38, gap: 60 });

        const features = [
          { text: 'Live market analysis with AI-powered signals', bg: C.bgWhite, color: C.textPrimary, icon: '📊' },
          { text: 'Personalized risk management coaching', bg: C.accent1, color: C.textPrimary, icon: '🛡️' },
          { text: 'Community of 5,000+ active traders', bg: C.accent2, color: C.textOnDark, icon: '👥' },
          { text: 'Institutional-grade research & tools', bg: C.bgSecondary, color: C.textOnDark, icon: '🔬' },
        ];

        const pillH = 72;
        const pillGap = 24;
        const startY = right.y + 100;

        const elements = [
          yearMarker('s2-year', false, { x: safe.x, y: safe.y }),
          categoryLabel('Why Choose Us?', 's2-cat', false, { x: left.x, y: left.y + 240, w: left.w }),
          sectionHeading('The SteerWise<br>Advantage', 's2-heading', false, {
            x: left.x, y: below('s2-cat', { gap: 16 }), w: left.w, h: 160,
          }),
        ];

        for (let i = 0; i < features.length; i++) {
          const f = features[i];
          const fy = startY + i * (pillH + pillGap);
          const circSize = 56;

          // Icon circle
          elements.push(
            el(`<div style="width:100%;height:100%;border-radius:50%;background:${i < 2 ? C.accent1 : '#DAFBE1'};display:flex;align-items:center;justify-content:center;">
              <span style="font-size:24px;line-height:1;">${f.icon}</span>
            </div>`, {
              id: `s2-icon${i}`, x: right.x, y: fy + (pillH - circSize) / 2, w: circSize, h: circSize,
            }),
          );

          // Pill card
          elements.push(
            el(`<div style="${pill(f.bg)}display:flex;align-items:center;min-height:${pillH - 36}px;">
              <p style="font-family:${SANS};font-size:20px;font-weight:400;color:${f.color};line-height:1.4;margin:0;">${f.text}</p>
            </div>`, {
              id: `s2-pill${i}`, x: right.x + circSize + 16, y: fy, w: right.w - circSize - 16,
            }),
          );
        }

        elements.push(
          pageNumber('02', 's2-page', false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel('Feature List', 's2-tpl', false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 240 }),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3: TEAM GRID
    // ================================================================
    {
      id: 'team-grid',
      background: C.bgSecondary,
      notes: 'Team Grid — Meet the Minds Behind SteerWise',
      elements: (() => {
        const team = [
          { name: 'Sarah Chen', role: 'Head of Research', initials: 'SC' },
          { name: 'Marcus Obi', role: 'Lead Strategist', initials: 'MO' },
          { name: 'Elena Torres', role: 'Risk Analyst', initials: 'ET' },
        ];

        // Decorative circles on the left
        const decoCircles = [
          { x: 80, y: 120, s: 140 },
          { x: 250, y: 80, s: 100 },
          { x: 160, y: 300, s: 180 },
          { x: 60, y: 520, s: 120 },
          { x: 280, y: 480, s: 90 },
          { x: 100, y: 700, s: 160 },
          { x: 320, y: 680, s: 110 },
          { x: 200, y: 860, s: 80 },
        ];

        const elements = [];

        for (let i = 0; i < decoCircles.length; i++) {
          const d = decoCircles[i];
          elements.push(decorCircle(`s3-deco${i}`, d.x, d.y, d.s, C.decorCircle, 0.7));
        }

        // Right side: heading
        const headX = safe.x + safe.w * 0.55;
        const headW = safe.w * 0.40;

        elements.push(
          yearMarker('s3-year', true, { x: headX, y: safe.y }),
          categoryLabel('Our Team', 's3-cat', true, { x: headX, y: safe.y + safe.h * 0.38, w: headW }),
          sectionHeading('Meet the Minds<br>Behind SteerWise', 's3-heading', true, {
            x: headX, y: below('s3-cat', { gap: 16 }), w: headW, h: 160,
          }),
        );

        // Team cards — staggered on left side
        const cardStartX = 460;
        const cardPositions = [
          { x: cardStartX, y: 130 },
          { x: cardStartX + 70, y: 390 },
          { x: cardStartX - 40, y: 640 },
        ];

        const teamImages = [IMAGES.sarahChen, IMAGES.marcusObi, IMAGES.elenaTorres];

        for (let i = 0; i < team.length; i++) {
          const t = team[i];
          const p = cardPositions[i];
          const photoSize = 90;

          // Photo circle
          elements.push(
            el(`<div style="width:100%;height:100%;border-radius:50%;border:3px solid ${C.bgWhite};overflow:hidden;">
              ${img(teamImages[i])}
            </div>`, {
              id: `s3-photo${i}`, x: p.x, y: p.y, w: photoSize, h: photoSize,
            }),
          );

          // Name pill
          elements.push(
            el(`<div style="${pill(C.accent1)}">
              <p style="font-family:${SANS};font-size:18px;font-weight:600;color:${C.textPrimary};margin:0;">${t.name}</p>
              <p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};margin:4px 0 0 0;">${t.role}</p>
            </div>`, {
              id: `s3-pill${i}`, x: p.x + photoSize + 14, y: p.y + 8, w: 280,
            }),
          );
        }

        elements.push(
          pageNumber('03', 's3-page', true, { x: headX, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel('Team Grid', 's3-tpl', true, { x: headX + 140, y: safe.y + safe.h - 30, w: 200 }),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 4: ROADMAP / TIMELINE
    // ================================================================
    {
      id: 'roadmap-timeline',
      background: C.bgWhite,
      notes: 'Roadmap / Timeline — The Future of SteerWise',
      elements: (() => {
        const phases = [
          {
            title: 'Short Term',
            items: 'Launch mobile trading alerts, expand AI signal accuracy to 92%, onboard 2,000 new members',
            icon: '⚡',
            bg: C.bgPrimary,
            textColor: C.textPrimary,
            iconBg: C.accent1,
          },
          {
            title: 'Medium Term',
            items: 'Open European markets coverage, introduce copy-trading feature, partner with 3 major brokers',
            icon: '📈',
            bg: C.accent2,
            textColor: C.textOnDark,
            iconBg: C.bgPrimary,
          },
          {
            title: 'Long Term',
            items: 'Launch SteerWise Fund, AI-driven portfolio management, global expansion across 20 markets',
            icon: '🌍',
            bg: C.bgSecondary,
            textColor: C.textOnDark,
            iconBg: C.accent1,
          },
        ];

        const topSectionH = Math.round(safe.h * 0.40);
        const colGap = 0;
        const cols = 3;
        const colW = Math.floor(safe.w / cols);
        const colH = safe.h - topSectionH;
        const colY = safe.y + topSectionH;

        const elements = [
          yearMarker('s4-year', false, { x: safe.x, y: safe.y }),
          pageNumber('04', 's4-page', false, { x: safe.x + safe.w - 120, y: safe.y, w: 120 }),

          categoryLabel('Our Roadmap', 's4-cat', false, {
            x: 960, y: safe.y + 100, w: 300, anchor: 'tc',
            style: { textAlign: 'center' },
          }),
          el(`<h2 style="font-family:'${SERIF}',serif;font-size:56px;font-weight:400;color:${C.textPrimary};line-height:1.15;text-align:center;">The Future of SteerWise</h2>`, {
            id: 's4-title', x: 960, y: below('s4-cat', { gap: 16 }), w: 900, h: 72, anchor: 'tc',
          }),
        ];

        for (let i = 0; i < phases.length; i++) {
          const p = phases[i];
          const cx = safe.x + i * colW;
          const iconSize = 80;

          // Column background
          elements.push(
            el(`<div style="width:100%;height:100%;background:${p.bg};"></div>`, {
              id: `s4-col${i}`, x: cx, y: colY, w: colW, h: colH, layer: 'bg',
            }),
          );

          // Icon circle
          elements.push(
            el(`<div style="width:${iconSize}px;height:${iconSize}px;border-radius:50%;background:${p.iconBg};display:flex;align-items:center;justify-content:center;margin:0 auto;">
              <span style="font-size:32px;line-height:1;">${p.icon}</span>
            </div>`, {
              id: `s4-icon${i}`, x: cx + (colW - iconSize) / 2, y: colY + 50, w: iconSize, h: iconSize,
            }),
          );

          // Phase title
          elements.push(
            el(`<p style="font-family:${SANS};font-size:24px;font-weight:600;color:${p.textColor};text-align:center;">${p.title}</p>`, {
              id: `s4-phase${i}`, x: cx + 32, y: below(`s4-icon${i}`, { gap: 24 }), w: colW - 64, h: 34,
            }),
          );

          // Phase body
          elements.push(
            el(`<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${p.textColor};line-height:1.6;text-align:center;opacity:0.85;">${p.items}</p>`, {
              id: `s4-body${i}`, x: cx + 40, y: below(`s4-phase${i}`, { gap: 16 }), w: colW - 80,
            }),
          );
        }

        elements.push(
          templateLabel('Roadmap / Timeline', 's4-tpl', false, { x: safe.x, y: safe.y + safe.h - 30, w: 260 }),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 5: PROBLEM / RADIAL
    // ================================================================
    {
      id: 'problem-radial',
      background: C.bgBrightGreen,
      notes: 'Problem / Radial — The Challenges Traders Face Today',
      elements: (() => {
        const cx = 960;
        const cy = 540;
        const bigCircleR = 300;

        const challenges = [
          { text: 'Information overload from too many signal providers', icon: '📡', angle: -55 },
          { text: 'Emotional trading decisions without a structured plan', icon: '😰', angle: 35 },
          { text: 'Lack of proper risk management frameworks', icon: '⚠️', angle: 145 },
          { text: 'No access to institutional-grade analytics tools', icon: '🔒', angle: 235 },
        ];

        const bubbleR = 125;
        const orbitR = 420;

        const elements = [
          yearMarker('s5-year', false, { x: safe.x, y: safe.y }),

          // Large decorative circle behind content
          decorCircle('s5-bigcircle', cx - bigCircleR, cy - bigCircleR, bigCircleR * 2, C.bgPrimary, 0.3),

          // Center heading
          categoryLabel('Market Reality', 's5-cat', false, {
            x: cx, y: cy - 50, w: 400, anchor: 'tc',
            style: { textAlign: 'center' },
          }),
          el(`<h2 style="font-family:'${SERIF}',serif;font-size:48px;font-weight:400;color:${C.textPrimary};line-height:1.15;text-align:center;">Challenges<br>Traders Face</h2>`, {
            id: 's5-title', x: cx, y: below('s5-cat', { gap: 12 }), w: 400, h: 120, anchor: 'tc',
          }),
        ];

        for (let i = 0; i < challenges.length; i++) {
          const c = challenges[i];
          const rad = (c.angle * Math.PI) / 180;
          const bx = cx + orbitR * Math.cos(rad) - bubbleR;
          const by = cy + orbitR * Math.sin(rad) - bubbleR;

          elements.push(
            el(`<div style="width:100%;height:100%;border-radius:50%;background:${C.bgSecondary};display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px;">
              <span style="font-size:32px;line-height:1;margin-bottom:12px;">${c.icon}</span>
              <p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textOnDark};text-align:center;line-height:1.5;margin:0;">${c.text}</p>
            </div>`, {
              id: `s5-bubble${i}`, x: bx, y: by, w: bubbleR * 2, h: bubbleR * 2,
            }),
          );
        }

        elements.push(
          pageNumber('05', 's5-page', false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel('Problem / Radial', 's5-tpl', false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 260 }),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 6: CASE STUDY / TESTIMONIAL
    // ================================================================
    {
      id: 'case-study',
      background: C.bgPrimary,
      notes: 'Case Study / Testimonial — SteerWise in Action',
      elements: (() => {
        const photoW = safe.w * 0.32;
        const photoH = safe.h * 0.55;
        const photoX = safe.x + 20;
        const photoY = safe.y + 60;

        // Testimonial circle
        const testimR = 250;
        const testimCx = safe.x + safe.w * 0.65;
        const testimCy = safe.y + safe.h * 0.42;

        // Stat badge
        const statR = 130;
        const statCx = safe.x + safe.w * 0.50;
        const statCy = safe.y + safe.h * 0.78;

        const elements = [
          yearMarker('s6-year', false, { x: safe.x, y: safe.y }),

          // Case study photo
          el(`<div style="width:100%;height:100%;border-radius:32px;overflow:hidden;">
            ${img(IMAGES.jamesRivera)}
          </div>`, {
            id: 's6-photo', x: photoX, y: photoY, w: photoW, h: photoH,
          }),

          // Heading area - below the photo
          categoryLabel('Success Story', 's6-cat', false, {
            x: safe.x, y: photoY + photoH + 24, w: 300,
          }),
          sectionHeading('SteerWise<br>in Action', 's6-heading', false, {
            x: safe.x, y: below('s6-cat', { gap: 12 }), w: 400, h: 155,
          }),

          // Supporting text (above testimonial, non-overlapping)
          el(`<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${C.textSecondary};line-height:1.6;">James joined SteerWise as a retail trader struggling with consistency. Within 6 months, he developed a systematic approach that transformed his results.</p>`, {
            id: 's6-support', x: testimCx - testimR, y: safe.y + 80, w: testimR * 2,
          }),

          // Testimonial circle
          el(`<div style="width:100%;height:100%;border-radius:50%;background:${C.accent1};display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px;">
            <p style="font-family:${SANS};font-size:18px;font-weight:600;color:${C.textPrimary};margin:0 0 12px 0;">James Rivera</p>
            <p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textPrimary};text-align:center;line-height:1.6;margin:0;opacity:0.85;">"SteerWise gave me the framework I needed. The community support and AI signals changed everything."</p>
          </div>`, {
            id: 's6-testimonial', x: testimCx - testimR, y: testimCy - testimR + 60, w: testimR * 2, h: testimR * 2,
          }),

          // Stat badge - positioned to not overlap testimonial
          el(`<div style="width:100%;height:100%;border-radius:50%;background:${C.bgWhite};display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;">
            <p style="font-family:${SANS};font-size:42px;font-weight:700;color:${C.textPrimary};margin:0;line-height:1;">30%</p>
            <p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};margin:6px 0 0 0;text-align:center;">avg. monthly return improvement</p>
          </div>`, {
            id: 's6-stat', x: statCx - statR, y: statCy - statR, w: statR * 2, h: statR * 2,
            parentId: 's6-testimonial',
          }),

          // Icon badges
          el(`<div style="width:52px;height:52px;border-radius:50%;background:${C.accent1};display:flex;align-items:center;justify-content:center;">
            <span style="font-size:22px;line-height:1;">📈</span>
          </div>`, {
            id: 's6-badge1', x: photoX + photoW + 30, y: safe.y + 100, w: 52, h: 52,
          }),
          el(`<div style="width:52px;height:52px;border-radius:50%;background:${C.bgSecondary};display:flex;align-items:center;justify-content:center;">
            <span style="font-size:22px;line-height:1;">💡</span>
          </div>`, {
            id: 's6-badge2', x: photoX + photoW + 100, y: safe.y + 80, w: 52, h: 52,
          }),

          pageNumber('06', 's6-page', false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel('Case Study / Testimonial', 's6-tpl', false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 300 }),
        ];
        return elements;
      })(),
    },
  ];

  return await render(slides);
}
