# Octicons-JS

![Octicons-JS](https://img.shields.io/badge/octicons--js-v1.3.1-blue)
[![npm package](https://img.shields.io/npm/v/octicons-js.svg)](https://www.npmjs.com/package/octicons-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight JavaScript library that provides GitHub's Octicons for frontend projects with an intuitive API, full TypeScript support, and zero dependencies.

## Features

- 🎨 **300+ SVG Icons** - The complete GitHub Octicons set
- 🔌 **Zero Dependencies** - No external libraries required
- 📱 **Framework Agnostic** - Works with any JavaScript project
- 🔄 **TypeScript Support** - Fully typed API with autocompletion
- 🧩 **Simple API** - Straightforward functions for creating icons and buttons
- 🎛️ **Customizable** - Easy styling with standard CSS
- 🌐 **Browser & Node.js Compatible** - Works everywhere JavaScript runs

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
import { icon, iconButton, applyStyles } from 'octicons-js';

// Apply default styles
applyStyles();

// Create a new icon
const downloadIcon = icon('download', { size: 24, fill: 'blue' });
document.body.appendChild(downloadIcon);

// Create a new icon button with label
const searchButton = iconButton('search', {
  label: 'Search',
  size: 16,
  fill: 'currentColor'
});
document.body.appendChild(searchButton);
```

## API Reference

### `applyStyles()`

Applies the required CSS styles into the document's head. Call this once at the beginning of your app. It's safe to call multiple times - the styles will only be applied once.

```javascript
import { applyStyles } from 'octicons-js';
applyStyles();
```

### `icon(name, options?)`

Creates an SVG icon element.

```javascript
const starIcon = icon('star', {
  size: 24,           // Size in pixels (default: 16)
  fill: 'gold',       // Fill color (default: 'currentColor')
  style: 'margin: 4px' // Additional inline styles
});
```

### `iconButton(name, options?)`

Creates a button containing an icon.

```javascript
// Button with just an icon
const alertButton = iconButton('alert', {
  size: 16,           // Size of the icon (default: 16)
  fill: 'red',        // Color of the icon (default: 'currentColor')
  bgSize: 32,         // Size of the button (square) (default: null - auto)
  bgColor: '#ffeeee', // Background color (default: system button color)
  'aria-label': 'Show alert' // Accessibility attributes
});

// Button with icon and text label
const searchButton = iconButton('search', {
  label: 'Search',    // Text label (makes the button non-square)
  size: 16,           // Size of the icon
  fill: 'blue'        // Color of the icon
});
```

### Available Icons

The package includes 300+ icons from the GitHub Octicons set. Refer to [GitHub Octicons](https://primer.style/octicons/) to view the icons that are supported..

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
import { icon, iconButton, IconProps, ButtonProps } from 'octicons-js';

const customIcon: SVGElement = icon('download', { size: 24 });

const customButton = iconButton('search', {
  label: 'Search',
  size: 16,
  bgColor: '#eee'
});
```

## Browser Compatibility

Octicons-JS works in all modern browsers and IE11+ with appropriate polyfills.

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
