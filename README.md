# octicons-js

![Octicons-JS](https://img.shields.io/badge/octicons--js-v1.5.4-black)
[![npm package](https://img.shields.io/npm/v/octicons-js.svg)](https://www.npmjs.com/package/octicons-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

octicons-js is a small, zero-dependency package that makes it easy to use GitHub Octicons with JavaScript. It doesn’t modify the original SVGs, so you can work with the icons just like standard SVG code—without ever handling raw SVG files directly. Whether you’re building advanced UI components like icon toolbars or creating quick HTML prototypes, octicons-js streamlines the integration process. Simply append the icons to the DOM, or use the CDN link for single-page projects—no manual SVG editing required. The examples below show various ways to start using Octicons in any project.

## Installation

```bash
npm install octicons-js
```

## Usage

### ES Modules (Import)

```javascript
import { Octicon, mortarBoard, star, gitBranch } from 'octicons-js';

// Create an icon element
const iconElement = Octicon({
  icon: mortarBoard,
  size: 24,
  className: 'graduation-icon'
});

// Append to DOM
document.body.appendChild(iconElement);
```

### CommonJS (Require)

```javascript
const { Octicon, mortarBoard, star, gitBranch } = require('octicons-js');

// Create an icon element
const iconElement = Octicon({
  icon: star,
  size: 16,
  className: 'star-icon'
});

document.body.appendChild(iconElement);
```

### Browser (CDN)

```html
<!-- Include from CDN -->
<script src="https://unpkg.com/octicons-js@1.5.4/dist/index.esm.js" type="module"></script>

<script type="module">
  import { Octicon, mortarBoard } from 'https://unpkg.com/octicons-js@1.5.4/dist/index.esm.js';

  const icon = Octicon({ icon: mortarBoard, size: 32 });
  document.body.appendChild(icon);
</script>
```qww

## Tree Shaking

This package supports tree shaking, so you only bundle the icons you actually use:

```javascript
// Import only icons you need
import { Octicon, mortarBoard, star } from 'octicons-js';
```

## Available Icons

The package includes all GitHub Octicons. Some popular ones:

- `alert`, `archive`, `bell`, `book`, `bug`, `calendar`, `check`, `clock`
- `code`, `comment`, `copy`, `download`, `eye`, `file`, `gear`, `git*`
- `globe`, `heart`, `home`, `info`, `issue*`, `key`, `link`, `lock`
- `mail`, `markdown`, `mortarBoard`, `note`, `organization`, `package`
- `pencil`, `person`, `plus`, `project`, `question`, `repo`, `rocket`
- `search`, `server`, `settings`, `shield`, `star`, `sync`, `tag`
- `terminal`, `tools`, `trash`, `unlock`, `upload`, `verified`, `x`

[See all available icons →](https://primer.style/design/foundations/icons)

## API

### Octicon(props)

Creates an Octicon element.

#### Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | `function` | **required** | The icon function to render |
| `size` | `number` | `16` | Size of the icon in pixels |
| `className` | `string` | `''` | CSS class name to apply to the container |

#### Returns

`HTMLDivElement` containing the SVG icon.

### Example with Styling

```javascript
import { Octicon, gitBranch } from 'octicons-js';

const branchIcon = Octicon({
  icon: gitBranch,
  size: 20,
  className: 'branch-icon text-blue'
});

// The generated HTML structure:
// <div class="branch-icon text-blue">
//   <svg width="20" height="20" viewBox="0 0 16 16">...</svg>
// </div>
```

## TypeScript Support

This package includes TypeScript definitions:

```typescript
import { Octicon, mortarBoard } from 'octicons-js';

interface IconProps {
  icon: () => SVGElement;
  size?: number;
  className?: string;
}

const createIcon = (props: IconProps): HTMLDivElement => {
  return Octicon(props);
};
```

## Bundle Size

- **Full package**: ~370KB (contains all icons)
- **With tree shaking**: Only the icons you import
- **Single icon**: ~1-3KB each
- **Octicon component**: ~500 bytes

## Browser Support

- ✅ Modern browsers (ES2015+)
- ✅ Node.js 14+
- ✅ Bundle with Webpack, Rollup, Vite, etc.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## Development

```bash
# Clone the repository
git clone https://github.com/grayc4/octicons-js.git
cd octicons-js

# Install dependencies
npm install

# Build the package
npm run build

# Test the build
npm run test
```

## License

MIT © [grayc4](https://github.com/grayc4)

## Related

- [GitHub Octicons](https://github.com/primer/octicons) - Official Octicons
- [Primer Design System](https://primer.style/) - GitHub's design system

---

**Last updated**: 2025-05-28