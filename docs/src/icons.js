import { octicon, octiconBtn, octiconLabelBtn } from './components.js';
import * as icons12 from './icons_12.js';
import * as icons16 from './icons_16.js';
import * as icons24 from './icons_24.js';
import * as icons48 from './icons_48.js';
import * as icons96 from './icons_96.js';

export const icons = {};

const allIconData = {};

function addIcons(sourceIcons, sizeSuffix) {
  if (!sourceIcons || typeof sourceIcons !== 'object') {
    return;
  }
  Object.keys(sourceIcons).forEach(key => {
    allIconData[String(key) + String(sizeSuffix)] = sourceIcons[key];
  });
}

addIcons(icons12, '12');
addIcons(icons16, '16');
addIcons(icons24, '24');
addIcons(icons48, '48');
addIcons(icons96, '96');

function getAllIconNames() {
  const names = new Set();
  
  Object.keys(allIconData).forEach(key => {
    if (key.startsWith('octicon')) {
      const iconNameCapitalized = key.replace(/^octicon/, '').replace(/\d+$/, '');
      
      let size = 16;
      if (key.endsWith('12')) size = 12;
      else if (key.endsWith('16')) size = 16;
      else if (key.endsWith('24')) size = 24;
      else if (key.endsWith('48')) size = 48;
      else if (key.endsWith('96')) size = 96;
      
      const kebabName = iconNameCapitalized
        .replace(/([A-Z])/g, (match, p1, offset) => 
          (offset > 0 ? '-' : '') + p1.toLowerCase()
        );
      
      if (!icons[kebabName]) {
        icons[kebabName] = {};
      }
      
      icons[kebabName][size] = allIconData[key];
      names.add(kebabName);
    }
  });
  
  return Array.from(names);
}

export function icon(name, options = {}) {
  const { size = 16, style = 'dark' } = options;
  
  if (!icons[name] || !icons[name][size]) {
    throw new Error(`Icon '${name}' not found in size ${size}px.`);
  }

  return octicon(icons[name][size], size, style);
}

export function iconButton(name, options = {}) {
  const { size = 16, buttonSize = null, style = 'dark' } = options;
  
  if (!icons[name] || !icons[name][size]) {
    throw new Error(`Icon '${name}' not found in size ${size}px.`);
  }
  
  return octiconBtn(icons[name][size], style, size, buttonSize);
}

export function labelButton(name, label, options = {}) {
  const { size = 16, style = 'dark', iconFirst = true } = options;
  
  if (!icons[name] || !icons[name][size]) {
    throw new Error(`Icon '${name}' not found in size ${size}px.`);
  }
  
  return octiconLabelBtn(icons[name][size], label, style, size, iconFirst);
}

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