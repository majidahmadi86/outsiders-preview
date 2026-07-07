#!/usr/bin/env node
/**
 * Outsiders Legal v2 - ground-up CSS generator.
 * Run: node scripts/build-v2-css.js
 * Output: assets/css/main.css
 */

const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "../assets/css/main.css");

function block(title, body) {
  return `/* ==========================================================================\n   ${title}\n   ========================================================================== */\n\n${body.trim()}`;
}

const sections = [];

/* -------------------------------------------------------------------------- */
/* Fonts                                                                      */
/* -------------------------------------------------------------------------- */

sections.push(block("Fonts - Outsiders Legal v2", `
@font-face {
  font-family: "Libre Caslon Text";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("../../fonts/libre-caslon-text-400.woff2") format("woff2");
}

@font-face {
  font-family: "Libre Caslon Text";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("../../fonts/libre-caslon-text-400-italic.woff2") format("woff2");
}

@font-face {
  font-family: "Libre Caslon Text";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("../../fonts/libre-caslon-text-700.woff2") format("woff2");
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("../../fonts/inter-400.woff2") format("woff2");
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("../../fonts/inter-500.woff2") format("woff2");
}
`));

/* -------------------------------------------------------------------------- */
/* Tokens                                                                     */
/* -------------------------------------------------------------------------- */

sections.push(block("Design tokens", `
:root {
  --ivory: #F6F3EC;
  --white: #FFFFFF;
  --ink: #12151A;
  --midnight: #101720;
  --midnight2: #1A2330;
  --mist: #8C94A3;
  --stone: #5A6472;
  --gold: #B08D3E;
  --gold-line: rgba(176, 141, 62, 0.35);

  --bg: var(--ivory);
  --surface: var(--white);
  --text: var(--ink);
  --muted: var(--stone);
  --hairline: rgba(18, 21, 26, 0.1);
  --hairline-dark: rgba(255, 255, 255, 0.12);
  --footer-bg: var(--midnight);

  --font-display: "Libre Caslon Text", Georgia, "Times New Roman", serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;

  --max-width: 1200px;
  --section-pad: 96px;
  --header-h: 72px;
  --ribbon-h: 40px;
  --frame-radius: 14px;
  --radius-card: 14px;
  --radius-btn: 12px;
  --radius-input: 10px;
  --radius-chip: 8px;
  --radius-inset: 12px;
  --shadow-soft: 0 8px 32px rgba(16, 23, 32, 0.08);
  --shadow-card: 0 2px 12px rgba(16, 23, 32, 0.06);

  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 0.72s;
}
`));

/* -------------------------------------------------------------------------- */
/* Reset & base                                                               */
/* -------------------------------------------------------------------------- */

sections.push(block("Reset & base", `
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color-scheme: light;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--ivory);
  color: var(--ink);
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 17px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

input,
select,
textarea {
  font-family: inherit;
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--text);
}

h1 {
  font-size: clamp(44px, 5.5vw, 76px);
  line-height: 1.05;
  font-weight: 700;
}

h2 {
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.12;
}

h3 {
  font-size: clamp(20px, 2vw, 26px);
  line-height: 1.2;
}

h4 {
  font-size: 1rem;
  line-height: 1.3;
}

p {
  margin: 0;
}

main {
  display: block;
  min-width: 0;
}

::selection {
  background: rgba(176, 141, 62, 0.22);
  color: var(--ink);
}
`));

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

sections.push(block("Layout", `
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 40px);
}

section {
  padding: var(--section-pad) 0;
  position: relative;
}

.text-center {
  text-align: center;
}

.mt-40 {
  margin-top: 40px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`));

/* -------------------------------------------------------------------------- */
/* Bands                                                                      */
/* -------------------------------------------------------------------------- */

sections.push(block("Bands", `
.band-ivory,
.band-wash {
  background: var(--ivory);
}

.band-white {
  background: var(--white);
}

.band-midnight,
.lead-band {
  background: var(--midnight);
  color: rgba(255, 255, 255, 0.88);
  border-top: 1px solid var(--gold-line);
}

.band-midnight h1,
.band-midnight h2,
.band-midnight h3,
.band-midnight h4,
.lead-band h1,
.lead-band h2,
.lead-band h3,
.lead-band h4 {
  color: var(--white);
}

.band-midnight p,
.lead-band p {
  color: rgba(255, 255, 255, 0.78);
}

.closing-band {
  background: var(--midnight);
  color: rgba(255, 255, 255, 0.9);
  padding: 88px 0;
  border-top: 1px solid var(--gold-line);
}

.closing-band h2 {
  color: var(--white);
  margin-bottom: 28px;
}
`));

/* -------------------------------------------------------------------------- */
/* Section ghost numerals                                                     */
/* -------------------------------------------------------------------------- */

sections.push(block("Section ghost numerals", `
.section-ghost {
  position: absolute;
  top: 24px;
  right: 24px;
  font-family: var(--font-display);
  font-size: 140px;
  font-weight: 700;
  line-height: 0.85;
  color: var(--gold);
  opacity: 0.05;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  z-index: 0;
}

.section-ghost-right {
  left: auto;
  right: 24px;
}

.has-section-ghost {
  position: relative;
  overflow: hidden;
}

.has-section-ghost > .container {
  position: relative;
  z-index: 1;
}

@media (max-width: 1100px) {
  .section-ghost {
    display: none;
  }
}
`));

/* -------------------------------------------------------------------------- */
/* Section head & labels                                                      */
/* -------------------------------------------------------------------------- */

sections.push(block("Section head & labels", `
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 16px;
  font-family: var(--font-body);
}

.eyebrow::before {
  content: "";
  width: 28px;
  height: 1px;
  background: var(--gold);
  flex-shrink: 0;
}

.section-label {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--stone);
  margin-bottom: 14px;
  font-family: var(--font-body);
}

.label-num {
  color: var(--gold);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.section-head {
  max-width: 640px;
  margin: 0 0 48px;
}

.section-head.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-sub {
  margin-top: 16px;
  color: var(--stone);
  font-size: 1.05rem;
  max-width: 52ch;
}

.gold-line,
.red-line,
.brass-line {
  width: 48px;
  height: 2px;
  background: var(--gold);
  margin-top: 18px;
}

.section-head.center .gold-line,
.section-head.center .red-line,
.section-head.center .brass-line {
  margin-left: auto;
  margin-right: auto;
}
`));

/* -------------------------------------------------------------------------- */
/* Buttons                                                                    */
/* -------------------------------------------------------------------------- */

sections.push(block("Buttons", `
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: var(--radius-btn);
  padding: 14px 28px;
  background: var(--ink);
  color: var(--white);
  font-weight: 500;
  font-size: 0.94rem;
  letter-spacing: 0.02em;
  line-height: 1.2;
  transition: box-shadow 0.25s ease, color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
  box-shadow: inset 0 -2px 0 transparent;
}

.btn:active {
  transform: scale(0.98);
}

.btn:hover,
.btn:focus-visible {
  box-shadow: inset 0 -2px 0 var(--gold);
}

.btn-ghost {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--gold-line);
  box-shadow: inset 0 -2px 0 transparent;
}

.btn-ghost:hover,
.btn-ghost:focus-visible {
  background: transparent;
  box-shadow: inset 0 -2px 0 var(--gold);
}

.btn-light {
  background: var(--white);
  color: var(--ink);
}

.btn-outline-light {
  background: transparent;
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.55);
}

.btn-outline-light:hover,
.btn-outline-light:focus-visible {
  background: rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 -2px 0 var(--gold);
}

.band-midnight .btn,
.lead-band .btn,
.closing-band .btn:not(.btn-ghost):not(.btn-outline-light) {
  background: var(--white);
  color: var(--ink);
}

.band-midnight .btn:hover,
.lead-band .btn:hover,
.closing-band .btn:not(.btn-ghost):not(.btn-outline-light):hover {
  box-shadow: inset 0 -2px 0 var(--gold);
}

.btn-cta-header {
  padding: 10px 20px;
  font-size: 0.88rem;
  white-space: nowrap;
}

.modal-close.btn {
  margin-top: 8px;
}

.btn-service-cta {
  margin-top: 20px;
  font-size: 0.88rem;
  padding: 10px 18px;
}
`));

sections.push(block("Motion engine", `
html.js [data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity var(--dur) var(--ease), transform var(--dur) var(--ease);
  animation: forceReveal 0s 2.5s forwards;
}

html.js [data-reveal="left"] { transform: translate(-36px, 0); }
html.js [data-reveal="right"] { transform: translate(36px, 0); }
html.js [data-reveal="scale"] { transform: scale(0.96); }
html.js [data-reveal].is-visible { opacity: 1; transform: none; }

@keyframes forceReveal {
  to { opacity: 1; transform: none; }
}

.stagger > [data-reveal]:nth-child(1) { transition-delay: 0ms; }
.stagger > [data-reveal]:nth-child(2) { transition-delay: 90ms; }
.stagger > [data-reveal]:nth-child(3) { transition-delay: 180ms; }
.stagger > [data-reveal]:nth-child(4) { transition-delay: 270ms; }
.stagger > [data-reveal]:nth-child(5) { transition-delay: 360ms; }
.stagger > [data-reveal]:nth-child(6) { transition-delay: 450ms; }

.stagger-fast > [data-reveal]:nth-child(1) { transition-delay: 0ms; }
.stagger-fast > [data-reveal]:nth-child(2) { transition-delay: 60ms; }
.stagger-fast > [data-reveal]:nth-child(3) { transition-delay: 120ms; }
.stagger-fast > [data-reveal]:nth-child(4) { transition-delay: 180ms; }
.stagger-fast > [data-reveal]:nth-child(5) { transition-delay: 240ms; }
.stagger-fast > [data-reveal]:nth-child(6) { transition-delay: 300ms; }
.stagger-fast > [data-reveal]:nth-child(7) { transition-delay: 360ms; }
.stagger-fast > [data-reveal]:nth-child(8) { transition-delay: 420ms; }
.stagger-fast > [data-reveal]:nth-child(9) { transition-delay: 480ms; }
.stagger-fast > [data-reveal]:nth-child(10) { transition-delay: 540ms; }
.stagger-fast > [data-reveal]:nth-child(11) { transition-delay: 600ms; }
.stagger-fast > [data-reveal]:nth-child(12) { transition-delay: 660ms; }

.hero-cascade-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.65s var(--ease), transform 0.65s var(--ease);
}

html.js .hero-cascade-item { animation: heroCascade 0s 2.5s forwards; }
body.page-home .hero-cascade-item.hero-delay-1 { transition-delay: 0.08s; }
body.page-home .hero-cascade-item.hero-delay-2 { transition-delay: 0.16s; }
body.page-home .hero-cascade-item.hero-delay-3 { transition-delay: 0.24s; }
body.page-home .hero-cascade-item.hero-delay-4 { transition-delay: 0.32s; }
body.page-home .hero-cascade-item.hero-delay-5 { transition-delay: 0.4s; }

html.js body.page-home .hero-cascade-item { opacity: 1; transform: none; }

@keyframes heroCascade {
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  html.js [data-reveal], .hero-cascade-item, html.js [data-curtain], .frame-img {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    animation: none !important;
    clip-path: none !important;
  }
  html { scroll-behavior: auto; }
}
`));

sections.push(block("Preview ribbon", `
.preview-ribbon {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: var(--midnight);
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  padding: 10px 52px 10px 20px;
  text-align: center;
  transform: translateY(-100%);
  transition: transform 0.55s var(--ease);
  border-bottom: 1px solid var(--gold-line);
}
.preview-ribbon.is-shown { transform: translateY(0); }
.preview-ribbon.is-hidden { display: none; }
.preview-ribbon p { max-width: 880px; margin: 0 auto; line-height: 1.5; }
.preview-ribbon-close {
  position: absolute; right: 6px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none; color: var(--white);
  font-size: 22px; width: 40px; height: 40px; padding: 0; opacity: 0.75;
}
.preview-ribbon-close:hover, .preview-ribbon-close:focus-visible { opacity: 1; }
body.has-ribbon { padding-top: var(--ribbon-h); }
body.has-ribbon .site-header { top: var(--ribbon-h); }
`));

sections.push(block("Site header", `
.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 900;
  height: var(--header-h);
  background: var(--ivory);
  border-bottom: 1px solid var(--hairline);
  transition: box-shadow 0.3s var(--ease);
}
.site-header.is-scrolled { box-shadow: 0 1px 0 var(--hairline); }
.header-inner {
  max-width: var(--max-width); margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 40px);
  height: 100%; display: flex; align-items: center;
  justify-content: space-between; gap: 24px;
}
.brand-chip { display: inline-flex; align-items: center; gap: 10px; min-height: 40px; }
.brand-chip-logo { height: 40px; width: auto; max-width: 160px; object-fit: contain; }
.brand-chip-text { display: none; flex-direction: column; line-height: 1.15; }
.brand-chip.logo-missing .brand-chip-logo { display: none; }
.brand-chip.logo-missing .brand-chip-text { display: flex; }
.brand-name { font-family: var(--font-display); font-size: 13px; font-weight: 700; letter-spacing: 0.08em; }
.brand-sub { font-size: 9px; letter-spacing: 0.2em; color: var(--stone); text-transform: uppercase; font-weight: 500; }
.main-nav ul { display: flex; align-items: center; gap: clamp(16px, 2.5vw, 32px); }
.main-nav a {
  font-size: 0.9rem; font-weight: 400; color: var(--stone);
  padding: 6px 0; border-bottom: 2px solid transparent;
  transition: color 0.25s ease, border-color 0.25s ease;
}
.main-nav a:hover { color: var(--ink); }
.main-nav a.active, .main-nav a[aria-current="page"] {
  color: var(--ink); border-bottom-color: var(--gold); font-weight: 400;
}
.header-actions { display: flex; align-items: center; gap: 14px; }
.hamburger {
  display: none; flex-direction: column; justify-content: center; gap: 5px;
  width: 44px; height: 44px; padding: 10px;
}
.hamburger span { display: block; width: 22px; height: 2px; background: var(--ink); transition: transform 0.3s var(--ease), opacity 0.3s ease; }
.hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.is-open span:nth-child(2) { opacity: 0; }
.hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.nav-scrim { display: none; }
`));

sections.push(block("Lang toggle", `
.lang-toggle.seg {
  position: relative; display: inline-flex; align-items: stretch;
  background: rgba(18, 21, 26, 0.06); border-radius: 4px; padding: 3px;
}
.lang-toggle.seg .lang-thumb {
  position: absolute; top: 3px; left: 3px; height: calc(100% - 6px);
  background: var(--white); border-radius: 2px;
  box-shadow: 0 1px 3px rgba(16, 23, 32, 0.1);
  transition: transform 0.32s var(--ease), width 0.32s var(--ease);
  pointer-events: none; z-index: 0;
}
.lang-toggle.seg button {
  position: relative; z-index: 1; padding: 6px 12px;
  font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em;
  color: var(--stone); background: transparent; border: none; border-radius: 2px;
}
.lang-toggle.seg button:hover { color: var(--ink); }
.lang-toggle.seg button.active { color: var(--ink); font-weight: 500; }
`));

sections.push(block("Mobile drawer", `
@media (max-width: 900px) {
  .hamburger { display: flex; z-index: 920; }
  .nav-drawer {
    position: fixed; top: 0; right: 0;
    width: min(340px, 88vw); height: 100dvh;
    background: var(--white); z-index: 910;
    padding: calc(var(--header-h) + 16px) 28px 32px;
    display: flex; flex-direction: column; gap: 32px;
    transform: translateX(100%); transition: transform 0.42s var(--ease);
    box-shadow: -8px 0 32px rgba(16, 23, 32, 0.12); overflow-y: auto;
  }
  body.has-ribbon .nav-drawer { padding-top: calc(var(--header-h) + var(--ribbon-h) + 16px); }
  .nav-drawer.is-open { transform: translateX(0); }
  .nav-scrim {
    display: block; position: fixed; inset: 0;
    background: rgba(16, 23, 32, 0.45); z-index: 905;
    opacity: 0; pointer-events: none; transition: opacity 0.35s ease;
  }
  .nav-scrim.is-open { opacity: 1; pointer-events: auto; }
  .main-nav ul { flex-direction: column; align-items: flex-start; gap: 0; }
  .main-nav li { width: 100%; border-bottom: 1px solid var(--hairline); }
  .main-nav a { display: block; padding: 16px 0; font-size: 1.05rem; }
  .header-actions { flex-direction: column; align-items: stretch; width: 100%; }
  .btn-cta-header { width: 100%; justify-content: center; }
  .drawer-close {
    position: absolute; top: 16px; right: 16px;
    width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
    background: var(--white); color: var(--ink);
    border: 1px solid var(--hairline); border-radius: 50%; padding: 0; z-index: 2;
  }
  body.has-ribbon .drawer-close { top: calc(var(--ribbon-h) + 12px); }
  .drawer-close svg { width: 20px; height: 20px; }
  .drawer-close:hover, .drawer-close:focus-visible { border-color: var(--gold); }
}
@media (min-width: 901px) {
  .nav-drawer { display: contents; }
  .drawer-close { display: none; }
  .main-nav { flex: 1; display: flex; justify-content: center; }
}
`));

sections.push(block("Split hero", `
.hero-split,
.hero {
  padding-top: calc(var(--header-h) + 32px);
  padding-bottom: 0;
  overflow: hidden;
}

body.has-ribbon .hero-split,
body.has-ribbon .hero {
  padding-top: calc(var(--header-h) + var(--ribbon-h) + 32px);
}

.hero-split {
  display: grid;
  grid-template-columns: 52fr 48fr;
  min-height: 92vh;
  max-width: 100%;
}

.hero-split .hero-panel,
.hero-text {
  background: var(--midnight);
  color: rgba(255, 255, 255, 0.9);
  padding: clamp(48px, 8vw, 96px) clamp(28px, 5vw, 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.hero-split .hero-panel h1,
.hero-text h1 { color: var(--white); margin-bottom: 20px; }

.hero-split .hero-panel .eyebrow,
.hero-text .eyebrow { color: var(--gold); }

.hero-sub {
  font-size: 1.1rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
  max-width: 42ch;
  margin-bottom: 32px;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 36px;
}

.hero-panel .btn,
.hero-text .btn { background: var(--white); color: var(--ink); }

.hero-panel .btn-ghost,
.hero-text .btn-ghost {
  background: transparent;
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.5);
}

.trust-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
}

.trust-bar li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.trust-bar li::before {
  display: none;
}

.trust-bar li + li {
  border-top: 1px solid var(--gold-line);
  padding-top: 10px;
}

.hero-split .hero-media,
.hero-visual {
  position: relative;
  min-height: 92vh;
  background: var(--midnight2);
}

.hero-media-inner,
.hero-frame,
[data-curtain].hero-frame {
  position: absolute;
  inset: 20px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--gold-line);
}

.hero-media img,
.hero-frame img,
.hero-media .frame-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stat-card {
  position: absolute;
  left: -28px;
  bottom: 48px;
  background: var(--white);
  padding: 24px 28px;
  max-width: 280px;
  box-shadow: var(--shadow-soft);
  border-top: 2px solid var(--gold);
  z-index: 3;
}

.stat-num {
  display: block;
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  margin-bottom: 10px;
  font-variant-numeric: tabular-nums;
}

.stat-card p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--ink);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
}

.hero-grid .hero-text {
  border-radius: 0;
}

.hero-grid .hero-visual {
  min-height: 72vh;
}

@media (max-width: 900px) {
  .hero-split,
  .hero-grid {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-split .hero-media,
  .hero-grid .hero-visual {
    min-height: 56vh;
    order: -1;
  }

  .hero-split .hero-panel,
  .hero-grid .hero-text {
    padding: 48px 24px 56px;
  }

  .stat-card {
    position: relative;
    left: 0;
    bottom: 0;
    margin: -32px 24px 0;
    max-width: none;
  }
}
`));

sections.push(block("Stepper", `
.stepper {
  display: flex;
  align-items: flex-start;
  gap: 0;
  position: relative;
  padding-top: 28px;
}

.stepper::before {
  content: "";
  position: absolute;
  top: 14px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gold-line);
}

.stepper-step,
.roadmap-step {
  flex: 1;
  position: relative;
  padding: 28px 16px 0;
  text-align: center;
}

.stepper-step::before,
.roadmap-step::before {
  content: "";
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--ivory);
  border: 2px solid var(--gold);
  z-index: 1;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.stepper-step:hover::before,
.roadmap-step:hover::before {
  background: var(--gold);
  transform: translateX(-50%) scale(1.12);
}

.stepper-step:hover p,
.roadmap-step:hover p {
  color: var(--ink);
}

.step-num {
  display: block;
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  font-variant-numeric: tabular-nums;
}

.stepper-step p,
.roadmap-step p {
  font-size: 0.92rem;
  line-height: 1.45;
  color: var(--stone);
}

.roadmap-strip {
  display: flex;
  gap: 0;
  position: relative;
  padding-top: 28px;
}

.roadmap-strip::before {
  content: "";
  position: absolute;
  top: 14px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gold-line);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s var(--ease);
}

html.js .roadmap-strip.is-visible::before {
  transform: scaleX(1);
}

@media (max-width: 900px) {
  .stepper,
  .roadmap-strip {
    flex-direction: column;
    padding-top: 0;
    padding-left: 28px;
  }

  .stepper::before,
  .roadmap-strip::before {
    top: 0;
    bottom: 0;
    left: 6px;
    right: auto;
    width: 1px;
    height: auto;
  }

  .stepper-step,
  .roadmap-step {
    text-align: left;
    padding: 0 0 28px 20px;
  }

  .stepper-step::before,
  .roadmap-step::before {
    top: 4px;
    left: -22px;
    transform: none;
  }
}
`));

sections.push(block("Cards - why, services, general", `
.card {
  background: var(--white);
  border: 1px solid var(--hairline);
  border-radius: var(--radius-card);
  padding: 32px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.why-grid,
.services-grid,
.team-grid,
.reviews-grid,
.info-grid {
  display: grid;
  gap: 24px;
}

.why-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.services-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.reviews-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

.why-card {
  position: relative;
  border-top: 2px solid transparent;
  transition: border-color 0.3s ease, transform 0.3s var(--ease);
}

.why-card:hover {
  border-top-color: var(--gold);
  box-shadow: var(--shadow-card);
}

.why-card .card-icon,
.service-card .card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  color: var(--gold);
  background: var(--ivory);
  border: 1px solid var(--gold-line);
  border-radius: 50%;
}

.why-card .card-icon svg,
.service-card .card-icon svg {
  width: 44px;
  height: 44px;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.why-card h3,
.service-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 700;
}

.why-card p,
.service-card p {
  color: var(--stone);
  font-size: 0.96rem;
  line-height: 1.65;
}

.service-card {
  border-left: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.service-card:hover {
  border-left-color: var(--gold);
}

.section-cta {
  margin-top: 40px;
}
`));

sections.push(block("Pull quote band", `
.pull-quote-band {
  background: var(--white);
  padding: 72px 0;
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
}

.pull-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.45;
  color: var(--ink);
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding: 0 clamp(20px, 4vw, 40px);
}

.pull-quote::before {
  content: "\\201C";
  display: block;
  font-size: 3rem;
  line-height: 1;
  color: var(--gold);
  opacity: 0.5;
  margin-bottom: 12px;
}

.pull-quote cite {
  display: block;
  margin-top: 24px;
  font-family: var(--font-body);
  font-style: normal;
  font-size: 0.88rem;
  color: var(--stone);
  letter-spacing: 0.04em;
}
`));

sections.push(block("Checklist band", `
.lead-inner {
  display: grid;
  gap: 32px;
  align-items: end;
}

.lead-copy h2 {
  margin-bottom: 14px;
}

.lead-form {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lead-form input {
  flex: 1 1 220px;
  min-height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--white);
  border-radius: var(--radius-input);
}

.lead-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.lead-form input:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 1px var(--gold-line);
}

.lead-form .btn-on-dark {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.lead-form .btn-on-dark:hover {
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .lead-inner { grid-template-columns: 1.15fr 0.85fr; }
}
`));

sections.push(block("Testimonials", `
.review-card {
  position: relative;
  padding-left: 28px;
  border-left: 3px solid var(--gold);
  background: var(--white);
}

.review-card::before {
  content: "\\201C";
  position: absolute;
  top: 20px;
  left: 28px;
  font-family: var(--font-display);
  font-size: 4.5rem;
  line-height: 1;
  color: var(--gold);
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
}

.review-card.is-visible::before {
  opacity: 0.18;
  transform: none;
}

.review-card .quote {
  font-family: var(--font-display);
  font-size: 1.15rem;
  line-height: 1.55;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}

.review-card .author {
  color: var(--stone);
  font-size: 0.88rem;
  font-weight: 500;
}

.review-sample-note {
  text-align: center;
  color: var(--mist);
  font-size: 0.85rem;
  margin-top: 28px;
}
`));

sections.push(block("Structure finder", `
.finder-card { padding: 36px; }
.finder-title { margin-bottom: 28px; }
.finder-q { margin-bottom: 28px; }
.finder-q > p { font-weight: 500; margin-bottom: 14px; color: var(--ink); }
.finder-options { display: grid; gap: 10px; }

.finder-option {
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid var(--hairline);
  padding: 16px 18px;
  cursor: pointer;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  background: var(--white);
}

.finder-option:hover {
  border-color: var(--gold-line);
}

.finder-option.is-selected,
.finder-option:has(input:checked) {
  border-color: var(--gold);
  box-shadow: inset 0 0 0 1px var(--gold);
}

.finder-option input {
  accent-color: var(--gold);
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.finder-option span {
  font-size: 0.95rem;
  color: var(--ink);
}

.finder-result {
  margin-top: 28px;
  background: var(--midnight2);
  color: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--gold-line);
  padding: 28px;
}

.finder-result[hidden] { display: none; }

.finder-result-text {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.finder-result .muted-note {
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 20px;
}

.finder-result .btn {
  background: var(--white);
  color: var(--ink);
}
`));

sections.push(block("Team portraits", `
.team-photo {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  margin-bottom: 22px;
  background: var(--midnight2);
  box-shadow: inset 0 0 0 20px transparent;
}

.team-photo::after {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px solid var(--gold-line);
  pointer-events: none;
  z-index: 2;
}

.team-photo img,
.team-photo .frame-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-role {
  color: var(--gold);
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
}

.team-card h2 {
  font-size: 1.5rem;
  margin-bottom: 6px;
}

.lang-band { padding: 48px 0; }
.lang-chips { display: flex; flex-wrap: wrap; gap: 10px; }

.lang-chip {
  border: 1px solid var(--hairline);
  padding: 8px 16px;
  font-size: 0.88rem;
  color: var(--stone);
  background: var(--white);
  border-radius: var(--radius-chip);
}

.lang-chip:hover {
  border-color: var(--gold);
  color: var(--ink);
}
`));

sections.push(block("Page hero & roadmap", `
.page-hero {
  padding-top: calc(var(--header-h) + 48px);
  padding-bottom: 32px;
}

body.has-ribbon .page-hero {
  padding-top: calc(var(--header-h) + var(--ribbon-h) + 48px);
}

.roadmap-block {
  margin-bottom: 20px;
}

.roadmap-block h2 {
  font-size: 1.35rem;
  margin: 8px 0 12px;
}

.roadmap-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.muted-note {
  color: var(--mist);
  font-size: 0.88rem;
  margin-top: 12px;
}

.center-note {
  text-align: center;
  margin-top: 36px;
}
`));

sections.push(block("Forms & contact", `
#consult,
.consult-section {
  scroll-margin-top: calc(var(--header-h) + 24px);
  padding-top: calc(var(--header-h) + 40px);
}

body.has-ribbon #consult,
body.has-ribbon .consult-section {
  scroll-margin-top: calc(var(--header-h) + var(--ribbon-h) + 24px);
  padding-top: calc(var(--header-h) + var(--ribbon-h) + 40px);
}

.consult-form,
.reserve-form {
  max-width: 720px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  gap: 20px;
}

.form-field label {
  display: block;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--stone);
  margin-bottom: 8px;
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  min-height: 48px;
  padding: 12px 14px;
  border: 1px solid var(--hairline);
  background: var(--white);
  color: var(--ink);
  border-radius: var(--radius-input);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.form-field textarea {
  min-height: 140px;
  resize: vertical;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 1px var(--gold-line);
}

.form-actions {
  margin-top: 8px;
}

.info-card h3 {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gold);
  margin-bottom: 12px;
  font-family: var(--font-body);
  font-weight: 600;
}

.info-card p,
.info-card a {
  font-size: 1rem;
  color: var(--ink);
}

.map-card {
  margin-top: 40px;
  overflow: hidden;
  padding: 4px;
  background: var(--white);
  border: 1px solid var(--hairline);
}

.map-card iframe {
  width: 100%;
  height: 380px;
  border: none;
  display: block;
}

.map-open {
  text-align: center;
  margin-top: 24px;
}

@media (min-width: 640px) {
  .form-grid { grid-template-columns: repeat(2, 1fr); }
  .form-field:last-child,
  .form-field textarea { grid-column: 1 / -1; }
  .form-actions { grid-column: 1 / -1; }
}

@media (min-width: 700px) {
  .info-grid { grid-template-columns: repeat(2, 1fr); }
}
`));

sections.push(block("Footer", `
.site-footer {
  background: var(--midnight);
  color: rgba(255, 255, 255, 0.78);
  padding: 72px 0 36px;
  border-top: 1px solid var(--gold-line);
}

.footer-grid {
  display: grid;
  gap: 40px;
  padding-bottom: 40px;
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
}

.footer-logo-img {
  height: 44px;
  width: auto;
  display: block;
}

.footer-logo-text { display: none; flex-direction: column; line-height: 1.1; }
.footer-logo.logo-missing .footer-logo-img { display: none; }
.footer-logo.logo-missing .footer-logo-text { display: flex; }

.footer-logo-text .name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--white);
}

.footer-logo-text .sub {
  font-size: 9px;
  letter-spacing: 0.18em;
  color: var(--gold);
  margin-top: 2px;
}

.footer-col h4 {
  font-family: var(--font-body);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-variant: small-caps;
  color: var(--gold);
  margin-bottom: 16px;
  font-weight: 600;
}

.footer-col p,
.footer-col a,
.footer-col .footer-line {
  font-size: 0.94rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.25s ease;
}

.footer-col a:hover { color: var(--white); }
.footer-col .footer-line { display: block; margin-bottom: 8px; }

.footer-lang {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

.footer-credit {
  text-align: center;
  padding-top: 28px;
  margin-top: 0;
  border-top: 1px solid var(--hairline-dark);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}

@media (min-width: 700px) {
  .footer-grid { grid-template-columns: repeat(3, 1fr); }
}
`));

sections.push(block("Float button", `
.float-reserve {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 800;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--midnight2);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(16, 23, 32, 0.28);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
  overflow: hidden;
}

.float-reserve svg {
  width: 22px;
  height: 22px;
  stroke: var(--gold);
  flex-shrink: 0;
}

.float-reserve span {
  display: none;
}

.float-reserve:hover,
.float-reserve:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(16, 23, 32, 0.35);
}

.float-reserve.pulse {
  animation: floatPulse 1.2s var(--ease);
}

@keyframes floatPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
`));

sections.push(block("Modals", `
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(16, 23, 32, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}

.modal-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

.modal-box {
  background: var(--white);
  color: var(--ink);
  border: 1px solid var(--hairline);
  max-width: 480px;
  width: 100%;
  padding: 40px 32px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  transform: translateY(16px) scale(0.97);
  transition: transform 0.4s var(--ease);
}

.modal-overlay.is-open .modal-box {
  transform: none;
}

.modal-box p {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--stone);
  margin-bottom: 28px;
}
`));

sections.push(block("Image frames, blur-up, curtain", `
.media-frame,
.hero-media,
.hero-banner,
.hero-frame,
[data-curtain],
.gallery-item,
.team-photo,
.office-frame {
  position: relative;
  overflow: hidden;
  background: var(--midnight2);
}

html.js .frame-img {
  opacity: 0;
  transition: opacity 0.5s ease;
  animation: frameImgForce 0s 2.5s forwards;
}

html.js .frame-img.loaded {
  opacity: 1;
  animation: none;
}

@keyframes frameImgForce {
  to { opacity: 1; }
}

[data-curtain] > .frame-img,
.media-frame > .frame-img,
.hero-media > .frame-img,
.hero-frame > .frame-img,
.team-photo > .frame-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

html.js [data-curtain].curtain.curtain-run {
  animation: curtainClip 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

html.js [data-curtain].curtain.curtain-run > .frame-img,
html.js [data-curtain].curtain.curtain-run > img {
  animation: curtainScale 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

html.js [data-curtain].curtain-safe {
  clip-path: none !important;
  animation: none !important;
}

html.js [data-curtain].curtain-safe > .frame-img,
html.js [data-curtain].curtain-safe > img {
  transform: none !important;
  animation: none !important;
}

@keyframes curtainClip {
  0% { clip-path: inset(0 0 100% 0); }
  100% { clip-path: inset(0 0 0 0); }
}

@keyframes curtainScale {
  0% { transform: scale(1.06); }
  100% { transform: scale(1); }
}

img[data-fallback].is-broken { display: none; }

.img-frame-fallback,
.hero-frame.img-frame-fallback,
.team-photo.img-frame-fallback,
.office-frame.img-frame-fallback,
[data-curtain].img-frame-fallback {
  background: linear-gradient(145deg, var(--midnight) 0%, var(--midnight2) 100%);
}

.img-frame-fallback::before,
.hero-frame.img-frame-fallback::before,
.team-photo.img-frame-fallback::before,
.office-frame.img-frame-fallback::before,
[data-curtain].img-frame-fallback::before {
  content: "O";
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.5rem, 12vw, 5rem);
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.04em;
  z-index: 1;
}

.office-frame {
  border: 1px solid var(--hairline);
}

.office-frame img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
`));

sections.push(block("Focus & scrollbar", `
.drawer-close:focus-visible,
.lang-toggle.seg button:focus-visible,
.main-nav a:focus-visible,
.btn:focus-visible,
.preview-ribbon-close:focus-visible,
.hamburger:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--ivory); }
::-webkit-scrollbar-thumb { background: var(--stone); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--ink); }
`));

sections.push(block("Responsive breakpoints", `
@media (max-width: 1440px) {
  :root { --max-width: 1120px; }
}

@media (max-width: 1024px) {
  :root { --section-pad: 80px; }
  .why-grid,
  .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 900px) {
  :root { --section-pad: 64px; }
  .why-grid,
  .services-grid,
  .team-grid,
  .reviews-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  :root { --section-pad: 56px; --header-h: 64px; }
  h1 { font-size: clamp(36px, 9vw, 52px); }
  .pull-quote { font-size: 22px; }
  .card { padding: 24px; }
  .float-reserve { right: 16px; bottom: 16px; }
}

@media (max-width: 375px) {
  body { overflow-x: hidden; }
  .container { padding: 0 16px; }
  .header-inner { padding: 0 16px; }
  .hero-ctas { flex-direction: column; }
  .hero-ctas .btn { width: 100%; }
  .lead-form { flex-direction: column; }
  .lead-form input,
  .lead-form .btn { width: 100%; }
}
`));

sections.push(block("V2 HTML class extensions", `
.brand-link {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  color: var(--ink);
}

.header-logo {
  display: block;
  height: 48px;
  width: auto;
  max-height: 48px;
  object-fit: contain;
  mix-blend-mode: multiply;
}

.header-sep {
  width: 1px;
  height: 28px;
  background: var(--gold-line);
  flex-shrink: 0;
  margin-left: 10px;
}

@media (max-width: 900px) {
  .header-logo {
    height: 40px;
    max-height: 40px;
  }
}

.hero-media-frame {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 92vh;
}

.hero-media-frame::after {
  content: "";
  position: absolute;
  inset: 16px;
  border: 1px solid var(--gold-line);
  border-radius: var(--radius-inset);
  pointer-events: none;
  z-index: 2;
}

.hero-media-frame img {
  width: 100%;
  height: 100%;
  min-height: 92vh;
  object-fit: cover;
  display: block;
  transition: transform 0.6s var(--ease);
}

.hero-media-frame:hover img {
  transform: scale(1.03);
}

.hero-stat,
.stat-card.hero-stat {
  position: absolute;
  left: 24px;
  bottom: 48px;
  background: var(--white);
  color: var(--ink);
  border: 1px solid var(--hairline);
  border-radius: var(--radius-card);
  padding: 20px 22px;
  max-width: 280px;
  box-shadow: var(--shadow-soft);
  z-index: 3;
}

.hero-stat .stat-num,
.stat-card .stat-num {
  color: var(--gold);
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}

html.js [data-reveal="seam"] {
  transform: translateX(32px);
}

html.js [data-reveal="seam"].is-visible {
  transform: none;
}

.gold-line,
.red-line {
  width: 44px;
  height: 1px;
  background: var(--gold-line);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s var(--ease);
}

.is-visible .gold-line,
.is-visible .red-line,
html.js [data-reveal="line"].is-visible {
  transform: scaleX(1);
}

.checklist-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.checklist-layout h2 {
  color: var(--white);
  margin-bottom: 12px;
}

.checklist-layout .lead-copy p {
  color: var(--mist);
  margin: 0;
}

.dark-form input {
  background: var(--midnight2);
  border: 1px solid var(--gold-line);
  color: var(--white);
  min-height: 48px;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 16px;
  flex: 1 1 220px;
}

.dark-form input::placeholder {
  color: var(--mist);
}

.dark-form input:focus {
  outline: none;
  border-color: var(--gold);
}

.btn-on-dark {
  background: var(--white);
  color: var(--ink);
  border-color: var(--white);
}

.band-midnight .lead-form {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.gold-inset {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
}

.gold-inset::after {
  content: "";
  position: absolute;
  inset: 16px;
  border: 1px solid var(--gold-line);
  border-radius: var(--radius-inset);
  pointer-events: none;
  z-index: 2;
}

.gold-inset img {
  transition: transform 0.6s var(--ease);
}

.gold-inset:hover img {
  transform: scale(1.03);
}

.phone-label {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 4px;
  font-weight: 500;
}

.site-footer .phone-label {
  color: var(--gold);
}

.footer-credit-wrap {
  border-top: 1px solid var(--gold-line);
  margin-top: 40px;
  padding-top: 20px;
}

.footer-logo-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ivory);
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 16px;
}

.footer-logo-img {
  height: 44px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  display: block;
}

.stepper-vertical {
  flex-direction: column;
  padding-top: 0;
  padding-left: 32px;
}

.stepper-vertical::before {
  top: 0;
  bottom: 0;
  left: 6px;
  right: auto;
  width: 1px;
  height: auto;
}

.stepper-vertical .roadmap-block,
.stepper-vertical .stepper-step {
  text-align: left;
  padding: 0 0 32px 24px;
  flex: none;
}

.stepper-vertical .roadmap-block::before,
.stepper-vertical .stepper-step::before {
  top: 6px;
  left: -26px;
  transform: none;
}

.roadmap-block h2 {
  font-size: 1.35rem;
  margin: 8px 0 12px;
}

.trust-bar li + li {
  border-top: 1px solid var(--gold-line);
  padding-top: 10px;
}

.trust-bar li::before {
  display: none;
}

.info-card.on-dark,
.map-card.on-dark {
  background: var(--midnight2);
  border-color: var(--gold-line);
  color: rgba(255, 255, 255, 0.88);
}

.info-card.on-dark h3 {
  color: var(--gold);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-family: var(--font-body);
  font-weight: 500;
}

.info-card.on-dark a {
  color: var(--white);
}

@media (max-width: 900px) {
  .checklist-layout {
    grid-template-columns: 1fr;
  }

  .hero-stat,
  .stat-card.hero-stat {
    position: relative;
    left: auto;
    bottom: auto;
    margin: 20px 20px 0;
    max-width: none;
    width: calc(100% - 40px);
  }

  .hero-media-frame,
  .hero-media-frame img {
    min-height: auto;
    aspect-ratio: 4 / 3;
  }
}
`));

/* -------------------------------------------------------------------------- */
/* Write output                                                               */
/* -------------------------------------------------------------------------- */

const header = `/* ==========================================================================
   Outsiders Legal v2 - generated by scripts/build-v2-css.js
   Ground-up redesign. Do not edit directly; run: node scripts/build-v2-css.js
   ========================================================================== */
`;

const css = header + sections.join("\n\n") + "\n";
const lineCount = css.split("\n").length;

fs.writeFileSync(outPath, css, "utf8");
console.log("Outsiders Legal v2 CSS written to " + outPath);
console.log("Lines: " + lineCount);

if (lineCount < 1800) {
  console.warn("Warning: output is below 1800 lines (" + lineCount + ")");
} else if (lineCount > 2500) {
  console.warn("Warning: output exceeds 2500 lines (" + lineCount + ")");
}

