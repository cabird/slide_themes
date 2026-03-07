// slides.js — "CodeForge AI: Ship Better Code, Faster"
// walkthrough-ai theme proof-of-concept

import {
  init, render, safeRect, splitRect, el,
  below, rightOf, centerVWith,
} from '../slidekit.bundle.min.js';

// -- Design Tokens ---------------------------------------------------------------

const C = {
  bgPrimary:   '#FFFFFF',
  bgDark:      '#0B0B5E',
  textPrimary: '#0D0D2B',
  textSecondary:'#4A4A6A',
  textOnDark:  '#FFFFFF',
  textMuted:   '#8888A0',
  accentBlue:  '#3B4FE8',
  accentYellow:'#FFB808',
  accentGreen: '#2EC46D',
  accentRed:   '#E83B3B',
  tagBlue:     '#3B4FE8',
  tagGreen:    '#22C55E',
  tagAmber:    '#F59E0B',
  tagPurple:   '#8B5CF6',
  border:      '#E2E2EA',
  iconBg:      '#3B4FE8',
};

const FONT = "'DM Sans', sans-serif";

// -- Image Assets ----------------------------------------------------------------

const IMAGES = {
  codeReviewDashboard: './images/code-review-dashboard.jpg',
  prAnalysisView:      './images/pr-analysis-view.jpg',
  codeReviewUi:        './images/code-review-ui.jpg',
  growthMetrics:       './images/growth-metrics.jpg',
};

function img(src) {
  return `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;">`;
}

// -- Helper Functions ------------------------------------------------------------

function templateLabel(name, id, extra = {}) {
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:400;color:${C.textMuted};letter-spacing:0.02em;opacity:0.5;">Template: ${name}</p>`,
    { id, x: 120, y: 990 - 48, w: 350, h: 18, ...extra },
  );
}

function templateLabelDark(name, id, extra = {}) {
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:400;color:rgba(255,255,255,0.3);letter-spacing:0.02em;">Template: ${name}</p>`,
    { id, x: 120, y: 990 - 48, w: 350, h: 18, ...extra },
  );
}

function sectionLabel(text, barId, labelId, x, y) {
  return [
    el(`<div style="width:100%;height:100%;background:${C.accentBlue};"></div>`, {
      id: barId, x, y, w: 4, h: 22,
    }),
    el(`<p style="font-family:${FONT};font-size:16px;font-weight:500;color:${C.textPrimary};line-height:22px;">${text}</p>`, {
      id: labelId, x: x + 16, y, w: 300, h: 22,
    }),
  ];
}

function footer(id, dark = false) {
  const color = dark ? 'rgba(255,255,255,0.4)' : C.textMuted;
  return el(
    `<p style="font-family:${FONT};font-size:13px;font-weight:500;color:${color};">CodeForge AI</p>`,
    { id, x: 120, y: 990 - 22, w: 200, h: 18 },
  );
}

function iconCircle(icon, size = 44) {
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${C.iconBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:${size * 0.45}px;color:#fff;line-height:1;">${icon}</span></div>`;
}

function screenshotPlaceholder(label) {
  return `<div style="width:100%;height:100%;background:#F0F2F8;border:1px solid ${C.border};border-radius:8px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.08);"><p style="font-family:${FONT};font-size:16px;color:${C.textMuted};text-align:center;">${label}</p></div>`;
}

// -- Main Entry ------------------------------------------------------------------

export async function run() {
  await init({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: 'DM Sans', weights: [400, 500, 600, 700], source: 'google' },
    ],
  });

  const safe = safeRect();

  const slides = [

    // ================================================================
    // SLIDE 1: DARK HERO / CASE STUDY INTRO (Template 1)
    // ================================================================
    {
      id: 'hero',
      background: C.bgDark,
      notes: 'Opening hero slide — Dark Hero / Case Study Intro',
      elements: [
        // Logo
        el(`<p style="font-family:${FONT};font-size:18px;font-weight:500;color:${C.textOnDark};">CodeForge AI</p>`, {
          id: 's1-logo', x: safe.x, y: safe.y, w: 200, h: 28,
        }),

        // URL top-right
        el(`<p style="font-family:${FONT};font-size:14px;font-weight:400;color:rgba(255,255,255,0.5);text-align:right;">codeforge.ai</p>`, {
          id: 's1-url', x: safe.x + safe.w - 200, y: safe.y, w: 200, h: 22,
        }),

        // Hero headline
        el(`<h1 style="font-family:${FONT};font-size:72px;font-weight:700;color:${C.textOnDark};line-height:1.1;letter-spacing:-0.02em;">Ship Better Code,<br>Faster Than Ever</h1>`, {
          id: 's1-title', x: safe.x, y: safe.y + 170, w: 720, h: 170,
        }),

        // Subtext
        el(`<p style="font-family:${FONT};font-size:20px;font-weight:400;color:rgba(255,255,255,0.7);line-height:1.6;">AI-powered code review, documentation, and quality assurance — built for engineering teams that move fast.</p>`, {
          id: 's1-body', x: safe.x, y: below('s1-title', { gap: 28 }), w: 600,
        }),

        // Layered screenshots (right side)
        el(`<div style="width:100%;height:100%;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">${img(IMAGES.codeReviewDashboard)}</div>`, {
          id: 's1-screenshot1', x: 920, y: safe.y + 100, w: 780, h: 480,
        }),
        el(`<div style="width:100%;height:100%;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">${img(IMAGES.prAnalysisView)}</div>`, {
          id: 's1-screenshot2', x: 1020, y: safe.y + 300, w: 680, h: 420,
        }),

        footer('s1-footer', true),
        templateLabelDark('Dark Hero / Case Study Intro', 's1-tpl'),
      ],
    },

    // ================================================================
    // SLIDE 2: FEATURE SHOWCASE TWO-COLUMN (Template 2)
    // ================================================================
    {
      id: 'features',
      background: C.bgPrimary,
      notes: 'Feature Showcase — Two-Column layout',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.55, gap: 60 });
        return [
          // Section label
          ...sectionLabel('Our Forte', 's2-bar', 's2-label', left.x, safe.y),

          // Headline
          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">AI That Understands<br>Your Codebase</h2>`, {
            id: 's2-title', x: left.x, y: below('s2-label', { gap: 16 }), w: left.w, h: 110,
          }),

          // Body text
          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">CodeForge analyzes your entire repository to deliver context-aware reviews that catch real issues, not just style nits.</p>`, {
            id: 's2-body', x: left.x, y: below('s2-title', { gap: 20 }), w: left.w,
          }),

          // Feature card 1
          el(`<div style="display:flex;align-items:flex-start;gap:16px;">
            ${iconCircle('⚡')}
            <div>
              <p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textPrimary};margin:0 0 6px 0;line-height:1.3;">Lightning-Fast Reviews</p>
              <p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.5;">Get comprehensive PR feedback in under 30 seconds, not hours.</p>
            </div>
          </div>`, {
            id: 's2-feat1', x: left.x, y: below('s2-body', { gap: 36 }), w: left.w,
          }),

          // Feature card 2
          el(`<div style="display:flex;align-items:flex-start;gap:16px;">
            ${iconCircle('🔒')}
            <div>
              <p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textPrimary};margin:0 0 6px 0;line-height:1.3;">Security-First Analysis</p>
              <p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.5;">Detects vulnerabilities, injection risks, and auth bypasses automatically.</p>
            </div>
          </div>`, {
            id: 's2-feat2', x: left.x, y: below('s2-feat1', { gap: 28 }), w: left.w,
          }),

          // Feature card 3
          el(`<div style="display:flex;align-items:flex-start;gap:16px;">
            ${iconCircle('📄')}
            <div>
              <p style="font-family:${FONT};font-size:18px;font-weight:600;color:${C.textPrimary};margin:0 0 6px 0;line-height:1.3;">Auto Documentation</p>
              <p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.5;">Generates and maintains technical docs as your code evolves.</p>
            </div>
          </div>`, {
            id: 's2-feat3', x: left.x, y: below('s2-feat2', { gap: 28 }), w: left.w,
          }),

          // Screenshot (right column)
          el(`<div style="width:100%;height:100%;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">${img(IMAGES.codeReviewUi)}</div>`, {
            id: 's2-screenshot', x: right.x, y: right.y + 40, w: right.w, h: right.h - 120,
          }),

          footer('s2-footer'),
          templateLabel('Feature Showcase (Two-Column)', 's2-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 3: PROCESS / STEPS (Template 3)
    // ================================================================
    {
      id: 'process',
      background: C.bgPrimary,
      notes: 'Process / Steps template',
      elements: (() => {
        const steps = [
          { num: '01', title: 'Connect Repo', desc: 'Link your GitHub, GitLab, or Bitbucket repository in one click.' },
          { num: '02', title: 'AI Learns Context', desc: 'CodeForge indexes your codebase, patterns, and conventions.' },
          { num: '03', title: 'Auto Review PRs', desc: 'Every pull request gets instant, context-aware feedback.' },
          { num: '04', title: 'Ship with Confidence', desc: 'Merge knowing every change has been thoroughly analyzed.' },
        ];

        const cols = 4;
        const gap = 32;
        const cardW = (safe.w - gap * (cols - 1)) / cols;
        const cardsY = safe.y + 280;

        const elements = [
          ...sectionLabel('Our Process', 's3-bar', 's3-label', safe.x, safe.y),

          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">The CodeForge Way</h2>`, {
            id: 's3-title', x: safe.x, y: below('s3-label', { gap: 16 }), w: 700, h: 56,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">From setup to shipping, we integrate seamlessly into your workflow.</p>`, {
            id: 's3-body', x: safe.x, y: below('s3-title', { gap: 16 }), w: 650,
          }),
        ];

        // Connecting line
        elements.push(
          el(`<div style="width:100%;height:2px;background:${C.border};"></div>`, {
            id: 's3-line', x: safe.x + cardW / 2, y: cardsY - 40, w: safe.w - cardW, h: 2,
          }),
        );

        for (let i = 0; i < steps.length; i++) {
          const s = steps[i];
          const cx = safe.x + i * (cardW + gap);

          // Yellow dot indicator
          elements.push(
            el(`<div style="width:14px;height:14px;border-radius:50%;background:${C.accentYellow};border:3px solid ${C.bgPrimary};"></div>`, {
              id: `s3-dot${i}`, x: cx + cardW / 2 - 7, y: cardsY - 47, w: 14, h: 14,
            }),
          );

          // Step card
          elements.push(
            el(`<div style="padding:0;">
              <p style="font-family:${FONT};font-size:36px;font-weight:700;color:${C.accentBlue};margin:0 0 12px 0;line-height:1;">${s.num}</p>
              <p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textPrimary};margin:0 0 10px 0;line-height:1.3;">${s.title}</p>
              <p style="font-family:${FONT};font-size:15px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.5;">${s.desc}</p>
            </div>`, {
              id: `s3-step${i}`, x: cx, y: cardsY, w: cardW,
            }),
          );
        }

        elements.push(
          footer('s3-footer'),
          templateLabel('Process / Steps', 's3-tpl'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 4: AVATAR / PEOPLE FEATURE (Template 4)
    // ================================================================
    {
      id: 'avatars',
      background: C.bgPrimary,
      notes: 'Avatar / People Feature template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.35, gap: 50 });

        const languages = [
          { flag: '🇺🇸', lang: 'English', sample: '"Refactor the auth middleware to support JWT rotation."' },
          { flag: '🇯🇵', lang: '日本語', sample: '"認証ミドルウェアをリファクタリングして JWT ローテーションに対応。"' },
          { flag: '🇫🇷', lang: 'Français', sample: '"Refactorer le middleware d\'authentification pour le rotation JWT."' },
          { flag: '🇨🇳', lang: '中文', sample: '"重构认证中间件以支持 JWT 轮换。"' },
        ];

        const elements = [
          // Avatar placeholder (left)
          el(`<div style="width:100%;height:100%;background:linear-gradient(135deg, #E8ECFF 0%, #F5F0FF 100%);border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <div style="width:200px;height:200px;border-radius:50%;background:linear-gradient(135deg, ${C.accentBlue}22, ${C.tagPurple}22);border:2px solid ${C.accentBlue}33;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:72px;line-height:1;">🤖</span>
            </div>
          </div>`, {
            id: 's4-avatar', x: left.x, y: left.y + 60, w: left.w, h: 440,
          }),

          // Headline (right)
          el(`<h2 style="font-family:${FONT};font-size:40px;font-weight:700;color:${C.textPrimary};line-height:1.2;letter-spacing:-0.01em;">AI Assistants That Speak Your Team's Language</h2>`, {
            id: 's4-title', x: right.x, y: right.y + 60, w: right.w, h: 110,
          }),

          // Body text
          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">CodeForge's review comments are generated in your team's native language, making feedback accessible to every developer worldwide.</p>`, {
            id: 's4-body', x: right.x, y: below('s4-title', { gap: 20 }), w: right.w,
          }),
        ];

        // Language examples
        let langStartY = safe.y + 560;
        for (let i = 0; i < languages.length; i++) {
          const l = languages[i];
          elements.push(
            el(`<div style="display:flex;align-items:center;gap:14px;padding:10px 0;${i < languages.length - 1 ? `border-bottom:1px solid ${C.border};` : ''}">
              <span style="font-size:22px;line-height:1;">${l.flag}</span>
              <span style="font-family:${FONT};font-size:14px;font-weight:500;color:${C.textPrimary};min-width:70px;">${l.lang}</span>
              <span style="font-family:${FONT};font-size:14px;font-weight:400;color:${C.textSecondary};font-style:italic;">${l.sample}</span>
            </div>`, {
              id: `s4-lang${i}`, x: safe.x, y: langStartY + i * 56, w: safe.w, h: 46,
            }),
          );
        }

        elements.push(
          footer('s4-footer'),
          templateLabel('Avatar / People Feature', 's4-tpl'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 5: CAPABILITIES / INTEGRATION (Template 5)
    // ================================================================
    {
      id: 'capabilities',
      background: C.bgPrimary,
      notes: 'Capabilities / Integration template',
      elements: (() => {
        const elements = [
          ...sectionLabel('Capabilities', 's5-bar', 's5-label', safe.x, safe.y),

          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">Your Workflow, Our Expertise:<br>A Perfect Fit</h2>`, {
            id: 's5-title', x: safe.x, y: below('s5-label', { gap: 16 }), w: 800, h: 110,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Integrates natively with your existing tools — GitHub, GitLab, Bitbucket, Jira, Slack, and 40+ more platforms.</p>`, {
            id: 's5-body', x: safe.x, y: below('s5-title', { gap: 16 }), w: 750,
          }),

          // Monitor mockup
          el(`<div style="width:100%;height:100%;background:#1A1A2E;border-radius:12px 12px 0 0;padding:12px;box-sizing:border-box;">
            <div style="display:flex;gap:6px;margin-bottom:10px;">
              <span style="width:10px;height:10px;border-radius:50%;background:#E83B3B;display:inline-block;"></span>
              <span style="width:10px;height:10px;border-radius:50%;background:#FFB808;display:inline-block;"></span>
              <span style="width:10px;height:10px;border-radius:50%;background:#2EC46D;display:inline-block;"></span>
            </div>
            <div style="width:100%;height:calc(100% - 30px);background:#F8F9FB;border-radius:6px;display:flex;align-items:center;justify-content:center;">
              <p style="font-family:${FONT};font-size:18px;color:${C.textMuted};text-align:center;">Integration Dashboard</p>
            </div>
          </div>`, {
            id: 's5-monitor', x: 460, y: safe.y + 310, w: 1000, h: 560,
          }),

          // Monitor stand
          el(`<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;">
            <div style="width:60px;height:24px;background:#2A2A40;"></div>
            <div style="width:160px;height:6px;background:#2A2A40;border-radius:0 0 4px 4px;"></div>
          </div>`, {
            id: 's5-stand', x: 960 - 80, y: safe.y + 870, w: 160, h: 30,
          }),

          footer('s5-footer'),
          templateLabel('Capabilities / Integration', 's5-tpl'),
        ];
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 6: VALUE PROPOSITION / GROWTH (Template 6)
    // ================================================================
    {
      id: 'growth',
      background: C.bgPrimary,
      notes: 'Value Proposition / Growth template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.55, gap: 60 });

        return [
          ...sectionLabel('Where We Come In', 's6-bar', 's6-label', left.x, safe.y),

          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">Your Partner in<br><strong style="color:${C.accentBlue};">Engineering Growth</strong></h2>`, {
            id: 's6-title', x: left.x, y: below('s6-label', { gap: 16 }), w: left.w, h: 110,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">We help engineering teams scale their review capacity without scaling headcount. CodeForge acts as an always-on senior engineer for every pull request.</p>`, {
            id: 's6-body', x: left.x, y: below('s6-title', { gap: 20 }), w: left.w,
          }),

          // Sub-section 1
          el(`<div>
            <p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textPrimary};margin:0 0 10px 0;line-height:1.3;">Reduce Review Bottlenecks</p>
            <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.6;">Teams using CodeForge see a <strong style="color:${C.textPrimary};">73% reduction</strong> in time-to-merge. Developers spend less time waiting and more time building.</p>
          </div>`, {
            id: 's6-sub1', x: right.x, y: right.y + 140, w: right.w,
          }),

          // Sub-section 2
          el(`<div>
            <p style="font-family:${FONT};font-size:20px;font-weight:600;color:${C.textPrimary};margin:0 0 10px 0;line-height:1.3;">Maintain Quality at Scale</p>
            <p style="font-family:${FONT};font-size:16px;font-weight:400;color:${C.textSecondary};margin:0;line-height:1.6;">As your team grows from 10 to 100 engineers, review quality stays consistent. Our AI learns your team's patterns and enforces them automatically.</p>
          </div>`, {
            id: 's6-sub2', x: right.x, y: below('s6-sub1', { gap: 36 }), w: right.w,
          }),

          // Growth metrics chart
          el(`<div style="width:100%;height:100%;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">${img(IMAGES.growthMetrics)}</div>`, {
            id: 's6-screenshot', x: right.x + 40, y: below('s6-sub2', { gap: 40 }), w: right.w - 80, h: 220,
          }),

          footer('s6-footer'),
          templateLabel('Value Proposition / Growth', 's6-tpl'),
        ];
      })(),
    },

    // ================================================================
    // SLIDE 7: BUSINESS IMPACT / FUNNEL (Template 7)
    // ================================================================
    {
      id: 'impact',
      background: C.bgPrimary,
      notes: 'Business Impact / Funnel template',
      elements: (() => {
        const funnelStages = [
          { label: 'Code Commit', color: C.tagBlue, indent: 0 },
          { label: 'AI Review', color: C.tagBlue, indent: 1 },
          { label: 'Security Scan', color: C.tagPurple, indent: 2 },
          { label: 'Auto Documentation', color: C.tagPurple, indent: 3 },
          { label: 'Quality Gate', color: C.tagAmber, indent: 4 },
          { label: 'Deploy', color: C.tagGreen, indent: 5 },
        ];

        const funnelStartY = safe.y + 310;
        const stageH = 44;
        const stageGap = 16;
        const indentStep = 50;
        const tagW = 200;

        const elements = [
          ...sectionLabel('Business Impact', 's7-bar', 's7-label', safe.x, safe.y),

          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">CodeForge's Impact on<br>Your Dev Pipeline</h2>`, {
            id: 's7-title', x: safe.x, y: below('s7-label', { gap: 16 }), w: 700, h: 110,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Every stage of your development workflow is enhanced with AI-powered analysis and automation.</p>`, {
            id: 's7-body', x: safe.x, y: below('s7-title', { gap: 16 }), w: 650,
          }),

          // Legend chips (top-right)
          el(`<div style="display:flex;gap:12px;flex-wrap:wrap;">
            <span style="font-family:${FONT};font-size:12px;font-weight:500;color:#fff;background:${C.tagBlue};padding:4px 14px;border-radius:16px;">Analysis</span>
            <span style="font-family:${FONT};font-size:12px;font-weight:500;color:#fff;background:${C.tagPurple};padding:4px 14px;border-radius:16px;">Generation</span>
            <span style="font-family:${FONT};font-size:12px;font-weight:500;color:#fff;background:${C.tagAmber};padding:4px 14px;border-radius:16px;">Validation</span>
            <span style="font-family:${FONT};font-size:12px;font-weight:500;color:#fff;background:${C.tagGreen};padding:4px 14px;border-radius:16px;">Delivery</span>
          </div>`, {
            id: 's7-legend', x: safe.x + safe.w - 500, y: safe.y + 10, w: 500,
          }),
        ];

        // Funnel / staircase
        for (let i = 0; i < funnelStages.length; i++) {
          const s = funnelStages[i];
          const sx = safe.x + s.indent * indentStep;
          const sy = funnelStartY + i * (stageH + stageGap);
          elements.push(
            el(`<div style="display:flex;align-items:center;gap:12px;">
              <span style="font-family:${FONT};font-size:14px;font-weight:500;color:#fff;background:${s.color};padding:8px 24px;border-radius:16px;display:inline-block;white-space:nowrap;">${s.label}</span>
              <span style="font-family:${FONT};font-size:13px;color:${C.textMuted};">→</span>
            </div>`, {
              id: `s7-stage${i}`, x: sx, y: sy, w: tagW + s.indent * 10, h: stageH,
            }),
          );
        }

        // Annotation
        elements.push(
          el(`<p style="font-family:${FONT};font-size:13px;font-weight:400;color:${C.textMuted};text-transform:uppercase;letter-spacing:1px;">End-to-End CI/CD Pipeline Coverage</p>`, {
            id: 's7-annotation', x: safe.x, y: safe.y + safe.h - 70, w: 400, h: 20,
          }),
        );

        elements.push(
          footer('s7-footer'),
          templateLabel('Business Impact / Funnel', 's7-tpl'),
        );
        return elements;
      })(),
    },

    // ================================================================
    // SLIDE 8: DIFFERENTIATOR / SECRET SAUCE (Template 8)
    // ================================================================
    {
      id: 'differentiator',
      background: C.bgPrimary,
      notes: 'Differentiator / Secret Sauce template',
      elements: (() => {
        const { left, right } = splitRect(safe, { ratio: 0.5, gap: 60 });

        return [
          ...sectionLabel('Our Secret Ingredient', 's8-bar', 's8-label', left.x, safe.y),

          el(`<h2 style="font-family:${FONT};font-size:44px;font-weight:700;color:${C.textPrimary};line-height:1.15;letter-spacing:-0.01em;">What Sets Us Apart</h2>`, {
            id: 's8-title', x: left.x, y: below('s8-label', { gap: 16 }), w: left.w, h: 56,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Unlike generic AI code tools, CodeForge doesn't just pattern-match — it truly understands your architecture, conventions, and business logic.</p>`, {
            id: 's8-body1', x: left.x, y: below('s8-title', { gap: 20 }), w: left.w,
          }),

          el(`<p style="font-family:${FONT};font-size:18px;font-weight:400;color:${C.textSecondary};line-height:1.6;">Our proprietary <strong style="color:${C.textPrimary};">Context Graph Engine</strong> maps every function, class, and dependency in your codebase, enabling reviews that consider ripple effects across the entire system.</p>`, {
            id: 's8-body2', x: left.x, y: below('s8-body1', { gap: 16 }), w: left.w,
          }),

          // Key differentiators list
          el(`<div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              <span style="color:${C.accentGreen};font-size:18px;line-height:1;">✓</span>
              <span style="font-family:${FONT};font-size:15px;color:${C.textPrimary};line-height:1.4;">Full codebase context, not just diff-level analysis</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              <span style="color:${C.accentGreen};font-size:18px;line-height:1;">✓</span>
              <span style="font-family:${FONT};font-size:15px;color:${C.textPrimary};line-height:1.4;">Learns your team's coding patterns over time</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              <span style="color:${C.accentGreen};font-size:18px;line-height:1;">✓</span>
              <span style="font-family:${FONT};font-size:15px;color:${C.textPrimary};line-height:1.4;">Zero false positive guarantee on security findings</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="color:${C.accentGreen};font-size:18px;line-height:1;">✓</span>
              <span style="font-family:${FONT};font-size:15px;color:${C.textPrimary};line-height:1.4;">On-premise deployment for enterprise compliance</span>
            </div>
          </div>`, {
            id: 's8-checklist', x: left.x, y: below('s8-body2', { gap: 20 }), w: left.w,
          }),

          // Screenshot (right column) — product visual / video player
          el(`<div style="width:100%;height:100%;background:#F0F2F8;border:1px solid ${C.border};border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,0.08);display:flex;flex-direction:column;">
            <div style="flex:1;display:flex;align-items:center;justify-content:center;">
              <div style="text-align:center;">
                <div style="width:64px;height:64px;border-radius:50%;background:${C.accentBlue};margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
                  <span style="font-size:28px;color:#fff;margin-left:4px;">▶</span>
                </div>
                <p style="font-family:${FONT};font-size:16px;color:${C.textMuted};">Watch the Demo</p>
              </div>
            </div>
          </div>`, {
            id: 's8-screenshot', x: right.x, y: right.y + 40, w: right.w, h: right.h - 120,
          }),

          footer('s8-footer'),
          templateLabel('Differentiator / Secret Sauce', 's8-tpl'),
        ];
      })(),
    },
  ];

  return await render(slides);
}
