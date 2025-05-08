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
const styleElementId = 'octicons-js-styles';

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (stylesInjected && document.getElementById(styleElementId)) return;

  try {
    const styleElement = document.createElement('style');
    styleElement.id = styleElementId;
    styleElement.textContent = essentialCSS;
    document.head.appendChild(styleElement);
    stylesInjected = true;
  } catch (e) {
    console.error("Octicons-JS: Failed to inject styles.", e);
    stylesInjected = true;
  }
}

function octicon(svg, size = 16, style = 'dark') {
  injectStyles();
  const wrapper = document.createElement('span');
  wrapper.innerHTML = svg;
  wrapper.className = 'octicon';
  const svgEl = wrapper.querySelector('svg');
  if (svgEl) {
    svgEl.setAttribute('width', String(size));
    svgEl.setAttribute('height', String(size));
  }
  wrapper.classList.add(style === 'light' ? 'octicon-light' : 'octicon-dark');
  return wrapper;
}

function octiconBtn(svg, style = 'dark', size = 16, buttonSize = null) {
  injectStyles();
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'square-icon-button';
  if (buttonSize !== null) {
    btn.style.width = `${buttonSize}px`;
    btn.style.height = `${buttonSize}px`;
  }
  btn.appendChild(octicon(svg, size, style));
  return btn;
}

function octiconLabelBtn(svg, label, style = 'dark', size = 16, iconFirst = true) {
  injectStyles();
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'icon-button';
  const iconElement = octicon(svg, size, style);
  const text = document.createElement('span');
  text.className = 'icon-label';
  text.textContent = label;
  iconFirst ? btn.append(iconElement, text) : btn.append(text, iconElement);
  return btn;
}

// Export the functions and CSS
export { octicon, octiconBtn, octiconLabelBtn, injectStyles, essentialCSS };