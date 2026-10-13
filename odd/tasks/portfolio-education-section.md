# Portfolio Education Section

Repository locator: `odd/tasks/portfolio-education-section.md`

## Objective
Add a concise education and courses block inside the existing About section so portfolio visitors can find Daniel's academic background and Coursera credentials without adding a large new section or navigation item.

## Problem and Rationale
The About copy mentions the multimedia-to-software career path, but does not identify the institutions or courses. A compact, scannable block makes those credentials visible while preserving the existing page structure.

## Scope and Constraints
- Add SENA, Cali, Colombia — Tecnólogo en Producción Multimedia (graduated).
- Add Fundación Academia de Dibujo Profesional (FADP) — Diseño Multimedial, and Universidad de San Buenaventura, Cali — Ingeniería Multimedia, without implying graduation.
- Add Google UX Design and Meta Front-End Development, identifying Coursera as the platform.
- Keep the block within About, in Spanish to match the site, and do not add a main-navigation link, dates, certificate URLs, or unsupported completion claims.
- Reuse the current editorial visual system; keep the content readable on mobile and in both themes.

## Authorized Scope
- `index.html`
- `styles.css`
- `tests/education-section.test.js`
- `odd/tasks/portfolio-education-section.md`

## Acceptance Criteria
- The About section has an accessible, compact heading and five clearly labeled education/course entries.
- The SENA entry states the completed Tecnólogo qualification; FADP and Universidad de San Buenaventura remain neutral study records.
- The Google and Meta courses are both attributed to Coursera.
- No main-navigation item is added, and the block remains usable at mobile widths and in light/dark themes.

## TDD and Verification
- TDD mode: strict, as specified by the active AGENTS instructions.
- Test runner: Node.js 24.19.0 built-in `node:test`; no dependency installation or package manifest change.
- Exact command from the repository root: `node --test tests/education-section.test.js` (Node.js 24.19.0 from the Codex workspace runtime).
- RED must be observed before production markup or styling changes; then run GREEN and refactor with tests remaining green.
- After the test, inspect the diff and perform a desktop/mobile and light/dark visual/readability check if a local preview is available.

## ODD Route and Delivery
- Route: delegated direct. The change spans a test, HTML, and CSS; one bounded writer owns the read/write and TDD cycle.
- Delivery strategy: `ask-on-risk`; forecast is approximately 150 authored changed lines, below the advisory 400-line slice threshold.
- Work-unit commit: `feat(portfolio): add compact education credentials` on the feature branch; no push or PR is authorized.

## Progress
- [x] EDU-1: Add the accessible compact education/course block, focused structural test, and responsive styling.
- [x] EDU-2: Run the exact test command, inspect the diff, and record verification evidence.
- [x] EDU-3: Create the required conventional work-unit commit and record its identity.

## Verification Evidence
- RED: `C:\Users\danie\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe --test tests/education-section.test.js` failed as expected because the education block was not yet present.
- GREEN: `C:\Users\danie\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe --test tests/education-section.test.js` passed (1 test, 0 failures).
- `git diff --check`: passed (exit code 0).
- Visual smoke check: unavailable. The local `file://` preview was blocked by the browser URL policy (only HTTP/HTTPS allowed); no workaround was attempted.
- The responsive block uses the existing theme-aware `--line`, `--muted`, and `--ink` variables; both themes were not visually verified.
- Work-unit commit: `2471bef235eaa4c8900e5289984b7d5ec3112563` (`feat(portfolio): add compact education credentials`).

## Next Step
Implementation and verification are complete. Do not push or create a PR; no remote action is authorized.


## Approved Layout Revision
- User approved magazine proposal 3 for implementation in the actual website, not only the preview.
- Preserve all text; portrait/adjacent career timeline split is 65/35 after gap.
- Route: direct inline at explicit user request; no subagents.
- [x] EDU-4: Integrate approved layout and verify content, responsive light/dark rendering, and 65/35 ratio.
- RED observed: approved layout test failed before production changes (1 existing pass, 1 new fail).

- GREEN: both Node tests passed; git diff --check passed.
- Exact original About text nodes preserved, verified before/after.
- Chrome local browser check: 1440px and 360px, light/dark themes; portrait loads, 65/35 ratio, no horizontal overflow.
- Approved revision applied directly to index.html/styles.css; no push.
- Layout work-unit commit: `8982454` (`feat(portfolio): apply approved magazine about layout`).
