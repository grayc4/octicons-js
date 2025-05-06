import { getOcticons, octicon, octiconBtn, octiconLabelBtn } from '../index.js';

/**
 * @type {Object}
 */
export const icons = {};

/**
 * @returns {string[]}
 * @private
 */
function getAllIconNames() {
  const names = new Set();
  const OcticonsData = getOcticons(); // Use the new function to get populated Octicons
  
  Object.keys(OcticonsData).forEach(key => { // Iterate over the populated OcticonsData
    if (key.startsWith('octicon')) {
      const match = key.match(/^octicon([A-Z][a-zA-Z0-9]+)(\d+)$/);
      if (match) {
        const name = match[1];
        const size = parseInt(match[2], 10);
        
        const kebabName = name
          .replace(/([A-Z])/g, (match, p1, offset) => 
            (offset > 0 ? '-' : '') + p1.toLowerCase()
          );
        
        if (!icons[kebabName]) {
          icons[kebabName] = {};
        }
        
        icons[kebabName][size] = OcticonsData[key]; // Use OcticonsData
        
        names.add(kebabName);
      }
    }
  });
  
  return Array.from(names);
}

/**
 * Icon
 * @param {string} name
 * @param {Object} [options={}] - Configuration
 * @param {number} [options.size=16] - Icon sz. (see docs for size availability)
 * @param {('light'|'dark')} [options.style='dark'] - Theme
 * @returns {HTMLSpanElement}
 * @throws {Error}
 */
export function icon(name, options = {}) {
  const { size = 16, style = 'dark' } = options;
  
  if (!icons[name] || !icons[name][size]) {
    throw new Error(`Icon '${name}' not found in size ${size}px.`);
  }

  return octicon(icons[name][size], size, style);
}

/**
 * Square button icon button
 * @param {string} name
 * @param {Object} [options={}] - Configuration
 * @param {number} [options.size=16] - Icon sz. (see docs for size availability)
 * @param {number} [options.buttonSize=null] - Button size (defaults to size + 16)
 * @param {('light'|'dark')} [options.style='dark'] - Theme
 * @returns {HTMLButtonElement}
 * @throws {Error}
 */
export function iconButton(name, options = {}) {
  const { size = 16, buttonSize = null, style = 'dark' } = options;
  
  if (!icons[name] || !icons[name][size]) {
    throw new Error(`Icon '${name}' not found in size ${size}px.`);
  }
  
  return octiconBtn(icons[name][size], style, size, buttonSize);
}

/**
 * Icon button with label
 * @param {string} name
 * @param {string} label - Button label string
 * @param {Object} [options={}] - Configuration
 * @param {number} [options.size=16] - Icon sz. (see docs for size availability)
 * @param {('light'|'dark')} [options.style='dark'] - Theme
 * @param {boolean} [options.iconFirst=true] - Icon position relative to label
 * @returns {HTMLButtonElement}
 * @throws {Error}
 */
export function labelButton(name, label, options = {}) {
  const { size = 16, style = 'dark', iconFirst = true } = options;
  
  if (!icons[name] || !icons[name][size]) {
    throw new Error(`Icon '${name}' not found in size ${size}px.`);
  }
  
  return octiconLabelBtn(icons[name][size], label, style, size, iconFirst);
}

/**
 * @type {Object}
 */
export const buttons = {};

getAllIconNames();

Object.keys(icons).forEach(name => {
  const defaultLabel = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  buttons[name] = (label = defaultLabel) => labelButton(name, label);
  
  const camelName = name
    .split('-')
    .map((part, index) => 
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join('');
    
  buttons[`${camelName}Icon`] = () => iconButton(name, { buttonSize: 32 });
});