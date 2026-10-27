const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

for (const file of ['proyectos.html', 'en/projects.html']) {
  test(`${file}: secondary project headings and labels`, () => {
    const html = fs.readFileSync(file, 'utf8');
    for (const id of ['barentszen', 'preventing-treating', 'dream-school']) {
      const titleId = `project-title-${id}`;
      assert.match(html, new RegExp(`<h3 id="${titleId}">[^<]+</h3>`));
      assert.match(html, new RegExp(`<button[^>]*data-project="${id}"[^>]*aria-labelledby="${titleId} project-cta-${id}"`));
      assert.match(html, new RegExp(`id="project-cta-${id}"`));
    }
  });
}
