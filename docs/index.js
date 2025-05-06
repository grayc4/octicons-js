import { octicon, octiconBtn, octiconLabelBtn } from './src/components.js';
import * as icons12 from './src/icons_12.js';
import * as icons16 from './src/icons_16.js';
import * as icons24 from './src/icons_24.js';
import * as icons48 from './src/icons_48.js';
import * as icons96 from './src/icons_96.js';

/**
 * @typedef {Object<string, string>} IconSet
 */

/**
 * Access icons like `Octicons.octiconAlert16`, `Octicons.octiconGear24`.
 * @type {IconSet}
 */
const Octicons = {};

/**
 * @param {IconSet} iconSet
 * @param {string} [sizeSuffix='']
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

export function getOcticons() { return Octicons; }

export { octicon, octiconBtn, octiconLabelBtn };
export default Octicons;
export * from './src/api.js';