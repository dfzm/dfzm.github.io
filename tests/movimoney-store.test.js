const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const source = readFileSync(path.join(__dirname, "..", "script.js"), "utf8");
test("MoviMoney links to its Google Play listing instead of downloading an APK", () => {
  const project = source.match(/"movimoney": \{([\s\S]*?)\n  \},/)[1];
  assert.ok(project.includes('playStoreUrl: "https://play.google.com/store/apps/details?id=com.dzionix.misgastoslocal&hl=es"'));
  assert.doesNotMatch(project, /downloadUrl|\.apk/);
  assert.match(source, /getSafeURL\(project.playStoreUrl\)/);
  assert.match(source, /Ver en Google Play/);
  assert.match(source, /class="case-links__store"/);
});
