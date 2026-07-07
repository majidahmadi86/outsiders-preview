const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pages = ["index.html", "market-entry.html", "services.html", "team.html", "contact.html"];
let failed = 0;

function fail(msg) {
  console.error("FAIL: " + msg);
  failed++;
}

function pass(msg) {
  console.log("PASS: " + msg);
}

pages.forEach((file) => {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  const creditCount = (html.match(/class="footer-credit"/g) || []).length;
  const footerCount = (html.match(/<footer class="site-footer/g) || []).length;
  if (creditCount !== 1) fail(file + " footer-credit count = " + creditCount + " (expected 1)");
  else pass(file + " footer-credit count = 1");
  if (footerCount !== 1) fail(file + " site-footer count = " + footerCount + " (expected 1)");
  else pass(file + " site-footer count = 1");
});

const allText = pages.map((f) => fs.readFileSync(path.join(root, f), "utf8")).join("\n") +
  fs.readFileSync(path.join(root, "assets/css/main.css"), "utf8") +
  fs.readFileSync(path.join(root, "assets/js/i18n.js"), "utf8");

if (/C8102E/i.test(allText)) fail("red C8102E found");
else pass("no C8102E");

if (/\u2014|—/.test(allText.replace(/\/\*[\s\S]*?\*\//g, ""))) fail("em dash found in content");
else pass("no em dash");

if (/gmail/i.test(allText)) fail("gmail found");
else pass("no gmail");

const i18n = fs.readFileSync(path.join(root, "assets/js/i18n.js"), "utf8");
const enBlock = i18n.split('"en": {')[1].split('"fr": {')[0];
if (!/The Thailand Market Entry Checklist/.test(enBlock)) fail("EN checklist heading missing or wrong");
else pass("EN checklist heading correct");

if (/Thailand/.test(enBlock) && !/Thaïlande/.test(enBlock.split('"lm.h"')[1] || "")) pass("Thailand spelled correctly in EN lm.h");
else if (/Thaïlande/.test(enBlock)) fail("French diaeresis leaked into EN");

if (/[\u0E00-\u0E7F]/.test(allText)) fail("Thai unicode characters found");
else pass("no Thai unicode");

pages.forEach((file) => {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if (!/assets\/img\/logo\.png/.test(html)) fail(file + " missing logo.png");
  else pass(file + " logo.png linked");
  if (/favicon\.svg/.test(html)) fail(file + " still references favicon.svg");
  if (/data-lang="th"/.test(html)) fail(file + " still has TH lang toggle");
  if (!/data-lang="de"/.test(html)) fail(file + " missing DE lang toggle");
});

if (/"th":\s*\{/.test(i18n)) fail("TH dictionary still in i18n.js");
else pass("no TH dictionary in i18n");

if (!/\["en", "fr", "de"\]/.test(i18n)) fail("LANGS should be en, fr, de");
else pass("LANGS en/fr/de");

if (!fs.existsSync(path.join(root, "fonts/libre-caslon-text-400.woff2"))) fail("libre-caslon-text-400.woff2 missing");
else pass("Libre Caslon 400 present");
if (!fs.existsSync(path.join(root, "fonts/libre-caslon-text-700.woff2"))) fail("libre-caslon-text-700.woff2 missing");
else pass("Libre Caslon 700 present");

const css = fs.readFileSync(path.join(root, "assets/css/main.css"), "utf8");
if (/fill-mode:\s*both/.test(css)) fail("fill-mode both found");
else pass("no fill-mode both");

if (/background:\s*var\(--gold\)/.test(css)) {
  const lines = css.split("\n").filter((l) => /background:\s*var\(--gold\)/.test(l));
  const bad = lines.filter((l) => {
    const prev = css.split("\n").slice(Math.max(0, css.split("\n").indexOf(l) - 3), css.split("\n").indexOf(l) + 1).join("\n");
    return !/(height:\s*[12]px|width:\s*[12]px|eyebrow::before|gold-line|hairline)/i.test(prev + l);
  });
  if (bad.length) fail("gold used as large background");
  else pass("gold only as hairlines");
} else pass("gold background check ok");

if (failed) {
  process.exit(1);
}
console.log("\nAll QA checks passed.");
