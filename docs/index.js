import { octicon, octiconBtn, octiconLabelBtn } from './src/components.js';
import * as icons12 from './src/icons_12.js';
import * as icons16 from './src/icons_16.js';
import * as icons24 from './src/icons_24.js';
import * as icons48 from './src/icons_48.js';
import * as icons96 from './src/icons_96.js';

/**
 * @typedef {Object<string, string>} IconSet
 * An object where keys are icon names (e.g., "octiconAlert") and values are SVG strings.
 */

/**
 * Access icons like `Octicons.octiconAlert16`, `Octicons.octiconGear24`.
 * @type {IconSet}
 */
const Octicons = {};

/**
 * @param {IconSet} iconSet - An object containing icon names and SVG strings (e.g., icons16).
 * @param {string} [sizeSuffix=''] - The suffix to append to the icon names (e.g., '12', '24', etc.).
 * @returns {void}
 * @private
 */
const addIcons = (iconSet, sizeSuffix = '') => {
  for (const key in iconSet) {
    if (key.startsWith('octicon')) {
      let finalKey = key;
      if (sizeSuffix) {
        if (!finalKey.endsWith(sizeSuffix)) {
          finalKey += sizeSuffix;
        }
      } else if (!/\d+$/.test(finalKey)) {
        finalKey += '16';
      }
      Octicons[finalKey] = iconSet[key];
    }
  }
};

addIcons(icons16);
addIcons(icons12, '12');
addIcons(icons24, '24');
addIcons(icons48, '48');
addIcons(icons96, '96');

/**
 * @function octicon
 * @param {string} svg - The raw SVG string for the icon.
 * @param {number} [size=16] - The desired width and height of the icon in pixels.
 * @param {('light'|'dark')} [style='dark'] - The color style for the icon.
 * @returns {HTMLSpanElement}
 */

/**
 * @function octiconBtn
 * @param {string} svg - The raw SVG string for the icon.
 * @param {('light'|'dark')} [style='dark'] - The color style for the icon.
 * @param {number} [size=16] - The desired width and height of the icon in pixels.
 * @param {number|null} [buttonSize=null] - The explicit width and height of the button. Defaults to `size + 16`.
 * @returns {HTMLButtonElement}
 */

/**
 * @function octiconLabelBtn
 * @param {string} svg - The raw SVG string for the icon.
 * @param {string} label - The text content for the button's label.
 * @param {('light'|'dark')} [style='dark'] - The color style for the icon.
 * @param {number} [size=16] - The desired width and height of the icon in pixels.
 * @param {boolean} [iconFirst=true] - If true, icon appears before label; otherwise, label appears first.
 * @returns {HTMLButtonElement}
 */
export { octicon, octiconBtn, octiconLabelBtn };

export default Octicons;
