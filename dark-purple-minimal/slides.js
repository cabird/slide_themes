// slides.js — "Streamline: The Modern Project Tracker"
// Linear (Dark SaaS) theme proof-of-concept

import {
  init, render, safeRect, splitRect, el,
  below, rightOf, vstack, panel,
} from '../slidekit.bundle.min.js';

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:    '#0A0B0F',
  bgSecondary:  '#1C1E26',
  textPrimary:  '#FFFFFF',
  textSecondary:'#8A8F98',
  textTertiary: '#6B7280',
  accent:       '#5E6AD2',
  accent2:      '#7C85DB',
  border:       '#2A2D35',
  quoteText:    '#C8CCD4',
};

const FONT = 'Inter';

// -- Reusable Helpers ------------------------------------------------------------

function sectionLabel(text, id, extra = {}) {
  return el(
    `<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:500;color:${C.accent};letter-spacing:0.02em;">${text}</p>`,
    { id, h: 28, ...extra },
  );
}

function templateLabel(name, id, extra = {}) {
  return el(
    `<p style="font-family:${FONT},sans-serif;font-size:13px;font-weight:400;color:${C.textTertiary};letter-spacing:0.02em;">Template: ${name}</p>`,
    { id, ...extra },
  );
}

function slideNumber(num, id) {
  return el(
    `<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textTertiary};">${num}</p>`,
    { id, x: 48, y: 1026, w: 60, h: 24 },
  );
}

function logoMark(id) {
  return el(
    `<div style="width:100%;height:100%;"><svg viewBox="0 0 32 32" style="width:100%;height:100%;display:block;"><path d="M3.5 28.5 L3.5 8 L16 16 L3.5 28.5Z" fill="${C.accent}" opacity="0.6"/><path d="M10 24.5 L10 4 L22.5 12 L10 24.5Z" fill="${C.accent}" opacity="0.8"/><path d="M16.5 20.5 L16.5 0 L29 8 L16.5 20.5Z" fill="${C.accent}"/></svg></div>`,
    { id, x: 48, y: 32, w: 48, h: 48 },
  );
}

function sidebarText(text, id) {
  return el(
    `<p style="font-family:${FONT},sans-serif;font-size:13px;font-weight:400;color:${C.textTertiary};letter-spacing:0.06em;text-transform:uppercase;writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;">${text}</p>`,
    { id, x: 28, y: 320, w: 20, h: 400 },
  );
}

function bgGlow(id, opacity = 0.06) {
  return el(
    `<div style="width:100%;height:100%;background:radial-gradient(ellipse at 75% 20%, ${C.accent} 0%, transparent 70%);"></div>`,
    { id, x: 0, y: 0, w: 1920, h: 1080, opacity, layer: 'bg' },
  );
}

function featureIcon(icon) {
  // Simple SVG line-style icons
  const icons = {
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="${C.textPrimary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="${C.textPrimary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="${C.textPrimary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    target: `<svg viewBox="0 0 24 24" fill="none" stroke="${C.textPrimary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="${C.textPrimary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="${C.textPrimary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="${C.textPrimary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  };
  return icons[icon] || icons['bolt'];
}

function screenshotPlaceholder(id, x, y, w, h) {
  // Dark UI screenshot placeholder mimicking a project tracker interface
  return el(
    `<div style="width:100%;height:100%;background:${C.bgSecondary};border:1px solid ${C.border};border-radius:8px;padding:16px;box-sizing:border-box;">
      <div style="display:flex;gap:8px;margin-bottom:16px;">
        <div style="width:10px;height:10px;border-radius:50%;background:#FF5F57;"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#FEBC2E;"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#28C840;"></div>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:20px;">
        <div style="width:80px;height:24px;background:${C.accent};border-radius:4px;opacity:0.3;"></div>
        <div style="width:60px;height:24px;background:${C.border};border-radius:4px;"></div>
        <div style="width:70px;height:24px;background:${C.border};border-radius:4px;"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="height:36px;background:${C.bgPrimary};border:1px solid ${C.border};border-radius:6px;display:flex;align-items:center;padding:0 12px;gap:8px;">
          <div style="width:14px;height:14px;border-radius:3px;background:${C.accent};opacity:0.5;"></div>
          <div style="width:140px;height:10px;background:${C.textTertiary};border-radius:2px;opacity:0.4;"></div>
          <div style="margin-left:auto;width:60px;height:10px;background:${C.border};border-radius:2px;"></div>
        </div>
        <div style="height:36px;background:${C.bgPrimary};border:1px solid ${C.border};border-radius:6px;display:flex;align-items:center;padding:0 12px;gap:8px;">
          <div style="width:14px;height:14px;border-radius:3px;background:#28C840;opacity:0.5;"></div>
          <div style="width:180px;height:10px;background:${C.textTertiary};border-radius:2px;opacity:0.4;"></div>
          <div style="margin-left:auto;width:40px;height:10px;background:${C.border};border-radius:2px;"></div>
        </div>
        <div style="height:36px;background:${C.bgPrimary};border:1px solid ${C.border};border-radius:6px;display:flex;align-items:center;padding:0 12px;gap:8px;">
          <div style="width:14px;height:14px;border-radius:3px;background:#FEBC2E;opacity:0.5;"></div>
          <div style="width:120px;height:10px;background:${C.textTertiary};border-radius:2px;opacity:0.4;"></div>
          <div style="margin-left:auto;width:50px;height:10px;background:${C.border};border-radius:2px;"></div>
        </div>
        <div style="height:36px;background:${C.bgPrimary};border:1px solid ${C.border};border-radius:6px;display:flex;align-items:center;padding:0 12px;gap:8px;">
          <div style="width:14px;height:14px;border-radius:3px;background:#FF5F57;opacity:0.5;"></div>
          <div style="width:160px;height:10px;background:${C.textTertiary};border-radius:2px;opacity:0.4;"></div>
          <div style="margin-left:auto;width:70px;height:10px;background:${C.border};border-radius:2px;"></div>
        </div>
        <div style="height:36px;background:${C.bgPrimary};border:1px solid ${C.border};border-radius:6px;display:flex;align-items:center;padding:0 12px;gap:8px;">
          <div style="width:14px;height:14px;border-radius:3px;background:${C.accent};opacity:0.5;"></div>
          <div style="width:100px;height:10px;background:${C.textTertiary};border-radius:2px;opacity:0.4;"></div>
          <div style="margin-left:auto;width:45px;height:10px;background:${C.border};border-radius:2px;"></div>
        </div>
      </div>
    </div>`,
    { id, x, y, w, h },
  );
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Inter', weights: [400, 500, 600], source: 'google' },
    ],
  });

  const safe = safeRect();
  // Left column starts at ~11% (211px) from left edge
  const leftX = 211;
  const leftW = 672;    // ~35% of slide width
  const topY = 140;     // ~13% from top

  const slides = [

    // ================================================================
    // SLIDE 1: HERO TITLE
    // ================================================================
    {
      id: 'hero-title',
      background: C.bgPrimary,
      notes: 'Opening slide — Hero Title template',
      elements: [
        bgGlow('s1-glow', 0.07),
        logoMark('s1-logo'),
        sidebarText('Build better software', 's1-sidebar'),

        sectionLabel('Streamline', 's1-section', {
          x: leftX, y: topY, w: leftW,
        }),

        el(`<h1 style="font-family:${FONT},sans-serif;font-size:72px;font-weight:600;color:${C.textPrimary};line-height:1.1;letter-spacing:-0.02em;">Plan. Track.<br>Ship faster.</h1>`, {
          id: 's1-title', x: leftX, y: below('s1-section', { gap: 16 }), w: 800, h: 170,
        }),

        el(`<p style="font-family:${FONT},sans-serif;font-size:22px;font-weight:400;color:${C.textSecondary};line-height:1.55;">The project management tool built for modern engineering teams. Streamline brings clarity to every sprint, every cycle, every milestone.</p>`, {
          id: 's1-body', x: leftX, y: below('s1-title', { gap: 32 }), w: 672,
        }),

        el(`<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:500;color:${C.textPrimary};">Get started free →</p>`, {
          id: 's1-cta', x: leftX, y: below('s1-body', { gap: 36 }), w: 300,
        }),

        slideNumber('01', 's1-num'),
        templateLabel('Hero Title', 's1-tpl', { x: safe.x, y: safe.y + safe.h - 24, w: 240 }),
      ],
    },

    // ================================================================
    // SLIDE 2: FEATURE OVERVIEW + CARD GRID
    // ================================================================
    {
      id: 'feature-overview',
      background: C.bgPrimary,
      notes: 'Feature Overview + Card Grid template',
      elements: (() => {
        const cardGap = 20;
        const gridX = 960;
        const gridW = 1920 - 960 - 120;  // right column, within safe zone
        const cardW = (gridW - cardGap) / 2;
        const cardH = 260;
        const gridY = topY + 20;

        const cards = [
          { icon: 'bolt', title: 'Lightning Fast', desc: 'Sub-50ms interactions. Every action feels instant, from creating issues to updating sprints.' },
          { icon: 'layers', title: 'Smart Workflows', desc: 'Automated state transitions and custom workflows that adapt to how your team actually works.' },
          { icon: 'cpu', title: 'Deep Integrations', desc: 'Native connections to GitHub, GitLab, Slack, and Figma. Your tools, unified.' },
          { icon: 'target', title: 'Goal Tracking', desc: 'Set objectives, link them to projects, and watch progress flow up automatically.' },
        ];

        const elements = [
          bgGlow('s2-glow', 0.05),
          logoMark('s2-logo'),
          sidebarText('Build better software', 's2-sidebar'),

          sectionLabel('Core Features', 's2-section', { x: leftX, y: topY, w: leftW }),

          el(`<h2 style="font-family:${FONT},sans-serif;font-size:52px;font-weight:600;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.02em;">Everything you<br>need to ship</h2>`, {
            id: 's2-title', x: leftX, y: below('s2-section', { gap: 16 }), w: leftW, h: 130,
          }),

          el(`<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.55;">A purpose-built toolkit for engineering teams who refuse to compromise on speed or quality.</p>`, {
            id: 's2-body', x: leftX, y: below('s2-title', { gap: 32 }), w: leftW,
          }),
        ];

        for (let i = 0; i < cards.length; i++) {
          const c = cards[i];
          const col = i % 2;
          const row = Math.floor(i / 2);
          const cx = gridX + col * (cardW + cardGap);
          const cy = gridY + row * (cardH + cardGap);

          elements.push(
            el(`<div style="width:100%;height:100%;background:${C.bgSecondary};border:1px solid ${C.border};border-radius:8px;padding:28px;box-sizing:border-box;">
              <div style="width:32px;height:32px;margin-bottom:16px;">${featureIcon(c.icon)}</div>
              <p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:600;color:${C.textPrimary};margin:0 0 10px 0;line-height:1.3;">${c.title}</p>
              <p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.55;">${c.desc}</p>
            </div>`, {
              id: `s2-card${i}`, x: cx, y: cy, w: cardW, h: cardH,
            }),
          );
        }

        elements.push(
          slideNumber('02', 's2-num'),
          templateLabel('Feature Overview + Card Grid', 's2-tpl', { x: safe.x, y: safe.y + safe.h - 24, w: 300 }),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3: BENEFITS + TESTIMONIALS
    // ================================================================
    {
      id: 'benefits-testimonials',
      background: C.bgPrimary,
      notes: 'Benefits + Testimonials template',
      elements: (() => {
        const benefits = [
          { icon: 'check', title: 'Keyboard-first design', desc: 'Navigate your entire workflow without touching the mouse. Every action has a shortcut.' },
          { icon: 'clock', title: 'Real-time collaboration', desc: 'See changes as they happen. No refresh needed, no merge conflicts on status updates.' },
          { icon: 'shield', title: 'Enterprise-grade security', desc: 'SOC 2 Type II certified. SSO, SCIM, and audit logs included on every plan.' },
        ];

        const quotes = [
          { text: '"Streamline replaced three tools for us. Issue tracking, sprint planning, and roadmapping — all in one place."', company: 'Vercel Engineering' },
          { text: '"We shipped 40% more features in Q3 after switching. The speed difference is not subtle."', company: 'Stripe Platform Team' },
        ];

        const elements = [
          bgGlow('s3-glow', 0.05),
          logoMark('s3-logo'),
          sidebarText('Build better software', 's3-sidebar'),

          sectionLabel('Why Streamline', 's3-section', { x: leftX, y: topY, w: leftW }),

          el(`<h2 style="font-family:${FONT},sans-serif;font-size:52px;font-weight:600;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.02em;">Built for teams<br>who ship</h2>`, {
            id: 's3-title', x: leftX, y: below('s3-section', { gap: 16 }), w: leftW, h: 130,
          }),
        ];

        // Benefit items
        let lastBenefitId = 's3-title';
        for (let i = 0; i < benefits.length; i++) {
          const b = benefits[i];
          const iconId = `s3-bicon${i}`;
          const titleId = `s3-btitle${i}`;
          const descId = `s3-bdesc${i}`;
          const gap = i === 0 ? 36 : 24;

          // Icon circle
          elements.push(
            el(`<div style="width:100%;height:100%;border-radius:50%;background:${C.bgSecondary};border:1px solid ${C.border};display:flex;align-items:center;justify-content:center;">
              <div style="width:22px;height:22px;">${featureIcon(b.icon)}</div>
            </div>`, {
              id: iconId, x: leftX, y: below(lastBenefitId, { gap }), w: 44, h: 44,
            }),
          );

          // Title text
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:600;color:${C.textPrimary};line-height:44px;">${b.title}</p>`, {
              id: titleId, x: leftX + 60, y: below(lastBenefitId, { gap }), w: leftW - 60, h: 44,
            }),
          );

          // Description
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.5;">${b.desc}</p>`, {
              id: descId, x: leftX + 60, y: below(titleId, { gap: 2 }), w: leftW - 60,
            }),
          );

          lastBenefitId = descId;
        }

        // Testimonials — right column
        const quoteX = 1056;
        const quoteW = 720;
        let lastQuoteId = '';

        for (let i = 0; i < quotes.length; i++) {
          const q = quotes[i];
          const qId = `s3-quote${i}`;
          const qAttrId = `s3-qattr${i}`;
          const qy = i === 0 ? topY + 40 : undefined;

          // Accent bar + quote
          elements.push(
            el(`<div style="width:100%;box-sizing:border-box;border-left:4px solid ${C.accent};padding-left:24px;">
              <p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:400;color:${C.quoteText};line-height:1.6;margin:0;">${q.text}</p>
            </div>`, {
              id: qId,
              x: quoteX,
              y: qy !== undefined ? qy : below(lastQuoteId, { gap: 48 }),
              w: quoteW,
            }),
          );

          // Attribution
          elements.push(
            el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:600;color:${C.textPrimary};margin:0;">— ${q.company}</p>`, {
              id: qAttrId, x: quoteX + 28, y: below(qId, { gap: 16 }), w: quoteW - 28,
            }),
          );

          lastQuoteId = qAttrId;
        }

        elements.push(
          slideNumber('03', 's3-num'),
          templateLabel('Benefits + Testimonials', 's3-tpl', { x: safe.x, y: safe.y + safe.h - 24, w: 300 }),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 4: FEATURE + SCREENSHOT
    // ================================================================
    {
      id: 'feature-screenshot',
      background: C.bgPrimary,
      notes: 'Feature + Screenshot template',
      elements: (() => {
        const scrX = 930;
        const scrY = 94;
        const scrW = 870;
        const scrH = 892;

        return [
          bgGlow('s4-glow', 0.06),
          logoMark('s4-logo'),
          sidebarText('Build better software', 's4-sidebar'),

          sectionLabel('Issue Tracking', 's4-section', { x: leftX, y: topY, w: leftW }),

          el(`<h2 style="font-family:${FONT},sans-serif;font-size:52px;font-weight:600;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.02em;">Track every<br>issue with clarity</h2>`, {
            id: 's4-title', x: leftX, y: below('s4-section', { gap: 16 }), w: leftW, h: 130,
          }),

          el(`<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.55;">Create, assign, and prioritize issues in seconds. Smart filters and custom views let you see exactly what matters — nothing more, nothing less.</p>`, {
            id: 's4-body', x: leftX, y: below('s4-title', { gap: 32 }), w: leftW,
          }),

          el(`<p style="font-family:${FONT},sans-serif;font-size:20px;font-weight:500;color:${C.textPrimary};">See all features →</p>`, {
            id: 's4-cta', x: leftX, y: below('s4-body', { gap: 36 }), w: 300,
          }),

          // Product screenshot placeholder
          screenshotPlaceholder('s4-screenshot', scrX, scrY, scrW, scrH),

          slideNumber('04', 's4-num'),
          templateLabel('Feature + Screenshot', 's4-tpl', { x: safe.x, y: safe.y + safe.h - 24, w: 280 }),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 5: CLOSING CTA
    // ================================================================
    {
      id: 'closing-cta',
      background: C.bgPrimary,
      notes: 'Closing CTA template',
      elements: [
        bgGlow('s5-glow', 0.10),

        // Centered logo — larger
        el(
          `<div style="width:100%;height:100%;"><svg viewBox="0 0 32 32" style="width:100%;height:100%;display:block;"><path d="M3.5 28.5 L3.5 8 L16 16 L3.5 28.5Z" fill="${C.accent}" opacity="0.6"/><path d="M10 24.5 L10 4 L22.5 12 L10 24.5Z" fill="${C.accent}" opacity="0.8"/><path d="M16.5 20.5 L16.5 0 L29 8 L16.5 20.5Z" fill="${C.accent}"/></svg></div>`,
          { id: 's5-logo', x: 960, y: 200, w: 64, h: 64, anchor: 'tc' },
        ),

        el(`<h2 style="font-family:${FONT},sans-serif;font-size:64px;font-weight:600;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.02em;text-align:center;">Ready to streamline<br>your workflow?</h2>`, {
          id: 's5-title', x: 960, y: 360, w: 1100, h: 160, anchor: 'tc',
        }),

        el(`<p style="font-family:${FONT},sans-serif;font-size:22px;font-weight:400;color:${C.textSecondary};line-height:1.55;text-align:center;">Join thousands of engineering teams building better software with Streamline. Free for teams up to 10.</p>`, {
          id: 's5-body', x: 960, y: below('s5-title', { gap: 32 }), w: 800, anchor: 'tc',
        }),

        // CTA button
        el(`<div style="display:inline-block;background:${C.accent};padding:14px 40px;border-radius:6px;">
          <p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:500;color:${C.textPrimary};margin:0;text-align:center;">Start building today →</p>
        </div>`, {
          id: 's5-cta', x: 960, y: below('s5-body', { gap: 40 }), w: 280, anchor: 'tc',
        }),

        // URL
        el(`<p style="font-family:${FONT},sans-serif;font-size:18px;font-weight:400;color:${C.textTertiary};text-align:center;">streamline.dev</p>`, {
          id: 's5-url', x: 960, y: below('s5-cta', { gap: 24 }), w: 300, anchor: 'tc',
        }),

        templateLabel('Closing CTA', 's5-tpl', { x: 960, y: safe.y + safe.h - 24, w: 200, anchor: 'tc' }),
      ],
    },
  ];

  return await render(slides);
}
