const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.join(__dirname, '..');

const PAGES = [
  { page: 'index.html', locale: 'es', sectionId: 'proyectos', personalId: 'proyectos-personales', professionalId: 'proyectos-profesionales' },
  { page: 'en/index.html', locale: 'en', sectionId: 'projects', personalId: 'personal-projects', professionalId: 'professional-projects' }
];

const EXPECTED_ORDER = [
  ['cms-propio', '01'], ['crm-dz', '02'], ['movimoney', '03'], ['calculadora-ia', '04'],
  ['ca-na-tess', '05'], ['colive', '06'], ['mega', '07'], ['barcelo-indajaus', '08']
];

function readPage(page) {
  return readFileSync(path.join(root, page), 'utf8');
}

function projectsSection(html, sectionId) {
  const match = html.match(new RegExp(`<section[^>]*id="${sectionId}"[\\s\\S]*?<\\/section>\\s*\\n\\s*<section`));
  assert.ok(match, `Projects section #${sectionId} must exist`);
  return match[0];
}

test('Personal projects come first, numbered 01-04, followed by professional 05-08 in both languages', () => {
  for (const { page, locale } of PAGES) {
    const html = readPage(page);
    const cards = [...html.matchAll(/<article[^>]*data-project-card="([^"]+)"[\s\S]*?<\/article>/g)];
    assert.deepEqual(cards.slice(0, 8).map(card => card[1]), EXPECTED_ORDER.map(([id]) => id));
    const sandbox = { window: {} };
    vm.runInNewContext(readFileSync(path.join(root, 'i18n', `${locale}.js`), 'utf8'), sandbox);
    for (const [id, number] of EXPECTED_ORDER) {
      const card = cards.find(card => card[1] === id)[0];
      assert.ok(card.includes(`<span class="project-number">${number}</span>`), `${page}: ${id} must be numbered ${number}`);
      assert.ok(card.includes(`data-project="${id}"`), 'Detail trigger must retain the project ID');
      assert.equal(sandbox.window.PORTFOLIO_I18N.projects[id].index, number);
    }
  }
});

test('Project groups expose anchor ids, personal before professional', () => {
  for (const { page, personalId, professionalId } of PAGES) {
    const html = readPage(page);
    const personalAt = html.search(new RegExp(`class="project-group project-group--personal"[^>]*id="${personalId}"`));
    const professionalAt = html.search(new RegExp(`class="project-group project-group--professional"[^>]*id="${professionalId}"`));
    assert.ok(personalAt > -1, `${page}: personal group needs id ${personalId}`);
    assert.ok(professionalAt > -1, `${page}: professional group needs id ${professionalId}`);
    assert.ok(personalAt < professionalAt, `${page}: personal group must come first`);
    const moreAt = html.indexOf('class="project-more');
    assert.ok(moreAt > professionalAt, `${page}: "see all projects" stays in the professional group`);
  }
});

test('Projects subnav follows the section heading and links to both groups and the section top', () => {
  for (const { page, sectionId, personalId, professionalId } of PAGES) {
    const section = projectsSection(readPage(page), sectionId);
    const nav = section.match(/<nav class="project-subnav"[^>]*aria-label="[^"]+"[^>]*>[\s\S]*?<\/nav>/);
    assert.ok(nav, `${page}: projects section needs a labelled .project-subnav`);
    const headingEnd = section.indexOf('</header>');
    assert.ok(headingEnd > -1 && section.indexOf('class="section-heading') < headingEnd, `${page}: section heading must exist`);
    assert.ok(nav.index > headingEnd, `${page}: subnav must come after the section heading`);
    assert.ok(nav.index < section.indexOf('class="project-group'), `${page}: subnav must precede the project groups`);
    assert.ok(nav[0].includes(`href="#${personalId}"`));
    assert.ok(nav[0].includes(`href="#${professionalId}"`));
    assert.ok(nav[0].includes(`href="#${sectionId}"`), `${page}: subnav needs a link back to #${sectionId}`);
  }
});

test('Group anchors map between languages', () => {
  const script = readFileSync(path.join(root, 'script.js'), 'utf8');
  assert.match(script, /\["proyectos-personales", "personal-projects"\]/);
  assert.match(script, /\["proyectos-profesionales", "professional-projects"\]/);
});

test('Other projects page numbers its secondary cards 05-07 with matching detail index in both languages', () => {
  const OTHER = [['barentszen', '05'], ['preventing-treating', '06'], ['dream-school', '07']];
  for (const { page, locale } of [{ page: 'proyectos.html', locale: 'es' }, { page: 'en/projects.html', locale: 'en' }]) {
    const html = readPage(page);
    const sandbox = { window: {} };
    vm.runInNewContext(readFileSync(path.join(root, 'i18n', `${locale}.js`), 'utf8'), sandbox);
    for (const [id, number] of OTHER) {
      const card = html.match(new RegExp(`<article[^>]*data-project-card="${id}"[\\s\\S]*?<\\/article>`));
      assert.ok(card, `${page}: card ${id} must exist`);
      assert.ok(card[0].includes(`<span class="project-number">${number}</span>`), `${page}: ${id} must be numbered ${number}`);
      assert.equal(sandbox.window.PORTFOLIO_I18N.projects[id].index, number);
    }
  }
});
