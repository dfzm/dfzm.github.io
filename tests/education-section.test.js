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
  assert.match(entries[0], /SENA[\s\S]*Cali, Colombia/);
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
