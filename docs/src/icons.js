import * as icons12 from './icons_12.js';
import * as icons16 from './icons_16.js';
import * as icons24 from './icons_24.js';
import * as icons48 from './icons_48.js';
import * as icons96 from './icons_96.js';
import { octicon, octiconBtn, octiconLabelBtn } from './components.js';

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
  
  [icons12, icons16, icons24, icons48, icons96].forEach(iconSet => {
    Object.keys(iconSet).forEach(key => {
      if (key.startsWith('octicon')) {
        const match = key.match(/^octicon([A-Z][a-zA-Z0-9]+)$/);
        if (match) {
          const name = match[1];
          
          const kebabName = name
            .replace(/([A-Z])/g, (match, p1, offset) => 
              (offset > 0 ? '-' : '') + p1.toLowerCase()
            );
          
          names.add(kebabName);
        }
      }
    });
  });
  
  return Array.from(names);
}

function organizeIcons() {
  Object.entries(icons12).forEach(([key, svg]) => {
    if (key.startsWith('octicon')) {
      const match = key.match(/^octicon([A-Z][a-zA-Z0-9]+)$/);
      if (match) {
        const name = match[1];
        const kebabName = name
          .replace(/([A-Z])/g, (match, p1, offset) => 
            (offset > 0 ? '-' : '') + p1.toLowerCase()
          );
        
        if (!icons[kebabName]) {
          icons[kebabName] = {};
        }
        icons[kebabName][12] = svg;
      }
    }
  });

  Object.entries(icons16).forEach(([key, svg]) => {
    if (key.startsWith('octicon')) {
      const match = key.match(/^octicon([A-Z][a-zA-Z0-9]+)$/);
      if (match) {
        const name = match[1];
        const kebabName = name
          .replace(/([A-Z])/g, (match, p1, offset) => 
            (offset > 0 ? '-' : '') + p1.toLowerCase()
          );
        
        if (!icons[kebabName]) {
          icons[kebabName] = {};
        }
        icons[kebabName][16] = svg;
      }
    }
  });

  Object.entries(icons24).forEach(([key, svg]) => {
    if (key.startsWith('octicon')) {
      const match = key.match(/^octicon([A-Z][a-zA-Z0-9]+)$/);
      if (match) {
        const name = match[1];
        const kebabName = name
          .replace(/([A-Z])/g, (match, p1, offset) => 
            (offset > 0 ? '-' : '') + p1.toLowerCase()
          );
        
        if (!icons[kebabName]) {
          icons[kebabName] = {};
        }
        icons[kebabName][24] = svg;
      }
    }
  });

  Object.entries(icons48).forEach(([key, svg]) => {
    if (key.startsWith('octicon')) {
      const match = key.match(/^octicon([A-Z][a-zA-Z0-9]+)$/);
      if (match) {
        const name = match[1];
        const kebabName = name
          .replace(/([A-Z])/g, (match, p1, offset) => 
            (offset > 0 ? '-' : '') + p1.toLowerCase()
          );
        
        if (!icons[kebabName]) {
          icons[kebabName] = {};
        }
        icons[kebabName][48] = svg;
      }
    }
  });

  Object.entries(icons96).forEach(([key, svg]) => {
    if (key.startsWith('octicon')) {
      const match = key.match(/^octicon([A-Z][a-zA-Z0-9]+)$/);
      if (match) {
        const name = match[1];
        const kebabName = name
          .replace(/([A-Z])/g, (match, p1, offset) => 
            (offset > 0 ? '-' : '') + p1.toLowerCase()
          );
        
        if (!icons[kebabName]) {
          icons[kebabName] = {};
        }
        icons[kebabName][96] = svg;
      }
    }
  });
}

organizeIcons();

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
 * Square icon button
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

const iconNames = getAllIconNames();

iconNames.forEach(name => {
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
