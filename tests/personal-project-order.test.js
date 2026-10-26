const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.join(__dirname, '..');

test('Personal projects show CMS first with matching card and detail numbers in both languages', () => {
  for (const [page, locale] of [['index.html', 'es'], ['en/index.html', 'en']]) {
    const html = readFileSync(path.join(root, page), 'utf8');
    const cards = [...html.matchAll(/<article[^>]*data-project-card="([^"]+)"[\s\S]*?<\/article>/g)];
    assert.deepEqual(cards.slice(4).map(card => card[1]), ['cms-propio', 'crm-dz', 'movimoney', 'calculadora-ia']);
    const sandbox = { window: {} };
    vm.runInNewContext(readFileSync(path.join(root, 'i18n', `${locale}.js`), 'utf8'), sandbox);
    for (const [id, number] of [['cms-propio', '05'], ['crm-dz', '06'], ['movimoney', '07'], ['calculadora-ia', '08']]) {
      const card = cards.find(card => card[1] === id)[0];
      assert.ok(card.includes(`<span class="project-number">${number}</span>`));
      assert.ok(card.includes(`data-project="${id}"`), 'Detail trigger must retain the project ID');
      assert.equal(sandbox.window.PORTFOLIO_I18N.projects[id].index, number);
    }
  }
});
