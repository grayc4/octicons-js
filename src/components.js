const essentialCSS = `
.octicon {
  display: inline-flex;
  vertical-align: middle;
  fill: currentColor;
  overflow: visible;
}

.octicon svg {
  vertical-align: middle;
  display: inline-block;
}

.octicon-light {
  color: #ffffff;
}

.octicon-dark {
  color: #24292f;
}

.square-icon-button {
  display: inline-flex;
  padding: 5px;
  font-size: 14px;
  line-height: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(31, 35, 40, 0.15);
  border-radius: 6px;
  background-color: #f6f8fa;
  color: #24292f;
  cursor: pointer;
  user-select: none;
  appearance: none;
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, border-color;
}

.icon-button {
  display: inline-flex;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(31, 35, 40, 0.15);
  border-radius: 6px;
  background-color: #f6f8fa;
  color: #24292f;
  cursor: pointer;
  user-select: none;
  appearance: none;
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, border-color;
  white-space: nowrap;
}

.square-icon-button:hover,
.icon-button:hover {
  background-color: #f3f4f6;
  border-color: rgba(31, 35, 40, 0.2);
  transition-duration: 0.1s;
}

.square-icon-button:active,
.icon-button:active {
  background-color: hsla(220, 14%, 93%, 1);
  border-color: rgba(31, 35, 40, 0.3);
}

.square-icon-button:focus,
.icon-button:focus {
  outline: none;
}

.icon-label {
  font-weight: 500;
  line-height: 20px;
  display: inline-block;
  vertical-align: middle;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spin {
  animation: spin 1.2s linear infinite;
  transform-origin: center;
}
`;

let stylesInjected = false;
const styleElementId = 'octicons-js-styles';

function applyStyles() {
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

export { applyStyles, essentialCSS };
