document.documentElement.classList.add("js");

// Copy and case-study data come from the locale loaded before this script (i18n/es.js or i18n/en.js).
const { ui, hashKey, projects: PROJECTS } = window.PORTFOLIO_I18N;

// Media paths are relative to the site root, so resolve them from this script's own URL.
// That keeps them working from /en/ and when the site is opened from file://.
const ASSET_BASE = new URL(".", document.currentScript?.src || document.baseURI);
const LOCAL_ASSET_PREFIXES = ["Proyectos/", "Proyectos Secundarios/", "imgs proyectos/"];

const PROJECT_HASH_KEYS = { es: "proyecto", en: "project" };

// Section ids paired as [Spanish, English] so the language switcher keeps the reader's place.
const SECTION_HASH_PAIRS = [
  ["inicio", "top"],
  ["contenido", "content"],
  ["proyectos", "projects"],
  ["proyectos-secundarios", "more-projects"],
  ["servicios", "services"],
  ["forma-de-trabajo", "process"],
  ["sobre-mi", "about"],
  ["ia-aplicada", "ai"],
  ["contacto", "contact"]
];

function formatText(template, values) {
  return template.replace(/\{(\w+)\}/g, (placeholder, key) => (key in values ? String(values[key]) : placeholder));
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogIndex = document.querySelector("#dialog-index");
const dialogClose = document.querySelector(".dialog-close");
const announcer = document.querySelector("#announcer");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxLabel = document.querySelector("#lightbox-label");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCounter = document.querySelector("#lightbox-counter");
let activeTrigger = null;
let isHashUpdate = false;
let cleanupDialogMedia = () => {};
let dialogMediaSetupFrame = 0;

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;"
  })[character]);
}

const MEDIA_LAYOUTS = new Set(["full", "split", "storyboard", "asymmetric", "comparison", "implementation", "mobile-grid", "lead-split", "centered", "triptych", "chain", "chain-pair"]);

const MEDIA_STATES = new Map(Object.entries(ui.mediaStates));

function getSafeURL(value) {
  if (typeof value !== "string" || !value || value !== value.trim() || /[\u0000-\u001f\u007f]/.test(value) || value.startsWith("//")) return null;

  if (LOCAL_ASSET_PREFIXES.some((prefix) => value.startsWith(prefix))) {
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(value);
    } catch {
      return null;
    }
    const segments = decodedPath.split("/");
    if (/[\\?#]|[\u0000-\u001f\u007f]/.test(decodedPath) || segments.some((segment) => !segment || segment === "." || segment === "..")) return null;
    return new URL(value, ASSET_BASE).href;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function getMediaDimensions(item) {
  if (!Number.isInteger(item.width) || item.width <= 0 || !Number.isInteger(item.height) || item.height <= 0) return null;
  return { width: item.width, height: item.height };
}

function getSafeAspect(item, dimensions) {
  if (dimensions) return `${dimensions.width} / ${dimensions.height}`;
  const match = typeof item.aspect === "string" && item.aspect.match(/^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*$/);
  if (!match || Number(match[1]) <= 0 || Number(match[2]) <= 0) return "16 / 10";
  return `${Number(match[1])} / ${Number(match[2])}`;
}

function getMediaState(item) {
  return MEDIA_STATES.has(item.state) ? item.state : null;
}

function createMediaLabel(item, itemIndex) {
  const state = getMediaState(item);
  const badge = state ? `<em class="case-media__state">${escapeHTML(MEDIA_STATES.get(state))}</em>` : "";
  return `<span class="case-media__label${state ? ` case-media__label--${state}` : ""}"><b>${String(itemIndex + 1).padStart(2, "0")}</b>${badge}${escapeHTML(item.label)}</span>`;
}

function createPlaceholderMarkup(item, itemIndex, aspect, modifier) {
  const header = createMediaLabel(item, itemIndex);
  return `
    <figure class="case-media__item case-media__item--placeholder${modifier}">
      <div class="case-media__placeholder" style="--media-aspect: ${escapeHTML(aspect)}" role="img" aria-label="${escapeHTML(formatText(ui.media.placeholderLabel, { label: item.label }))}">
        ${header}
        <span class="case-media__frame" aria-hidden="true"></span>
        <span class="case-media__aspect" aria-hidden="true">${escapeHTML(aspect.replaceAll(" / ", ":"))}</span>
      </div>
      <figcaption>${escapeHTML(item.caption)}</figcaption>
    </figure>
  `;
}

function createMediaActions(item, safeSrc) {
  const expandLink = item.expandable && !item.scrollScrub ? `
    <a class="case-media__expand" href="${escapeHTML(safeSrc)}" target="_blank" rel="noopener" data-lightbox-open aria-label="${escapeHTML(formatText(ui.media.expandLabel, { label: item.label }))}">
      ${escapeHTML(ui.media.expandText)} <span aria-hidden="true">↗</span>
    </a>
  ` : "";
  const safeSourceUrl = item.sourceUrl ? getSafeURL(item.sourceUrl) : null;
  const sourceLink = safeSourceUrl ? `
    <a class="case-media__expand" href="${escapeHTML(safeSourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(formatText(ui.media.sourceLabel, { label: item.label }))}">
      ${escapeHTML(ui.media.sourceText)} <span aria-hidden="true">↗</span>
    </a>
  ` : "";

  return expandLink || sourceLink ? `<span class="case-media__actions">${expandLink}${sourceLink}</span>` : "";
}

function createVideoMediaMarkup(item, itemIndex) {
  const dimensions = getMediaDimensions(item);
  const aspect = getSafeAspect(item, dimensions);
  const [aspectWidth, aspectHeight] = aspect.split("/").map(Number);
  const state = getMediaState(item);
  const modifier = `${item.featured ? " case-media__item--featured" : ""}${aspectWidth < aspectHeight ? " case-media__item--portrait" : ""}${state ? ` case-media__item--${state}` : ""}`;
  const sources = Array.isArray(item.sources) ? item.sources.map((source) => ({
    src: getSafeURL(source.src),
    type: source.type === "video/mp4" || source.type === "video/webm" ? source.type : null
  })).filter((source) => source.src && source.type) : [];

  if (!dimensions || !sources.length) return createPlaceholderMarkup(item, itemIndex, aspect, modifier);

  const safePoster = item.poster ? getSafeURL(item.poster) : null;
  const posterAttribute = safePoster ? ` poster="${escapeHTML(safePoster)}"` : "";
  const sourceMarkup = sources.map((source) => `<source src="${escapeHTML(source.src)}" type="${source.type}">`).join("");
  const fallbackSrc = sources.find((source) => source.type === "video/mp4")?.src || sources[0].src;

  return `
    <figure class="case-media__item${modifier}">
      ${createMediaLabel(item, itemIndex)}
      <div class="case-media__stage case-media__stage--video" style="--media-aspect: ${escapeHTML(aspect)}">
        <video class="case-media__video" width="${dimensions.width}" height="${dimensions.height}" controls playsinline preload="metadata"${posterAttribute} aria-label="${escapeHTML(item.alt)}">
          ${sourceMarkup}
          ${escapeHTML(ui.media.videoFallback)} <a href="${escapeHTML(fallbackSrc)}">${escapeHTML(formatText(ui.media.videoDownload, { label: item.label }))}</a>.
        </video>
      </div>
      <figcaption><span>${escapeHTML(item.caption)}</span></figcaption>
    </figure>
  `;
}

function createMediaItemMarkup(item, itemIndex) {
  if (item.type === "video") return createVideoMediaMarkup(item, itemIndex);

  const isSupportedMedia = item.type === "image";
  const dimensions = isSupportedMedia ? getMediaDimensions(item) : null;
  const safeSrc = isSupportedMedia ? getSafeURL(item.src) : null;
  const aspect = getSafeAspect(item, dimensions && safeSrc ? dimensions : null);
  const [aspectWidth, aspectHeight] = aspect.split("/").map(Number);
  const state = getMediaState(item);
  const modifier = `${item.featured ? " case-media__item--featured" : ""}${!item.scrollScrub && aspectWidth < aspectHeight ? " case-media__item--portrait" : ""}${state ? ` case-media__item--${state}` : ""}`;
  const header = createMediaLabel(item, itemIndex);

  if (!dimensions || !safeSrc) return createPlaceholderMarkup(item, itemIndex, aspect, modifier);

  const stageModifier = item.scrollScrub ? " case-media__stage--scroll-scrub" : "";
  const stageAttribute = item.scrollScrub ? ` data-image-scroll-scrub tabindex="-1" role="group" aria-disabled="true" aria-label="${escapeHTML(formatText(ui.media.scrubLabel, { label: item.label }))}"` : "";
  const imageClass = item.scrollScrub ? " class=\"case-media__scroll-image\" data-scroll-scrub-image" : "";
  const scrubViewport = item.scrubViewport ? getSafeAspect({ aspect: item.scrubViewport }, null) : null;
  const stageStyle = `--media-aspect: ${escapeHTML(aspect)}${scrubViewport ? `; aspect-ratio: ${escapeHTML(scrubViewport)}` : ""}`;
  const mediaMarkup = `<img${imageClass} src="${escapeHTML(safeSrc)}" width="${dimensions.width}" height="${dimensions.height}" alt="${escapeHTML(item.alt)}" loading="lazy" decoding="async">`;
  const scrubHint = item.scrollScrub ? `<span class="case-media__scrub-hint" aria-hidden="true">${escapeHTML(ui.media.scrubHint)} <b>↕</b></span>` : "";
  const mediaActions = createMediaActions(item, safeSrc);

  return `
    <figure class="case-media__item${modifier}">
      ${header}
      <div class="case-media__stage${stageModifier}"${stageAttribute} style="${stageStyle}">
        ${mediaMarkup}
        ${scrubHint}
      </div>
      <figcaption><span>${escapeHTML(item.caption)}</span>${mediaActions}</figcaption>
    </figure>
  `;
}

function createMediaSectionMarkup(section) {
  const layout = MEDIA_LAYOUTS.has(section.layout) ? section.layout : "full";
  const items = section.items.map(createMediaItemMarkup).join("");

  return `
    <section class="case-media" aria-label="${escapeHTML(section.heading)}">
      <header class="case-media__header">
        <h3>${escapeHTML(section.heading)}</h3>
        <p>${escapeHTML(section.intro)}</p>
      </header>
      <div class="case-media__grid case-media__grid--${layout}">${items}</div>
    </section>
  `;
}

function renderMediaSections(project, placement) {
  return (project.mediaSections || [])
    .filter((section) => section.placement === placement)
    .map(createMediaSectionMarkup)
    .join("");
}

function createNoteMarkup(project) {
  const escapedNote = escapeHTML(project.note);
  const noteLink = project.noteLink;
  if (!noteLink || typeof noteLink.label !== "string") return escapedNote;

  const safeHref = getSafeURL(noteLink.href);
  if (!safeHref) return escapedNote;

  const escapedLabel = escapeHTML(noteLink.label);
  const link = `<a class="case-block__inline-link" href="${escapeHTML(safeHref)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(noteLink.ariaLabel || noteLink.label)}">${escapedLabel}</a>`;
  return escapedNote.replace(escapedLabel, link);
}

function createProjectMarkup(project) {
  const steps = project.process.map(([title, text]) => `
    <li><strong>${escapeHTML(title)}</strong><span>${escapeHTML(text)}</span></li>
  `).join("");

  const deliverables = project.deliverables.map((deliverable) => `<li>${escapeHTML(deliverable)}</li>`).join("");

  const startDate = project.startDate ? `
    <div><dt>${escapeHTML(ui.case.startDate)}</dt><dd>${escapeHTML(project.startDate)}</dd></div>
  ` : "";

  const safeProjectLink = getSafeURL(project.link);
  const projectLink = safeProjectLink ? `
    <a href="${escapeHTML(safeProjectLink)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(project.linkLabel)} ${escapeHTML(ui.newTab)}">
      ${escapeHTML(project.linkLabel)} <span aria-hidden="true">↗</span>
    </a>
  ` : "";

  const safeDownloadLink = getSafeURL(project.downloadUrl);
  const downloadLink = safeDownloadLink ? `
    <a class="case-links__download" href="${escapeHTML(safeDownloadLink)}" target="_blank" rel="noopener noreferrer" download aria-label="${escapeHTML(project.downloadLabel || ui.downloadApk)} ${escapeHTML(ui.newTab)}">
      ${escapeHTML(project.downloadLabel || ui.downloadApk)} <span aria-hidden="true">↓</span>
    </a>
  ` : "";

  const safeStoreLink = getSafeURL(project.playStoreUrl);
  const safeStoreBadge = getSafeURL(ui.store.badgeSrc);
  const storeLink = safeStoreLink ? `
    <a class="case-links__store" href="${escapeHTML(safeStoreLink)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(ui.store.label)}">
      <img src="${escapeHTML(safeStoreBadge)}" alt="${escapeHTML(ui.store.badgeAlt)}" width="646" height="250">
    </a>
  ` : "";

  const links = safeProjectLink || safeDownloadLink || safeStoreLink ? `
    <div class="case-links">${projectLink}${downloadLink}${storeLink}</div>
  ` : "";

  const note = project.note ? `
    <section class="case-block">
      <h3>${escapeHTML(ui.case.note)}</h3>
      <p>${createNoteMarkup(project)}</p>
    </section>
  ` : "";

  const mediaAfterChallenge = renderMediaSections(project, "afterChallenge");
  const mediaAfterParticipation = renderMediaSections(project, "afterParticipation");
  const mediaAfterProcess = renderMediaSections(project, "afterProcess");
  const mediaAfterDeliverables = renderMediaSections(project, "afterDeliverables");
  const mediaBeforeNote = renderMediaSections(project, "beforeNote");

  return `
    <div class="case-hero" style="--case-color: ${escapeHTML(project.color)}">
      <div>
        <div class="case-hero__meta"><span>${escapeHTML(project.category)}</span><span>${escapeHTML(project.status)}</span></div>
        <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
      </div>
      <p class="case-hero__summary">${escapeHTML(project.summary)}</p>
    </div>
    <div class="case-body">
      <dl class="case-facts">
        <div><dt>${escapeHTML(ui.case.category)}</dt><dd>${escapeHTML(project.category)}</dd></div>
        <div><dt>${escapeHTML(ui.case.role)}</dt><dd>${escapeHTML(project.role)}</dd></div>
        <div><dt>${escapeHTML(ui.case.status)}</dt><dd>${escapeHTML(project.status)}</dd></div>
        ${startDate}
      </dl>
      <section class="case-block">
        <h3>${escapeHTML(ui.case.challenge)}</h3>
        <p>${escapeHTML(project.challenge)}</p>
      </section>
      ${mediaAfterChallenge}
      <section class="case-block">
        <h3>${escapeHTML(ui.case.participation)}</h3>
        <p>${escapeHTML(project.participation)}</p>
      </section>
      ${mediaAfterParticipation}
      <section class="case-block">
        <h3>${escapeHTML(ui.case.process)}</h3>
        <ol class="case-process">${steps}</ol>
      </section>
      ${mediaAfterProcess}
      <section class="case-block">
        <h3>${escapeHTML(ui.case.deliverables)}</h3>
        <ul class="case-deliverables">${deliverables}</ul>
      </section>
      ${mediaAfterDeliverables}
      <section class="case-block">
        <h3>${escapeHTML(ui.case.technology)}</h3>
        <p>${escapeHTML(project.technology)}</p>
      </section>
      ${mediaBeforeNote}
      ${note}
      ${links}
    </div>
  `;
}

function updateHash(projectId) {
  const url = new URL(window.location.href);
  url.hash = projectId ? `${hashKey}=${projectId}` : "";
  isHashUpdate = true;
  try {
    history.replaceState(null, "", url);
  } catch {
    window.location.hash = url.hash;
  }
  window.setTimeout(() => { isHashUpdate = false; }, 0);
}

function resetDialogScroll() {
  dialogContent.scrollTop = 0;
  dialogContent.scrollLeft = 0;
}

const IMAGE_SCRUB_TRAVEL_PX = 1200;

function normalizeWheelDelta(event, stage) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    const lineHeight = Number.parseFloat(getComputedStyle(stage).lineHeight);
    return event.deltaY * (Number.isFinite(lineHeight) ? lineHeight : 16);
  }
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * stage.clientHeight;
  return event.deltaY;
}

function setupImageScrollScrub() {
  const stages = [...dialogContent.querySelectorAll("[data-image-scroll-scrub]")];
  if (!stages.length) return () => {};

  const controllers = stages.map((stage) => {
    const image = stage.querySelector("[data-scroll-scrub-image]");
    let offset = 0;
    let maxTravel = 0;
    let activePointerId = null;
    let pointerY = 0;

    const measureTravel = () => {
      maxTravel = Math.max(0, image.offsetHeight - stage.clientHeight);
      offset = Math.min(offset, maxTravel);
    };
    const canScrub = () => !reducedMotion.matches && image.complete && image.naturalWidth > 0 && maxTravel > 0;
    const renderOffset = () => stage.style.setProperty("--scrub-translate-y", `${-offset}px`);
    const scrubByPixels = (pixels) => {
      offset = Math.min(maxTravel, Math.max(0, offset + (pixels / IMAGE_SCRUB_TRAVEL_PX) * maxTravel));
      renderOffset();
    };
    const resetPointerScrub = () => {
      if (activePointerId !== null && stage.hasPointerCapture?.(activePointerId)) stage.releasePointerCapture(activePointerId);
      activePointerId = null;
      stage.classList.remove("is-scrubbing");
    };
    const updateMode = () => {
      const usesReducedMotion = reducedMotion.matches;
      measureTravel();
      if (usesReducedMotion) {
        offset = 0;
        resetPointerScrub();
      }
      const scrubEnabled = canScrub();
      stage.classList.toggle("is-reduced-motion", usesReducedMotion);
      stage.classList.toggle("is-scroll-scrub-enabled", scrubEnabled);
      stage.tabIndex = scrubEnabled ? 0 : -1;
      stage.setAttribute("aria-disabled", String(!scrubEnabled));
      renderOffset();
    };
    const finishPointerScrub = (event) => {
      if (event.pointerId !== activePointerId) return;
      if (event.cancelable) event.preventDefault();
      resetPointerScrub();
    };
    const handleWheel = (event) => {
      if (!canScrub()) return;
      event.preventDefault();
      scrubByPixels(normalizeWheelDelta(event, stage));
    };
    const handlePointerDown = (event) => {
      if (!canScrub() || (event.pointerType !== "touch" && event.pointerType !== "pen")) return;
      event.preventDefault();
      activePointerId = event.pointerId;
      pointerY = event.clientY;
      stage.setPointerCapture?.(activePointerId);
      stage.classList.add("is-scrubbing");
    };
    const handlePointerMove = (event) => {
      if (event.pointerId !== activePointerId || !canScrub()) return;
      event.preventDefault();
      scrubByPixels(pointerY - event.clientY);
      pointerY = event.clientY;
    };
    const handleKeyDown = (event) => {
      if (!canScrub()) return;
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        offset = event.key === "Home" ? 0 : maxTravel;
        renderOffset();
        return;
      }
      const pixelStep = event.key === "PageDown" || event.key === "PageUp" ? stage.clientHeight : 96;
      const pixels = event.key === "ArrowDown" || event.key === "PageDown" ? pixelStep
        : event.key === "ArrowUp" || event.key === "PageUp" ? -pixelStep
        : null;
      if (pixels === null) return;
      event.preventDefault();
      scrubByPixels(pixels);
    };
    const handleError = () => {
      resetPointerScrub();
      stage.classList.add("is-media-error");
      stage.classList.remove("is-scroll-scrub-enabled");
      stage.tabIndex = -1;
      stage.setAttribute("aria-disabled", "true");
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    stage.addEventListener("pointerdown", handlePointerDown, { passive: false });
    stage.addEventListener("pointermove", handlePointerMove, { passive: false });
    stage.addEventListener("pointerup", finishPointerScrub, { passive: false });
    stage.addEventListener("pointercancel", finishPointerScrub, { passive: false });
    stage.addEventListener("keydown", handleKeyDown);
    image.addEventListener("load", updateMode);
    image.addEventListener("error", handleError);
    updateMode();

    return {
      updateMode,
      cleanup() {
        resetPointerScrub();
        stage.removeEventListener("wheel", handleWheel);
        stage.removeEventListener("pointerdown", handlePointerDown);
        stage.removeEventListener("pointermove", handlePointerMove);
        stage.removeEventListener("pointerup", finishPointerScrub);
        stage.removeEventListener("pointercancel", finishPointerScrub);
        stage.removeEventListener("keydown", handleKeyDown);
        image.removeEventListener("load", updateMode);
        image.removeEventListener("error", handleError);
      }
    };
  });

  const handleResize = () => controllers.forEach(({ updateMode }) => updateMode());
  window.addEventListener("resize", handleResize, { passive: true });

  const handleMotionPreference = () => controllers.forEach(({ updateMode }) => updateMode());
  if (typeof reducedMotion.addEventListener === "function") reducedMotion.addEventListener("change", handleMotionPreference);
  else reducedMotion.addListener(handleMotionPreference);

  return () => {
    if (typeof reducedMotion.removeEventListener === "function") reducedMotion.removeEventListener("change", handleMotionPreference);
    else reducedMotion.removeListener(handleMotionPreference);
    window.removeEventListener("resize", handleResize);
    controllers.forEach(({ cleanup }) => cleanup());
  };
}

let lightboxGallery = [];
let lightboxIndex = 0;

function readMediaDetails(trigger) {
  const figure = trigger.closest(".case-media__item");
  const image = figure?.querySelector("img");
  const labelNode = figure?.querySelector(".case-media__label");
  // The label also holds the running number and the state chip; keep only its own text.
  const name = labelNode ? [...labelNode.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join("").trim() : "";
  const state = labelNode?.querySelector(".case-media__state")?.textContent.trim() || "";

  return {
    src: trigger.getAttribute("href"),
    alt: image?.getAttribute("alt") || "",
    label: state ? `${state} · ${name}` : name,
    caption: figure?.querySelector("figcaption > span")?.textContent.trim() || ""
  };
}

function renderLightboxItem() {
  const item = lightboxGallery[lightboxIndex];
  if (!item) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxLabel.textContent = item.label;
  lightboxCaption.textContent = item.caption;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxGallery.length}`;
  lightbox.classList.toggle("is-single", lightboxGallery.length < 2);
}

function stepLightbox(delta) {
  if (lightboxGallery.length < 2) return;
  lightboxIndex = (lightboxIndex + delta + lightboxGallery.length) % lightboxGallery.length;
  renderLightboxItem();
  announcer.textContent = formatText(ui.announcer.lightboxStep, { current: lightboxIndex + 1, total: lightboxGallery.length, label: lightboxGallery[lightboxIndex].label });
}

function closeLightbox() {
  if (lightbox.open) lightbox.close();
}

function openLightbox(gallery, index) {
  lightboxGallery = gallery;
  lightboxIndex = index;
  renderLightboxItem();
  if (!lightbox.open) lightbox.showModal();
}

function setupLightbox() {
  const triggers = [...dialogContent.querySelectorAll("[data-lightbox-open]")];
  if (!triggers.length) return () => {};

  const handleClick = (event) => {
    const trigger = event.currentTarget;
    // Let modified clicks keep the native "open in a new tab" behaviour.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const section = trigger.closest(".case-media") || dialogContent;
    const siblings = [...section.querySelectorAll("[data-lightbox-open]")];
    const gallery = siblings.map(readMediaDetails).filter((item) => item.src);
    const index = siblings.indexOf(trigger);
    if (!gallery.length || index < 0) return;
    event.preventDefault();
    openLightbox(gallery, index);
  };

  triggers.forEach((trigger) => trigger.addEventListener("click", handleClick));
  return () => {
    closeLightbox();
    triggers.forEach((trigger) => trigger.removeEventListener("click", handleClick));
  };
}

if (lightbox && lightboxImage) {
  lightbox.addEventListener("close", () => {
    lightboxImage.removeAttribute("src");
    lightboxGallery = [];
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
  lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => stepLightbox(-1));
  lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    stepLightbox(event.key === "ArrowLeft" ? -1 : 1);
  });
}

function teardownDialogMedia() {
  if (dialogMediaSetupFrame) cancelAnimationFrame(dialogMediaSetupFrame);
  dialogMediaSetupFrame = 0;
  cleanupDialogMedia();
  cleanupDialogMedia = () => {};
}

function scheduleDialogMediaSetup() {
  dialogMediaSetupFrame = requestAnimationFrame(() => {
    dialogMediaSetupFrame = 0;
    resetDialogScroll();
    const cleanups = [setupImageScrollScrub(), setupLightbox()];
    cleanupDialogMedia = () => cleanups.forEach((cleanup) => cleanup());
  });
}

function openProject(projectId, trigger = null, shouldUpdateHash = true) {
  const project = PROJECTS[projectId];
  if (!project) return;

  teardownDialogMedia();
  activeTrigger = trigger || document.querySelector(`[data-project="${CSS.escape(projectId)}"]`);
  dialogIndex.textContent = project.index;
  dialogContent.innerHTML = createProjectMarkup(project);
  resetDialogScroll();
  dialog.dataset.project = projectId;
  document.body.classList.add("dialog-open");

  if (!dialog.open) dialog.showModal();
  dialogClose.focus({ preventScroll: true });
  resetDialogScroll();
  scheduleDialogMediaSetup();
  announcer.textContent = formatText(ui.announcer.projectOpened, { title: project.title });
  if (shouldUpdateHash) updateHash(projectId);
}

function finishClose(shouldUpdateHash = true) {
  teardownDialogMedia();
  dialog.classList.remove("dialog-closing");
  if (dialog.open) dialog.close();
  delete dialog.dataset.project;
  document.body.classList.remove("dialog-open");
  dialogContent.innerHTML = "";
  resetDialogScroll();
  announcer.textContent = ui.announcer.projectClosed;
  if (shouldUpdateHash) updateHash("");
  activeTrigger?.focus();
}

function closeProject(shouldUpdateHash = true) {
  if (!dialog.open || dialog.classList.contains("dialog-closing")) return;
  teardownDialogMedia();
  if (reducedMotion.matches) {
    finishClose(shouldUpdateHash);
    return;
  }
  dialog.classList.add("dialog-closing");
  window.setTimeout(() => finishClose(shouldUpdateHash), 240);
}

if (dialog && dialogClose && dialogContent && dialogIndex) {
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project, button));
  });

  dialogClose.addEventListener("click", () => closeProject());
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeProject();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });
}

// Both keys are accepted so Spanish and English links keep working on either page.
const PROJECT_HASH_PATTERN = new RegExp(`^#(?:${Object.values(PROJECT_HASH_KEYS).join("|")})=([a-z0-9-]+)$`);

function projectIdFromHash(hash = window.location.hash) {
  const match = hash.match(PROJECT_HASH_PATTERN);
  return match?.[1] || null;
}

if (dialog && dialogClose && dialogContent && dialogIndex) {
  window.addEventListener("hashchange", () => {
    if (isHashUpdate) return;
    const projectId = projectIdFromHash();
    if (projectId && PROJECTS[projectId]) openProject(projectId, null, false);
    else closeProject(false);
  });

  const initialProject = projectIdFromHash();
  if (initialProject && PROJECTS[initialProject]) openProject(initialProject, null, false);
}

function mapHashToLanguage(hash, targetLang) {
  const projectId = projectIdFromHash(hash);
  if (projectId) return `#${PROJECT_HASH_KEYS[targetLang]}=${projectId}`;
  const sectionId = hash.replace(/^#/, "");
  const pair = SECTION_HASH_PAIRS.find((ids) => ids.includes(sectionId));
  if (!pair) return "";
  return `#${targetLang === "en" ? pair[1] : pair[0]}`;
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang-switch]").forEach((link) => {
    const targetLang = link.getAttribute("hreflang");
    if (!PROJECT_HASH_KEYS[targetLang]) return;
    // Carry the open case study or current section over to the counterpart page.
    const syncHash = () => { link.hash = mapHashToLanguage(window.location.hash, targetLang); };
    link.addEventListener("click", syncHash);
    link.addEventListener("auxclick", syncHash);
  });
}

function setupTheme() {
  const toggle = document.querySelector(".theme-toggle");
  const label = toggle.querySelector(".theme-toggle__text");
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("portfolio-theme"); } catch { /* Storage can be unavailable on local files. */ }

  const setTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? ui.theme.toLight : ui.theme.toDark);
    label.textContent = isDark ? ui.theme.lightText : ui.theme.darkText;
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#141411" : "#f3efe5";
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Keep the theme for this view only. */ }
    window.dispatchEvent(new Event("themechange"));
  };

  setTheme(savedTheme === "dark" ? "dark" : "light");
  toggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10%", threshold: 0.08 });

  elements.forEach((element) => observer.observe(element));
}

function setupScrollProgress() {
  const bar = document.querySelector(".scroll-progress span");
  let ticking = false;

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}

function setupTicker() {
  const ticker = document.querySelector(".ticker");
  const track = ticker?.querySelector(".ticker__track");
  const template = track?.querySelector("[data-ticker-set]");
  if (!ticker || !track || !template) return;

  const canonicalSet = template.cloneNode(true);
  const rebuildTicker = () => {
    track.replaceChildren(canonicalSet.cloneNode(true));
    const setWidth = track.firstElementChild.getBoundingClientRect().width;
    if (!setWidth) return;

    const setsPerLoop = Math.max(1, Math.ceil(ticker.getBoundingClientRect().width / setWidth) + 1);
    const totalSets = setsPerLoop * 2;
    track.replaceChildren(...Array.from({ length: totalSets }, () => canonicalSet.cloneNode(true)));
    track.style.setProperty("--ticker-loop-distance", `${setWidth * setsPerLoop}px`);
  };

  rebuildTicker();
  if ("ResizeObserver" in window) {
    new ResizeObserver(rebuildTicker).observe(ticker);
    return;
  }
  window.addEventListener("resize", rebuildTicker, { passive: true });
}

function setupCursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion.matches) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let pointerX = -100;
  let pointerY = -100;
  let ringX = -100;
  let ringY = -100;
  let cursorFrame = 0;

  const renderCursor = () => {
    cursorFrame = 0;
    ringX += (pointerX - ringX) * 0.24;
    ringY += (pointerY - ringY) * 0.24;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    if (Math.abs(pointerX - ringX) > 0.2 || Math.abs(pointerY - ringY) > 0.2) {
      cursorFrame = requestAnimationFrame(renderCursor);
    }
  };

  const queueCursorFrame = () => {
    if (!cursorFrame && !document.hidden) cursorFrame = requestAnimationFrame(renderCursor);
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    dot.classList.add("is-active");
    ring.classList.add("is-active");
    dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
    queueCursorFrame();
  }, { passive: true });

  document.addEventListener("pointerleave", () => {
    dot.classList.remove("is-active");
    ring.classList.remove("is-active");
  });

  document.querySelectorAll("[data-project]").forEach((project) => {
    project.addEventListener("pointerenter", () => ring.classList.add("is-project"));
    project.addEventListener("pointerleave", () => ring.classList.remove("is-project"));
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) return;
    if (cursorFrame) cancelAnimationFrame(cursorFrame);
    cursorFrame = 0;
    pointerX = pointerY = ringX = ringY = -100;
    dot.style.transform = "translate3d(-100px, -100px, 0)";
    ring.style.transform = "translate3d(-100px, -100px, 0)";
    dot.classList.remove("is-active");
    ring.classList.remove("is-active", "is-project");
  });
}

function setupMagneticElements() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion.matches) return;
  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    element.addEventListener("pointerleave", () => { element.style.transform = ""; });
  });
}

function setupTiltZones() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion.matches) return;
  document.querySelectorAll("[data-tilt-zone]").forEach((zone) => {
    zone.addEventListener("pointermove", (event) => {
      const rect = zone.getBoundingClientRect();
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 3;
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
      zone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    zone.addEventListener("pointerleave", () => { zone.style.transform = ""; });
  });
}

function setupHeroField() {
  const canvas = document.querySelector("#hero-field");
  if (!canvas) return;
  const hero = canvas.closest(".hero");
  if (!hero) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  let width = 0;
  let height = 0;
  let pointer = { x: 0.7, y: 0.28 };
  const points = Array.from({ length: 34 }, (_, index) => ({
    x: ((index * 47) % 101) / 100,
    y: ((index * 73 + 19) % 97) / 96,
    size: 1 + (index % 3)
  }));

  const draw = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const styles = getComputedStyle(document.documentElement);
    const ink = styles.getPropertyValue("--ink").trim();
    const coral = styles.getPropertyValue("--coral").trim();
    const scrollShift = Math.min(1, window.scrollY / Math.max(1, hero.offsetHeight));

    points.forEach((point, index) => {
      const x = point.x * width;
      const y = ((point.y + scrollShift * (index % 2 ? 0.05 : -0.04) + 1) % 1) * height;
      const distance = Math.hypot(x - pointer.x * width, y - pointer.y * height);
      const influence = Math.max(0, 1 - distance / 220);
      context.beginPath();
      context.arc(x, y, point.size + influence * 3, 0, Math.PI * 2);
      context.fillStyle = influence > 0.18 ? coral : ink;
      context.globalAlpha = 0.22 + influence * 0.5;
      context.fill();

      if (distance < 180) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(pointer.x * width, pointer.y * height);
        context.strokeStyle = coral;
        context.globalAlpha = influence * 0.42;
        context.lineWidth = 1;
        context.stroke();
      }
    });
    context.globalAlpha = 1;
  };

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    draw();
  };

  if (!reducedMotion.matches) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      pointer = { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height };
      requestAnimationFrame(draw);
    }, { passive: true });
    window.addEventListener("scroll", () => requestAnimationFrame(draw), { passive: true });
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("themechange", draw);
  resize();
}

setupTheme();
setupLanguageSwitch();
setupReveal();
setupScrollProgress();
setupTicker();
setupCursor();
setupMagneticElements();
setupTiltZones();
setupHeroField();
