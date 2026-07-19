// Generates public/images/logo.svg — faithful SVG recreation of the client's
// original glossy Ost-West Reisen logo: yellow sun fused with the "o",
// glossy blue bubble lettering "oSt-WeSt", italic "REISEN", handwritten
// "EXKLUSIV AGENTUR KÖLN" and the ® mark. All text converted to paths.
//
// Usage:
//   npm i --no-save opentype.js@1.3.4   (2.x has a path-generation bug here)
//   Download TTFs into scripts/fonts/: Baloo2-ExtraBold.ttf,
//   PermanentMarker.ttf, Montserrat-BoldItalic.ttf — e.g. via
//   fonts.googleapis.com/css2 requested with a legacy User-Agent so it
//   serves truetype instead of woff2.
//   node scripts/generate-logo.js
const opentype = require("opentype.js");
const fs = require("fs");
const path = require("path");

const load = (n) => {
  const buf = fs.readFileSync(path.join(__dirname, "fonts", n));
  return opentype.parse(
    buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
  );
};
const baloo = load("Baloo2-ExtraBold.ttf");
const marker = load("PermanentMarker.ttf");
const boldItalic = load("Montserrat-BoldItalic.ttf");

// Measure a glyph's tight bbox at size 100.
function measure(font, ch) {
  return font.getPath(ch, 0, 0, 100).getBoundingBox();
}

// ---- wordmark: per-letter layout with normalized visual heights ------------
const B = 270; // wordmark baseline
const GAP = 15;

// target visual height per letter (bounce like the original lettering)
const letters = [
  { ch: "o", h: 118 },
  { ch: "S", h: 148 },
  { ch: "t", h: 162 },
  { ch: "-", manual: true },
  { ch: "W", h: 152 },
  { ch: "e", h: 120 },
  { ch: "S", h: 148 },
  { ch: "t", h: 162 },
];

let x = 137;
let wordD = "";
let oCenter = null;
let wordTop = Infinity;

for (const L of letters) {
  if (L.manual) {
    // chunky rounded hyphen, drawn by hand
    const w = 62, h = 34, y = B - 78;
    x += 6;
    wordD += ` M${x + h / 2} ${y} L${x + w - h / 2} ${y} A${h / 2} ${h / 2} 0 0 1 ${
      x + w - h / 2
    } ${y + h} L${x + h / 2} ${y + h} A${h / 2} ${h / 2} 0 0 1 ${x + h / 2} ${y}Z`;
    x += w + 6 + GAP;
    continue;
  }
  const m = measure(baloo, L.ch);
  const scale = L.h / (m.y2 - m.y1);
  const size = 100 * scale;
  // place so the glyph's left bbox edge lands on x, baseline on B
  const px = x - m.x1 * scale;
  const p = baloo.getPath(L.ch, px, B, size);
  const bb = p.getBoundingBox();
  wordD += " " + p.toPathData(2);
  wordTop = Math.min(wordTop, bb.y1);
  if (L.ch === "o" && !oCenter) {
    oCenter = { x: (bb.x1 + bb.x2) / 2, y: (bb.y1 + bb.y2) / 2 };
  }
  x = bb.x2 + GAP;
}
const wordEnd = x - GAP;

// ---- ® mark ----------------------------------------------------------------
const regH = 46;
const regM = measure(baloo, "®");
const regScale = regH / (regM.y2 - regM.y1);
const regX = wordEnd + 12 - regM.x1 * regScale;
const regTop = wordTop + 2;
const regY = regTop - regM.y1 * regScale;
const regD = baloo.getPath("®", regX, regY, 100 * regScale).toPathData(2);
const regRight = regX + regM.x2 * regScale;

// ---- sun fused with the "o" ------------------------------------------------
const CX = oCenter.x;
const CY = oCenter.y;
const DISC_R = 86;
const petals = [];
// 10 petals, alternating sizes, slight irregular angles like the original
const angles = [-90, -54, -18, 18, 54, 90, 126, 162, 198, 234];
angles.forEach((a, i) => {
  const big = i % 2 === 0;
  const rx = big ? 37 : 27; // along the ray
  const ry = big ? 24 : 17;
  const R = big ? 146 : 138;
  petals.push(
    `<ellipse cx="${CX + R}" cy="${CY}" rx="${rx}" ry="${ry}" transform="rotate(${a} ${CX} ${CY})"/>`,
  );
});

// ---- REISEN ----------------------------------------------------------------
const reisenSize = 66;
const reisenSp = 0.3;
const reisenW = boldItalic.getAdvanceWidth("REISEN", reisenSize, {
  kerning: true,
  letterSpacing: reisenSp,
});
const reisenD = boldItalic
  .getPath("REISEN", wordEnd - reisenW, B + 88, reisenSize, {
    kerning: true,
    letterSpacing: reisenSp,
  })
  .toPathData(2);

// ---- EXKLUSIV AGENTUR KÖLN -------------------------------------------------
const subText = "EXKLUSIV AGENTUR KÖLN";
const subLeft = 60;
const subRight = Math.max(wordEnd, regRight);
const subSp = 0.04;
const subSize =
  ((subRight - subLeft) /
    marker.getAdvanceWidth(subText, 100, { kerning: true, letterSpacing: subSp })) *
  100;
const subBase = 505;
const subD = marker
  .getPath(subText, subLeft, subBase, subSize, {
    kerning: true,
    letterSpacing: subSp,
  })
  .toPathData(2);
const skew = 10; // degrees, extra italic lean like the original
const subShift = (subBase * Math.tan((skew * Math.PI) / 180)).toFixed(1);

// ---- svg -------------------------------------------------------------------
const VB_W = Math.ceil(regRight + 26);
const VB_H = 550;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VB_W} ${VB_H}" role="img" aria-label="Ost-West Reisen — Exklusiv Agentur Köln">
  <defs>
    <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6fbdf5"/>
      <stop offset="0.38" stop-color="#2e7fdb"/>
      <stop offset="0.72" stop-color="#1257b8"/>
      <stop offset="1" stop-color="#0a3f9b"/>
    </linearGradient>
    <linearGradient id="blueFlat" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3f8ce2"/>
      <stop offset="1" stop-color="#0c47a6"/>
    </linearGradient>
    <radialGradient id="disc" cx="0.38" cy="0.32" r="0.9">
      <stop offset="0" stop-color="#fbe94a"/>
      <stop offset="0.6" stop-color="#f7d818"/>
      <stop offset="1" stop-color="#efc10c"/>
    </radialGradient>
    <linearGradient id="petal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f9e42c"/>
      <stop offset="1" stop-color="#eebd0e"/>
    </linearGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="wordClip"><path d="${wordD}"/></clipPath>
    <filter id="soft" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#6d87bd" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- sun -->
  <g filter="url(#soft)" stroke="#ffffff" stroke-width="10" stroke-linejoin="round" paint-order="stroke">
    <g fill="url(#petal)">
      ${petals.join("\n      ")}
    </g>
    <circle cx="${CX}" cy="${CY}" r="${DISC_R}" fill="url(#disc)"/>
  </g>
  <ellipse cx="${CX - 26}" cy="${CY - 30}" rx="30" ry="18" fill="#ffffff" opacity="0.45" transform="rotate(-24 ${CX - 26} ${CY - 30})"/>

  <!-- wordmark -->
  <g filter="url(#soft)">
    <path d="${wordD}" fill="url(#blue)" stroke="#ffffff" stroke-width="15" stroke-linejoin="round" paint-order="stroke"/>
    <g clip-path="url(#wordClip)">
      <rect x="100" y="${Math.round(wordTop)}" width="${VB_W - 120}" height="64" fill="url(#shine)"/>
    </g>
    <path d="${regD}" fill="url(#blueFlat)" stroke="#ffffff" stroke-width="7" stroke-linejoin="round" paint-order="stroke"/>
  </g>

  <!-- REISEN -->
  <g filter="url(#soft)">
    <path d="${reisenD}" fill="url(#blueFlat)" stroke="#ffffff" stroke-width="9" stroke-linejoin="round" paint-order="stroke"/>
  </g>

  <!-- EXKLUSIV AGENTUR KÖLN -->
  <g filter="url(#soft)" transform="translate(${subShift} 0) skewX(-${skew})">
    <path d="${subD}" fill="url(#blueFlat)" stroke="#ffffff" stroke-width="9" stroke-linejoin="round" paint-order="stroke"/>
  </g>
</svg>
`;

const target = path.resolve(__dirname, "..", "public/images/logo.svg");
fs.writeFileSync(target, svg);
console.log("written", target, "bytes:", svg.length);
console.log("wordEnd:", wordEnd.toFixed(0), "regRight:", regRight.toFixed(0), "VB:", VB_W, "x", VB_H, "sun:", CX.toFixed(0), CY.toFixed(0), "wordTop:", wordTop.toFixed(0), "subSize:", subSize.toFixed(1));
