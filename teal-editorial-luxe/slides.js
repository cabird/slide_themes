// slides.js — "The Art of Typography: A Visual Journey"
// Elegant Serif theme — editorial, luxurious, refined

import {
  init, render, safeRect, splitRect, el,
  below, rightOf, centerHWith, centerVWith,
  alignTopWith, group, connect,
} from '../slidekit.bundle.min.js';

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:   '#6B9A9E',
  bgSecondary: '#2F4858',
  textPrimary: '#FFFFFF',
  textMuted:   'rgba(255,255,255,0.70)',
  border:      '#FFFFFF',
  accentDark:  '#3D6B6F',
  accentMuted: '#A8C4CB',
  iconResource:'#8EAAB5',
};

const SERIF = 'Playfair Display';
const SANS  = 'Lato';

// -- Reusable Helpers ------------------------------------------------------------

function tpl(name, id, extra = {}) {
  return el(
    `<p style="font-family:${SANS};font-size:13px;font-weight:300;color:rgba(255,255,255,0.22);letter-spacing:0.03em;">${name}</p>`,
    { id, ...extra },
  );
}

function asterisk(id, x, y, size = 44, color = C.textPrimary) {
  return el(
    `<p style="font-family:${SERIF};font-size:${size}px;font-weight:400;color:${color};line-height:1;text-align:center;">✳</p>`,
    { id, x, y, w: size + 10, h: size + 10, layer: 'overlay' },
  );
}

function lBorder(id, x, y, armH, armW, corner = 'tl') {
  let borderCSS = '';
  if (corner === 'tl') borderCSS = `border-top:1px solid ${C.border};border-left:1px solid ${C.border};`;
  else if (corner === 'tr') borderCSS = `border-top:1px solid ${C.border};border-right:1px solid ${C.border};`;
  else if (corner === 'bl') borderCSS = `border-bottom:1px solid ${C.border};border-left:1px solid ${C.border};`;
  else borderCSS = `border-bottom:1px solid ${C.border};border-right:1px solid ${C.border};`;
  return el(
    `<div style="width:100%;height:100%;${borderCSS}"></div>`,
    { id, x, y, w: armW, h: armH, layer: 'overlay' },
  );
}

function headingRule(id, x, y, w = 120) {
  return el('', { id, x, y, w, h: 1, style: { background: C.border } });
}

function photoPanel(src, id, x, y, w, h) {
  return el(img(src), { id, x, y, w, h });
}

// -- Image Assets ----------------------------------------------------------------

const IMAGES = {
  heroTypography:    './images/hero-typography.jpg',
  originsManuscript: './images/origins-manuscript.jpg',
  ancientScripts:    './images/ancient-scripts.jpg',
  typeSpecimens:     './images/type-specimens.jpg',
  typeDrawers:       './images/type-drawers.jpg',
  studioWorkspace:   './images/studio-workspace.jpg',
  letterformCloseup: './images/letterform-closeup.jpg',
  galleryWorkshop:   './images/gallery-workshop.jpg',
  galleryBooks:      './images/gallery-books.jpg',
  galleryCalligraphy:'./images/gallery-calligraphy.jpg',
  galleryPoster:     './images/gallery-poster.jpg',
  galleryWoodtype:   './images/gallery-woodtype.jpg',
  adrianFrutiger:    './images/adrian-frutiger.jpg',
  zuzanaLicko:       './images/zuzana-licko.jpg',
  erikSpiekermann:   './images/erik-spiekermann.jpg',
  jessicaHische:     './images/jessica-hische.jpg',
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
      { family: 'Playfair Display', weights: [400, 700], italics: true, source: 'google' },
      { family: 'Lato', weights: [300, 400], source: 'google' },
    ],
  });

  const safe = safeRect();

  // Panel dimensions for 50/50 splits (photo + content)
  const panelW = 960;
  const panelPad = { x: 110, y: 100 };
  const contentX = panelPad.x;
  const contentW = panelW - panelPad.x * 2;

  const slides = [

    // ================================================================
    // SLIDE 1: HERO TITLE
    // ================================================================
    {
      id: 'hero-title',
      background: C.bgPrimary,
      notes: 'Opening slide — Hero Title template',
      elements: [
        // Photo panel LEFT
        photoPanel(IMAGES.heroTypography, 's1-photo', 0, 0, panelW, 1080),
        // Content panel RIGHT
        el('', { id: 's1-bg', x: panelW, y: 0, w: panelW, h: 1080,
          style: { background: C.bgPrimary }, layer: 'bg' }),

        lBorder('s1-lb-tr', panelW + panelW - 180, 80, 140, 140, 'tr'),

        asterisk('s1-ast', panelW + panelW - 200, 160),

        el(`<h1 style="font-family:${SERIF};font-size:96px;font-weight:700;color:${C.textPrimary};line-height:1.05;letter-spacing:-0.01em;">The Art of<br><em style="font-weight:400;font-style:italic;">Typography</em></h1>`, {
          id: 's1-title', x: panelW + panelPad.x, y: 320, w: contentW, h: 230,
        }),

        headingRule('s1-rule', panelW + panelPad.x, below('s1-title', { gap: 28 }), 100),

        el(`<p style="font-family:${SANS};font-size:22px;font-weight:300;color:${C.textMuted};line-height:1.6;letter-spacing:0.02em;">A visual journey through the history, craft,<br>and beauty of letterforms.</p>`, {
          id: 's1-sub', x: panelW + panelPad.x, y: below('s1-rule', { gap: 24 }), w: contentW,
        }),

        tpl('Hero Title', 's1-tpl', { x: panelW + panelPad.x, y: 1080 - 50, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 2: TABLE OF CONTENTS
    // ================================================================
    {
      id: 'table-of-contents',
      background: C.bgPrimary,
      notes: 'Table of Contents template',
      elements: (() => {
        const cx = safe.x + 60;
        const cw = safe.w - 120;

        const sections = [
          { num: '01', title: 'Origins', desc: 'From cave walls to Gutenberg — the birth of written form' },
          { num: '02', title: 'Anatomy', desc: 'The structure, metrics, and vocabulary of type design' },
          { num: '03', title: 'Modern Era', desc: 'Digital revolution, variable fonts, and the future ahead' },
        ];

        const elements = [
          asterisk('s2-ast', safe.x + safe.w - 60, safe.y + 30),
          lBorder('s2-lb-tl', safe.x, safe.y, 130, 130, 'tl'),

          el(`<h2 style="font-family:${SERIF};font-size:56px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Table of<br><em style="font-weight:400;font-style:italic;">contents</em></h2>`, {
            id: 's2-title', x: cx, y: safe.y + 40, w: 500, h: 150,
          }),
        ];

        let yPos = safe.y + 260;
        for (let i = 0; i < sections.length; i++) {
          const s = sections[i];
          elements.push(
            headingRule(`s2-line${i}`, cx, yPos, cw),
            el(`<p style="font-family:${SERIF};font-size:64px;font-weight:700;color:${C.textPrimary};line-height:1;">${s.num}</p>`, {
              id: `s2-num${i}`, x: cx, y: yPos + 24, w: 120, h: 80,
            }),
            el(`<p style="font-family:${SERIF};font-size:32px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.2;">${s.title}</p>`, {
              id: `s2-stitle${i}`, x: cx + 140, y: yPos + 30, w: 350, h: 42,
            }),
            el(`<p style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};line-height:1.5;letter-spacing:0.02em;">${s.desc}</p>`, {
              id: `s2-desc${i}`, x: cx + 140, y: yPos + 80, w: 600,
            }),
          );
          yPos += 180;
        }

        elements.push(tpl('Table of Contents', 's2-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3: SECTION DIVIDER
    // ================================================================
    {
      id: 'section-divider',
      background: C.bgPrimary,
      notes: 'Section Divider template',
      elements: [
        el('', { id: 's3-bg', x: 0, y: 0, w: panelW, h: 1080,
          style: { background: C.bgPrimary }, layer: 'bg' }),
        photoPanel(IMAGES.originsManuscript, 's3-photo', panelW, 0, panelW, 1080),

        lBorder('s3-lb-tl', contentX, 100, 140, 140, 'tl'),
        lBorder('s3-lb-br', panelW - contentX - 140, 1080 - 240, 140, 140, 'br'),

        el(`<p style="font-family:${SERIF};font-size:160px;font-weight:700;color:${C.textPrimary};line-height:1;">01</p>`, {
          id: 's3-num', x: contentX, y: 180, w: 400, h: 190,
        }),

        el(`<h2 style="font-family:${SERIF};font-size:52px;font-weight:700;color:${C.textPrimary};line-height:1.1;">The <em style="font-weight:400;font-style:italic;">Origins</em></h2>`, {
          id: 's3-title', x: contentX, y: 440, w: contentW, h: 75,
        }),

        headingRule('s3-rule', contentX, below('s3-title', { gap: 24 }), 100),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.6;letter-spacing:0.02em;">Tracing the evolution of written<br>communication from ancient scripts<br>to the printing press.</p>`, {
          id: 's3-desc', x: contentX, y: below('s3-rule', { gap: 20 }), w: contentW,
        }),

        asterisk('s3-ast', panelW - 180, 120),
        tpl('Section Divider', 's3-tpl', { x: contentX, y: 1080 - 50, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 4: ONE COLUMN — CONTENT + PHOTO
    // ================================================================
    {
      id: 'one-column',
      background: C.bgPrimary,
      notes: 'One Column — Content + Photo template',
      elements: [
        el('', { id: 's4-bg', x: 0, y: 0, w: panelW, h: 1080,
          style: { background: C.bgPrimary }, layer: 'bg' }),
        photoPanel(IMAGES.ancientScripts, 's4-photo', panelW, 0, panelW, 1080),

        lBorder('s4-lb-tl', contentX - 20, 80, 120, 120, 'tl'),

        el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">One <em style="font-weight:400;font-style:italic;">column</em></h2>`, {
          id: 's4-title', x: contentX, y: safe.y + 40, w: contentW, h: 65,
        }),

        headingRule('s4-rule', contentX, below('s4-title', { gap: 20 }), 100),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.7;letter-spacing:0.02em;">The Phoenician alphabet, developed around 1050 BCE, was a pivotal innovation — the first widely used phonetic writing system. Each symbol represented a consonant sound rather than a word or syllable.</p>`, {
          id: 's4-body1', x: contentX, y: below('s4-rule', { gap: 24 }), w: contentW,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.7;letter-spacing:0.02em;">This breakthrough spread through Mediterranean trade routes, eventually giving rise to Greek, Latin, and Arabic scripts — the ancestors of nearly every modern alphabet.</p>`, {
          id: 's4-body2', x: contentX, y: below('s4-body1', { gap: 20 }), w: contentW,
        }),

        el(`<ul style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};line-height:2.0;letter-spacing:0.02em;list-style:disc;padding-left:20px;">
          <li>22 consonant characters</li>
          <li>Written right-to-left</li>
          <li>Adapted by Greeks c. 800 BCE</li>
        </ul>`, {
          id: 's4-bullets', x: contentX, y: below('s4-body2', { gap: 24 }), w: contentW,
        }),

        asterisk('s4-ast', contentX + contentW - 50, 1080 - 180),
        tpl('One Column — Content + Photo', 's4-tpl', { x: contentX, y: 1080 - 50, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 5: TWO COLUMNS — CONTENT + PHOTO
    // ================================================================
    {
      id: 'two-columns',
      background: C.bgPrimary,
      notes: 'Two Columns — Content + Photo template',
      elements: (() => {
        const colGap = 50;
        const colW = (contentW - colGap) / 2;

        return [
          el('', { id: 's5-bg', x: 0, y: 0, w: panelW, h: 1080,
            style: { background: C.bgPrimary }, layer: 'bg' }),
          photoPanel(IMAGES.typeSpecimens, 's5-photo', panelW, 0, panelW, 1080),

          lBorder('s5-lb-tr', panelW - contentX - 140, 80, 120, 120, 'tr'),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Two <em style="font-weight:400;font-style:italic;">columns</em></h2>`, {
            id: 's5-title', x: contentX, y: safe.y + 40, w: contentW, h: 65,
          }),

          headingRule('s5-rule', contentX, below('s5-title', { gap: 20 }), 100),

          // Column A
          el(`<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${C.textPrimary};line-height:1.3;letter-spacing:0.04em;text-transform:uppercase;margin:0 0 12px 0;">Serif Typefaces</p>
          <p style="font-family:${SANS};font-size:17px;font-weight:300;color:${C.textMuted};line-height:1.7;letter-spacing:0.02em;">Serif fonts feature small decorative strokes at the ends of letterforms. Originating from Roman inscriptions, they convey tradition, authority, and elegance. Commonly used in print, books, and editorial design.</p>`, {
            id: 's5-colA', x: contentX, y: below('s5-rule', { gap: 28 }), w: colW,
          }),

          // Column B
          el(`<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${C.textPrimary};line-height:1.3;letter-spacing:0.04em;text-transform:uppercase;margin:0 0 12px 0;">Sans-Serif Typefaces</p>
          <p style="font-family:${SANS};font-size:17px;font-weight:300;color:${C.textMuted};line-height:1.7;letter-spacing:0.02em;">Sans-serif fonts lack the decorative strokes, offering a cleaner, more modern look. Popularized in the 20th century by Swiss design, they dominate digital interfaces, signage, and contemporary branding.</p>`, {
            id: 's5-colB', x: contentX + colW + colGap, y: below('s5-rule', { gap: 28 }), w: colW,
          }),

          asterisk('s5-ast', contentX + contentW - 50, 1080 - 180),
          tpl('Two Columns — Content + Photo', 's5-tpl', { x: contentX, y: 1080 - 50, w: 300 }),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 6: THREE COLUMNS — FULL WIDTH
    // ================================================================
    {
      id: 'three-columns',
      background: C.bgPrimary,
      notes: 'Three Columns — Full Width template',
      elements: (() => {
        const cols = 3;
        const gap = 60;
        const cx = safe.x + 60;
        const totalW = safe.w - 120;
        const colW = (totalW - gap * (cols - 1)) / cols;

        const items = [
          { title: 'Humanist', body: 'Based on calligraphic forms. Warm, organic, and readable. Examples include Garamond, Palatino, and Jenson — beloved by book designers for centuries.' },
          { title: 'Transitional', body: 'A bridge between old-style and modern. Greater contrast between thick and thin strokes. Baskerville and Times New Roman are quintessential examples.' },
          { title: 'Didone', body: 'Extreme stroke contrast with hairline serifs. Dramatic and elegant. Bodoni and Didot defined this style — still iconic in fashion magazines today.' },
        ];

        const elements = [
          lBorder('s6-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          asterisk('s6-ast', safe.x + safe.w - 60, safe.y + 30),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Three <em style="font-weight:400;font-style:italic;">columns</em></h2>`, {
            id: 's6-title', x: cx, y: safe.y + 40, w: totalW, h: 65,
          }),

          headingRule('s6-rule', cx, below('s6-title', { gap: 20 }), 100),
        ];

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const colX = cx + i * (colW + gap);
          elements.push(
            el(`<p style="font-family:${SERIF};font-size:28px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.2;margin:0 0 16px 0;">${item.title}</p>
            <div style="width:80px;height:1px;background:${C.border};margin:0 0 20px 0;"></div>
            <p style="font-family:${SANS};font-size:17px;font-weight:300;color:${C.textMuted};line-height:1.7;letter-spacing:0.02em;">${item.body}</p>`, {
              id: `s6-col${i}`, x: colX, y: below('s6-rule', { gap: 40 }), w: colW,
            }),
          );
        }

        elements.push(tpl('Three Columns — Full Width', 's6-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 7: COMPARISON
    // ================================================================
    {
      id: 'comparison',
      background: C.bgPrimary,
      notes: 'Comparison template',
      elements: (() => {
        const gap = 80;
        const cx = safe.x + 60;
        const totalW = safe.w - 120;
        const colW = (totalW - gap) / 2;

        return [
          lBorder('s7-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          lBorder('s7-lb-br', safe.x + safe.w - 130, safe.y + safe.h - 130, 130, 130, 'br'),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Serif vs. <em style="font-weight:400;font-style:italic;">Sans-Serif</em></h2>`, {
            id: 's7-title', x: cx, y: safe.y + 40, w: totalW,
          }),

          headingRule('s7-rule', cx, below('s7-title', { gap: 20 }), 100),

          // Left block
          el(`<p style="font-family:${SERIF};font-size:32px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.2;margin:0 0 20px 0;">Serif</p>
          <div style="width:60px;height:1px;background:${C.border};margin:0 0 24px 0;"></div>
          <ul style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};line-height:2.0;letter-spacing:0.02em;list-style:none;padding:0;">
            <li>• Traditional & authoritative</li>
            <li>• Optimal for long-form print</li>
            <li>• Strong editorial presence</li>
            <li>• Conveys heritage & trust</li>
          </ul>`, {
            id: 's7-left', x: cx, y: below('s7-rule', { gap: 40 }), w: colW,
          }),

          // Right block
          el(`<p style="font-family:${SERIF};font-size:32px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.2;margin:0 0 20px 0;">Sans-Serif</p>
          <div style="width:60px;height:1px;background:${C.border};margin:0 0 24px 0;"></div>
          <ul style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};line-height:2.0;letter-spacing:0.02em;list-style:none;padding:0;">
            <li>• Modern & minimal</li>
            <li>• Ideal for screens & UI</li>
            <li>• Clean geometric forms</li>
            <li>• Conveys innovation & clarity</li>
          </ul>`, {
            id: 's7-right', x: cx + colW + gap, y: below('s7-rule', { gap: 40 }), w: colW,
          }),

          // Center divider line
          el('', { id: 's7-divider', x: cx + colW + gap / 2, y: below('s7-rule', { gap: 30 }), w: 1, h: 400,
            style: { background: 'rgba(255,255,255,0.25)' } }),

          asterisk('s7-ast', safe.x + safe.w - 60, safe.y + 30),
          tpl('Comparison', 's7-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 8: QUOTE / HIGHLIGHT
    // ================================================================
    {
      id: 'quote-highlight',
      background: C.bgPrimary,
      notes: 'Quote / Highlight template',
      elements: [
        asterisk('s8-ast', safe.x + safe.w - 60, safe.y + 30),

        el(`<p style="font-family:${SERIF};font-size:42px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.45;text-align:left;">Typography is the craft of endowing<br>human language with a durable<br>visual form.</p>`, {
          id: 's8-quote', x: 960 - 550, y: 340, w: 1100,
        }),

        el(`<p style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};letter-spacing:0.05em;">— Robert Bringhurst</p>`, {
          id: 's8-attr', x: 960 - 550, y: below('s8-quote', { gap: 40 }), w: 400,
        }),

        headingRule('s8-rule', 960 - 550, below('s8-attr', { gap: 24 }), 80),

        lBorder('s8-lb-tl', safe.x + 100, safe.y + 100, 150, 150, 'tl'),
        lBorder('s8-lb-br', safe.x + safe.w - 250, safe.y + safe.h - 250, 150, 150, 'br'),

        tpl('Quote / Highlight', 's8-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 9: DATA TABLE
    // ================================================================
    {
      id: 'data-table',
      background: C.bgPrimary,
      notes: 'Data Table template',
      elements: (() => {
        const tx = safe.x + 60;
        const tw = safe.w - 120;

        const headers = ['Typeface', 'Designer', 'Year', 'Classification', 'Notable Use'];
        const rows = [
          ['Garamond', 'Claude Garamond', '1530', 'Old Style Serif', 'Book publishing'],
          ['Baskerville', 'John Baskerville', '1757', 'Transitional Serif', 'Government docs'],
          ['Bodoni', 'Giambattista Bodoni', '1798', 'Didone / Modern', 'Fashion magazines'],
          ['Helvetica', 'Max Miedinger', '1957', 'Neo-Grotesque', 'Corporate identity'],
          ['Futura', 'Paul Renner', '1927', 'Geometric Sans', 'NASA plaques'],
        ];

        const colWidths = [0.18, 0.22, 0.10, 0.25, 0.25];
        const rowH = 52;
        const headerY = safe.y + 180;

        const elements = [
          asterisk('s9-ast-a', tx + tw * 0.08, safe.y + 20, 32, C.accentDark),
          asterisk('s9-ast-b', tx + tw * 0.15, safe.y + 20, 32, C.textPrimary),
          asterisk('s9-ast-c', tx + tw * 0.22, safe.y + 20, 32, C.accentMuted),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Data <em style="font-weight:400;font-style:italic;">table</em></h2>`, {
            id: 's9-title', x: tx, y: safe.y + 40, w: tw,
          }),

          headingRule('s9-rule', tx, below('s9-title', { gap: 20 }), 100),
        ];

        // Header row
        let colX = tx;
        for (let c = 0; c < headers.length; c++) {
          const w = tw * colWidths[c];
          elements.push(
            el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.06em;">${headers[c]}</p>`, {
              id: `s9-h${c}`, x: colX, y: headerY, w, h: 30,
            }),
          );
          colX += w;
        }

        // Header line
        elements.push(
          el('', { id: 's9-hline', x: tx, y: headerY + 36, w: tw, h: 1, style: { background: C.border } }),
        );

        // Data rows
        for (let r = 0; r < rows.length; r++) {
          const ry = headerY + 50 + r * rowH;
          colX = tx;
          for (let c = 0; c < rows[r].length; c++) {
            const w = tw * colWidths[c];
            elements.push(
              el(`<p style="font-family:${SANS};font-size:16px;font-weight:300;color:${C.textMuted};line-height:1.4;">${rows[r][c]}</p>`, {
                id: `s9-r${r}c${c}`, x: colX, y: ry, w, h: 30,
              }),
            );
            colX += w;
          }
          // Row separator
          elements.push(
            el('', { id: `s9-rline${r}`, x: tx, y: ry + 40, w: tw, h: 1,
              style: { background: 'rgba(255,255,255,0.25)' } }),
          );
        }

        elements.push(tpl('Data Table', 's9-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 10: BIG DATA / KPI
    // ================================================================
    {
      id: 'big-data-kpi',
      background: C.bgPrimary,
      notes: 'Big Data / KPI template',
      elements: [
        el('', { id: 's10-bg', x: 0, y: 0, w: panelW, h: 1080,
          style: { background: C.bgPrimary }, layer: 'bg' }),
        photoPanel(IMAGES.typeDrawers, 's10-photo', panelW, 0, panelW, 1080),

        lBorder('s10-lb-tl', contentX - 20, 80, 120, 120, 'tl'),

        el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Typography<br><em style="font-weight:400;font-style:italic;">in numbers</em></h2>`, {
          id: 's10-title', x: contentX, y: safe.y + 40, w: contentW,
        }),

        headingRule('s10-rule', contentX, below('s10-title', { gap: 20 }), 100),

        // Stat 1
        el(`<p style="font-family:${SERIF};font-size:80px;font-weight:700;color:${C.textPrimary};line-height:1;margin:0;">500K+</p>`, {
          id: 's10-n1', x: contentX, y: below('s10-rule', { gap: 36 }), w: contentW, h: 85,
        }),
        el(`<p style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};letter-spacing:0.02em;">Fonts available across all digital platforms</p>`, {
          id: 's10-l1', x: contentX, y: below('s10-n1', { gap: 10 }), w: contentW,
        }),

        el('', { id: 's10-div1', x: contentX, y: below('s10-l1', { gap: 24 }), w: contentW, h: 1,
          style: { background: 'rgba(255,255,255,0.3)' } }),

        // Stat 2
        el(`<p style="font-family:${SERIF};font-size:80px;font-weight:700;color:${C.textPrimary};line-height:1;margin:0;">3,500</p>`, {
          id: 's10-n2', x: contentX, y: below('s10-div1', { gap: 24 }), w: contentW, h: 85,
        }),
        el(`<p style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};letter-spacing:0.02em;">Years of typographic evolution</p>`, {
          id: 's10-l2', x: contentX, y: below('s10-n2', { gap: 10 }), w: contentW,
        }),

        el('', { id: 's10-div2', x: contentX, y: below('s10-l2', { gap: 24 }), w: contentW, h: 1,
          style: { background: 'rgba(255,255,255,0.3)' } }),

        // Stat 3
        el(`<p style="font-family:${SERIF};font-size:80px;font-weight:700;color:${C.textPrimary};line-height:1;margin:0;">$47B</p>`, {
          id: 's10-n3', x: contentX, y: below('s10-div2', { gap: 24 }), w: contentW, h: 85,
        }),
        el(`<p style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};letter-spacing:0.02em;">Global font licensing market valuation</p>`, {
          id: 's10-l3', x: contentX, y: below('s10-n3', { gap: 10 }), w: contentW,
        }),

        asterisk('s10-ast', contentX + contentW - 50, 1080 - 180),
        tpl('Big Data / KPI', 's10-tpl', { x: contentX, y: 1080 - 50, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 11: PROCESS / FLOW DIAGRAM
    // ================================================================
    {
      id: 'process-flow',
      background: C.bgPrimary,
      notes: 'Process / Flow Diagram template',
      elements: (() => {
        const cx = safe.x + 60;
        const tw = safe.w - 120;

        const steps = [
          { label: 'Brief', desc: 'Define goals & audience' },
          { label: 'Research', desc: 'Study context & references' },
          { label: 'Sketch', desc: 'Draw letterform concepts' },
          { label: 'Digitize', desc: 'Vector outlines in software' },
          { label: 'Refine', desc: 'Kerning, hinting, testing' },
        ];

        const boxW = 220;
        const boxH = 130;
        const gap = (tw - steps.length * boxW) / (steps.length - 1);
        const boxY = safe.y + 350;

        const elements = [
          lBorder('s11-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          asterisk('s11-ast', safe.x + safe.w - 60, safe.y + 30),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Design <em style="font-weight:400;font-style:italic;">process</em></h2>`, {
            id: 's11-title', x: cx, y: safe.y + 40, w: tw,
          }),

          headingRule('s11-rule', cx, below('s11-title', { gap: 20 }), 100),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.6;letter-spacing:0.02em;">The journey from concept to finished typeface follows these key stages.</p>`, {
            id: 's11-desc', x: cx, y: below('s11-rule', { gap: 20 }), w: 700,
          }),
        ];

        for (let i = 0; i < steps.length; i++) {
          const s = steps[i];
          const bx = cx + i * (boxW + gap);
          elements.push(
            el(`<div style="width:100%;height:100%;border:1px solid ${C.border};padding:20px;">
              <p style="font-family:${SERIF};font-size:20px;font-weight:400;font-style:italic;color:${C.textPrimary};margin:0 0 10px 0;">${s.label}</p>
              <p style="font-family:${SANS};font-size:15px;font-weight:300;color:${C.textMuted};line-height:1.5;margin:0;">${s.desc}</p>
            </div>`, {
              id: `s11-box${i}`, x: bx, y: boxY, w: boxW, h: boxH,
            }),
          );
        }

        // Connectors between boxes
        for (let i = 0; i < steps.length - 1; i++) {
          elements.push(
            connect(`s11-box${i}`, `s11-box${i + 1}`, {
              id: `s11-conn${i}`,
              fromAnchor: 'cr',
              toAnchor: 'cl',
              stroke: C.border,
              strokeWidth: 1,
              markerEnd: 'arrow',
            }),
          );
        }

        elements.push(tpl('Process / Flow Diagram', 's11-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 12: TIMELINE
    // ================================================================
    {
      id: 'timeline',
      background: C.bgPrimary,
      notes: 'Timeline template',
      elements: (() => {
        const cx = safe.x + 60;
        const tw = safe.w - 120;

        const events = [
          { year: '1450', title: 'Gutenberg Press', desc: 'Movable type revolutionizes Europe' },
          { year: '1722', title: 'Caslon', desc: 'The first great English typeface' },
          { year: '1757', title: 'Baskerville', desc: 'Transitional serif masterpiece' },
          { year: '1957', title: 'Helvetica', desc: 'Swiss design goes global' },
          { year: '2016', title: 'Variable Fonts', desc: 'One file, infinite weights' },
        ];

        const lineY = safe.y + 500;
        const nodeGap = tw / (events.length - 1);

        const elements = [
          lBorder('s12-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          asterisk('s12-ast', safe.x + safe.w - 60, safe.y + 30),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Type <em style="font-weight:400;font-style:italic;">timeline</em></h2>`, {
            id: 's12-title', x: cx, y: safe.y + 40, w: tw,
          }),

          headingRule('s12-rule', cx, below('s12-title', { gap: 20 }), 100),

          // Horizontal line
          el('', { id: 's12-line', x: cx, y: lineY, w: tw, h: 1,
            style: { background: C.border } }),
        ];

        for (let i = 0; i < events.length; i++) {
          const e = events[i];
          const nx = cx + i * nodeGap;
          const above = i % 2 === 0;
          const labelW = Math.min(220, 1920 - (nx - 10) - 2);

          // Node dot
          elements.push(
            el(`<div style="width:12px;height:12px;border-radius:50%;background:${C.textPrimary};"></div>`, {
              id: `s12-dot${i}`, x: nx - 6, y: lineY - 5, w: 12, h: 12,
            }),
          );

          // Date & label (alternating above/below)
          if (above) {
            elements.push(
              el(`<p style="font-family:${SERIF};font-size:28px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.2;margin:0;">${e.title}</p>`, {
                id: `s12-evtitle${i}`, x: nx - 10, y: lineY - 110, w: labelW,
              }),
              el(`<p style="font-family:${SANS};font-size:15px;font-weight:300;color:${C.textMuted};line-height:1.5;">${e.desc}</p>`, {
                id: `s12-evdesc${i}`, x: nx - 10, y: lineY - 70, w: labelW,
              }),
              el(`<p style="font-family:${SERIF};font-size:18px;font-weight:700;color:${C.textPrimary};">${e.year}</p>`, {
                id: `s12-year${i}`, x: nx - 10, y: lineY + 20, w: 100,
              }),
            );
          } else {
            elements.push(
              el(`<p style="font-family:${SERIF};font-size:18px;font-weight:700;color:${C.textPrimary};">${e.year}</p>`, {
                id: `s12-year${i}`, x: nx - 10, y: lineY - 40, w: 100,
              }),
              el(`<p style="font-family:${SERIF};font-size:28px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.2;margin:0;">${e.title}</p>`, {
                id: `s12-evtitle${i}`, x: nx - 10, y: lineY + 30, w: labelW,
              }),
              el(`<p style="font-family:${SANS};font-size:15px;font-weight:300;color:${C.textMuted};line-height:1.5;">${e.desc}</p>`, {
                id: `s12-evdesc${i}`, x: nx - 10, y: lineY + 70, w: labelW,
              }),
            );
          }
        }

        elements.push(tpl('Timeline', 's12-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 13: CHART / DATA VISUALIZATION
    // ================================================================
    {
      id: 'chart-data-viz',
      background: C.bgPrimary,
      notes: 'Chart / Data Visualization template',
      elements: (() => {
        const cx = safe.x + 60;
        const tw = safe.w - 120;

        // Bar chart: Google Fonts downloads by typeface category
        const bars = [
          { label: 'Sans-Serif', pct: 0.42 },
          { label: 'Serif', pct: 0.24 },
          { label: 'Display', pct: 0.18 },
          { label: 'Handwriting', pct: 0.10 },
          { label: 'Monospace', pct: 0.06 },
        ];

        const chartX = cx + 140;
        const chartY = safe.y + 260;
        const barH = 44;
        const barGap = 32;
        const maxBarW = tw - 320;

        const elements = [
          lBorder('s13-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          asterisk('s13-ast', safe.x + safe.w - 60, safe.y + 30),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Font usage <em style="font-weight:400;font-style:italic;">distribution</em></h2>`, {
            id: 's13-title', x: cx, y: safe.y + 40, w: tw,
          }),

          headingRule('s13-rule', cx, below('s13-title', { gap: 20 }), 100),

          el(`<p style="font-family:${SANS};font-size:18px;font-weight:300;color:${C.textMuted};line-height:1.5;">Google Fonts downloads by classification (2024)</p>`, {
            id: 's13-sub', x: cx, y: below('s13-rule', { gap: 16 }), w: 600,
          }),
        ];

        for (let i = 0; i < bars.length; i++) {
          const b = bars[i];
          const by = chartY + i * (barH + barGap);
          const bw = maxBarW * b.pct / 0.42;

          elements.push(
            el(`<p style="font-family:${SANS};font-size:16px;font-weight:300;color:${C.textMuted};line-height:${barH}px;text-align:right;">${b.label}</p>`, {
              id: `s13-blabel${i}`, x: cx, y: by, w: 120, h: barH,
            }),
            el(`<div style="width:100%;height:100%;background:${C.textPrimary};opacity:0.85;"></div>`, {
              id: `s13-bar${i}`, x: chartX, y: by + 8, w: bw, h: barH - 16,
            }),
            el(`<p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textPrimary};line-height:${barH}px;">${Math.round(b.pct * 100)}%</p>`, {
              id: `s13-bpct${i}`, x: chartX + bw + 16, y: by, w: 60, h: barH,
            }),
          );
        }

        elements.push(tpl('Chart / Data Visualization', 's13-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 14: VERTICAL STEPS
    // ================================================================
    {
      id: 'vertical-steps',
      background: C.bgPrimary,
      notes: 'Vertical Steps template',
      elements: (() => {
        const cx = safe.x + 60;
        const tw = safe.w - 120;

        const steps = [
          { num: '01', title: 'Choose a typeface', desc: 'Select fonts that align with your brand personality and audience expectations.' },
          { num: '02', title: 'Set the scale', desc: 'Establish a modular type scale for consistent hierarchy across all materials.' },
          { num: '03', title: 'Define spacing', desc: 'Configure line height, letter spacing, and paragraph margins for optimal readability.' },
          { num: '04', title: 'Test & refine', desc: 'Validate across devices, sizes, and contexts. Iterate until every word sings.' },
        ];

        const stepStartY = safe.y + 220;
        const stepH = 140;

        const elements = [
          lBorder('s14-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          asterisk('s14-ast', safe.x + safe.w - 60, safe.y + 30),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Vertical <em style="font-weight:400;font-style:italic;">steps</em></h2>`, {
            id: 's14-title', x: cx, y: safe.y + 40, w: tw,
          }),

          headingRule('s14-rule', cx, below('s14-title', { gap: 20 }), 100),
        ];

        for (let i = 0; i < steps.length; i++) {
          const s = steps[i];
          const sy = stepStartY + i * stepH;
          elements.push(
            el(`<p style="font-family:${SERIF};font-size:52px;font-weight:700;color:${C.textPrimary};line-height:1;">${s.num}</p>`, {
              id: `s14-num${i}`, x: cx, y: sy, w: 100, h: 58,
            }),
            el(`<p style="font-family:${SERIF};font-size:26px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.2;">${s.title}</p>`, {
              id: `s14-stitle${i}`, x: cx + 120, y: sy + 4, w: 400, h: 34,
            }),
            el(`<p style="font-family:${SANS};font-size:17px;font-weight:300;color:${C.textMuted};line-height:1.6;letter-spacing:0.02em;">${s.desc}</p>`, {
              id: `s14-sdesc${i}`, x: cx + 120, y: sy + 44, w: 700,
            }),
            el('', { id: `s14-sline${i}`, x: cx, y: sy + stepH - 16, w: tw, h: 1,
              style: { background: 'rgba(255,255,255,0.2)' } }),
          );
        }

        elements.push(tpl('Vertical Steps', 's14-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 15: DEVICE MOCKUP
    // ================================================================
    {
      id: 'device-mockup',
      background: C.bgPrimary,
      notes: 'Device Mockup template',
      elements: [
        lBorder('s15-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
        asterisk('s15-ast', safe.x + safe.w - 60, safe.y + 30),

        el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Device <em style="font-weight:400;font-style:italic;">mockup</em></h2>`, {
          id: 's15-title', x: safe.x + 60, y: safe.y + 40, w: 500,
        }),

        headingRule('s15-rule', safe.x + 60, below('s15-title', { gap: 20 }), 100),

        // Phone mockup frame
        el(`<div style="width:100%;height:100%;border:2px solid ${C.border};padding:12px;">
          <div style="width:100%;height:24px;display:flex;align-items:center;justify-content:center;margin:0 0 8px 0;">
            <div style="width:60px;height:6px;border-radius:3px;background:rgba(255,255,255,0.3);"></div>
          </div>
          <div style="width:100%;height:calc(100% - 40px);background:linear-gradient(180deg, hsl(190,30%,40%), hsl(210,25%,30%));display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;">
              <p style="font-family:${SERIF};font-size:28px;font-weight:700;color:${C.textPrimary};margin:0 0 8px 0;">Aa</p>
              <p style="font-family:${SANS};font-size:14px;font-weight:300;color:${C.textMuted};">Font Preview App</p>
            </div>
          </div>
        </div>`, {
          id: 's15-phone', x: 560, y: safe.y + 200, w: 340, h: 680,
        }),

        // Laptop mockup frame
        el(`<div style="width:100%;height:100%;border:2px solid ${C.border};padding:10px;">
          <div style="width:100%;height:100%;background:linear-gradient(135deg, hsl(190,28%,38%), hsl(200,22%,28%));display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;">
              <p style="font-family:${SERIF};font-size:36px;font-weight:700;color:${C.textPrimary};margin:0 0 12px 0;">Typography Studio</p>
              <p style="font-family:${SANS};font-size:16px;font-weight:300;color:${C.textMuted};">Desktop Application</p>
            </div>
          </div>
        </div>`, {
          id: 's15-laptop', x: 1020, y: safe.y + 260, w: 660, h: 440,
        }),
        // Laptop base
        el(`<div style="width:100%;height:100%;border-bottom:2px solid ${C.border};border-left:2px solid ${C.border};border-right:2px solid ${C.border};"></div>`, {
          id: 's15-laptop-base', x: 960, y: safe.y + 700, w: 780, h: 20,
        }),

        tpl('Device Mockup', 's15-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 16: PHOTO GALLERY
    // ================================================================
    {
      id: 'photo-gallery',
      background: C.bgPrimary,
      notes: 'Photo Gallery template',
      elements: (() => {
        const gap = 16;
        const gx = safe.x + 60;
        const gy = safe.y + 160;
        const gw = safe.w - 120;
        const gh = safe.h - 220;

        // Asymmetric grid: 1 large + 1 tall + 2 small
        const largeW = gw * 0.55;
        const smallW = gw - largeW - gap;
        const topH = gh * 0.55;
        const botH = gh - topH - gap;

        return [
          lBorder('s16-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          asterisk('s16-ast', safe.x + safe.w - 60, safe.y + 30),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Photo <em style="font-weight:400;font-style:italic;">gallery</em></h2>`, {
            id: 's16-title', x: gx, y: safe.y + 40, w: gw,
          }),

          headingRule('s16-rule', gx, below('s16-title', { gap: 20 }), 100),

          // Large landscape
          photoPanel(IMAGES.galleryWorkshop, 's16-img1', gx, gy, largeW, topH),
          // Tall portrait
          photoPanel(IMAGES.galleryBooks, 's16-img2', gx + largeW + gap, gy, smallW, topH),
          // Bottom left
          photoPanel(IMAGES.galleryCalligraphy, 's16-img3', gx, gy + topH + gap, largeW * 0.48, botH),
          // Bottom center-right
          photoPanel(IMAGES.galleryPoster, 's16-img4', gx + largeW * 0.48 + gap, gy + topH + gap, largeW * 0.52, botH),
          // Bottom right
          photoPanel(IMAGES.galleryWoodtype, 's16-img5', gx + largeW + gap, gy + topH + gap, smallW, botH),

          tpl('Photo Gallery', 's16-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 17: TEAM PROFILES
    // ================================================================
    {
      id: 'team-profiles',
      background: C.bgPrimary,
      notes: 'Team Profiles template',
      elements: (() => {
        const cols = 4;
        const gap = 50;
        const cx = safe.x + 60;
        const totalW = safe.w - 120;
        const colW = (totalW - gap * (cols - 1)) / cols;
        const profileY = safe.y + 240;
        const circleSize = 130;

        const team = [
          { name: 'Adrian Frutiger', role: 'Type Designer', initials: 'AF' },
          { name: 'Zuzana Licko', role: 'Co-Founder, Emigre', initials: 'ZL' },
          { name: 'Erik Spiekermann', role: 'FontShop Founder', initials: 'ES' },
          { name: 'Jessica Hische', role: 'Letterer & Author', initials: 'JH' },
        ];

        const elements = [
          lBorder('s17-lb-tl', safe.x, safe.y, 130, 130, 'tl'),
          lBorder('s17-lb-br', safe.x + safe.w - 130, safe.y + safe.h - 130, 130, 130, 'br'),
          asterisk('s17-ast', safe.x + safe.w - 60, safe.y + 30),

          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">The <em style="font-weight:400;font-style:italic;">team</em></h2>`, {
            id: 's17-title', x: cx, y: safe.y + 40, w: totalW,
          }),

          headingRule('s17-rule', cx, below('s17-title', { gap: 20 }), 100),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.5;">Legends of typographic design and lettering artistry</p>`, {
            id: 's17-sub', x: cx, y: below('s17-rule', { gap: 16 }), w: 700,
          }),
        ];

        const teamImages = [IMAGES.adrianFrutiger, IMAGES.zuzanaLicko, IMAGES.erikSpiekermann, IMAGES.jessicaHische];

        for (let i = 0; i < team.length; i++) {
          const t = team[i];
          const colX = cx + i * (colW + gap);
          const centerX = colX + colW / 2;
          elements.push(
            // Circle photo
            el(`<div style="width:${circleSize}px;height:${circleSize}px;border-radius:50%;overflow:hidden;">
              ${img(teamImages[i])}
            </div>`, {
              id: `s17-avatar${i}`, x: centerX - circleSize / 2, y: profileY, w: circleSize, h: circleSize,
            }),
            el(`<p style="font-family:${SERIF};font-size:22px;font-weight:400;font-style:italic;color:${C.textPrimary};text-align:center;line-height:1.2;">${t.name}</p>`, {
              id: `s17-name${i}`, x: colX, y: profileY + circleSize + 24, w: colW,
            }),
            el(`<p style="font-family:${SANS};font-size:16px;font-weight:300;color:${C.textMuted};text-align:center;letter-spacing:0.02em;">${t.role}</p>`, {
              id: `s17-role${i}`, x: colX, y: profileY + circleSize + 56, w: colW,
            }),
          );
        }

        elements.push(tpl('Team Profiles', 's17-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 18: CONTACT INFO
    // ================================================================
    {
      id: 'contact-info',
      background: C.bgPrimary,
      notes: 'Contact Info template',
      elements: [
        el('', { id: 's18-bg', x: 0, y: 0, w: panelW, h: 1080,
          style: { background: C.bgPrimary }, layer: 'bg' }),
        photoPanel(IMAGES.studioWorkspace, 's18-photo', panelW, 0, panelW, 1080),

        lBorder('s18-lb-tl', contentX - 20, 80, 120, 120, 'tl'),

        el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Get in <em style="font-weight:400;font-style:italic;">touch</em></h2>`, {
          id: 's18-title', x: contentX, y: safe.y + 80, w: contentW,
        }),

        headingRule('s18-rule', contentX, below('s18-title', { gap: 20 }), 100),

        // Contact details
        el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};letter-spacing:0.05em;text-transform:uppercase;margin:0 0 8px 0;">Phone</p>
        <p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.6;">+1 (555) 012-3456</p>`, {
          id: 's18-phone', x: contentX, y: below('s18-rule', { gap: 40 }), w: contentW,
        }),

        el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};letter-spacing:0.05em;text-transform:uppercase;margin:0 0 8px 0;">Email</p>
        <p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.6;">hello@typographystudio.com</p>`, {
          id: 's18-email', x: contentX, y: below('s18-phone', { gap: 36 }), w: contentW,
        }),

        el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};letter-spacing:0.05em;text-transform:uppercase;margin:0 0 8px 0;">Address</p>
        <p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.6;">42 Letterform Lane<br>San Francisco, CA 94102</p>`, {
          id: 's18-address', x: contentX, y: below('s18-email', { gap: 36 }), w: contentW,
        }),

        el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};letter-spacing:0.05em;text-transform:uppercase;margin:0 0 8px 0;">Website</p>
        <p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.6;">www.typographystudio.com</p>`, {
          id: 's18-web', x: contentX, y: below('s18-address', { gap: 36 }), w: contentW,
        }),

        asterisk('s18-ast', contentX + contentW - 50, 1080 - 180),
        tpl('Contact Info', 's18-tpl', { x: contentX, y: 1080 - 50, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 19: THANKS / CLOSING
    // ================================================================
    {
      id: 'thanks-closing',
      background: C.bgPrimary,
      notes: 'Thanks / Closing template',
      elements: [
        el('', { id: 's19-bg', x: 0, y: 0, w: panelW, h: 1080,
          style: { background: C.bgPrimary }, layer: 'bg' }),
        photoPanel(IMAGES.letterformCloseup, 's19-photo', panelW, 0, panelW, 1080),

        lBorder('s19-lb-tl', contentX - 20, 80, 150, 150, 'tl'),
        lBorder('s19-lb-br', panelW - contentX - 150, 1080 - 230, 150, 150, 'br'),

        el(`<h1 style="font-family:${SERIF};font-size:86px;font-weight:400;font-style:italic;color:${C.textPrimary};line-height:1.1;">Thank<br>you.</h1>`, {
          id: 's19-title', x: contentX, y: 340, w: contentW,
        }),

        headingRule('s19-rule', contentX, below('s19-title', { gap: 32 }), 80),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:300;color:${C.textMuted};line-height:1.6;letter-spacing:0.02em;">Questions? Let's talk type.</p>`, {
          id: 's19-sub', x: contentX, y: below('s19-rule', { gap: 20 }), w: contentW,
        }),

        asterisk('s19-ast', panelW - 180, 120),
        tpl('Thanks / Closing', 's19-tpl', { x: contentX, y: 1080 - 50, w: 300 }),
      ],
    },

    // ================================================================
    // SLIDE 20: RESOURCE / ASSET PAGE
    // ================================================================
    {
      id: 'resource-asset',
      background: C.bgSecondary,
      notes: 'Resource / Asset Page template',
      elements: (() => {
        const cx = safe.x + 60;
        const tw = safe.w - 120;
        const { left, right } = splitRect({ x: cx, y: safe.y + 180, w: tw, h: safe.h - 220 }, { ratio: 0.5, gap: 80 });

        // Icon categories
        const catA = {
          title: 'Typography Icons',
          icons: ['Aa', 'Bb', 'Tt', 'Ff', '\u00B6', '\u00A7', '\u00A9', '\u00AE', '\u2122', '\u221E', '\u2248', '\u00B1', '\u00F7', '\u00D7', '\u00B5', '\u03A9'],
        };
        const catB = {
          title: 'Layout Icons',
          icons: ['\u2630', '\u25A4', '\u25A5', '\u25EB', '\u229E', '\u229F', '\u25A6', '\u25E7', '\u25E8', '\u25A7', '\u25A8', '\u25A9', '\u2B1A', '\u2B21', '\u2B22', '\u25EF'],
        };

        const iconSize = 48;
        const iconGap = 16;
        const iconsPerRow = 4;

        function renderIcons(icons, startX, startY, areaW, prefix) {
          const elems = [];
          for (let i = 0; i < icons.length; i++) {
            const col = i % iconsPerRow;
            const row = Math.floor(i / iconsPerRow);
            const ix = startX + col * (iconSize + iconGap);
            const iy = startY + row * (iconSize + iconGap);
            elems.push(
              el(`<p style="font-size:24px;color:${C.iconResource};text-align:center;line-height:${iconSize}px;">${icons[i]}</p>`, {
                id: `${prefix}${i}`, x: ix, y: iy, w: iconSize, h: iconSize,
              }),
            );
          }
          return elems;
        }

        return [
          el(`<h2 style="font-family:${SERIF};font-size:48px;font-weight:700;color:${C.textPrimary};line-height:1.1;">Resource <em style="font-weight:400;font-style:italic;">assets</em></h2>`, {
            id: 's20-title', x: cx, y: safe.y + 40, w: tw,
          }),

          headingRule('s20-rule', cx, below('s20-title', { gap: 20 }), 100),

          // Category A heading
          el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.06em;">${catA.title}</p>`, {
            id: 's20-catA', x: left.x, y: left.y, w: left.w, h: 28,
          }),
          ...renderIcons(catA.icons, left.x, left.y + 44, left.w, 's20-iA'),

          // Category B heading
          el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.06em;">${catB.title}</p>`, {
            id: 's20-catB', x: right.x, y: right.y, w: right.w, h: 28,
          }),
          ...renderIcons(catB.icons, right.x, right.y + 44, right.w, 's20-iB'),

          // No decorative elements on resource slides
          tpl('Resource / Asset Page', 's20-tpl', { x: safe.x, y: safe.y + safe.h - 30, w: 300 }),
        ];
      })(),
    },

  ];

  return await render(slides);
}
