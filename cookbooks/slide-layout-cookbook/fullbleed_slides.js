// Full-Bleed Split Slides (M1-M4)
// Edge-to-edge image splits — images extend beyond safe zone to canvas edges.
// To be merged into slides.js

const FULLBLEED_SLIDES = [

  // =========================================================================
  // SLIDE M1 — Full-Bleed Image Left
  // Pattern: Image fills the left half of the canvas edge-to-edge
  // Technique: figure at x:0, y:0, w:960, h:1080 with containerRadius:0.
  //   Text content occupies right half within safe margins.
  // When to use: Visual-led narratives, dramatic photo reveals
  // Key APIs: figure, el, below
  // =========================================================================
  {
    id: 'm1-fullbleed-left',
    background: C.bg,
    elements: (() => {
      const textX = 1020;
      const textW = 780;
      return [
        patternLabel('M1 · Full-Bleed Left', 'm1-fullbleed-left'),

        figure({
          id: 'm1-photo', src: './landscape-banner.png',
          x: 0, y: 0, w: 960, h: 1080,
          fit: 'cover', containerRadius: 0,
        }),

        el(`<p style="font:600 16px ${FONT};color:${C.accent};text-transform:uppercase;letter-spacing:2px">Signal Analysis</p>`, {
          id: 'm1-eyebrow', x: textX, y: 260, w: textW,
        }),

        el(`<p style="font:700 52px ${FONT};color:${C.text};letter-spacing:-1px;line-height:1.12">Helios Array<br>Deep-Field Scan</p>`, {
          id: 'm1-title', x: textX, y: below('m1-eyebrow', { gap: 16 }), w: textW,
        }),

        el(`<p style="font:400 22px ${FONT};color:${C.textMuted};line-height:1.7">The Helios phased-array antenna farm captures wideband emissions from magnetar candidates across the galactic plane. Each baseline pair contributes to a synthetic aperture exceeding 400 km.</p>`, {
          id: 'm1-body', x: textX, y: below('m1-title', { gap: 24 }), w: textW,
        }),

        el(`<p style="font:600 20px ${FONT};color:${C.accentGrn}">↗ 1.4 Tbit/s sustained throughput</p>`, {
          id: 'm1-stat', x: textX, y: below('m1-body', { gap: 28 }), w: textW,
        }),
      ];
    })(),
  },

  // =========================================================================
  // SLIDE M2 — Full-Bleed Image Right
  // Pattern: Image fills the right half of the canvas edge-to-edge
  // Technique: figure at x:960, y:0, w:960, h:1080 with containerRadius:0.
  //   Text content occupies left half within safe margins.
  // When to use: Text-first layouts with dramatic visual payoff on the right
  // Key APIs: figure, el, below
  // =========================================================================
  {
    id: 'm2-fullbleed-right',
    background: C.bg,
    elements: (() => {
      const textX = 120;
      const textW = 780;
      return [
        patternLabel('M2 · Full-Bleed Right', 'm2-fullbleed-right'),

        figure({
          id: 'm2-photo', src: './hero-bg.png',
          x: 960, y: 0, w: 960, h: 1080,
          fit: 'cover', containerRadius: 0,
        }),

        el(`<p style="font:700 52px ${FONT};color:${C.text};letter-spacing:-1px;line-height:1.12">Quantum Mesh<br>Routing Protocol</p>`, {
          id: 'm2-title', x: textX, y: 200, w: textW,
        }),

        el(`<p style="font:400 22px ${FONT};color:${C.textMuted};line-height:1.7">Entanglement-assisted relay nodes form a self-healing mesh that delivers deterministic latency across interplanetary distances. The protocol stack replaces classical TCP with qubit-stream multiplexing.</p>`, {
          id: 'm2-body', x: textX, y: below('m2-title', { gap: 24 }), w: textW,
        }),

        el(`<p style="font:600 18px ${FONT};color:${C.textMuted};line-height:2.2">
          <span style="color:${C.accent}">●</span>&nbsp; Sub-nanosecond jitter across 4 AU<br>
          <span style="color:${C.accent}">●</span>&nbsp; 256-qubit error-corrected channels<br>
          <span style="color:${C.accent}">●</span>&nbsp; Zero-trust authentication per hop
        </p>`, {
          id: 'm2-bullets', x: textX, y: below('m2-body', { gap: 28 }), w: textW,
        }),
      ];
    })(),
  },

  // =========================================================================
  // SLIDE M3 — Full-Bleed Image Top
  // Pattern: Image fills the top half of the canvas edge-to-edge
  // Technique: figure at x:0, y:0, w:1920, h:540 with containerRadius:0.
  //   Text content sits in the bottom half within safe margins.
  // When to use: Landscape panoramas above explanatory text
  // Key APIs: figure, el, below
  // =========================================================================
  {
    id: 'm3-fullbleed-top',
    background: C.bg,
    elements: (() => {
      const textW = 1200;
      const textX = (1920 - textW) / 2;
      return [
        patternLabel('M3 · Full-Bleed Top', 'm3-fullbleed-top'),

        figure({
          id: 'm3-photo', src: './textured-overlay.png',
          x: 0, y: 0, w: 1920, h: 540,
          fit: 'cover', containerRadius: 0,
        }),

        el(`<p style="font:700 48px ${FONT};color:${C.text};letter-spacing:-1px;line-height:1.15;text-align:center">Stratospheric Relay Platform</p>`, {
          id: 'm3-title', x: textX, y: 600, w: textW,
        }),

        el(`<p style="font:400 22px ${FONT};color:${C.textMuted};line-height:1.7;text-align:center">Solar-powered high-altitude platforms orbit at 20 km, bridging satellite constellations and ground terminals. Each node carries a 48-beam phased array capable of sustaining 200 Gbit/s aggregate downlink while autonomously station-keeping against stratospheric winds.</p>`, {
          id: 'm3-body', x: textX, y: below('m3-title', { gap: 24 }), w: textW,
        }),
      ];
    })(),
  },

  // =========================================================================
  // SLIDE M4 — Full-Bleed Image Bottom
  // Pattern: Image fills the bottom half of the canvas edge-to-edge
  // Technique: figure at x:0, y:540, w:1920, h:540 with containerRadius:0.
  //   Text content sits in the top half within safe margins.
  // When to use: Hero images below a headline, call-to-action layouts
  // Key APIs: figure, el, below
  // =========================================================================
  {
    id: 'm4-fullbleed-bottom',
    background: C.bg,
    elements: (() => {
      const textX = 120;
      const textW = 1680;
      return [
        patternLabel('M4 · Full-Bleed Bottom', 'm4-fullbleed-bottom'),

        figure({
          id: 'm4-photo', src: './landscape-banner.png',
          x: 0, y: 540, w: 1920, h: 540,
          fit: 'cover', containerRadius: 0,
        }),

        el(`<p style="font:700 56px ${FONT};color:${C.text};letter-spacing:-1px;line-height:1.15">Orbital Foundry Initiative</p>`, {
          id: 'm4-title', x: textX, y: 90, w: textW,
        }),

        el(`<p style="font:400 24px ${FONT};color:${C.textMuted};line-height:1.6">Manufacturing in microgravity unlocks alloy compositions impossible under 1 g — from amorphous titanium lattices to single-crystal turbine blades grown in vacuum.</p>`, {
          id: 'm4-subtitle', x: textX, y: below('m4-title', { gap: 20 }), w: 1100,
        }),

        el(`<p style="font:600 20px ${FONT};color:${C.accent}">→ &nbsp;Apply for early-access flight allocation</p>`, {
          id: 'm4-cta', x: textX, y: below('m4-subtitle', { gap: 28 }), w: 600,
        }),
      ];
    })(),
  },

];
