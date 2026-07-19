// Generates public/images/logo.svg — recreation of the client's glossy
// Ost-West Reisen logo composition, recolored to the site palette
// (teal brand colors + golden sun) with all text converted to paths.
//
// Usage:
//   npm i --no-save opentype.js@1.3.4   (2.x has a path-generation bug here)
//   Download Montserrat TTFs into scripts/fonts/ (ExtraBold, BoldItalic,
//   SemiBoldItalic) — e.g. via fonts.googleapis.com/css2 requested with a
//   legacy User-Agent so it serves truetype instead of woff2.
//   node scripts/generate-logo.js
const opentype = require("opentype.js");
const fs = require("fs");
const path = require("path");

const F = (n) => {
  const buf = fs.readFileSync(path.join(__dirname, "fonts", n));
  return opentype.parse(
    buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
  );
};
const extraBold = F("Montserrat-ExtraBold.ttf");
const boldItalic = F("Montserrat-BoldItalic.ttf");
const semiItalic = F("Montserrat-SemiBoldItalic.ttf");

const d = (font, text, x, y, size, opts = {}) =>
  font.getPath(text, x, y, size, { kerning: true, ...opts }).toPathData(2);
const w = (font, text, size, opts = {}) =>
  font.getAdvanceWidth(text, size, { kerning: true, ...opts });

// ---- layout ----------------------------------------------------------------
const VB_W = 900;
const VB_H = 262;

const TEXT_X = 238;

// "Ost-West"
const mainSize = 112;
const mainBaseline = 138;
const mainText = "Ost-West";
const mainW = w(extraBold, mainText, mainSize);
const mainRight = TEXT_X + mainW;

// ® — small, superscript at the end of the wordmark
const regSize = 34;
const regX = mainRight + 8;
const regY = 72;

// "REISEN" — italic caps, letterspaced, right-aligned to the wordmark
const reisenSize = 42;
const reisenBaseline = 194;
const reisenSpacing = 0.32;
const reisenW = w(boldItalic, "REISEN", reisenSize, { letterSpacing: reisenSpacing });
const reisenX = mainRight - reisenW;

// "EXKLUSIV AGENTUR KÖLN" — italic caps, fitted under the whole text block
const subText = "EXKLUSIV AGENTUR KÖLN";
const subBaseline = 248;
const subSpacing = 0.06;
const subTarget = mainRight + 30 - TEXT_X; // span slightly past the wordmark
const subSize = (subTarget / w(semiItalic, subText, 100, { letterSpacing: subSpacing })) * 100;

// ---- sun -------------------------------------------------------------------
const CX = 110;
const CY = 118;
const rays = [];
for (let i = 0; i < 12; i++) {
  const long = i % 2 === 0;
  const width = long ? 17 : 13;
  const inner = 64;
  const outer = long ? 104 : 90;
  rays.push(
    `<g transform="rotate(${i * 30} ${CX} ${CY})"><rect x="${CX - width / 2}" y="${
      CY - outer
    }" width="${width}" height="${outer - inner}" rx="${width / 2}"/></g>`,
  );
}

// ---- svg -------------------------------------------------------------------
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VB_W} ${VB_H}" role="img" aria-label="Ost-West Reisen — Exklusiv Agentur Köln">
  <defs>
    <linearGradient id="text" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5fd2c1"/>
      <stop offset="0.42" stop-color="#1ba295"/>
      <stop offset="1" stop-color="#0d6a5d"/>
    </linearGradient>
    <radialGradient id="disc" cx="0.38" cy="0.32" r="0.85">
      <stop offset="0" stop-color="#ffe27d"/>
      <stop offset="0.55" stop-color="#f9c344"/>
      <stop offset="1" stop-color="#eda423"/>
    </radialGradient>
    <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbCB4d"/>
      <stop offset="1" stop-color="#efab28"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0f5a50" flood-opacity="0.28"/>
    </filter>
  </defs>

  <!-- sun -->
  <g filter="url(#soft)" stroke="#ffffff" stroke-width="7" stroke-linejoin="round" paint-order="stroke">
    <g fill="url(#ray)">
      ${rays.join("\n      ")}
    </g>
    <circle cx="${CX}" cy="${CY}" r="50" fill="url(#disc)"/>
  </g>
  <ellipse cx="${CX - 16}" cy="${CY - 18}" rx="22" ry="14" fill="#ffffff" opacity="0.35" transform="rotate(-24 ${CX - 16} ${CY - 18})"/>

  <!-- wordmark -->
  <g filter="url(#soft)" stroke="#ffffff" stroke-linejoin="round" paint-order="stroke">
    <path d="${d(extraBold, mainText, TEXT_X, mainBaseline, mainSize)}" fill="url(#text)" stroke-width="12"/>
    <path d="${d(extraBold, "®", regX, regY, regSize)}" fill="#138375" stroke-width="6"/>
    <path d="${d(boldItalic, "REISEN", reisenX, reisenBaseline, reisenSize, { letterSpacing: reisenSpacing })}" fill="#138375" stroke-width="7"/>
    <path d="${d(semiItalic, subText, TEXT_X, subBaseline, subSize, { letterSpacing: subSpacing })}" fill="#11776a" stroke-width="6"/>
  </g>
</svg>
`;

const target = path.resolve(__dirname, "..", "public/images/logo.svg");
fs.writeFileSync(target, svg);
console.log("written", target, "bytes:", svg.length);
console.log("mainRight:", mainRight.toFixed(1), "subSize:", subSize.toFixed(1));
