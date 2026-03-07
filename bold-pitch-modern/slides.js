// slides.js — "Forge — Where Work Comes Alive"
// bold-pitch-modern theme — 20 slide templates

import {
  init, render, safeRect, splitRect, el,
  below,
} from '../slidekit.bundle.min.js';

// -- Image Manifest ---------------------------------------------------------------
const IMAGES = {
  heroWorkspace:    './images/hero-workspace.jpg',
  teamCollab:       './images/team-collab.jpg',
  personLaptop:     './images/person-laptop.jpg',
  crowdedOffice:    './images/crowded-office.jpg',
  founderPortrait:  './images/founder-portrait.jpg',
  modernLounge:     './images/modern-lounge.jpg',
  frustratedWorker: './images/frustrated-worker.jpg',
  brightDesk:       './images/bright-desk.jpg',
  handsTablet:      './images/hands-tablet.jpg',
  phoneApp:         './images/phone-app.jpg',
  meetingGlass:     './images/meeting-glass.jpg',
  happyMember:      './images/happy-member.jpg',
  networking:       './images/networking.jpg',
  longTable:        './images/long-table.jpg',
  confidentLeader:  './images/confident-leader.jpg',
};

function img(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;${extraStyle}">`;
}

// -- Design Tokens ----------------------------------------------------------------
const C = {
  bgPrimary:        '#ECEEF1',
  bgBlue:           '#3939F5',
  bgRed:            '#EF4444',
  bgWhite:          '#FFFFFF',
  textPrimary:      '#1A1A2E',
  textSecondary:    '#5A5A6E',
  textOnColor:      '#FFFFFF',
  textOnColorMuted: '#D0D0FF',
  accentBlue:       '#3939F5',
  accentRed:        '#EF4444',
  border:           '#D8DAE0',
};

const FONT = 'Montserrat';

// -- Helpers ----------------------------------------------------------------------

function templateLabel(name, id, onDark = false) {
  const color = onDark ? 'rgba(255,255,255,0.18)' : 'rgba(26,26,46,0.18)';
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:400;color:${color};letter-spacing:0.02em;text-align:right;">Template: ${name}</p>`,
    { id, x: 1400, y: 1050, w: 400, style: { textAlign: 'right' } },
  );
}

function themeLabel(id) {
  return el(
    `<p style="font-family:${FONT};font-size:14px;font-weight:400;color:rgba(255,255,255,0.14);letter-spacing:0.02em;text-align:right;">Theme: bold-pitch-modern</p>`,
    { id, x: 1400, y: 1030, w: 400, style: { textAlign: 'right' } },
  );
}

function headerBar(slideNum, id, onDark = false) {
  const color = onDark ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,46,0.5)';
  const num = String(slideNum).padStart(2, '0');
  return [
    el(
      `<p style="font-family:${FONT};font-size:14px;font-weight:600;color:${color};text-transform:uppercase;letter-spacing:0.12em;">${'INVESTOR PITCH'}</p>`,
      { id: `${id}-hdr-label`, x: 134, y: 43, w: 300 },
    ),
    el(
      `<p style="font-family:${FONT};font-size:14px;font-weight:600;color:${color};text-transform:uppercase;letter-spacing:0.12em;text-align:right;">${num}</p>`,
      { id: `${id}-hdr-num`, x: 1686, y: 43, w: 100, style: { textAlign: 'right' } },
    ),
  ];
}

function footerUrl(id, onDark = false) {
  const color = onDark ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,46,0.5)';
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:500;color:${color};text-transform:uppercase;letter-spacing:0.12em;">WWW.FORGESPACES.COM</p>`,
    { id, x: 134, y: 1040, w: 400 },
  );
}

function navDot(id, onDark = false) {
  const bg = onDark ? 'rgba(255,255,255,0.2)' : C.accentRed;
  const fg = onDark ? 'rgba(255,255,255,0.5)' : '#FFFFFF';
  return el(
    `<div style="width:36px;height:36px;border-radius:50%;background:${bg};display:flex;align-items:center;justify-content:center;">
      <span style="font-family:${FONT};font-size:18px;font-weight:700;color:${fg};line-height:1;margin-left:2px;">&#x203A;</span>
    </div>`,
    { id, x: 1750, y: 950, w: 36, h: 36 },
  );
}

function redCircleBadge(num, id, x, y, size = 36) {
  return el(
    `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${C.accentRed};display:flex;align-items:center;justify-content:center;">
      <span style="font-family:${FONT};font-size:${size * 0.42}px;font-weight:700;color:#FFFFFF;line-height:1;">${num}</span>
    </div>`,
    { id, x, y, w: size, h: size },
  );
}

function redCircleIcon(iconChar, id, x, y, size = 44) {
  return el(
    `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${C.accentRed};display:flex;align-items:center;justify-content:center;">
      <span style="font-family:${FONT};font-size:${size * 0.45}px;font-weight:700;color:#FFFFFF;line-height:1;">${iconChar}</span>
    </div>`,
    { id, x, y, w: size, h: size },
  );
}

// -- Main Entry -------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Montserrat', weights: [400, 500, 600, 700, 800, 900], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: HERO TITLE
    // ================================================================
    {
      id: 'hero-title',
      background: C.bgBlue,
      elements: [
        // Photo right panel
        el(img(IMAGES.heroWorkspace, 'object-position:bottom;'), {
          id: 's1-photo',
          x: 1920, y: 0, w: 820, h: 980, anchor: 'tr',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '0 0 0 200px' },
        }),

        // Header bar (white on blue)
        ...headerBar(1, 's1', true),

        // FORGE massive heading
        el(
          `<h1 style="font-family:${FONT};font-size:162px;font-weight:900;color:${C.textOnColor};line-height:0.95;letter-spacing:-0.03em;margin:0;">FORGE</h1>`,
          { id: 's1-title', x: 134, y: 300, w: 900 },
        ),

        // Subtitle italic
        el(
          `<p style="font-family:${FONT};font-size:42px;font-weight:500;font-style:italic;color:${C.textOnColorMuted};line-height:1.3;margin:0;">Where Work Comes Alive</p>`,
          { id: 's1-subtitle', x: 134, y: below('s1-title', { gap: 24 }), w: 800 },
        ),

        // Footer URL
        el(
          `<p style="font-family:${FONT};font-size:13px;font-weight:500;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.12em;">WWW.FORGESPACES.COM</p>`,
          { id: 's1-footer', x: 134, y: 1040, w: 400 },
        ),

        // Theme label bottom-right
        themeLabel('s1-theme'),

        templateLabel('Hero Title', 's1-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 2: TABLE OF CONTENTS
    // ================================================================
    {
      id: 'table-of-contents',
      background: C.bgPrimary,
      elements: (() => {
        const items = [
          { num: '01', label: 'Our Story' },
          { num: '02', label: 'The Problem' },
          { num: '03', label: 'Our Solution' },
          { num: '04', label: 'How It Works' },
          { num: '05', label: 'Growth' },
          { num: '06', label: 'Testimonials' },
          { num: '07', label: 'Future Plans' },
          { num: '08', label: 'The Ask' },
        ];

        const elements = [
          ...headerBar(2, 's2'),

          // "Content" massive decorative heading bottom-left
          el(
            `<p style="font-family:${FONT};font-size:148px;font-weight:900;color:rgba(26,26,46,0.06);line-height:0.9;letter-spacing:-0.03em;margin:0;">Content</p>`,
            { id: 's2-deco', x: 100, y: 820, w: 900, layer: 'bg', overflow: 'clip' },
          ),
        ];

        // Left column (items 0-3)
        const badgeSize = 72;
        for (let i = 0; i < 4; i++) {
          const item = items[i];
          const yBase = 180 + i * 130;
          elements.push(
            redCircleBadge(item.num, `s2-badge-${i}`, 200, yBase, badgeSize),
          );
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:28px;font-weight:600;color:${C.textPrimary};line-height:1.3;margin:0;">${item.label}</p>`,
              { id: `s2-label-${i}`, x: 280, y: yBase + 20, w: 400 },
            ),
          );
        }

        // Right column (items 4-7)
        for (let i = 4; i < 8; i++) {
          const item = items[i];
          const yBase = 180 + (i - 4) * 130;
          elements.push(
            redCircleBadge(item.num, `s2-badge-${i}`, 960, yBase, badgeSize),
          );
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:28px;font-weight:600;color:${C.textPrimary};line-height:1.3;margin:0;">${item.label}</p>`,
              { id: `s2-label-${i}`, x: 1040, y: yBase + 20, w: 400 },
            ),
          );
        }

        elements.push(navDot('s2-nav'));
        elements.push(templateLabel('Table of Contents', 's2-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3: SECTION DIVIDER - BLUE WITH BLOB PHOTO
    // ================================================================
    {
      id: 'section-our-story',
      background: C.bgBlue,
      elements: [
        ...headerBar(3, 's3', true),

        // "Our Story" massive heading
        el(
          `<h2 style="font-family:${FONT};font-size:120px;font-weight:900;color:${C.textOnColor};line-height:1.0;letter-spacing:-0.03em;margin:0;">Our<br>Story</h2>`,
          { id: 's3-heading', x: 134, y: 320, w: 700 },
        ),

        // Organic blob with photo (SVG double-pill mask rotated 45°)
        el(
          `<svg viewBox="0 0 700 700" style="width:100%;height:100%;overflow:visible;">
            <defs>
              <mask id="s3-pillMask">
                <g transform="rotate(45 350 350)">
                  <rect x="175" y="110" width="350" height="230" rx="115" ry="115" fill="white"/>
                  <rect x="175" y="300" width="350" height="230" rx="115" ry="115" fill="white"/>
                </g>
              </mask>
            </defs>
            <image
              href="${IMAGES.teamCollab}"
              x="147" y="-9" width="449" height="674"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#s3-pillMask)"
            />
          </svg>`,
          { id: 's3-blob-photo', x: 880, y: 80, w: 850, h: 850 },
        ),

        footerUrl('s3-footer', true),
        navDot('s3-nav', true),
        templateLabel('Section Divider - Blue Blob', 's3-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 4: VISION QUOTE WITH OVERLAPPING CIRCLES
    // ================================================================
    {
      id: 'vision-quote',
      background: C.bgPrimary,
      elements: [
        ...headerBar(4, 's4'),

        // Blue circle (behind)
        el('', {
          id: 's4-blue-circle',
          x: 160, y: 240, w: 380, h: 380,
          style: { background: C.accentBlue, borderRadius: '50%' },
        }),

        // Photo circle (in front, overlapping)
        el(img(IMAGES.personLaptop), {
          id: 's4-photo-circle',
          x: 360, y: 340, w: 380, h: 380,
          overflow: 'clip',
          style: { borderRadius: '50%' },
          z: 2,
        }),

        // Vision text right side
        el(
          `<p style="font-family:${FONT};font-size:28px;font-weight:500;color:${C.textSecondary};line-height:1.6;margin:0;">We believe the future of work is not about where you sit &mdash; it is about where you thrive. Great ideas don't wait for corner offices.</p>`,
          { id: 's4-vision-text', x: 880, y: 280, w: 820 },
        ),

        // Bold emphasis
        el(
          `<p style="font-family:${FONT};font-size:32px;font-weight:800;color:${C.textPrimary};line-height:1.4;margin:0;">Forge creates spaces where ambition meets inspiration.</p>`,
          { id: 's4-emphasis', x: 880, y: below('s4-vision-text', { gap: 40 }), w: 820 },
        ),

        navDot('s4-nav'),
        templateLabel('Vision Quote with Overlapping Circles', 's4-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 5: SECTION DIVIDER - RED WITH ROUNDED PHOTO
    // ================================================================
    {
      id: 'section-challenge',
      background: C.bgRed,
      elements: [
        ...headerBar(5, 's5', true),

        // "The Challenge" massive heading
        el(
          `<h2 style="font-family:${FONT};font-size:120px;font-weight:900;color:${C.textOnColor};line-height:1.0;letter-spacing:-0.03em;margin:0;">The<br>Challenge</h2>`,
          { id: 's5-heading', x: 134, y: 320, w: 700 },
        ),

        // Photo right 50%, bleeds edges, bottom-left rounded
        el(img(IMAGES.crowdedOffice), {
          id: 's5-photo',
          x: 1920, y: 0, w: 960, h: 780, anchor: 'tr',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '0 0 0 200px' },
        }),

        footerUrl('s5-footer', true),
        navDot('s5-nav', true),
        templateLabel('Section Divider - Red Photo', 's5-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 6: MISSION STATEMENT WITH PORTRAIT
    // ================================================================
    {
      id: 'mission-statement',
      background: C.bgPrimary,
      elements: [
        ...headerBar(6, 's6'),

        // White rounded card left-center
        el(
          `<div style="background:${C.bgWhite};border-radius:32px;padding:56px 48px;">
            <p style="font-family:${FONT};font-size:26px;font-weight:500;color:${C.textPrimary};line-height:1.6;margin:0;">Our mission is simple: eliminate the friction between talent and their best work. We build spaces that adapt to people, not the other way around.</p>
            <p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.accentBlue};line-height:1.5;margin:32px 0 0;">&mdash; Dr. Maya Chen, Co-Founder</p>
          </div>`,
          { id: 's6-card', x: 134, y: 220, w: 750 },
        ),

        // Blue accent square
        el('', {
          id: 's6-accent-square',
          x: 930, y: 400, w: 120, h: 120,
          style: { background: C.accentBlue, borderRadius: '24px' },
        }),

        // Portrait photo right side
        el(img(IMAGES.founderPortrait, 'object-position:top;'), {
          id: 's6-portrait',
          x: 1920, y: 1080, w: 820, h: 980, anchor: 'br',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '160px 0 0 0' },
        }),

        navDot('s6-nav'),
        templateLabel('Mission Statement with Portrait', 's6-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 7: SECTION DIVIDER - BLUE WITH BOTTOM PHOTO STRIP
    // ================================================================
    {
      id: 'section-spaces',
      background: C.bgBlue,
      elements: [
        ...headerBar(7, 's7', true),

        // "Our Spaces" centered heading
        el(
          `<h2 style="font-family:${FONT};font-size:120px;font-weight:900;color:${C.textOnColor};line-height:1.0;letter-spacing:-0.03em;margin:0;text-align:center;">Our Spaces</h2>`,
          { id: 's7-heading', x: 960, y: 280, w: 1400, anchor: 'tc' },
        ),

        // Photo strip bottom
        el(img(IMAGES.modernLounge), {
          id: 's7-photo-strip',
          x: 960, y: 1080, w: 1920, h: 500, anchor: 'bc',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '100px 100px 0 0' },
        }),

        navDot('s7-nav', true),
        templateLabel('Section Divider - Blue Bottom Strip', 's7-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 8: PAIN POINT STATEMENT WITH PHOTO OVERLAY
    // ================================================================
    {
      id: 'pain-point',
      background: C.bgPrimary,
      elements: [
        ...headerBar(8, 's8'),

        // Photo lower half
        el(img(IMAGES.frustratedWorker), {
          id: 's8-photo',
          x: 960, y: 1080, w: 1920, h: 600, anchor: 'bc',
          layer: 'bg', overflow: 'clip',
        }),

        // Blue overlay pill card straddling boundary
        el(
          `<div style="background:${C.accentBlue};border-radius:48px;padding:48px 56px;">
            <p style="font-family:${FONT};font-size:24px;font-weight:600;color:${C.textOnColor};line-height:1.6;margin:0;">Remote workers lose an average of 1.5 hours daily to environmental distractions. Traditional offices spend millions on space that sits empty 40% of the time.</p>
          </div>`,
          { id: 's8-overlay-card', x: 960, y: 400, w: 1100, anchor: 'tc', z: 3 },
        ),

        // Footer over photo
        el(
          `<p style="font-family:${FONT};font-size:13px;font-weight:500;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.12em;">WWW.FORGESPACES.COM</p>`,
          { id: 's8-footer', x: 134, y: 1040, w: 400 },
        ),

        navDot('s8-nav'),
        templateLabel('Pain Point Statement', 's8-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 9: SOLUTION WITH ICON FEATURES
    // ================================================================
    {
      id: 'solution',
      background: C.bgPrimary,
      elements: [
        ...headerBar(9, 's9'),

        // Photo top-left, full bleed to left & top edges, bottom-right corner rounded
        el(img(IMAGES.brightDesk), {
          id: 's9-photo',
          x: 0, y: 0, w: 1100, h: 540, anchor: 'tl',
          overflow: 'clip',
          style: { borderRadius: '0 0 120px 0' },
        }),

        // "The Solution" massive heading bottom-left
        el(
          `<h2 style="font-family:${FONT};font-size:108px;font-weight:900;color:${C.textPrimary};line-height:1.0;letter-spacing:-0.03em;margin:0;">The<br>Solution</h2>`,
          { id: 's9-heading', x: 134, y: 720, w: 700 },
        ),

        // Solution text right-center
        el(
          `<p style="font-family:${FONT};font-size:24px;font-weight:500;color:${C.textSecondary};line-height:1.6;margin:0;">Forge provides on-demand premium workspaces across 23 cities.</p>`,
          { id: 's9-solution-text', x: 900, y: 620, w: 700 },
        ),

        // 3 red circle icons with labels
        redCircleIcon('\u2192', 's9-icon1', 900, 720, 80),
        el(
          `<p style="font-family:${FONT};font-size:20px;font-weight:700;color:${C.textPrimary};line-height:1.3;margin:0;">Flexible</p>`,
          { id: 's9-lbl1', x: 990, y: 748, w: 180 },
        ),

        redCircleIcon('\u26A1', 's9-icon2', 1150, 720, 80),
        el(
          `<p style="font-family:${FONT};font-size:20px;font-weight:700;color:${C.textPrimary};line-height:1.3;margin:0;">Connected</p>`,
          { id: 's9-lbl2', x: 1240, y: 748, w: 180 },
        ),

        redCircleIcon('\u2713', 's9-icon3', 1420, 720, 80),
        el(
          `<p style="font-family:${FONT};font-size:20px;font-weight:700;color:${C.textPrimary};line-height:1.3;margin:0;">Designed</p>`,
          { id: 's9-lbl3', x: 1510, y: 748, w: 180 },
        ),

        navDot('s9-nav'),
        templateLabel('Solution with Icon Features', 's9-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 10: PRODUCT EXPLANATION SPLIT
    // ================================================================
    {
      id: 'product-split',
      background: C.bgPrimary,
      elements: [
        ...headerBar(10, 's10'),

        // Photo left panel, bleeds left/bottom, top-right corner rounded
        el(img(IMAGES.handsTablet), {
          id: 's10-photo',
          x: 0, y: 1080, w: 820, h: 980, anchor: 'bl',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '0 120px 0 0' },
        }),

        // Oversized heading right side
        el(
          `<h2 style="font-family:${FONT};font-size:80px;font-weight:900;color:${C.textPrimary};line-height:1.05;letter-spacing:-0.03em;margin:0;">Your Space,<br>Your Way</h2>`,
          { id: 's10-heading', x: 940, y: 260, w: 840 },
        ),

        // Description text
        el(
          `<p style="font-family:${FONT};font-size:22px;font-weight:400;color:${C.textSecondary};line-height:1.7;margin:0;">Choose from private offices, open desks, meeting rooms, and event spaces. Book by the hour, day, or month &mdash; all from one platform.</p>`,
          { id: 's10-desc', x: 940, y: below('s10-heading', { gap: 40 }), w: 800 },
        ),

        navDot('s10-nav'),
        templateLabel('Product Explanation Split', 's10-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 11: HOW IT WORKS - RED WITH DEVICE MOCKUP
    // ================================================================
    {
      id: 'how-it-works-red',
      background: C.bgRed,
      elements: [
        ...headerBar(11, 's11', true),

        // "How It Works" heading left (bold italic)
        el(
          `<h2 style="font-family:${FONT};font-size:80px;font-weight:800;font-style:italic;color:${C.textOnColor};line-height:1.1;letter-spacing:-0.02em;margin:0;">How It<br>Works</h2>`,
          { id: 's11-heading', x: 134, y: 360, w: 600 },
        ),

        // Phone in organic blob (SVG double-pill mask rotated 45°)
        el(
          `<svg viewBox="0 0 700 700" style="width:100%;height:100%;">
            <defs>
              <mask id="s11-pillMask">
                <g transform="rotate(45 350 350)">
                  <rect x="175" y="110" width="350" height="230" rx="115" ry="115" fill="white"/>
                  <rect x="175" y="300" width="350" height="230" rx="115" ry="115" fill="white"/>
                </g>
              </mask>
            </defs>
            <image
              href="${IMAGES.phoneApp}"
              x="147" y="-9" width="449" height="674"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#s11-pillMask)"
            />
          </svg>`,
          { id: 's11-blob-photo', x: 920, y: 40, w: 950, h: 950 },
        ),

        footerUrl('s11-footer', true),
        navDot('s11-nav', true),
        templateLabel('How It Works - Red Device', 's11-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 12: PROCESS STEPS GRID
    // ================================================================
    {
      id: 'process-steps',
      background: C.bgPrimary,
      elements: (() => {
        const stepsLeft = [
          'Browse available spaces near you',
          'Select your ideal workspace type',
          'Book instantly or schedule ahead',
          'Check in with your digital key',
          'Connect to high-speed WiFi and tools',
        ];
        const stepsRight = [
          'Access shared amenities and lounges',
          'Join community events and networking',
          'Scale your team space as you grow',
          'Track usage and expenses in real-time',
          'Renew or change plans with one click',
        ];

        const elements = [
          ...headerBar(12, 's12'),
        ];

        for (let i = 0; i < stepsLeft.length; i++) {
          const yBase = 150 + i * 150;
          elements.push(
            redCircleIcon('\u2192', `s12-iconL-${i}`, 200, yBase, 72),
          );
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:20px;font-weight:500;color:${C.textPrimary};line-height:1.5;margin:0;">${stepsLeft[i]}</p>`,
              { id: `s12-txtL-${i}`, x: 290, y: yBase + 22, w: 530 },
            ),
          );
        }

        for (let i = 0; i < stepsRight.length; i++) {
          const yBase = 150 + i * 150;
          elements.push(
            redCircleIcon('\u2192', `s12-iconR-${i}`, 960, yBase, 72),
          );
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:20px;font-weight:500;color:${C.textPrimary};line-height:1.5;margin:0;">${stepsRight[i]}</p>`,
              { id: `s12-txtR-${i}`, x: 1050, y: yBase + 22, w: 530 },
            ),
          );
        }

        elements.push(navDot('s12-nav'));
        elements.push(templateLabel('Process Steps Grid', 's12-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 13: SECTION DIVIDER - BLUE WITH ROUNDED PHOTO RIGHT
    // ================================================================
    {
      id: 'section-growth',
      background: C.bgBlue,
      elements: [
        ...headerBar(13, 's13', true),

        // "Our Growth" heading left (multi-line)
        el(
          `<h2 style="font-family:${FONT};font-size:120px;font-weight:900;color:${C.textOnColor};line-height:1.0;letter-spacing:-0.03em;margin:0;">Our<br>Growth</h2>`,
          { id: 's13-heading', x: 134, y: 320, w: 700 },
        ),

        // Photo right, all corners rounded
        el(img(IMAGES.meetingGlass), {
          id: 's13-photo',
          x: 1050, y: 180, w: 680, h: 680,
          overflow: 'clip',
          style: { borderRadius: '60px' },
        }),

        footerUrl('s13-footer', true),
        navDot('s13-nav', true),
        templateLabel('Section Divider - Blue Rounded Photo', 's13-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 14: COMPARISON TABLE
    // ================================================================
    {
      id: 'comparison-table',
      background: C.bgPrimary,
      elements: (() => {
        const tableX = 120;
        const tableW = 1680;
        const rowH = 72;
        const gap = 10;
        const headerY = 160;
        const radius = '24px';
        const colPcts = ['25%', '25%', '25%', '25%'];

        const headers = ['Feature', 'Forge', 'Traditional', 'Home Office'];
        const rows = [
          ['Flexibility', 'Book by the hour', '12-month lease', 'Always available'],
          ['Community', 'Built-in network', 'Limited to floor', 'Isolated'],
          ['Cost', 'Pay as you go', 'Fixed overhead', 'Hidden costs'],
          ['Productivity', 'Optimized spaces', 'One-size-fits-all', 'Distractions'],
          ['Scalability', 'Instant scaling', 'Slow expansion', 'Not scalable'],
        ];

        function rowHtml(cells, bg, textColor, firstWeight, restWeight) {
          const cellsHtml = cells.map((text, i) => {
            const fw = i === 0 ? firstWeight : restWeight;
            const fc = i === 0 && textColor !== C.textOnColor ? C.textPrimary : textColor;
            return `<div style="width:${colPcts[i]};padding:0 28px;display:flex;align-items:center;">
              <p style="font-family:${FONT};font-size:18px;font-weight:${fw};color:${fc};margin:0;">${text}</p>
            </div>`;
          }).join('');
          return `<div style="background:${bg};border-radius:${radius};height:${rowH}px;display:flex;align-items:center;">${cellsHtml}</div>`;
        }

        const elements = [
          ...headerBar(14, 's14'),
        ];

        // Header row - blue bg
        elements.push(
          el(rowHtml(headers, C.accentBlue, C.textOnColor, '700', '700'),
            { id: 's14-hdr', x: tableX, y: headerY, w: tableW, h: rowH }),
        );

        // Data rows
        for (let r = 0; r < rows.length; r++) {
          const yRow = headerY + rowH + gap + r * (rowH + gap);
          elements.push(
            el(rowHtml(rows[r], C.bgWhite, C.textSecondary, '600', '400'),
              { id: `s14-r${r}`, x: tableX, y: yRow, w: tableW, h: rowH }),
          );
        }

        elements.push(navDot('s14-nav'));
        elements.push(templateLabel('Comparison Table', 's14-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 15: USER FEEDBACK / TESTIMONIAL
    // ================================================================
    {
      id: 'testimonial',
      background: C.bgPrimary,
      elements: [
        ...headerBar(15, 's15'),

        // "User Feedback" oversized heading top-left
        el(
          `<h2 style="font-family:${FONT};font-size:72px;font-weight:900;color:${C.textPrimary};line-height:1.0;letter-spacing:-0.03em;margin:0;">User<br>Feedback</h2>`,
          { id: 's15-heading', x: 134, y: 140, w: 600 },
        ),

        // Red quote-mark icon
        redCircleIcon('\u201C', 's15-quote-icon', 134, 480, 52),

        // Blue quote card bottom-left
        el(
          `<div style="background:${C.accentBlue};border-radius:40px;padding:48px;">
            <p style="font-family:${FONT};font-size:22px;font-weight:500;color:${C.textOnColor};line-height:1.6;margin:0;">Switching to Forge cut our real estate costs by 60% while our team satisfaction scores hit an all-time high. It&rsquo;s not just a workspace &mdash; it&rsquo;s a competitive advantage.</p>
            <p style="font-family:${FONT};font-size:16px;font-weight:600;color:${C.textOnColorMuted};line-height:1.5;margin:28px 0 0;">&mdash; Tom&aacute;s Rivera, COO at Brightfield Labs</p>
          </div>`,
          { id: 's15-quote-card', x: 134, y: 560, w: 820 },
        ),

        // Photo right panel
        el(img(IMAGES.happyMember, 'object-position:top;'), {
          id: 's15-photo',
          x: 1920, y: 0, w: 820, h: 980, anchor: 'tr',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '0 0 0 120px' },
        }),

        navDot('s15-nav'),
        templateLabel('User Feedback / Testimonial', 's15-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 16: FUTURE PLAN / CHECKLIST
    // ================================================================
    {
      id: 'future-plan',
      background: C.bgPrimary,
      elements: (() => {
        const checkItems = [
          'Launch in 15 new markets across North America and Europe',
          'Introduce AI-powered workspace matching for optimal productivity',
          'Roll out enterprise-tier plans for teams of 500+',
          'Build integrated childcare and wellness facilities',
          'Achieve carbon-neutral certification across all locations',
        ];

        const elements = [
          ...headerBar(16, 's16'),

          // "Future Plan" heading bottom-left (bold italic)
          el(
            `<h2 style="font-family:${FONT};font-size:108px;font-weight:800;font-style:italic;color:${C.textPrimary};line-height:1.0;letter-spacing:-0.03em;margin:0;">Future<br>Plan</h2>`,
            { id: 's16-heading', x: 134, y: 720, w: 600 },
          ),
        ];

        for (let i = 0; i < checkItems.length; i++) {
          const yBase = 180 + i * 130;
          elements.push(
            redCircleIcon('\u2713', `s16-check-${i}`, 900, yBase, 72),
          );
          elements.push(
            el(
              `<p style="font-family:${FONT};font-size:22px;font-weight:500;color:${C.textPrimary};line-height:1.5;margin:0;">${checkItems[i]}</p>`,
              { id: `s16-txt-${i}`, x: 990, y: yBase + 22, w: 730 },
            ),
          );
        }

        elements.push(navDot('s16-nav'));
        elements.push(templateLabel('Future Plan / Checklist', 's16-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 17: SECTION DIVIDER - RED WITH CIRCULAR PHOTO
    // ================================================================
    {
      id: 'section-opportunity',
      background: C.bgRed,
      elements: [
        ...headerBar(17, 's17', true),

        // Circular photo left
        el(img(IMAGES.networking), {
          id: 's17-photo',
          x: 200, y: 240, w: 560, h: 560,
          overflow: 'clip',
          style: { borderRadius: '50%' },
        }),

        // "The Opportunity" heading right (multi-line)
        el(
          `<h2 style="font-family:${FONT};font-size:100px;font-weight:900;color:${C.textOnColor};line-height:1.0;letter-spacing:-0.03em;margin:0;">The<br>Opportunity</h2>`,
          { id: 's17-heading', x: 920, y: 340, w: 860 },
        ),

        footerUrl('s17-footer', true),
        navDot('s17-nav', true),
        templateLabel('Section Divider - Red Circular Photo', 's17-tpl', true),
      ],
    },

    // ================================================================
    // SLIDE 18: TWO-COLUMN FINANCIAL / DATA CARDS
    // ================================================================
    {
      id: 'financial-cards',
      background: C.bgPrimary,
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.5, gap: 40 });

        const revenueItems = [
          { label: 'Annual Recurring Revenue', value: '$48M' },
          { label: 'Year-over-Year Growth', value: '127%' },
          { label: 'Gross Margin', value: '72%' },
        ];

        const askItems = [
          { label: 'Raising', value: '$75M Series B' },
          { label: 'Pre-Money Valuation', value: '$380M' },
          { label: 'Use of Funds', value: 'Expansion + Product' },
        ];

        function dataCard(items, pillLabel, pillColor, cardId, cx, cy, cw) {
          const rows = items.map(item =>
            `<div style="display:flex;justify-content:space-between;align-items:baseline;padding:20px 0;border-bottom:1px solid ${C.border};">
              <span style="font-family:${FONT};font-size:18px;font-weight:500;color:${C.textSecondary};">${item.label}</span>
              <span style="font-family:${FONT};font-size:22px;font-weight:800;color:${C.textPrimary};">${item.value}</span>
            </div>`
          ).join('');

          return el(
            `<div style="background:${C.bgWhite};border-radius:40px;padding:40px;">
              <div style="background:${pillColor};border-radius:32px;padding:16px 0;margin-bottom:32px;text-align:center;">
                <span style="font-family:${FONT};font-size:22px;font-weight:700;color:${C.textOnColor};text-transform:uppercase;letter-spacing:0.06em;">${pillLabel}</span>
              </div>
              ${rows}
            </div>`,
            { id: cardId, x: cx, y: cy, w: cw },
          );
        }

        return [
          ...headerBar(18, 's18'),
          dataCard(revenueItems, 'Revenue', C.accentRed, 's18-card-left', left.x, 200, left.w),
          dataCard(askItems, 'The Ask', C.accentBlue, 's18-card-right', right.x, 200, right.w),
          navDot('s18-nav'),
          templateLabel('Two-Column Financial Cards', 's18-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 19: Q&A / DISCUSSION
    // ================================================================
    {
      id: 'qa-discussion',
      background: C.bgPrimary,
      elements: [
        ...headerBar(19, 's19'),

        // "Let's Talk" massive heading centered
        el(
          `<h2 style="font-family:${FONT};font-size:140px;font-weight:900;color:${C.textPrimary};line-height:1.0;letter-spacing:-0.04em;margin:0;text-align:center;">Let&rsquo;s Talk</h2>`,
          { id: 's19-heading', x: 960, y: 260, w: 1400, anchor: 'tc' },
        ),

        // Photo strip bottom
        el(img(IMAGES.longTable), {
          id: 's19-photo-strip',
          x: 960, y: 1080, w: 1920, h: 480, anchor: 'bc',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '80px 80px 0 0' },
        }),

        templateLabel('Q&A / Discussion', 's19-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 20: THANK YOU / CLOSING
    // ================================================================
    {
      id: 'thank-you',
      background: C.bgBlue,
      elements: [
        ...headerBar(20, 's20', true),

        // Portrait photo left, bleeds left/bottom, top-right corner rounded
        el(img(IMAGES.confidentLeader, 'object-position:top;'), {
          id: 's20-photo',
          x: 0, y: 1080, w: 820, h: 980, anchor: 'bl',
          layer: 'bg', overflow: 'clip',
          style: { borderRadius: '0 120px 0 0' },
        }),

        // "Thank You!" heading right
        el(
          `<h2 style="font-family:${FONT};font-size:108px;font-weight:900;color:${C.textOnColor};line-height:1.05;letter-spacing:-0.03em;margin:0;">Thank<br>You!</h2>`,
          { id: 's20-heading', x: 960, y: 320, w: 820 },
        ),

        // Contact info
        el(
          `<p style="font-family:${FONT};font-size:24px;font-weight:500;color:${C.textOnColorMuted};line-height:1.6;margin:0;">invest@forgespaces.com</p>`,
          { id: 's20-contact', x: 960, y: below('s20-heading', { gap: 40 }), w: 600 },
        ),

        footerUrl('s20-footer', true),
        templateLabel('Thank You / Closing', 's20-tpl', true),
      ],
    },

  ];

  return render(slides);
}
