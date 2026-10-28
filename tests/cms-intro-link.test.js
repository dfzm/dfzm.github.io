const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const source = readFileSync(path.join(root, "script.js"), "utf8");
const safeURL = source.slice(source.indexOf("function getSafeURL("), source.indexOf("function getMediaDimensions("));
const render = source.slice(source.indexOf("function createProjectMarkup("), source.indexOf("function updateHash("));

for (const [lang, label] of [["es", "Ver proyecto"], ["en", "View project"]]) {
  test(`${lang}: projects have compact intro links and MoviMoney opens Google Play`, () => {
    const context = vm.createContext({ window: {}, URL });
    vm.runInContext(readFileSync(path.join(root, "i18n", `${lang}.js`), "utf8"), context);
    vm.runInContext(`
      const { ui, projects } = window.PORTFOLIO_I18N;
      const LOCAL_ASSET_PREFIXES = [];
      const escapeHTML = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const renderMediaSections = () => "";
      const createNoteMarkup = (project) => escapeHTML(project.note);
      ${safeURL}
      ${render}
    `, context);
    for (const [id, project] of Object.entries(context.window.PORTFOLIO_I18N.projects)) {
      context.projectId = id;
      const markup = vm.runInContext('createProjectMarkup(projects[projectId])', context);
      const hero = markup.slice(0, markup.indexOf('<div class="case-body">'));
      const destination = (project.link || project.playStoreUrl).replace(/&/g, "&amp;");
      const expectedLabel = id === "movimoney" ? (lang === "es" ? "Ver en Google Play" : "View on Google Play") : label;
      if (id === "movimoney") assert.match(markup, /class="case-links__store"/);
      const intro = hero.match(/<a class="case-hero__link"[\s\S]*?<\/a>/);
      assert.ok(intro, `${id}: intro link is present`);
      assert.ok(intro[0].includes(`href="${destination}"`));
      assert.match(intro[0], /target="_blank" rel="noopener noreferrer"/);
      assert.ok(intro[0].includes(`${expectedLabel} <span aria-hidden="true">↗</span>`));
      assert.ok(intro[0].includes(context.window.PORTFOLIO_I18N.ui.newTab));
      assert.ok(hero.indexOf('class="case-hero__summary"') < hero.indexOf('class="case-hero__link"'));
      const footer = markup.slice(markup.indexOf('<div class="case-links">'));
      assert.ok(footer.includes(`href="${destination}"`));
    }
    assert.doesNotMatch(vm.runInContext('createProjectMarkup({ ...projects["cms-propio"], link: "javascript:alert(1)" })', context), /case-hero__link/);
    assert.doesNotMatch(vm.runInContext('createProjectMarkup({ ...projects.movimoney, playStoreUrl: "javascript:alert(1)" })', context), /case-hero__link/);
  });
}
