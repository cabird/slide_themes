// slidekit.bundle.min.js
var I = { idCounter: 0, config: null, safeRectCache: null, loadedFonts: /* @__PURE__ */ new Set(), measureContainer: null, measureCache: /* @__PURE__ */ new Map(), fontWarnings: [], injectedFontLinks: /* @__PURE__ */ new Set(), transformIdCounter: 0 };
function te() {
  I.idCounter = 0;
}
function Z() {
  return I.idCounter += 1, `sk-${I.idCounter}`;
}
var we = { xs: 8, sm: 16, md: 24, lg: 32, xl: 48, section: 80 };
function W(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    let t = I.config?.spacing || we;
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    let n = Object.keys(t).join(", ");
    throw new Error(`Unknown spacing token "${e}". Available tokens: ${n}`);
  }
  return e;
}
var Xt = { x: 0, y: 0, anchor: "tl", layer: "content", opacity: 1, style: null, className: "", valign: "top" };
function Se(e, t = {}) {
  let n = { ...Xt, ...t }, o = {};
  for (let r of Object.keys(n)) r !== "id" && (r === "style" ? o[r] = e[r] !== void 0 ? e[r] : {} : o[r] = e[r] !== void 0 ? e[r] : n[r]);
  for (let r of Object.keys(e)) r !== "id" && o[r] === void 0 && (o[r] = e[r]);
  return o;
}
function J(e, t = {}) {
  let { id: n, ...o } = t, r = n || Z(), l = Se(o, { overflow: "visible" });
  return { id: r, type: "el", content: e, props: l, _layoutFlags: {} };
}
var Ae = /* @__PURE__ */ new Set(["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"]);
function ne(e, t, n, o, r) {
  if (typeof r != "string" || !Ae.has(r)) throw new Error(`Invalid anchor "${r}". Must be one of: ${Array.from(Ae).join(", ")}`);
  let l, i = r[1];
  if (i === "l") l = e;
  else if (i === "c") l = e - n / 2;
  else if (i === "r") l = e - n;
  else throw new Error(`Invalid anchor column "${i}" in anchor "${r}"`);
  let s, d = r[0];
  if (d === "t") s = t;
  else if (d === "c") s = t - o / 2;
  else if (d === "b") s = t - o;
  else throw new Error(`Invalid anchor row "${d}" in anchor "${r}"`);
  return { left: l, top: s };
}
function Ut(e) {
  if (e.startsWith("--") || !e.includes("-")) return e;
  let t = e;
  return t.startsWith("-ms-") ? t = "ms-" + t.slice(4) : t.startsWith("-webkit-") ? t = "Webkit-" + t.slice(8) : t.startsWith("-moz-") ? t = "Moz-" + t.slice(5) : t.startsWith("-o-") && (t = "O-" + t.slice(3)), t.replace(/-([a-z])/g, (n, o) => o.toUpperCase());
}
function Kt(e) {
  let t = ["Webkit", "Moz", "ms", "O"];
  for (let n of t) if (e.startsWith(n) && e.length > n.length) {
    let o = e.slice(n.length);
    if (o[0] >= "A" && o[0] <= "Z") return o[0].toLowerCase() + o.slice(1);
  }
  return e;
}
var Fe = /* @__PURE__ */ new Set(["textAlign", "textDecoration", "textTransform", "textIndent", "textShadow", "letterSpacing", "wordSpacing", "whiteSpace", "wordBreak", "wordWrap", "textOverflow", "fontSize", "fontFamily", "fontWeight", "fontStyle", "fontVariant", "lineHeight", "backgroundColor", "background", "backgroundImage", "backgroundSize", "backgroundPosition", "backgroundRepeat", "border", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderTop", "borderBottom", "borderLeft", "borderRight", "padding", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "boxShadow", "cursor", "visibility", "verticalAlign", "listStyle", "outline"]);
var Vt = /* @__PURE__ */ new Set(["x", "y", "w", "h", "maxW", "maxH", "anchor", "layer", "valign", "overflow", "style", "opacity", "rotate", "className", "shadow", "z", "gap", "align", "bounds", "scale", "clip", "_layoutFlags", "id", "dash", "type", "arrow", "color", "thickness", "label", "labelStyle", "fromAnchor", "toAnchor", "fromId", "toId", "connectorType", "text", "src", "alt"]);
function Rt(e) {
  let t = {}, n = [], o = e.id || "(anonymous)";
  for (let r of Object.keys(e)) Vt.has(r) || Fe.has(r) && (t[r] = e[r], n.push({ type: "misplaced_css_prop", elementId: o, property: r, value: e[r], message: `CSS property "${r}" should be inside style: { ${r}: ${JSON.stringify(e[r])} }. It was auto-promoted but please move it to style for clarity.`, suggestion: `Move "${r}" into the style object: style: { ${r}: ... }` }));
  return { cssProps: t, warnings: n };
}
var kt = /* @__PURE__ */ new Set(["position", "top", "left", "right", "bottom", "inset", "insetBlock", "insetBlockStart", "insetBlockEnd", "insetInline", "insetInlineStart", "insetInlineEnd", "width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight", "blockSize", "inlineSize", "minBlockSize", "maxBlockSize", "minInlineSize", "maxInlineSize", "display", "overflow", "overflowX", "overflowY", "overflowBlock", "overflowInline", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginBlock", "marginBlockStart", "marginBlockEnd", "marginInline", "marginInlineStart", "marginInlineEnd", "transform", "translate", "rotate", "scale", "contain", "contentVisibility"]);
var Zt = { position: "SlideKit uses absolute positioning; use x/y/anchor props", top: "Use the y prop instead", left: "Use the x prop instead", right: "Use x and w props instead", bottom: "Use y and h props instead", width: "Use the w prop instead", height: "Use the h prop instead", display: "The container display mode is managed by SlideKit", margin: "Margins break absolute positioning; use x/y for spacing", overflow: "Use SlideKit's overflow prop (e.g., overflow: 'clip')", transform: "Use the rotate prop for rotation; transform is blocked because the library owns positioning", translate: "Use x/y props for positioning", rotate: "Use the rotate prop instead (e.g., rotate: 45)", scale: "Scaling is not supported; use w/h to control size", contain: "contain can suppress layout/paint and conflict with measurement", contentVisibility: "contentVisibility can suppress rendering and conflict with measurement" };
function oe(e = {}, t = "unknown") {
  let n = [], o = {};
  for (let [r, l] of Object.entries(e)) {
    let i = Ut(r), s = Kt(i), d = kt.has(i) ? i : kt.has(s) ? s : null;
    if (d) {
      n.push({ type: "blocked_css_property", property: i, originalProperty: r, value: l, suggestion: Zt[d] || "This property conflicts with SlideKit's positioning system" });
      continue;
    }
    o[i] = l;
  }
  return { filtered: o, warnings: n };
}
function ke(e) {
  let t = e.trim();
  if (t.includes(",")) throw new Error(`_baselineCSS prefix must be a single selector, got: ${t}`);
  let n = `${t}${t}${t}`;
  return `
/* ===================================================================
 * SlideKit Baseline CSS Reset
 * Tripled attribute selector -> specificity (0,3,0+), always beats
 * Reveal.js selectors (max ~0,2,4).  User inline styles still win
 * because inline specificity (1,0,0) > any selector.
 * =================================================================== */

/* --- Container boundary: establish a clean context --- */
${n} {
  text-align: left;
  font-size: initial;
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-transform: none;
  text-decoration: none;
  text-shadow: none;
  white-space: normal;
  word-break: normal;
  word-wrap: normal;
  overflow-wrap: normal;
  hyphens: manual;
  box-sizing: border-box;
  color: inherit;
}
${n} *, ${n} *::before, ${n} *::after {
  box-sizing: inherit;
}

/* --- Direct children reset --- */
${n} > * {
  margin: 0;
  padding: 0;
  text-align: inherit;
  line-height: inherit;
}

/* --- Paragraphs ---
 * Counters: .reveal p { margin: 20px 0; line-height: 1.3 } */
${n} p {
  margin: 0;
  padding: 0;
  line-height: inherit;
}

/* --- Headings ---
 * Counters: .reveal h1-h6 { margin: 0 0 20px 0; font-weight: 600;
 *   text-transform: uppercase; text-shadow; color; font-size: 2.5em/etc;
 *   font-family; line-height: 1.2; letter-spacing } */
${n} h1, ${n} h2, ${n} h3,
${n} h4, ${n} h5, ${n} h6 {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  text-transform: none;
  text-shadow: none;
  letter-spacing: inherit;
  word-wrap: normal;
}

/* --- Lists ---
 * Counters: .reveal ol/ul/dl { display: inline-block; margin: 0 0 0 1em }
 *           .reveal ul ul   { display: block; margin-left: 40px }
 *           .reveal ul ul ul { list-style-type: circle } */
${n} ul, ${n} ol, ${n} dl {
  margin: 0;
  padding: 0;
  display: block;
  text-align: inherit;
  list-style-position: outside;
}
${n} li {
  margin: 0;
  padding: 0;
}

/* --- Definition lists ---
 * Counters: .reveal dt { font-weight: bold }
 *           .reveal dd { margin-left: 40px } */
${n} dt {
  font-weight: inherit;
}
${n} dd {
  margin: 0;
  padding: 0;
}

/* --- Media: prevent Reveal's responsive constraints ---
 * Counters: .reveal img/video/iframe { max-width: 95%; max-height: 95% }
 *           .reveal img { margin: 20px 0 }
 *           .reveal iframe { z-index: 1 } */
${n} img, ${n} svg, ${n} video,
${n} canvas, ${n} iframe {
  max-width: none;
  max-height: none;
  margin: 0;
}
${n} iframe {
  z-index: auto;
}
${n} img, ${n} svg {
  vertical-align: baseline;
}

/* --- Blockquote ---
 * Counters: .reveal blockquote { width: 70%; margin: 20px auto; padding: 5px;
 *   font-style: italic; background: rgba(...); box-shadow; position: relative }
 *           .reveal blockquote p:first/last-child { display: inline-block } */
${n} blockquote {
  margin: 0;
  padding: 0;
  width: auto;
  position: static;
  font-style: inherit;
  background: none;
  box-shadow: none;
}
${n} q {
  font-style: inherit;
}

/* --- Pre/Code ---
 * Counters: .reveal pre { width: 90%; margin: 20px auto; font-size: 0.55em;
 *   position: relative; box-shadow; line-height: 1.2em }
 *           .reveal code { font-family: monospace; text-transform: none }
 *           .reveal pre code { padding: 5px; max-height: 400px } */
${n} pre {
  margin: 0;
  padding: 0;
  width: auto;
  position: static;
  font-size: 1em;
  line-height: 1.2;
  white-space: pre;
  word-wrap: normal;
  box-shadow: none;
  text-align: inherit;
}
${n} code {
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: inherit;
  text-transform: none;
  white-space: normal;
}
${n} pre code {
  display: block;
  padding: 0;
  overflow: visible;
  max-height: none;
  word-wrap: normal;
  white-space: pre;
}

/* --- Tables ---
 * Counters: .reveal table { margin: auto }
 *           .reveal table th/td { padding: 0.2em 0.5em; border-bottom: 1px solid }
 *           .reveal table th { font-weight: bold } */
${n} table {
  margin: 0;
  border-collapse: collapse;
  border-spacing: 0;
}
${n} th, ${n} td {
  padding: 0;
  border: none;
  text-align: inherit;
  font-weight: inherit;
}

/* --- Small ---
 * Counters: .reveal small { display: inline-block; font-size: 0.6em;
 *   line-height: 1.2em; vertical-align: top } */
${n} small {
  display: inline;
  font-size: inherit;
  line-height: inherit;
  vertical-align: baseline;
}

/* --- Links ---
 * Counters: .reveal a { color: var(--r-link-color); text-decoration: none;
 *   transition: color .15s; position: relative }
 *           .reveal a:hover { color: var(--r-link-color-hover) } */
${n} a, ${n} a:hover {
  color: inherit;
  text-decoration: inherit;
  background: none;
  text-shadow: none;
}
`;
}
var ge = { slide: { w: 1920, h: 1080 }, safeZone: { left: 120, right: 120, top: 90, bottom: 90 }, strict: false, minFontSize: 24, fonts: [], spacing: { ...we } };
async function Te(e = {}) {
  let t = { slide: { ...ge.slide, ...e.slide || {} }, safeZone: { ...ge.safeZone, ...e.safeZone || {} }, strict: e.strict !== void 0 ? e.strict : ge.strict, minFontSize: e.minFontSize !== void 0 ? e.minFontSize : ge.minFontSize, fonts: e.fonts || ge.fonts, spacing: { ...we, ...e.spacing || {} } };
  I.config = t;
  let n = t.safeZone, o = t.slide, r = o.w - n.left - n.right, l = o.h - n.top - n.bottom;
  if (r <= 0 || l <= 0) throw new Error(`Invalid safeZone configuration: computed safe rect is ${r}x${l}. Check slide dimensions (${o.w}x${o.h}) and safeZone margins.`);
  return I.safeRectCache = { x: n.left, y: n.top, w: r, h: l }, I.loadedFonts = /* @__PURE__ */ new Set(), I.fontWarnings = [], I.measureCache = /* @__PURE__ */ new Map(), t.fonts.length > 0 && await qt(t.fonts), t;
}
async function qt(e) {
  let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let r of e) r.source === "google" && Qt(r);
  let o = [];
  for (let r of e) {
    let l = r.family, i = r.weights || [400];
    for (let s of i) {
      let d = `${s} 16px "${l}"`, c = `${l}:${s}`, a = Jt(d, c, n, 5e3);
      o.push(a);
    }
  }
  await Promise.all(o);
  try {
    await document.fonts.ready;
  } catch {
  }
}
async function Jt(e, t, n, o) {
  try {
    let r = await Promise.race([document.fonts.load(e, n), new Promise((l, i) => setTimeout(() => i(new Error("timeout")), o))]);
    Array.isArray(r) && r.length > 0 ? I.loadedFonts.add(t) : document.fonts.check(e, n) ? I.loadedFonts.add(t) : I.fontWarnings.push({ type: "font_load_failed", font: t, message: `Font "${t}" could not be loaded. Falling back to system font.` });
  } catch {
    I.fontWarnings.push({ type: "font_load_timeout", font: t, message: `Font "${t}" failed to load within timeout. Falling back to system font.` });
  }
}
function Qt(e) {
  let t = e.family.replace(/ /g, "+"), n = (e.weights || [400]).join(";"), o = `https://fonts.googleapis.com/css2?family=${t}:wght@${n}&display=swap`;
  if (document.querySelector(`link[href="${o}"]`)) return;
  let l = document.createElement("link");
  l.rel = "stylesheet", l.href = o, document.head.appendChild(l), I.injectedFontLinks.add(l);
}
function Oe() {
  if (!I.safeRectCache) throw new Error("SlideKit.init() must be called before safeRect()");
  return { ...I.safeRectCache };
}
function en(e, { ratio: t = 0.5, gap: n = 0 } = {}) {
  let o = W(n), r = Math.round((e.w - o) * t), l = e.w - o - r;
  return { left: { x: e.x, y: e.y, w: r, h: e.h }, right: { x: e.x + r + o, y: e.y, w: l, h: e.h } };
}
function he() {
  return I.config ? JSON.parse(JSON.stringify(I.config)) : null;
}
function le(e, t) {
  for (let [n, o] of Object.entries(t)) n.startsWith("--") ? e.style.setProperty(n, o) : e.style[n] = o;
}
function tn() {
  if (I.measureContainer && I.measureContainer.parentNode) return;
  if (typeof document > "u" || !document.body) throw new Error("SlideKit.measure requires a DOM with document.body available.");
  let e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-9999px", e.style.top = "-9999px", e.style.visibility = "hidden", e.style.overflow = "hidden", e.style.pointerEvents = "none", e.setAttribute("data-sk-role", "measure-container");
  let t = document.createElement("style");
  t.textContent = ke("[data-sk-measure]"), e.appendChild(t), document.body.appendChild(e), I.measureContainer = e;
}
function nn(e, t) {
  let n = t.style ? JSON.stringify(t.style, Object.keys(t.style).sort()) : null;
  return JSON.stringify(["el", e, t.w ?? null, n, t.className || ""]);
}
async function V(e, t = {}) {
  let n = nn(e, t);
  if (I.measureCache.has(n)) return I.measureCache.get(n);
  tn();
  let o = document.createElement("div");
  if (o.style.boxSizing = "border-box", t.w != null && (o.style.width = `${t.w}px`), t.className && (o.className = t.className), t.style) {
    let { filtered: i } = oe(t.style, "el");
    le(o, i);
  }
  o.setAttribute("data-sk-measure", ""), o.innerHTML = e, I.measureContainer.appendChild(o);
  let r = o.querySelectorAll("img");
  r.length > 0 && await Promise.all([...r].map((s) => s.complete ? Promise.resolve() : new Promise((d) => {
    let c = setTimeout(d, 3e3), a = () => {
      clearTimeout(c), d();
    };
    s.addEventListener("load", a, { once: true }), s.addEventListener("error", a, { once: true });
  })));
  let l = { w: o.offsetWidth, h: o.scrollHeight };
  return I.measureContainer.removeChild(o), I.measureCache.set(n, l), l;
}
function Ne(e, t = {}) {
  return { _rel: "below", ref: e, gap: W(t.gap ?? 0) };
}
function $(e, t, n) {
  let o = e.get(t);
  if (o === void 0) throw new Error(n ?? `Map missing expected key: ${String(t)}`);
  return o;
}
function Y() {
  return I.transformIdCounter += 1, `transform-${I.transformIdCounter}`;
}
function $t(e, t, n) {
  let o = [], r = e._transform, l = e.ids || [], i = e.options || {}, s = [];
  for (let d of l) t.has(d) ? s.push(d) : o.push({ type: "transform_unknown_element", transform: r, transformId: e._transformId, elementId: d, message: `Transform "${r}": element "${d}" not found in resolved layout \u2014 skipping` });
  if (s.length === 0) return o;
  switch (r) {
    case "alignLeft": {
      let d = i.to !== void 0 ? i.to : Math.min(...s.map((c) => $(t, c, `resolvedBounds missing element: ${c}`).x));
      for (let c of s) $(t, c, `resolvedBounds missing element: ${c}`).x = d;
      break;
    }
    case "alignRight": {
      let d = i.to !== void 0 ? i.to : Math.max(...s.map((c) => {
        let a = $(t, c, `resolvedBounds missing element: ${c}`);
        return a.x + a.w;
      }));
      for (let c of s) {
        let a = $(t, c, `resolvedBounds missing element: ${c}`);
        a.x = d - a.w;
      }
      break;
    }
    case "alignTop": {
      let d = i.to !== void 0 ? i.to : Math.min(...s.map((c) => $(t, c, `resolvedBounds missing element: ${c}`).y));
      for (let c of s) $(t, c, `resolvedBounds missing element: ${c}`).y = d;
      break;
    }
    case "alignBottom": {
      let d = i.to !== void 0 ? i.to : Math.max(...s.map((c) => {
        let a = $(t, c, `resolvedBounds missing element: ${c}`);
        return a.y + a.h;
      }));
      for (let c of s) {
        let a = $(t, c, `resolvedBounds missing element: ${c}`);
        a.y = d - a.h;
      }
      break;
    }
    case "alignCenterH": {
      let d = i.to !== void 0 ? i.to : s.reduce((c, a) => {
        let u = $(t, a, `resolvedBounds missing element: ${a}`);
        return c + (u.x + u.w / 2);
      }, 0) / s.length;
      for (let c of s) {
        let a = $(t, c, `resolvedBounds missing element: ${c}`);
        a.x = d - a.w / 2;
      }
      break;
    }
    case "alignCenterV": {
      let d = i.to !== void 0 ? i.to : s.reduce((c, a) => {
        let u = $(t, a, `resolvedBounds missing element: ${a}`);
        return c + (u.y + u.h / 2);
      }, 0) / s.length;
      for (let c of s) {
        let a = $(t, c, `resolvedBounds missing element: ${c}`);
        a.y = d - a.h / 2;
      }
      break;
    }
    case "distributeH": {
      if (s.length < 2) break;
      let d = [...s].sort((f, h) => $(t, f, `resolvedBounds missing element: ${f}`).x - $(t, h, `resolvedBounds missing element: ${h}`).x), c = i.mode || "equal-gap", a = $(t, d[0], `resolvedBounds missing element: ${d[0]}`), u = $(t, d[d.length - 1], `resolvedBounds missing element: ${d[d.length - 1]}`);
      if (c === "equal-gap") {
        let f = i.startX !== void 0 ? i.startX : a.x, h = i.endX !== void 0 ? i.endX : u.x + u.w, m = d.reduce((E, w) => E + $(t, w, `resolvedBounds missing element: ${w}`).w, 0), S = (h - f - m) / (d.length - 1), y = f;
        for (let E of d) {
          let w = $(t, E, `resolvedBounds missing element: ${E}`);
          w.x = y, y += w.w + S;
        }
      } else if (c === "equal-center") {
        let f = i.startX !== void 0 ? i.startX : a.x + a.w / 2, m = ((i.endX !== void 0 ? i.endX : u.x + u.w / 2) - f) / (d.length - 1);
        for (let p = 0; p < d.length; p++) {
          let S = $(t, d[p], `resolvedBounds missing element: ${d[p]}`);
          S.x = f + p * m - S.w / 2;
        }
      }
      break;
    }
    case "distributeV": {
      if (s.length < 2) break;
      let d = [...s].sort((f, h) => $(t, f, `resolvedBounds missing element: ${f}`).y - $(t, h, `resolvedBounds missing element: ${h}`).y), c = i.mode || "equal-gap", a = $(t, d[0], `resolvedBounds missing element: ${d[0]}`), u = $(t, d[d.length - 1], `resolvedBounds missing element: ${d[d.length - 1]}`);
      if (c === "equal-gap") {
        let f = i.startY !== void 0 ? i.startY : a.y, h = i.endY !== void 0 ? i.endY : u.y + u.h, m = d.reduce((E, w) => E + $(t, w, `resolvedBounds missing element: ${w}`).h, 0), S = (h - f - m) / (d.length - 1), y = f;
        for (let E of d) {
          let w = $(t, E, `resolvedBounds missing element: ${E}`);
          w.y = y, y += w.h + S;
        }
      } else if (c === "equal-center") {
        let f = i.startY !== void 0 ? i.startY : a.y + a.h / 2, m = ((i.endY !== void 0 ? i.endY : u.y + u.h / 2) - f) / (d.length - 1);
        for (let p = 0; p < d.length; p++) {
          let S = $(t, d[p], `resolvedBounds missing element: ${d[p]}`);
          S.y = f + p * m - S.h / 2;
        }
      }
      break;
    }
    case "matchWidth": {
      let d = Math.max(...s.map((c) => $(t, c, `resolvedBounds missing element: ${c}`).w));
      for (let c of s) $(t, c, `resolvedBounds missing element: ${c}`).w = d;
      break;
    }
    case "matchHeight": {
      let d = Math.max(...s.map((c) => $(t, c, `resolvedBounds missing element: ${c}`).h));
      for (let c of s) $(t, c, `resolvedBounds missing element: ${c}`).h = d;
      break;
    }
    case "matchSize": {
      let d = Math.max(...s.map((a) => $(t, a, `resolvedBounds missing element: ${a}`).w)), c = Math.max(...s.map((a) => $(t, a, `resolvedBounds missing element: ${a}`).h));
      for (let a of s) {
        let u = $(t, a, `resolvedBounds missing element: ${a}`);
        u.w = d, u.h = c;
      }
      break;
    }
    case "fitToRect": {
      let d = i.rect;
      if (!d || d.w <= 0 || d.h <= 0) {
        o.push({ type: "transform_invalid_rect", transform: r, transformId: e._transformId, message: "fitToRect: invalid target rect" });
        break;
      }
      let c = 1 / 0, a = 1 / 0, u = -1 / 0, f = -1 / 0;
      for (let F of s) {
        let L = $(t, F, `resolvedBounds missing element: ${F}`);
        c = Math.min(c, L.x), a = Math.min(a, L.y), u = Math.max(u, L.x + L.w), f = Math.max(f, L.y + L.h);
      }
      let h = u - c, m = f - a;
      if (h <= 0 || m <= 0) break;
      let p = d.w / h, S = d.h / m, y = Math.min(p, S), E = h * y, w = m * y, M = d.x + (d.w - E) / 2, C2 = d.y + (d.h - w) / 2;
      for (let F of s) {
        let L = $(t, F, `resolvedBounds missing element: ${F}`);
        L.x = M + (L.x - c) * y, L.y = C2 + (L.y - a) * y, L.w = L.w * y, L.h = L.h * y;
      }
      break;
    }
    default:
      o.push({ type: "unknown_transform", transform: r, transformId: e._transformId, message: `Unknown transform type: "${r}"` });
      break;
  }
  return o;
}
var z = { minFontSize: 18, warnFontSize: 24, maxFontSize: 120, maxLineLength: 80, minLineHeightRatio: 1.15, minGap: 8, alignmentTolerance: 4, edgeCrowding: 8, contentAreaMin: 0.4, maxRootElements: 15, imageUpscaleMax: 1.1, aspectRatioTolerance: 0.01, contrastMin: 3, titlePositionDrift: 20, maxFontFamilies: 3, marginRatioMax: 0.25 };
var ce = { x: 0, y: 0, w: 1920, h: 1080 };
var D = { x: 120, y: 90, w: 1680, h: 900 };
function rn(e, t) {
  return e.x < t.x + t.w && e.x + e.w > t.x && e.y < t.y + t.h && e.y + e.h > t.y;
}
function sn(e, t) {
  let n = Math.max(e.x, t.x), o = Math.max(e.y, t.y), r = Math.min(e.x + e.w, t.x + t.w), l = Math.min(e.y + e.h, t.y + t.h);
  return r <= n || l <= o ? null : { x: n, y: o, w: r - n, h: l - o };
}
function Mt(e, t, n) {
  let o = /* @__PURE__ */ new Set(), r = e[t];
  for (; r && r.parentId; ) {
    if (o.has(r.id)) return false;
    if (o.add(r.id), r.parentId === n) return true;
    r = e[r.parentId];
  }
  return false;
}
function j(e) {
  let t = e.localResolved;
  return t ? { x: t.x, y: t.y, w: t.w, h: t.h } : null;
}
function Re(e, t) {
  let n = e.resolved;
  if (!n) return null;
  let o = n.x, r = n.y, l = /* @__PURE__ */ new Set(), i = e.parentId;
  for (; i; ) {
    if (l.has(i)) return null;
    l.add(i);
    let s = t[i];
    if (!s?.resolved) return null;
    ["hstack", "vstack"].includes(s.type) || (o += s.resolved.x, r += s.resolved.y), i = s.parentId;
  }
  return { x: o, y: r, w: n.w, h: n.h };
}
function X(e) {
  let t = e?.authored?.props?.layer;
  return t === "bg" || t === "overlay" || t === "content" ? t : "content";
}
function an(e, t) {
  if (e.type === "connector") {
    let n = e._connectorResolved, o = e.authored?.props, r = n?.fromId ?? o?.fromId, l = n?.toId ?? o?.toId;
    if (t.id === r || t.id === l) return true;
  }
  if (t.type === "connector") {
    let n = t._connectorResolved, o = t.authored?.props, r = n?.fromId ?? o?.fromId, l = n?.toId ?? o?.toId;
    if (e.id === r || e.id === l) return true;
  }
  return false;
}
function ln(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (!n.parentId || n._internal) continue;
    let o = e[n.parentId];
    if (!o || o.authored?.props?.bounds === "hug") continue;
    let l = j(n), i = o.resolved;
    if (!l || !i) continue;
    let s = { x: 0, y: 0, w: i.w, h: i.h }, d = [{ edge: "left", overshoot: s.x - l.x }, { edge: "top", overshoot: s.y - l.y }, { edge: "right", overshoot: l.x + l.w - (s.x + s.w) }, { edge: "bottom", overshoot: l.y + l.h - (s.y + s.h) }];
    for (let { edge: c, overshoot: a } of d) if (a > 0.5) {
      let u = c === "left" || c === "right" ? "width" : "height", f = u === "width" ? s.w : s.h;
      t.push({ rule: "child-overflow", severity: "error", elementId: n.id, message: `Child "${n.id}" overflows parent "${n.parentId}" on ${c} by ${a}px`, detail: { edge: c, overshoot: a, parentId: n.parentId }, bounds: l, parentBounds: s, suggestion: `Reduce child ${u} or increase parent ${u} to ${f + a}` });
    }
  }
  return t;
}
function cn(e) {
  let t = [], n = Object.values(e).filter((s) => !s._internal), o = /* @__PURE__ */ new Map();
  function r(s) {
    return o.has(s.id) || o.set(s.id, Re(s, e)), o.get(s.id);
  }
  let l = n.filter((s) => {
    let d = r(s);
    return d && d.w > 0 && d.h > 0;
  }), i = /* @__PURE__ */ new Set();
  for (let s = 0; s < l.length; s++) for (let d = s + 1; d < l.length; d++) {
    let c = l[s], a = l[d], u = X(c), f = X(a);
    if (u !== f || Mt(e, c.id, a.id) || Mt(e, a.id, c.id) || an(c, a)) continue;
    let h = r(c), m = r(a);
    if (!rn(h, m)) continue;
    let p = [c.id, a.id].sort().join("|");
    if (i.has(p)) continue;
    i.add(p);
    let S = sn(h, m), y = S ? S.w * S.h : 0;
    t.push({ rule: "non-ancestor-overlap", severity: "error", elementId: c.id, message: `"${c.id}" overlaps with "${a.id}" by ${y}px\xB2`, detail: { elementA: c.id, elementB: a.id, overlapArea: y, overlapRect: S }, bounds: h, parentBounds: null, suggestion: `Move ${c.id} to avoid ${y}px overlap with ${a.id}` });
  }
  return t;
}
function dn(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n._internal || X(n) === "bg") continue;
    let o = Re(n, e);
    if (!o) continue;
    let r = [{ edge: "left", overshoot: ce.x - o.x }, { edge: "top", overshoot: ce.y - o.y }, { edge: "right", overshoot: o.x + o.w - (ce.x + ce.w) }, { edge: "bottom", overshoot: o.y + o.h - (ce.y + ce.h) }];
    for (let { edge: l, overshoot: i } of r) i > 0.5 && t.push({ rule: "canvas-overflow", severity: "error", elementId: n.id, message: `"${n.id}" extends beyond canvas on ${l} by ${i}px`, detail: { edge: l, overshoot: i }, bounds: o, parentBounds: null, suggestion: `Move element inward by ${i}px` });
  }
  return t;
}
function un(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n._internal || n.parentId != null || X(n) === "bg" || X(n) === "overlay") continue;
    let o = Re(n, e);
    if (!o) continue;
    let r = [{ edge: "left", overshoot: D.x - o.x }, { edge: "top", overshoot: D.y - o.y }, { edge: "right", overshoot: o.x + o.w - (D.x + D.w) }, { edge: "bottom", overshoot: o.y + o.h - (D.y + D.h) }];
    for (let { edge: l, overshoot: i } of r) i > 0.5 && t.push({ rule: "safe-zone-violation", severity: "warning", elementId: n.id, message: `"${n.id}" extends outside safe zone on ${l} by ${i}px`, detail: { edge: l, overshoot: i, safeRect: { ...D } }, bounds: o, parentBounds: null, suggestion: `Move element ${i}px inward from ${l}` });
  }
  return t;
}
function fn(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n._internal || n.type === "connector") continue;
    let o = j(n);
    o && (o.w <= 0 || o.h <= 0) && t.push({ rule: "zero-size", severity: "error", elementId: n.id, message: `"${n.id}" has zero or negative size (${o.w}\xD7${o.h})`, detail: { w: o.w, h: o.h }, bounds: o, parentBounds: null, suggestion: "Set explicit width/height for element" });
  }
  return t;
}
function ut(e) {
  let t = /* @__PURE__ */ new Map();
  for (let n of Object.values(e)) {
    if (n._internal || X(n) === "bg") continue;
    let o = j(n);
    if (!o || o.w <= 0 || o.h <= 0) continue;
    let r = n.parentId ?? "__root__";
    t.has(r) || t.set(r, []), t.get(r).push(n);
  }
  return t;
}
function mn(e, t) {
  let n = e.x < t.x + t.w && e.x + e.w > t.x, o = e.y < t.y + t.h && e.y + e.h > t.y, r = Math.max(0, Math.max(t.x - (e.x + e.w), e.x - (t.x + t.w))), l = Math.max(0, Math.max(t.y - (e.y + e.h), e.y - (t.y + t.h)));
  return r > 0 && o ? { gap: r, axis: "horizontal" } : l > 0 && n ? { gap: l, axis: "vertical" } : { gap: 0, axis: "none" };
}
function pn(e) {
  let t = [];
  for (let n of ut(e).values()) for (let o = 0; o < n.length; o++) for (let r = o + 1; r < n.length; r++) {
    let l = n[o], i = n[r], s = j(l), d = j(i), { gap: c, axis: a } = mn(s, d);
    c > 0 && c < z.minGap && t.push({ rule: "gap-too-small", severity: "warning", elementId: l.id, message: `Gap between "${l.id}" and "${i.id}" is only ${c}px`, detail: { elementA: l.id, elementB: i.id, gap: c, axis: a }, suggestion: `Increase gap between elements to at least ${z.minGap}px` });
  }
  return t;
}
function gn(e) {
  let t = [];
  for (let o of ut(e).values()) for (let r = 0; r < o.length; r++) for (let l = r + 1; l < o.length; l++) {
    let i = o[r], s = o[l], d = j(i), c = j(s), a = d.x < c.x + c.w && d.x + d.w > c.x, u = d.y < c.y + c.h && d.y + d.h > c.y, f = [];
    u && f.push({ type: "left", vA: d.x, vB: c.x }, { type: "right", vA: d.x + d.w, vB: c.x + c.w }, { type: "center-x", vA: d.x + d.w / 2, vB: c.x + c.w / 2 }), a && f.push({ type: "top", vA: d.y, vB: c.y }, { type: "bottom", vA: d.y + d.h, vB: c.y + c.h }, { type: "center-y", vA: d.y + d.h / 2, vB: c.y + c.h / 2 });
    let h = null;
    for (let { type: m, vA: p, vB: S } of f) {
      let y = Math.abs(p - S);
      y > 0.5 && y <= z.alignmentTolerance && (!h || y < h.drift) && (h = { edgeType: m, valueA: p, valueB: S, drift: y });
    }
    h && t.push({ rule: "near-misalignment", severity: "info", elementId: i.id, message: `"${i.id}" and "${s.id}" are nearly aligned on ${h.edgeType} (drift: ${h.drift}px)`, detail: { elementA: i.id, elementB: s.id, ...h }, suggestion: `Align ${h.edgeType} of ${i.id} with ${s.id} (drift: ${h.drift}px)` });
  }
  return t;
}
function hn(e) {
  let t = [], n = D;
  for (let o of Object.values(e)) {
    if (o._internal || o.parentId != null || X(o) === "bg" || X(o) === "overlay") continue;
    let r = j(o);
    if (!r || r.w <= 0 || r.h <= 0) continue;
    let l = [{ edge: "left", distance: r.x - n.x }, { edge: "top", distance: r.y - n.y }, { edge: "right", distance: n.x + n.w - (r.x + r.w) }, { edge: "bottom", distance: n.y + n.h - (r.y + r.h) }];
    for (let { edge: i, distance: s } of l) s > 0 && s < z.edgeCrowding && t.push({ rule: "edge-crowding", severity: "info", elementId: o.id, message: `"${o.id}" is only ${s}px from safe zone ${i}`, detail: { edge: i, distance: s, needed: z.edgeCrowding - s, threshold: z.edgeCrowding }, suggestion: `Move element ${z.edgeCrowding - s}px away from safe zone ${i}` });
  }
  return t;
}
function yn(e) {
  let t = [], o = Object.values(e).filter((s) => !s._internal && s.parentId == null && X(s) !== "bg").map((s) => j(s)).filter((s) => s != null && s.w > 0 && s.h > 0);
  if (o.length === 0) return t;
  let r = 0;
  for (let s of o) r += s.w * s.h;
  let l = D.w * D.h, i = r / l;
  return i < z.contentAreaMin && t.push({ rule: "content-clustering", severity: "warning", elementId: "slide", message: `Content uses only ${(i * 100).toFixed(0)}% of the safe zone`, detail: { usageRatio: i, covered: r, safeZoneArea: l }, suggestion: `Content uses only ${(i * 100).toFixed(0)}% of the safe zone \u2014 consider using more of the available space` }), t;
}
function xn(e) {
  let t = [], o = Object.values(e).filter((a) => !a._internal && a.parentId == null && X(a) !== "bg").map((a) => j(a)).filter((a) => a != null && a.w > 0 && a.h > 0);
  if (o.length === 0) return t;
  let r = 0, l = 0, i = 0;
  for (let a of o) {
    let u = a.w * a.h;
    r += (a.x + a.w / 2) * u, l += (a.y + a.h / 2) * u, i += u;
  }
  if (i === 0) return t;
  let s = { x: r / i, y: l / i }, d = { x: 960, y: 540 }, c = { x: s.x - d.x, y: s.y - d.y };
  if (Math.abs(c.x) > 200 || Math.abs(c.y) > 200) {
    let a = [];
    c.y < -200 && a.push("upward"), c.y > 200 && a.push("downward"), c.x < -200 && a.push("left"), c.x > 200 && a.push("right"), t.push({ rule: "lopsided-layout", severity: "info", elementId: "slide", message: `Content centroid is shifted ${a.join(" and ")} from slide center`, detail: { centroid: s, slideCenter: d, drift: c }, suggestion: `Content is shifted ${a.join(" and ")} \u2014 consider recentering` });
  }
  return t;
}
function bn(e) {
  let t = [], n = Object.values(e).filter((o) => !o._internal && o.parentId == null && X(o) !== "bg").length;
  return n > z.maxRootElements && t.push({ rule: "too-many-elements", severity: "info", elementId: "slide", message: `Slide has ${n} root elements (guideline: ${z.maxRootElements})`, detail: { count: n, threshold: z.maxRootElements }, suggestion: `Consider simplifying slide \u2014 ${n} root elements exceeds guideline of ${z.maxRootElements}` }), t;
}
function wn(e) {
  let t = [], o = Object.values(e).filter((y) => !y._internal && y.parentId == null && X(y) !== "bg").map((y) => j(y)).filter((y) => y != null && y.w > 0 && y.h > 0);
  if (o.length === 0) return t;
  let r = { x: Math.min(...o.map((y) => y.x)), y: Math.min(...o.map((y) => y.y)), w: 0, h: 0 };
  r.w = Math.max(...o.map((y) => y.x + y.w)) - r.x, r.h = Math.max(...o.map((y) => y.y + y.h)) - r.y;
  let l = r.x - D.x, i = D.x + D.w - (r.x + r.w), s = r.y - D.y, d = D.y + D.h - (r.y + r.h), c = D.w * z.marginRatioMax, a = D.h * z.marginRatioMax, u = l > c && i > c, f = s > a && d > a;
  if (!u && !f) return t;
  let h = u && f ? "both" : u ? "horizontal" : "vertical", m = { left: l, right: i, top: s, bottom: d }, p, S;
  return h === "both" ? (p = "Content is small \u2014 large margins on all sides", S = "Enlarge content elements or reduce margins on all sides") : h === "horizontal" ? (p = "Content is narrow \u2014 consider using more horizontal space", S = "Widen content elements or reduce horizontal margins") : (p = "Content is short \u2014 consider using more vertical space", S = "Increase content height or reduce vertical margins"), t.push({ rule: "content-underutilized", severity: "info", elementId: "slide", message: p, detail: { contentBounds: r, margins: m, underutilized: h, safeZone: D }, suggestion: S }), t;
}
function $e(e) {
  return e ? Array.from(e.querySelectorAll('[data-sk-type="el"][data-sk-id]')) : [];
}
function Sn(e) {
  let t = [];
  if (!e) return t;
  let n = e.querySelectorAll('[data-sk-type="el"]');
  for (let o of n) {
    let r = o.scrollHeight > o.clientHeight + 1, l = o.scrollWidth > o.clientWidth + 1;
    (r || l) && t.push({ rule: "text-overflow", severity: "error", elementId: o.getAttribute("data-sk-id"), message: `Element "${o.getAttribute("data-sk-id")}" has content overflow`, detail: { scrollHeight: o.scrollHeight, clientHeight: o.clientHeight, scrollWidth: o.scrollWidth, clientWidth: o.clientWidth, overflowY: r, overflowX: l }, suggestion: "Reduce content or increase element height/width" });
  }
  return t;
}
function vn(e) {
  let t = [];
  if (!e) return t;
  for (let n of $e(e)) {
    if (!n.textContent || !n.textContent.trim()) continue;
    let o = parseFloat(getComputedStyle(n).fontSize);
    o < z.minFontSize && t.push({ rule: "font-too-small", severity: "warning", elementId: n.getAttribute("data-sk-id"), message: `Font size ${o}px is below minimum ${z.minFontSize}px`, detail: { fontSize: o, threshold: z.minFontSize }, suggestion: `Increase font size to at least ${z.minFontSize}px` });
  }
  return t;
}
function kn(e) {
  let t = [];
  if (!e) return t;
  for (let n of $e(e)) {
    if (!n.textContent || !n.textContent.trim()) continue;
    let o = parseFloat(getComputedStyle(n).fontSize);
    o > z.maxFontSize && t.push({ rule: "font-too-large", severity: "info", elementId: n.getAttribute("data-sk-id"), message: `Font size ${o}px exceeds maximum ${z.maxFontSize}px`, detail: { fontSize: o, threshold: z.maxFontSize }, suggestion: `Decrease font size to at most ${z.maxFontSize}px` });
  }
  return t;
}
function Rn(e) {
  let t = [];
  if (!e) return t;
  for (let n of $e(e)) {
    if (!n.textContent || !n.textContent.trim()) continue;
    let o = parseFloat(getComputedStyle(n).fontSize), r = n.clientWidth, l = r / (o * 0.6);
    l > z.maxLineLength && t.push({ rule: "line-too-long", severity: "info", elementId: n.getAttribute("data-sk-id"), message: `Estimated ${Math.round(l)} chars/line exceeds ${z.maxLineLength}`, detail: { estimatedCharsPerLine: Math.round(l), threshold: z.maxLineLength, elementWidth: r }, suggestion: "Reduce element width or increase font size" });
  }
  return t;
}
function $n(e) {
  let t = [];
  if (!e) return t;
  for (let n of $e(e)) {
    if (!n.textContent || !n.textContent.trim()) continue;
    let o = getComputedStyle(n), r = o.lineHeight;
    if (r === "normal") continue;
    let l = parseFloat(o.fontSize), i = parseFloat(r), c = (r.endsWith("px") ? i : i * l) / l;
    c < z.minLineHeightRatio && t.push({ rule: "line-height-tight", severity: "warning", elementId: n.getAttribute("data-sk-id"), message: `Line-height ratio ${c.toFixed(2)} is below minimum ${z.minLineHeightRatio}`, detail: { lineHeight: r, fontSize: l, ratio: c, threshold: z.minLineHeightRatio }, suggestion: `Increase line-height to at least ${(l * z.minLineHeightRatio).toFixed(0)}px` });
  }
  return t;
}
function Et(e) {
  if (!e || e === "transparent") return null;
  let t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  return !t || (t[4] !== void 0 ? parseFloat(t[4]) : 1) < 0.1 ? null : { r: parseInt(t[1]) / 255, g: parseInt(t[2]) / 255, b: parseInt(t[3]) / 255 };
}
function It(e) {
  let t = [e.r, e.g, e.b].map((n) => n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
}
function Mn(e, t) {
  let n = It(e), o = It(t), r = Math.max(n, o), l = Math.min(n, o);
  return (r + 0.05) / (l + 0.05);
}
function En(e) {
  let t = [];
  if (!e) return t;
  let n = e.querySelectorAll("img");
  for (let o of n) {
    if (o.naturalWidth === 0) continue;
    let r = o.clientWidth, l = o.clientHeight, i = o.naturalWidth, s = o.naturalHeight, d = r / i, c = l / s;
    if (r > i * z.imageUpscaleMax || l > s * z.imageUpscaleMax) {
      let a = Math.max(d, c), u = Math.round((a - 1) * 100), f = o.closest("[data-sk-id]");
      t.push({ rule: "image-upscaled", severity: "warning", elementId: f ? f.getAttribute("data-sk-id") : null, message: `Image is upscaled ${u}% beyond natural size`, detail: { renderedWidth: r, renderedHeight: l, naturalWidth: i, naturalHeight: s, scaleX: d, scaleY: c }, suggestion: `Image is upscaled ${u}% beyond natural size \u2014 use a higher resolution source` });
    }
  }
  return t;
}
function In(e) {
  let t = [];
  if (!e) return t;
  let n = e.querySelectorAll("img");
  for (let o of n) {
    if (o.naturalWidth === 0 || o.naturalHeight === 0) continue;
    let r = o.naturalWidth / o.naturalHeight, l = o.clientWidth / o.clientHeight, i = Math.abs(l - r) / r;
    if (i > z.aspectRatioTolerance) {
      let s = o.closest("[data-sk-id]");
      t.push({ rule: "aspect-ratio-distortion", severity: "warning", elementId: s ? s.getAttribute("data-sk-id") : null, message: `Image aspect ratio distorted by ${(i * 100).toFixed(1)}%`, detail: { naturalRatio: r, renderedRatio: l, distortion: i }, suggestion: "Image aspect ratio distorted \u2014 use object-fit: contain or adjust container" });
    }
  }
  return t;
}
function Cn(e) {
  let t = [];
  if (!e) return t;
  let n = e.querySelectorAll("h1, h2, h3, h4, h5, h6");
  if (n.length === 0) return t;
  let o = /* @__PURE__ */ new Map();
  for (let l of n) {
    let i = parseInt(l.tagName[1]), s = parseFloat(getComputedStyle(l).fontSize);
    (!o.has(i) || s > o.get(i)) && o.set(i, s);
  }
  let r = Array.from(o.keys()).sort((l, i) => l - i);
  for (let l = 0; l < r.length - 1; l++) {
    let i = r[l], s = r[l + 1], d = o.get(i), c = o.get(s);
    d < c && t.push({ rule: "heading-size-inversion", severity: "warning", elementId: null, message: `h${i} (${d}px) should be larger than h${s} (${c}px)`, detail: { largerHeading: `h${i}`, largerSize: d, smallerHeading: `h${s}`, smallerSize: c }, suggestion: `h${i} (${d}px) should be larger than h${s} (${c}px)` });
  }
  return t;
}
function An(e) {
  let t = [];
  if (!e) return t;
  let n = e.querySelectorAll("*");
  for (let o of n) {
    if (!o.textContent || !o.textContent.trim()) continue;
    if (o.children.length > 0) {
      let c = false;
      for (let a of o.childNodes) if (a.nodeType === 3 && a.textContent.trim()) {
        c = true;
        break;
      }
      if (!c) continue;
    }
    let r = getComputedStyle(o), l = Et(r.color);
    if (!l) continue;
    let i = null, s = o;
    for (; s && s !== document.documentElement && (i = Et(getComputedStyle(s).backgroundColor), !i); ) s = s.parentElement;
    if (!i) continue;
    let d = Mn(l, i);
    if (d < z.contrastMin) {
      let c = o.closest("[data-sk-id]");
      t.push({ rule: "low-contrast", severity: "warning", elementId: c ? c.getAttribute("data-sk-id") : null, message: `Low contrast ratio ${d.toFixed(2)}:1 (minimum: ${z.contrastMin}:1)`, detail: { textColor: r.color, bgColor: getComputedStyle(s).backgroundColor, contrastRatio: d, threshold: z.contrastMin }, suggestion: `Increase contrast between text and background (current: ${d.toFixed(2)}:1, minimum: ${z.contrastMin}:1)` });
    }
  }
  return t;
}
function _n(e) {
  let t = [], n = [];
  for (let d of e) {
    let c = d.layout?.elements;
    if (c) for (let a of Object.values(c)) {
      if (a._internal || !a.id || !a.id.toLowerCase().includes("title")) continue;
      let u = Re(a, c);
      u && n.push({ slideId: d.id, x: u.x, y: u.y });
    }
  }
  if (n.length < 2) return t;
  let o = n.map((d) => d.x), r = n.map((d) => d.y), l = Math.max(...o) - Math.min(...o), i = Math.max(...r) - Math.min(...r), s = Math.max(l, i);
  return s > z.titlePositionDrift && t.push({ rule: "title-position-drift", severity: "info", elementId: null, message: `Title position varies by ${s}px across slides \u2014 standardize to consistent position`, detail: { positions: n, driftX: l, driftY: i }, suggestion: `Title position varies by ${s}px across slides \u2014 standardize to consistent position` }), t;
}
function Fn(e) {
  let t = [], n = /* @__PURE__ */ new Set();
  for (let o of e) {
    if (!o) continue;
    let r = o.querySelectorAll('[data-sk-type="el"]');
    for (let l of r) {
      if (!l.textContent || !l.textContent.trim()) continue;
      let i = getComputedStyle(l).fontFamily;
      if (!i) continue;
      let s = i.split(",")[0].trim().toLowerCase().replace(/['"]/g, "");
      s && n.add(s);
    }
  }
  return n.size > z.maxFontFamilies && t.push({ rule: "font-count", severity: "info", elementId: null, message: `Deck uses ${n.size} font families \u2014 consider limiting to ${z.maxFontFamilies}`, detail: { families: Array.from(n), count: n.size, threshold: z.maxFontFamilies }, suggestion: `Deck uses ${n.size} font families \u2014 consider limiting to ${z.maxFontFamilies}` }), t;
}
function Ln(e, t) {
  let n = [], o = [], r = [];
  for (let l = 0; l < e.length; l++) {
    let i = e[l];
    if (!i) continue;
    let s = t[l]?.id ?? `slide-${l}`, d = i.querySelectorAll('[data-sk-type="el"]'), c = /* @__PURE__ */ new Map();
    for (let f of d) {
      if (!f.textContent || !f.textContent.trim()) continue;
      let h = Math.round(parseFloat(getComputedStyle(f).fontSize));
      c.set(h, (c.get(h) || 0) + 1);
    }
    if (c.size > 0) {
      let f = 0, h = 0;
      for (let [m, p] of c) p > h && (f = m, h = p);
      o.push({ slideId: s, size: f });
    }
    let a = i.querySelectorAll("h1, h2, h3"), u = /* @__PURE__ */ new Map();
    for (let f of a) {
      let h = Math.round(parseFloat(getComputedStyle(f).fontSize));
      u.set(h, (u.get(h) || 0) + 1);
    }
    if (u.size > 0) {
      let f = 0, h = 0;
      for (let [m, p] of u) p > h && (f = m, h = p);
      r.push({ slideId: s, size: f });
    }
  }
  if (o.length >= 2) {
    let l = o.map((d) => d.size), i = Math.min(...l), s = Math.max(...l);
    s - i > 4 && n.push({ rule: "style-drift", severity: "info", elementId: null, message: `Body text size varies from ${i}px to ${s}px across slides \u2014 standardize`, detail: { bodyFontSizes: o, headingFontSizes: r }, suggestion: `Body text size varies from ${i}px to ${s}px across slides \u2014 standardize` });
  }
  if (r.length >= 2) {
    let l = r.map((d) => d.size), i = Math.min(...l), s = Math.max(...l);
    s - i > 4 && n.push({ rule: "style-drift", severity: "info", elementId: null, message: `Heading size varies from ${i}px to ${s}px across slides \u2014 standardize`, detail: { bodyFontSizes: o, headingFontSizes: r }, suggestion: `Heading size varies from ${i}px to ${s}px across slides \u2014 standardize` });
  }
  return n;
}
function Pn(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n._internal) continue;
    let o = n.authored?.props;
    if (!o) continue;
    let r = n.id;
    for (let l of Object.keys(o)) l !== "style" && Fe.has(l) && t.push({ rule: "misplaced-css-prop", severity: "warning", elementId: r, message: `Element "${r}" has CSS property "${l}" at top level. Move it to style: { ${l}: ... }`, detail: { property: l }, suggestion: `Move "${l}" into the style object: style: { ${l}: ... }` });
  }
  return t;
}
function Tn(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n._internal) continue;
    let o = n.provenance;
    if (!o?.x || o.x.source !== "constraint" || o.x.type !== "leftOf") continue;
    let i = (n.authored?.props?.style ?? {}).textAlign ?? "left";
    i !== "right" && t.push({ rule: "textAlign-direction-mismatch", severity: "warning", elementId: n.id, message: `Element "${n.id}" uses leftOf() positioning but textAlign is '${i}' (should be 'right' for visual alignment)`, detail: { textAlign: i, provenanceType: "leftOf" }, suggestion: "Add style: { textAlign: 'right' } to align text near the reference element" });
  }
  return t;
}
function zn(e) {
  let t = [];
  for (let n of Object.values(e)) {
    if (n.type !== "hstack" || n._internal) continue;
    let o = n.children;
    if (!o || o.length < 2) continue;
    let r = [];
    for (let d of o) {
      let c = e[d];
      c?.resolved && r.push({ id: d, h: c.resolved.h });
    }
    if (r.length < 2) continue;
    let l = r.map((d) => d.h).sort((d, c) => d - c), i = Math.floor(l.length / 2), s = l.length % 2 !== 0 ? l[i] : (l[i - 1] + l[i]) / 2;
    if (s !== 0) for (let d of r) {
      let c = Math.round(Math.abs(d.h - s) / s * 100);
      c > 5 && t.push({ rule: "equal-height-peers", severity: "warning", elementId: d.id, message: `Element "${d.id}" height (${d.h}px) deviates ${c}% from median (${s}px) in hstack "${n.id}"`, detail: { childId: d.id, height: d.h, median: s, pct: c, stackId: n.id }, suggestion: "Use hstack({ align: 'stretch' }) to equalize heights, or set explicit heights" });
    }
  }
  return t;
}
function dt(e) {
  let n = e.authored?.props?.style;
  if (n?.fontSize) {
    let o = n.fontSize;
    if (typeof o == "number") return o;
    if (typeof o == "string") {
      let r = parseFloat(o);
      if (!isNaN(r)) return r;
    }
  }
  return 24;
}
function Hn(e) {
  let t = j(e);
  if (!t) return false;
  let n = dt(e);
  return t.h > n * 1.8;
}
function On(e) {
  let t = [];
  for (let n of ut(e).values()) {
    let o = n.filter((l) => l.type === "el");
    if (o.length < 2) continue;
    let r = [...o].sort((l, i) => {
      let s = j(l), d = j(i);
      return (s?.y ?? 0) - (d?.y ?? 0);
    });
    for (let l = 0; l < r.length - 1; l++) {
      let i = r[l], s = r[l + 1], d = j(i), c = j(s);
      if (!d || !c || !(d.x < c.x + c.w && d.x + d.w > c.x)) continue;
      let u = c.y - (d.y + d.h);
      if (u <= 0) continue;
      let f = dt(i), h = dt(s), m = Math.min(f, h), p = Hn(i) ? 2 : 1.5, S = Math.round(m * p);
      if (u < S) {
        let y = i.id, E = s.id;
        t.push({ rule: "min-vertical-gap", severity: "warning", elementId: i.id, message: `Gap between "${y}" and "${E}" is ${u}px (minimum recommended: ${S}px based on font sizes)`, detail: { elementA: y, elementB: E, gap: u, minGap: S, fontSizeA: f, fontSizeB: h, multiplier: p }, bounds: d, parentBounds: null, suggestion: `Increase gap to at least ${S}px` });
      }
    }
  }
  return t;
}
function Wn(e) {
  let t = [], i = Object.values(e).filter((a) => !a._internal && a.parentId == null && X(a) !== "bg" && X(a) !== "overlay" && a.type !== "connector");
  if (i.length < 2) return t;
  let s = i.map((a) => ({ el: a, bounds: j(a) })).filter((a) => a.bounds != null && a.bounds.w > 0);
  if (s.length < 2) return t;
  let c = s.filter(({ bounds: a }) => {
    let u = a.x + a.w / 2;
    return Math.abs(u - 960) < 20;
  }).length / s.length;
  if (c <= 0.6) return t;
  for (let { el: a, bounds: u } of s) {
    let f = Math.round(u.x + u.w / 2), h = Math.abs(f - 960);
    if (h > 50) {
      let m = a.id;
      t.push({ rule: "horizontal-center-consistency", severity: h > 100 ? "error" : "warning", elementId: m, message: `Element "${m}" center (${f}) is ${h}px from slide center (960) on a centered-layout slide`, detail: { elementId: m, centerX: f, offset: h, centeredRatio: c }, bounds: u, parentBounds: null, suggestion: "Use anchor: 'tc' at x: 960, or wrap in a centered group" });
    }
  }
  return t;
}
function Bn(e) {
  let t = [], i = Object.values(e).filter((s) => !s._internal && s.parentId == null && X(s) !== "bg" && X(s) !== "overlay" && s.type !== "connector").map((s) => ({ el: s, bounds: j(s) })).filter((s) => s.bounds != null && s.bounds.w > 0 && s.bounds.h > 0);
  i.sort((s, d) => s.bounds.y - d.bounds.y);
  for (let s = 0; s < i.length; s++) {
    let { el: d, bounds: c } = i[s], a = null;
    for (let m = s - 1; m >= 0; m--) {
      let p = i[m].bounds;
      if (p.y + p.h <= c.y) {
        a = p;
        break;
      }
    }
    if (!a) continue;
    let u = c.y - (a.y + a.h), f = 990 - (c.y + c.h);
    if (f <= 0 || u <= 0) continue;
    let h = f / u;
    if (h > 3) {
      let m = d.id, p = Math.round((u + f) * 0.35);
      t.push({ rule: "unbalanced-trailing-whitespace", severity: h > 5 ? "warning" : "info", elementId: m, message: `Element "${m}" has ${f}px below vs ${u}px above (ratio: ${h.toFixed(1)}\xD7). Consider increasing gap for balance.`, detail: { elementId: m, gapAbove: u, spaceBelow: f, ratio: h, optimalGap: p }, bounds: c, parentBounds: null, suggestion: `Increase gap above to ~${p}px for better vertical balance` });
    }
  }
  return t;
}
function de(e, t = null) {
  let n = e.layout.elements;
  if (!n || typeof n != "object") return [];
  let o = [...ln(n), ...cn(n), ...dn(n), ...un(n), ...fn(n), ...pn(n), ...gn(n), ...hn(n), ...yn(n), ...xn(n), ...bn(n), ...wn(n), ...Pn(n), ...Tn(n), ...zn(n), ...On(n), ...Wn(n), ...Bn(n)];
  return t && o.push(...Sn(t), ...vn(t), ...kn(t), ...Rn(t), ...$n(t), ...En(t), ...In(t), ...Cn(t), ...An(t)), o;
}
function ye(e, t = null) {
  let n = e?.slides;
  if (!Array.isArray(n)) return [];
  let o = [];
  for (let r = 0; r < n.length; r++) {
    let l = n[r], i = t && t[r] || null, s = de(l, i);
    for (let d of s) o.push({ ...d, slideId: l.id });
  }
  return o.push(..._n(n)), t && o.push(...Fn(t), ...Ln(t, n)), o;
}
function re(e) {
  let { from: t, to: n, obstacles: o = [], stubLength: r = 30, clearance: l = 15 } = e, i = { x: t.x, y: t.y }, s = { x: n.x, y: n.y }, d = Ct(t, r), c = Ct(n, r), a = At(t.dx, t.dy), u = At(n.dx, n.dy), f = _t(i, d, t.dx, t.dy), h = _t(s, c, n.dx, n.dy), m = f[f.length - 1], p = h[h.length - 1], S = Dn(m, a, p, u, o, l), y = [...h].reverse();
  return { waypoints: Xn([i, ...f, ...S, ...y, s]) };
}
function Ct(e, t) {
  return { x: e.x + e.dx * t, y: e.y + e.dy * t };
}
function At(e, t) {
  return e !== 0 && t !== 0 ? Math.abs(e) >= Math.abs(t) ? { dx: Math.sign(e), dy: 0 } : { dx: 0, dy: Math.sign(t) } : e !== 0 ? { dx: Math.sign(e), dy: 0 } : t !== 0 ? { dx: 0, dy: Math.sign(t) } : { dx: 1, dy: 0 };
}
function _t(e, t, n, o) {
  return n !== 0 && o !== 0 ? [{ x: t.x, y: e.y }, t] : [t];
}
function Nn(e, t, n, o) {
  let r = n.x - o, l = n.x + n.w + o, i = n.y - o, s = n.y + n.h + o, d = Math.min(e.x, t.x), c = Math.max(e.x, t.x), a = Math.min(e.y, t.y), u = Math.max(e.y, t.y), f = Math.abs(e.y - t.y) < 0.5, h = Math.abs(e.x - t.x) < 0.5;
  return f ? e.y > i && e.y < s && c > r && d < l : h ? e.x > r && e.x < l && u > i && a < s : c > r && d < l && u > i && a < s;
}
function Ft(e, t, n) {
  for (let o = 0; o < e.length - 1; o++) for (let r of t) if (Nn(e[o], e[o + 1], r, n)) return true;
  return false;
}
function Dn(e, t, n, o, r, l) {
  let i = [], s = jn(e, t, n, o);
  if (s === "backward" || s === "same-direction") {
    let a = Lt(e, t, n, o, r, l);
    i.push(...a);
  } else {
    i.push([]), i.push([{ x: n.x, y: e.y }]), i.push([{ x: e.x, y: n.y }]);
    let a = (e.x + n.x) / 2, u = (e.y + n.y) / 2;
    i.push([{ x: a, y: e.y }, { x: a, y: n.y }]), i.push([{ x: e.x, y: u }, { x: n.x, y: u }]);
  }
  let d = [], c = 1 / 0;
  for (let a of i) {
    let u = [e, ...a, n], f = ft(u);
    f < c && (Ft(u, r, l) || (c = f, d = a));
  }
  if (c === 1 / 0) {
    let a = Lt(e, t, n, o, r, l);
    for (let u of a) {
      let f = [e, ...u, n], h = ft(f);
      h < c && !Ft(f, r, l) && (c = h, d = u);
    }
  }
  return c === 1 / 0 && (d = Gn(e, n, r, l)), d;
}
function jn(e, t, n, o) {
  let r = t.dx * o.dx + t.dy * o.dy, l = Math.sign(n.x - e.x), i = Math.sign(n.y - e.y), s;
  return l === 0 && i === 0 ? s = r < 0 : s = l !== 0 && t.dx === l || i !== 0 && t.dy === i, r < 0 && s ? "direct" : r === 0 ? "perpendicular" : r > 0 ? "same-direction" : "backward";
}
function Lt(e, t, n, o, r, l) {
  let i = Math.min(e.x, n.x), s = Math.min(e.y, n.y), d = Math.max(e.x, n.x), c = Math.max(e.y, n.y);
  for (let w of r) i = Math.min(i, w.x), s = Math.min(s, w.y), d = Math.max(d, w.x + w.w), c = Math.max(c, w.y + w.h);
  let a = [], u = d - i, f = c - s, h = Math.max(60, f * 0.3, l), m = Math.max(60, u * 0.3, l), p = s - h;
  a.push(Me(e, n, t, "y", p));
  let S = c + h;
  a.push(Me(e, n, t, "y", S));
  let y = i - m;
  a.push(Me(e, n, t, "x", y));
  let E = d + m;
  return a.push(Me(e, n, t, "x", E)), a;
}
function Me(e, t, n, o, r) {
  return o === "y" ? [{ x: e.x, y: r }, { x: t.x, y: r }] : [{ x: r, y: e.y }, { x: r, y: t.y }];
}
function Gn(e, t, n, o) {
  if (n.length === 0) return [{ x: t.x, y: e.y }];
  let r = 1 / 0, l = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (let u of n) r = Math.min(r, u.x), l = Math.min(l, u.y), i = Math.max(i, u.x + u.w), s = Math.max(s, u.y + u.h);
  r -= o, l -= o, i += o, s += o;
  let d = [[{ x: e.x, y: l }, { x: t.x, y: l }], [{ x: e.x, y: s }, { x: t.x, y: s }], [{ x: r, y: e.y }, { x: r, y: t.y }], [{ x: i, y: e.y }, { x: i, y: t.y }]], c = d[0], a = 1 / 0;
  for (let u of d) {
    let f = [e, ...u, t], h = ft(f);
    h < a && (a = h, c = u);
  }
  return c;
}
function ft(e) {
  let t = 0;
  for (let n = 0; n < e.length - 1; n++) t += Math.abs(e[n + 1].x - e[n].x) + Math.abs(e[n + 1].y - e[n].y);
  return t;
}
function Xn(e) {
  if (e.length === 0) return [];
  let t = [e[0]];
  for (let n = 1; n < e.length; n++) {
    let o = t[t.length - 1];
    (Math.abs(e[n].x - o.x) > 0.5 || Math.abs(e[n].y - o.y) > 0.5) && t.push(e[n]);
  }
  return t;
}
var Pt;
function Tt(e) {
  Pt = e;
}
var Ee = { bg: 0, content: 1, overlay: 2 };
function Ie(e) {
  let t = e.map((o, r) => ({ el: o, idx: r }));
  t.sort((o, r) => {
    let l = o.el.props.layer || "content", i = r.el.props.layer || "content", s = Ee[l] ?? Ee.content, d = Ee[i] ?? Ee.content;
    if (s !== d) return s - d;
    let c = o.el.props.z ?? 0, a = r.el.props.z ?? 0;
    return c !== a ? c - a : o.idx - r.idx;
  });
  let n = /* @__PURE__ */ new Map();
  return t.forEach((o, r) => {
    n.set(o.el.id, r + 1);
  }), n;
}
function zt(e, t) {
  if (!t) return;
  let n = t.trim();
  n.startsWith("#") || /^(rgb|hsl)a?\(/.test(n) ? e.setAttribute("data-background-color", n) : n.startsWith("linear-gradient") || n.startsWith("radial-gradient") ? e.setAttribute("data-background-gradient", n) : e.setAttribute("data-background-image", n);
}
function Yn(e, t, n) {
  let o = n.thickness ?? 2, l = Math.max(20, 8 + o * 2), i = n.connectorType || "straight", s = Math.min(e.x, t.x) - l, d = Math.min(e.y, t.y) - l, c = Math.max(e.x, t.x) + l, a = Math.max(e.y, t.y) + l, u = null;
  if (i === "elbow") {
    u = re({ from: e, to: t }).waypoints;
    for (let b of u) b.x < s && (s = b.x), b.y < d && (d = b.y), b.x > c && (c = b.x), b.y > a && (a = b.y);
  }
  if (i === "curved") {
    let b = Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2) * 0.4, v = e.x + e.dx * b, k = e.y + e.dy * b, A = t.x + t.dx * b, _ = t.y + t.dy * b;
    s = Math.min(s, v, A), d = Math.min(d, k, _), c = Math.max(c, v, A), a = Math.max(a, k, _);
  }
  let f = c - s, h = a - d, m = e.x - s, p = e.y - d, S = t.x - s, y = t.y - d, E = "http://www.w3.org/2000/svg", w = document.createElementNS(E, "svg");
  w.setAttribute("width", String(f)), w.setAttribute("height", String(h)), w.setAttribute("viewBox", `0 0 ${f} ${h}`), w.style.overflow = "visible";
  let M = n.color || "#ffffff", C2 = n.dash, F = n.arrow || "end", L = document.createElementNS(E, "defs"), O = `sk-arrow-${n._markerId || Math.random().toString(36).slice(2, 10)}`;
  if (F !== "none") {
    let g = document.createElementNS(E, "marker");
    g.setAttribute("id", O), g.setAttribute("viewBox", "0 0 10 10"), g.setAttribute("refX", "10"), g.setAttribute("refY", "5"), g.setAttribute("markerWidth", "8"), g.setAttribute("markerHeight", "8"), g.setAttribute("orient", "auto-start-reverse");
    let b = document.createElementNS(E, "polygon");
    b.setAttribute("points", "0,0 10,5 0,10"), b.setAttribute("fill", M), g.appendChild(b), L.appendChild(g);
  }
  w.appendChild(L);
  let x;
  if (i === "straight") x = document.createElementNS(E, "line"), x.setAttribute("x1", String(m)), x.setAttribute("y1", String(p)), x.setAttribute("x2", String(S)), x.setAttribute("y2", String(y));
  else {
    x = document.createElementNS(E, "path");
    let g;
    if (i === "curved") {
      let v = Math.sqrt((S - m) ** 2 + (y - p) ** 2) * 0.4, k = m + e.dx * v, A = p + e.dy * v, _ = S + t.dx * v, P = y + t.dy * v;
      g = `M ${m} ${p} C ${k} ${A}, ${_} ${P}, ${S} ${y}`;
    } else if (i === "elbow") {
      let v = u.map((k) => ({ x: k.x - s, y: k.y - d }));
      if (v.length >= 2) {
        g = `M ${v[0].x} ${v[0].y}`;
        for (let k = 1; k < v.length; k++) g += ` L ${v[k].x} ${v[k].y}`;
      } else g = `M ${m} ${p} L ${S} ${y}`;
    }
    x.setAttribute("d", g), x.setAttribute("fill", "none");
  }
  if (x.setAttribute("stroke", M), x.setAttribute("stroke-width", String(o)), C2 && x.setAttribute("stroke-dasharray", C2), (F === "end" || F === "both") && x.setAttribute("marker-end", `url(#${O})`), (F === "start" || F === "both") && x.setAttribute("marker-start", `url(#${O})`), w.appendChild(x), n.label) {
    let g = n.labelStyle || {}, b = g.size ?? 14, v = g.color ?? "#999999", k = g.font || "Inter", A = g.weight ?? 400, _, P;
    _ = (m + S) / 2, P = (p + y) / 2;
    let T = document.createElementNS(E, "text");
    T.setAttribute("x", String(_)), T.setAttribute("y", String(P - 8)), T.setAttribute("text-anchor", "middle"), T.setAttribute("font-family", `"${k}", sans-serif`), T.setAttribute("font-size", String(b)), T.setAttribute("font-weight", String(A)), T.setAttribute("fill", v), T.textContent = n.label, w.appendChild(T);
  }
  let R = document.createElement("div");
  return R.style.position = "absolute", R.style.left = `${s}px`, R.style.top = `${d}px`, R.style.width = `${f}px`, R.style.height = `${h}px`, R.style.pointerEvents = "none", R.appendChild(w), R;
}
function Ce(e, t, n, o = 0, r = 0) {
  let { type: l } = e, { props: i } = e, s = n[e.id]?.resolved, d, c, a, u;
  if (s) d = s.x - o, c = s.y - r, a = s.w, u = s.h;
  else {
    a = i.w || 0, u = i.h || 0;
    let w = i.anchor || "tl", M = ne(i.x ?? 0, i.y ?? 0, a, u, w);
    d = M.left, c = M.top;
  }
  let { cssProps: f, warnings: h } = Rt(i);
  if (Object.keys(f).length > 0) {
    let w = { ...f, ...i.style || {} };
    i = { ...i, style: w };
    for (let M of h) console.warn(`[SlideKit] Element "${e.id}": ${M.message}`);
  }
  let { filtered: m, warnings: p } = oe(i.style || {}, l), S = [...h, ...p];
  if (S.length > 0) {
    for (let M of p) console.warn(`[SlideKit] Element "${e.id}": style.${M.property} is blocked. ${M.suggestion}`);
    let w = n[e.id];
    w && (w.styleWarnings = S);
  }
  let y = document.createElement("div");
  switch (y.setAttribute("data-sk-id", e.id), y.style.position = "absolute", y.style.left = `${d}px`, y.style.top = `${c}px`, y.style.width = `${a}px`, y.style.height = `${u}px`, y.style.boxSizing = "border-box", y.style.zIndex = String(t), i.opacity !== void 0 && i.opacity !== 1 && (y.style.opacity = String(i.opacity)), i.rotate !== void 0 && i.rotate !== 0 && (y.style.transform = `rotate(${i.rotate}deg)`), i.className && (y.className = i.className), le(y, m), n[e.id]?._layoutFlags?.clip && (y.style.overflow = "hidden"), l) {
    case "el": {
      y.setAttribute("data-sk-type", "el");
      let w = i.valign;
      w && w !== "top" && i.h != null && (y.style.display = "flex", y.style.flexDirection = "column", y.style.justifyContent = w === "center" ? "center" : w === "bottom" ? "flex-end" : "flex-start"), y.innerHTML = e.content || "";
      break;
    }
    case "group": {
      let w = e.children || [], M = Ie(w);
      for (let C2 of w) {
        let F = M.get(C2.id) || 0, L = Ce(C2, F, n);
        y.appendChild(L);
      }
      break;
    }
    case "vstack":
    case "hstack": {
      y.style.overflow = "visible";
      let w = e.children || [], M = Ie(w);
      for (let C2 of w) if (n[C2.id]?.resolved) {
        let L = M.get(C2.id) || 0, N = Ce(C2, L, n, d + o, c + r);
        y.appendChild(N);
      }
      break;
    }
    case "connector": {
      let w = n[e.id]?._connectorResolved;
      if (w) {
        let M = Yn(w.from, w.to, { ...i, _markerId: e.id });
        return M.setAttribute("data-sk-id", e.id), M.style.zIndex = String(t), i.opacity !== void 0 && i.opacity !== 1 && (M.style.opacity = String(i.opacity)), M;
      }
      break;
    }
    default:
      break;
  }
  return y;
}
async function mt(e, t = {}) {
  te();
  let n = t.container || document.querySelector(".reveal .slides");
  if (!n) throw new Error("render() requires a container element. Provide options.container or ensure a .reveal .slides element exists in the DOM.");
  let o = [], r = [];
  if (!n.querySelector("style[data-sk-baseline]")) {
    let d = document.createElement("style");
    d.setAttribute("data-sk-baseline", ""), d.textContent = ke('[data-sk-type="el"]'), n.appendChild(d);
  }
  let l = he(), i = l?.slide?.w ?? 1920, s = l?.slide?.h ?? 1080;
  for (let d of e) {
    let c = await Pt(d);
    r.push(c);
    let a = document.createElement("section");
    d.id && (a.id = d.id), d.background && zt(a, d.background);
    let u = document.createElement("div");
    u.className = "slidekit-layer", u.style.position = "relative", u.style.width = `${i}px`, u.style.height = `${s}px`;
    let f = d.elements || [], h = Ie(f);
    for (let m of f) {
      let p = h.get(m.id) || 0, S = Ce(m, p, c.elements);
      u.appendChild(S);
    }
    if (a.appendChild(u), d.notes) {
      let m = document.createElement("aside");
      m.className = "notes", m.textContent = d.notes, a.appendChild(m);
    }
    n.appendChild(a), o.push(a);
  }
  for (let d = 0; d < r.length; d++) {
    let c = r[d], a = c.elements, u = o[d];
    for (let [f, h] of Object.entries(a)) {
      if (h.type !== "el") continue;
      let m = u.querySelector(`[data-sk-id="${f}"]`);
      m && (m.scrollHeight > m.clientHeight + 1 && c.warnings.push({ type: "dom_overflow_y", elementId: f, clientHeight: m.clientHeight, scrollHeight: m.scrollHeight, overflow: m.scrollHeight - m.clientHeight }), m.scrollWidth > m.clientWidth + 1 && c.warnings.push({ type: "dom_overflow_x", elementId: f, clientWidth: m.clientWidth, scrollWidth: m.scrollWidth, overflow: m.scrollWidth - m.clientWidth }));
    }
  }
  if (typeof window < "u") {
    let d = { layouts: r, slides: e.map((c, a) => ({ id: c.id || `slide-${a}`, layout: r[a] })), _config: I.config ? JSON.parse(JSON.stringify(I.config)) : null };
    d.lint = (c) => {
      let a = d.slides.findIndex((h) => h.id === c);
      if (a === -1) throw new Error(`Slide not found: ${c}`);
      let u = d.slides[a], f = document.querySelectorAll(".reveal .slides > section")[a] || null;
      return de(u, f);
    }, d.lintDeck = () => {
      let c = document.querySelectorAll(".reveal .slides > section");
      return ye(d, c);
    }, window.sk = d;
  }
  return { sections: o, layouts: r };
}
function ue(e, t) {
  let n = t[0], o = t[1], r, l, i = 0, s = 0;
  if (o === "l" ? (r = e.x, i = -1) : o === "c" ? r = e.x + e.w / 2 : (r = e.x + e.w, i = 1), n === "t" ? (l = e.y, s = -1) : n === "c" ? l = e.y + e.h / 2 : (l = e.y + e.h, s = 1), i !== 0 && s !== 0) {
    let d = Math.sqrt(i * i + s * s);
    i /= d, s /= d;
  }
  return { x: r, y: l, dx: i, dy: s };
}
function ee(e, t) {
  if (typeof e != "string") return e;
  let n = I.config?.slide?.w ?? 1920, o = I.config?.slide?.h ?? 1080, r = I.safeRectCache || { x: 120, y: 90, w: 1680, h: 900 }, l = e.match(/^safe:\s*([0-9.]+)%$/);
  if (l) {
    let s = parseFloat(l[1]) / 100;
    return Number.isNaN(s) ? e : t === "x" ? r.x + s * r.w : t === "y" ? r.y + s * r.h : t === "w" ? s * r.w : t === "h" ? s * r.h : e;
  }
  let i = e.match(/^([0-9.]+)%$/);
  if (i) {
    let s = parseFloat(i[1]) / 100;
    return Number.isNaN(s) ? e : t === "x" || t === "w" ? s * n : t === "y" || t === "h" ? s * o : e;
  }
  return e;
}
function fe(e, t, n) {
  let o = n * Math.PI / 180, r = Math.abs(Math.cos(o)), l = Math.abs(Math.sin(o));
  return { w: e * r + t * l, h: e * l + t * r };
}
function U(e) {
  return e !== null && typeof e == "object" && typeof e._rel == "string";
}
function me(e) {
  return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
}
function Ot(e) {
  let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
  function s(d, c) {
    for (let a of d) {
      if (t.set(a.id, a), c && n.set(a.id, c), a.type === "group" && a.children) {
        let u = a.children.map((f) => f.id);
        l.set(a.id, u), a._compound === "panel" && a.children.length >= 2 && (i.add(a.children[0].id), i.add(a.children[1].id)), s(a.children, a.id);
      }
      if ((a.type === "vstack" || a.type === "hstack") && a.children) {
        let u = [];
        for (let f of a.children) if (t.set(f.id, f), o.set(f.id, a.id), u.push(f.id), (f.type === "vstack" || f.type === "hstack") && f.children) s([f], c);
        else if (f.type === "group" && f.children) {
          let h = f.children.map((m) => m.id);
          l.set(f.id, h), f._compound === "panel" && f.children.length >= 2 && (i.add(f.children[0].id), i.add(f.children[1].id)), s(f.children, f.id);
        }
        r.set(a.id, u);
      }
    }
  }
  return s(e, null), { flatMap: t, groupParent: n, stackParent: o, stackChildren: r, groupChildren: l, panelInternals: i };
}
function wt(e) {
  return !U(e) || e._rel === "centerIn" ? null : e.ref || null;
}
function St(e, t, n, o, r) {
  let l = e._rel, i = e.gap ?? 0;
  switch (l) {
    case "below":
      return n.y + n.h + i;
    case "above":
      return n.y - r - i;
    case "rightOf":
      return n.x + n.w + i;
    case "leftOf":
      return n.x - o - i;
    case "centerV":
      return n.y + n.h / 2 - r / 2;
    case "centerH":
      return n.x + n.w / 2 - o / 2;
    case "alignTop":
      return n.y;
    case "alignBottom":
      return n.y + n.h - r;
    case "alignLeft":
      return n.x;
    case "alignRight":
      return n.x + n.w - o;
    case "centerIn": {
      let s = e.rect;
      return t === "x" ? s.x + s.w / 2 - o / 2 : s.y + s.h / 2 - r / 2;
    }
    default:
      throw new Error(`Unknown _rel type: "${l}"`);
  }
}
function ie(e, t, n, o) {
  if (U(e)) {
    let r = { source: "constraint", type: e._rel };
    return e.ref && (r.ref = e.ref), e.ref2 !== void 0 && (r.ref2 = e.ref2), e.gap !== void 0 && (r.gap = e.gap), e.bias !== void 0 && (r.bias = e.bias), e.rect && (r.rect = e.rect), r;
  }
  return o && (t === "w" || t === "h") ? { source: "measured", measuredAt: { w: n.props?.w ?? null, className: n.props?.className || "" } } : { source: "authored", value: e };
}
function Wt(e, t) {
  let n = Math.max(e.x, t.x), o = Math.max(e.y, t.y), r = Math.min(e.x + e.w, t.x + t.w), l = Math.min(e.y + e.h, t.y + t.h), i = r - n, s = l - o;
  return i > 0 && s > 0 ? { x: n, y: o, w: i, h: s } : null;
}
async function Bt(e, t, n, o, r, l) {
  for (let i of e) {
    let s = $(t, i, `flatMap missing element in overflow check: ${i}`);
    if (s.type !== "el") continue;
    let d = $(n, i, `authoredSpecs missing element in overflow check: ${i}`).props.h;
    if (d == null) continue;
    let c = $(o, i, `resolvedBounds missing element in overflow check: ${i}`), a = s.props.overflow || "visible";
    if (a === "visible") continue;
    let u = s.content || "";
    if (!u) continue;
    let f = await V(u, { ...s.props, w: c.w });
    if (f.h > c.h) switch (a) {
      case "warn":
        r.push({ type: "content_overflow", elementId: i, overflow: "warn", contentHeight: f.h, boxHeight: c.h, message: `Content in "${i}" overflows its box (content: ${f.h}px, box: ${c.h}px)` });
        break;
      case "clip":
        s._layoutFlags.clip = true;
        break;
      case "error":
        l.push({ type: "content_overflow", elementId: i, overflow: "error", contentHeight: f.h, boxHeight: c.h, message: `Content in "${i}" overflows its box (content: ${f.h}px, box: ${c.h}px)` });
        break;
    }
  }
}
function se(e) {
  return e.type === "group" && "_compound" in e && e._compound === "panel";
}
async function vt(e) {
  let { props: t, type: n } = e;
  if (n === "el" && (t.h === void 0 || t.h === null)) {
    let o = e.content || "";
    if (!o && (!t.style || Object.keys(t.style).length === 0)) return { w: t.w || 0, h: 0, _autoHeight: true };
    let r = await V(o, { w: t.w, style: t.style, className: t.className });
    return { w: t.w || r.w, h: r.h, _autoHeight: true };
  }
  return { w: t.w || 0, h: t.h || 0, _autoHeight: false };
}
async function Nt(e, t, n, o, r) {
  let l = /* @__PURE__ */ new Map();
  for (let [c, a] of e) {
    let u = { type: a.type, props: me(a.props) };
    a.type === "el" && (u.content = a.content), "children" in a && a.children && (u.children = a.children.map((f) => f.id)), l.set(c, u);
  }
  for (let [c, a] of e) typeof a.props.x == "string" && !U(a.props.x) && (a.props.x = ee(a.props.x, "x")), typeof a.props.y == "string" && !U(a.props.y) && (a.props.y = ee(a.props.y, "y")), typeof a.props.w == "string" && a.props.w !== "fill" && (a.props.w = ee(a.props.w, "w")), typeof a.props.h == "string" && a.props.h !== "fill" && (a.props.h = ee(a.props.h, "h"));
  for (let [c, a] of e) U(a.props.w) && o.push({ type: "invalid_rel_on_dimension", elementId: c, property: "w", message: `Element "${c}": _rel marker on "w" is invalid. Deferred values are only valid on x and y.` }), U(a.props.h) && o.push({ type: "invalid_rel_on_dimension", elementId: c, property: "h", message: `Element "${c}": _rel marker on "h" is invalid. Deferred values are only valid on x and y.` });
  let i = /* @__PURE__ */ new Map();
  if (o.length > 0) return { authoredSpecs: l, resolvedSizes: i, hasErrors: true };
  for (let [c, a] of e) {
    if (a.type === "vstack" || a.type === "hstack") continue;
    let u = await vt(a);
    i.set(c, { w: u.w, h: u.h, wMeasured: a.type === "el" && (a.props.w === void 0 || a.props.w === null), hMeasured: u._autoHeight });
  }
  let s = /* @__PURE__ */ new Set();
  for (let [c, a] of e) (a.type === "vstack" || a.type === "hstack") && s.add(c);
  let d = true;
  for (; s.size > 0 && d; ) {
    d = false;
    for (let c of s) {
      let a = $(e, c, `flatMap missing stack: ${c}`), u = t.get(c) || [], f = W(a.props.gap ?? 0), h = a.props.w ?? 0, m = true;
      for (let p of u) {
        if (!i.has(p)) {
          m = false;
          break;
        }
        let S = $(e, p, `flatMap missing stack child: ${p}`);
        if (se(S)) {
          let y = S._panelConfig;
          if (!y) continue;
          let E = S.children || [], w = E[1];
          if (w && !i.has(w.id)) {
            m = false;
            break;
          }
          if (w && i.has(w.id)) {
            let M = i.get(w.id), C2 = y.panelH ?? M.h + 2 * y.padding, F = $(i, p, `resolvedSizes missing panel: ${p}`);
            F.h = C2, y.panelW != null && (F.w = y.panelW);
            let L = E[0];
            L && i.has(L.id) && (i.get(L.id).h = C2);
          }
        }
      }
      if (m) {
        if (a.type === "vstack") {
          for (let w of u) {
            let M = $(e, w, `flatMap missing vstack child: ${w}`);
            if ((M.props.w === void 0 || M.props.w === null) && h > 0) {
              let C2 = $(i, w, `resolvedSizes missing vstack child: ${w}`);
              if (M.type === "el") {
                let F = M.content || "";
                if (F || M.props.style && Object.keys(M.props.style).length > 0) {
                  let L = await V(F, { ...M.props, w: h });
                  C2.w = h, C2.h = L.h, C2.hMeasured = true;
                } else C2.w = h;
              } else C2.w = h;
            }
          }
          let p = 0, S = 0;
          for (let w = 0; w < u.length; w++) {
            let M = $(i, u[w], `resolvedSizes missing vstack child: ${u[w]}`);
            p += M.h, w > 0 && (p += f), S = Math.max(S, M.w);
          }
          let y = h || S, E = a.props.h !== void 0 && a.props.h !== null ? a.props.h : p;
          i.set(c, { w: y, h: E, wMeasured: false, hMeasured: a.props.h === void 0 || a.props.h === null });
        } else {
          let p = a.props.h ?? 0, S = 0, y = 0;
          for (let M = 0; M < u.length; M++) {
            let C2 = $(i, u[M], `resolvedSizes missing hstack child: ${u[M]}`);
            S += C2.w, M > 0 && (S += f), y = Math.max(y, C2.h);
          }
          let E = a.props.w !== void 0 && a.props.w !== null ? a.props.w : S, w = p || y;
          i.set(c, { w: E, h: w, wMeasured: a.props.w === void 0 || a.props.w === null, hMeasured: a.props.h === void 0 || a.props.h === null });
        }
        s.delete(c), d = true;
      }
    }
  }
  if (s.size > 0) return o.push({ type: "unresolvable_stack_sizes", elementIds: Array.from(s), message: `Could not resolve sizes for stacks: ${Array.from(s).join(", ")}` }), { authoredSpecs: l, resolvedSizes: i, hasErrors: true };
  for (let [c, a] of e) {
    if (!se(a)) continue;
    let u = a._panelConfig;
    if (!u) continue;
    let f = a.children || [], h = f[0], m = f[1];
    if (!h || !m) continue;
    let p = i.get(m.id);
    if (!p) continue;
    let S = u.panelH ?? p.h + 2 * u.padding;
    if (i.has(h.id) && (i.get(h.id).h = S), i.has(c)) {
      let y = i.get(c);
      y.h = S, u.panelW && (y.w = u.panelW);
    } else i.set(c, { w: u.panelW || 0, h: S, wMeasured: false, hMeasured: u.panelH === void 0 || u.panelH === null });
  }
  for (let [c, a] of e) {
    if (a.type !== "group" || a.props.bounds !== "hug" || a._compound) continue;
    let u = n.get(c);
    if (!u || u.length === 0) continue;
    let f = 1 / 0, h = 1 / 0, m = -1 / 0, p = -1 / 0, S = 0;
    for (let w of u) {
      let M = $(e, w, `flatMap missing group child: ${w}`), C2 = i.get(w);
      if (!C2) continue;
      let F = M.props.x ?? 0, L = M.props.y ?? 0;
      !Number.isFinite(F) || !Number.isFinite(L) || (f = Math.min(f, F), h = Math.min(h, L), m = Math.max(m, F + C2.w), p = Math.max(p, L + C2.h), S++);
    }
    if (S === 0) continue;
    let y = m - f, E = p - h;
    if (i.has(c)) {
      let w = i.get(c);
      w.w = y, w.h = E;
    } else i.set(c, { w: y, h: E, wMeasured: false, hMeasured: false });
  }
  return { authoredSpecs: l, resolvedSizes: i, hasErrors: false };
}
async function Dt(e, t, n, o, r, l, i) {
  let s = i.length, d = /* @__PURE__ */ new Map();
  for (let [m, p] of e) {
    let S = /* @__PURE__ */ new Set();
    if (t.has(m)) {
      let y = $(t, m, `stackParent missing child: ${m}`);
      S.add(y), (U(p.props.x) || U(p.props.y)) && l.push({ type: "ignored_rel_on_stack_child", elementId: m, stackId: y, message: `Element "${m}" is a child of stack "${y}", so its relative positioning markers on x/y are ignored. Use gap/align on the stack instead.` });
    } else {
      let y = wt(p.props.x), E = wt(p.props.y);
      y && (e.has(y) ? S.add(y) : i.push({ type: "unknown_ref", elementId: m, property: "x", ref: y, message: `Element "${m}": x references unknown element "${y}"` })), E && (e.has(E) ? S.add(E) : i.push({ type: "unknown_ref", elementId: m, property: "y", ref: E, message: `Element "${m}": y references unknown element "${E}"` }));
      for (let w of ["x", "y"]) {
        let M = p.props[w];
        U(M) && M.ref2 !== void 0 && typeof M.ref2 == "string" && (e.has(M.ref2) ? S.add(M.ref2) : i.push({ type: "unknown_ref", elementId: m, property: w, ref: M.ref2, message: `Element "${m}": ${w} references unknown element "${M.ref2}" (ref2)` }));
      }
      if (p.type === "connector") {
        let w = p.props.fromId, M = p.props.toId;
        w && (e.has(w) ? S.add(w) : i.push({ type: "unknown_ref", elementId: m, property: "fromId", ref: w, message: `Connector "${m}": fromId references unknown element "${w}"` })), M && (e.has(M) ? S.add(M) : i.push({ type: "unknown_ref", elementId: m, property: "toId", ref: M, message: `Connector "${m}": toId references unknown element "${M}"` }));
      }
    }
    d.set(m, S);
  }
  if (i.length > s) return null;
  let c = /* @__PURE__ */ new Map();
  for (let [m] of e) c.set(m, 0);
  for (let [m, p] of d) c.set(m, p.size);
  let a = [];
  for (let [m, p] of c) p === 0 && a.push(m);
  let u = /* @__PURE__ */ new Map();
  for (let [m] of e) u.set(m, []);
  for (let [m, p] of d) for (let S of p) $(u, S, `reverseDeps missing element: ${S}`).push(m);
  let f = [];
  for (; a.length > 0; ) {
    let m = a.shift();
    f.push(m);
    for (let p of $(u, m, `reverseDeps missing node: ${m}`)) {
      let S = $(c, p, `inDegree missing element: ${p}`) - 1;
      c.set(p, S), S === 0 && a.push(p);
    }
  }
  if (f.length < e.size) {
    let m = new Set(f), p = [];
    for (let [S] of e) m.has(S) || p.push(S);
    return i.push({ type: "dependency_cycle", elementIds: p, message: `Circular dependency detected among elements: ${p.join(", ")}` }), null;
  }
  let h = /* @__PURE__ */ new Map();
  for (let m of f) {
    let p = $(e, m, `flatMap missing element: ${m}`), S = $(o, m, `resolvedSizes missing element: ${m}`), y = S.w, E = S.h, w, M;
    if (t.has(m)) {
      if (h.has(m)) {
        let C2 = $(h, m, `resolvedBounds missing stack child: ${m}`);
        w = C2.x, M = C2.y;
      } else w = 0, M = 0, h.set(m, { x: 0, y: 0, w: y, h: E });
      if (p.type !== "vstack" && p.type !== "hstack") continue;
    } else {
      let C2 = U(p.props.x), F;
      if (C2) {
        let g = p.props.x;
        if (g._rel === "centerIn") {
          let b = g.rect;
          F = b.x + b.w / 2 - y / 2;
        } else if (g._rel === "between") {
          let b = $(h, g.ref, `resolvedBounds missing ref for between-x: ${g.ref}`), v = b.x + b.w, k = typeof g.ref2 == "string" ? $(h, g.ref2, `resolvedBounds missing ref2 for between-x: ${g.ref2}`).x : g.ref2;
          if (typeof k != "number" || !Number.isFinite(k)) {
            l.push({ type: "between_invalid_ref", elementId: m, axis: "x", message: "Invalid ref2 value for between constraint" }), F = v + W("xs"), h.set(m, { x: F, y: p.props.y ?? 0, w: y, h: E });
            continue;
          }
          let A = k - v, _ = A - y;
          if (_ < 0) {
            let P = typeof g.ref2 == "string" ? `"${g.ref2}"` : g.ref2;
            l.push({ type: "between_no_fit", elementId: m, ref1: g.ref, ref2: g.ref2, message: `Element "${m}" (w=${y}) does not fit between "${g.ref}" and ${P} (available: ${A}px). Using minimum gap fallback.`, suggestion: `Increase horizontal space between "${g.ref}" and ${P} to at least ${y + 2 * W("xs")}px, or reduce element width.` }), F = v + W("xs");
          } else F = v + _ * (g.bias ?? 0.5);
        } else {
          let b = g.ref, v = $(h, b, `resolvedBounds missing ref for x: ${b}`);
          F = St(g, "x", v, y, E);
        }
      } else F = p.props.x ?? 0;
      let L = U(p.props.y), N;
      if (L) {
        let g = p.props.y;
        if (g._rel === "centerIn") {
          let b = g.rect;
          N = b.y + b.h / 2 - E / 2;
        } else if (g._rel === "between") {
          let b = $(h, g.ref, `resolvedBounds missing ref for between-y: ${g.ref}`), v = b.y + b.h, k = typeof g.ref2 == "string" ? $(h, g.ref2, `resolvedBounds missing ref2 for between-y: ${g.ref2}`).y : g.ref2;
          if (typeof k != "number" || !Number.isFinite(k)) {
            l.push({ type: "between_invalid_ref", elementId: m, axis: "y", message: "Invalid ref2 value for between constraint" }), N = v + W("xs"), h.set(m, { x: p.props.x ?? 0, y: N, w: y, h: E });
            continue;
          }
          let A = k - v, _ = A - E;
          if (_ < 0) {
            let P = typeof g.ref2 == "string" ? `"${g.ref2}"` : g.ref2;
            l.push({ type: "between_no_fit", elementId: m, ref1: g.ref, ref2: g.ref2, message: `Element "${m}" (h=${E}) does not fit between "${g.ref}" and ${P} (available: ${A}px). Using minimum gap fallback.`, suggestion: `Increase vertical space between "${g.ref}" and ${P} to at least ${E + 2 * W("xs")}px, or reduce element height.` }), N = v + W("xs");
          } else N = v + _ * (g.bias ?? 0.5);
        } else {
          let b = g.ref, v = $(h, b, `resolvedBounds missing ref for y: ${b}`);
          N = St(g, "y", v, y, E);
        }
      } else N = p.props.y ?? 0;
      let O = p.props.anchor || "tl", { left: x, top: R } = ne(F, N, y, E, O);
      w = C2 ? F : x, M = L ? N : R, h.set(m, { x: w, y: M, w: y, h: E });
    }
    if (p.type === "vstack" || p.type === "hstack") {
      let C2 = n.get(m) || [], F = W(p.props.gap ?? 0), L = w, N = M;
      if (p.type === "vstack") {
        let O = p.props.align || "left", x = N;
        if (O === "stretch") {
          let R = C2.length > 0 ? Math.max(...C2.map((v) => $(o, v, `resolvedSizes missing stack child: ${v}`).w)) : 0, g = r.get(m)?.props?.w, b = g != null ? y : R;
          for (let v = 0; v < C2.length; v++) {
            let k = C2[v], A = $(o, k, `resolvedSizes missing vstack child: ${k}`), _ = $(r, k, `authoredSpecs missing vstack child: ${k}`).props.w;
            _ != null && _ !== b && l.push({ type: "stretch_override", elementId: k, property: "w", authored: _, stretched: b, message: `Child '${k}' has authored w=${_} but stretch requires w=${b}.` });
            let P = $(e, k, `flatMap missing vstack child: ${k}`), T = r.get(k)?.props || {}, H = A.h;
            P?.type === "el" && b !== A.w && (T.h === void 0 || T.h === null) && (H = (await V(P.content || "", { ...P.props, w: b })).h, A.h = H), h.set(k, { x: L, y: x, w: b, h: H }), x += H + F;
          }
        } else for (let R = 0; R < C2.length; R++) {
          let g = C2[R], b = $(o, g, `resolvedSizes missing vstack child: ${g}`), v;
          O === "center" ? v = L + (y - b.w) / 2 : O === "right" ? v = L + y - b.w : v = L, h.set(g, { x: v, y: x, w: b.w, h: b.h }), x += b.h + F;
        }
      } else {
        let O = p.props.align || "top", x = L;
        if (O === "stretch") {
          let R = C2.length > 0 ? Math.max(...C2.map((v) => $(o, v, `resolvedSizes missing hstack child: ${v}`).h)) : 0, g = r.get(m)?.props?.h, b = g != null ? E : R;
          for (let v = 0; v < C2.length; v++) {
            let k = C2[v], A = $(o, k, `resolvedSizes missing hstack child: ${k}`), _ = $(r, k, `authoredSpecs missing hstack child: ${k}`).props.h;
            _ != null && _ !== b && l.push({ type: "stretch_override", elementId: k, property: "h", authored: _, stretched: b, message: `Child '${k}' has authored h=${_} but stretch requires h=${b}.` }), h.set(k, { x, y: N, w: A.w, h: b });
            let P = $(e, k, `flatMap missing hstack child: ${k}`);
            if (se(P) && P.children && P.children.length >= 1) {
              let T = P.children[0], H = o.get(T.id);
              H && (H.h = b);
              let B = h.get(T.id);
              B && (B.h = b);
            }
            x += A.w + F;
          }
        } else for (let R = 0; R < C2.length; R++) {
          let g = C2[R], b = $(o, g, `resolvedSizes missing hstack child: ${g}`), v;
          O === "middle" ? v = N + (E - b.h) / 2 : O === "bottom" ? v = N + E - b.h : v = N, h.set(g, { x, y: v, w: b.w, h: b.h }), x += b.w + F;
        }
      }
    }
  }
  return { resolvedBounds: h, sortedOrder: f };
}
function jt({ sortedOrder: e, flatMap: t, authoredSpecs: n, resolvedBounds: o, resolvedSizes: r, stackParent: l, stackChildren: i, groupParent: s, groupChildren: d, panelInternals: c, preTransformBounds: a, resolvedTransforms: u, warnings: f, errors: h, collisionThreshold: m }) {
  let p = {};
  for (let x of e) {
    let R = $(t, x, `flatMap missing element: ${x}`), g = $(n, x, `authoredSpecs missing element: ${x}`), b = $(o, x, `resolvedBounds missing element: ${x}`), v = $(r, x, `resolvedSizes missing element: ${x}`), k;
    if (l.has(x)) {
      let H = $(l, x, `stackParent missing child: ${x}`);
      k = { x: { source: "stack", stackId: H }, y: { source: "stack", stackId: H }, w: ie(g.props.w, "w", R, v.wMeasured), h: ie(g.props.h, "h", R, v.hMeasured) };
    } else k = { x: ie(g.props.x, "x", R, false), y: ie(g.props.y, "y", R, false), w: ie(g.props.w, "w", R, v.wMeasured), h: ie(g.props.h, "h", R, v.hMeasured) };
    let A = a.get(x);
    A && (b.x !== A.x && (k.x = { source: "transform", original: k.x }), b.y !== A.y && (k.y = { source: "transform", original: k.y }), b.w !== A.w && (k.w = { source: "transform", original: k.w }), b.h !== A.h && (k.h = { source: "transform", original: k.h }));
    let _ = s.get(x) ?? l.get(x) ?? null, P = [];
    R.type === "group" && d.has(x) ? P = $(d, x, `groupChildren missing group: ${x}`) : (R.type === "vstack" || R.type === "hstack") && i.has(x) && (P = $(i, x, `stackChildren missing stack: ${x}`));
    let T;
    if (!_) T = { ...b };
    else if (s.has(x)) T = { ...b };
    else {
      let H = o.get(_);
      H ? T = { x: b.x - H.x, y: b.y - H.y, w: b.w, h: b.h } : T = { ...b };
    }
    p[x] = { id: x, type: R.type, authored: g, resolved: { ...b }, localResolved: T, parentId: _, children: P, _internal: c.has(x), provenance: k }, "_compound" in R && R._compound === "panel" && "children" in R && R.children && (p[x].panelChildren = R.children.map((H) => {
      let B = o.get(H.id);
      return { id: H.id, type: H.type, ...B || {} };
    })), R._layoutFlags && (p[x]._layoutFlags = { ...R._layoutFlags });
  }
  let S = [];
  for (let x of e) p[x] && p[x].parentId === null && S.push(x);
  for (let x of e) {
    let R = $(t, x, `flatMap missing element: ${x}`);
    if (R.type !== "connector") continue;
    let g = R.props.fromId, b = R.props.toId;
    if (g === b) {
      f.push({ type: "connector_self_reference", elementId: x, message: `Connector "${x}": fromId and toId are the same element ("${g}")` });
      continue;
    }
    let v = o.get(g), k = o.get(b);
    if (!v || !k) {
      f.push({ type: "connector_missing_endpoint", elementId: x, message: `Connector "${x}": could not resolve endpoints (from: "${g}", to: "${b}")` });
      continue;
    }
    let A = R.props.fromAnchor || "cr", _ = R.props.toAnchor || "cl", P = ue(v, A), T = ue(k, _);
    if (P.dx === 0 && P.dy === 0) {
      let G = T.x - P.x, pe = T.y - P.y;
      Math.abs(G) >= Math.abs(pe) ? P.dx = G >= 0 ? 1 : -1 : P.dy = pe >= 0 ? 1 : -1;
    }
    if (T.dx === 0 && T.dy === 0) {
      let G = P.x - T.x, pe = P.y - T.y;
      Math.abs(G) >= Math.abs(pe) ? T.dx = G >= 0 ? 1 : -1 : T.dy = pe >= 0 ? 1 : -1;
    }
    let H = re({ from: P, to: T }), B = 1 / 0, K = 1 / 0, q = -1 / 0, be = -1 / 0;
    for (let G of H.waypoints) G.x < B && (B = G.x), G.y < K && (K = G.y), G.x > q && (q = G.x), G.y > be && (be = G.y);
    if (o.set(x, { x: B, y: K, w: q - B, h: be - K }), p[x]) {
      let G = { x: B, y: K, w: q - B, h: be - K };
      p[x].resolved = { ...G }, p[x].localResolved = { ...G }, p[x]._connectorResolved = { from: P, to: T, fromId: g, toId: b, fromAnchor: A, toAnchor: _ };
    }
  }
  let y = [];
  function E(x) {
    let R = o.get(x);
    if (!R) return null;
    let g = 0, b = 0, v = x;
    for (; ; ) {
      let k = s.get(v);
      if (k) {
        let _ = o.get(k);
        _ && (g += _.x, b += _.y), v = k;
        continue;
      }
      let A = l.get(v);
      if (A) {
        v = A;
        continue;
      }
      break;
    }
    return { x: R.x + g, y: R.y + b, w: R.w, h: R.h };
  }
  function w(x, R) {
    let g = R;
    for (; ; ) {
      let b = s.get(g);
      if (b) {
        if (b === x) return true;
        g = b;
        continue;
      }
      let v = l.get(g);
      if (v) {
        if (v === x) return true;
        g = v;
        continue;
      }
      return false;
    }
  }
  let M = { bg: [], content: [], overlay: [] };
  for (let x of e) {
    let R = $(t, x, `flatMap missing element in collision detection: ${x}`);
    if (s.has(x) || R.type === "vstack" || R.type === "hstack") continue;
    let g = o.get(x);
    if (!g || g.w <= 0 || g.h <= 0) continue;
    let b = R.props.layer || "content";
    M[b] || (M[b] = []), M[b].push(x);
  }
  for (let x of Object.keys(M)) {
    let R = M[x];
    for (let g = 0; g < R.length; g++) for (let b = g + 1; b < R.length; b++) {
      let v = R[g], k = R[b];
      if (w(v, k) || w(k, v)) continue;
      let A = E(v), _ = E(k);
      if (!A || !_) continue;
      let P = t.get(v), T = t.get(k);
      if (P?.props?.rotate) {
        let B = fe(A.w, A.h, P.props.rotate), K = A.x + A.w / 2, q = A.y + A.h / 2;
        A = { x: K - B.w / 2, y: q - B.h / 2, w: B.w, h: B.h };
      }
      if (T?.props?.rotate) {
        let B = fe(_.w, _.h, T.props.rotate), K = _.x + _.w / 2, q = _.y + _.h / 2;
        _ = { x: K - B.w / 2, y: q - B.h / 2, w: B.w, h: B.h };
      }
      let H = Wt(A, _);
      if (H) {
        let B = H.w * H.h;
        B > m && y.push({ elementA: v, elementB: k, overlapRect: H, overlapArea: B });
      }
    }
  }
  let C2 = I.config, F = C2?.slide?.w ?? 1920, L = C2?.slide?.h ?? 1080, N = C2?.strict === true, O = I.safeRectCache;
  if (O) for (let x of e) {
    let R = $(t, x, `flatMap missing element in safe-zone check: ${x}`);
    if (R.props.layer === "bg" || s.has(x) || l.has(x) || R.type === "vstack" || R.type === "hstack") continue;
    let g = $(o, x, `resolvedBounds missing element in safe-zone check: ${x}`);
    if (g.x < O.x || g.y < O.y || g.x + g.w > O.x + O.w || g.y + g.h > O.y + O.h) {
      let v = ". If intentional, set layer: 'bg' to silence this check.";
      N ? h.push({ type: "outside_safe_zone", elementId: x, resolved: { ...g }, safeRect: { ...O }, message: `Element "${x}" extends outside the safe zone` + v }) : f.push({ type: "outside_safe_zone", elementId: x, resolved: { ...g }, safeRect: { ...O }, message: `Element "${x}" extends outside the safe zone` + v });
    }
  }
  for (let x of e) {
    let R = $(t, x, `flatMap missing element in slide-bounds check: ${x}`);
    if (s.has(x) || l.has(x) || R.type === "vstack" || R.type === "hstack") continue;
    let g = $(o, x, `resolvedBounds missing element in slide-bounds check: ${x}`);
    (g.x < 0 || g.y < 0 || g.x + g.w > F || g.y + g.h > L) && (N ? h.push({ type: "outside_slide", elementId: x, resolved: { ...g }, slideRect: { x: 0, y: 0, w: F, h: L }, message: `Element "${x}" extends outside the slide bounds (${F}x${L})` }) : f.push({ type: "outside_slide", elementId: x, resolved: { ...g }, slideRect: { x: 0, y: 0, w: F, h: L }, message: `Element "${x}" extends outside the slide bounds (${F}x${L})` }));
  }
  if (O) {
    let x = 1 / 0, R = 1 / 0, g = -1 / 0, b = -1 / 0, v = false;
    for (let k of e) {
      let A = $(t, k, `flatMap missing element in content-area check: ${k}`);
      if (A.props.layer !== "content" || s.has(k) || A.type === "vstack" || A.type === "hstack") continue;
      let _ = $(o, k, `resolvedBounds missing element in content-area check: ${k}`);
      v = true, x = Math.min(x, _.x), R = Math.min(R, _.y), g = Math.max(g, _.x + _.w), b = Math.max(b, _.y + _.h);
    }
    if (v) {
      let k = g - x, A = b - R, _ = k * A, P = O.w * O.h, T = _ / P;
      T < 0.4 ? f.push({ type: "content_clustered", usageRatio: T, contentBounds: { x, y: R, w: k, h: A }, message: `Content uses only ${(T * 100).toFixed(1)}% of the safe zone \u2014 content may be too clustered` }) : T > 0.95 && f.push({ type: "content_no_breathing_room", usageRatio: T, contentBounds: { x, y: R, w: k, h: A }, message: `Content uses ${(T * 100).toFixed(1)}% of the safe zone \u2014 no breathing room` });
    }
  }
  for (let [x, R] of t) {
    if (!se(R)) continue;
    let g = R._panelConfig;
    if (!g || g.panelH == null) continue;
    let b = (R.children || [])[1];
    if (!b) continue;
    let v = r.get(b.id);
    if (!v) continue;
    let k = v.h + 2 * g.padding, A = g.panelH;
    k > A && f.push({ type: "panel_overflow", elementId: x, contentHeight: k, authoredHeight: A, overflow: k - A, message: `Panel '${x}' content (${k}px) exceeds authored height (${A}px) by ${k - A}px. Remove explicit h to let panel size to content.` });
  }
  for (let [x, R] of t) {
    if (R.type !== "hstack" || (R.props.align || "top") === "stretch") continue;
    let b = i.get(x) || [];
    if (b.length < 2) continue;
    let v = [];
    for (let _ of b) {
      let P = o.get(_);
      P && v.push(P.h);
    }
    if (v.length < 2) continue;
    let k = Math.max(...v), A = Math.min(...v);
    k - A > 5 && f.push({ type: "ragged_bottom", elementId: x, childHeights: v, maxHeight: k, message: `hstack '${x}' has children with unequal heights (${A}-${k}px). Consider align: 'stretch' for equal-height cards.` });
  }
  for (let [x, R] of t) {
    if (R.type !== "group" || R.props.bounds === "hug" || R._compound) continue;
    let g = R.props.anchor;
    if (!g || typeof g != "string" || !g.includes("c") || g[1] !== "c") continue;
    let b = d.get(x) || [];
    if (b.length === 0) continue;
    let v = R.props.w;
    if (v == null) continue;
    let k = 1 / 0, A = -1 / 0, _ = 0;
    for (let T of b) {
      let H = o.get(T);
      H && (k = Math.min(k, H.x), A = Math.max(A, H.x + H.w), _++);
    }
    if (_ === 0) continue;
    let P = A - k;
    Math.abs(v - P) > 20 && f.push({ type: "off_center_assembly", elementId: x, authoredW: v, contentW: P, message: `Group '${x}' has authored w=${v} but content spans ${P}px. Consider bounds: 'hug' for accurate centering.` });
  }
  return { elements: p, rootIds: S, transforms: u, warnings: f, errors: h, collisions: y };
}
async function xe(e, t = {}) {
  let n = [], o = [], r = e.elements || [], l = e.transforms || [], i = t.collisionThreshold ?? 0, { flatMap: s, groupParent: d, stackParent: c, stackChildren: a, groupChildren: u, panelInternals: f } = Ot(r), { authoredSpecs: h, resolvedSizes: m, hasErrors: p } = await Nt(s, a, u, n, o);
  if (p) return { elements: {}, transforms: me(l), warnings: o, errors: n, collisions: [] };
  let S = await Dt(s, c, a, m, h, o, n);
  if (!S) return { elements: {}, transforms: me(l), warnings: o, errors: n, collisions: [] };
  let { resolvedBounds: y, sortedOrder: E } = S;
  await Bt(E, s, h, y, o, n), I.transformIdCounter = 0;
  let w = [];
  for (let C2 of l) {
    if (!C2 || typeof C2 != "object") {
      w.push(C2);
      continue;
    }
    let F = me(C2);
    F._transformId || (F._transformId = Y()), w.push(F);
  }
  let M = /* @__PURE__ */ new Map();
  for (let [C2, F] of y) M.set(C2, { x: F.x, y: F.y, w: F.w, h: F.h });
  for (let C2 of w) {
    if (!C2 || typeof C2._transform != "string") {
      o.push({ type: "invalid_transform_object", transform: C2, message: "Invalid object in transforms array. Each transform must be created by a SlideKit transform function." });
      continue;
    }
    let F = $t(C2, y, s);
    for (let L of F) o.push(L);
  }
  return I.fontWarnings && I.fontWarnings.length > 0 && (o.push(...I.fontWarnings), I.fontWarnings = []), jt({ sortedOrder: E, flatMap: s, authoredSpecs: h, resolvedBounds: y, resolvedSizes: m, stackParent: c, stackChildren: a, groupParent: d, groupChildren: u, panelInternals: f, preTransformBounds: M, resolvedTransforms: w, warnings: o, errors: n, collisionThreshold: i });
}
Tt(xe);

// slides.ts
var C = {
  bgPrimary: "#DAFBE1",
  // light mint green
  bgSecondary: "#1D3F4E",
  // dark teal
  bgWhite: "#FFFFFF",
  bgBrightGreen: "#6BD88B",
  // bright green (problem slide bg)
  textPrimary: "#1A2F3D",
  // deep navy-teal
  textSecondary: "#3D5A5A",
  // muted teal-gray body
  textOnDark: "#FFFFFF",
  textOnDarkMuted: "#B0D4C8",
  accent1: "#5CC87C",
  // bright medium green
  accent2: "#3A8B85",
  // medium teal-green
  accent3: "#2B6B6A",
  // darker teal
  categoryLabel: "#3E9B6A",
  // category labels
  decorCircle: "#2D6060",
  // decorative circles on dark bg
  border: "#C5E8D0"
};
var SERIF = "DM Serif Display";
var SANS = "DM Sans";
var pill = (bg) => `background:${bg};border-radius:9999px;padding:18px 32px;`;
function templateLabel(name, id, dark = false, extra = {}) {
  const color = dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.18)";
  return J(
    `<p style="font-family:${SANS};font-size:13px;font-weight:400;color:${color};letter-spacing:0.02em;">Template: ${name}</p>`,
    { id, ...extra }
  );
}
function yearMarker(id, dark = false, extra = {}) {
  const color = dark ? C.accent1 : C.textPrimary;
  return J(
    `<p style="font-family:${SANS};font-size:18px;font-weight:500;color:${color};">2025</p>`,
    { id, w: 80, h: 28, ...extra }
  );
}
function pageNumber(num, id, dark = false, extra = {}) {
  const color = dark ? C.textOnDarkMuted : C.textPrimary;
  return J(
    `<p style="font-family:${SANS};font-size:14px;font-weight:500;color:${color};letter-spacing:0.1em;text-transform:uppercase;">PAGE ${num}</p>`,
    { id, w: 120, h: 24, ...extra }
  );
}
function categoryLabel(text, id, dark = false, extra = {}) {
  const color = dark ? C.accent1 : C.categoryLabel;
  return J(
    `<p style="font-family:${SANS};font-size:18px;font-weight:500;color:${color};text-transform:uppercase;letter-spacing:0.15em;">${text}</p>`,
    { id, h: 28, ...extra }
  );
}
function sectionHeading(text, id, dark = false, extra = {}) {
  const color = dark ? C.textOnDark : C.textPrimary;
  return J(
    `<h2 style="font-family:'${SERIF}',serif;font-size:64px;font-weight:400;color:${color};line-height:1.15;">${text}</h2>`,
    { id, ...extra }
  );
}
function decorCircle(id, x, y, size, color, opacity = 0.85) {
  return J(
    `<div style="width:100%;height:100%;border-radius:50%;background:${color};"></div>`,
    { id, x, y, w: size, h: size, opacity, layer: "bg" }
  );
}
async function run() {
  await Te({
    slide: { w: 1920, h: 1080 },
    safeZone: { left: 120, right: 120, top: 90, bottom: 90 },
    minFontSize: 12,
    fonts: [
      { family: "DM Serif Display", weights: [400], source: "google" },
      { family: "DM Sans", weights: [400, 500, 600, 700], source: "google" }
    ]
  });
  const safe = Oe();
  const slides = [
    // ================================================================
    // SLIDE 1: OVERVIEW / MOSAIC
    // ================================================================
    {
      id: "overview-mosaic",
      background: C.bgPrimary,
      notes: "Overview / Mosaic \u2014 visual table-of-contents",
      elements: (() => {
        const gap = 24;
        const cols = 3;
        const rows = 2;
        const thumbW = (safe.w - gap * (cols - 1)) / cols;
        const headerH = 160;
        const gridY = safe.y + headerH + 30;
        const thumbH = (safe.h - headerH - 30 - gap - 40) / rows;
        const thumbs = [
          { label: "Feature List", color: C.accent1, textColor: C.textPrimary },
          { label: "Team Grid", color: C.bgSecondary, textColor: C.textOnDark },
          { label: "Roadmap / Timeline", color: C.bgWhite, textColor: C.textPrimary },
          { label: "Problem / Radial", color: C.bgBrightGreen, textColor: C.textPrimary },
          { label: "Case Study", color: C.accent2, textColor: C.textOnDark },
          { label: "Contact", color: C.bgPrimary, textColor: C.textPrimary }
        ];
        const elements = [
          yearMarker("s1-year", false, { x: safe.x, y: safe.y }),
          categoryLabel("Deck Overview", "s1-cat", false, { x: safe.x, y: safe.y + 44, w: 400 }),
          J(`<h1 style="font-family:'${SERIF}',serif;font-size:52px;font-weight:400;color:${C.textPrimary};line-height:1.15;">SteerWise Trading Academy</h1>`, {
            id: "s1-title",
            x: safe.x,
            y: Ne("s1-cat", { gap: 12 }),
            w: safe.w,
            h: 66
          })
        ];
        for (let i = 0; i < thumbs.length; i++) {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const tx = safe.x + col * (thumbW + gap);
          const ty = gridY + row * (thumbH + gap);
          const t = thumbs[i];
          const borderStyle = t.color === C.bgWhite || t.color === C.bgPrimary ? `border:2px solid ${C.border};` : "";
          elements.push(
            J(`<div style="width:100%;height:100%;border-radius:9999px;background:${t.color};${borderStyle}display:flex;align-items:center;justify-content:center;">
              <p style="font-family:${SANS};font-size:22px;font-weight:600;color:${t.textColor};text-align:center;">${t.label}</p>
            </div>`, {
              id: `s1-thumb${i}`,
              x: tx,
              y: ty,
              w: thumbW,
              h: thumbH
            })
          );
        }
        elements.push(
          pageNumber("01", "s1-page", false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel("Overview / Mosaic", "s1-tpl", false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 260 })
        );
        return elements;
      })()
    },
    // ================================================================
    // SLIDE 2: FEATURE LIST
    // ================================================================
    {
      id: "feature-list",
      background: C.bgPrimary,
      notes: "Feature List \u2014 The SteerWise Advantage",
      elements: (() => {
        const { left, right } = en(safe, { ratio: 0.38, gap: 60 });
        const features = [
          { text: "Live market analysis with AI-powered signals", bg: C.bgWhite, color: C.textPrimary, icon: "\u{1F4CA}" },
          { text: "Personalized risk management coaching", bg: C.accent1, color: C.textPrimary, icon: "\u{1F6E1}\uFE0F" },
          { text: "Community of 5,000+ active traders", bg: C.accent2, color: C.textOnDark, icon: "\u{1F465}" },
          { text: "Institutional-grade research & tools", bg: C.bgSecondary, color: C.textOnDark, icon: "\u{1F52C}" }
        ];
        const pillH = 72;
        const pillGap = 24;
        const startY = right.y + 100;
        const elements = [
          yearMarker("s2-year", false, { x: safe.x, y: safe.y }),
          categoryLabel("Why Choose Us?", "s2-cat", false, { x: left.x, y: left.y + 240, w: left.w }),
          sectionHeading("The SteerWise<br>Advantage", "s2-heading", false, {
            x: left.x,
            y: Ne("s2-cat", { gap: 16 }),
            w: left.w,
            h: 160
          })
        ];
        for (let i = 0; i < features.length; i++) {
          const f = features[i];
          const fy = startY + i * (pillH + pillGap);
          const circSize = 56;
          elements.push(
            J(`<div style="width:100%;height:100%;border-radius:50%;background:${i < 2 ? C.accent1 : "#DAFBE1"};display:flex;align-items:center;justify-content:center;">
              <span style="font-size:24px;line-height:1;">${f.icon}</span>
            </div>`, {
              id: `s2-icon${i}`,
              x: right.x,
              y: fy + (pillH - circSize) / 2,
              w: circSize,
              h: circSize
            })
          );
          elements.push(
            J(`<div style="${pill(f.bg)}display:flex;align-items:center;min-height:${pillH - 36}px;">
              <p style="font-family:${SANS};font-size:20px;font-weight:400;color:${f.color};line-height:1.4;margin:0;">${f.text}</p>
            </div>`, {
              id: `s2-pill${i}`,
              x: right.x + circSize + 16,
              y: fy,
              w: right.w - circSize - 16
            })
          );
        }
        elements.push(
          pageNumber("02", "s2-page", false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel("Feature List", "s2-tpl", false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 240 })
        );
        return elements;
      })()
    },
    // ================================================================
    // SLIDE 3: TEAM GRID
    // ================================================================
    {
      id: "team-grid",
      background: C.bgSecondary,
      notes: "Team Grid \u2014 Meet the Minds Behind SteerWise",
      elements: (() => {
        const team = [
          { name: "Sarah Chen", role: "Head of Research", initials: "SC" },
          { name: "Marcus Obi", role: "Lead Strategist", initials: "MO" },
          { name: "Elena Torres", role: "Risk Analyst", initials: "ET" }
        ];
        const decoCircles = [
          { x: 80, y: 120, s: 140 },
          { x: 250, y: 80, s: 100 },
          { x: 160, y: 300, s: 180 },
          { x: 60, y: 520, s: 120 },
          { x: 280, y: 480, s: 90 },
          { x: 100, y: 700, s: 160 },
          { x: 320, y: 680, s: 110 },
          { x: 200, y: 860, s: 80 }
        ];
        const elements = [];
        for (let i = 0; i < decoCircles.length; i++) {
          const d = decoCircles[i];
          elements.push(decorCircle(`s3-deco${i}`, d.x, d.y, d.s, C.decorCircle, 0.7));
        }
        const headX = safe.x + safe.w * 0.55;
        const headW = safe.w * 0.4;
        elements.push(
          yearMarker("s3-year", true, { x: headX, y: safe.y }),
          categoryLabel("Our Team", "s3-cat", true, { x: headX, y: safe.y + safe.h * 0.38, w: headW }),
          sectionHeading("Meet the Minds<br>Behind SteerWise", "s3-heading", true, {
            x: headX,
            y: Ne("s3-cat", { gap: 16 }),
            w: headW,
            h: 160
          })
        );
        const cardStartX = 460;
        const cardPositions = [
          { x: cardStartX, y: 130 },
          { x: cardStartX + 70, y: 390 },
          { x: cardStartX - 40, y: 640 }
        ];
        for (let i = 0; i < team.length; i++) {
          const t = team[i];
          const p = cardPositions[i];
          const photoSize = 90;
          elements.push(
            J(`<div style="width:100%;height:100%;border-radius:50%;background:${C.bgWhite};border:3px solid ${C.bgWhite};display:flex;align-items:center;justify-content:center;">
              <span style="font-family:${SANS};font-size:28px;font-weight:700;color:${C.accent2};">${t.initials}</span>
            </div>`, {
              id: `s3-photo${i}`,
              x: p.x,
              y: p.y,
              w: photoSize,
              h: photoSize
            })
          );
          elements.push(
            J(`<div style="${pill(C.accent1)}">
              <p style="font-family:${SANS};font-size:18px;font-weight:600;color:${C.textPrimary};margin:0;">${t.name}</p>
              <p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};margin:4px 0 0 0;">${t.role}</p>
            </div>`, {
              id: `s3-pill${i}`,
              x: p.x + photoSize + 14,
              y: p.y + 8,
              w: 280
            })
          );
        }
        elements.push(
          pageNumber("03", "s3-page", true, { x: headX, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel("Team Grid", "s3-tpl", true, { x: headX + 140, y: safe.y + safe.h - 30, w: 200 })
        );
        return elements;
      })()
    },
    // ================================================================
    // SLIDE 4: ROADMAP / TIMELINE
    // ================================================================
    {
      id: "roadmap-timeline",
      background: C.bgWhite,
      notes: "Roadmap / Timeline \u2014 The Future of SteerWise",
      elements: (() => {
        const phases = [
          {
            title: "Short Term",
            items: "Launch mobile trading alerts, expand AI signal accuracy to 92%, onboard 2,000 new members",
            icon: "\u26A1",
            bg: C.bgPrimary,
            textColor: C.textPrimary,
            iconBg: C.accent1
          },
          {
            title: "Medium Term",
            items: "Open European markets coverage, introduce copy-trading feature, partner with 3 major brokers",
            icon: "\u{1F4C8}",
            bg: C.accent2,
            textColor: C.textOnDark,
            iconBg: C.bgPrimary
          },
          {
            title: "Long Term",
            items: "Launch SteerWise Fund, AI-driven portfolio management, global expansion across 20 markets",
            icon: "\u{1F30D}",
            bg: C.bgSecondary,
            textColor: C.textOnDark,
            iconBg: C.accent1
          }
        ];
        const topSectionH = Math.round(safe.h * 0.4);
        const colGap = 0;
        const cols = 3;
        const colW = Math.floor(safe.w / cols);
        const colH = safe.h - topSectionH;
        const colY = safe.y + topSectionH;
        const elements = [
          yearMarker("s4-year", false, { x: safe.x, y: safe.y }),
          pageNumber("04", "s4-page", false, { x: safe.x + safe.w - 120, y: safe.y, w: 120 }),
          categoryLabel("Our Roadmap", "s4-cat", false, {
            x: 960,
            y: safe.y + 100,
            w: 300,
            anchor: "tc",
            style: { textAlign: "center" }
          }),
          J(`<h2 style="font-family:'${SERIF}',serif;font-size:56px;font-weight:400;color:${C.textPrimary};line-height:1.15;text-align:center;">The Future of SteerWise</h2>`, {
            id: "s4-title",
            x: 960,
            y: Ne("s4-cat", { gap: 16 }),
            w: 900,
            h: 72,
            anchor: "tc"
          })
        ];
        for (let i = 0; i < phases.length; i++) {
          const p = phases[i];
          const cx = safe.x + i * colW;
          const iconSize = 80;
          elements.push(
            J(`<div style="width:100%;height:100%;background:${p.bg};"></div>`, {
              id: `s4-col${i}`,
              x: cx,
              y: colY,
              w: colW,
              h: colH,
              layer: "bg"
            })
          );
          elements.push(
            J(`<div style="width:${iconSize}px;height:${iconSize}px;border-radius:50%;background:${p.iconBg};display:flex;align-items:center;justify-content:center;margin:0 auto;">
              <span style="font-size:32px;line-height:1;">${p.icon}</span>
            </div>`, {
              id: `s4-icon${i}`,
              x: cx + (colW - iconSize) / 2,
              y: colY + 50,
              w: iconSize,
              h: iconSize
            })
          );
          elements.push(
            J(`<p style="font-family:${SANS};font-size:24px;font-weight:600;color:${p.textColor};text-align:center;">${p.title}</p>`, {
              id: `s4-phase${i}`,
              x: cx + 32,
              y: Ne(`s4-icon${i}`, { gap: 24 }),
              w: colW - 64,
              h: 34
            })
          );
          elements.push(
            J(`<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${p.textColor};line-height:1.6;text-align:center;opacity:0.85;">${p.items}</p>`, {
              id: `s4-body${i}`,
              x: cx + 40,
              y: Ne(`s4-phase${i}`, { gap: 16 }),
              w: colW - 80
            })
          );
        }
        elements.push(
          templateLabel("Roadmap / Timeline", "s4-tpl", false, { x: safe.x, y: safe.y + safe.h - 30, w: 260 })
        );
        return elements;
      })()
    },
    // ================================================================
    // SLIDE 5: PROBLEM / RADIAL
    // ================================================================
    {
      id: "problem-radial",
      background: C.bgBrightGreen,
      notes: "Problem / Radial \u2014 The Challenges Traders Face Today",
      elements: (() => {
        const cx = 960;
        const cy = 540;
        const bigCircleR = 300;
        const challenges = [
          { text: "Information overload from too many signal providers", icon: "\u{1F4E1}", angle: -55 },
          { text: "Emotional trading decisions without a structured plan", icon: "\u{1F630}", angle: 35 },
          { text: "Lack of proper risk management frameworks", icon: "\u26A0\uFE0F", angle: 145 },
          { text: "No access to institutional-grade analytics tools", icon: "\u{1F512}", angle: 235 }
        ];
        const bubbleR = 125;
        const orbitR = 420;
        const elements = [
          yearMarker("s5-year", false, { x: safe.x, y: safe.y }),
          // Large decorative circle behind content
          decorCircle("s5-bigcircle", cx - bigCircleR, cy - bigCircleR, bigCircleR * 2, C.bgPrimary, 0.3),
          // Center heading
          categoryLabel("Market Reality", "s5-cat", false, {
            x: cx,
            y: cy - 50,
            w: 400,
            anchor: "tc",
            style: { textAlign: "center" }
          }),
          J(`<h2 style="font-family:'${SERIF}',serif;font-size:48px;font-weight:400;color:${C.textPrimary};line-height:1.15;text-align:center;">Challenges<br>Traders Face</h2>`, {
            id: "s5-title",
            x: cx,
            y: Ne("s5-cat", { gap: 12 }),
            w: 400,
            h: 120,
            anchor: "tc"
          })
        ];
        for (let i = 0; i < challenges.length; i++) {
          const c = challenges[i];
          const rad = c.angle * Math.PI / 180;
          const bx = cx + orbitR * Math.cos(rad) - bubbleR;
          const by = cy + orbitR * Math.sin(rad) - bubbleR;
          elements.push(
            J(`<div style="width:100%;height:100%;border-radius:50%;background:${C.bgSecondary};display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px;">
              <span style="font-size:32px;line-height:1;margin-bottom:12px;">${c.icon}</span>
              <p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textOnDark};text-align:center;line-height:1.5;margin:0;">${c.text}</p>
            </div>`, {
              id: `s5-bubble${i}`,
              x: bx,
              y: by,
              w: bubbleR * 2,
              h: bubbleR * 2
            })
          );
        }
        elements.push(
          pageNumber("05", "s5-page", false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel("Problem / Radial", "s5-tpl", false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 260 })
        );
        return elements;
      })()
    },
    // ================================================================
    // SLIDE 6: CASE STUDY / TESTIMONIAL
    // ================================================================
    {
      id: "case-study",
      background: C.bgPrimary,
      notes: "Case Study / Testimonial \u2014 SteerWise in Action",
      elements: (() => {
        const photoW = safe.w * 0.32;
        const photoH = safe.h * 0.55;
        const photoX = safe.x + 20;
        const photoY = safe.y + 60;
        const testimR = 250;
        const testimCx = safe.x + safe.w * 0.65;
        const testimCy = safe.y + safe.h * 0.42;
        const statR = 130;
        const statCx = safe.x + safe.w * 0.5;
        const statCy = safe.y + safe.h * 0.78;
        const elements = [
          yearMarker("s6-year", false, { x: safe.x, y: safe.y }),
          // Photo placeholder (person cutout area)
          J(`<div style="width:100%;height:100%;border-radius:32px;background:linear-gradient(180deg, ${C.accent1}44, ${C.accent2}44);display:flex;align-items:center;justify-content:center;">
            <div style="width:160px;height:160px;border-radius:50%;background:${C.bgWhite};border:4px solid ${C.bgWhite};display:flex;align-items:center;justify-content:center;">
              <span style="font-family:${SANS};font-size:44px;font-weight:700;color:${C.accent2};">JR</span>
            </div>
          </div>`, {
            id: "s6-photo",
            x: photoX,
            y: photoY,
            w: photoW,
            h: photoH
          }),
          // Heading area - below the photo
          categoryLabel("Success Story", "s6-cat", false, {
            x: safe.x,
            y: photoY + photoH + 24,
            w: 300
          }),
          sectionHeading("SteerWise<br>in Action", "s6-heading", false, {
            x: safe.x,
            y: Ne("s6-cat", { gap: 12 }),
            w: 400,
            h: 155
          }),
          // Supporting text (above testimonial, non-overlapping)
          J(`<p style="font-family:${SANS};font-size:17px;font-weight:400;color:${C.textSecondary};line-height:1.6;">James joined SteerWise as a retail trader struggling with consistency. Within 6 months, he developed a systematic approach that transformed his results.</p>`, {
            id: "s6-support",
            x: testimCx - testimR,
            y: safe.y + 80,
            w: testimR * 2
          }),
          // Testimonial circle
          J(`<div style="width:100%;height:100%;border-radius:50%;background:${C.accent1};display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px;">
            <p style="font-family:${SANS};font-size:18px;font-weight:600;color:${C.textPrimary};margin:0 0 12px 0;">James Rivera</p>
            <p style="font-family:${SANS};font-size:15px;font-weight:400;color:${C.textPrimary};text-align:center;line-height:1.6;margin:0;opacity:0.85;">"SteerWise gave me the framework I needed. The community support and AI signals changed everything."</p>
          </div>`, {
            id: "s6-testimonial",
            x: testimCx - testimR,
            y: testimCy - testimR + 60,
            w: testimR * 2,
            h: testimR * 2
          }),
          // Stat badge - positioned to not overlap testimonial
          J(`<div style="width:100%;height:100%;border-radius:50%;background:${C.bgWhite};display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;">
            <p style="font-family:${SANS};font-size:42px;font-weight:700;color:${C.textPrimary};margin:0;line-height:1;">30%</p>
            <p style="font-family:${SANS};font-size:14px;font-weight:400;color:${C.textSecondary};margin:6px 0 0 0;text-align:center;">avg. monthly return improvement</p>
          </div>`, {
            id: "s6-stat",
            x: statCx - statR,
            y: statCy - statR,
            w: statR * 2,
            h: statR * 2,
            parentId: "s6-testimonial"
          }),
          // Icon badges
          J(`<div style="width:52px;height:52px;border-radius:50%;background:${C.accent1};display:flex;align-items:center;justify-content:center;">
            <span style="font-size:22px;line-height:1;">\u{1F4C8}</span>
          </div>`, {
            id: "s6-badge1",
            x: photoX + photoW + 30,
            y: safe.y + 100,
            w: 52,
            h: 52
          }),
          J(`<div style="width:52px;height:52px;border-radius:50%;background:${C.bgSecondary};display:flex;align-items:center;justify-content:center;">
            <span style="font-size:22px;line-height:1;">\u{1F4A1}</span>
          </div>`, {
            id: "s6-badge2",
            x: photoX + photoW + 100,
            y: safe.y + 80,
            w: 52,
            h: 52
          }),
          pageNumber("06", "s6-page", false, { x: safe.x, y: safe.y + safe.h - 30, w: 120 }),
          templateLabel("Case Study / Testimonial", "s6-tpl", false, { x: safe.x + 140, y: safe.y + safe.h - 30, w: 300 })
        ];
        return elements;
      })()
    }
  ];
  return await mt(slides);
}
export {
  run
};
//# sourceMappingURL=slides_bundle.js.map
