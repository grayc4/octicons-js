// --- Default styles ---

const essentialCSS = `
.octicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: text-bottom;
    pointer-events: none;
    flex-shrink: 0;
    line-height: 1;
}
.octicon svg {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
    overflow: visible;
}
.octicon-light svg {
    fill: #ffffff;
}
.octicon-dark svg {
    fill: #1f2328;
}
.square-icon-button {
    justify-content: center;
    align-items: center;
    padding: 0;
}
.icon-button {
    padding: 5px 12px;
    gap: 6px;
    align-items: center;
}
.icon-button,
.square-icon-button {
    display: inline-flex;
    align-items: center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    background-color: #f6f8fa;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    user-select: none;
    -webkit-appearance: none;
    appearance: none;
    transition: background-color 0.2s, border-color 0.2s;
    text-decoration: none;
    color: #1f2328;
    vertical-align: middle;
}
.icon-button:hover,
.square-icon-button:hover {
    background-color: #f3f4f6;
    border-color: #c9d1d9;
}
.icon-button:active,
.square-icon-button:active {
    background-color: #eaeef2;
}
.icon-button:focus,
.square-icon-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
}
.icon-label {
    margin: 0;
    line-height: inherit;
}
`;

let stylesInjected = false;
const styleElementId = 'octicons-js-styles'; // Unique ID for the style tag

/**
 * Injects the essential CSS into the document's head if not already present.
 * Only runs in browser environments.
 * @private
 */
function injectStyles() {
  // Only run in browser environments
  if (typeof document === 'undefined' || stylesInjected || document.getElementById(styleElementId)) {
    return;
  }

  try {
    const styleElement = document.createElement('style');
    styleElement.id = styleElementId;
    styleElement.textContent = essentialCSS;
    document.head.appendChild(styleElement);
    stylesInjected = true;
  } catch (e) {
    console.error("Octicons-js: Failed to inject styles.", e);
    // Prevent repeated attempts if injection fails
    stylesInjected = true;
  }
}

// --- Component Functions ---

/**
 * Creates a span element containing an Octicon SVG.
 * Applies necessary classes and sets dimensions.
 * Ensures styles are injected into the page.
 *
 * @param {string} svg - The raw SVG string for the icon.
 * @param {number} [size=16] - The desired width and height of the icon in pixels.
 * @param {('light'|'dark')} [style='dark'] - The color style for the icon ('light' for white, 'dark' for black/default).
 * @returns {HTMLSpanElement} A span element wrapping the configured SVG icon.
 */
export function octicon(svg, size = 16, style = 'dark') {
    injectStyles();

    const newIcon = document.createElement('span');
    newIcon.innerHTML = svg;
    newIcon.className = 'octicon';

    const svgElement = newIcon.querySelector('svg');
    if (svgElement) {
        svgElement.setAttribute('width', String(size));
        svgElement.setAttribute('height', String(size));
    }

    newIcon.classList.add(style === 'light' ? 'octicon-light' : 'octicon-dark');

    return newIcon;
}

/**
 * Creates a square button element containing a centered Octicon.
 * Ensures styles are injected into the page.
 *
 * @param {string} svg - The raw SVG string for the icon.
 * @param {('light'|'dark')} [style='dark'] - The color style for the icon.
 * @param {number} [size=16] - The desired width and height of the icon in pixels.
 * @param {number|null} [buttonSize=null] - The explicit width and height of the button in pixels. If null, relies on CSS sizing.
 * @returns {HTMLButtonElement} A button element containing the centered icon.
 */
export function octiconBtn(svg, style = 'dark', size = 16, buttonSize = null) {
    injectStyles();

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'square-icon-button';

    // If buttonSize is provided, override CSS width/height via inline styles
    if (buttonSize !== null) {
        btn.style.width = `${buttonSize}px`;
        btn.style.height = `${buttonSize}px`;
    }

    const iconElement = octicon(svg, size, style);
    btn.appendChild(iconElement);
    return btn;
}

/**
 * Creates a button element containing an Octicon and a text label.
 * Ensures styles are injected into the page.
 *
 * @param {string} svg - The raw SVG string for the icon.
 * @param {string} label - The text content for the button's label.
 * @param {('light'|'dark')} [style='dark'] - The color style for the icon.
 * @param {number} [size=16] - The desired width and height of the icon in pixels.
 * @param {boolean} [iconFirst=true] - If true, the icon appears before the label; otherwise, the label appears first.
 * @returns {HTMLButtonElement} A button element containing the icon and label.
 */
export function octiconLabelBtn(svg, label, style = 'dark', size = 16, iconFirst = true) {
    injectStyles();

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'icon-button';

    const iconElement = octicon(svg, size, style);
    const text = document.createElement('span');
    text.className = 'icon-label';
    text.textContent = label;

    if (iconFirst) {
        btn.appendChild(iconElement);
        btn.appendChild(text);
    } else {
        btn.appendChild(text);
        btn.appendChild(iconElement);
    }

    return btn;
}