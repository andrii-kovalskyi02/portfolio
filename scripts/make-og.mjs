// Generates the 1200x630 social-share image at public/og.png.
//   node scripts/make-og.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../public/og.png')

const BG = '#080808'
const ACCENT = '#c8ff00'
const font = "'Helvetica Neue', Helvetica, Arial, sans-serif"

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="78%" cy="30%" r="55%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- decorative rings echoing the hero brand -->
  <g transform="translate(990,250)" fill="none" stroke="${ACCENT}">
    <circle r="150" stroke-opacity="0.08"/>
    <circle r="100" stroke-opacity="0.16"/>
    <circle r="52" stroke-opacity="0.32"/>
    <circle r="6" fill="${ACCENT}" stroke="none"/>
  </g>

  <!-- availability badge -->
  <g transform="translate(80,108)">
    <circle cx="6" cy="6" r="6" fill="${ACCENT}"/>
    <text x="24" y="11" font-family="${font}" font-size="20" letter-spacing="3"
          fill="${ACCENT}" font-weight="600">AVAILABLE FOR NEW OPPORTUNITIES</text>
  </g>

  <!-- name -->
  <text x="78" y="270" font-family="${font}" font-size="110" font-weight="700" fill="#ffffff"
        letter-spacing="-2">Andrii Kovalskyi</text>

  <!-- role -->
  <g transform="translate(80,330)">
    <rect width="44" height="3" y="9" fill="${ACCENT}"/>
    <text x="62" y="20" font-family="${font}" font-size="34" letter-spacing="6"
          fill="${ACCENT}" font-weight="500">SOFTWARE ENGINEER</text>
  </g>

  <!-- tagline -->
  <text x="80" y="430" font-family="${font}" font-size="30" fill="#9a9a9a">
    Building end-to-end web applications with TypeScript, React &amp; PHP.</text>

  <!-- footer -->
  <text x="80" y="560" font-family="${font}" font-size="24" fill="#666666">
    The Hague, Netherlands</text>
  <text x="1120" y="560" text-anchor="end" font-family="${font}" font-size="24"
        fill="#666666">github.com/andrii-kovalskyi02</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(OUT)
console.log('✓ wrote', OUT)
