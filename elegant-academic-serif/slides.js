// slides.js — "The Art of Cartography: Mapping the World"
// Elegant Academic Serif theme — demo with AI-generated images

import {
  init, render, safeRect, splitRect, el, below, rightOf, vstack,
} from '../slidekit.bundle.min.js';

// -- Image Manifest --------------------------------------------------------------
// Convention: all image paths listed here. The bundler replaces these with
// base64 data-URIs to produce a single self-contained HTML file.

const IMAGES = {
  antiqueMapTools:  './images/antique-map-tools.png',
  oldGlobe:         './images/old-globe.png',
  compassRose:      './images/compass-rose.png',
  cartographerDesk: './images/cartographer-desk.png',
  mapDetail:        './images/map-detail.png',
};

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:   '#FFFFFF',
  bgSecondary: '#1D2D5E',
  bgTertiary:  '#E8896A',
  textPrimary: '#1D2D5E',
  textSecondary: '#5A6A8A',
  textInverted: '#FFFFFF',
  accent1:     '#E8896A',
  accent2:     '#3D8E8E',
  watermark:   '#2A3D6E',
  watermarkCoral: '#D47A5E',
  border:      '#C8CED8',
  numberHighlight: '#E8896A',
};

const SERIF = "'Playfair Display', serif";
const SANS  = "'Inter', sans-serif";

// -- Helper Functions ------------------------------------------------------------

function templateLabel(name, id, color = 'rgba(26,45,94,0.2)') {
  return el(
    `<p style="font-family:${SANS};font-size:13px;font-weight:400;color:${color};">${name}</p>`,
    { id, x: 130, y: 1080 - 32, w: 350, h: 18, layer: 'overlay' },
  );
}

function logoLockup(id, variant, x, y) {
  const textColor = variant === 'light' ? C.textInverted : C.textPrimary;
  return el(
    `<div style="display:flex;align-items:center;gap:12px;">
      <div style="width:36px;height:36px;background:${C.accent2};display:flex;align-items:center;justify-content:center;">
        <span style="font-family:${SANS};font-size:18px;font-weight:700;color:#FFFFFF;">S</span>
      </div>
      <div style="line-height:1.15;">
        <div style="font-family:${SANS};font-size:15px;font-weight:600;color:${textColor};letter-spacing:-0.02em;">Schola</div>
        <div style="font-family:${SANS};font-size:15px;font-weight:600;color:${textColor};letter-spacing:-0.02em;">Institute</div>
      </div>
    </div>`,
    { id, x, y, w: 200 },
  );
}

function footerBar(slideId, pageNum, variant = 'dark') {
  const textColor = variant === 'light' ? C.textInverted : C.textSecondary;
  return [
    logoLockup(`${slideId}-footer-logo`, variant, 130, 980),
    el(
      `<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${textColor};text-align:right;">${pageNum}</p>`,
      { id: `${slideId}-footer-num`, x: 1920 - 130 - 60, y: 985, w: 60, h: 20 },
    ),
  ];
}

function watermarkNumber(num, id, bgColor) {
  const color = bgColor === 'navy' ? C.watermark : C.watermarkCoral;
  return el(
    `<p style="font-family:${SERIF};font-size:460px;font-weight:700;color:${color};line-height:1.0;text-align:right;margin:0;padding:0;">${num}</p>`,
    { id, x: 1920 - 60, y: 100, w: 1000, h: 700, anchor: 'tr', layer: 'bg', overflow: 'clip' },
  );
}

function img(src, style = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;${style}">`;
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Playfair Display', weights: [400, 700], source: 'google' },
      { family: 'Inter', weights: [400, 600, 700], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: TITLE SLIDE
    // ================================================================
    {
      id: 'title',
      background: C.bgSecondary,
      notes: 'Opening slide — Title Slide template',
      elements: [
        logoLockup('s1-logo', 'light', safe.x + 10, safe.y + 10),

        el(`<h1 style="font-family:${SERIF};font-size:96px;font-weight:700;font-style:italic;color:${C.textInverted};line-height:1.05;">The Art of<br>Cartography</h1>`, {
          id: 's1-title', x: safe.x + 10, y: 460, w: 1050, h: 220,
        }),

        el(`<p style="font-family:${SANS};font-size:22px;font-weight:400;color:${C.textInverted};line-height:1.5;">Mapping the World — From Ancient Charts to Digital Frontiers</p>`, {
          id: 's1-subtitle', x: safe.x + 10, y: below('s1-title', { gap: 28 }), w: 700,
        }),

        el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.35);letter-spacing:0.05em;">Theme: Elegant Academic Serif</p>`, {
          id: 's1-theme', x: 1920 - 130 - 350, y: 1080 - 36, w: 350, h: 18, style: { textAlign: 'right' },
        }),

        templateLabel('Title Slide', 's1-tpl', 'rgba(255,255,255,0.25)'),
      ],
    },

    // ================================================================
    // SLIDE 2: SECTION DIVIDER WITH NUMBER (Navy)
    // ================================================================
    {
      id: 'section-1',
      background: C.bgSecondary,
      notes: 'Section Divider with Number — navy variant',
      elements: [
        watermarkNumber('01', 's2-wm', 'navy'),

        el(`<h2 style="font-family:${SERIF};font-size:72px;font-weight:700;font-style:italic;color:${C.textInverted};line-height:1.1;">Ancient<br>Origins</h2>`, {
          id: 's2-heading', x: safe.x + 10, y: 360, w: 900, h: 175,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textInverted};line-height:1.6;opacity:0.85;">How early civilizations first captured the shape of the world on clay, papyrus, and parchment.</p>`, {
          id: 's2-body', x: safe.x + 10, y: below('s2-heading', { gap: 24 }), w: 750,
        }),

        ...footerBar('s2', '02', 'light'),
        templateLabel('Section Divider with Number', 's2-tpl', 'rgba(255,255,255,0.25)'),
      ],
    },

    // ================================================================
    // SLIDE 3: CONTENT — TEXT + IMAGE
    // ================================================================
    {
      id: 'text-image',
      background: C.bgPrimary,
      notes: 'Content — Text + Image template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.48, gap: 60 });
        return [
          el(`<h2 style="font-family:${SERIF};font-size:52px;font-weight:700;font-style:italic;color:${C.textPrimary};line-height:1.15;">The Ptolemaic<br>Tradition</h2>`, {
            id: 's3-heading', x: left.x, y: safe.y + 20, w: left.w, h: 140,
          }),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;"><strong style="font-weight:600;">Claudius Ptolemy's</strong> <em>Geographia</em> established the mathematical framework for projecting a sphere onto a flat surface. Written in the 2nd century, it remained the Western world's definitive reference for over a thousand years.</p>`, {
            id: 's3-body1', x: left.x, y: below('s3-heading', { gap: 32 }), w: left.w,
          }),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">His system of latitude and longitude coordinates, though imprecise by modern standards, laid the conceptual groundwork for every map that followed.</p>`, {
            id: 's3-body2', x: left.x, y: below('s3-body1', { gap: 20 }), w: left.w,
          }),

          el(img(IMAGES.antiqueMapTools), {
            id: 's3-img', x: right.x, y: 0, w: 1920 - right.x, h: 1080, overflow: 'clip', layer: 'bg',
          }),

          ...footerBar('s3', '03', 'dark'),
          templateLabel('Content — Text + Image', 's3-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 4: TITLE SLIDE WITH PHOTO
    // ================================================================
    {
      id: 'title-photo',
      background: C.accent2,
      notes: 'Title Slide with Photo template',
      elements: [
        el(img(IMAGES.oldGlobe), {
          id: 's4-photo', x: 960, y: 0, w: 960, h: 1080,
        }),

        logoLockup('s4-logo', 'light', 480 - 100, 140),

        el(`<h1 style="font-family:${SERIF};font-size:72px;font-weight:700;font-style:italic;color:${C.textInverted};line-height:1.1;text-align:center;">The Age of<br>Exploration</h1>`, {
          id: 's4-heading', x: 480, y: 400, w: 700, anchor: 'tc',
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textInverted};line-height:1.5;text-align:center;opacity:0.9;">When mariners charted coastlines and currents across uncharted seas</p>`, {
          id: 's4-subtitle', x: 480, y: below('s4-heading', { gap: 24 }), w: 600, anchor: 'tc',
        }),

        templateLabel('Title Slide with Photo', 's4-tpl', 'rgba(255,255,255,0.25)'),
      ],
    },

    // ================================================================
    // SLIDE 5: SECTION DIVIDER WITH NUMBER (Coral) + background image
    // ================================================================
    {
      id: 'section-2',
      background: C.bgTertiary,
      notes: 'Section Divider with Number — coral variant with background image',
      elements: [
        el(img(IMAGES.cartographerDesk, 'opacity:0.15;'), {
          id: 's5-bg', x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
        }),

        watermarkNumber('02', 's5-wm', 'coral'),

        el(`<h2 style="font-family:${SERIF};font-size:72px;font-weight:700;font-style:italic;color:${C.textInverted};line-height:1.1;">Modern<br>Techniques</h2>`, {
          id: 's5-heading', x: safe.x + 10, y: 360, w: 900, h: 175,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textInverted};line-height:1.6;opacity:0.9;">From aerial photography to satellite imagery — the tools that transformed how we see the Earth.</p>`, {
          id: 's5-body', x: safe.x + 10, y: below('s5-heading', { gap: 24 }), w: 750,
        }),

        ...footerBar('s5', '05', 'light'),
        templateLabel('Section Divider with Number', 's5-tpl', 'rgba(255,255,255,0.3)'),
      ],
    },

    // ================================================================
    // SLIDE 6: STATS / KPIs
    // ================================================================
    {
      id: 'stats',
      background: C.bgPrimary,
      notes: 'Stats / KPIs template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.45, gap: 80 });

        const stats = [
          { label: 'Known Projections', value: '200+' },
          { label: 'Satellite Imagery Resolution', value: '30cm' },
          { label: 'Global GIS Market Size', value: '$14.5B' },
        ];

        const statElements = [];
        const statStartY = safe.y + 50;
        const statH = 180;

        for (let i = 0; i < stats.length; i++) {
          const s = stats[i];
          const sy = statStartY + i * statH;

          if (i > 0) {
            statElements.push(
              el('', {
                id: `s6-div${i}`, x: right.x, y: sy, w: right.w, h: 1,
                style: { background: C.border },
              }),
            );
          }

          statElements.push(
            el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.3;margin:0;">${s.label}</p>`, {
              id: `s6-label${i}`, x: right.x, y: sy + 16, w: right.w, h: 28,
            }),
            el(`<p style="font-family:${SERIF};font-size:72px;font-weight:700;color:${C.numberHighlight};line-height:1.0;margin:0;">${s.value}</p>`, {
              id: `s6-value${i}`, x: right.x, y: sy + 52, w: right.w, h: 80,
            }),
          );
        }

        return [
          el(`<h2 style="font-family:${SERIF};font-size:52px;font-weight:700;font-style:italic;color:${C.textPrimary};line-height:1.15;">Cartography<br>in Numbers</h2>`, {
            id: 's6-heading', x: left.x, y: safe.y + 20, w: left.w, h: 140,
          }),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">The scale and precision of modern mapping have grown exponentially, driven by satellite technology and geographic information systems.</p>`, {
            id: 's6-body', x: left.x, y: 680, w: left.w,
          }),

          ...statElements,

          ...footerBar('s6', '06', 'dark'),
          templateLabel('Stats / KPIs', 's6-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 7: CONTENT — TEXT + GRAPHIC/MAP
    // ================================================================
    {
      id: 'text-map',
      background: C.bgPrimary,
      notes: 'Content — Text + Graphic/Map template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.45, gap: 60 });

        return [
          el(`<h2 style="font-family:${SERIF};font-size:52px;font-weight:700;font-style:italic;color:${C.textPrimary};line-height:1.15;">The Portolan<br>Charts</h2>`, {
            id: 's7-heading', x: left.x, y: safe.y + 20, w: left.w, h: 140,
          }),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">Medieval portolan charts were navigational maps characterized by networks of rhumb lines radiating from compass roses. Their remarkable accuracy of Mediterranean coastlines astounded scholars for centuries.</p>`, {
            id: 's7-body', x: left.x, y: 680, w: left.w,
          }),

          el(img(IMAGES.mapDetail, 'border-radius:4px;'), {
            id: 's7-map', x: right.x + 20, y: safe.y + 80, w: right.w - 40, h: 640, overflow: 'clip',
          }),

          ...footerBar('s7', '07', 'dark'),
          templateLabel('Content — Text + Graphic/Map', 's7-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 8: FULL-WIDTH TEXT
    // ================================================================
    {
      id: 'full-text',
      background: C.bgPrimary,
      notes: 'Full-Width Text template',
      elements: [
        el(`<h2 style="font-family:${SERIF};font-size:80px;font-weight:700;font-style:italic;color:${C.textPrimary};line-height:1.1;">\u201CA map does not just chart,<br>it unlocks and formulates<br>meaning.\u201D</h2>`, {
          id: 's8-heading', x: safe.x + 10, y: safe.y + 80, w: safe.w - 40, h: 310,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">Maps are more than navigational tools. They encode worldviews, power structures, and cultural assumptions. Every projection is a choice — and every choice reveals what the cartographer values most.</p>`, {
          id: 's8-body', x: safe.x + 10, y: 680, w: 750,
        }),

        ...footerBar('s8', '08', 'dark'),
        templateLabel('Full-Width Text', 's8-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 9: CONTENT — TEXT + MASKED PHOTO
    // ================================================================
    {
      id: 'masked-photo',
      background: C.bgPrimary,
      notes: 'Content — Text + Masked Photo template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.45, gap: 60 });

        const maskedPhoto = `<div style="width:100%;height:100%;position:relative;">
          <svg viewBox="0 0 500 600" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="blob-mask">
                <path d="M50,30 C150,-20 350,10 450,60 C500,120 480,250 460,350 C440,450 380,550 280,580 C180,600 80,520 40,420 C10,340 20,200 30,120 C35,70 30,40 50,30 Z"/>
              </clipPath>
            </defs>
            <image href="${IMAGES.compassRose}" width="500" height="600" clip-path="url(#blob-mask)" preserveAspectRatio="xMidYMid slice"/>
          </svg>
        </div>`;

        return [
          el(`<h2 style="font-family:${SERIF};font-size:52px;font-weight:700;font-style:italic;color:${C.textPrimary};line-height:1.15;">Artistic<br>Cartography</h2>`, {
            id: 's9-heading', x: left.x, y: safe.y + 20, w: left.w, h: 140,
          }),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;"><strong style="font-weight:600;">Hand-drawn maps</strong> remain prized for their beauty and unique perspective. Contemporary artists continue the tradition of illustrated cartography, blending scientific accuracy with aesthetic vision.</p>`, {
            id: 's9-body1', x: left.x, y: below('s9-heading', { gap: 32 }), w: left.w,
          }),

          el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textPrimary};line-height:1.6;">From medieval <em>mappae mundi</em> to modern data visualizations, the map remains one of humanity\u2019s most powerful storytelling devices.</p>`, {
            id: 's9-body2', x: left.x, y: below('s9-body1', { gap: 20 }), w: left.w,
          }),

          el(maskedPhoto, {
            id: 's9-masked', x: right.x + 40, y: safe.y + 80, w: right.w - 80, h: 720,
          }),

          ...footerBar('s9', '09', 'dark'),
          templateLabel('Content — Text + Masked Photo', 's9-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 10: CLOSING / THANK YOU SLIDE
    // ================================================================
    {
      id: 'closing',
      background: C.bgTertiary,
      notes: 'Closing / Thank You Slide template',
      elements: [
        el(
          `<div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
            <div style="width:56px;height:56px;background:${C.accent2};display:flex;align-items:center;justify-content:center;">
              <span style="font-family:${SANS};font-size:28px;font-weight:700;color:#FFFFFF;">S</span>
            </div>
            <div style="text-align:center;line-height:1.15;">
              <div style="font-family:${SANS};font-size:20px;font-weight:600;color:${C.textInverted};letter-spacing:-0.02em;">Schola</div>
              <div style="font-family:${SANS};font-size:20px;font-weight:600;color:${C.textInverted};letter-spacing:-0.02em;">Institute</div>
            </div>
          </div>`,
          { id: 's10-logo', x: 960, y: 220, w: 200, anchor: 'tc' },
        ),

        el(`<h2 style="font-family:${SERIF};font-size:72px;font-weight:700;font-style:italic;color:${C.textInverted};line-height:1.1;">Thank you</h2>`, {
          id: 's10-heading', x: safe.x + 10, y: 600, w: 700, h: 90,
        }),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textInverted};line-height:1.6;opacity:0.9;">Dr. Helena Kowalski  \u00B7  cartography@schola.edu<br>www.schola.edu/maps</p>`, {
          id: 's10-contact', x: safe.x + 10, y: below('s10-heading', { gap: 24 }), w: 600,
        }),

        templateLabel('Closing / Thank You Slide', 's10-tpl', 'rgba(255,255,255,0.3)'),
      ],
    },
  ];

  return await render(slides);
}
