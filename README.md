# Octicons-JS

![Octicons-JS](https://img.shields.io/badge/octicons--js-v1.5.4-black)
[![npm package](https://img.shields.io/npm/v/octicons-js.svg)](https://www.npmjs.com/package/octicons-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight JavaScript library that provides GitHub's Octicons for frontend projects with an intuitive API, full TypeScript support, and zero dependencies.

## Features

- **300+ SVG Icons** - The complete GitHub Octicons set
- **Zero Dependencies** - No external libraries required
- **Framework Agnostic** - Works with any JavaScript project
- **TypeScript Support** - Fully typed API with autocompletion
- **Simple API** - Straightforward functions for creating icons and buttons
- **Customizable** - Easy styling with standard CSS
- **Browser & Node.js Compatible** - Works everywhere JavaScript runs
- **Tree-Shaking** - Import only the icons you need
- **Source Maps** - For better debugging experience

## Installation

```bash
npm install octicons-js
```

Or using yarn:

```bash
yarn add octicons-js
```

## Quick Start

```javascript
import { icons, octicon, octiconBtn, octiconLabelBtn, applyStyles } from 'octicons-js';
// Or import specific icons for better tree-shaking
import { download, search } from 'octicons-js';

// Apply default styles
applyStyles();

// Use icons directly
const downloadIcon = download({ size: 24, fill: 'blue' });
document.body.appendChild(downloadIcon);

// Create a square icon button
const searchBtn = octiconBtn(icons.search, 16);
document.body.appendChild(searchBtn);

// Create a button with label
const searchLabelBtn = octiconLabelBtn(icons.search, 'Search', 'dark', 16);
document.body.appendChild(searchLabelBtn);
```

## Tree-Shaking

For optimal bundle size, import only the icons you need:

```javascript
// Import only the specific icons you need
import { alert, check, download } from 'octicons-js';

// Use them directly
const alertIcon = alert({ size: 24 });
```

## API Reference

### `applyStyles()`

Applies the required CSS styles into the document's head. Call this once at the beginning of your app. It's safe to call multiple times - the styles will only be applied once.

```javascript
import { applyStyles } from 'octicons-js';
applyStyles();
```

### `octicon(icon, size?, style?, fill?)`

Creates an icon element.

```javascript
import { icons, octicon } from 'octicons-js';

const icon = octicon(icons.star, 24, 'dark', 'gold');
// Parameters:
// - icon: Icon object from the icons collection
// - size: Size in pixels (default: 16)
// - style: 'light' or 'dark' theme (default: 'dark')
// - fill: Fill color (default: null - uses currentColor)
```

### `octiconBtn(icon, size?, buttonSize?, style?, fill?)`

Creates a square button containing an icon.

```javascript
import { icons, octiconBtn } from 'octicons-js';

const button = octiconBtn(icons.alert, 16, 32, 'dark', 'red');
// Parameters:
// - icon: Icon object from the icons collection
// - size: Icon size in pixels (default: 16)
// - buttonSize: Button width/height (default: null - auto)
// - style: 'light' or 'dark' theme (default: 'dark')
// - fill: Icon fill color (default: null - uses currentColor)
```

### `octiconLabelBtn(icon, label, style?, size?, iconFirst?, fill?)`

Creates a button with both an icon and text label.

```javascript
import { icons, octiconLabelBtn } from 'octicons-js';

const button = octiconLabelBtn(icons.search, 'Search', 'dark', 16, true, 'blue');
// Parameters:
// - icon: Icon object from the icons collection
// - label: Text label
// - style: 'light' or 'dark' theme (default: 'dark')
// - size: Icon size in pixels (default: 16)
// - iconFirst: Whether icon comes before label (default: true)
// - fill: Icon fill color (default: null - uses currentColor)
```

### Using Pre-defined Icons

All GitHub octicons are available directly:

```javascript
// Access via icons object
import { icons } from 'octicons-js';
const alertIcon = icons.alert({ size: 24 });

// Or import individual icons (recommended for tree-shaking)
import { alert, check, download } from 'octicons-js';
const alertIcon = alert({ size: 24 });
```

### Creating Icons with Factory

```javascript
import { makeIcon } from 'octicons-js';

// Create an icon definition
const customIcon = makeIcon({
  attr: {
    viewBox: '0 0 16 16',
    d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59...'
  }
});

// Use the icon
const iconElement = customIcon({
  size: 24,
  fill: 'blue',
  variant: 'dark'
});
```

## Customization

All icons and buttons created by this library use CSS classes that you can target for additional styling:

```css
/* Note: Ignore this if you prefer default styles */

/* targeting the following CSS classes allows further styling */

.octicon {
  margin: 2px;
}

.icon-button {
  border-radius: 8px;
  font-weight: bold;
}

.square-icon-button {
  border-radius: 50%;
}
```

## TypeScript Support

The library includes full TypeScript definitions:

```typescript
import { icons, octicon, octiconBtn, octiconLabelBtn, IconProps, ButtonProps } from 'octicons-js';
import { download, search } from 'octicons-js';

// Direct icon usage with type safety
const downloadIcon = download({ size: 24 });

// Using the utility functions
const searchButton = octiconBtn(icons.search, 16);
```

## Browser Compatibility

Octicons-JS works in all modern browsers and IE11+ with appropriate polyfills.

## Debugging

The library ships with source maps for easier debugging during development.

## License

MIT © grayc4

The Octicons themselves are licensed by GitHub under the [MIT License](https://github.com/primer/octicons/blob/main/LICENSE).

## Acknowledgements

This package provides a JavaScript interface to [GitHub's Octicons](https://primer.style/octicons/), which were created by GitHub, Inc. The icon designs are copyright GitHub, Inc.

## Links

- [GitHub Repository](https://github.com/grayc4/octicons-js)
- [Documentation Site](https://grayc4.github.io/octicons-js/)
- [Issue Tracker](https://github.com/grayc4/octicons-js/issues)
- [npm Package](https://www.npmjs.com/package/octicons-js)

## Contributing

Contributions, issues, and feature requests are welcome!
