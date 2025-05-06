# Octicons JS

GitHub Octicons for JavaScript projects with a simple, intuitive API. Create icon elements and buttons with minimal code. Zero dependencies, fully TypeScript-compatible, and ready for both Node.js and browser environments. Includes all official GitHub icons with light/dark styling options.

## Installation

```bash
npm install octicons-js
```

## Usage

### Simplified API (Recommended)

```javascript
import { icons, icon, iconButton, labelButton, buttons } from 'octicons-js';

// Example 1: Direct access to SVG strings
const alertSvg = icons.alert[16];        // Get svg string for 16px alert icon
const folderSvg = icons['file-directory'][24]; // Get svg for 24px folder icon

// Example 2: Create an icon element
const alertIcon = icon('alert', { size: 16, style: 'dark' });

// Example 3: Create a button with icon and label
const settingsButton = labelButton('gear', 'Settings');

// Example 4: Create a square icon button
const deleteButton = iconButton('trash', { buttonSize: 32 });

// Example 5: Pre-configured buttons
const addButton = buttons.plus('Add Item');
const closeIconButton = buttons.xIcon(); // Just the icon

// Add to DOM
document.body.appendChild(alertIcon);
document.body.appendChild(settingsButton);
document.body.appendChild(deleteButton);
document.body.appendChild(addButton);
document.body.appendChild(closeIconButton);
```

### Traditional API

```javascript
import Octicons, { octicon, octiconBtn, octiconLabelBtn } from 'octicons-js';

// Example 1: Just the icon
const fileIcon = octicon(
  Octicons.octiconFile16,
  16,
  'dark'
);

// Example 2: Square icon button
const folderButton = octiconBtn(
  Octicons.octiconFileDirectory16,
  'dark',
  16
);

// Example 3: Button with icon and label
const lockButton = octiconLabelBtn(
  Octicons.octiconLock16,
  'Secure',
  'dark',
  16
);

// Add to DOM
document.body.appendChild(fileIcon);
document.body.appendChild(folderButton);
document.body.appendChild(lockButton);
```

## Simplified API Reference

### `icons` Object

Direct access to all icon SVG strings by name and size:

```javascript
import { icons } from 'octicons-js';

// Get SVG string for alert icon at 16px size
const alertSvg = icons.alert[16];

// Get SVG string for file directory at 24px size
const folderSvg = icons['file-directory'][24];

// Check if an icon exists in a specific size
if (icons.gear[48]) {
  console.log('48px gear icon is available');
}

// Get all available sizes for an icon
const alertSizes = Object.keys(icons.alert).map(Number);
console.log(alertSizes); // e.g. [16, 24]
```

### `icon(name, options)`

Creates an icon element:

```javascript
import { icon } from 'octicons-js';

// Basic usage with defaults (16px, dark style)
const alertIcon = icon('alert');

// With options
const gearIcon = icon('gear', {
  size: 24,        // 12, 16, 24, 48, or 96
  style: 'light'   // 'light' or 'dark'
});
```

### `iconButton(name, options)`

Creates a square button with an icon:

```javascript
import { iconButton } from 'octicons-js';

// Basic usage
const deleteButton = iconButton('trash');

// With options
const settingsButton = iconButton('gear', {
  size: 24,         // Icon size
  buttonSize: 48,   // Button size (default is size + 16)
  style: 'dark'     // 'light' or 'dark'
});
```

### `labelButton(name, label, options)`

Creates a button with an icon and label:

```javascript
import { labelButton } from 'octicons-js';

// Basic usage
const addButton = labelButton('plus', 'Add Item');

// With options
const searchButton = labelButton('search', 'Search', {
  size: 16,        // Icon size
  style: 'dark',   // 'light' or 'dark'
  iconFirst: false // Label first, then icon (default is icon first)
});
```

### `buttons` Object

Convenient pre-configured buttons for all icons:

```javascript
import { buttons } from 'octicons-js';

// Create label buttons with default text
const settingsButton = buttons.gear(); // Text will be "Gear"
const folderButton = buttons['file-directory'](); // Text will be "File Directory"

// Create label buttons with custom text
const alertButton = buttons.alert('Warning');
const addButton = buttons.plus('Add Item');

// Create square icon buttons (no text)
const closeButton = buttons.xIcon();
const searchButton = buttons.searchIcon();

// For kebab-case names, use array notation or camelCase for icon-only buttons
const fileCodeButton = buttons['file-code']('View Code');
const fileCodeIconButton = buttons.fileCodeIcon();
```

## Traditional API Reference

### `octicon(svg, size, style)`

Creates just the icon element.

- `svg` (String): SVG markup for the icon (e.g., `Octicons.octiconFile16`)
- `size` (Number): Size of the icon in pixels (default: 16)
- `style` (String): 'light' or 'dark' style (default: 'dark')
- Returns: HTMLElement (span) containing the octicon

### `octiconBtn(svg, style, size, buttonSize)`

Creates a square button with centered icon.

- `svg` (String): SVG markup for the icon (e.g., `Octicons.octiconZap16`)
- `style` (String): 'light' or 'dark' style for the icon (default: 'dark')
- `size` (Number): Size of the icon in pixels (default: 16)
- `buttonSize` (Number): Size of the square button (default: size + 16)
- Returns: HTMLElement (button) with centered icon

### `octiconLabelBtn(svg, label, style, size, iconFirst)`

Creates a button with icon and label.

- `svg` (String): SVG markup for the icon (e.g., `Octicons.octiconLock16`)
- `label` (String): Text label for the button
- `style` (String): 'light' or 'dark' style for the icon (default: 'dark')
- `size` (Number): Size of the icon in pixels (default: 16)
- `iconFirst` (Boolean): Whether icon appears before label (default: true)
- Returns: HTMLElement (button) with icon and label

## Available Icons

**`Octicons` (Default Export):** An object containing raw SVG string data for all available icons. Access icons by name with size suffix (e.g., `Octicons.octiconAlert16`, `Octicons.octiconGear24`).

With the simplified API, you can access icons directly by name and size (e.g., `icons.alert[16]`, `icons.gear[24]`).

The following icons are included in this package:

| Icon Name Base | Available Sizes |
|----------------|-----------------|
| accessibility | 16, 24 |
| accessibility-inset | 16, 24 |
| ai-model | 16, 24 |
| alert | 16, 24 |
| alert-fill | 12, 16, 24 |
| apps | 16, 24 |
| archive | 16, 24 |
| arrow-both | 16, 24 |
| arrow-down | 16, 24 |
| arrow-down-left | 16, 24 |
| arrow-down-right | 16, 24 |
| arrow-left | 16, 24 |
| arrow-right | 16, 24 |
| arrow-switch | 16, 24 |
| arrow-up | 16, 24 |
| arrow-up-left | 16, 24 |
| arrow-up-right | 16, 24 |
| beaker | 16, 24 |
| bell | 16, 24 |
| bell-fill | 16, 24 |
| bell-slash | 16, 24 |
| blocked | 16, 24 |
| bold | 16, 24 |
| book | 16, 24 |
| bookmark | 16, 24 |
| bookmark-filled | 16 |
| bookmark-slash | 16, 24 |
| bookmark-slash-fill | 16, 24 |
| briefcase | 16, 24 |
| broadcast | 16, 24 |
| browser | 16, 24 |
| bug | 16, 24 |
| cache | 16, 24 |
| calendar | 16, 24 |
| check | 16, 24 |
| check-circle | 16, 24 |
| check-circle-fill | 12, 16, 24 |
| checkbox | 16, 24 |
| checklist | 16, 24 |
| chevron-down | 12, 16, 24 |
| chevron-left | 12, 16, 24 |
| chevron-right | 12, 16, 24 |
| chevron-up | 12, 16, 24 |
| circle | 16, 24 |
| circle-slash | 16, 24 |
| clock | 16, 24 |
| clock-fill | 16, 24 |
| cloud | 16, 24 |
| cloud-offline | 16, 24 |
| code | 16, 24 |
| code-of-conduct | 16, 24 |
| code-review | 16, 24 |
| code-square | 16, 24 |
| codescan | 16, 24 |
| codescan-checkmark | 16, 24 |
| codespaces | 16, 24 |
| columns | 16, 24 |
| command-palette | 16, 24 |
| comment | 16, 24 |
| comment-discussion | 16, 24 |
| container | 16, 24 |
| copilot | 16, 24, 48, 96 |
| copilot-error | 16 |
| copilot-warning | 16 |
| copy | 16, 24 |
| cpu | 16, 24 |
| credit-card | 16, 24 |
| cross-reference | 16, 24 |
| dash | 16, 24 |
| database | 16, 24 |
| dependabot | 16, 24 |
| desktop-download | 16, 24 |
| device-camera | 16, 24 |
| device-camera-video | 16, 24 |
| device-desktop | 16, 24 |
| device-mobile | 16, 24 |
| devices | 16, 24 |
| diamond | 16, 24 |
| diff | 16, 24 |
| diff-added | 16, 24 |
| diff-ignored | 16, 24 |
| diff-modified | 16, 24 |
| diff-removed | 16, 24 |
| diff-renamed | 16, 24 |
| discussion-closed | 16, 24 |
| discussion-duplicate | 16, 24 |
| discussion-outdated | 16, 24 |
| dot | 16, 24 |
| dot-fill | 16, 24 |
| download | 16, 24 |
| duplicate | 16, 24 |
| ellipsis | 16, 24 |
| eye | 16, 24 |
| eye-closed | 16, 24 |
| feed-discussion | 16 |
| feed-forked | 16 |
| feed-heart | 16 |
| feed-issue-closed | 16 |
| feed-issue-draft | 16 |
| feed-issue-open | 16 |
| feed-issue-reopen | 16 |
| feed-merged | 16 |
| feed-person | 16 |
| feed-plus | 16 |
| feed-public | 16 |
| feed-pull-request-closed | 16 |
| feed-pull-request-draft | 16 |
| feed-pull-request-open | 16 |
| feed-repo | 16 |
| feed-rocket | 16 |
| feed-star | 16 |
| feed-tag | 16 |
| feed-trophy | 16 |
| file | 16, 24 |
| file-added | 16, 24 |
| file-badge | 16, 24 |
| file-binary | 16, 24 |
| file-code | 16, 24 |
| file-diff | 16, 24 |
| file-directory | 16, 24 |
| file-directory-fill | 16, 24 |
| file-directory-open-fill | 16, 24 |
| file-directory-symlink | 16, 24 |
| file-media | 16, 24 |
| file-moved | 16, 24 |
| file-removed | 16, 24 |
| file-submodule | 16, 24 |
| file-symlink-file | 16, 24 |
| file-zip | 16, 24 |
| filter | 16, 24 |
| filter-remove | 16, 24 |
| fiscal-host | 16, 24 |
| flame | 16, 24 |
| fold | 16, 24 |
| fold-down | 16, 24 |
| fold-up | 16, 24 |
| gear | 16, 24 |
| gift | 16, 24 |
| git-branch | 16, 24 |
| git-commit | 16, 24 |
| git-compare | 16, 24 |
| git-merge | 16, 24 |
| git-merge-queue | 16, 24 |
| git-pull-request | 16, 24 |
| git-pull-request-closed | 16, 24 |
| git-pull-request-draft | 16, 24 |
| globe | 16, 24 |
| goal | 16, 24 |
| grabber | 16, 24 |
| graph | 16, 24 |
| hash | 16, 24 |
| heading | 16, 24 |
| heart | 16, 24 |
| heart-fill | 16, 24 |
| history | 16, 24 |
| home | 16, 24 |
| home-fill | 16, 24 |
| horizontal-rule | 16, 24 |
| hourglass | 16, 24 |
| hubot | 16, 24 |
| id-badge | 16, 24 |
| image | 16, 24 |
| inbox | 16, 24 |
| infinity | 16, 24 |
| info | 16, 24 |
| issue-closed | 16, 24 |
| issue-draft | 16, 24 |
| issue-opened | 16, 24 |
| issue-reopened | 16, 24 |
| issue-tracked-by | 16, 24 |
| issue-tracks | 16, 24 |
| italic | 16, 24 |
| iterations | 16, 24 |
| kebab-horizontal | 16, 24 |
| key | 16, 24 |
| key-asterisk | 16, 24 |
| law | 16, 24 |
| light-bulb | 16, 24 |
| link | 16, 24 |
| link-external | 16, 24 |
| list-ordered | 16, 24 |
| list-unordered | 16, 24 |
| location | 16, 24 |
| lock | 16, 24 |
| log | 16, 24 |
| logo-gist | 16, 24 |
| logo-github | 16, 24 |
| mail | 16, 24 |
| mark-github | 16, 24 |
| markdown | 16, 24 |
| megaphone | 16, 24 |
| mention | 16, 24 |
| meter | 16, 24 |
| milestone | 16, 24 |
| mirror | 16, 24 |
| moon | 16, 24 |
| mortar-board | 16, 24 |
| move-to-bottom | 16, 24 |
| move-to-end | 16, 24 |
| move-to-start | 16, 24 |
| move-to-top | 16, 24 |
| multi-select | 16, 24 |
| mute | 16, 24 |
| no-entry | 16, 24 |
| no-entry-fill | 12 |
| north-star | 16, 24 |
| note | 16, 24 |
| number | 16, 24 |
| organization | 16, 24 |
| package | 16, 24 |
| package-dependencies | 16, 24 |
| package-dependents | 16, 24 |
| paintbrush | 16, 24 |
| paper-airplane | 16, 24 |
| paperclip | 16, 24 |
| passkey-fill | 16, 24 |
| paste | 16, 24 |
| pencil | 16, 24 |
| people | 16, 24 |
| person | 16, 24 |
| person-add | 16, 24 |
| person-fill | 16, 24 |
| pin | 16, 24 |
| pin-slash | 16, 24 |
| pivot-column | 16, 24 |
| play | 16, 24 |
| plug | 16, 24 |
| plus | 16, 24 |
| plus-circle | 16, 24 |
| project | 16, 24 |
| project-roadmap | 16, 24 |
| project-symlink | 16, 24 |
| project-template | 16, 24 |
| pulse | 16, 24 |
| question | 16, 24 |
| quote | 16, 24 |
| read | 16, 24 |
| redo | 16, 24 |
| rel-file-path | 16, 24 |
| reply | 16, 24 |
| repo | 16, 24 |
| repo-clone | 16, 24 |
| repo-delete | 24 |
| repo-deleted | 16 |
| repo-forked | 16, 24 |
| repo-locked | 16, 24 |
| repo-pull | 16, 24 |
| repo-push | 16, 24 |
| repo-template | 16, 24 |
| report | 16, 24 |
| rocket | 16, 24 |
| rows | 16, 24 |
| rss | 16, 24 |
| ruby | 16, 24 |
| screen-full | 16, 24 |
| screen-normal | 16, 24 |
| search | 16, 24 |
| server | 16, 24 |
| share | 16, 24 |
| share-android | 16, 24 |
| shield | 16, 24 |
| shield-check | 16, 24 |
| shield-lock | 16, 24 |
| shield-slash | 16, 24 |
| shield-x | 16, 24 |
| sidebar-collapse | 16, 24 |
| sidebar-expand | 16, 24 |
| sign-in | 16, 24 |
| sign-out | 16, 24 |
| single-select | 16, 24 |
| skip | 16, 24 |
| skip-fill | 16, 24 |
| sliders | 16, 24 |
| smiley | 16, 24 |
| sort-asc | 16, 24 |
| sort-desc | 16, 24 |
| sparkle-fill | 16, 24 |
| sparkles-fill | 16, 24 |
| sponsor-tiers | 16, 24 |
| square | 16, 24 |
| square-circle | 16, 24 |
| square-fill | 16, 24 |
| squirrel | 16, 24 |
| stack | 16, 24 |
| star | 16, 24 |
| star-fill | 16, 24 |
| stop | 16, 24 |
| stopwatch | 16, 24 |
| strikethrough | 16, 24 |
| sun | 16, 24 |
| sync | 16, 24 |
| tab | 16, 24 |
| tab-external | 16, 24 |
| table | 16, 24 |
| tag | 16, 24 |
| tasklist | 16, 24 |
| telescope | 16, 24 |
| telescope-fill | 16, 24 |
| terminal | 16, 24 |
| three-bars | 16, 24 |
| thumbsdown | 16, 24 |
| thumbsup | 16, 24 |
| tools | 16, 24 |
| tracked-by-closed-completed | 16, 24 |
| tracked-by-closed-not-planned | 16, 24 |
| trash | 16, 24 |
| triangle-down | 16, 24 |
| triangle-left | 16, 24 |
| triangle-right | 16, 24 |
| triangle-up | 16, 24 |
| trophy | 16, 24 |
| typography | 16, 24 |
| undo | 16, 24 |
| unfold | 16, 24 |
| unlink | 16, 24 |
| unlock | 16, 24 |
| unmute | 16, 24 |
| unread | 16, 24 |
| unverified | 16, 24 |
| upload | 16, 24 |
| verified | 16, 24 |
| versions | 16, 24 |
| video | 16, 24 |
| webhook | 16 |
| workflow | 16, 24 |
| x | 12, 16, 24 |
| x-circle | 16, 24 |
| x-circle-fill | 12, 16, 24 |
| zap | 16, 24 |
| zoom-in | 16, 24 |
| zoom-out | 16, 24 |

## Examples

### Simplified Access to Icons

```javascript
import { icons, icon } from 'octicons-js';

// Check which sizes are available for an icon
const availableSizes = Object.keys(icons.gear);
console.log(`Gear icon is available in these sizes: ${availableSizes.join(', ')}`);

// Create icons in different sizes
const small = icon('alert', { size: 16 });
const medium = icon('alert', { size: 24 });

document.body.appendChild(small);
document.body.appendChild(medium);
```

### Dark Mode Support

```javascript
import { icon, labelButton } from 'octicons-js';

// Use system preference to choose icon style
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const iconStyle = prefersDark ? 'light' : 'dark'; // Use light icon on dark background

// Create components with appropriate style
const gearIcon = icon('gear', { style: iconStyle });
const settingsButton = labelButton('gear', 'Settings', { style: iconStyle });

document.body.appendChild(gearIcon);
document.body.appendChild(settingsButton);
```

### Adding Custom Events

```javascript
import { iconButton, labelButton } from 'octicons-js';

// Square button with event
const deleteButton = iconButton('trash', { buttonSize: 36 });
deleteButton.addEventListener('click', () => {
  if (confirm('Are you sure you want to delete?')) {
    console.log('Deleting item...');
  }
});

// Label button with event
const saveButton = labelButton('check', 'Save Changes');
saveButton.addEventListener('click', () => {
  console.log('Saving changes...');
  // Your save logic here
});

document.body.appendChild(deleteButton);
document.body.appendChild(saveButton);
```

## Browser Support

This package works in all modern browsers that support ES6 modules:
- Chrome
- Firefox
- Safari
- Edge (Chromium-based)

## TypeScript Support

Type definitions are included with the package.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License