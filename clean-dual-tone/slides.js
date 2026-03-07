// slides.js — "The Future of Sustainable Architecture"
// Clean Dual-Tone theme — 11 archetypes

import {
  init, render, safeRect, splitRect, el,
  below, rightOf,
} from '../slidekit.bundle.min.js';

// -- Image Manifest --------------------------------------------------------------
const IMAGES = {
  architectPortrait:  './images/architect-portrait.jpg',
  sustainablePavilion:'./images/sustainable-pavilion.jpg',
  teamMember1:        './images/team-member-1.jpg',
  teamMember2:        './images/team-member-2.jpg',
  teamMember3:        './images/team-member-3.jpg',
};

function img(src) {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;">`;
}

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:      '#FFFFFF',
  bgSecondary:    '#191A1F',
  bgTertiary:     '#7A8B50',
  gradStart:      '#1B2A4A',
  gradEnd:        '#3B6FB5',
  textPrimary:    '#1A1A1A',
  textSecondary:  '#6B6B6B',
  textTertiary:   '#9B9B9B',
  textOnDark:     '#FFFFFF',
  textOnDarkMuted:'#B0B8C8',
  accent1:        '#3B6FB5',
  accent2:        '#7A8B50',
  border:         '#E5E5E5',
};

const FONT = 'DM Sans';

// -- Helpers ---------------------------------------------------------------------

function templateLabel(name, id, onDark = false) {
  const color = onDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.20)';
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:400;color:${color};letter-spacing:0.02em;">Template: ${name}</p>`,
    { id, x: 130, y: 956, w: 350, h: 24 },
  );
}

function logoLockup(id, x, y, dark = false) {
  const fg = dark ? C.textOnDark : C.textPrimary;
  const bg = dark ? C.textOnDark : C.textPrimary;
  const inner = dark ? C.gradStart : C.bgPrimary;
  return el(
    `<div style="display:flex;align-items:center;gap:10px;">
      <div style="width:32px;height:32px;background:${bg};display:flex;align-items:center;justify-content:center;">
        <div style="width:18px;height:2px;background:${inner};box-shadow:0 6px 0 ${inner},0 12px 0 ${inner};"></div>
      </div>
      <span style="font-family:${FONT};font-size:18px;font-weight:500;color:${fg};letter-spacing:0.02em;">ARCADIA</span>
    </div>`,
    { id, x, y, w: 200, h: 40 },
  );
}

function decoLetter(char, id, x, y, w, h, color) {
  return el(
    `<p style="font-family:${FONT};font-size:620px;font-weight:700;color:${color};line-height:0.85;margin:0;">${char}</p>`,
    { id, x, y, w, h, layer: 'bg', overflow: 'clip' },
  );
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'DM Sans', weights: [300, 400, 500, 600, 700], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: HERO TITLE (DUAL-TONE SPLIT)
    // ================================================================
    {
      id: 'hero-title',
      background: C.bgPrimary,
      notes: 'Opening slide — Hero Title with dual-tone split layout',
      elements: [
        // Left accent panel (olive-green, 40% width)
        el('', {
          id: 's1-left-panel',
          x: 0, y: 0, w: 768, h: 1080,
          layer: 'bg',
          style: { background: C.bgTertiary },
        }),

        // Oversized decorative letter on left panel
        decoLetter('A', 's1-deco-letter', -60, 260, 700, 580, 'rgba(100,118,65,0.35)'),

        // Tagline on left panel
        el(
          `<p style="font-family:${FONT};font-size:20px;font-weight:400;color:rgba(255,255,255,0.7);line-height:1.5;letter-spacing:0.01em;">Designing spaces<br>for a better tomorrow</p>`,
          { id: 's1-left-tagline', x: 64, y: 840, w: 300, h: 70 },
        ),

        // Logo lockup on right panel
        logoLockup('s1-logo', 860, 90),

        // Hero headline on right panel
        el(
          `<h1 style="font-family:${FONT};font-size:76px;font-weight:700;color:${C.textPrimary};line-height:1.1;letter-spacing:-0.02em;margin:0;">The Future<br>of Sustainable<br>Architecture</h1>`,
          { id: 's1-hero-title', x: 860, y: 280, w: 860, h: 280 },
        ),

        // Subtitle
        el(
          `<p style="font-family:${FONT};font-size:22px;font-weight:400;color:${C.textSecondary};line-height:1.5;margin:0;">Innovative design principles shaping<br>the built environment for 2030 and beyond.</p>`,
          { id: 's1-subtitle', x: 860, y: below('s1-hero-title', { gap: 28 }), w: 700, h: 72 },
        ),

        // Footer URL
        el(
          `<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};margin:0;">arcadia-studio.com</p>`,
          { id: 's1-url', x: 860, y: 960, w: 250, h: 24 },
        ),

        templateLabel('Hero Title (Dual-Tone Split)', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2: TABLE OF CONTENTS / AGENDA
    // ================================================================
    {
      id: 'agenda',
      background: C.bgPrimary,
      notes: 'Table of Contents / Agenda',
      elements: (() => {
        const items = [
          { num: '01', title: 'Biophilic Design', desc: 'Integrating nature into the built environment' },
          { num: '02', title: 'Net-Zero Materials', desc: 'Carbon-neutral building components and methods' },
          { num: '03', title: 'Adaptive Reuse', desc: 'Transforming existing structures for new purposes' },
          { num: '04', title: 'Smart Building Systems', desc: 'AI-driven energy management and automation' },
          { num: '05', title: 'Community & Wellbeing', desc: 'Designing for human health and social connection' },
        ];

        const elements = [
          el(
            `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textTertiary};text-transform:uppercase;letter-spacing:0.05em;margin:0;">TABLE OF CONTENTS</p>`,
            { id: 's2-tagline', x: safe.x, y: 90, w: 400, h: 22 },
          ),
        ];

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const yBase = 140 + i * 130;
          elements.push(
            el(
              `<div>
                <p style="font-family:${FONT};font-size:42px;font-weight:300;color:${C.textTertiary};margin:0;line-height:1.0;">${item.num}</p>
                <p style="font-family:${FONT};font-size:24px;font-weight:600;color:${C.textPrimary};margin:6px 0 0;line-height:1.3;">${item.title}</p>
                <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:4px 0 0;line-height:1.4;">${item.desc}</p>
              </div>`,
              { id: `s2-item${i}`, x: safe.x, y: yBase, w: 520, h: 110 },
            ),
          );
        }

        // Gradient overlay card (bottom-right)
        elements.push(
          el(
            `<div style="width:100%;height:100%;background:linear-gradient(135deg, ${C.gradStart}, ${C.gradEnd});padding:48px;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:40px;">
                <div style="width:28px;height:28px;background:${C.textOnDark};display:flex;align-items:center;justify-content:center;">
                  <div style="width:16px;height:2px;background:${C.gradStart};box-shadow:0 5px 0 ${C.gradStart},0 10px 0 ${C.gradStart};"></div>
                </div>
                <span style="font-family:${FONT};font-size:16px;font-weight:500;color:${C.textOnDark};letter-spacing:0.02em;">ARCADIA</span>
              </div>
              <p style="font-family:${FONT};font-size:42px;font-weight:700;color:${C.textOnDark};line-height:1.2;margin:0;">Building a<br>greener world,<br>by design.</p>
              <p style="font-family:${FONT};font-size:17px;font-weight:400;color:${C.textOnDarkMuted};line-height:1.5;margin:24px 0 0;">Five principles guiding our practice</p>
            </div>`,
            { id: 's2-overlay-card', x: 960, y: 486, w: 920, h: 560 },
          ),
        );

        elements.push(templateLabel('Table of Contents / Agenda', 's2-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3: SECTION DIVIDER (FULL GRADIENT)
    // ================================================================
    {
      id: 'section-divider',
      background: `linear-gradient(135deg, ${C.gradStart}, ${C.gradEnd})`,
      notes: 'Section Divider — Biophilic Design',
      elements: [
        logoLockup('s3-logo', safe.x, 90, true),

        el(
          `<h2 style="font-family:${FONT};font-size:72px;font-weight:700;color:${C.textOnDark};line-height:1.15;letter-spacing:-0.02em;margin:0;">Biophilic<br>Design</h2>`,
          { id: 's3-heading', x: safe.x, y: 360, w: 900, h: 180 },
        ),

        el(
          `<p style="font-family:${FONT};font-size:22px;font-weight:400;color:${C.textOnDarkMuted};line-height:1.5;margin:0;">Integrating nature into the built environment<br>to enhance human wellbeing and ecological health.</p>`,
          { id: 's3-subtitle', x: safe.x, y: below('s3-heading', { gap: 28 }), w: 800, h: 72 },
        ),

        // Section number (bottom-right, subtle)
        el(
          `<p style="font-family:${FONT};font-size:180px;font-weight:300;color:rgba(255,255,255,0.08);line-height:1.0;margin:0;text-align:right;">01</p>`,
          { id: 's3-section-num', x: 1400, y: 780, w: 420, h: 240, layer: 'bg', overflow: 'clip' },
        ),

        templateLabel('Section Divider (Full Gradient)', 's3-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 4: ONE-COLUMN CONTENT
    // ================================================================
    {
      id: 'one-column',
      background: C.bgPrimary,
      notes: 'One-Column content — What is biophilic design?',
      elements: [
        el(
          `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textTertiary};text-transform:uppercase;letter-spacing:0.05em;margin:0;">BIOPHILIC DESIGN</p>`,
          { id: 's4-eyebrow', x: safe.x, y: safe.y, w: 400, h: 22 },
        ),

        el(
          `<h2 style="font-family:${FONT};font-size:52px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.02em;margin:0;">Designing with Nature,<br>Not Against It</h2>`,
          { id: 's4-heading', x: safe.x, y: below('s4-eyebrow', { gap: 20 }), w: 1000, h: 130 },
        ),

        el(
          `<p style="font-family:${FONT};font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.7;margin:0;">Biophilic design is the practice of connecting building occupants more closely to nature. Rooted in the understanding that humans possess an innate tendency to seek connections with nature, it incorporates natural materials, natural light, vegetation, and other elements of the natural world into the modern built environment.</p>`,
          { id: 's4-body1', x: safe.x, y: below('s4-heading', { gap: 32 }), w: 1100, h: 160 },
        ),

        el(
          `<p style="font-family:${FONT};font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.7;margin:0;">At Arcadia, we apply three core biophilic strategies across every project: direct nature experiences (living walls, water features, natural ventilation), indirect nature references (natural materials, organic patterns, earth tones), and spatial conditions inspired by nature (prospect and refuge, mystery and enticement).</p>`,
          { id: 's4-body2', x: safe.x, y: below('s4-body1', { gap: 24 }), w: 1100, h: 160 },
        ),

        // Slide number
        el('', {
          id: 's4-num-strip',
          x: 1766, y: 0, w: 154, h: 86,
          layer: 'bg',
          style: { background: C.bgSecondary },
        }),
        el(
          `<p style="font-family:${FONT};font-size:18px;font-weight:300;color:${C.textOnDark};text-align:center;margin:0;line-height:86px;">04</p>`,
          { id: 's4-num', x: 1766, y: 0, w: 154, h: 86 },
        ),

        templateLabel('One-Column Content', 's4-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 5: SPLIT-CONTENT (THESIS / EVIDENCE)
    // ================================================================
    {
      id: 'split-content',
      background: C.bgPrimary,
      notes: 'Dual-Tone Split Content — Thesis vs. Evidence',
      elements: [
        // Left olive panel — thesis
        el('', {
          id: 's5-left-panel',
          x: 0, y: 0, w: 672, h: 1080,
          layer: 'bg',
          style: { background: C.bgTertiary },
        }),

        // Decorative letter
        decoLetter('B', 's5-deco-letter', -40, 180, 600, 580, 'rgba(100,118,65,0.30)'),

        // Thesis on olive panel
        el(
          `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.05em;margin:0;">OUR THESIS</p>`,
          { id: 's5-thesis-label', x: 64, y: 90, w: 300, h: 22 },
        ),

        el(
          `<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textOnDark};line-height:1.2;letter-spacing:-0.01em;margin:0;">Buildings<br>Should<br>Breathe</h2>`,
          { id: 's5-thesis', x: 64, y: 360, w: 540, h: 180 },
        ),

        el(
          `<p style="font-family:${FONT};font-size:18px;font-weight:400;color:rgba(255,255,255,0.7);line-height:1.6;margin:0;">Living architecture responds to its environment, regulates its own climate, and enhances the health of its occupants.</p>`,
          { id: 's5-thesis-body', x: 64, y: 780, w: 540, h: 100 },
        ),

        // Right white panel — evidence
        el(
          `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textTertiary};text-transform:uppercase;letter-spacing:0.05em;margin:0;">THE EVIDENCE</p>`,
          { id: 's5-evidence-label', x: 770, y: 90, w: 300, h: 22 },
        ),

        el(
          `<div>
            <p style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.accent1};margin:0;line-height:1.0;">62%</p>
            <p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textPrimary};margin:8px 0 0;line-height:1.3;">Improvement in Air Quality</p>
            <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:6px 0 0;line-height:1.5;">Buildings with natural ventilation systems show a 62% improvement in indoor air quality metrics compared to sealed HVAC-only environments.</p>
          </div>`,
          { id: 's5-ev1', x: 770, y: 200, w: 920, h: 160 },
        ),

        el(
          `<div>
            <p style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.accent1};margin:0;line-height:1.0;">3.4×</p>
            <p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textPrimary};margin:8px 0 0;line-height:1.3;">Higher Occupant Satisfaction</p>
            <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:6px 0 0;line-height:1.5;">Biophilic offices report 3.4 times higher occupant satisfaction scores in post-occupancy evaluations.</p>
          </div>`,
          { id: 's5-ev2', x: 770, y: below('s5-ev1', { gap: 40 }), w: 920, h: 160 },
        ),

        el(
          `<div>
            <p style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.accent1};margin:0;line-height:1.0;">28%</p>
            <p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textPrimary};margin:8px 0 0;line-height:1.3;">Reduction in Absenteeism</p>
            <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:6px 0 0;line-height:1.5;">Workplaces incorporating biophilic design principles see a 28% decrease in unplanned employee absences.</p>
          </div>`,
          { id: 's5-ev3', x: 770, y: below('s5-ev2', { gap: 40 }), w: 920, h: 160 },
        ),

        templateLabel('Split Content (Thesis / Evidence)', 's5-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 6: STATS / KPI
    // ================================================================
    {
      id: 'stats',
      background: C.bgPrimary,
      notes: 'Stats / KPI — Sustainability impact metrics',
      elements: (() => {
        const metrics = [
          { value: '40%', label: 'Energy Reduction', desc: 'Average decrease in energy consumption across our net-zero projects' },
          { value: '12K', label: 'Tons CO₂ Offset', desc: 'Carbon offset through green building materials and design in 2025' },
          { value: '94%', label: 'LEED Certification', desc: 'Of Arcadia projects achieve LEED Gold or Platinum certification' },
        ];

        const colW = Math.floor((safe.w - 64 * 2) / 3);
        const elements = [
          el(
            `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textTertiary};text-transform:uppercase;letter-spacing:0.05em;margin:0;">BY THE NUMBERS</p>`,
            { id: 's6-eyebrow', x: safe.x, y: safe.y, w: 400, h: 22 },
          ),

          el(
            `<h2 style="font-family:${FONT};font-size:52px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.02em;margin:0;">Our Impact<br>in Numbers</h2>`,
            { id: 's6-heading', x: safe.x, y: below('s6-eyebrow', { gap: 20 }), w: 800, h: 130 },
          ),
        ];

        for (let i = 0; i < metrics.length; i++) {
          const m = metrics[i];
          const cx = safe.x + i * (colW + 64);
          const cy = 460;

          // Accent bar above metric
          elements.push(
            el(`<div style="width:48px;height:4px;background:${i === 0 ? C.accent2 : C.accent1};"></div>`, {
              id: `s6-bar${i}`, x: cx, y: cy, w: 48, h: 4,
            }),
          );

          // Big number
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:80px;font-weight:700;color:${C.textPrimary};line-height:1.0;margin:0;">${m.value}</p>`,
              { id: `s6-val${i}`, x: cx, y: cy + 24, w: colW, h: 90 },
            ),
          );

          // Label
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textPrimary};margin:0;line-height:1.3;">${m.label}</p>`,
              { id: `s6-label${i}`, x: cx, y: below(`s6-val${i}`, { gap: 12 }), w: colW, h: 30 },
            ),
          );

          // Description
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.5;">${m.desc}</p>`,
              { id: `s6-desc${i}`, x: cx, y: below(`s6-label${i}`, { gap: 8 }), w: colW, h: 70 },
            ),
          );
        }

        elements.push(templateLabel('Stats / KPI', 's6-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 7: PHOTO FEATURE
    // ================================================================
    {
      id: 'photo-feature',
      background: C.bgSecondary,
      notes: 'Photo Feature — The Greenweave Pavilion project showcase',
      elements: [
        // Left photo panel (35% width)
        el(img(IMAGES.sustainablePavilion), {
          id: 's7-photo-panel', x: 0, y: 0, w: 672, h: 1080, layer: 'bg',
        }),

        // Project label
        el(
          `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.05em;margin:0;">FEATURED PROJECT</p>`,
          { id: 's7-eyebrow', x: 770, y: 90, w: 400, h: 22 },
        ),

        // Project title
        el(
          `<h2 style="font-family:${FONT};font-size:48px;font-weight:700;color:${C.textOnDark};line-height:1.15;letter-spacing:-0.01em;margin:0;">The Greenweave<br>Pavilion</h2>`,
          { id: 's7-title', x: 770, y: 200, w: 980, h: 120 },
        ),

        // Location
        el(
          `<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textOnDarkMuted};line-height:1.5;margin:0;">Singapore — Completed 2025</p>`,
          { id: 's7-location', x: 770, y: below('s7-title', { gap: 16 }), w: 600, h: 28 },
        ),

        // Body text
        el(
          `<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textOnDarkMuted};line-height:1.7;margin:0;">A 12-storey mixed-use tower featuring integrated living walls on all four facades, generating 40% more energy than it consumes through embedded photovoltaic facades and vertical wind corridors. The Greenweave Pavilion has become a benchmark for tropical sustainable architecture.</p>`,
          { id: 's7-body', x: 770, y: below('s7-location', { gap: 24 }), w: 960, h: 160 },
        ),

        // Key stats row
        el(
          `<div style="display:flex;gap:80px;">
            <div>
              <p style="font-family:${FONT};font-size:36px;font-weight:700;color:${C.textOnDark};margin:0;line-height:1.0;">140%</p>
              <p style="font-family:${FONT};font-size:14px;font-weight:400;color:${C.textOnDarkMuted};margin:6px 0 0;">Net energy positive</p>
            </div>
            <div>
              <p style="font-family:${FONT};font-size:36px;font-weight:700;color:${C.textOnDark};margin:0;line-height:1.0;">2,400m²</p>
              <p style="font-family:${FONT};font-size:14px;font-weight:400;color:${C.textOnDarkMuted};margin:6px 0 0;">Living wall coverage</p>
            </div>
            <div>
              <p style="font-family:${FONT};font-size:36px;font-weight:700;color:${C.textOnDark};margin:0;line-height:1.0;">LEED Pt.</p>
              <p style="font-family:${FONT};font-size:14px;font-weight:400;color:${C.textOnDarkMuted};margin:6px 0 0;">Platinum certified</p>
            </div>
          </div>`,
          { id: 's7-stats', x: 770, y: below('s7-body', { gap: 48 }), w: 960, h: 80 },
        ),

        // Slide number strip
        el('', {
          id: 's7-num-strip',
          x: 1766, y: 0, w: 154, h: 86,
          layer: 'bg',
          style: { background: '#111216' },
        }),
        el(
          `<p style="font-family:${FONT};font-size:18px;font-weight:300;color:${C.textOnDark};text-align:center;margin:0;line-height:86px;">07</p>`,
          { id: 's7-num', x: 1766, y: 0, w: 154, h: 86 },
        ),

        templateLabel('Photo Feature', 's7-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 8: TIMELINE (SPLIT-PANEL SPINE)
    // ================================================================
    {
      id: 'timeline',
      background: C.bgPrimary,
      notes: 'Timeline — Arcadia sustainability milestones',
      elements: (() => {
        const spineX = 480; // vertical spine position
        const milestones = [
          { year: '2019', title: 'Foundation', desc: 'Arcadia founded with a mandate for carbon-neutral design' },
          { year: '2021', title: 'First Net-Zero Project', desc: 'Completed the Helios Office Tower — our first net-zero commercial building' },
          { year: '2023', title: 'Living Materials Lab', desc: 'Opened our in-house research lab for bio-based building materials' },
          { year: '2025', title: 'Greenweave Pavilion', desc: 'Flagship project generates 140% of its own energy consumption' },
          { year: '2027', title: 'Carbon-Positive Portfolio', desc: 'All new projects designed to be carbon-positive from day one' },
        ];

        const elements = [
          // Left olive panel (narrow, acts as spine background)
          el('', {
            id: 's8-left-panel',
            x: 0, y: 0, w: spineX, h: 1080,
            layer: 'bg',
            style: { background: C.bgTertiary },
          }),

          // Decorative letter
          decoLetter('T', 's8-deco-letter', -80, 300, 500, 500, 'rgba(100,118,65,0.25)'),

          el(
            `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.05em;margin:0;">OUR JOURNEY</p>`,
            { id: 's8-label', x: 64, y: 90, w: 300, h: 22 },
          ),

          el(
            `<h2 style="font-family:${FONT};font-size:36px;font-weight:700;color:${C.textOnDark};line-height:1.2;margin:0;">Sustainability<br>Milestones</h2>`,
            { id: 's8-heading', x: 64, y: below('s8-label', { gap: 16 }), w: 360, h: 90 },
          ),
        ];

        const startY = 220;
        const stepH = 150;

        for (let i = 0; i < milestones.length; i++) {
          const m = milestones[i];
          const cy = startY + i * stepH;

          // Year on olive side (right-aligned to spine)
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:32px;font-weight:300;color:${C.textOnDark};text-align:right;margin:0;line-height:1.0;">${m.year}</p>`,
              { id: `s8-year${i}`, x: spineX - 200, y: cy + 10, w: 160, h: 36 },
            ),
          );

          // Dot on the spine
          elements.push(
            el(
              `<div style="width:12px;height:12px;background:${C.bgPrimary};"></div>`,
              { id: `s8-dot${i}`, x: spineX - 6, y: cy + 20, w: 12, h: 12 },
            ),
          );

          // Title + description on white side
          elements.push(
            el(
              `<div>
                <p style="font-family:${FONT};font-size:22px;font-weight:600;color:${C.textPrimary};margin:0;line-height:1.3;">${m.title}</p>
                <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:8px 0 0;line-height:1.5;">${m.desc}</p>
              </div>`,
              { id: `s8-item${i}`, x: spineX + 48, y: cy, w: 700, h: 100 },
            ),
          );
        }

        elements.push(templateLabel('Timeline (Split-Panel Spine)', 's8-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 9: TEAM
    // ================================================================
    {
      id: 'team',
      background: C.bgPrimary,
      notes: 'Team grid — Leadership team',
      elements: (() => {
        const members = [
          { img: IMAGES.teamMember1, name: 'Daniel Vasquez', title: 'Director of Design', desc: 'Former lead at Meridian Partners, specializing in adaptive reuse and urban regeneration.' },
          { img: IMAGES.teamMember2, name: 'Ingrid Solberg', title: 'Head of Sustainability', desc: 'Environmental engineer with 15 years in carbon-neutral building systems.' },
          { img: IMAGES.teamMember3, name: 'Robert Chen', title: 'Principal Architect', desc: 'Co-founder and lead architect, pioneering biophilic design since 2012.' },
        ];

        const colW = 440;
        const gap = 60;
        const startX = safe.x + (safe.w - (colW * 3 + gap * 2)) / 2;
        const photoH = 360;

        const elements = [
          el(
            `<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textTertiary};text-transform:uppercase;letter-spacing:0.05em;margin:0;">LEADERSHIP</p>`,
            { id: 's9-eyebrow', x: safe.x, y: safe.y, w: 400, h: 22 },
          ),

          el(
            `<h2 style="font-family:${FONT};font-size:52px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.02em;margin:0;">The Team Behind<br>the Vision</h2>`,
            { id: 's9-heading', x: safe.x, y: below('s9-eyebrow', { gap: 20 }), w: 800, h: 130 },
          ),
        ];

        for (let i = 0; i < members.length; i++) {
          const m = members[i];
          const cx = startX + i * (colW + gap);
          const photoY = 340;

          // Photo
          elements.push(
            el(img(m.img), {
              id: `s9-photo${i}`, x: cx, y: photoY, w: colW, h: photoH,
            }),
          );

          // Name
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textPrimary};margin:0;line-height:1.3;">${m.name}</p>`,
              { id: `s9-name${i}`, x: cx, y: photoY + photoH + 20, w: colW, h: 28 },
            ),
          );

          // Title
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textTertiary};margin:0;line-height:1.3;">${m.title}</p>`,
              { id: `s9-title${i}`, x: cx, y: below(`s9-name${i}`, { gap: 6 }), w: colW, h: 22 },
            ),
          );

          // Description
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.5;">${m.desc}</p>`,
              { id: `s9-desc${i}`, x: cx, y: below(`s9-title${i}`, { gap: 10 }), w: colW, h: 60 },
            ),
          );
        }

        elements.push(templateLabel('Team', 's9-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 10: TESTIMONIAL / QUOTE
    // ================================================================
    {
      id: 'testimonial',
      background: C.bgSecondary,
      notes: 'Testimonial / Quote — Maria Rodriguez',
      elements: [
        // Left photo panel (35% width)
        el(img(IMAGES.architectPortrait), {
          id: 's10-photo-panel', x: 0, y: 0, w: 672, h: 1080, layer: 'bg',
        }),

        // Attribution — name
        el(
          `<p style="font-family:${FONT};font-size:22px;font-weight:600;color:${C.textOnDark};margin:0;line-height:1.3;">Maria Rodriguez</p>`,
          { id: 's10-name', x: 64, y: 800, w: 540, h: 32 },
        ),

        // Attribution — title
        el(
          `<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textOnDarkMuted};margin:0;line-height:1.4;">Lead Architect, Helios Practice</p>`,
          { id: 's10-title', x: 64, y: below('s10-name', { gap: 10 }), w: 540, h: 24 },
        ),

        // Pull quote
        el(
          `<p style="font-family:${FONT};font-size:34px;font-weight:700;color:${C.textOnDark};line-height:1.35;margin:0;">"Sustainable architecture isn't about sacrifice — it's about reimagining what's possible when we design with nature, not against it."</p>`,
          { id: 's10-quote', x: 770, y: 220, w: 980, h: 240 },
        ),

        // Body text
        el(
          `<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textOnDarkMuted};line-height:1.6;margin:0;">Working across three continents, Rodriguez has pioneered the integration of living systems into commercial architecture. Her latest project, the Greenweave Tower in Singapore, generates 40% more energy than it consumes through embedded photovoltaic facades and vertical wind corridors.</p>`,
          { id: 's10-body', x: 770, y: below('s10-quote', { gap: 32 }), w: 980, h: 160 },
        ),

        // Slide number strip
        el('', {
          id: 's10-num-strip',
          x: 1766, y: 0, w: 154, h: 86,
          layer: 'bg',
          style: { background: '#111216' },
        }),
        el(
          `<p style="font-family:${FONT};font-size:18px;font-weight:300;color:${C.textOnDark};text-align:center;margin:0;line-height:86px;">10</p>`,
          { id: 's10-num', x: 1766, y: 0, w: 154, h: 86 },
        ),

        templateLabel('Testimonial / Quote', 's10-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 11: CLOSING / CTA
    // ================================================================
    {
      id: 'closing',
      background: C.bgSecondary,
      notes: 'Closing / CTA slide',
      elements: [
        // Decorative section number (oversized, subtle)
        el(
          `<p style="font-family:${FONT};font-size:400px;font-weight:300;color:rgba(255,255,255,0.03);line-height:1.0;margin:0;text-align:right;">A</p>`,
          { id: 's11-deco', x: 1200, y: 300, w: 600, h: 400, layer: 'bg', overflow: 'clip' },
        ),

        logoLockup('s11-logo', safe.x, 90, true),

        el(
          `<h2 style="font-family:${FONT};font-size:64px;font-weight:700;color:${C.textOnDark};line-height:1.15;letter-spacing:-0.02em;margin:0;">Let's Build<br>the Future Together</h2>`,
          { id: 's11-heading', x: safe.x, y: 340, w: 900, h: 160 },
        ),

        el(
          `<p style="font-family:${FONT};font-size:20px;font-weight:400;color:${C.textOnDarkMuted};line-height:1.6;margin:0;">We're always looking for partners, collaborators, and communities<br>who share our vision for a sustainable built environment.</p>`,
          { id: 's11-body', x: safe.x, y: below('s11-heading', { gap: 24 }), w: 800, h: 64 },
        ),

        // Contact details
        el(
          `<div>
            <p style="font-family:${FONT};font-size:18px;font-weight:500;color:${C.textOnDark};margin:0 0 12px 0;line-height:1.4;">hello@arcadia-studio.com</p>
            <p style="font-family:${FONT};font-size:18px;font-weight:500;color:${C.textOnDark};margin:0 0 12px 0;line-height:1.4;">arcadia-studio.com</p>
            <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textOnDarkMuted};margin:0;line-height:1.4;">London — Singapore — Copenhagen</p>
          </div>`,
          { id: 's11-contact', x: safe.x, y: below('s11-body', { gap: 48 }), w: 600, h: 120 },
        ),

        // Gradient accent strip (bottom)
        el('', {
          id: 's11-accent-strip',
          x: 0, y: 1060, w: 1920, h: 20,
          layer: 'bg',
          style: { background: `linear-gradient(90deg, ${C.gradStart}, ${C.gradEnd})` },
        }),

        templateLabel('Closing / CTA', 's11-tpl', true),
      ],
    },
  ];

  return await render(slides);
}
