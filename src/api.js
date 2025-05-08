import { icons } from './icons.js';
import { makeButton } from './button-factory.js';
import { injectStyles } from './components.js';

export function injectOcticonsStyles() {
  if (typeof document !== 'undefined') {
    injectStyles();
  }
}

/**
 * @param {string} name - The name (key) of the icon in the 'icons' object.
 * @param {object} [props] - Properties to pass to the icon function (e.g., size, fill).
 * @returns {SVGElement | string}
 * @throws {Error}
 */
export function icon(name, props) {
  const iconGeneratorFn = icons[name];
  if (!iconGeneratorFn) {
    throw new Error(`Icon "${name}" not found. Available icons are: ${Object.keys(icons).join(', ')}`);
  }
  return iconGeneratorFn(props);
}

/**
 * @param {string} name - The name (key) of the icon in the 'icons' object.
 * @param {object} [props] - Properties for the button and the icon (e.g., label, size, fill, bgColor).
 * @returns {HTMLElement | string}
 * @throws {Error}
 */
export function iconButton(name, props) {
  const iconGeneratorFn = icons[name];
  if (!iconGeneratorFn) {
    throw new Error(`Icon "${name}" not found. Available icons are: ${Object.keys(icons).join(', ')}`);
  }
  return makeButton(iconGeneratorFn)(props);
}

export { icons, injectStyles };