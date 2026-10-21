const assert = require("node:assert/strict");
const { existsSync, readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => readFileSync(path.join(root, file), "utf8");

function loadLocale(file) {
  const sandbox = { window: {} };
  vm.runInNewContext(read(file), sandbox, { filename: file });
  // Round-trip through JSON so objects from the sandbox realm compare cleanly.
  return JSON.parse(JSON.stringify(sandbox.window.PORTFOLIO_I18N));
}

function keyPaths(value, prefix = "") {
  if (!value || typeof value !== "object" || Array.isArray(value)) return [prefix];
  return Object.keys(value).sort().flatMap((key) => keyPaths(value[key], prefix ? `${prefix}.${key}` : key));
}

const PAGES = {
  "index.html": {
    lang: "es",
    canonical: "https://dfzm.github.io/",
    es: "https://dfzm.github.io/",
    en: "https://dfzm.github.io/en/",
    ogLocale: "es_ES",
    ogAlternate: "en_US",
    switchHref: "en/",
    switchLang: "en",
    switchLabel: "Read in English"
  },
  "proyectos.html": {
    lang: "es",
    canonical: "https://dfzm.github.io/proyectos.html",
    es: "https://dfzm.github.io/proyectos.html",
    en: "https://dfzm.github.io/en/projects.html",
    ogLocale: "es_ES",
    ogAlternate: "en_US",
    switchHref: "en/projects.html",
    switchLang: "en",
    switchLabel: "Read in English"
  },
  "en/index.html": {
    lang: "en",
    canonical: "https://dfzm.github.io/en/",
    es: "https://dfzm.github.io/",
    en: "https://dfzm.github.io/en/",
    ogLocale: "en_US",
    ogAlternate: "es_ES",
    switchHref: "../",
    switchLang: "es",
    switchLabel: "Ver en español"
  },
  "en/projects.html": {
    lang: "en",
    canonical: "https://dfzm.github.io/en/projects.html",
    es: "https://dfzm.github.io/proyectos.html",
    en: "https://dfzm.github.io/en/projects.html",
    ogLocale: "en_US",
    ogAlternate: "es_ES",
    switchHref: "../proyectos.html",
    switchLang: "es",
    switchLabel: "Ver en español"
  }
};

test("English pages exist, declare lang=en and load shared assets from the site root", () => {
  for (const file of ["en/index.html", "en/projects.html"]) {
    assert.ok(existsSync(path.join(root, file)), `${file} must exist`);
    const html = read(file);
    assert.match(html, /<html lang="en"/, `${file} must declare lang="en"`);
    assert.ok(html.includes('<link rel="stylesheet" href="../styles.css">'), `${file} must load ../styles.css`);
    assert.ok(html.includes('<link rel="icon" type="image/png" href="../favicon.png">'), `${file} must load ../favicon.png`);
    const localeIndex = html.indexOf('<script src="../i18n/en.js" defer></script>');
    const scriptIndex = html.indexOf('<script src="../script.js" defer></script>');
    assert.ok(localeIndex !== -1 && scriptIndex > localeIndex, `${file} must load the English locale before the shared script`);

    for (const [, src] of html.matchAll(/\ssrc="([^"]*)"/g)) {
      assert.ok(src.startsWith("../"), `${file}: src "${src}" must point to the site root`);
    }
    for (const [, href] of html.matchAll(/\shref="([^"]*)"/g)) {
      const allowed = ["#", "./", "../", "https://", "mailto:", "projects.html"];
      assert.ok(allowed.some((prefix) => href.startsWith(prefix)), `${file}: href "${href}" must resolve from /en/`);
    }
  }
});

test("Spanish pages load the Spanish locale before the shared script", () => {
  for (const file of ["index.html", "proyectos.html"]) {
    const html = read(file);
    const localeIndex = html.indexOf('<script src="i18n/es.js" defer></script>');
    const scriptIndex = html.indexOf('<script src="script.js" defer></script>');
    assert.ok(localeIndex !== -1 && scriptIndex > localeIndex, `${file} must load i18n/es.js before script.js`);
  }
});

test("Locales expose the same project ids, UI keys and case-study structure", () => {
  const es = loadLocale("i18n/es.js");
  const en = loadLocale("i18n/en.js");

  assert.equal(es.lang, "es");
  assert.equal(en.lang, "en");
  assert.equal(es.hashKey, "proyecto");
  assert.equal(en.hashKey, "project");
  assert.deepEqual(keyPaths(en.ui), keyPaths(es.ui), "ui keys must match");
  assert.deepEqual(Object.keys(en.projects), Object.keys(es.projects), "project ids must match");

  for (const [id, esProject] of Object.entries(es.projects)) {
    const enProject = en.projects[id];
    assert.deepEqual(Object.keys(enProject).sort(), Object.keys(esProject).sort(), `${id}: keys must match`);
    for (const key of ["index", "color", "link", "downloadUrl"]) {
      assert.equal(enProject[key], esProject[key], `${id}: ${key} must not change`);
    }
    assert.equal(enProject.noteLink?.href, esProject.noteLink?.href, `${id}: noteLink href must not change`);
    assert.equal(enProject.process.length, esProject.process.length, `${id}: process steps`);
    enProject.process.forEach((step) => assert.equal(step.length, 2, `${id}: each process step is [title, text]`));
    assert.equal(enProject.deliverables.length, esProject.deliverables.length, `${id}: deliverables`);

    const esSections = esProject.mediaSections || [];
    const enSections = enProject.mediaSections || [];
    assert.equal(enSections.length, esSections.length, `${id}: media sections`);
    esSections.forEach((esSection, sectionIndex) => {
      const enSection = enSections[sectionIndex];
      assert.equal(enSection.placement, esSection.placement, `${id}[${sectionIndex}]: placement`);
      assert.equal(enSection.layout, esSection.layout, `${id}[${sectionIndex}]: layout`);
      assert.equal(enSection.items.length, esSection.items.length, `${id}[${sectionIndex}]: items`);
      esSection.items.forEach((esItem, itemIndex) => {
        const enItem = enSection.items[itemIndex];
        const where = `${id}[${sectionIndex}][${itemIndex}]`;
        assert.deepEqual(Object.keys(enItem).sort(), Object.keys(esItem).sort(), `${where}: item keys`);
        for (const key of Object.keys(esItem)) {
          if (["alt", "label", "caption"].includes(key)) continue;
          assert.deepEqual(enItem[key], esItem[key], `${where}: ${key} must not change`);
        }
      });
    });
  }

  assert.equal(es.projects.movimoney.playStoreUrl, "https://play.google.com/store/apps/details?id=com.dzionix.misgastoslocal&hl=es");
  assert.equal(en.projects.movimoney.playStoreUrl, "https://play.google.com/store/apps/details?id=com.dzionix.misgastoslocal&hl=en");
  assert.equal(en.ui.store.badgeSrc, "imgs proyectos/google-play-badge-en.png");
  assert.equal(en.ui.store.badgeAlt, "Get it on Google Play");
});

test("Spanish locale keeps today's Spanish interface copy", () => {
  const { ui } = loadLocale("i18n/es.js");
  assert.deepEqual(ui.mediaStates, { before: "Antes", proposal: "Propuesta", live: "En producción" });
  assert.equal(ui.case.challenge, "El reto");
  assert.equal(ui.case.participation, "Mi participación");
  assert.equal(ui.case.note, "Estado y límites");
  assert.equal(ui.newTab, "(se abre en una pestaña nueva)");
  assert.equal(ui.store.badgeSrc, "imgs proyectos/google-play-badge-es.png");
  assert.equal(ui.store.badgeAlt, "Disponible en Google Play");
  assert.equal(ui.announcer.projectOpened, "Caso de {title} abierto.");
  assert.equal(ui.theme.toDark, "Activar tema oscuro");
});

test("English and Spanish pages present the same cards, services, steps and education entries", () => {
  const count = (html, pattern) => (html.match(pattern) || []).length;
  const ids = (html) => [...html.matchAll(/data-project="([^"]+)"/g)].map(([, id]) => id);

  const esHome = read("index.html");
  const enHome = read("en/index.html");
  for (const pattern of [/data-project-card="/g, /class="education-list__item"/g, /class="service-item /g, /<li class="reveal"><span>\d\d<\/span><h3>/g, /class="orbit-word /g]) {
    assert.equal(count(enHome, pattern), count(esHome, pattern), `home pages must match for ${pattern}`);
  }
  assert.deepEqual(ids(enHome), ids(esHome), "home project triggers must match");

  const esProjects = read("proyectos.html");
  const enProjects = read("en/projects.html");
  assert.equal(count(enProjects, /class="project-row /g), count(esProjects, /class="project-row /g));
  assert.equal(count(enProjects, /data-project-card="/g), count(esProjects, /data-project-card="/g));
  assert.deepEqual(ids(enProjects), ids(esProjects), "projects page triggers must match");
  for (const [, id] of esProjects.matchAll(/href="index\.html#proyecto=([a-z0-9-]+)"/g)) {
    assert.ok(enProjects.includes(`href="./#project=${id}"`), `en/projects.html must link to ./#project=${id}`);
  }
});

test("Every page declares canonical, hreflang alternates and a switcher to its counterpart", () => {
  for (const [file, page] of Object.entries(PAGES)) {
    const html = read(file);
    assert.match(html, new RegExp(`<html lang="${page.lang}"`), `${file}: lang`);
    assert.ok(html.includes(`<link rel="canonical" href="${page.canonical}">`), `${file}: canonical`);
    assert.ok(html.includes(`<link rel="alternate" hreflang="es" href="${page.es}">`), `${file}: hreflang es`);
    assert.ok(html.includes(`<link rel="alternate" hreflang="en" href="${page.en}">`), `${file}: hreflang en`);
    assert.ok(html.includes(`<link rel="alternate" hreflang="x-default" href="${page.es}">`), `${file}: hreflang x-default`);
    assert.ok(html.includes(`<meta property="og:locale" content="${page.ogLocale}">`), `${file}: og:locale`);
    assert.ok(html.includes(`<meta property="og:locale:alternate" content="${page.ogAlternate}">`), `${file}: og:locale:alternate`);

    const header = html.match(/<header class="site-header"[\s\S]*?<\/header>/)[0];
    const switcher = header.match(/<nav class="lang-switch"[\s\S]*?<\/nav>/);
    assert.ok(switcher, `${file}: language switcher must live in the site header`);
    const link = switcher[0].match(/<a [^>]*>/)[0];
    assert.ok(link.includes(`href="${page.switchHref}"`), `${file}: switcher href`);
    assert.ok(link.includes(`hreflang="${page.switchLang}"`), `${file}: switcher hreflang`);
    assert.ok(link.includes(`lang="${page.switchLang}"`), `${file}: switcher lang`);
    assert.ok(link.includes(`aria-label="${page.switchLabel}"`), `${file}: switcher aria-label`);
    assert.ok(link.includes("data-lang-switch"), `${file}: switcher hook for hash mapping`);
    const current = switcher[0].match(/<span [^>]*aria-current="true"[^>]*>([^<]*)<\/span>/);
    assert.ok(current, `${file}: current language marker`);
    assert.equal(current[1], page.lang.toUpperCase(), `${file}: current language text`);
  }
});

test("English files contain no Spanish leftovers", () => {
  const markers = ["pestaña", "Ver proceso", "Sobre mí", "Proyectos profesionales", "Contactar", "Cerrar", "Ampliar", "Desplázate", "Mi participación", "Estado y límites", "Entregables", "Saltar al contenido", "Navegación", "Disponible en", "Formación", "Graduado"];
  for (const file of ["en/index.html", "en/projects.html", "i18n/en.js"]) {
    const content = read(file);
    for (const marker of markers) assert.ok(!content.includes(marker), `${file} must not contain "${marker}"`);
  }
});

test("Shared script has no hard-coded Spanish UI copy and reads both project hash keys", () => {
  const source = read("script.js");
  assert.doesNotMatch(source, /const PROJECTS = \{/, "case-study data must live in the locale files");
  const markers = ["pestaña", "Ampliar", "Caso de", "Activar tema", "Espacio reservado", "Desplázate", "Tu navegador", "Inicio del desarrollo", "Mi participación", "Entregables", "Disponible en Google Play", "En producción", "Visor interactivo", "Oscuro", "Claro", "Descargar"];
  for (const marker of markers) assert.ok(!source.includes(marker), `script.js must not contain "${marker}"`);
  assert.match(source, /window\.PORTFOLIO_I18N/);
  assert.match(source, /const PROJECT_HASH_KEYS = \{ es: "proyecto", en: "project" \};/);
  assert.match(source, /document\.currentScript/, "asset base must come from the script URL");
});

test("Section hash map pairs ids that exist on each language's pages", () => {
  const source = read("script.js");
  const pairs = JSON.parse(source.match(/const SECTION_HASH_PAIRS = (\[[\s\S]*?\]);/)[1]);
  const esHtml = read("index.html") + read("proyectos.html");
  const enHtml = read("en/index.html") + read("en/projects.html");
  assert.ok(pairs.length >= 8);
  for (const [esId, enId] of pairs) {
    assert.ok(esHtml.includes(`id="${esId}"`), `Spanish pages must define #${esId}`);
    assert.ok(enHtml.includes(`id="${enId}"`), `English pages must define #${enId}`);
  }
  for (const file of ["en/index.html", "en/projects.html"]) {
    const html = read(file);
    for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
      assert.ok(html.includes(`id="${anchor}"`), `${file}: #${anchor} must exist on the page`);
    }
  }
});

test("sitemap.xml lists both languages with alternates and robots.txt points to it", () => {
  const sitemap = read("sitemap.xml");
  assert.match(sitemap, /xmlns:xhtml="http:\/\/www\.w3\.org\/1999\/xhtml"/);
  for (const url of ["https://dfzm.github.io/", "https://dfzm.github.io/proyectos.html", "https://dfzm.github.io/en/", "https://dfzm.github.io/en/projects.html"]) {
    assert.ok(sitemap.includes(`<loc>${url}</loc>`), `sitemap must list ${url}`);
  }
  assert.ok(sitemap.includes('<xhtml:link rel="alternate" hreflang="en" href="https://dfzm.github.io/en/projects.html"/>'));
  assert.ok(sitemap.includes('<xhtml:link rel="alternate" hreflang="x-default" href="https://dfzm.github.io/"/>'));
  const robots = read("robots.txt");
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/dfzm\.github\.io\/sitemap\.xml/);
});

test("English Google Play badge image is available (supplied by the owner)", () => {
  const badgePath = path.join(root, "imgs proyectos", "google-play-badge-en.png");
  assert.ok(existsSync(badgePath), "imgs proyectos/google-play-badge-en.png must be added");
  assert.equal(readFileSync(badgePath).subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
});

test("Internal links use clean directory URLs instead of index.html", () => {
  for (const file of ["index.html", "proyectos.html", "en/index.html", "en/projects.html"]) {
    const html = read(file);
    for (const [, href] of html.matchAll(/\shref="([^"]*)"/g)) {
      assert.doesNotMatch(href, /(^|\/)index\.html/, `${file}: href "${href}" must not expose index.html`);
    }
  }
});
