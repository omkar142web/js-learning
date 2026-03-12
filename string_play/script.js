/**
 * Smart Name Studio
 * Architecture:
 * - Formatting engine: pure functions for string transforms.
 * - State: current name, style, theme, history, and validation derived from DOM inputs.
 * - UI layer: small render helpers (result, chip, history, validation, theme).
 * - Interactions: keyboard shortcuts, copy/export, random names, Easter egg.
 */

// ----------------------------
// DOM references
// ----------------------------

const form = document.querySelector("#form");
const firstInput = document.querySelector("#first");
const lastInput = document.querySelector("#last");
const styleSelect = document.querySelector("#style");

const charCountEl = document.querySelector("#char-count");
const warningCountEl = document.querySelector("#warning-count");
const validationListEl = document.querySelector("#validation-list");
const firstErrorEl = document.querySelector("#first-error");

const resultEl = document.querySelector("#result");
const resultCardEl = document.querySelector("#result-card");
const resultPlaceholderEl = document.querySelector("#result-placeholder");
const easterEggEl = document.querySelector("#easter-egg");

const styleChipEl = document.querySelector("#current-style-chip");

const copyBtn = document.querySelector("#copy-btn");
const downloadBtn = document.querySelector("#download-btn");
const shareBtn = document.querySelector("#share-btn");
const copyToastEl = document.querySelector("#copy-toast");

const randomBtn = document.querySelector("#random-btn");
const clearBtn = document.querySelector("#clear-btn");
const generateBtn = document.querySelector("#generate-btn");

const historyListEl = document.querySelector("#history-list");
const historyCountEl = document.querySelector("#history-count");
const historyEmptyEl = document.querySelector("#history-empty");

const themeSegments = document.querySelectorAll(
  ".segmented-control .segment[data-theme-value]"
);

// ----------------------------
// Configuration & constants
// ----------------------------

const MAX_HISTORY = 10;
const MAX_NAME_LENGTH_WARNING = 40;
const MAX_NAME_LENGTH_CRITICAL = 80;

const RANDOM_NAMES = [
  ["alex", "martin"],
  ["taylor", "reed"],
  ["jordan", "lee"],
  ["casey", "monroe"],
  ["morgan", "stone"],
  ["riley", "kane"],
  ["jamie", "fox"],
  ["sam", "parker"],
  ["chris", "noir"],
  ["nova", "lane"],
];

const STYLE_LABELS = {
  upper: "UPPERCASE",
  lower: "lowercase",
  capitalize: "Capitalize Words",
  title: "Title Case",
  snake: "snake_case",
  kebab: "kebab-case",
  camel: "camelCase",
  pascal: "PascalCase",
  reverse: "Reverse name",
};

// In-memory history (most recent first)
let history = [];

// ----------------------------
// Formatting engine
// ----------------------------

function toWords(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function toTitleCase(name) {
  return toWords(name)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
}

function toSnakeCase(name) {
  return toWords(name)
    .join("_")
    .toLowerCase();
}

function toKebabCase(name) {
  return toWords(name)
    .join("-")
    .toLowerCase();
}

function toCamelCase(name) {
  const words = toWords(name);
  if (words.length === 0) return "";
  const [first, ...rest] = words;
  return (
    first.toLowerCase() +
    rest
      .map(
        (w) =>
          w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
      )
      .join("")
  );
}

function toPascalCase(name) {
  return toWords(name)
    .map(
      (w) =>
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join("");
}

function reverseNameOrder(name) {
  const words = toWords(name);
  if (words.length <= 1) return name;
  return [...words].reverse().join(" ");
}

/**
 * Core formatting function
 * Preserves original upper/lower/capitalize semantics,
 * and extends with more styles.
 */
function formatName(name, type) {
  if (!name) return "";

  switch (type) {
    case "upper":
      return name.toUpperCase();
    case "lower":
      return name.toLowerCase();
    case "capitalize":
      return toTitleCase(name); // same as before but re-used
    case "title":
      return toTitleCase(name);
    case "snake":
      return toSnakeCase(name);
    case "kebab":
      return toKebabCase(name);
    case "camel":
      return toCamelCase(name);
    case "pascal":
      return toPascalCase(name);
    case "reverse":
      return reverseNameOrder(name);
    default:
      return name;
  }
}

// ----------------------------
// Validation & derived data
// ----------------------------

function getRawName() {
  const first = firstInput.value || "";
  const last = lastInput.value || "";
  return `${first} ${last}`.trim();
}

function computeValidation(rawName) {
  const issues = [];

  if (!firstInput.value.trim()) {
    issues.push("First name is required.");
  }

  if (/[0-9]/.test(rawName)) {
    issues.push("Names contain digits. Check if this was intentional.");
  }

  if (/[_\-\/\\]/.test(rawName)) {
    issues.push("Names contain symbols that might not belong in display names.");
  }

  if (/[^a-zA-Z\s'-]/.test(rawName)) {
    issues.push("Unexpected characters detected. Use only letters, spaces, apostrophes, or hyphens for names.");
  }

  const length = rawName.length;
  if (length > MAX_NAME_LENGTH_CRITICAL) {
    issues.push("Name is extremely long. Consider shortening it.");
  } else if (length > MAX_NAME_LENGTH_WARNING) {
    issues.push("Name is quite long. It may not fit nicely in all UIs.");
  }

  return issues;
}

function updateValidationUI(rawName) {
  const length = rawName.length;
  charCountEl.textContent = String(length);

  const issues = computeValidation(rawName);
  warningCountEl.textContent = String(issues.length);

  validationListEl.innerHTML = "";
  if (issues.length) {
    const fragment = document.createDocumentFragment();
    issues.forEach((msg) => {
      const li = document.createElement("li");
      li.textContent = msg;
      fragment.appendChild(li);
    });
    validationListEl.appendChild(fragment);
  }
}

function validateFirstNameRequired() {
  const value = firstInput.value.trim();
  if (!value) {
    firstInput.dataset.invalid = "true";
    firstErrorEl.textContent = "First name is required to generate a result.";
    return false;
  }
  firstInput.dataset.invalid = "false";
  firstErrorEl.textContent = "";
  return true;
}

// ----------------------------
// Result rendering + animation
// ----------------------------

function triggerResultAnimation() {
  if (!resultCardEl) return;
  resultCardEl.classList.remove("is-revealed");
  // Force reflow to restart animation
  void resultCardEl.offsetWidth;
  resultCardEl.classList.add("is-revealed");
}

let copyToastTimeoutId = null;

function showCopyToast(message = "Copied!") {
  if (!copyToastEl) return;
  copyToastEl.textContent = message;
  copyToastEl.classList.add("is-visible");
  if (copyToastTimeoutId) {
    window.clearTimeout(copyToastTimeoutId);
  }
  copyToastTimeoutId = window.setTimeout(() => {
    copyToastEl.classList.remove("is-visible");
  }, 1500);
}

function toggleEasterEgg(visible) {
  if (!easterEggEl) return;
  if (visible) {
    easterEggEl.classList.add("is-visible");
  } else {
    easterEggEl.classList.remove("is-visible");
  }
}

function updateStyleChip() {
  const value = styleSelect.value;
  const label = STYLE_LABELS[value] || value;
  styleChipEl.textContent = `Style: ${label}`;
}

function renderResult({ fromSubmit = false } = {}) {
  const rawName = getRawName();
  updateValidationUI(rawName);

  const validRequired = validateFirstNameRequired();
  if (!validRequired) {
    resultEl.textContent = "";
    resultPlaceholderEl.style.display = "";
    toggleEasterEgg(false);
    return;
  }

  const type = styleSelect.value;
  const formatted = formatName(rawName, type);

  resultEl.textContent = formatted;
  if (formatted) {
    resultPlaceholderEl.style.display = "none";
    triggerResultAnimation();
  } else {
    resultPlaceholderEl.style.display = "";
  }

  // Easter egg: John Wick
  const normalized = rawName.toLowerCase().trim();
  if (normalized === "john wick") {
    toggleEasterEgg(true);
  } else {
    toggleEasterEgg(false);
  }

  // Only store history when explicitly generating (submit / keyboard)
  if (fromSubmit && formatted) {
    pushHistoryEntry({ raw: rawName, formatted, style: type });
  }
}

// ----------------------------
// History
// ----------------------------

function pushHistoryEntry(entry) {
  history.unshift({
    raw: entry.raw,
    formatted: entry.formatted,
    style: entry.style,
    ts: Date.now(),
  });
  history = history.slice(0, MAX_HISTORY);
  renderHistory();
}

function renderHistory() {
  historyListEl.innerHTML = "";
  if (!history.length) {
    historyEmptyEl.style.display = "";
    historyCountEl.textContent = "0 saved";
    return;
  }

  historyEmptyEl.style.display = "none";
  historyCountEl.textContent = `${history.length} saved`;

  const fragment = document.createDocumentFragment();
  history.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "history-item";
    button.setAttribute("role", "listitem");
    button.setAttribute("aria-label", `Use "${item.formatted}" (${STYLE_LABELS[item.style] || item.style})`);
    button.dataset.historyIndex = String(index);

    const labelSpan = document.createElement("span");
    labelSpan.textContent = item.formatted;

    const styleSpan = document.createElement("span");
    styleSpan.className = "history-style-pill";
    styleSpan.textContent = STYLE_LABELS[item.style] || item.style;

    button.append(labelSpan, styleSpan);
    fragment.appendChild(button);
  });

  historyListEl.appendChild(fragment);
}

function handleHistoryClick(event) {
  const target = event.target.closest(".history-item");
  if (!target) return;

  const index = Number(target.dataset.historyIndex);
  const entry = history[index];
  if (!entry) return;

  // Reuse formatted result only; keep current raw inputs unchanged
  styleSelect.value = entry.style;
  updateStyleChip();
  resultEl.textContent = entry.formatted;
  resultPlaceholderEl.style.display = "none";
  triggerResultAnimation();
}

// ----------------------------
// Random name
// ----------------------------

function pickRandomName() {
  const idx = Math.floor(Math.random() * RANDOM_NAMES.length);
  return RANDOM_NAMES[idx];
}

function applyRandomName() {
  const [first, last] = pickRandomName();
  firstInput.value = first;
  lastInput.value = last;
  renderResult();
  firstInput.focus();
  firstInput.setSelectionRange(first.length, first.length);
}

// ----------------------------
// Theme switching
// ----------------------------

function setTheme(theme) {
  const body = document.body;
  body.setAttribute("data-theme", theme);

  themeSegments.forEach((seg) => {
    const value = seg.getAttribute("data-theme-value");
    const isActive = value === theme;
    seg.classList.toggle("is-active", isActive);
    seg.setAttribute("aria-checked", String(isActive));
  });
}

// ----------------------------
// Export actions
// ----------------------------

function getCurrentFormatted() {
  return (resultEl.textContent || "").trim();
}

async function handleCopy() {
  const text = getCurrentFormatted();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    showCopyToast("Copied!");
  } catch {
    // Fallback: attempt selection-based copy
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();
    try {
      document.execCommand("copy");
      showCopyToast("Copied!");
    } finally {
      document.body.removeChild(temp);
    }
  }
}

function handleDownload() {
  const text = getCurrentFormatted();
  if (!text) return;

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "formatted-name.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showCopyToast("Downloaded");
}

async function handleShare() {
  const text = getCurrentFormatted();
  if (!text) return;

  const shareData = {
    title: "Smart Name Studio — formatted name",
    text,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      // User cancelled; do nothing
    }
  } else {
    // Fallback: copy instead
    await handleCopy();
    showCopyToast("Copied (sharing not supported)");
  }
}

// ----------------------------
// Keyboard shortcuts
// ----------------------------

function handleGlobalKeydown(event) {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const ctrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

  if (!ctrlOrCmd) return;

  const activeTag = document.activeElement?.tagName;
  const isInInput =
    activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT";

  // We avoid overriding core browser behavior when user is typing in inputs,
  // except for Ctrl+Enter which is uncommon.
  switch (event.key) {
    case "Enter":
      event.preventDefault();
      renderResult({ fromSubmit: true });
      break;
    case "c":
    case "C":
      if (!isInInput) {
        event.preventDefault();
        handleCopy();
      }
      break;
    case "r":
    case "R":
      if (!isInInput) {
        event.preventDefault();
        applyRandomName();
      }
      break;
    case "l":
    case "L":
      if (!isInInput) {
        event.preventDefault();
        clearAll();
      }
      break;
    default:
      break;
  }
}

// ----------------------------
// Clear
// ----------------------------

function clearAll() {
  firstInput.value = "";
  lastInput.value = "";
  resultEl.textContent = "";
  resultPlaceholderEl.style.display = "";
  firstInput.dataset.invalid = "false";
  firstErrorEl.textContent = "";
  charCountEl.textContent = "0";
  warningCountEl.textContent = "0";
  validationListEl.innerHTML = "";
  toggleEasterEgg(false);
  triggerResultAnimation();
  firstInput.focus();
}

// ----------------------------
// Wiring & init
// ----------------------------

function attachEventListeners() {
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResult({ fromSubmit: true });
  });

  [firstInput, lastInput, styleSelect].forEach((el) => {
    el.addEventListener("input", () => {
      updateStyleChip();
      renderResult();
    });
  });

  firstInput.addEventListener("blur", validateFirstNameRequired);

  clearBtn?.addEventListener("click", clearAll);
  randomBtn?.addEventListener("click", () => {
    applyRandomName();
  });

  copyBtn?.addEventListener("click", () => {
    handleCopy();
  });
  downloadBtn?.addEventListener("click", () => {
    handleDownload();
  });
  shareBtn?.addEventListener("click", () => {
    handleShare();
  });

  historyListEl?.addEventListener("click", handleHistoryClick);

  document.addEventListener("keydown", handleGlobalKeydown);

  themeSegments.forEach((segment) => {
    segment.addEventListener("click", () => {
      const value = segment.getAttribute("data-theme-value") || "dark";
      setTheme(value);
    });
  });
}

function init() {
  attachEventListeners();
  setTheme(document.body.getAttribute("data-theme") || "dark");
  updateStyleChip();
  renderResult();
}

// Initialize on DOM ready (defensive; script is already defer)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}