import {
  init, render, safeRect, splitRect,
  el, below, rightOf, centerIn, centerVWith,
  vstack, panel, figure, group, connect,
  grid, repeat, getSpacing, distributeH, matchWidth,
} from './slidekit.bundle.min.js';

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'Inter', weights: [300, 400, 600, 700, 800], source: 'google' },
    ],
  });

  const safe = safeRect();

  const C = {
    accent: '#0891b2',
    accentRed: '#dc2626',
    accentGrn: '#16a34a',
    accentYlw: '#d97706',
    accentPrp: '#7c3aed',
    accentOrg: '#ea580c',
    bg: '#f8fafc',
    surface: '#ffffff',
    text: '#1e293b',
    textMuted: 'rgba(30,41,59,0.6)',
    textDim: 'rgba(30,41,59,0.4)',
    border: 'rgba(30,41,59,0.12)',
  };
  const FONT = "'Inter', sans-serif";

  function patternLabel(text, id) {
    return el(`<p style="font:600 13px ${FONT};color:${C.textDim};text-transform:uppercase;letter-spacing:2px">${text}</p>`, {
      id: `${id}-label`, x: 1920 - 120 - 400, y: 12, w: 400,
      layer: 'overlay',
      style: { textAlign: 'right' },
    });
  }

  function slideBg(id) {
    return el(`<div style="width:100%;height:100%;background:${C.bg}"></div>`, {
      id: `${id}-bg`, x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
    });
  }

  const slides = [

    // =========================================================================
    // SLIDE 1 — Title
    // =========================================================================
    {
      id: 'title',
      elements: [
        el(`<div style="width:100%;height:100%;background:linear-gradient(135deg, ${C.surface} 0%, ${C.bg} 100%);border-radius:0"></div>`, {
          id: 'title-bg', x: 0, y: 0, w: 1920, h: 1080, layer: 'bg',
        }),
        el(`<p style="font:800 72px ${FONT};color:${C.text}">SlideKit Data Cookbook</p>`, {
          id: 'title-main', x: safe.x, y: 340, w: safe.w,
          style: { textAlign: 'center' },
        }),
        el(`<p style="font:300 28px ${FONT};color:${C.textMuted}">Visualization patterns for data-driven presentations</p>`, {
          id: 'title-sub', x: safe.x, y: 440, w: safe.w,
          style: { textAlign: 'center' },
        }),
        el(`<div style="width:100%;height:100%;background:${C.accent};border-radius:2px"></div>`, {
          id: 'title-rule', x: 860, y: 520, w: 200, h: 4,
        }),
        el(`<p style="font:400 18px ${FONT};color:${C.textDim}">12 patterns · No charting libraries · Pure positioned elements</p>`, {
          id: 'title-note', x: safe.x, y: 560, w: safe.w,
          style: { textAlign: 'center' },
        }),
      ],
    },

    // =========================================================================
    // SLIDE 2 — D1: Quadrant Matrix
    // Strategic 2×2 matrix with items plotted by two axes
    // Use: prioritization, effort-vs-impact, risk assessment
    // APIs: el(), group(), panel()
    // =========================================================================
    {
      id: 'd1-quadrant-matrix',
      elements: [
        patternLabel('D1 · Quadrant Matrix', 'd1'),
        el(`<p style="font:700 40px ${FONT};color:${C.text}">Priority Matrix</p>`, {
          id: 'd1-title', x: safe.x, y: safe.y, w: 600,
        }),
        // Axes
        el(`<div style="width:100%;height:100%;background:${C.border}"></div>`, {
          id: 'd1-axis-y', x: 900, y: 180, w: 2, h: 720,
        }),
        el(`<div style="width:100%;height:100%;background:${C.border}"></div>`, {
          id: 'd1-axis-x', x: 260, y: 540, w: 1280, h: 2,
        }),
        // Axis labels — at ends of axes only
        el(`<p style="font:600 13px ${FONT};color:${C.textDim};letter-spacing:1px">← LOW EFFORT</p>`, {
          id: 'd1-ax-lo', x: 280, y: 545, w: 200,
        }),
        el(`<p style="font:600 13px ${FONT};color:${C.textDim};letter-spacing:1px">HIGH EFFORT →</p>`, {
          id: 'd1-ax-hi', x: 1340, y: 545, w: 200, style: { textAlign: 'right' },
        }),
        el(`<p style="font:600 13px ${FONT};color:${C.textDim};letter-spacing:1px">↑ HIGH IMPACT</p>`, {
          id: 'd1-ay-hi', x: 830, y: 160, w: 140, style: { textAlign: 'center' },
        }),
        el(`<p style="font:600 13px ${FONT};color:${C.textDim};letter-spacing:1px">LOW IMPACT ↓</p>`, {
          id: 'd1-ay-lo', x: 830, y: 905, w: 140, style: { textAlign: 'center' },
        }),
        // Quadrant labels — subtle watermarks
        el(`<p style="font:800 16px ${FONT};color:${C.accentGrn};opacity:0.35;text-transform:uppercase;letter-spacing:2px">Quick Wins</p>`, {
          id: 'd1-ql-tl', x: 350, y: 200, w: 300, style: { textAlign: 'center' },
        }),
        el(`<p style="font:800 16px ${FONT};color:${C.accent};opacity:0.35;text-transform:uppercase;letter-spacing:2px">Strategic Bets</p>`, {
          id: 'd1-ql-tr', x: 1080, y: 200, w: 300, style: { textAlign: 'center' },
        }),
        el(`<p style="font:800 16px ${FONT};color:${C.textDim};opacity:0.5;text-transform:uppercase;letter-spacing:2px">Low Priority</p>`, {
          id: 'd1-ql-bl', x: 350, y: 840, w: 300, style: { textAlign: 'center' },
        }),
        el(`<p style="font:800 16px ${FONT};color:${C.accentRed};opacity:0.35;text-transform:uppercase;letter-spacing:2px">Reconsider</p>`, {
          id: 'd1-ql-br', x: 1080, y: 840, w: 300, style: { textAlign: 'center' },
        }),
        // Plotted items — Quick Wins quadrant (top-left: low effort, high impact)
        panel([
          el(`<p style="font:600 14px ${FONT};color:${C.text}">Dark Mode</p>`, { id: 'd1-i1-t', x: 0, y: 0, w: 116 }),
        ], { id: 'd1-i1', x: 380, y: 300, w: 140, padding: 12, fill: C.accentGrn + '22', radius: 8, border: `1px solid ${C.accentGrn}44` }),
        panel([
          el(`<p style="font:600 14px ${FONT};color:${C.text}">Cache Layer</p>`, { id: 'd1-i2-t', x: 0, y: 0, w: 116 }),
        ], { id: 'd1-i2', x: 520, y: 360, w: 140, padding: 12, fill: C.accentGrn + '22', radius: 8, border: `1px solid ${C.accentGrn}44` }),
        // Strategic Bets (top-right: high effort, high impact)
        panel([
          el(`<p style="font:600 14px ${FONT};color:${C.text}">GraphQL Migration</p>`, { id: 'd1-i3-t', x: 0, y: 0, w: 156 }),
        ], { id: 'd1-i3', x: 1050, y: 280, w: 180, padding: 12, fill: C.accent + '22', radius: 8, border: `1px solid ${C.accent}44` }),
        panel([
          el(`<p style="font:600 14px ${FONT};color:${C.text}">Auth Revamp</p>`, { id: 'd1-i4-t', x: 0, y: 0, w: 136 }),
        ], { id: 'd1-i4', x: 1280, y: 350, w: 160, padding: 12, fill: C.accent + '22', radius: 8, border: `1px solid ${C.accent}44` }),
        // Low Priority (bottom-left)
        panel([
          el(`<p style="font:600 14px ${FONT};color:${C.textMuted}">Logo Refresh</p>`, { id: 'd1-i5-t', x: 0, y: 0, w: 126 }),
        ], { id: 'd1-i5', x: 440, y: 680, w: 150, padding: 12, fill: C.surface, radius: 8, border: `1px solid ${C.border}` }),
        // Reconsider (bottom-right)
        panel([
          el(`<p style="font:600 14px ${FONT};color:${C.textMuted}">Rewrite in Rust</p>`, { id: 'd1-i6-t', x: 0, y: 0, w: 146 }),
        ], { id: 'd1-i6', x: 1150, y: 620, w: 170, padding: 12, fill: C.accentRed + '11', radius: 8, border: `1px solid ${C.accentRed}33` }),
        panel([
          el(`<p style="font:600 14px ${FONT};color:${C.textMuted}">Custom CMS</p>`, { id: 'd1-i7-t', x: 0, y: 0, w: 126 }),
        ], { id: 'd1-i7', x: 1320, y: 720, w: 150, padding: 12, fill: C.accentRed + '11', radius: 8, border: `1px solid ${C.accentRed}33` }),
      ],
    },

    // =========================================================================
    // SLIDE 3 — D2: Leaderboard
    // Ranked list with medal badges, inline bars, deltas
    // Use: rankings, top-N lists, competitive metrics
    // APIs: el(), panel(), splitRect()
    // =========================================================================
    {
      id: 'd2-leaderboard',
      elements: (() => {
        const items = [
          { name: 'Sarah Chen', score: 94, delta: +12, prev: 82 },
          { name: 'Marcus Rivera', score: 87, delta: +5, prev: 82 },
          { name: 'Aisha Patel', score: 81, delta: -3, prev: 84 },
          { name: 'James Okonkwo', score: 76, delta: +8, prev: 68 },
          { name: 'Lin Zhang', score: 68, delta: -7, prev: 75 },
        ];
        const medals = ['#FFD700', '#C0C0C0', '#CD7F32'];
        const rowH = 72;
        const rowGap = 16;
        const barMaxW = 500;
        const startY = 220;
        const rowX = safe.x;
        const rowW = safe.w;

        const els = [
          patternLabel('D2 · Leaderboard', 'd2'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Q4 Pipeline Rankings</p>`, {
            id: 'd2-title', x: safe.x, y: safe.y, w: 600,
          }),
        ];

        items.forEach((item, i) => {
          const y = startY + i * (rowH + rowGap);
          const medalColor = i < 3 ? medals[i] : C.textDim;
          const barW = (item.score / 100) * barMaxW;
          const deltaColor = item.delta >= 0 ? C.accentGrn : C.accentRed;
          const deltaArrow = item.delta >= 0 ? '↑' : '↓';

          // Row background
          els.push(
            el(`<div style="width:100%;height:100%;background:${C.surface};border-radius:12px;border:1px solid ${C.border}"></div>`, {
              id: `d2-rowbg-${i}`, x: rowX, y, w: rowW, h: rowH,
            }),
          );
          // Badge circle
          els.push(
            el(`<div style="width:100%;height:100%;background:${medalColor};border-radius:50%"></div>`, {
              id: `d2-badge-${i}`, x: rowX + 16, y: y + 12, w: 48, h: 48,
            }),
          );
          // Rank number
          els.push(
            el(`<p style="font:700 20px ${FONT};color:${C.text}">${i + 1}</p>`, {
              id: `d2-rank-${i}`, x: rowX + 16, y: y + 22, w: 48, style: { textAlign: 'center' },
            }),
          );
          // Name
          els.push(
            el(`<p style="font:600 22px ${FONT};color:${C.text}">${item.name}</p>`, {
              id: `d2-name-${i}`, x: rowX + 80, y: y + 22, w: 260,
            }),
          );
          // Bar background
          els.push(
            el(`<div style="width:100%;height:100%;background:${C.border};border-radius:4px"></div>`, {
              id: `d2-barbg-${i}`, x: rowX + 380, y: y + 24, w: barMaxW, h: 24,
            }),
          );
          // Bar fill
          els.push(
            el(`<div style="width:100%;height:100%;background:linear-gradient(90deg, ${C.accent}88, ${C.accent});border-radius:4px"></div>`, {
              id: `d2-bar-${i}`, x: rowX + 380, y: y + 24, w: barW, h: 24,
            }),
          );
          // Score
          els.push(
            el(`<p style="font:700 22px ${FONT};color:${C.text}">${item.score}</p>`, {
              id: `d2-score-${i}`, x: rowX + 920, y: y + 22, w: 60, style: { textAlign: 'right' },
            }),
          );
          // Delta
          els.push(
            el(`<p style="font:600 18px ${FONT};color:${deltaColor}">${deltaArrow} ${Math.abs(item.delta)}%</p>`, {
              id: `d2-delta-${i}`, x: rowX + 1000, y: y + 24, w: 100,
            }),
          );
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 4 — D3: Waffle Grid
    // 10×10 grid of small squares showing proportional data
    // Use: percentage visualization, survey results, completion tracking
    // APIs: el(), repeat()
    // =========================================================================
    {
      id: 'd3-waffle-grid',
      elements: (() => {
        const pct = 67;
        const cellSize = 52;
        const gap = 6;
        const cols = 10;
        const gridW = cols * (cellSize + gap) - gap;
        const gridX = Math.round((1920 - gridW) / 2);
        const gridY = 280;

        const els = [
          patternLabel('D3 · Waffle Grid', 'd3'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Market Penetration</p>`, {
            id: 'd3-title', x: safe.x, y: safe.y, w: 600,
          }),
          el(`<p style="font:800 96px ${FONT};color:${C.accent}">${pct}%</p>`, {
            id: 'd3-bignum', x: safe.x, y: safe.y, w: safe.w, style: { textAlign: 'center' },
          }),
        ];

        for (let i = 0; i < 100; i++) {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const filled = i < pct;
          const color = filled ? C.accent : C.surface;
          const opacity = filled ? '' : '';
          els.push(
            el(`<div style="width:100%;height:100%;background:${color};border-radius:6px;border:1px solid ${filled ? C.accent + '44' : C.border}"></div>`, {
              id: `d3-cell-${i}`, x: gridX + col * (cellSize + gap), y: gridY + row * (cellSize + gap), w: cellSize, h: cellSize,
            }),
          );
        }

        // Legend
        els.push(
          el(`<div style="width:100%;height:100%;background:${C.accent};border-radius:4px"></div>`, {
            id: 'd3-leg1-box', x: 720, y: 900, w: 20, h: 20,
          }),
          el(`<p style="font:400 16px ${FONT};color:${C.textMuted}">Converted</p>`, {
            id: 'd3-leg1-txt', x: 750, y: 900, w: 120,
          }),
          el(`<div style="width:100%;height:100%;background:${C.surface};border-radius:4px;border:1px solid ${C.border}"></div>`, {
            id: 'd3-leg2-box', x: 900, y: 900, w: 20, h: 20,
          }),
          el(`<p style="font:400 16px ${FONT};color:${C.textMuted}">Remaining</p>`, {
            id: 'd3-leg2-txt', x: 930, y: 900, w: 120,
          }),
        );

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 5 — D4: Diverging Bar Chart
    // Horizontal bars extending left/right from a center baseline
    // Use: sentiment analysis, net promoter, before/after comparisons
    // APIs: el(), panel()
    // =========================================================================
    {
      id: 'd4-diverging-bar',
      elements: (() => {
        const categories = [
          { name: 'Onboarding', neg: -18, pos: 72 },
          { name: 'Documentation', neg: -35, pos: 48 },
          { name: 'API Stability', neg: -8, pos: 89 },
          { name: 'Support Response', neg: -42, pos: 38 },
          { name: 'Pricing', neg: -55, pos: 25 },
          { name: 'Performance', neg: -12, pos: 82 },
        ];
        const centerX = 960;
        const barMaxW = 400;
        const barH = 40;
        const rowGap = 60;
        const startY = 220;

        const els = [
          patternLabel('D4 · Diverging Bar', 'd4'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Customer Sentiment Analysis</p>`, {
            id: 'd4-title', x: safe.x, y: safe.y, w: 800,
          }),
          // Center baseline
          el(`<div style="width:100%;height:100%;background:${C.textDim}"></div>`, {
            id: 'd4-baseline', x: centerX, y: 190, w: 2, h: 740,
          }),
          // Column headers
          el(`<p style="font:600 14px ${FONT};color:${C.accentRed};text-transform:uppercase;letter-spacing:1px">Negative</p>`, {
            id: 'd4-hdr-neg', x: centerX - 280, y: 195, w: 200, style: { textAlign: 'center' },
          }),
          el(`<p style="font:600 14px ${FONT};color:${C.accentGrn};text-transform:uppercase;letter-spacing:1px">Positive</p>`, {
            id: 'd4-hdr-pos', x: centerX + 80, y: 195, w: 200, style: { textAlign: 'center' },
          }),
        ];

        categories.forEach((cat, i) => {
          const y = startY + i * (barH + rowGap);
          const negW = Math.round((Math.abs(cat.neg) / 100) * barMaxW);
          const posW = Math.round((cat.pos / 100) * barMaxW);

          els.push(
            // Category label
            el(`<p style="font:600 18px ${FONT};color:${C.text}">${cat.name}</p>`, {
              id: `d4-cat-${i}`, x: 140, y: y + 8, w: 220, style: { textAlign: 'right' },
            }),
            // Negative bar (extends left from center)
            el(`<div style="width:100%;height:100%;background:${C.accentRed};border-radius:4px 0 0 4px"></div>`, {
              id: `d4-neg-${i}`, x: centerX - negW, y, w: negW, h: barH,
            }),
            // Negative label
            el(`<p style="font:600 14px ${FONT};color:${C.accentRed}">${cat.neg}%</p>`, {
              id: `d4-negv-${i}`, x: centerX - negW - 60, y: y + 10, w: 50, style: { textAlign: 'right' },
            }),
            // Positive bar (extends right from center)
            el(`<div style="width:100%;height:100%;background:${C.accentGrn};border-radius:0 4px 4px 0"></div>`, {
              id: `d4-pos-${i}`, x: centerX + 2, y, w: posW, h: barH,
            }),
            // Positive label
            el(`<p style="font:600 14px ${FONT};color:${C.accentGrn}">+${cat.pos}%</p>`, {
              id: `d4-posv-${i}`, x: centerX + posW + 12, y: y + 10, w: 60,
            }),
          );
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 6 — D5: Waterfall Chart
    // Staggered columns showing incremental build-up to a final sum
    // Use: revenue bridges, budget breakdowns, P&L analysis
    // APIs: el(), group()
    // =========================================================================
    {
      id: 'd5-waterfall',
      elements: (() => {
        const steps = [
          { label: 'Q3 Revenue', value: 4200, delta: 0, type: 'total' },
          { label: 'New Accounts', value: 1800, delta: 1800, type: 'add' },
          { label: 'Upsells', value: 900, delta: 900, type: 'add' },
          { label: 'Price Increase', value: 300, delta: 300, type: 'add' },
          { label: 'Churn', value: -700, delta: -700, type: 'sub' },
          { label: 'Downgrades', value: -400, delta: -400, type: 'sub' },
          { label: 'Q4 Revenue', value: 6100, delta: 0, type: 'total' },
        ];

        const chartX = 200;
        const chartW = 1520;
        const colW = 120;
        const colGap = Math.round((chartW - steps.length * colW) / (steps.length - 1));
        const chartBottom = 800;
        const maxVal = 7200;
        const pxPerUnit = 500 / maxVal;

        let runningTotal = 0;
        const els = [
          patternLabel('D5 · Waterfall Chart', 'd5'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Revenue Bridge: Q3 → Q4</p>`, {
            id: 'd5-title', x: safe.x, y: safe.y, w: 800,
          }),
          // Baseline
          el(`<div style="width:100%;height:100%;background:${C.border}"></div>`, {
            id: 'd5-base', x: chartX - 20, y: chartBottom, w: chartW + 40, h: 1,
          }),
        ];

        steps.forEach((step, i) => {
          const x = chartX + i * (colW + colGap);

          if (step.type === 'total') {
            const colH = Math.round(step.value * pxPerUnit);
            const colY = chartBottom - colH;
            const color = i === 0 ? C.textDim : C.accent;
            runningTotal = step.value;

            els.push(
              el(`<div style="width:100%;height:100%;background:${color};border-radius:4px 4px 0 0"></div>`, {
                id: `d5-col-${i}`, x, y: colY, w: colW, h: colH,
              }),
              el(`<p style="font:700 16px ${FONT};color:${C.text}">$${(step.value / 1000).toFixed(1)}M</p>`, {
                id: `d5-val-${i}`, x, y: colY - 30, w: colW, style: { textAlign: 'center' },
              }),
              el(`<p style="font:600 13px ${FONT};color:${C.textMuted}">${step.label}</p>`, {
                id: `d5-lbl-${i}`, x: x - 10, y: chartBottom + 12, w: colW + 20, style: { textAlign: 'center' },
              }),
            );
          } else {
            const isAdd = step.type === 'add';
            const absDelta = Math.abs(step.delta);
            const colH = Math.round(absDelta * pxPerUnit);
            const prevTop = chartBottom - Math.round(runningTotal * pxPerUnit);
            const colY = isAdd ? prevTop - colH : prevTop;
            const color = isAdd ? C.accentGrn : C.accentRed;

            runningTotal += step.delta;

            els.push(
              el(`<div style="width:100%;height:100%;background:${color}cc;border-radius:4px"></div>`, {
                id: `d5-col-${i}`, x, y: colY, w: colW, h: colH,
              }),
              el(`<p style="font:700 14px ${FONT};color:${color}">${isAdd ? '+' : '-'}$${(absDelta / 1000).toFixed(1)}M</p>`, {
                id: `d5-val-${i}`, x, y: colY - 25, w: colW, style: { textAlign: 'center' },
              }),
              el(`<p style="font:600 12px ${FONT};color:${C.textMuted}">${step.label}</p>`, {
                id: `d5-lbl-${i}`, x: x - 10, y: chartBottom + 12, w: colW + 20, style: { textAlign: 'center' },
              }),
              // Connector line to next column
              ...(i < steps.length - 1 ? [
                el(`<div style="width:100%;height:100%;background:${C.textDim};border-top:1px dashed ${C.textDim}"></div>`, {
                  id: `d5-conn-${i}`, x: x + colW, y: chartBottom - Math.round(runningTotal * pxPerUnit), w: colGap, h: 1,
                }),
              ] : []),
            );
          }
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 7 — D6: Heatmap Grid
    // Matrix of colored cells showing intensity values
    // Use: activity calendars, deploy frequency, resource utilization
    // APIs: el(), repeat()
    // =========================================================================
    {
      id: 'd6-heatmap',
      elements: (() => {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const hours = ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '12 AM', '3 AM'];
        // Activity data (0-10 scale)
        const data = [
          [2, 7, 9, 8, 6, 3, 1, 0],
          [3, 8, 10, 9, 7, 2, 1, 0],
          [1, 6, 8, 10, 8, 4, 2, 1],
          [2, 7, 9, 7, 5, 3, 1, 0],
          [4, 9, 10, 8, 4, 2, 0, 0],
          [0, 1, 3, 2, 1, 1, 0, 0],
          [0, 0, 2, 1, 1, 0, 0, 0],
        ];
        const cellW = 120;
        const cellH = 72;
        const gap = 4;
        const gridX = 340;
        const gridY = 240;

        function intensityColor(val) {
          if (val === 0) return C.surface;
          const hex = Math.round((val / 10) * 255).toString(16).padStart(2, '0');
          return C.accent.slice(0, -2) + hex; // replace last 2 chars with opacity-like brightness
        }

        const els = [
          patternLabel('D6 · Heatmap Grid', 'd6'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Deploy Frequency by Day & Hour</p>`, {
            id: 'd6-title', x: safe.x, y: safe.y, w: 800,
          }),
        ];

        // Column headers
        hours.forEach((h, j) => {
          els.push(
            el(`<p style="font:600 14px ${FONT};color:${C.textDim}">${h}</p>`, {
              id: `d6-hdr-${j}`, x: gridX + j * (cellW + gap), y: gridY - 30, w: cellW, style: { textAlign: 'center' },
            }),
          );
        });

        // Rows
        days.forEach((day, i) => {
          els.push(
            el(`<p style="font:600 16px ${FONT};color:${C.textMuted}">${day}</p>`, {
              id: `d6-day-${i}`, x: gridX - 80, y: gridY + i * (cellH + gap) + 22, w: 70, style: { textAlign: 'right' },
            }),
          );
          hours.forEach((_, j) => {
            const val = data[i][j];
            // Interpolate from light (#e0f7fa) to dark (#0e7490) based on value
            const t = val / 10;
            const r = Math.round(224 + (14 - 224) * t);
            const g = Math.round(247 + (116 - 247) * t);
            const b = Math.round(250 + (144 - 250) * t);
            const bgColor = val === 0 ? C.surface : `rgb(${r},${g},${b})`;
            const textColor = val >= 7 ? '#fff' : C.text;
            els.push(
              el(`<div style="width:100%;height:100%;background:${bgColor};border-radius:6px;border:1px solid ${C.border}"></div>`, {
                id: `d6-cell-${i}-${j}`, x: gridX + j * (cellW + gap), y: gridY + i * (cellH + gap), w: cellW, h: cellH,
              }),
              ...(val > 0 ? [
                el(`<p style="font:700 16px ${FONT};color:${textColor}">${val}</p>`, {
                  id: `d6-val-${i}-${j}`, x: gridX + j * (cellW + gap), y: gridY + i * (cellH + gap) + 24, w: cellW, style: { textAlign: 'center' },
                }),
              ] : []),
            );
          });
        });

        // Legend gradient
        els.push(
          el(`<p style="font:600 14px ${FONT};color:${C.textDim}">Low</p>`, {
            id: 'd6-leg-lo', x: gridX + 300, y: 870, w: 60, style: { textAlign: 'right' },
          }),
          el(`<div style="width:100%;height:100%;background:linear-gradient(90deg, #e0f7fa, #0e7490);border-radius:4px"></div>`, {
            id: 'd6-leg-bar', x: gridX + 370, y: 870, w: 200, h: 20,
          }),
          el(`<p style="font:600 14px ${FONT};color:${C.textDim}">High</p>`, {
            id: 'd6-leg-hi', x: gridX + 580, y: 870, w: 60,
          }),
        );

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 8 — D7: Change Card Grid
    // Metric cards with current value, delta, and previous value
    // Use: dashboards, KPI snapshots, performance monitoring
    // APIs: panel(), el(), splitRect()
    // =========================================================================
    {
      id: 'd7-change-cards',
      elements: (() => {
        const metrics = [
          { name: 'Requests/sec', value: '14.2K', delta: '+12.4%', prev: '12.6K', good: true },
          { name: 'P99 Latency', value: '48ms', delta: '-8.3%', prev: '52ms', good: true },
          { name: 'Error Rate', value: '0.12%', delta: '+0.04%', prev: '0.08%', good: false },
          { name: 'Cache Hit Rate', value: '94.7%', delta: '+2.1%', prev: '92.6%', good: true },
          { name: 'Throughput', value: '892 MB/s', delta: '+15.7%', prev: '771 MB/s', good: true },
          { name: 'Availability', value: '99.97%', delta: '-0.01%', prev: '99.98%', good: false },
        ];

        const cols = 3;
        const cardW = 480;
        const cardH = 200;
        const gapX = 40;
        const gapY = 40;
        const startX = safe.x + Math.round((safe.w - cols * cardW - (cols - 1) * gapX) / 2);
        const startY = 220;

        const els = [
          patternLabel('D7 · Change Cards', 'd7'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Performance Dashboard</p>`, {
            id: 'd7-title', x: safe.x, y: safe.y, w: 600,
          }),
          el(`<p style="font:400 20px ${FONT};color:${C.textMuted}">Week over Week</p>`, {
            id: 'd7-sub', x: safe.x, y: 140, w: 300,
          }),
        ];

        metrics.forEach((m, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = startX + col * (cardW + gapX);
          const y = startY + row * (cardH + gapY);
          const deltaColor = m.good ? C.accentGrn : C.accentRed;
          const arrow = m.good ? '↑' : '↓';

          els.push(
            panel([
              el(`<p style="font:600 14px ${FONT};color:${C.textDim};text-transform:uppercase;letter-spacing:1px">${m.name}</p>`, {
                id: `d7-name-${i}`, x: 0, y: 0, w: cardW - 60,
              }),
              el(`<p style="font:800 48px ${FONT};color:${C.text}">${m.value}</p>`, {
                id: `d7-val-${i}`, x: 0, y: 36, w: cardW - 60,
              }),
              el(`<p style="font:600 22px ${FONT};color:${deltaColor}">${arrow} ${m.delta}</p>`, {
                id: `d7-delta-${i}`, x: 0, y: 100, w: 200,
              }),
              el(`<p style="font:400 15px ${FONT};color:${C.textDim}">was ${m.prev}</p>`, {
                id: `d7-prev-${i}`, x: 0, y: 134, w: 200,
              }),
            ], { id: `d7-card-${i}`, x, y, w: cardW, padding: 28, fill: C.surface, radius: 16, border: `1px solid ${C.border}` }),
          );
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 9 — D8: Gauge / Progress Meters
    // Horizontal progress-bar style gauges with tick marks and zones
    // Use: system health, capacity planning, SLA tracking
    // APIs: el(), panel(), group()
    // =========================================================================
    {
      id: 'd8-gauge',
      elements: (() => {
        const gauges = [
          { label: 'CPU Utilization', value: 72, unit: '%', zones: [[0, 50, C.accentGrn], [50, 80, C.accentYlw], [80, 100, C.accentRed]] },
          { label: 'Memory Usage', value: 45, unit: '%', zones: [[0, 60, C.accentGrn], [60, 85, C.accentYlw], [85, 100, C.accentRed]] },
          { label: 'Network I/O', value: 91, unit: '%', zones: [[0, 40, C.accentGrn], [40, 70, C.accentYlw], [70, 100, C.accentRed]] },
        ];

        const barW = 1200;
        const barH = 36;
        const barX = safe.x + 200;
        const startY = 260;
        const rowGap = 200;

        const els = [
          patternLabel('D8 · Gauge Meter', 'd8'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">System Health Score</p>`, {
            id: 'd8-title', x: safe.x, y: safe.y, w: 600,
          }),
        ];

        gauges.forEach((g, i) => {
          const y = startY + i * rowGap;
          const fillW = Math.round((g.value / 100) * barW);

          // Determine color from zones
          let fillColor = C.accent;
          for (const [lo, hi, color] of g.zones) {
            if (g.value >= lo && g.value <= hi) { fillColor = color; break; }
          }

          els.push(
            // Label
            el(`<p style="font:600 20px ${FONT};color:${C.textMuted}">${g.label}</p>`, {
              id: `d8-lbl-${i}`, x: safe.x, y: y + 4, w: 190,
            }),
            // Track background
            el(`<div style="width:100%;height:100%;background:${C.surface};border-radius:6px;border:1px solid ${C.border}"></div>`, {
              id: `d8-track-${i}`, x: barX, y, w: barW, h: barH,
            }),
            // Zone markers (colored segments underneath)
            ...g.zones.map(([lo, hi, color], z) => {
              const zx = barX + Math.round((lo / 100) * barW);
              const zw = Math.round(((hi - lo) / 100) * barW);
              return el(`<div style="width:100%;height:100%;background:${color}22;border-radius:${z === 0 ? '6px 0 0 6px' : z === g.zones.length - 1 ? '0 6px 6px 0' : '0'}"></div>`, {
                id: `d8-zone-${i}-${z}`, x: zx, y, w: zw, h: barH,
              });
            }),
            // Fill bar
            el(`<div style="width:100%;height:100%;background:${fillColor};border-radius:6px 0 0 6px"></div>`, {
              id: `d8-fill-${i}`, x: barX, y: y + 4, w: fillW, h: barH - 8,
            }),
            // Value
            el(`<p style="font:800 36px ${FONT};color:${fillColor}">${g.value}${g.unit}</p>`, {
              id: `d8-val-${i}`, x: barX + barW + 24, y: y - 4, w: 120,
            }),
            // Tick marks at 25, 50, 75
            ...[25, 50, 75].map(tick => {
              const tx = barX + Math.round((tick / 100) * barW);
              return el(`<div style="width:100%;height:100%;background:${C.textDim}"></div>`, {
                id: `d8-tick-${i}-${tick}`, x: tx, y: y + barH + 4, w: 1, h: 12,
              });
            }),
            // Tick labels
            ...[0, 25, 50, 75, 100].map(tick => {
              const tx = barX + Math.round((tick / 100) * barW) - 15;
              return el(`<p style="font:400 12px ${FONT};color:${C.textDim}">${tick}</p>`, {
                id: `d8-tlbl-${i}-${tick}`, x: tx, y: y + barH + 18, w: 30, style: { textAlign: 'center' },
              });
            }),
          );
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 10 — D9: Slope Chart
    // Lines connecting two time points showing rank/value changes
    // Use: market share shifts, before/after rankings, trend comparison
    // APIs: el(), connect()
    // =========================================================================
    {
      id: 'd9-slope-chart',
      elements: (() => {
        const items = [
          { name: 'Vortex Labs', v1: 28, v2: 22, color: C.accentRed },
          { name: 'NovaTech', v1: 24, v2: 31, color: C.accentGrn },
          { name: 'Apex Systems', v1: 22, v2: 20, color: C.accentYlw },
          { name: 'Meridian Corp', v1: 15, v2: 18, color: C.accentPrp },
          { name: 'Stratos Inc', v1: 11, v2: 9, color: C.accentOrg },
        ];

        const leftX = 480;
        const rightX = 1320;
        const topY = 240;
        const rangeH = 600;
        const maxVal = 35;

        function valToY(v) { return topY + rangeH - Math.round((v / maxVal) * rangeH); }

        const els = [
          patternLabel('D9 · Slope Chart', 'd9'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Market Share Shift</p>`, {
            id: 'd9-title', x: safe.x, y: safe.y, w: 600,
          }),
          // Year labels
          el(`<p style="font:700 24px ${FONT};color:${C.textMuted}">2024</p>`, {
            id: 'd9-yr1', x: leftX - 20, y: 190, w: 100, style: { textAlign: 'center' },
          }),
          el(`<p style="font:700 24px ${FONT};color:${C.textMuted}">2025</p>`, {
            id: 'd9-yr2', x: rightX - 20, y: 190, w: 100, style: { textAlign: 'center' },
          }),
          // Vertical guides
          el(`<div style="width:100%;height:100%;background:${C.border}"></div>`, {
            id: 'd9-guide1', x: leftX + 20, y: topY, w: 1, h: rangeH,
          }),
          el(`<div style="width:100%;height:100%;background:${C.border}"></div>`, {
            id: 'd9-guide2', x: rightX + 20, y: topY, w: 1, h: rangeH,
          }),
        ];

        items.forEach((item, i) => {
          const y1 = valToY(item.v1);
          const y2 = valToY(item.v2);

          // Left dot and label
          els.push(
            el(`<div style="width:100%;height:100%;background:${item.color};border-radius:50%"></div>`, {
              id: `d9-dotL-${i}`, x: leftX + 12, y: y1 - 8, w: 16, h: 16,
            }),
            el(`<p style="font:600 16px ${FONT};color:${C.text}">${item.name}: ${item.v1}%</p>`, {
              id: `d9-lblL-${i}`, x: leftX - 260, y: y1 - 10, w: 260, style: { textAlign: 'right' },
            }),
            // Right dot and label
            el(`<div style="width:100%;height:100%;background:${item.color};border-radius:50%"></div>`, {
              id: `d9-dotR-${i}`, x: rightX + 12, y: y2 - 8, w: 16, h: 16,
            }),
            el(`<p style="font:600 16px ${FONT};color:${C.text}">${item.name}: ${item.v2}%</p>`, {
              id: `d9-lblR-${i}`, x: rightX + 50, y: y2 - 10, w: 260,
            }),
          );

          // Connect line
          els.push(
            connect(`d9-dotL-${i}`, `d9-dotR-${i}`, {
              color: item.color + 'aa',
              thickness: 3,
              arrow: false,
            }),
          );
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 11 — D10: Stacked Proportional Bar
    // Wide bar subdivided into colored segments showing composition
    // Use: cost breakdowns, resource allocation, portfolio composition
    // APIs: el()
    // =========================================================================
    {
      id: 'd10-stacked-bar',
      elements: (() => {
        const segments = [
          { label: 'Compute', pct: 45, color: C.accent },
          { label: 'Storage', pct: 22, color: C.accentGrn },
          { label: 'Network', pct: 15, color: C.accentYlw },
          { label: 'Database', pct: 12, color: C.accentPrp },
          { label: 'Other', pct: 6, color: C.textDim },
        ];
        const segments2 = [
          { label: 'Compute', pct: 52, color: C.accent },
          { label: 'Storage', pct: 18, color: C.accentGrn },
          { label: 'Network', pct: 12, color: C.accentYlw },
          { label: 'Database', pct: 14, color: C.accentPrp },
          { label: 'Other', pct: 4, color: C.textDim },
        ];

        const barX = safe.x;
        const barW = safe.w;
        const barH = 80;
        const bar1Y = 280;
        const bar2Y = 520;

        function makeBar(segs, y, prefix, label) {
          const els = [
            el(`<p style="font:600 18px ${FONT};color:${C.textMuted}">${label}</p>`, {
              id: `${prefix}-label`, x: barX, y: y - 35, w: 400,
            }),
          ];
          let offsetPct = 0;
          segs.forEach((seg, i) => {
            const segX = barX + Math.round((offsetPct / 100) * barW);
            const segW = Math.round((seg.pct / 100) * barW);
            const isFirst = i === 0;
            const isLast = i === segs.length - 1;
            const radius = isFirst ? '8px 0 0 8px' : isLast ? '0 8px 8px 0' : '0';

            els.push(
              el(`<div style="width:100%;height:100%;background:${seg.color};border-radius:${radius}"></div>`, {
                id: `${prefix}-seg-${i}`, x: segX, y, w: segW, h: barH,
              }),
            );
            // Label inside if wide enough
            if (seg.pct >= 10) {
              els.push(
                el(`<p style="font:700 14px ${FONT};color:#fff">${seg.label} · ${seg.pct}%</p>`, {
                  id: `${prefix}-txt-${i}`, x: segX + 8, y: y + 30, w: segW - 16,
                }),
              );
            }
            offsetPct += seg.pct;
          });
          return els;
        }

        const els = [
          patternLabel('D10 · Stacked Bar', 'd10'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Infrastructure Cost Breakdown</p>`, {
            id: 'd10-title', x: safe.x, y: safe.y, w: 1000,
          }),
          ...makeBar(segments, bar1Y, 'd10-q4', 'Q4 2025 — $2.4M/mo'),
          ...makeBar(segments2, bar2Y, 'd10-q3', 'Q3 2025 — $2.1M/mo'),
        ];

        // Legend
        const legY = 720;
        segments.forEach((seg, i) => {
          const lx = safe.x + i * 280;
          els.push(
            el(`<div style="width:100%;height:100%;background:${seg.color};border-radius:50%"></div>`, {
              id: `d10-leg-dot-${i}`, x: lx, y: legY, w: 16, h: 16,
            }),
            el(`<p style="font:400 16px ${FONT};color:${C.textMuted}">${seg.label}</p>`, {
              id: `d10-leg-txt-${i}`, x: lx + 24, y: legY - 2, w: 160,
            }),
          );
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 12 — D11: Confidence Range / Error Bars
    // Point estimates with visual confidence intervals
    // Use: forecasts, A/B test results, estimation ranges
    // APIs: el()
    // =========================================================================
    {
      id: 'd11-confidence-range',
      elements: (() => {
        const regions = [
          { name: 'North America', est: 4.2, lo: 3.8, hi: 4.6, color: C.accent },
          { name: 'Europe', est: 3.1, lo: 2.6, hi: 3.5, color: C.accentGrn },
          { name: 'Asia-Pacific', est: 2.8, lo: 2.1, hi: 3.6, color: C.accentYlw },
          { name: 'Latin America', est: 1.4, lo: 1.0, hi: 1.9, color: C.accentPrp },
          { name: 'Middle East', est: 0.8, lo: 0.5, hi: 1.2, color: C.accentOrg },
        ];

        const chartX = 380;
        const chartW = 1100;
        const rowH = 100;
        const startY = 240;
        const maxVal = 5.0;
        const barH = 6;
        const dotR = 14;

        function valToX(v) { return chartX + Math.round((v / maxVal) * chartW); }

        const els = [
          patternLabel('D11 · Confidence Range', 'd11'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Revenue Forecast by Region</p>`, {
            id: 'd11-title', x: safe.x, y: safe.y, w: 1000,
          }),
          // Scale marks
          ...[0, 1, 2, 3, 4, 5].map(v => el(`<p style="font:400 13px ${FONT};color:${C.textDim}">$${v}M</p>`, {
            id: `d11-scale-${v}`, x: valToX(v) - 20, y: 200, w: 40, style: { textAlign: 'center' },
          })),
          // Grid lines
          ...[0, 1, 2, 3, 4, 5].map(v => el(`<div style="width:100%;height:100%;background:${C.border}"></div>`, {
            id: `d11-grid-${v}`, x: valToX(v), y: 220, w: 1, h: 540,
          })),
        ];

        regions.forEach((r, i) => {
          const y = startY + i * rowH;
          const midY = y + 30;

          els.push(
            // Label
            el(`<p style="font:600 18px ${FONT};color:${C.text}">${r.name}</p>`, {
              id: `d11-name-${i}`, x: safe.x, y: midY - 10, w: 240, style: { textAlign: 'right' },
            }),
            // Range bar
            el(`<div style="width:100%;height:100%;background:${r.color}44;border-radius:3px"></div>`, {
              id: `d11-range-${i}`, x: valToX(r.lo), y: midY - barH / 2, w: valToX(r.hi) - valToX(r.lo), h: barH,
            }),
            // Whisker ends
            el(`<div style="width:100%;height:100%;background:${r.color}"></div>`, {
              id: `d11-whiskL-${i}`, x: valToX(r.lo), y: midY - 12, w: 2, h: 24,
            }),
            el(`<div style="width:100%;height:100%;background:${r.color}"></div>`, {
              id: `d11-whiskR-${i}`, x: valToX(r.hi), y: midY - 12, w: 2, h: 24,
            }),
            // Point estimate dot
            el(`<div style="width:100%;height:100%;background:${r.color};border-radius:50%;border:3px solid ${C.bg}"></div>`, {
              id: `d11-dot-${i}`, x: valToX(r.est) - dotR / 2, y: midY - dotR / 2, w: dotR, h: dotR,
            }),
            // Value label
            el(`<p style="font:700 16px ${FONT};color:${r.color}">$${r.est}M</p>`, {
              id: `d11-val-${i}`, x: valToX(r.est) + dotR, y: midY - 10, w: 120,
            }),
            // Range label
            el(`<p style="font:400 13px ${FONT};color:${C.textDim}">($${r.lo}–${r.hi}M)</p>`, {
              id: `d11-rng-${i}`, x: valToX(r.est) + dotR, y: midY + 10, w: 120,
            }),
          );
        });

        return els;
      })(),
    },

    // =========================================================================
    // SLIDE 13 — D12: Bracket / Tournament
    // Single-elimination bracket showing competition outcomes
    // Use: framework evaluations, decision trees, playoff brackets
    // APIs: el(), panel(), connect()
    // =========================================================================
    {
      id: 'd12-bracket',
      elements: (() => {
        const r1 = ['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Qwik', 'Astro', 'Next.js'];
        const r2 = ['React', 'Vue', 'Solid', 'Next.js'];
        const r3 = ['React', 'Next.js'];
        const winner = 'React';

        const colW = 180;
        const colGap = 160;
        const startX = 160;
        const cardH = 44;

        // Round positions
        const rounds = [
          { items: r1, x: startX, spacing: 70 },
          { items: r2, x: startX + colW + colGap, spacing: 140 + 70 },
          { items: r3, x: startX + 2 * (colW + colGap), spacing: 280 + 140 + 70 },
          { items: [winner], x: startX + 3 * (colW + colGap), spacing: 0 },
        ];

        const els = [
          patternLabel('D12 · Tournament Bracket', 'd12'),
          el(`<p style="font:700 40px ${FONT};color:${C.text}">Framework Evaluation</p>`, {
            id: 'd12-title', x: safe.x, y: safe.y, w: 900,
          }),
          // Round labels
          el(`<p style="font:600 14px ${FONT};color:${C.textDim};text-transform:uppercase;letter-spacing:1px">Round 1</p>`, {
            id: 'd12-rnd1', x: startX, y: 160, w: colW, style: { textAlign: 'center' },
          }),
          el(`<p style="font:600 14px ${FONT};color:${C.textDim};text-transform:uppercase;letter-spacing:1px">Quarterfinals</p>`, {
            id: 'd12-rnd2', x: startX + colW + colGap, y: 160, w: colW, style: { textAlign: 'center' },
          }),
          el(`<p style="font:600 14px ${FONT};color:${C.textDim};text-transform:uppercase;letter-spacing:1px">Semifinals</p>`, {
            id: 'd12-rnd3', x: startX + 2 * (colW + colGap), y: 160, w: colW, style: { textAlign: 'center' },
          }),
          el(`<p style="font:600 14px ${FONT};color:${C.accent};text-transform:uppercase;letter-spacing:1px">Winner</p>`, {
            id: 'd12-rndW', x: startX + 3 * (colW + colGap), y: 160, w: colW, style: { textAlign: 'center' },
          }),
        ];

        // Place cards for each round
        rounds.forEach((round, ri) => {
          const totalH = round.items.length > 1 ? (round.items.length - 1) * round.spacing : 0;
          const baseY = 500 - totalH / 2;

          round.items.forEach((name, ii) => {
            const y = round.items.length === 1 ? 478 : baseY + ii * round.spacing;
            const isWinner = ri === 3;
            const fill = isWinner ? C.accent + '33' : C.surface;
            const border = isWinner ? `2px solid ${C.accent}` : `1px solid ${C.border}`;
            const textColor = isWinner ? C.accent : C.text;

            els.push(
              panel([
                el(`<p style="font:${isWinner ? '700' : '600'} ${isWinner ? '18' : '15'}px ${FONT};color:${textColor}">${name}</p>`, {
                  id: `d12-r${ri}-${ii}-name`, x: 0, y: 0, w: colW - 24,
                }),
              ], { id: `d12-r${ri}-${ii}`, x: round.x, y, w: colW, padding: 12, fill, radius: 8, border }),
            );
          });
        });

        // Connect rounds with lines
        // R1→R2
        for (let i = 0; i < 4; i++) {
          els.push(
            connect(`d12-r0-${i * 2}`, `d12-r1-${i}`, { color: C.textDim, thickness: 1.5 }),
            connect(`d12-r0-${i * 2 + 1}`, `d12-r1-${i}`, { color: C.textDim, thickness: 1.5 }),
          );
        }
        // R2→R3
        for (let i = 0; i < 2; i++) {
          els.push(
            connect(`d12-r1-${i * 2}`, `d12-r2-${i}`, { color: C.textDim, thickness: 1.5 }),
            connect(`d12-r1-${i * 2 + 1}`, `d12-r2-${i}`, { color: C.textDim, thickness: 1.5 }),
          );
        }
        // R3→Winner
        els.push(
          connect('d12-r2-0', 'd12-r3-0', { color: C.accent, thickness: 2.5 }),
          connect('d12-r2-1', 'd12-r3-0', { color: C.accent, thickness: 2.5 }),
        );

        return els;
      })(),
    },

  ];

  // Inject light background into every slide
  slides.forEach(s => {
    const bgEl = slideBg(s.id);
    if (Array.isArray(s.elements)) {
      s.elements.unshift(bgEl);
    }
  });

  return await render(slides);
}
