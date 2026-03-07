# 1920s Inventor Workshop — Theme Guide

> **Theme Name:** `1920s-inventor-workshop`

---

. Aesthetic DNA (Quick Summary)

Three-Word Vibe: Industrial, Intentional, Disciplined

Visual Personality: Editorial-industrial minimalism

Mood & Emotion: Quiet competence, engineered leverage, seriousness without theatrics

Design References: 1920s industrial photography, Bauhaus restraint, modern editorial layout systems

Information Density: 3/5 (balanced)

Polish Level: 5/5 (precise, intentional)

Shape Language: Geometric/sharp




1) Aesthetic DNA
Vibe

Industrial / editorial / disciplined

Quiet competence (serious, not theatrical)

Engineered leverage (constraints, instruments, fixtures)

What this should not feel like

Not “AI futurism” (no circuits, neon, brains, clouds, sci-fi UI)

Not “vintage costume” (no Art Deco ornaments, no distressed/grunge nostalgia)

Not playful, not cute, not whimsical

Overall composition philosophy

Few elements, placed precisely

Big negative space

Hard edges, thin rules

One accent color per slide

2) Canvas and Grid
Slide format

16:9

Canvas: 1920 × 1080 (SlideKit absolute positioning)

Safe area and margins

Default outer margin: 8% of width/height

Left/right: ~154 px

Top/bottom: ~86 px

Keep all critical text inside this safe area.

Layout archetypes (use repeatedly)

Full-bleed photo + left-aligned type (title & transition slides)

Statement slide — bold headline on solid dark or light background, no image

50/50 split (text + photo or photo + text, either orientation)

Figure/diagram slide (engineering-style diagrams with accent bars, arrows, monospaced labels)

Comparison slide (two-column parallel flows on light background)

3) Color System
Base palette (B/W dominant)

bg.dark: #0F1113

bg.light: #F2F2F0

text.dark: #111111

text.light: #FFFFFF

text.muted: #6E6E6E

rule: #D8D8D8 (1px dividers on light)

Stage accents (use one per slide max)

accent.prepare: #27364A (Slate Navy)

accent.model: #1B9E8A (Vertigrous teal)

accent.verify: #3F57B3 (Crisp Indigo)

accent.enable: #97A0AA (Industrial Steel)

Accent usage rules

Never use 2+ stage accents on one slide.

Accents appear as:

A single 2px rule (horizontal or vertical)

A small label highlight

A single chart series (if needed)

A single callout word (rare)

Charts

Charts are primarily monochrome (black/white/gray).

One accent series or highlight is allowed.

No rainbow palettes, no gradients, no soft shadows.

4) Typography
Final font pairing

Headings / labels: IBM Plex Sans

Body / narrative text: IBM Plex Serif

This creates the intended tension:

Sans = engineered structure

Serif = thoughtful craft / “workshop notes” depth

General typography rules

Default alignment: left

Avoid centered paragraphs.

No italic emphasis. Use weight or subtle color instead.

Use sentence case for headings (not ALL CAPS), except small labels.

Keep line lengths readable (avoid ultra-wide text blocks).

Type scales (tuned for 1920×1080)

(You can treat these as target ranges.)

Headings (IBM Plex Sans)

H1 / Hero: 88–108 px, 700, line-height 1.02–1.08, tracking -0.5%

H2 / Section: 56–72 px, 600, line-height 1.08–1.15

H3: 38–46 px, 600, line-height 1.15

Labels (IBM Plex Sans)

Label / kicker: 16–20 px, 500, uppercase, letter-spacing +0.12em to +0.18em

Body (IBM Plex Serif)

Body: 26–30 px, 400, line-height 1.45–1.55

Small body: 22–24 px, 400, line-height 1.5

Caption: 18–20 px, 400, line-height 1.35–1.45, color text.muted

Hierarchy pattern

Use size + weight + whitespace for hierarchy

Avoid “everything bold”

One slide = one main sentence the audience remembers

5) Rules, Lines, and Shapes
Shape language

Hard edges only: 0 px radius

No pill badges, no rounded cards.

Rules (dividers)

On light backgrounds: 1px rule (#D8D8D8)

On dark/photo backgrounds: 1px with rgba(255,255,255,0.25–0.35)

Accent rule thickness: 2px (stage accent color)

Shadows

None (no soft UI shadows)

6) Image System
Core image principle

Images must feel like they came from one room, one era:
a 1920s inventor’s workshop photographed with a period camera.

Photography style

Photorealistic black & white

Moderate contrast

Slight film softness (subtle)

Minimal grain (do not overdo)

Natural window light preferred

No modern objects, no modern materials, no digital displays

Composition

“Lived-in but not chaotic”

Tools slightly rotated

Notebook half open

A pencil placed naturally

Avoid perfect symmetry everywhere (a little human angle is good)

Keep backgrounds simple (no clutter explosions)

The implicit workshop metaphor

Never named in text. Communicated visually through recurring motifs:

Preparation: drafting table, annotated drawing, slide rule, engineering book

Execution: cast-iron machine / press (simple, powerful)

Verification: measuring tools (calipers, dial gauge, loupe, balance scale)

Enablement: the same machine + jigs/fixtures/guides/stops surrounding it

“Same machine twice” consistency requirement

The machine must clearly be the same across two slides (execute + enablement), but:

Different camera angle

Different framing

Different lighting moment (still consistent room/light source)

Enablement includes fixtures; execution does not

Machine identity anchors (include in prompts):

Cast-iron three-spoke flywheel on the left side

Vertical press arm

Brass adjustment knob/screw assembly

Riveted base plate

Small metal serial plate on front/right side

Scrim / overlay for readability

For full-bleed images with text:

Use a scrim overlay layer to ensure legibility.

Typical values:

Dark image: 10–20% black scrim across whole slide

Busy midtones: add a localized text backing panel (rectangular, hard-edged) at 70–85% opacity (black or off-white depending on background)

Avoid heavy blur/vignette effects.


8) Slide Numbering

Yes to slide numbers, but minimal:

Bottom-right

16–18 px

IBM Plex Sans 400

40–60% opacity (muted)

No “/total” unless you strongly want it—keep it understated.

9) Content Formatting Conventions
Bullets

Use sparingly.

Prefer short statements over long paragraphs.

Max 4–5 bullets.

Use whitespace between bullets (not dense lists).

Callouts

One short callout per slide.

Highlight with accent rule or one accented word, not colored boxes.

Quotes

If used, format as:

Serif body slightly larger

Attribution small, sans

Keep quotes short.

10) Slide Template Catalog

### Template 1: Title (Full-Bleed Photo)
- **When to use:** Opening slide or closing slide
- **Background:** Full-bleed B&W workshop photograph with subtle dark gradient for text legibility
- **Layout:** Text anchored left, vertically centered. Left margin ~8%. Text occupies left 55–60%
- **Elements:** Speaker attribution line (small caps, tracked-out, top-left), large bold headline (2–3 lines), slide number bottom-right
- **Closing variant:** No attribution; headline vertically centered with subtitle and bold summary line below
- **Typography:** Attribution: IBM Plex Sans regular ~14px, white, all-caps, letter-spacing 0.15em. Headline: IBM Plex Sans bold ~54–60px, white
- **Image required:** Yes — full-bleed B&W photograph

### Template 2: Dark Statement
- **When to use:** Thesis statements, provocative claims, section openers that need dramatic impact
- **Background:** Solid near-black (#1a1a1a). No image
- **Layout:** Text block in left half, vertically centered. ~8% left margin. Large negative space on right
- **Elements:** Section label (small caps + vertical accent bar), bold headline (2–3 lines), horizontal rule (~60px, ~2px, muted), optional supporting text below rule
- **Typography:** Label: IBM Plex Sans regular ~12px, white at 60% opacity, all-caps. Headline: IBM Plex Sans extra-bold ~48–54px, white. Supporting: IBM Plex Sans regular ~24px, white at 85%
- **Image required:** No

### Template 3: Light Statement
- **When to use:** Bold claims on light background; the light counterpart to Dark Statement
- **Background:** Solid warm light gray (bg.light). No image
- **Layout:** Text in left half, starting upper third. ~8% left margin. Massive negative space right and bottom
- **Elements:** Section label (small caps + vertical accent bar), horizontal dash (~50px, ~3px) above headline, bold headline (2–3 lines), supporting text below
- **Typography:** Label: IBM Plex Sans regular ~12px, dark gray, all-caps. Headline: IBM Plex Sans extra-bold ~48–54px, near-black. Supporting: IBM Plex Sans regular ~20px, medium gray
- **Image required:** No

### Template 4: Transition (Full-Bleed Photo)
- **When to use:** Section transitions marking major topic shifts
- **Background:** Full-bleed B&W workshop photograph
- **Layout:** Text anchored left, vertically centered. Text occupies left 40–50%
- **Elements:** Section label (small caps, white, reduced opacity, names the section being introduced), short aphoristic headline (1–2 lines), optional subtitle
- **Typography:** Label: IBM Plex Sans regular ~11px, white at 50–60%, all-caps. Headline: IBM Plex Sans bold ~40–46px, white
- **Distinction from Title:** Section label (not attribution), shorter/more aphoristic headline (a principle, not a topic)
- **Image required:** Yes — full-bleed B&W photograph

### Template 5: Figure (Light Background with Diagram)
- **When to use:** Process flows, system diagrams, architectural overviews
- **Background:** Solid warm light gray (bg.light). No image
- **Layout:** Title block top-left, full-width diagram area in center, optional summary below
- **Elements:** Section label + vertical accent bar, headline, horizontal rule under headline (~35–40% width), figure caption in monospace (e.g., "FIG. 03 — [DESCRIPTION]"), diagram with colored accent bars on boxes, arrows (solid for primary flow, dashed for feedback), step numbers in circles, monospaced technical labels, bold summary preceded by short colored accent bar, italic annotation
- **Typography:** Headline: IBM Plex Sans bold ~40–44px. Figure caption: IBM Plex Mono ~11px, gray, all-caps. Diagram labels: IBM Plex Sans bold ~14–16px (colored). Body: IBM Plex Sans regular ~14px. Summary: IBM Plex Sans bold ~22–26px. Annotation: IBM Plex Serif italic ~16–18px, gray
- **Optional:** Blueprint cartouche (bottom-right engineering reference block)
- **Image required:** No

### Template 6: Comparison (Two-Column Light)
- **When to use:** Side-by-side comparison of two systems, processes, or approaches
- **Background:** Solid warm light gray (bg.light). No image
- **Layout:** Title block top-left, two side-by-side columns (~50/50) with vertical flows, summary below
- **Elements:** Section label, headline, horizontal rule, two named columns each with bold heading + subtitle + vertical stack of labeled rows with accent bars and downward arrows, optional callout box with dashed border, summary statement + italic annotation
- **Typography:** Same as Figure template. Column headings: IBM Plex Sans bold ~14px, all-caps
- **Image required:** No

### Template 7: 50/50 Split (Text Left / Photo Right)
- **When to use:** Workhorse content slide — explanations, principles, lists, technical details
- **Background:** Left: warm light gray. Right: full-bleed B&W photograph. Clean vertical division at midpoint
- **Layout:** Text entirely in left panel (~50%). Photo fills right panel edge-to-edge. No overlap
- **Elements:** Section label + vertical accent bar (top-left of text panel), headline, body text, optional horizontal rule, optional bold summary line, optional italic annotation. Thin vertical separator at panel boundary
- **Typography:** Headline: IBM Plex Sans bold ~30–36px (smaller than statement templates). Body: IBM Plex Sans regular ~15–17px, line-height 1.5. Summary: IBM Plex Sans bold ~16–18px. Annotation: IBM Plex Serif italic ~15px, gray
- **Variants:** Narrative (paragraphs), List (many short single-line items), Technical reference (structured data)
- **Image required:** Yes — right panel B&W photograph

### Template 8: 50/50 Split (Photo Left / Text Right)
- **When to use:** Reversed split for visual variety; especially good for technical reference content
- **Background:** Left: full-bleed B&W photograph. Right: warm light gray
- **Layout:** Photo fills left panel. Text in right panel with colored vertical accent line (~2px, teal/indigo) running nearly full height along left edge
- **Elements:** Section label, headline, body text, optional structured data block (label-value rows in monospace with horizontal rules and downward arrows), optional monospaced tool/command references
- **Typography:** Same as Template 7, plus monospaced labels: IBM Plex Mono ~11–12px, gray, all-caps
- **Image required:** Yes — left panel B&W photograph

11) Image Prompt Kit (Reusable)

Use these as building blocks for your image generation system.

Global constraints (append to all image prompts)

“photorealistic black-and-white photograph”

“1920s inventor’s workshop”

“period-accurate objects only”

“natural window light, moderate contrast”

“slight film softness, minimal grain”

“no modern objects, no digital screens, no futuristic motifs”

“clean composition, lived-in but not chaotic”

Title slide prompt (wide workshop)

Wide interior photograph of a 1920s inventor’s workshop, wooden workbench under a tall window, drafting table with vellum plans and a slide rule, a cast-iron mechanical press in the background, brass measuring instruments on the bench, quiet atmosphere, natural window light, moderate contrast, subtle film softness, minimal grain, photorealistic black-and-white, period-accurate objects only.

Execute slide prompt (machine alone)

Medium shot of a cast-iron mechanical press in a 1920s workshop, identifiable three-spoke flywheel on the left, vertical press arm, brass adjustment screw, riveted base plate and small serial plate, no extra fixtures attached, strong window light, composed and simple, photorealistic black-and-white, slight film softness, minimal grain, period-accurate.

Enablement slide prompt (same machine + fixtures)

Medium shot from a different angle of the same cast-iron mechanical press (three-spoke flywheel on the left, brass adjustment screw, riveted base plate, serial plate), now surrounded by brass jigs and fixtures: alignment rails, adjustable stops, clamps, guide plates, all period-accurate, engineered and modular, natural window light, photorealistic black-and-white, slight film softness, minimal grain.

Verify slide prompt (instruments)

Close-up photograph of precision measuring instruments on a wooden bench in a 1920s workshop: calipers, dial gauge, loupe magnifier on an articulated brass arm, and a balance scale, arranged with human imperfection, natural window light, photorealistic black-and-white, moderate contrast, slight film softness, minimal grain, period-accurate objects only.

Prepare slide prompt (drafting + knowledge)

Close-up of a drafting table in a 1920s workshop: vellum sheet with clean ink lines, measurement annotations, cross-section notes, slide rule, compass, straightedge, and an open engineering book with handwritten calculations nearby, lived-in but not cluttered, natural window light, photorealistic black-and-white, slight film softness, minimal grain.

12) Do / Don’t Checklist
Do

One accent per slide

Big negative space

Serif body, sans headings

Hard edges, thin rules

B/W workshop imagery with consistent room/lighting

Scrim overlays for readability

Machine appears twice (execute + enablement), different angle each time

Don’t

No raw materials metaphors (metal billets, powders, chemicals)

No AI clichés (brains, circuits, holograms)

No gradients, glows, shadows

No rounded cards

No heavy grain or distressed textures

No cluttered compositions

13) Implementation Notes for SlideKit

Favor absolute placement with consistent anchors:

Title block top-left anchored to safe margin

Rules align to same x coordinate across deck

Captions align to same baseline grid

Because SlideKit is deterministic, lean into:

Over-sized typography

Precise alignment

Strong asymmetry with balance


{
  "theme_name": "AI Workshop (B/W 1920s Industrial)",
  "version": "1.0",
  "canvas": {
    "aspect_ratio": "16:9",
    "width": 1920,
    "height": 1080,
    "safe_margin_pct": 0.08,
    "notes": [
      "Assume absolute positioning on a 1920x1080 canvas (SlideKit-style).",
      "Keep critical text inside safe area."
    ]
  },
  "aesthetic_dna": {
    "vibe_keywords": ["industrial", "editorial", "disciplined", "quiet competence", "engineered leverage"],
    "avoid_keywords": [
      "AI futurism",
      "circuit boards",
      "neon",
      "glows",
      "brains",
      "cloud motifs",
      "sci-fi UI",
      "art deco ornament",
      "distressed/grunge nostalgia"
    ],
    "composition_principles": [
      "Few elements placed precisely",
      "Large negative space",
      "Hard edges and thin rules",
      "One accent color per slide",
      "Left-aligned typography by default"
    ]
  },
  "tokens": {
    "colors": {
      "bg": {
        "dark": "#0F1113",
        "light": "#F2F2F0"
      },
      "text": {
        "dark": "#111111",
        "light": "#FFFFFF",
        "muted": "#6E6E6E"
      },
      "rule": {
        "light": "#D8D8D8",
        "dark_rgba": "rgba(255,255,255,0.30)"
      },
      "accent": {
        "prepare": "#27364A",
        "model": "#1B9E8A",
        "verify": "#3F57B3",
        "enable": "#97A0AA"
      },
      "chart_defaults": {
        "mono_primary": "#111111",
        "mono_secondary": "#6E6E6E",
        "gridline": "#D8D8D8",
        "single_accent_allowed": true
      }
    },
    "effects": {
      "corner_radius_px": 0,
      "shadow": "none",
      "border": {
        "width_px": 1,
        "color_light": "#D8D8D8",
        "color_dark_rgba": "rgba(255,255,255,0.25)"
      },
      "rules": {
        "thin_px": 1,
        "accent_px": 2
      },
      "scrim": {
        "full_bleed_dark_pct_black": 0.15,
        "full_bleed_range_black": [0.10, 0.20],
        "localized_text_panel_opacity_range": [0.70, 0.85],
        "notes": [
          "Use scrims to ensure legibility on full-bleed photos.",
          "Prefer subtle overlays; avoid heavy blurs/vignettes."
        ]
      }
    },
    "spacing": {
      "base_px": 8,
      "scale_px": [8, 16, 24, 40, 64],
      "major_block_gap_px": [64, 96],
      "minor_gap_px": [16, 24]
    }
  },
  "typography": {
    "fonts": {
      "heading": {
        "family": "IBM Plex Sans",
        "fallback": "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      },
      "body": {
        "family": "IBM Plex Serif",
        "fallback": "ui-serif, Georgia, Times New Roman, Times, serif"
      },
      "mono": {
        "family": "IBM Plex Mono",
        "fallback": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
      }
    },
    "alignment": {
      "default": "left",
      "avoid": ["centered paragraphs", "wide full-width text blocks"]
    },
    "styles": {
      "kicker_label": {
        "font_family": "heading",
        "font_weight": 500,
        "font_size_px": [16, 20],
        "letter_spacing_em": [0.12, 0.18],
        "text_transform": "uppercase",
        "line_height": 1.2,
        "color": "text.muted"
      },
      "h1_hero": {
        "font_family": "heading",
        "font_weight": 700,
        "font_size_px": [88, 108],
        "letter_spacing_em": [-0.01, -0.005],
        "line_height": [1.02, 1.08],
        "color_on_light": "text.dark",
        "color_on_dark": "text.light"
      },
      "h2_section": {
        "font_family": "heading",
        "font_weight": 600,
        "font_size_px": [56, 72],
        "letter_spacing_em": [0.0, -0.005],
        "line_height": [1.08, 1.15],
        "color_on_light": "text.dark",
        "color_on_dark": "text.light"
      },
      "h3_sub": {
        "font_family": "heading",
        "font_weight": 600,
        "font_size_px": [38, 46],
        "line_height": 1.15,
        "color_on_light": "text.dark",
        "color_on_dark": "text.light"
      },
      "body": {
        "font_family": "body",
        "font_weight": 400,
        "font_size_px": [26, 30],
        "line_height": [1.45, 1.55],
        "color_on_light": "text.dark",
        "color_on_dark": "text.light",
        "notes": [
          "Avoid italics; emphasize via weight, whitespace, or a single accent word.",
          "Prefer 1–3 sentence blocks over long paragraphs."
        ]
      },
      "caption": {
        "font_family": "body",
        "font_weight": 400,
        "font_size_px": [18, 20],
        "line_height": [1.35, 1.45],
        "color": "text.muted"
      },
      "slide_number": {
        "font_family": "heading",
        "font_weight": 400,
        "font_size_px": [16, 18],
        "position": "bottom-right",
        "opacity": 0.55,
        "color_on_light": "text.muted",
        "color_on_dark": "text.light"
      }
    }
  },
  "layout_system": {
    "default_reading_flow": "top-left to bottom-right",
    "templates": [
      {
        "id": "title_full_bleed",
        "intent": "Opening/closing slide with full-bleed workshop photo",
        "structure": ["full_bleed_photo", "scrim_overlay", "left_aligned_title_block", "optional_attribution_label"],
        "image_required": true
      },
      {
        "id": "dark_statement",
        "intent": "High-impact thesis or provocative claim on solid black",
        "structure": ["solid_dark_bg", "section_label_with_accent_bar", "bold_headline", "horizontal_rule", "optional_supporting_text"],
        "image_required": false
      },
      {
        "id": "light_statement",
        "intent": "Bold claim on light background; light counterpart to dark_statement",
        "structure": ["light_bg", "section_label_with_accent_bar", "horizontal_dash_above_headline", "bold_headline", "supporting_text"],
        "image_required": false
      },
      {
        "id": "transition_full_bleed",
        "intent": "Section transitions; dramatic, minimal",
        "structure": ["full_bleed_photo", "scrim_overlay", "section_label", "aphoristic_headline"],
        "rules": ["No bullets", "No secondary paragraphs", "One principle only"],
        "image_required": true
      },
      {
        "id": "figure_diagram",
        "intent": "Process flows, system diagrams, architectural overviews",
        "structure": ["light_bg", "title_block", "figure_caption_mono", "diagram_with_accent_bars", "summary_statement", "italic_annotation"],
        "rules": ["Engineering-drawing aesthetic", "One accent color per diagram element", "Optional blueprint cartouche"],
        "image_required": false
      },
      {
        "id": "comparison_two_column",
        "intent": "Side-by-side comparison of two systems or processes",
        "structure": ["light_bg", "title_block", "two_parallel_flow_columns", "callout_box", "summary_statement"],
        "image_required": false
      },
      {
        "id": "split_text_left_photo_right",
        "intent": "Workhorse content slide; explanations, lists, technical details",
        "structure": ["left_text_panel_light", "right_photo_panel_bw", "section_label", "headline", "body_text"],
        "variants": ["narrative", "list", "technical_reference"],
        "image_required": true
      },
      {
        "id": "split_photo_left_text_right",
        "intent": "Reversed split for variety; good for structured/technical content",
        "structure": ["left_photo_panel_bw", "right_text_panel_light", "colored_vertical_accent_line", "structured_data_rows"],
        "image_required": true
      }
    ]
  },
  "imagery": {
    "core_style": {
      "mode": "photorealistic",
      "palette": "black_and_white",
      "era": "1920s",
      "camera_feel": [
        "period camera look",
        "slight film softness",
        "minimal grain",
        "moderate contrast",
        "natural window light"
      ],
      "avoid": ["heavy grain", "distressed textures", "modern objects", "digital screens", "futuristic motifs"]
    },
    "implicit_metaphor": {
      "name": "inventor_workshop_implicit_only",
      "rule": "Never name the metaphor in on-slide text; let recurring objects carry the association.",
      "motifs": {
        "prepare": ["drafting table", "vellum plans", "slide rule", "engineering book", "handwritten calculations"],
        "execute": ["cast-iron mechanical press (same machine)"],
        "verify": ["calipers", "dial gauge", "loupe magnifier", "balance scale"],
        "enable": ["same press + brass jigs/fixtures: alignment rails, stops, clamps, guide plates"]
      }
    },
    "machine_consistency": {
      "require_same_machine_twice": true,
      "variation_rules": [
        "Different camera angle",
        "Different framing",
        "Same workshop environment and era",
        "Execution shot: machine alone (no fixtures)",
        "Enablement shot: machine with fixtures/jigs installed"
      ],
      "identity_anchors": [
        "cast-iron three-spoke flywheel on left",
        "vertical press arm",
        "brass adjustment screw/knob",
        "riveted base plate",
        "small metal serial plate on front/right side"
      ]
    },
    "prompt_fragments": {
      "global_append": [
        "photorealistic black-and-white photograph",
        "1920s inventor’s workshop",
        "period-accurate objects only",
        "natural window light",
        "moderate contrast",
        "slight film softness",
        "minimal grain",
        "no modern objects",
        "no digital screens",
        "no futuristic motifs",
        "composed but not staged"
      ]
    }
  },
  "content_conventions": {
    "bullets": {
      "use_sparingly": true,
      "max_count": 5,
      "prefer_short_statements": true,
      "spacing_between_bullets_px": [12, 18]
    },
    "callouts": {
      "max_per_slide": 1,
      "style": "accent_rule_or_single_accent_word",
      "avoid": ["colored boxes", "glow effects", "multiple highlights"]
    },
    "quotes": {
      "allowed": true,
      "quote_font": "body",
      "attribution_font": "heading",
      "keep_short": true
    }
  },
  "do_dont": {
    "do": [
      "Use one stage accent per slide max",
      "Use big negative space",
      "Left-align text blocks",
      "Use thin rules; hard edges",
      "Use scrims for legibility on photos",
      "Keep imagery consistent: same workshop, same era",
      "Repeat the machine twice (execute + enable) with different angles"
    ],
    "dont": [
      "No raw materials metaphors (billets, powders, chemicals)",
      "No AI clichés (brains, circuit boards, neon)",
      "No gradients or glows",
      "No rounded cards or soft shadows",
      "No heavy film grain or distressed looks",
      "No multi-accent slides"
    ]
  }
}