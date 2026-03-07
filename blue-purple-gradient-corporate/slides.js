// slides.js — "The Future of Workplace Wellbeing"
// Theme: blue-purple-gradient-corporate

import {
  init, render, safeRect, el, below,
} from '../slidekit.bundle.min.js';

// -- Image Manifest --------------------------------------------------------------
const IMAGES = {
  heroPerson:          './images/hero-person.png',
  officeMeeting:       './images/office-meeting.png',
  professionalService: './images/professional-service.png',
  customerInteraction: './images/customer-interaction.png',
  personLaptop:        './images/person-laptop.png',
  personPhone:         './images/person-phone.png',
  personTabletCalendar:'./images/person-tablet-calendar.png',
  personHeadset:       './images/person-headset.png',
  teamDesk:            './images/team-desk.png',
  teamCelebrate:       './images/team-celebrate.png',
};

// -- Design Tokens ---------------------------------------------------------------
const C = {
  bgPrimary:      '#FFFFFF',
  bgSecondary:    '#F8F9FA',
  gradStart:      '#5B6BF0',
  gradEnd:        '#8B5CF6',
  textPrimary:    '#1E293B',
  textSecondary:  '#64748B',
  textHeading:    '#0F172A',
  textOnGradient: '#FFFFFF',
  accent1:        '#5B6BF0',
  accent2:        '#8B5CF6',
  accent3:        '#7C3AED',
  border:         '#E2E8F0',
  borderSubtle:   '#CBD5E1',
};

const FONT = "'Inter', sans-serif";
const GRADIENT = `linear-gradient(90deg, ${C.gradStart}, ${C.gradEnd})`;

// -- Helpers ---------------------------------------------------------------------

function templateLabel(name, id) {
  return el(
    `<p style="font-family:${FONT};font-size:14px;font-weight:400;color:rgba(30,41,59,0.35);">${name}</p>`,
    { id, x: 130, y: 1048, w: 420, layer: 'overlay' },
  );
}

function templateLabelGrad(name, id) {
  return el(
    `<p style="font-family:${FONT};font-size:14px;font-weight:400;color:rgba(255,255,255,0.3);">${name}</p>`,
    { id, x: 130, y: 1048, w: 420, layer: 'overlay' },
  );
}

function img(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;${extraStyle}">`;
}

function imgContain(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:contain;display:block;${extraStyle}">`;
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Inter', weights: [300, 400, 500, 600, 700], source: 'google' },
    ],
  });

  const safe = safeRect(); // { x: 120, y: 90, w: 1680, h: 900 }

  const slides = [

    // ================================================================
    // SLIDE 1 — HERO TITLE (full-bleed gradient)
    // hero-person.png cutout on right side
    // ================================================================
    {
      id: 'hero-title',
      background: GRADIENT,
      notes: 'Opening slide — Hero Title template. Mixed-weight heading on gradient with cutout person photo right.',
      elements: [
        // Heading — left side, mixed weight 300+700
        el(`<h1 style="font-family:${FONT};font-size:88px;font-weight:300;color:${C.textOnGradient};line-height:1.1;letter-spacing:-0.02em;">The Future of<br><span style="font-weight:700;">Workplace Wellbeing</span></h1>`, {
          id: 's1-title', x: safe.x + 30, y: 240, w: 900,
        }),

        // Subtitle
        el(`<p style="font-family:${FONT};font-size:26px;font-weight:400;color:rgba(255,255,255,0.78);line-height:1.55;">Strategies for building a thriving, resilient, and engaged workforce in the modern enterprise</p>`, {
          id: 's1-subtitle', x: safe.x + 30, y: below('s1-title', { gap: 32 }), w: 820,
        }),

        // Organization line
        el(`<p style="font-family:${FONT};font-size:16px;font-weight:500;color:rgba(255,255,255,0.5);letter-spacing:0.04em;">Meridian Consulting Group \u00b7 Q3 2025</p>`, {
          id: 's1-org', x: safe.x + 30, y: below('s1-subtitle', { gap: 48 }), w: 500,
        }),

        // Hero person cutout — right side, bottom-aligned, ~40% slide width
        el(imgContain(IMAGES.heroPerson, 'object-position:top;'), {
          id: 's1-hero-img', x: 1120, y: 140, w: 760, h: 940, layer: 'content',
        }),

        // Theme name — bottom-right, very low opacity
        el(`<p style="font-family:${FONT};font-size:14px;font-weight:400;color:rgba(255,255,255,0.22);text-align:right;">Theme: blue-purple-gradient-corporate</p>`, {
          id: 's1-theme', x: 1920 - 130 - 400, y: 1048, w: 400, layer: 'overlay',
        }),

        templateLabelGrad('Template: Hero Title', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2 — AGENDA / OVERVIEW
    // office-meeting.png upper-left on white bg
    // ================================================================
    {
      id: 'agenda',
      background: C.bgPrimary,
      notes: 'Agenda / Overview template — office meeting photo upper-left, numbered list of topics right.',
      elements: (() => {
        const items = [
          { num: '01', title: 'The Business Case', desc: 'Why wellbeing matters to the bottom line' },
          { num: '02', title: 'Three Pillars of Wellbeing', desc: 'Physical, mental, and social dimensions' },
          { num: '03', title: 'Expert Perspectives', desc: 'Insights from industry thought leaders' },
          { num: '04', title: 'Implementation Framework', desc: 'A five-step roadmap for rollout' },
          { num: '05', title: 'Measuring Success', desc: 'KPIs, metrics, and continuous improvement' },
        ];

        const photoW = 580;
        const photoH = 380;
        const photoX = safe.x;
        const photoY = safe.y + 10;

        const elements = [
          // Office meeting photo — upper-left, rectangular
          el(img(IMAGES.officeMeeting, 'border-radius:4px;object-position:top;'), {
            id: 's2-photo', x: photoX, y: photoY, w: photoW, h: photoH, overflow: 'clip',
            style: { borderRadius: '4px' },
          }),

          // Heading below photo
          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:600;color:${C.textHeading};line-height:1.2;letter-spacing:-0.01em;">Today\u2019s<br>Agenda</h2>`, {
            id: 's2-heading', x: safe.x, y: below('s2-photo', { gap: 40 }), w: 480,
          }),
        ];

        // Agenda items — right column
        const itemX = 820;
        const itemW = 900;

        for (let i = 0; i < items.length; i++) {
          const it = items[i];
          const titleId = `s2-title-${i}`;
          const descId  = `s2-desc-${i}`;

          const yPos = i === 0
            ? safe.y + 50
            : below(`s2-desc-${i - 1}`, { gap: 32 });

          elements.push(
            el(`<p style="font-family:${FONT};font-size:30px;font-weight:600;color:${C.accent1};line-height:1.0;">${it.num}</p>`, {
              id: `s2-num-${i}`, x: itemX, y: yPos, w: 60,
            }),
            el(`<p style="font-family:${FONT};font-size:22px;font-weight:600;color:${C.textHeading};line-height:1.3;">${it.title}</p>`, {
              id: titleId, x: itemX + 80, y: yPos, w: itemW - 80,
            }),
            el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.5;">${it.desc}</p>`, {
              id: descId, x: itemX + 80, y: below(titleId, { gap: 8 }), w: itemW - 80,
            }),
          );
        }

        elements.push(templateLabel('Template: Agenda / Overview', 's2-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 3 — CONTENT: TEXT & STATS (Split: gradient left + photo, white right + stats)
    // professional-service.png in left gradient panel
    // ================================================================
    {
      id: 'business-case',
      background: C.bgPrimary,
      notes: 'Content — Text & Stats with split layout. Gradient left panel with professional-service photo, KPI stats right.',
      elements: (() => {
        const panelW = 620;
        const rightX = panelW + 100;
        const rightW = 1920 - 120 - rightX;

        const stats = [
          { value: '87%',    label: 'Retention Rate',   desc: 'Companies with robust wellbeing programs retain talent at significantly higher rates year over year' },
          { value: '3.2\u00d7',  label: 'Productivity Gain', desc: 'Measurable increase in output across teams with access to comprehensive wellness resources' },
          { value: '92%',    label: 'Engagement Score',  desc: 'Of surveyed employees report higher engagement when holistic wellbeing support is available' },
        ];

        const elements = [
          // Left gradient panel (full-bleed height)
          el('', {
            id: 's3-grad-bg', x: 0, y: 0, w: panelW, h: 1080, layer: 'bg',
            style: { background: GRADIENT },
          }),

          // Heading on gradient panel
          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:300;color:${C.textOnGradient};line-height:1.15;letter-spacing:-0.02em;">The Business<br><span style="font-weight:700;">Case</span></h2>`, {
            id: 's3-left-heading', x: 60, y: 100, w: panelW - 120,
          }),

          // Professional service photo in gradient panel — portrait orientation
          el(img(IMAGES.professionalService, 'border-radius:4px;object-position:top;'), {
            id: 's3-photo', x: 40, y: 320, w: panelW - 80, h: 680, overflow: 'clip',
            style: { borderRadius: '4px' },
          }),

          // Right side heading
          el(`<h3 style="font-family:${FONT};font-size:36px;font-weight:600;color:${C.textHeading};line-height:1.2;letter-spacing:-0.01em;">Key Performance Indicators</h3>`, {
            id: 's3-right-heading', x: rightX, y: 110, w: rightW,
          }),
          el(`<p style="font-family:${FONT};font-size:17px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Research from the Alderton Institute of Workplace Science (2024) demonstrates clear financial returns from wellbeing investment.</p>`, {
            id: 's3-right-sub', x: rightX, y: below('s3-right-heading', { gap: 16 }), w: rightW,
          }),
        ];

        // KPI blocks — stacked vertically on right side
        for (let i = 0; i < stats.length; i++) {
          const s = stats[i];
          const prevId = i === 0 ? 's3-right-sub' : `s3-dsc-${i - 1}`;

          elements.push(
            el(`<p style="font-family:${FONT};font-size:64px;font-weight:700;color:${C.accent1};line-height:1.0;letter-spacing:-0.02em;">${s.value}</p>`, {
              id: `s3-val-${i}`, x: rightX, y: below(prevId, { gap: i === 0 ? 48 : 36 }), w: rightW,
            }),
            el(`<p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textHeading};line-height:1.3;">${s.label}</p>`, {
              id: `s3-lab-${i}`, x: rightX, y: below(`s3-val-${i}`, { gap: 8 }), w: rightW,
            }),
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.55;">${s.desc}</p>`, {
              id: `s3-dsc-${i}`, x: rightX, y: below(`s3-lab-${i}`, { gap: 8 }), w: rightW,
            }),
          );
        }

        elements.push(templateLabel('Template: Content \u2014 Text & Stats', 's3-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 4 — MULTI-COLUMN CONTENT GRID (Three Pillars)
    // customer-interaction.png upper-right on white bg
    // ================================================================
    {
      id: 'three-pillars',
      background: C.bgPrimary,
      notes: 'Multi-Column Content Grid — customer interaction photo upper-right, three wellbeing pillar cards below.',
      elements: (() => {
        const pillars = [
          { title: 'Physical Wellbeing', body: 'Comprehensive health screenings, ergonomic workspace design, subsidized fitness memberships, and nutrition consulting programs that support employees\u2019 physical health and vitality.' },
          { title: 'Mental Wellbeing',   body: 'Confidential counseling services, stress management workshops, mindfulness training, and flexible scheduling to safeguard cognitive health and emotional resilience.' },
          { title: 'Social Wellbeing',   body: 'Community building events, mentorship networks, inclusive team rituals, and volunteer programs that foster meaningful connections and belonging.' },
        ];

        const photoW = 600;
        const photoH = 360;
        const photoX = 1920 - 120 - photoW;
        const photoY = safe.y + 10;

        const gap = 48;
        const cols = 3;
        const cardW = (safe.w - gap * (cols - 1)) / cols;

        const elements = [
          // Heading top-left
          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:600;color:${C.textHeading};line-height:1.2;letter-spacing:-0.01em;">Three Pillars of<br>Wellbeing</h2>`, {
            id: 's4-heading', x: safe.x, y: safe.y + 20, w: 600,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">A holistic framework that addresses every dimension of the employee experience.</p>`, {
            id: 's4-sub', x: safe.x, y: below('s4-heading', { gap: 20 }), w: 560,
          }),

          // Customer interaction photo — upper-right, rectangular
          el(img(IMAGES.customerInteraction, 'border-radius:4px;object-position:top;'), {
            id: 's4-photo', x: photoX, y: photoY, w: photoW, h: photoH, overflow: 'clip',
            style: { borderRadius: '4px' },
          }),
        ];

        // Card row below photo — starts after both heading column and photo clear
        const cardsY = safe.y + 20 + photoH + 80;

        for (let i = 0; i < pillars.length; i++) {
          const p = pillars[i];
          const px = safe.x + i * (cardW + gap);

          elements.push(
            el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent1};letter-spacing:0.08em;text-transform:uppercase;">0${i + 1}</p>`, {
              id: `s4-num-${i}`, x: px, y: cardsY, w: cardW,
            }),
            el(`<p style="font-family:${FONT};font-size:24px;font-weight:600;color:${C.textHeading};line-height:1.3;">${p.title}</p>`, {
              id: `s4-hd-${i}`, x: px, y: below(`s4-num-${i}`, { gap: 12 }), w: cardW,
            }),
            el('', {
              id: `s4-div-${i}`, x: px, y: below(`s4-hd-${i}`, { gap: 16 }), w: 48, h: 3,
              style: { background: C.accent1 },
            }),
            el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.7;">${p.body}</p>`, {
              id: `s4-bd-${i}`, x: px, y: below(`s4-div-${i}`, { gap: 16 }), w: cardW,
            }),
          );
        }

        elements.push(templateLabel('Template: Multi-Column Content Grid', 's4-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 5 — QUOTE / PULLQUOTE (no photo)
    // ================================================================
    {
      id: 'quote',
      background: C.bgPrimary,
      notes: 'Quote / Pullquote template. Fictional expert quote, no image.',
      elements: [
        // Oversized decorative quotation mark
        el(`<p style="font-family:${FONT};font-size:200px;font-weight:700;color:${C.accent1};line-height:0.7;opacity:0.12;">\u201C</p>`, {
          id: 's5-mark', x: safe.x, y: safe.y + 50, w: 200,
        }),

        el(`<p style="font-family:${FONT};font-size:36px;font-weight:500;color:${C.textHeading};line-height:1.6;letter-spacing:-0.01em;">Investing in employee wellbeing is not a cost center \u2014 it is the single most predictable driver of sustainable organizational performance. Companies that understand this will define the next decade of work.</p>`, {
          id: 's5-quote', x: safe.x + 120, y: safe.y + 220, w: safe.w - 240,
        }),

        el(`<p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textHeading};line-height:1.4;">Dr. Elena Vasquez</p>`, {
          id: 's5-name', x: safe.x + 120, y: below('s5-quote', { gap: 40 }), w: 600,
        }),

        el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.4;">Director of Applied Behavioral Science, Northfield Institute</p>`, {
          id: 's5-role', x: safe.x + 120, y: below('s5-name', { gap: 8 }), w: 600,
        }),

        templateLabel('Template: Quote / Pullquote', 's5-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 6 — PROCESS / FLOW (5-step, icons only, no photo)
    // ================================================================
    {
      id: 'process',
      background: C.bgPrimary,
      notes: 'Process / Flow template. Five-step implementation framework with circles and connecting lines.',
      elements: (() => {
        const steps = [
          { num: '01', label: 'Assess',   desc: 'Survey workforce needs and existing programs' },
          { num: '02', label: 'Design',   desc: 'Develop tailored initiative portfolio' },
          { num: '03', label: 'Pilot',    desc: 'Launch controlled programs in select teams' },
          { num: '04', label: 'Scale',    desc: 'Roll out across the full organization' },
          { num: '05', label: 'Optimize', desc: 'Iterate based on data and feedback' },
        ];

        const count = steps.length;
        const stepW = 200;
        const lineGap = (safe.w - stepW * count) / (count - 1);
        const circleSize = 56;
        const circleY = 340;

        const elements = [
          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:600;color:${C.textHeading};line-height:1.2;letter-spacing:-0.01em;">Implementation Framework</h2>`, {
            id: 's6-heading', x: safe.x, y: safe.y + 10, w: safe.w * 0.7,
          }),
          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">A proven five-step process for rolling out workplace wellbeing programs at scale.</p>`, {
            id: 's6-sub', x: safe.x, y: below('s6-heading', { gap: 20 }), w: safe.w * 0.6,
          }),
        ];

        for (let i = 0; i < count; i++) {
          const s = steps[i];
          const cx = safe.x + i * (stepW + lineGap) + stepW / 2;

          // Step circle
          elements.push(
            el(`<div style="width:${circleSize}px;height:${circleSize}px;border-radius:50%;background:${C.accent1};text-align:center;line-height:${circleSize}px;"><span style="font-family:${FONT};font-size:18px;font-weight:700;color:${C.textOnGradient};">${s.num}</span></div>`, {
              id: `s6-circle-${i}`, x: cx - circleSize / 2, y: circleY, w: circleSize, h: circleSize,
            }),
          );

          // Connecting line between circles
          if (i < count - 1) {
            const lineX = cx + circleSize / 2 + 8;
            const lineW = lineGap + stepW - circleSize - 16;
            elements.push(
              el('', {
                id: `s6-line-${i}`, x: lineX, y: circleY + circleSize / 2 - 1, w: lineW, h: 2,
                style: { background: C.border },
              }),
            );
          }

          // Step label
          elements.push(
            el(`<p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textHeading};line-height:1.3;text-align:center;">${s.label}</p>`, {
              id: `s6-label-${i}`, x: cx - stepW / 2, y: circleY + circleSize + 24, w: stepW,
            }),
          );

          // Step description
          elements.push(
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.5;text-align:center;">${s.desc}</p>`, {
              id: `s6-desc-${i}`, x: cx - stepW / 2, y: below(`s6-label-${i}`, { gap: 10 }), w: stepW,
            }),
          );
        }

        // Supporting text
        elements.push(
          el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Each phase includes defined success criteria, stakeholder checkpoints, and measurable outcomes aligned with organizational goals.</p>`, {
            id: 's6-footer', x: safe.x, y: 800, w: safe.w * 0.65,
          }),
        );

        elements.push(templateLabel('Template: Process / Flow', 's6-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 7 — SPLIT: GRADIENT + CONTENT (50/50)
    // person-laptop.png in left gradient panel, data table right
    // ================================================================
    {
      id: 'split-metrics',
      background: C.bgPrimary,
      notes: 'Split — Gradient + Content template. Person-laptop photo in left gradient panel, data table on right.',
      elements: (() => {
        const panelW = 960;
        const rightX = 1060;
        const rightW = 1920 - 120 - rightX;

        const tableData = [
          { focus: 'Mental Health Access', initiative: 'On-site Counseling',   target: '+45% Utilization' },
          { focus: 'Physical Activity',   initiative: 'Movement Breaks',      target: '+30% Participation' },
          { focus: 'Social Connection',   initiative: 'Team Rituals',         target: '+25% Belonging Score' },
          { focus: 'Work-Life Balance',   initiative: 'Flex Fridays',         target: '\u221240% Burnout Rate' },
          { focus: 'Financial Wellness',  initiative: 'Planning Workshops',   target: '+50% Enrollment' },
        ];

        const col1W = Math.round(rightW * 0.36);
        const col2W = Math.round(rightW * 0.34);
        const col3W = rightW - col1W - col2W;
        const headerY = 280;

        const elements = [
          // Left gradient panel (full-bleed)
          el('', {
            id: 's7-grad-bg', x: 0, y: 0, w: panelW, h: 1080, layer: 'bg',
            style: { background: GRADIENT },
          }),

          // Left heading (mixed-weight)
          el(`<h2 style="font-family:${FONT};font-size:52px;font-weight:300;color:${C.textOnGradient};line-height:1.15;letter-spacing:-0.02em;">Program<br><span style="font-weight:700;">Metrics</span></h2>`, {
            id: 's7-left-heading', x: 80, y: 100, w: panelW - 160,
          }),

          // Person with laptop photo in gradient panel — portrait
          el(img(IMAGES.personLaptop, 'border-radius:4px;object-position:top;'), {
            id: 's7-photo', x: 50, y: 340, w: panelW - 100, h: 650, overflow: 'clip',
            style: { borderRadius: '4px' },
          }),

          // Right panel heading
          el(`<h3 style="font-family:${FONT};font-size:28px;font-weight:600;color:${C.textHeading};line-height:1.3;">Wellbeing Initiative Targets</h3>`, {
            id: 's7-right-heading', x: rightX, y: 110, w: rightW,
          }),

          el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.5;">Projected outcomes for fiscal year 2026, based on the Meridian Wellbeing Model.</p>`, {
            id: 's7-right-desc', x: rightX, y: below('s7-right-heading', { gap: 12 }), w: rightW,
          }),

          // Table headers
          el(`<p style="font-family:${FONT};font-size:13px;font-weight:600;color:${C.textHeading};letter-spacing:0.03em;text-transform:uppercase;">Focus Area</p>`, {
            id: 's7-th-1', x: rightX, y: headerY, w: col1W,
          }),
          el(`<p style="font-family:${FONT};font-size:13px;font-weight:600;color:${C.textHeading};letter-spacing:0.03em;text-transform:uppercase;">Initiative</p>`, {
            id: 's7-th-2', x: rightX + col1W, y: headerY, w: col2W,
          }),
          el(`<p style="font-family:${FONT};font-size:13px;font-weight:600;color:${C.textHeading};letter-spacing:0.03em;text-transform:uppercase;">Target</p>`, {
            id: 's7-th-3', x: rightX + col1W + col2W, y: headerY, w: col3W,
          }),

          // Header separator
          el('', {
            id: 's7-th-line', x: rightX, y: below('s7-th-1', { gap: 12 }), w: rightW, h: 1,
            style: { background: C.border },
          }),
        ];

        // Table rows
        for (let i = 0; i < tableData.length; i++) {
          const row = tableData[i];
          const prevId = i === 0 ? 's7-th-line' : `s7-row-sep-${i - 1}`;

          elements.push(
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textPrimary};line-height:1.5;">${row.focus}</p>`, {
              id: `s7-r${i}-c1`, x: rightX, y: below(prevId, { gap: 18 }), w: col1W,
            }),
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textPrimary};line-height:1.5;">${row.initiative}</p>`, {
              id: `s7-r${i}-c2`, x: rightX + col1W, y: below(prevId, { gap: 18 }), w: col2W,
            }),
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:600;color:${C.accent3};line-height:1.5;">${row.target}</p>`, {
              id: `s7-r${i}-c3`, x: rightX + col1W + col2W, y: below(prevId, { gap: 18 }), w: col3W,
            }),
          );

          // Row separator (dashed)
          if (i < tableData.length - 1) {
            elements.push(
              el('', {
                id: `s7-row-sep-${i}`, x: rightX, y: below(`s7-r${i}-c1`, { gap: 18 }), w: rightW, h: 1,
                style: { background: `repeating-linear-gradient(90deg, ${C.borderSubtle} 0 6px, transparent 6px 12px)` },
              }),
            );
          }
        }

        elements.push(templateLabelGrad('Template: Split \u2014 Gradient + Content', 's7-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 8 — CONTENT: TEXT & STATS (Research Findings)
    // 3 circular photos inline: person-phone, person-tablet-calendar, person-headset
    // ================================================================
    {
      id: 'research',
      background: C.bgPrimary,
      notes: 'Content — Text & Stats with circular inline photos. Three research findings each with a small circular portrait.',
      elements: (() => {
        const findings = [
          {
            image: IMAGES.personPhone,
            value: '87%',
            label: 'Employee Satisfaction',
            desc: 'Of surveyed employees report higher satisfaction when wellbeing programs are available and actively promoted',
          },
          {
            image: IMAGES.personTabletCalendar,
            value: '62%',
            label: 'Reduced Absenteeism',
            desc: 'Decrease in unplanned absences within the first twelve months of program launch across all participating teams',
          },
          {
            image: IMAGES.personHeadset,
            value: '3.1\u00d7',
            label: 'Talent Attraction',
            desc: 'More likely to attract top-tier candidates when wellbeing is part of the employer brand and recruitment messaging',
          },
        ];

        const gap = 48;
        const cols = 3;
        const cardW = (safe.w - gap * (cols - 1)) / cols;
        const circleSize = 80;

        const elements = [
          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:600;color:${C.textHeading};line-height:1.2;letter-spacing:-0.01em;">Key Research Findings</h2>`, {
            id: 's8-heading', x: safe.x, y: safe.y + 10, w: safe.w * 0.65,
          }),
          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Data from the Castellan Global Workforce Study, surveying 12,000 employees across 15 industries.</p>`, {
            id: 's8-sub', x: safe.x, y: below('s8-heading', { gap: 20 }), w: safe.w * 0.6,
          }),
        ];

        for (let i = 0; i < findings.length; i++) {
          const f = findings[i];
          const sx = safe.x + i * (cardW + gap);

          // Circular photo
          elements.push(
            el(img(f.image, 'border-radius:50%;'), {
              id: `s8-photo-${i}`, x: sx, y: below('s8-sub', { gap: 52 }), w: circleSize, h: circleSize, overflow: 'clip',
              style: { borderRadius: '50%' },
            }),
          );

          // Stat value next to or below the circle
          elements.push(
            el(`<p style="font-family:${FONT};font-size:56px;font-weight:700;color:${C.accent3};line-height:1.0;letter-spacing:-0.02em;">${f.value}</p>`, {
              id: `s8-val-${i}`, x: sx, y: below(`s8-photo-${i}`, { gap: 20 }), w: cardW,
            }),
            el(`<p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textHeading};line-height:1.3;">${f.label}</p>`, {
              id: `s8-lab-${i}`, x: sx, y: below(`s8-val-${i}`, { gap: 12 }), w: cardW,
            }),
            el(`<p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.65;">${f.desc}</p>`, {
              id: `s8-dsc-${i}`, x: sx, y: below(`s8-lab-${i}`, { gap: 10 }), w: cardW,
            }),
          );
        }

        elements.push(templateLabel('Template: Content \u2014 Text & Stats', 's8-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 9 — MULTI-COLUMN CONTENT GRID (Success Factors)
    // team-desk.png upper-right on white bg
    // ================================================================
    {
      id: 'success-factors',
      background: C.bgPrimary,
      notes: 'Multi-Column Content Grid — team desk photo upper-right, three success factor cards below.',
      elements: (() => {
        const factors = [
          { title: 'Leadership Sponsorship', body: 'Executive champions who visibly participate in and advocate for wellbeing initiatives drive 3\u00d7 higher adoption rates across all organizational levels.' },
          { title: 'Data-Driven Iteration',  body: 'Continuous measurement through pulse surveys, utilization analytics, and outcome tracking ensures programs evolve with employee needs and deliver measurable impact.' },
          { title: 'Inclusive Design',        body: 'Programs tailored to diverse needs \u2014 across roles, geographies, and life stages \u2014 ensure equitable access and maximize participation across the workforce.' },
        ];

        const photoW = 600;
        const photoH = 360;
        const photoX = 1920 - 120 - photoW;
        const photoY = safe.y + 10;

        const gap = 48;
        const cols = 3;
        const cardW = (safe.w - gap * (cols - 1)) / cols;

        const elements = [
          // Heading top-left
          el(`<h2 style="font-family:${FONT};font-size:48px;font-weight:600;color:${C.textHeading};line-height:1.2;letter-spacing:-0.01em;">Three Success<br>Factors</h2>`, {
            id: 's9-heading', x: safe.x, y: safe.y + 20, w: 560,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">What separates high-performing wellbeing programs from the rest.</p>`, {
            id: 's9-sub', x: safe.x, y: below('s9-heading', { gap: 20 }), w: 520,
          }),

          // Team desk photo — upper-right, rectangular
          el(img(IMAGES.teamDesk, 'border-radius:4px;object-position:top;'), {
            id: 's9-photo', x: photoX, y: photoY, w: photoW, h: photoH, overflow: 'clip',
            style: { borderRadius: '4px' },
          }),
        ];

        // Card row below
        const cardsY = safe.y + 20 + photoH + 80;

        for (let i = 0; i < factors.length; i++) {
          const f = factors[i];
          const fx = safe.x + i * (cardW + gap);

          elements.push(
            el(`<p style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.accent1};letter-spacing:0.08em;text-transform:uppercase;">0${i + 1}</p>`, {
              id: `s9-num-${i}`, x: fx, y: cardsY, w: cardW,
            }),
            el(`<p style="font-family:${FONT};font-size:24px;font-weight:600;color:${C.textHeading};line-height:1.3;">${f.title}</p>`, {
              id: `s9-hd-${i}`, x: fx, y: below(`s9-num-${i}`, { gap: 12 }), w: cardW,
            }),
            el('', {
              id: `s9-div-${i}`, x: fx, y: below(`s9-hd-${i}`, { gap: 16 }), w: 48, h: 3,
              style: { background: C.accent1 },
            }),
            el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.7;">${f.body}</p>`, {
              id: `s9-bd-${i}`, x: fx, y: below(`s9-div-${i}`, { gap: 16 }), w: cardW,
            }),
          );
        }

        elements.push(templateLabel('Template: Multi-Column Content Grid', 's9-tpl'));
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 10 — CLOSING / THANK YOU (full-bleed gradient)
    // team-celebrate.png left half on gradient
    // ================================================================
    {
      id: 'closing',
      background: GRADIENT,
      notes: 'Closing / Thank You — team-celebrate photo left half, centered thank you text right on gradient.',
      elements: [
        // Team celebrate photo — left half of gradient slide
        el(img(IMAGES.teamCelebrate, 'border-radius:0;object-position:top;'), {
          id: 's10-photo', x: 0, y: 0, w: 900, h: 1080, overflow: 'clip',
        }),

        // Semi-transparent overlay on photo for blending
        el('', {
          id: 's10-photo-overlay', x: 0, y: 0, w: 900, h: 1080, layer: 'content',
          style: { background: 'linear-gradient(90deg, rgba(91,107,240,0.15) 0%, rgba(139,92,246,0.35) 100%)' },
          allowOverlap: true,
        }),

        // "Thank You" — right side, centered vertically
        el(`<h2 style="font-family:${FONT};font-size:72px;font-weight:300;color:${C.textOnGradient};line-height:1.15;letter-spacing:-0.02em;text-align:center;">Thank <span style="font-weight:700;">You</span></h2>`, {
          id: 's10-title', x: 1360, y: 320, w: 480, anchor: 'tc',
        }),

        el(`<p style="font-family:${FONT};font-size:22px;font-weight:400;color:rgba(255,255,255,0.75);line-height:1.6;text-align:center;">We look forward to partnering with you on your wellbeing journey.</p>`, {
          id: 's10-message', x: 1360, y: below('s10-title', { gap: 32 }), w: 520, anchor: 'tc',
        }),

        // Thin divider
        el('', {
          id: 's10-divider', x: 1360 - 40, y: below('s10-message', { gap: 40 }), w: 80, h: 2,
          style: { background: 'rgba(255,255,255,0.35)' },
        }),

        el(`<p style="font-family:${FONT};font-size:18px;font-weight:500;color:${C.textOnGradient};text-align:center;">Meridian Consulting Group</p>`, {
          id: 's10-company', x: 1360, y: below('s10-divider', { gap: 32 }), w: 520, anchor: 'tc',
        }),

        el(`<p style="font-family:${FONT};font-size:16px;font-weight:400;color:rgba(255,255,255,0.55);text-align:center;">contact@meridian-consulting.io \u00b7 www.meridian-consulting.io</p>`, {
          id: 's10-contact', x: 1360, y: below('s10-company', { gap: 12 }), w: 520, anchor: 'tc',
        }),

        templateLabelGrad('Template: Closing / Thank You', 's10-tpl'),
      ],
    },

  ];

  return await render(slides);
}
