const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

for (const htmlFile of ['index.html', 'en/index.html']) {
  test(`${htmlFile}: responsive image candidates use valid existing URLs`, () => {
    const html = fs.readFileSync(htmlFile, 'utf8');
    const srcsets = [...html.matchAll(/<img\b[^>]*\bsrcset="([^"]+)"[^>]*>/g)];
    assert.equal(srcsets.length, 8, 'expected the eight portfolio card images');

    for (const [, srcset] of srcsets) {
      const candidates = srcset.split(',').map(candidate => candidate.trim());
      const widths = new Set();

      for (const candidate of candidates) {
        const match = candidate.match(/^(\S+)\s+([1-9]\d*)w$/);
        assert.ok(match, `invalid srcset candidate: ${candidate}`);
        const [, url, widthText] = match;
        const width = Number(widthText);
        assert.ok(!widths.has(width), `duplicate width descriptor: ${width}w`);
        widths.add(width);
        const decodedUrl = decodeURIComponent(url);
        const filePath = path.resolve(path.dirname(htmlFile), decodedUrl);
        assert.ok(fs.existsSync(filePath), `missing srcset file: ${decodedUrl}`);
      }
    }
  });
}
