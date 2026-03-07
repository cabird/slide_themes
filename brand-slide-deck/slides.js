// slides.js — "Artisan Coffee Collective"
// Brand Slide Deck theme — Minimal, Editorial, Refined

import {
  init, render, safeRect, splitRect, el,
  below, rightOf,
} from '../slidekit.bundle.min.js';

// -- Image Manifest --------------------------------------------------------------
const IMAGES = {
  heroCoffee:      './images/hero-coffee.jpg',
  founderPortrait: './images/founder-portrait.jpg',
  coffeeDetail:    './images/coffee-beans-detail.jpg',
  coffeeFarm:      './images/coffee-farm.jpg',
  coffeeProcess:   './images/coffee-process.jpg',
  coffeeSeedlings: './images/coffee-seedlings.jpg',
  roasteryInterior:'./images/roastery-interior.jpg',
  cuppingSession:  './images/cupping-session.jpg',
  teamMember1:     './images/team-member-1.jpg',
  teamMember2:     './images/team-member-2.jpg',
  teamMember3:     './images/team-member-3.jpg',
};

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:    '#FFFFFF',
  bgSecondary:  '#FAF9F9',
  textPrimary:  '#1A1714',
  textSecondary:'#626160',
  border:       '#1A1714',
  surfaceMuted: '#B9B9B9',
};

const SERIF  = 'Playfair Display';
const SANS   = 'DM Sans';

// -- Helper Functions ------------------------------------------------------------

function headerBar(slideId) {
  return [
    el(`<p style="font-family:${SANS};font-size:11px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;">Artisan Coffee Collective</p>`, {
      id: `${slideId}-hdr-left`, x: 120, y: 28, w: 300, h: 20,
    }),
    el(`<p style="font-family:${SANS};font-size:11px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;">@2025</p>`, {
      id: `${slideId}-hdr-center`, x: 960, y: 28, w: 100, h: 20, anchor: 'tc',
      style: { textAlign: 'center' },
    }),
    el(`<p style="font-family:${SANS};font-size:11px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;">Version .1</p>`, {
      id: `${slideId}-hdr-right`, x: 1800, y: 28, w: 120, h: 20, anchor: 'tr',
      style: { textAlign: 'right' },
    }),
    el('', {
      id: `${slideId}-hdr-rule`, x: 120, y: 56, w: 1680, h: 1,
      style: { background: C.border },
    }),
  ];
}

function sectionTitle(text, slideId) {
  return el(
    `<h1 style="font-family:'${SERIF}';font-size:108px;font-weight:900;font-style:italic;color:${C.textPrimary};line-height:1.0;letter-spacing:-0.02em;text-transform:uppercase;">${text}</h1>`,
    { id: `${slideId}-section`, x: 120, y: 900, w: 1200, h: 130 },
  );
}

function templateLabel(name, slideId) {
  return el(
    `<p style="font-family:${SANS};font-size:10px;font-weight:400;color:${C.surfaceMuted};letter-spacing:0.02em;">Template: ${name}</p>`,
    { id: `${slideId}-tpl`, x: 120, y: 1050, w: 300, h: 16 },
  );
}

function tagChip(text, id, x, y) {
  return el(
    `<span style="font-family:${SANS};font-size:12px;font-weight:500;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.1em;border:1px solid ${C.border};padding:8px 20px;display:inline-block;">${text}</span>`,
    { id, x, y, w: 180, h: 36 },
  );
}

function dividerLine(id, x, y, w) {
  return el('', {
    id, x, y, w, h: 1,
    style: { background: C.border },
  });
}

function img(src, extraStyle = '') {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;${extraStyle}">`;
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 10,
    fonts: [
      { family: 'Playfair Display', weights: [700, 800, 900], source: 'google' },
      { family: 'DM Sans', weights: [400, 500, 700], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: COVER / TITLE SLIDE
    // ================================================================
    {
      id: 'cover',
      background: C.bgPrimary,
      notes: 'Cover / Title Slide — introduces the deck',
      elements: [
        ...headerBar('s1'),

        tagChip('CRAFT ROASTERS', 's1-tag', safe.x, 190),

        el(`<p style="font-family:${SANS};font-size:20px;font-weight:400;color:${C.textSecondary};line-height:1.6;">We source single-origin beans from family farms across three continents, roasting in small batches to reveal each terroir's unique character.</p>`, {
          id: 's1-body', x: safe.x, y: below('s1-tag', { gap: 28 }), w: 620, h: 100,
        }),

        el(`<h1 style="font-family:'${SERIF}';font-size:120px;font-weight:900;font-style:italic;color:${C.textPrimary};line-height:0.95;letter-spacing:-0.02em;">Artisan<br>Coffee</h1>`, {
          id: 's1-hero', x: safe.x, y: 520, w: 700, h: 260,
        }),

        el(img(IMAGES.heroCoffee), { id: 's1-photo', x: 1040, y: 80, w: 740, h: 520 }),

        templateLabel('Cover / Title Slide', 's1'),
      ],
    },

    // ================================================================
    // SLIDE 2: WELCOME / PERSONAL INTRODUCTION
    // ================================================================
    {
      id: 'welcome',
      background: C.bgPrimary,
      notes: 'Welcome / Personal Introduction — founder greeting',
      elements: (() => {
        return [
          ...headerBar('s2'),

          el(`<p style="font-family:'${SERIF}';font-size:36px;font-weight:700;font-style:italic;color:${C.textPrimary};line-height:1.1;text-transform:uppercase;">Hello</p>`, {
            id: 's2-hello', x: safe.x, y: 120, w: 500, h: 46,
          }),
          el(`<h2 style="font-family:'${SERIF}';font-size:72px;font-weight:900;font-style:italic;color:${C.textPrimary};line-height:1.05;letter-spacing:-0.01em;text-transform:uppercase;">I Am<br>Elena Rossi</h2>`, {
            id: 's2-name', x: safe.x, y: below('s2-hello', { gap: 8 }), w: 580, h: 170,
          }),

          el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.65;">With over fifteen years in specialty coffee, I've traveled to origin countries, built relationships with farming communities, and developed roasting profiles that honor the complexity of every harvest. Our collective was born from a simple belief: coffee is a craft, not a commodity.</p>`, {
            id: 's2-bio', x: safe.x, y: below('s2-name', { gap: 24 }), w: 580, h: 160,
          }),

          el(`<p style="font-family:'${SERIF}';font-size:18px;font-style:italic;color:${C.textSecondary};">— Elena Rossi</p>`, {
            id: 's2-sig', x: safe.x, y: below('s2-bio', { gap: 24 }), w: 300,
          }),

          el(img(IMAGES.founderPortrait, 'object-position:top;'), { id: 's2-photo', x: 1020, y: 80, w: 660, h: 700 }),

          sectionTitle('Welcome', 's2'),
          templateLabel('Welcome / Personal Introduction', 's2'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 3: CONTENTS / AGENDA
    // ================================================================
    {
      id: 'contents',
      background: C.bgPrimary,
      notes: 'Contents / Agenda — table of contents',
      elements: (() => {
        const items = [
          'Welcome', 'Our Values', 'Our Mission', 'Our Vision',
          'About the Brand', 'Meet the Team', 'Our Founder',
          'Origins & Sourcing', 'Roasting Process',
        ];

        const elements = [
          ...headerBar('s3'),

          el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">A complete overview of our craft roasting collective — from origin to cup, values to vision, and the people behind every batch.</p>`, {
            id: 's3-intro', x: safe.x, y: 100, w: 560,
          }),

          el(img(IMAGES.coffeeDetail), { id: 's3-photo', x: safe.x, y: 300, w: 260, h: 200 }),

          tagChip('CONTENT', 's3-chip', safe.x, 540),
        ];

        const listX = 680;
        const listStartY = 100;
        const itemH = 32;
        const itemGap = 28;

        for (let i = 0; i < items.length; i++) {
          const iy = listStartY + i * (itemH + itemGap);
          elements.push(
            el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};line-height:${itemH}px;">${i + 1}.</p>`, {
              id: `s3-num${i}`, x: listX, y: iy, w: 40, h: itemH,
              style: { textAlign: 'right' },
            }),
            el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;line-height:${itemH}px;">${items[i]}</p>`, {
              id: `s3-item${i}`, x: listX + 56, y: iy, w: 500, h: itemH,
            }),
          );
        }

        elements.push(
          sectionTitle('Contents', 's3'),
          templateLabel('Contents / Agenda', 's3'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 4: VALUES / NUMBERED GRID
    // ================================================================
    {
      id: 'values',
      background: C.bgPrimary,
      notes: 'Values / Numbered Grid — four core values',
      elements: (() => {
        const values = [
          { num: '01', text: 'Source directly from family-owned farms, paying above fair-trade prices to support sustainable agriculture.' },
          { num: '02', text: 'Roast in small batches of no more than 25 kilograms, ensuring quality control at every stage.' },
          { num: '03', text: 'Maintain full transparency from seed to cup, sharing origin data and roast profiles with every customer.' },
          { num: '04', text: 'Invest in community — ten percent of profits fund water and education initiatives at origin farms.' },
        ];

        const gridX = safe.x;
        const gridY = 180;
        const colW = 340;
        const rowH = 180;
        const colGap = 40;
        const rowGap = 24;

        const elements = [
          ...headerBar('s4'),

          el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.1em;line-height:1.6;">Our guiding principles shape every decision we make — from the farms we partner with to the cup you hold in your hands.</p>`, {
            id: 's4-intro', x: safe.x, y: 80, w: 1200, h: 50,
          }),
        ];

        for (let i = 0; i < 4; i++) {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const cx = gridX + col * (colW + colGap);
          const cy = gridY + row * (rowH + rowGap);

          elements.push(
            el(`<p style="font-family:${SANS};font-size:36px;font-weight:700;color:${C.textPrimary};line-height:1.0;">${values[i].num}</p>`, {
              id: `s4-num${i}`, x: cx, y: cy, w: colW, h: 44,
            }),
            el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.6;">${values[i].text}</p>`, {
              id: `s4-val${i}`, x: cx, y: below(`s4-num${i}`, { gap: 12 }), w: colW,
            }),
          );
        }

        elements.push(
          el(img(IMAGES.coffeeFarm), { id: 's4-photo', x: 1020, y: 140, w: 660, h: 340 }),

          el(`<ul style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.7;list-style:none;padding:0;margin:0;">
            <li style="margin-bottom:8px;">• Single-origin sourcing</li>
            <li style="margin-bottom:8px;">• Small-batch roasting</li>
            <li style="margin-bottom:8px;">• Full supply chain transparency</li>
            <li>• Community reinvestment</li>
          </ul>`, {
            id: 's4-bullets', x: 1020, y: below('s4-photo', { gap: 24 }), w: 500,
          }),

          sectionTitle('Values', 's4'),
          templateLabel('Values / Numbered Grid', 's4'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 5: MISSION / STATEMENT
    // ================================================================
    {
      id: 'mission',
      background: C.bgPrimary,
      notes: 'Mission / Statement — bold editorial statement',
      elements: [
        ...headerBar('s5'),

        el(`<h2 style="font-family:'${SERIF}';font-size:64px;font-weight:900;font-style:italic;color:${C.textPrimary};line-height:1.08;letter-spacing:-0.01em;">Every Cup<br>Tells a Story<br>of Its Origin</h2>`, {
          id: 's5-statement', x: safe.x, y: 100, w: 580, h: 220,
        }),

        el(`<p style="font-family:${SANS};font-size:12px;font-weight:500;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.1em;">Our Purpose</p>`, {
          id: 's5-label', x: safe.x, y: below('s5-statement', { gap: 28 }), w: 200,
        }),
        el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textSecondary};line-height:1.5;">To elevate specialty coffee from a daily habit into a conscious, meaningful ritual that connects people to the land and communities where it grows.</p>`, {
          id: 's5-desc', x: safe.x, y: below('s5-label', { gap: 12 }), w: 540,
        }),

        dividerLine('s5-div', safe.x, 620, 500),

        el(`<div>
          <p style="font-family:${SANS};font-size:11px;font-weight:500;color:${C.textSecondary};text-transform:uppercase;letter-spacing:0.08em;margin:0 0 4px 0;">Name Title</p>
          <p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textPrimary};margin:0;">Elena Rossi</p>
        </div>`, {
          id: 's5-person-name', x: safe.x, y: 640, w: 240,
        }),
        dividerLine('s5-div2', safe.x, 700, 500),
        el(`<div>
          <p style="font-family:${SANS};font-size:11px;font-weight:500;color:${C.textSecondary};text-transform:uppercase;letter-spacing:0.08em;margin:0 0 4px 0;">Post Title</p>
          <p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textPrimary};margin:0;">Founder & Head Roaster</p>
        </div>`, {
          id: 's5-person-title', x: safe.x, y: 716, w: 240,
        }),

        el(img(IMAGES.coffeeProcess), { id: 's5-photo', x: 1020, y: 80, w: 660, h: 580 }),

        sectionTitle('Mission', 's5'),
        templateLabel('Mission / Statement', 's5'),
      ],
    },

    // ================================================================
    // SLIDE 6: VISION / PROJECT LIST
    // ================================================================
    {
      id: 'vision',
      background: C.bgPrimary,
      notes: 'Vision / Project List — initiatives and projects',
      elements: (() => {
        const projects = [
          { name: 'ORIGIN DIRECT', desc: 'Establishing direct trade relationships with farms in Ethiopia, Colombia, and Guatemala' },
          { name: 'MICRO-LOT SERIES', desc: 'Limited seasonal releases highlighting exceptional single-farm harvests' },
          { name: 'ROAST LAB', desc: 'Open-door sessions where customers observe and learn our roasting process' },
          { name: 'SEED FUND', desc: 'Community investment program supporting agricultural education at origin' },
          { name: 'ZERO WASTE', desc: 'Closed-loop packaging and composting program across all retail locations' },
        ];

        const listX = 660;
        const listStartY = 100;
        const itemH = 80;

        const elements = [
          ...headerBar('s6'),

          tagChip('OUR PROJECTS', 's6-tag', safe.x, 100),

          el(`<h2 style="font-family:'${SERIF}';font-size:56px;font-weight:900;font-style:italic;color:${C.textPrimary};line-height:1.08;letter-spacing:-0.01em;">Building<br>a Better<br>Coffee Future</h2>`, {
            id: 's6-heading', x: listX, y: 80, w: 800, h: 200,
          }),

          el(img(IMAGES.coffeeSeedlings), { id: 's6-photo', x: safe.x, y: 180, w: 420, h: 280 }),
        ];

        const projStartY = 310;
        for (let i = 0; i < projects.length; i++) {
          const py = projStartY + i * itemH;
          if (i > 0) {
            elements.push(dividerLine(`s6-rule${i}`, listX, py, 900));
          }
          elements.push(
            el(`<p style="font-family:${SANS};font-size:14px;font-weight:500;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;margin:0;">${i + 1}. ${projects[i].name}</p>`, {
              id: `s6-proj-name${i}`, x: listX, y: py + 10, w: 900, h: 22,
            }),
            el(`<p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.4;">${projects[i].desc}</p>`, {
              id: `s6-proj-desc${i}`, x: listX, y: below(`s6-proj-name${i}`, { gap: 8 }), w: 900,
            }),
          );
        }

        elements.push(
          el(`<ul style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};line-height:1.7;list-style:none;padding:0;margin:0;">
            <li style="margin-bottom:6px;">• Sustainable sourcing</li>
            <li style="margin-bottom:6px;">• Community investment</li>
            <li>• Environmental stewardship</li>
          </ul>`, {
            id: 's6-bullets', x: safe.x, y: 510, w: 400,
          }),

          sectionTitle('Vision', 's6'),
          templateLabel('Vision / Project List', 's6'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 7: ABOUT / TWO-COLUMN TEXT
    // ================================================================
    {
      id: 'about',
      background: C.bgPrimary,
      notes: 'About / Two-Column Text — detailed brand story',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.48, gap: 60 });
        return [
          ...headerBar('s7'),

          el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.65;">Founded in 2018 in a small garage roastery, Artisan Coffee Collective began with a single drum roaster and a passion for exceptional coffee. Our founder, Elena Rossi, had spent years traveling through coffee-growing regions, learning from the farmers who dedicated their lives to cultivating the perfect cherry.</p>`, {
            id: 's7-left-text', x: left.x, y: 100, w: left.w,
          }),

          el(`<p style="font-family:'${SERIF}';font-size:32px;font-weight:800;font-style:italic;color:${C.textPrimary};line-height:1.1;letter-spacing:-0.01em;text-transform:uppercase;">About the Brand</p>`, {
            id: 's7-right-heading', x: right.x, y: 100, w: right.w, h: 44,
          }),

          el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.65;">Today we partner with over forty family farms across Ethiopia, Colombia, Guatemala, and Indonesia. Every lot is cupped, scored, and profiled before we commit to purchase. Our roasting philosophy is guided by a deep respect for the raw material — we roast to reveal, never to mask.</p>`, {
            id: 's7-right-text', x: right.x, y: below('s7-right-heading', { gap: 20 }), w: right.w,
          }),

          el(`<p style="font-family:${SANS};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.65;">Our team of six roasters, two green buyers, and a quality control lab work together to ensure that every bag we seal carries the full expression of its origin.</p>`, {
            id: 's7-right-text2', x: right.x, y: below('s7-right-text', { gap: 16 }), w: right.w,
          }),

          el(img(IMAGES.roasteryInterior), { id: 's7-photo1', x: right.x, y: 620, w: 360, h: 240 }),
          el(img(IMAGES.cuppingSession), { id: 's7-photo2', x: right.x + 380, y: 620, w: 300, h: 240 }),

          sectionTitle('About', 's7'),
          templateLabel('About / Two-Column Text', 's7'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 8: OUR TEAM / MULTI-PERSON GRID
    // ================================================================
    {
      id: 'team',
      background: C.bgPrimary,
      notes: 'Our Team / Multi-Person Grid — three team members',
      elements: (() => {
        const team = [
          { num: '/01', name: 'ELENA ROSSI', title: 'FOUNDER & HEAD ROASTER', desc: 'Fifteen years in specialty coffee. Certified Q-Grader with deep relationships across three origin countries.' },
          { num: '/02', name: 'MARCUS CHEN', title: 'GREEN BUYER', desc: 'Former agronomist who sources our lots directly from family farms in East Africa and Central America.' },
          { num: '/03', name: 'SOFIA ANDRADE', title: 'LEAD ROASTER', desc: 'Award-winning roaster specializing in light and medium profiles that highlight origin character.' },
        ];

        const gap = 40;
        const cols = 3;
        const cardW = (safe.w - gap * (cols - 1)) / cols;
        const startY = 80;
        const photoH = 340;

        const teamImages = [IMAGES.teamMember1, IMAGES.teamMember2, IMAGES.teamMember3];
        const elements = [...headerBar('s8')];

        for (let i = 0; i < team.length; i++) {
          const t = team[i];
          const cx = safe.x + i * (cardW + gap);

          elements.push(
            el(`<p style="font-family:${SANS};font-size:32px;font-weight:700;color:${C.textPrimary};line-height:1.0;">${t.num}</p>`, {
              id: `s8-num${i}`, x: cx, y: startY, w: cardW, h: 40,
            }),
            el(img(teamImages[i], 'object-position:top;'), { id: `s8-photo${i}`, x: cx, y: startY + 50, w: cardW, h: photoH }),
            el(`<p style="font-family:${SANS};font-size:14px;font-weight:700;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.08em;">${t.name}</p>`, {
              id: `s8-name${i}`, x: cx, y: startY + 50 + photoH + 16, w: cardW, h: 22,
            }),
            el(`<p style="font-family:${SANS};font-size:12px;font-weight:400;color:${C.textSecondary};text-transform:uppercase;letter-spacing:0.05em;">${t.title}</p>`, {
              id: `s8-title${i}`, x: cx, y: below(`s8-name${i}`, { gap: 8 }), w: cardW, h: 18,
            }),
            el(`<p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textSecondary};line-height:1.6;">${t.desc}</p>`, {
              id: `s8-desc${i}`, x: cx, y: below(`s8-title${i}`, { gap: 10 }), w: cardW,
            }),
          );
        }

        elements.push(
          sectionTitle('Our Team', 's8'),
          templateLabel('Our Team / Multi-Person Grid', 's8'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 9: FOUNDER / BIO
    // ================================================================
    {
      id: 'founder',
      background: C.bgPrimary,
      notes: 'Founder / Bio — detailed founder profile with skills',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.35, gap: 60 });

        const skills = [
          { label: 'Q-Grading', pct: 92 },
          { label: 'Roast Profiling', pct: 88 },
          { label: 'Green Sourcing', pct: 76 },
        ];

        const barY = 510;
        const barH = 14;
        const barGap = 36;
        const maxBarW = 500;

        const elements = [
          ...headerBar('s9'),

          el(img(IMAGES.founderPortrait, 'object-position:top;'), { id: 's9-photo', x: left.x, y: 100, w: left.w, h: 440 }),

          el(`<h2 style="font-family:'${SERIF}';font-size:52px;font-weight:900;font-style:italic;color:${C.textPrimary};line-height:1.05;letter-spacing:-0.01em;text-transform:uppercase;">Elena<br>Rossi</h2>`, {
            id: 's9-name', x: right.x, y: 100, w: right.w, h: 130,
          }),

          el(`<p style="font-family:${SANS};font-size:16px;font-weight:400;color:${C.textSecondary};text-transform:uppercase;letter-spacing:0.08em;line-height:1.6;">Elena Rossi is a certified Q-Grader and the founding force behind Artisan Coffee Collective. Her journey began in the highland farms of Sidamo, Ethiopia, where she first witnessed how altitude, soil, and processing method shape flavor. Over fifteen years she has built direct relationships with over forty farming families, established a roasting methodology centered on origin transparency, and mentored a new generation of specialty roasters.</p>`, {
            id: 's9-bio', x: right.x, y: below('s9-name', { gap: 20 }), w: right.w,
          }),

          el(`<p style="font-family:${SANS};font-size:12px;font-weight:500;color:${C.textPrimary};text-transform:uppercase;letter-spacing:0.1em;">Skills</p>`, {
            id: 's9-skills-label', x: right.x, y: barY - 30, w: 200, h: 18,
          }),
        ];

        for (let i = 0; i < skills.length; i++) {
          const s = skills[i];
          const sy = barY + i * barGap;
          const bw = maxBarW * (s.pct / 100);

          elements.push(
            el(`<p style="font-family:${SANS};font-size:13px;font-weight:400;color:${C.textSecondary};line-height:${barH}px;">${s.label}</p>`, {
              id: `s9-skill-label${i}`, x: right.x, y: sy, w: 140, h: barH,
            }),
            el('', {
              id: `s9-bar${i}`, x: right.x + 150, y: sy + 2, w: bw, h: barH - 4,
              style: { background: C.textPrimary },
            }),
            el(`<p style="font-family:${SANS};font-size:13px;font-weight:400;color:${C.textSecondary};line-height:${barH}px;">${s.pct}%</p>`, {
              id: `s9-pct${i}`, x: rightOf(`s9-bar${i}`, { gap: 12 }), y: sy, w: 50, h: barH,
            }),
          );
        }

        elements.push(
          sectionTitle('Founder', 's9'),
          templateLabel('Founder / Bio', 's9'),
        );
        return elements;
      })(),
    },

  ];

  return await render(slides);
}
