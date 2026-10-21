const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const source = readFileSync(path.join(__dirname, "..", "script.js"), "utf8");
const locale = readFileSync(path.join(__dirname, "..", "i18n", "es.js"), "utf8");
test("MoviMoney links to its Google Play listing instead of downloading an APK", () => {
  const project = locale.match(/"movimoney": \{([\s\S]*?)\n    \},/)[1];
  assert.ok(project.includes('playStoreUrl: "https://play.google.com/store/apps/details?id=com.dzionix.misgastoslocal&hl=es"'));
  assert.doesNotMatch(project, /downloadUrl|\.apk/);
  assert.match(source, /getSafeURL\(project.playStoreUrl\)/);
  assert.match(locale, /Disponible en Google Play/);
  assert.match(source, /class="case-links__store"/);
});


test("Google Play action uses the image badge without custom button artwork", () => {
  const storeMarkup = source.match(/const storeLink = safeStoreLink \? `([\s\S]*?)`/)[1];
  assert.match(storeMarkup, /<img src="\$\{escapeHTML\(safeStoreBadge\)\}"/);
  assert.match(source, /const safeStoreBadge = getSafeURL\(ui\.store\.badgeSrc\)/);
  assert.match(locale, /badgeSrc: "imgs proyectos\/google-play-badge-es\.png"/);
  assert.doesNotMatch(storeMarkup, /<svg|<span/);
  const badge = readFileSync(path.join(__dirname, "..", "imgs proyectos", "google-play-badge-es.png"));
  assert.equal(badge.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
});


test("MoviMoney project card displays a small official image link beneath its summary", () => {
  const html = readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  const card = html.match(/<article[^>]*data-project-card="movimoney"[\s\S]*?<\/article>/)[0];
  const link = card.match(/<a class="project-store-link"[\s\S]*?<\/a>/);
  assert.ok(link, "Project card must include its Google Play image link");
  assert.match(link[0], /href="https:\/\/play.google.com\/store\/apps\/details\?id=com.dzionix.misgastoslocal&amp;hl=es"/);
  assert.match(link[0], /target="_blank"/);
  assert.match(link[0], /rel="noopener noreferrer"/);
  assert.match(link[0], /<img src="imgs proyectos\/google-play-badge-es.png"/);
  assert.match(link[0], /alt="Disponible en Google Play"/);
  assert.doesNotMatch(link[0], /data-project=|download|<button|<svg/);
  assert.ok(card.indexOf('class="project-summary"') < card.indexOf('class="project-store-link"'));
  const css = readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
  assert.match(css, /\.project-store-link img\s*\{[^}]*width:\s*140px;[^}]*max-width:\s*100%;[^}]*height:\s*auto;/);
});
