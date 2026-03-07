// slides.js — "The Craft of Instrument Making"
// 1920s Inventor Workshop theme — 12 slides covering all 8 templates
// Topic: How precision instruments are designed, built, and verified

import {
  init, render, safeRect, splitRect, el, below,
} from '../slidekit.bundle.min.js';

// -- Image Manifest ---------------------------------------------------------------

const IMAGES = {
  workshopWide:     './images/workshop-wide.png',
  draftingTable:    './images/drafting-table.png',
  draftingCloseup:  './images/drafting-closeup.png',
  mechanicalPress:  './images/mechanical-press.png',
  pressFixtures:    './images/press-fixtures.png',
  measuringTools:   './images/measuring-tools.png',
  workshopEvening:  './images/workshop-evening.png',
};

// -- Design Tokens ----------------------------------------------------------------

const C = {
  bgDark:     '#0F1113',
  bgNearBlack:'#1a1a1a',
  bgLight:    '#F2F2F0',
  textDark:   '#111111',
  textLight:  '#FFFFFF',
  textMuted:  '#6E6E6E',
  rule:       '#D8D8D8',
  ruleDark:   'rgba(255,255,255,0.30)',
  prepare:    '#27364A',
  model:      '#1B9E8A',
  verify:     '#3F57B3',
  enable:     '#97A0AA',
};

const SANS  = "'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";
const SERIF = "'IBM Plex Serif', ui-serif, Georgia, 'Times New Roman', Times, serif";
const MONO  = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

// -- Helper Functions -------------------------------------------------------------

function img(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;${extraStyle}">`;
}

/** Template label — bottom-left, muted */
function tplLabel(name, id, onDark = true) {
  const color = onDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.20)';
  return el(
    `<p style="font-family:${SANS};font-size:13px;font-weight:400;color:${color};">${name}</p>`,
    { id, x: 130, y: 1040, w: 450, layer: 'overlay' },
  );
}

/** Slide number — bottom-right */
function slideNum(num, id, onDark = true) {
  const color = onDark ? 'rgba(255,255,255,0.55)' : `rgba(110,110,110,0.55)`;
  return el(
    `<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${color};">${num}</p>`,
    { id, x: 1750, y: 1040, w: 50, layer: 'overlay', style: { textAlign: 'right' } },
  );
}

/** Section label with vertical accent bar */
function sectionLabel(text, id, accentColor, opts = {}) {
  const textColor = opts.light ? C.textMuted : 'rgba(255,255,255,0.60)';
  const barColor = opts.light ? accentColor : accentColor;
  return el(
    `<div style="display:flex;align-items:center;gap:10px;">
      <div style="width:3px;height:18px;background:${barColor};flex-shrink:0;"></div>
      <span style="font-family:${SANS};font-size:12px;font-weight:400;color:${textColor};text-transform:uppercase;letter-spacing:0.15em;">${text}</span>
    </div>`,
    { id, w: 500, ...opts },
  );
}

/** Short horizontal rule as thought separator */
function thoughtRule(id, color, opts = {}) {
  return el('', {
    id, w: 60, h: 2,
    style: { background: color },
    ...opts,
  });
}

/** Full-bleed photo background with scrim */
function fullBleedPhoto(src, scrId, imgId) {
  return [
    el(img(src), {
      id: imgId, x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
    }),
    el('', {
      id: scrId, x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
      parentId: imgId,
      style: { background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%)' },
    }),
  ];
}

// -- Main Entry -------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 10,
    fonts: [
      { family: 'IBM Plex Sans',  weights: [400, 500, 600, 700, 800], source: 'google' },
      { family: 'IBM Plex Serif', weights: [400, 500],                source: 'google' },
      { family: 'IBM Plex Mono',  weights: [400, 500],                source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1 — Title (Full-Bleed Photo)
    // ================================================================
    {
      id: 'title',
      background: C.bgDark,
      notes: 'Opening title — full-bleed workshop photograph with scrim overlay',
      elements: [
        ...fullBleedPhoto(IMAGES.workshopWide, 's1-scrim', 's1-bg'),

        // Attribution line
        el(
          `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textLight};text-transform:uppercase;letter-spacing:0.15em;opacity:0.7;">A. Whitfield / Whitfield Instrument Co.</p>`,
          { id: 's1-attribution', x: safe.x, y: safe.y + 20, w: 600 },
        ),

        // Headline
        el(
          `<h1 style="font-family:${SANS};font-size:58px;font-weight:700;color:${C.textLight};line-height:1.12;">The Craft of<br>Instrument Making</h1>`,
          { id: 's1-title', x: safe.x, y: 400, w: 900 },
        ),

        // Subtitle
        el(
          `<p style="font-family:${SERIF};font-size:24px;font-weight:400;color:rgba(255,255,255,0.75);line-height:1.5;">How precision instruments are designed,<br>built, and verified in a working shop.</p>`,
          { id: 's1-subtitle', x: safe.x, y: below('s1-title', { gap: 28 }), w: 700 },
        ),

        // Theme name — bottom-right, very low opacity
        el(
          `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.20);">Theme: 1920s-inventor-workshop</p>`,
          { id: 's1-theme', x: 1920 - 130 - 350, y: 1040, w: 350, layer: 'overlay', style: { textAlign: 'right' } },
        ),

        slideNum('01', 's1-num'),
        tplLabel('Title (Full-Bleed Photo)', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2 — Dark Statement
    // ================================================================
    {
      id: 'dark-statement-1',
      background: C.bgNearBlack,
      notes: 'Dark statement — thesis about precision as habit',
      elements: [
        // Section label with accent bar
        sectionLabel('THE PREMISE', 's2-label', C.enable, {
          x: safe.x, y: 340,
        }),

        // Bold headline
        el(
          `<h2 style="font-family:${SANS};font-size:52px;font-weight:800;color:${C.textLight};line-height:1.15;">Precision is not an accident.<br>It is a habit of the mind.</h2>`,
          { id: 's2-headline', x: safe.x, y: below('s2-label', { gap: 28 }), w: 950 },
        ),

        // Horizontal rule — thought separator
        thoughtRule('s2-rule', C.enable, {
          x: safe.x, y: below('s2-headline', { gap: 36 }),
        }),

        // Supporting text
        el(
          `<p style="font-family:${SANS};font-size:24px;font-weight:400;color:rgba(255,255,255,0.85);line-height:1.5;">The instruments we build inherit the discipline — or carelessness — of their makers.</p>`,
          { id: 's2-support', x: safe.x, y: below('s2-rule', { gap: 28 }), w: 780 },
        ),

        slideNum('02', 's2-num'),
        tplLabel('Dark Statement', 's2-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 3 — Light Statement
    // ================================================================
    {
      id: 'light-statement',
      background: C.bgLight,
      notes: 'Light statement — impossible standards as starting points',
      elements: [
        // Section label
        sectionLabel('DESIGN PHILOSOPHY', 's3-label', C.prepare, {
          x: safe.x, y: 260, light: true,
        }),

        // Horizontal dash above headline
        el('', {
          id: 's3-dash', x: safe.x, y: below('s3-label', { gap: 28 }),
          w: 50, h: 3, style: { background: C.textDark },
        }),

        // Bold headline
        el(
          `<h2 style="font-family:${SANS};font-size:52px;font-weight:800;color:${C.textDark};line-height:1.15;">Every instrument begins<br>with an impossible standard.</h2>`,
          { id: 's3-headline', x: safe.x, y: below('s3-dash', { gap: 28 }), w: 950 },
        ),

        // Supporting text
        el(
          `<p style="font-family:${SANS};font-size:20px;font-weight:400;color:#555555;line-height:1.55;">The tolerance you refuse to accept becomes the tolerance you learn to hold. That is where craft begins.</p>`,
          { id: 's3-support', x: safe.x, y: below('s3-headline', { gap: 40 }), w: 750 },
        ),

        slideNum('03', 's3-num', false),
        tplLabel('Light Statement', 's3-tpl', false),
      ],
    },

    // ================================================================
    // SLIDE 4 — Transition (Full-Bleed Photo) — PREPARATION
    // ================================================================
    {
      id: 'transition-preparation',
      background: C.bgDark,
      notes: 'Transition into the Preparation section — drafting table photo',
      elements: [
        ...fullBleedPhoto(IMAGES.draftingTable, 's4-scrim', 's4-bg'),

        // Section label
        el(
          `<p style="font-family:${SANS};font-size:11px;font-weight:400;color:rgba(255,255,255,0.55);text-transform:uppercase;letter-spacing:0.15em;">PREPARATION</p>`,
          { id: 's4-label', x: safe.x, y: 410, w: 300 },
        ),

        // Aphoristic headline
        el(
          `<h2 style="font-family:${SANS};font-size:44px;font-weight:700;color:${C.textLight};line-height:1.18;">Constraint is the first tool.</h2>`,
          { id: 's4-headline', x: safe.x, y: below('s4-label', { gap: 20 }), w: 750 },
        ),

        slideNum('04', 's4-num'),
        tplLabel('Transition (Full-Bleed Photo)', 's4-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 5 — 50/50 Split (Text Left / Photo Right) — Drafting
    // ================================================================
    {
      id: 'split-drafting',
      background: C.bgLight,
      notes: '50/50 split — the drafting table, preparation details',
      elements: (() => {
        const { left } = splitRect(safe, { ratio: 0.5, gap: 0 });
        return [
          // Left panel background
          el('', {
            id: 's5-left-bg', x: 0, y: 0, w: 960, h: 1080, layer: 'bg',
            style: { background: C.bgLight },
          }),

          // Right panel photo — fills right half edge-to-edge
          el(img(IMAGES.draftingCloseup), {
            id: 's5-photo', x: 960, y: 0, w: 960, h: 1080, layer: 'bg',
          }),

          // Thin separator line at division
          el('', {
            id: 's5-divider', x: 960, y: 0, w: 1, h: 1080, layer: 'bg',
            style: { background: C.rule },
          }),

          // Section label
          sectionLabel('PREPARATION', 's5-label', C.prepare, {
            x: safe.x, y: safe.y + 40, light: true,
          }),

          // Headline
          el(
            `<h2 style="font-family:${SANS};font-size:34px;font-weight:700;color:${C.textDark};line-height:1.2;">The drafting table</h2>`,
            { id: 's5-headline', x: safe.x, y: below('s5-label', { gap: 24 }), w: left.w - 40 },
          ),

          // Body text
          el(
            `<p style="font-family:${SANS};font-size:16px;font-weight:400;color:#333333;line-height:1.55;">Before any metal is cut, the instrument exists only on paper. Vellum drawings capture every dimension, every tolerance, every interface.</p>`,
            { id: 's5-body1', x: safe.x, y: below('s5-headline', { gap: 24 }), w: left.w - 40 },
          ),

          el(
            `<p style="font-family:${SANS};font-size:16px;font-weight:400;color:#333333;line-height:1.55;">The slide rule moves back and forth. Annotations accumulate in the margins. Cross-sections are sketched, erased, and redrawn until the numbers converge.</p>`,
            { id: 's5-body2', x: safe.x, y: below('s5-body1', { gap: 16 }), w: left.w - 40 },
          ),

          // Horizontal rule
          thoughtRule('s5-rule', C.rule, {
            x: safe.x, y: below('s5-body2', { gap: 28 }),
          }),

          // Bold summary
          el(
            `<p style="font-family:${SANS};font-size:17px;font-weight:700;color:${C.textDark};line-height:1.4;">A drawing is not a plan. It is a commitment.</p>`,
            { id: 's5-summary', x: safe.x, y: below('s5-rule', { gap: 20 }), w: left.w - 40 },
          ),

          // Italic annotation
          el(
            `<p style="font-family:${SERIF};font-size:15px;font-weight:400;font-style:italic;color:${C.textMuted};line-height:1.45;">The best draftsmen draw as if the material were already watching.</p>`,
            { id: 's5-annotation', x: safe.x, y: below('s5-summary', { gap: 16 }), w: left.w - 40 },
          ),

          slideNum('05', 's5-num', false),
          tplLabel('50/50 Split (Text L / Photo R)', 's5-tpl', false),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 6 — Figure (Diagram) — Process Flow
    // ================================================================
    {
      id: 'figure-process',
      background: C.bgLight,
      notes: 'Figure slide — 4-stage process flow for instrument design',
      elements: (() => {
        const elements = [];

        // Section label
        elements.push(
          sectionLabel('PROCESS', 's6-label', C.model, {
            x: safe.x, y: safe.y + 20, light: true,
          }),
        );

        // Headline
        elements.push(
          el(
            `<h2 style="font-family:${SANS};font-size:42px;font-weight:700;color:${C.textDark};line-height:1.15;">Four stages of instrument design</h2>`,
            { id: 's6-headline', x: safe.x, y: below('s6-label', { gap: 20 }), w: 900 },
          ),
        );

        // Rule under headline
        elements.push(
          el('', {
            id: 's6-head-rule', x: safe.x, y: below('s6-headline', { gap: 20 }),
            w: 600, h: 1, style: { background: C.rule },
          }),
        );

        // Figure caption
        elements.push(
          el(
            `<p style="font-family:${MONO};font-size:11px;font-weight:400;color:${C.textMuted};text-transform:uppercase;letter-spacing:0.12em;">FIG. 01 \u2014 INSTRUMENT DESIGN PROCESS</p>`,
            { id: 's6-caption', x: safe.x, y: below('s6-head-rule', { gap: 20 }), w: 500 },
          ),
        );

        // Four process boxes — horizontal flow
        const stages = [
          { num: '01', name: 'DESIGN',    color: C.prepare, desc: 'Define tolerances,\ndraw cross-sections,\nannotate constraints' },
          { num: '02', name: 'FABRICATE', color: C.model,   desc: 'Shape material\nwith press and fixtures,\nhold to dimension' },
          { num: '03', name: 'MEASURE',   color: C.verify,  desc: 'Verify with calipers,\ndial gauge, and loupe;\nrecord deviations' },
          { num: '04', name: 'REFINE',    color: C.enable,  desc: 'Adjust fixtures,\nre-cut if needed,\nconverge on spec' },
        ];

        const boxW = 340;
        const boxH = 170;
        const boxGap = 48;
        const boxY = 380;
        const startX = safe.x + 20;

        for (let i = 0; i < stages.length; i++) {
          const s = stages[i];
          const bx = startX + i * (boxW + boxGap);

          // Box border
          elements.push(
            el('', {
              id: `s6-box${i}`, x: bx, y: boxY, w: boxW, h: boxH,
              style: { background: '#FFFFFF', border: `1px solid ${C.rule}` },
            }),
          );

          // Left-edge accent bar
          elements.push(
            el('', {
              id: `s6-bar${i}`, x: bx, y: boxY, w: 3, h: boxH,
              style: { background: s.color },
            }),
          );

          // Step number (circle)
          elements.push(
            el(
              `<div style="width:28px;height:28px;border-radius:50%;background:${s.color};display:flex;align-items:center;justify-content:center;">
                <span style="font-family:${MONO};font-size:12px;font-weight:500;color:#FFFFFF;">${s.num}</span>
              </div>`,
              { id: `s6-num${i}`, x: bx + 14, y: boxY + 14, w: 28 },
            ),
          );

          // Stage name
          elements.push(
            el(
              `<p style="font-family:${SANS};font-size:15px;font-weight:700;color:${s.color};letter-spacing:0.05em;">${s.name}</p>`,
              { id: `s6-name${i}`, x: bx + 14, y: boxY + 52, w: boxW - 28 },
            ),
          );

          // Description
          elements.push(
            el(
              `<p style="font-family:${SANS};font-size:13px;font-weight:400;color:#444444;line-height:1.5;">${s.desc.replace(/\n/g, '<br>')}</p>`,
              { id: `s6-desc${i}`, x: bx + 14, y: boxY + 78, w: boxW - 28 },
            ),
          );

          // Arrow between boxes
          if (i < stages.length - 1) {
            const arrowX = bx + boxW + 8;
            elements.push(
              el(
                `<p style="font-family:${SANS};font-size:22px;font-weight:400;color:${C.textMuted};line-height:${boxH}px;">\u2192</p>`,
                { id: `s6-arrow${i}`, x: arrowX, y: boxY, w: boxGap - 16 },
              ),
            );
          }
        }

        // Dashed feedback arrow label
        elements.push(
          el(
            `<p style="font-family:${MONO};font-size:11px;font-weight:400;color:${C.textMuted};letter-spacing:0.05em;">\u2190\u2500\u2500 FEEDBACK LOOP (measure \u2192 refine \u2192 re-measure) \u2500\u2500\u2192</p>`,
            { id: 's6-feedback', x: startX + boxW + boxGap, y: boxY + boxH + 16, w: 700, style: { textAlign: 'center' } },
          ),
        );

        // Summary statement with accent bar
        elements.push(
          el('', {
            id: 's6-sum-bar', x: safe.x, y: boxY + boxH + 80,
            w: 30, h: 3, style: { background: C.model },
          }),
        );

        elements.push(
          el(
            `<p style="font-family:${SANS};font-size:24px;font-weight:700;color:${C.textDark};line-height:1.35;">The process converges, it never completes on the first pass.</p>`,
            { id: 's6-summary', x: safe.x, y: boxY + boxH + 100, w: 900 },
          ),
        );

        // Italic annotation
        elements.push(
          el(
            `<p style="font-family:${SERIF};font-size:17px;font-weight:400;font-style:italic;color:${C.textMuted};line-height:1.45;">Three iterations is the minimum. Four is typical. Five means the constraint was wrong.</p>`,
            { id: 's6-annotation', x: safe.x, y: below('s6-summary', { gap: 16 }), w: 800 },
          ),
        );

        elements.push(
          slideNum('06', 's6-num', false),
          tplLabel('Figure (Diagram)', 's6-tpl', false),
        );

        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 7 — Transition (Full-Bleed Photo) — EXECUTION
    // ================================================================
    {
      id: 'transition-execution',
      background: C.bgDark,
      notes: 'Transition into Execution section — mechanical press photo',
      elements: [
        ...fullBleedPhoto(IMAGES.mechanicalPress, 's7-scrim', 's7-bg'),

        // Section label
        el(
          `<p style="font-family:${SANS};font-size:11px;font-weight:400;color:rgba(255,255,255,0.55);text-transform:uppercase;letter-spacing:0.15em;">EXECUTION</p>`,
          { id: 's7-label', x: safe.x, y: 420, w: 300 },
        ),

        // Aphoristic headline
        el(
          `<h2 style="font-family:${SANS};font-size:44px;font-weight:700;color:${C.textLight};line-height:1.18;">The press knows no ambiguity.</h2>`,
          { id: 's7-headline', x: safe.x, y: below('s7-label', { gap: 20 }), w: 750 },
        ),

        // Optional subtitle
        el(
          `<p style="font-family:${SANS};font-size:18px;font-weight:400;color:rgba(255,255,255,0.70);line-height:1.5;">What the drawing promised, the machine now demands.</p>`,
          { id: 's7-subtitle', x: safe.x, y: below('s7-headline', { gap: 16 }), w: 600 },
        ),

        slideNum('07', 's7-num'),
        tplLabel('Transition (Full-Bleed Photo)', 's7-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 8 — 50/50 Split (Photo Left / Text Right) — Machine
    // ================================================================
    {
      id: 'split-machine',
      background: C.bgLight,
      notes: '50/50 split reversed — machine and fixtures, execution details',
      elements: (() => {
        const { right } = splitRect(safe, { ratio: 0.5, gap: 0 });
        const textX = 960 + 50; // right panel with some inner margin
        const textW = 1920 - 120 - textX; // to safe right edge
        return [
          // Left panel photo — fills left half edge-to-edge
          el(img(IMAGES.pressFixtures), {
            id: 's8-photo', x: 0, y: 0, w: 960, h: 1080, layer: 'bg',
          }),

          // Right panel background
          el('', {
            id: 's8-right-bg', x: 960, y: 0, w: 960, h: 1080, layer: 'bg',
            style: { background: C.bgLight },
          }),

          // Colored vertical accent line along left edge of text panel
          el('', {
            id: 's8-accent-line', x: 962, y: safe.y, w: 2, h: safe.h,
            style: { background: C.model },
          }),

          // Section label
          sectionLabel('EXECUTION', 's8-label', C.model, {
            x: textX, y: safe.y + 40, light: true,
          }),

          // Headline
          el(
            `<h2 style="font-family:${SANS};font-size:34px;font-weight:700;color:${C.textDark};line-height:1.2;">The machine and its fixtures</h2>`,
            { id: 's8-headline', x: textX, y: below('s8-label', { gap: 24 }), w: textW },
          ),

          // Body text
          el(
            `<p style="font-family:${SANS};font-size:16px;font-weight:400;color:#333333;line-height:1.55;">The cast-iron press does not forgive ambiguity. Every fixture, every alignment rail, every stop exists because someone anticipated a failure mode.</p>`,
            { id: 's8-body1', x: textX, y: below('s8-headline', { gap: 24 }), w: textW },
          ),

          // Structured data block
          el(
            `<p style="font-family:${MONO};font-size:11px;font-weight:400;color:${C.textMuted};text-transform:uppercase;letter-spacing:0.1em;">MACHINE IDENTITY</p>`,
            { id: 's8-data-label', x: textX, y: below('s8-body1', { gap: 32 }), w: textW },
          ),

          // Data row 1
          el('', {
            id: 's8-data-rule1', x: textX, y: below('s8-data-label', { gap: 12 }),
            w: textW, h: 1, style: { background: C.rule },
          }),
          el(
            `<div style="display:flex;gap:16px;align-items:baseline;">
              <span style="font-family:${MONO};font-size:11px;font-weight:400;color:${C.textMuted};text-transform:uppercase;min-width:100px;">FLYWHEEL</span>
              <span style="font-family:${SANS};font-size:15px;font-weight:400;color:#333;">Three-spoke, cast iron, left side</span>
            </div>`,
            { id: 's8-row1', x: textX, y: below('s8-data-rule1', { gap: 10 }), w: textW },
          ),

          // Arrow down
          el(
            `<p style="font-family:${SANS};font-size:14px;color:${C.textMuted};">\u2193</p>`,
            { id: 's8-arr1', x: textX, y: below('s8-row1', { gap: 8 }), w: 30 },
          ),

          // Data row 2
          el('', {
            id: 's8-data-rule2', x: textX, y: below('s8-arr1', { gap: 8 }),
            w: textW, h: 1, style: { background: C.rule },
          }),
          el(
            `<div style="display:flex;gap:16px;align-items:baseline;">
              <span style="font-family:${MONO};font-size:11px;font-weight:400;color:${C.textMuted};text-transform:uppercase;min-width:100px;">PRESS ARM</span>
              <span style="font-family:${SANS};font-size:15px;font-weight:400;color:#333;">Vertical, brass adjustment screw</span>
            </div>`,
            { id: 's8-row2', x: textX, y: below('s8-data-rule2', { gap: 10 }), w: textW },
          ),

          // Arrow down
          el(
            `<p style="font-family:${SANS};font-size:14px;color:${C.textMuted};">\u2193</p>`,
            { id: 's8-arr2', x: textX, y: below('s8-row2', { gap: 8 }), w: 30 },
          ),

          // Data row 3
          el('', {
            id: 's8-data-rule3', x: textX, y: below('s8-arr2', { gap: 8 }),
            w: textW, h: 1, style: { background: C.rule },
          }),
          el(
            `<div style="display:flex;gap:16px;align-items:baseline;">
              <span style="font-family:${MONO};font-size:11px;font-weight:400;color:${C.textMuted};text-transform:uppercase;min-width:100px;">FIXTURES</span>
              <span style="font-family:${SANS};font-size:15px;font-weight:400;color:#333;">Alignment rails, clamps, guide plates</span>
            </div>`,
            { id: 's8-row3', x: textX, y: below('s8-data-rule3', { gap: 10 }), w: textW },
          ),

          // Monospaced tool reference
          el(
            `<p style="font-family:${SANS};font-size:13px;font-weight:700;color:${C.textDark};text-transform:uppercase;letter-spacing:0.05em;">TOOLING</p>`,
            { id: 's8-tool-label', x: textX, y: below('s8-row3', { gap: 28 }), w: textW },
          ),
          el(
            `<p style="font-family:${MONO};font-size:13px;font-weight:400;color:${C.textMuted};line-height:1.6;">brass jig set (6 pc.)<br>adjustable stop assembly<br>riveted base plate</p>`,
            { id: 's8-tools', x: textX, y: below('s8-tool-label', { gap: 10 }), w: textW },
          ),

          slideNum('08', 's8-num', false),
          tplLabel('50/50 Split (Photo L / Text R)', 's8-tpl', false),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 9 — Comparison (Two-Column Light) — Novice vs Master
    // ================================================================
    {
      id: 'comparison',
      background: C.bgLight,
      notes: 'Comparison — two paths to the same instrument',
      elements: (() => {
        const elements = [];

        // Section label
        elements.push(
          sectionLabel('VERIFICATION', 's9-label', C.verify, {
            x: safe.x, y: safe.y + 20, light: true,
          }),
        );

        // Headline
        elements.push(
          el(
            `<h2 style="font-family:${SANS};font-size:42px;font-weight:700;color:${C.textDark};line-height:1.15;">Two paths to the same instrument</h2>`,
            { id: 's9-headline', x: safe.x, y: below('s9-label', { gap: 20 }), w: 900 },
          ),
        );

        // Rule under headline
        elements.push(
          el('', {
            id: 's9-head-rule', x: safe.x, y: below('s9-headline', { gap: 18 }),
            w: 560, h: 1, style: { background: C.rule },
          }),
        );

        // Two columns
        const colW = 680;
        const colGap = 80;
        const col1X = safe.x;
        const col2X = safe.x + colW + colGap;
        const colTopY = 320;

        // Column A: Novice
        const noviceSteps = [
          { label: 'MEASURE',   desc: 'Measure once, assume correctness' },
          { label: 'CUT',       desc: 'Cut to approximate dimension' },
          { label: 'ASSEMBLE',  desc: 'Force-fit parts together' },
          { label: 'TEST',      desc: 'Test at end, discover errors late' },
        ];

        // Column B: Master
        const masterSteps = [
          { label: 'CONSTRAIN', desc: 'Define tolerance before starting' },
          { label: 'MEASURE',   desc: 'Measure at every stage, record data' },
          { label: 'ITERATE',   desc: 'Refine fixtures, converge on spec' },
          { label: 'VERIFY',    desc: 'Independent verification before release' },
        ];

        // Column headings
        elements.push(
          el(
            `<p style="font-family:${SANS};font-size:14px;font-weight:700;color:${C.textDark};text-transform:uppercase;letter-spacing:0.12em;">NOVICE APPROACH</p>`,
            { id: 's9-col1-head', x: col1X, y: colTopY, w: colW },
          ),
          el(
            `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textMuted};line-height:1.4;">Optimizes for speed; trusts intuition</p>`,
            { id: 's9-col1-sub', x: col1X, y: below('s9-col1-head', { gap: 8 }), w: colW },
          ),
        );

        elements.push(
          el(
            `<p style="font-family:${SANS};font-size:14px;font-weight:700;color:${C.textDark};text-transform:uppercase;letter-spacing:0.12em;">MASTER APPROACH</p>`,
            { id: 's9-col2-head', x: col2X, y: colTopY, w: colW },
          ),
          el(
            `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textMuted};line-height:1.4;">Optimizes for convergence; trusts measurement</p>`,
            { id: 's9-col2-sub', x: col2X, y: below('s9-col2-head', { gap: 8 }), w: colW },
          ),
        );

        // Render steps for each column
        const rowH = 55;
        const rowGap = 14;
        const rowStartY = colTopY + 80;

        function renderColumn(steps, colX, prefix) {
          for (let i = 0; i < steps.length; i++) {
            const s = steps[i];
            const ry = rowStartY + i * (rowH + rowGap);

            // Accent bar
            elements.push(
              el('', {
                id: `${prefix}-bar${i}`, x: colX, y: ry,
                w: 3, h: rowH, style: { background: '#999999' },
              }),
            );

            // Row content
            elements.push(
              el(
                `<div>
                  <p style="font-family:${MONO};font-size:12px;font-weight:500;color:${C.textMuted};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">${s.label}</p>
                  <p style="font-family:${SANS};font-size:14px;font-weight:400;color:#333;line-height:1.4;">${s.desc}</p>
                </div>`,
                { id: `${prefix}-row${i}`, x: colX + 14, y: ry, w: colW - 14 },
              ),
            );

            // Arrow between rows
            if (i < steps.length - 1) {
              elements.push(
                el(
                  `<p style="font-family:${SANS};font-size:14px;color:${C.textMuted};">\u2193</p>`,
                  { id: `${prefix}-arr${i}`, x: colX + 14, y: ry + rowH + 1, w: 20 },
                ),
              );
            }
          }
        }

        renderColumn(noviceSteps, col1X, 's9-n');
        renderColumn(masterSteps, col2X, 's9-m');

        // Summary with rule
        const summaryY = rowStartY + 4 * (rowH + rowGap) + 30;
        elements.push(
          el('', {
            id: 's9-sum-rule', x: safe.x, y: summaryY,
            w: 50, h: 2, style: { background: C.textDark },
          }),
        );
        elements.push(
          el(
            `<p style="font-family:${SANS};font-size:22px;font-weight:700;color:${C.textDark};line-height:1.35;">The novice finishes faster. The master finishes once.</p>`,
            { id: 's9-summary', x: safe.x, y: summaryY + 18, w: 900 },
          ),
        );

        // Italic annotation
        elements.push(
          el(
            `<p style="font-family:${SERIF};font-size:16px;font-weight:400;font-style:italic;color:${C.textMuted};line-height:1.45;">Both paths produce an instrument. Only one produces trust.</p>`,
            { id: 's9-annotation', x: safe.x, y: below('s9-summary', { gap: 12 }), w: 700 },
          ),
        );

        elements.push(
          slideNum('09', 's9-num', false),
          tplLabel('Comparison (Two-Column)', 's9-tpl', false),
        );

        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 10 — 50/50 Split (Text Left / Photo Right) — Verification
    // ================================================================
    {
      id: 'split-verification',
      background: C.bgLight,
      notes: '50/50 split — instruments of verification, measuring tools',
      elements: (() => {
        const { left } = splitRect(safe, { ratio: 0.5, gap: 0 });
        return [
          // Left panel background
          el('', {
            id: 's10-left-bg', x: 0, y: 0, w: 960, h: 1080, layer: 'bg',
            style: { background: C.bgLight },
          }),

          // Right panel photo
          el(img(IMAGES.measuringTools), {
            id: 's10-photo', x: 960, y: 0, w: 960, h: 1080, layer: 'bg',
          }),

          // Separator
          el('', {
            id: 's10-divider', x: 960, y: 0, w: 1, h: 1080, layer: 'bg',
            style: { background: C.rule },
          }),

          // Section label
          sectionLabel('VERIFICATION', 's10-label', C.verify, {
            x: safe.x, y: safe.y + 40, light: true,
          }),

          // Headline
          el(
            `<h2 style="font-family:${SANS};font-size:34px;font-weight:700;color:${C.textDark};line-height:1.2;">The instruments of verification</h2>`,
            { id: 's10-headline', x: safe.x, y: below('s10-label', { gap: 24 }), w: left.w - 40 },
          ),

          // Body text — list style
          el(
            `<p style="font-family:${SANS};font-size:16px;font-weight:400;color:#333333;line-height:1.55;">Calipers for external dimension. Dial gauge for runout and deviation. Loupe magnifier for surface finish. Balance scale for material consistency.</p>`,
            { id: 's10-body1', x: safe.x, y: below('s10-headline', { gap: 24 }), w: left.w - 40 },
          ),

          el(
            `<p style="font-family:${SANS};font-size:16px;font-weight:400;color:#333333;line-height:1.55;">Each tool answers one question and one question only. That is what makes the measurement trustworthy.</p>`,
            { id: 's10-body2', x: safe.x, y: below('s10-body1', { gap: 16 }), w: left.w - 40 },
          ),

          el(
            `<p style="font-family:${SANS};font-size:16px;font-weight:400;color:#333333;line-height:1.55;">The experienced maker does not ask "is this good enough?" but rather "what does the number say?"</p>`,
            { id: 's10-body3', x: safe.x, y: below('s10-body2', { gap: 16 }), w: left.w - 40 },
          ),

          // Horizontal rule
          thoughtRule('s10-rule', C.rule, {
            x: safe.x, y: below('s10-body3', { gap: 28 }),
          }),

          // Bold summary
          el(
            `<p style="font-family:${SANS};font-size:17px;font-weight:700;color:${C.textDark};line-height:1.4;">A measurement is not an opinion. It is a contract with the next operation.</p>`,
            { id: 's10-summary', x: safe.x, y: below('s10-rule', { gap: 20 }), w: left.w - 40 },
          ),

          slideNum('10', 's10-num', false),
          tplLabel('50/50 Split (Text L / Photo R)', 's10-tpl', false),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 11 — Dark Statement (second instance)
    // ================================================================
    {
      id: 'dark-statement-2',
      background: C.bgNearBlack,
      notes: 'Dark statement — the last measurement is never the last',
      elements: [
        // Section label
        sectionLabel('REFLECTION', 's11-label', C.verify, {
          x: safe.x, y: 370,
        }),

        // Bold headline
        el(
          `<h2 style="font-family:${SANS};font-size:52px;font-weight:800;color:${C.textLight};line-height:1.15;">The last measurement<br>is never the last.</h2>`,
          { id: 's11-headline', x: safe.x, y: below('s11-label', { gap: 28 }), w: 900 },
        ),

        // Thought separator
        thoughtRule('s11-rule', C.verify, {
          x: safe.x, y: below('s11-headline', { gap: 36 }),
        }),

        slideNum('11', 's11-num'),
        tplLabel('Dark Statement', 's11-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 12 — Title (Full-Bleed Photo) — Closing Variant
    // ================================================================
    {
      id: 'closing',
      background: C.bgDark,
      notes: 'Closing slide — title template variant, no attribution, centered message',
      elements: [
        ...fullBleedPhoto(IMAGES.workshopEvening, 's12-scrim', 's12-bg'),

        // Headline — vertically centered
        el(
          `<h1 style="font-family:${SANS};font-size:56px;font-weight:700;color:${C.textLight};line-height:1.15;">Build instruments,<br>not just products.</h1>`,
          { id: 's12-title', x: safe.x, y: 340, w: 900 },
        ),

        // Subtitle
        el(
          `<p style="font-family:${SANS};font-size:20px;font-weight:400;color:rgba(255,255,255,0.80);line-height:1.5;">The workshop is patient. The standards are not.</p>`,
          { id: 's12-subtitle', x: safe.x, y: below('s12-title', { gap: 28 }), w: 700 },
        ),

        // Bold summary
        el(
          `<p style="font-family:${SANS};font-size:20px;font-weight:700;color:${C.textLight};line-height:1.5;">Begin with the constraint. End with the instrument.</p>`,
          { id: 's12-summary', x: safe.x, y: below('s12-subtitle', { gap: 20 }), w: 700 },
        ),

        slideNum('12', 's12-num'),
        tplLabel('Title (Full-Bleed Photo) \u2014 Closing', 's12-tpl'),
      ],
    },
  ];

  return await render(slides);
}
