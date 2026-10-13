const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");

const html = readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

test("About presents five accessible education and course entries without overstating completion", () => {
  const aboutStart = html.indexOf('<section class="about section-shell" id="sobre-mi"');
  const educationStart = html.indexOf(
    '<section class="about-education" aria-labelledby="education-title">'
  );

  assert.ok(aboutStart !== -1 && educationStart > aboutStart, "education must be inside About");

  const educationEnd = html.indexOf("</section>", educationStart);
  const aboutEnd = html.indexOf("</section>", educationEnd + 1);
  const education = html.slice(educationStart, educationEnd);
  const entries = [...education.matchAll(/<li class="education-list__item">([\s\S]*?)<\/li>/g)].map(
    ([, entry]) => entry
  );

  assert.ok(education.includes('<h3 id="education-title">Formación y cursos</h3>'), "education needs a named heading");
  assert.equal(entries.length, 5, "education must contain five clearly grouped entries");
  assert.ok(aboutEnd > educationEnd, "education must close before the About section ends");

  assert.match(entries[0], /Tecnólogo en Producción Multimedia/);
  assert.match(entries[0], /SENA[\s\S]*Cali/);
  assert.match(entries[0], /Graduado/);

  assert.match(entries[1], /Fundación Academia de Dibujo Profesional \(FADP\)/);
  assert.match(entries[1], /Diseño Multimedial/);
  assert.doesNotMatch(entries[1], /graduad|egresad|título obtenido|completad/i);

  assert.match(entries[2], /Universidad de San Buenaventura[\s\S]*Cali/);
  assert.match(entries[2], /Ingeniería Multimedia/);
  assert.doesNotMatch(entries[2], /graduad|egresad|título obtenido|completad/i);

  assert.match(entries[3], /Google/);
  assert.match(entries[3], /Diseño UX/);
  assert.match(entries[3], /Coursera/);
  assert.match(entries[4], /Meta/);
  assert.match(entries[4], /Desarrollo Front-End/);
  assert.match(entries[4], /Coursera/);
});


test("About uses the approved magazine composition and 65/35 portrait split", () => {
  assert.match(html, /class="about-heading/);
  assert.match(html, /class="about-opening/);
  assert.match(html, /class="about-lower/);
  assert.match(html, /class="about-profile/);
  const css = readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
  assert.match(css, /grid-template-columns: minmax\(0, 65fr\) minmax\(0, 35fr\)/);
});


test("About presents the approved narrative and separates design from development", () => {
  const actual = html.slice(html.indexOf('<section class="about section-shell"'), html.indexOf('<section class="ai-section'));
  const plainText = actual.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const approvedCopy = [
    "Llevo ocho años formándome y trabajando entre el diseño y el desarrollo web. Empecé construyendo páginas desde cero con HTML, CSS, JavaScript y PHP, sin frameworks. Después pasé a desarrollar sitios a medida en WordPress y, con el tiempo, a trabajar con React, Next.js, Astro y arquitecturas modernas.",
    "Hoy desarrollo también con apoyo de IA, aprovechando esa base técnica para entender cada solución, revisar el código y cuidar que el resultado sea útil y mantenible.",
    "Diseño UX/UI y prototipado de interfaces. Conocimientos de Figma, Adobe XD, Illustrator y Photoshop, además de Adobe Premiere para edición de vídeo.",
    "Interfaces responsive con HTML, CSS, JavaScript y React; también Next.js y Astro. PHP, MySQL y APIs REST. WordPress con Elementor Pro avanzado, ACF, CPT y WooCommerce; funcionalidades a medida.",
    "Hosting y dominios. SEO técnico: velocidad, HTML semántico y metadatos. Medición con Analytics, Search Console y Tag Manager."
];
  for (const fragment of approvedCopy) assert.ok(plainText.includes(fragment), "approved copy must be present: " + fragment);
  const design = actual.match(/<span><b>DISEÑO<\/b>([\s\S]*?)<\/span>/)[1];
  assert.doesNotMatch(design, /HTML|PHP|React|WordPress/);
});
