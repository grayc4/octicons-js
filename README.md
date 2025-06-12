# Octicons-JS

A lightweight, tree-shakeable JavaScript library for using GitHub's Octicons.

## Features

- **Simple API**: Three clean functions for all your icon needs
- **Tree-shakeable**: Import only the icons you use
- **Zero dependencies**: Pure vanilla JavaScript
- **No more long SVG codes**: No more inserting long SVG codes to add icons to HTML pages
- **GitHub styling**: Default styles match GitHub's design system
- **TypeScript support**: Full type definitions included
- **ES6 modules**: Modern module system with backwards compatibility
- 

## Installation

### NPM

```bash
npm install octicons-js
```

## Quick Start

### ES6 Modules (NodeJS)

```javascript
import { Octicon, OcticonBtn, OcticonBtnLabel, gear, star, download } from 'octicons-js';

// Basic icon
const icon = Octicon({ icon: gear });
document.body.appendChild(icon);

// Icon button
const button = OcticonBtn({ icon: star });
document.body.appendChild(button);

// Icon button with label
const labelButton = OcticonBtnLabel({ icon: download, label: "Download" });
document.body.appendChild(labelButton);
```

### CDN Usage

Use directly in HTML without any installation or setup:

```html
<script src="https://cdn.jsdelivr.net/npm/octicons-js@2.0.2/dist/index.umd.js"></script>
```

Usage example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Octicons Example</title>
    <style>
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f6f8fa;
        }
        
        #app {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px;
            background: white;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div id="app"></div>
    
    <script src="https://cdn.jsdelivr.net/npm/octicons-js@2.0.2/dist/index.umd.js"></script>
    <script>
        // Access via global object
        const { Octicon, OcticonBtn, OcticonBtnLabel, gear, star, download } = window.octicons;
        
        const app = document.getElementById('app');
        
        // Create elements
        const icon = Octicon({ icon: gear });
        const button = OcticonBtn({ icon: star });
        const labelButton = OcticonBtnLabel({ icon: download, label: "Download" });
        
        // Add to page
        app.append(icon, button, labelButton);
    </script>
</body>
</html>
```

## API Reference

### Octicon({ icon, className?, e?, size?, fill? })

Creates a basic icon element with GitHub's default styling.

**Parameters:**
- `icon` (required): Icon function from the icons collection
- `className` (optional): CSS class name for custom styling
- `e` (optional): Click event handler function
- `size` (optional): Icon size in pixels (default: 16)
- `fill` (optional): Icon fill color (default: 'currentColor')

**Returns:** HTMLElement

### OcticonBtn({ icon, bgSize?, e?, className?, size?, fill? })

Creates a square icon button with GitHub's button styling.

**Parameters:**
- `icon` (required): Icon function from the icons collection
- `bgSize` (optional): Button size in pixels, creates square button (default: 32)
- `e` (optional): Click event handler function
- `className` (optional): CSS class name for custom styling
- `size` (optional): Icon size in pixels (default: 16)
- `fill` (optional): Icon fill color (default: 'currentColor')

**Returns:** HTMLButtonElement

### OcticonBtnLabel({ icon, label, e?, className?, size?, fill?, iconFirst? })

Creates a button with both icon and text label.

**Parameters:**
- `icon` (required): Icon function from the icons collection
- `label` (required): Button text label
- `e` (optional): Click event handler function
- `className` (optional): CSS class name for custom styling
- `size` (optional): Icon size in pixels (default: 16)
- `fill` (optional): Icon fill color (default: 'currentColor')
- `iconFirst` (optional): Whether to show icon before text (default: true)

**Returns:** HTMLButtonElement

## Examples

### Basic Icons

```javascript
import { Octicon, gear, star, heart } from 'octicons-js';

// Simple icon
const gearIcon = Octicon({ icon: gear });

// Icon with custom styling
const starIcon = Octicon({ 
  icon: star, 
  className: "highlight-icon" 
});

// Interactive icon
const heartIcon = Octicon({ 
  icon: heart, 
  e: () => alert("Liked!") 
});

// Custom size and color
const bigIcon = Octicon({ 
  icon: gear, 
  size: 24, 
  fill: "#0969da" 
});
```

### Icon Buttons

```javascript
import { OcticonBtn, gear, plus, download, trash } from 'octicons-js';

// Basic icon button (32x32px)
const settingsBtn = OcticonBtn({ icon: gear });

// Larger button
const addBtn = OcticonBtn({ 
  icon: plus, 
  bgSize: 40 
});

// Interactive button
const downloadBtn = OcticonBtn({ 
  icon: download, 
  e: () => startDownload() 
});

// Custom styled button
const deleteBtn = OcticonBtn({ 
  icon: trash, 
  className: "danger-button" 
});
```

### Labeled Buttons

```javascript
import { OcticonBtnLabel, star, download, share, heart } from 'octicons-js';

// Basic labeled button
const starBtn = OcticonBtnLabel({ 
  icon: star, 
  label: "Star" 
});

// Interactive labeled button
const downloadBtn = OcticonBtnLabel({ 
  icon: download, 
  label: "Download", 
  e: () => handleDownload() 
});

// Icon after text
const shareBtn = OcticonBtnLabel({ 
  icon: share, 
  label: "Share", 
  iconFirst: false 
});

// Custom styling
const likeBtn = OcticonBtnLabel({ 
  icon: heart, 
  label: "Like this post", 
  className: "like-button" 
});
```

## Extras

### Toolbar Example (HTML/CDN)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Octicons Toolbar</title>
    <style>
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        }

        /* By not adding styles for icons/icon button - the default styles are used. Styles are needed for the actual toolbar however. */
        
        .toolbar {
            background-color: #f6f8fa;
            border-bottom: 1px solid #d1d9e0;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .toolbar-section {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .toolbar-divider {
            width: 1px;
            height: 24px;
            background-color: #d1d9e0;
            margin: 0 4px;
        }
    </style>
</head>
<body>
    <div class="toolbar" id="toolbar"></div>
    <div style="padding: 20px;">
        <h1>Content Area</h1>
        <p>This is the main content area below the toolbar.</p>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/octicons-js@2.0.2/dist/index.umd.js"></script>
    <script>
        // Access via global object - using only valid Octicon names from the readme
        const { Octicon, OcticonBtn, OcticonBtnLabel, gear, star, download, search, plus, file, home } = window.octicons;
        
        const toolbar = document.getElementById('toolbar');
        
        // Create toolbar sections
        const section1 = document.createElement('div');
        section1.className = 'toolbar-section';
        
        const section2 = document.createElement('div');
        section2.className = 'toolbar-section';
        
        const section3 = document.createElement('div');
        section3.className = 'toolbar-section';
        
        // Section 1: Navigation - Create elements exactly like original
        const homeBtn = OcticonBtnLabel({ icon: home, label: "Home" });
        const newBtn = OcticonBtnLabel({ icon: plus, label: "New" });
        
        // Section 2: File operations - Create elements exactly like original
        const fileBtn = OcticonBtn({ icon: file });
        const searchBtn = OcticonBtn({ icon: search });
        
        // Section 3: User actions - Create elements exactly like original
        const downloadBtn = OcticonBtnLabel({ icon: download, label: "Download" });
        const starBtn = OcticonBtn({ icon: star });
        const settingsBtn = OcticonBtn({ icon: gear });
        
        // Create dividers
        const divider1 = document.createElement('div');
        divider1.className = 'toolbar-divider';
        
        const divider2 = document.createElement('div');
        divider2.className = 'toolbar-divider';
        
        // Add to page - exactly like original pattern
        section1.append(homeBtn, newBtn);
        section2.append(fileBtn, searchBtn);
        section3.append(downloadBtn, starBtn, settingsBtn);
        toolbar.append(section1, divider1, section2, divider2, section3);
        
        // Add click handlers
        homeBtn.addEventListener('click', () => console.log('Home clicked'));
        newBtn.addEventListener('click', () => console.log('New clicked'));
        fileBtn.addEventListener('click', () => console.log('File clicked'));
        searchBtn.addEventListener('click', () => console.log('Search clicked'));
        downloadBtn.addEventListener('click', () => console.log('Download clicked'));
        starBtn.addEventListener('click', () => console.log('Star clicked'));
        settingsBtn.addEventListener('click', () => console.log('Settings clicked'));
    </script>
</body>
</html>
```

### Toolbar Example #2 (NPM/NodeJS)

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .toolbar {
            display: flex;
            gap: 8px;
            padding: 12px;
            background: #f6f8fa;
            border: 1px solid #d0d7de;
            border-radius: 8px;
            align-items: center;
        }
    </style>
</head>
<body>
    <div class="toolbar" id="toolbar"></div>

    <script type="module">
        import { 
            OcticonBtn, 
            gear, 
            plus, 
            download, 
            share, 
            search,
            bell
        } from 'octicons-js';

        const toolbar = document.getElementById('toolbar');

        // Create toolbar buttons
        const buttons = [
            OcticonBtn({ icon: gear, e: () => openSettings() }),
            OcticonBtn({ icon: plus, e: () => createNew() }),
            OcticonBtn({ icon: download, e: () => downloadFile() }),
            OcticonBtn({ icon: share, e: () => shareContent() }),
            OcticonBtn({ icon: search, e: () => openSearch() }),
            OcticonBtn({ icon: bell, e: () => showNotifications() })
        ];

        // Add buttons to toolbar
        buttons.forEach(button => toolbar.appendChild(button));

        // Example functions
        function openSettings() { console.log('Settings opened'); }
        function createNew() { console.log('Creating new item'); }
        function downloadFile() { console.log('Download started'); }
        function shareContent() { console.log('Share dialog opened'); }
        function openSearch() { console.log('Search activated'); }
        function showNotifications() { console.log('Notifications shown'); }
    </script>
</body>
</html>
```

### Action Bar Example

```javascript
import { OcticonBtnLabel, star, eye, gitBranch, download } from 'octicons-js';

const actionBar = document.createElement('div');
actionBar.style.cssText = `
    display: flex;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #d0d7de;
`;

const actions = [
    OcticonBtnLabel({ icon: star, label: "Star", e: () => toggleStar() }),
    OcticonBtnLabel({ icon: eye, label: "Watch", e: () => toggleWatch() }),
    OcticonBtnLabel({ icon: gitBranch, label: "Fork", e: () => forkRepo() }),
    OcticonBtnLabel({ icon: download, label: "Download", e: () => downloadZip() })
];

actions.forEach(action => actionBar.appendChild(action));
document.body.appendChild(actionBar);
```

## Available Icons

This library includes all GitHub Octicons. Import any icon by name:

```javascript
import { 
    gear, star, heart, eye, download, upload, plus, x, check,
    arrowDown, home, search, bell, bookmark, calendar, clock, code,
    comment, copy, database, file, flame, gift, globe, graph,
    key, link, location, lock, mail, markdown, megaphone, 
    milestone, moon, note, organization, packaged, paintbrush,
    pencil, person, pin, play, project, pulse, question, quote,
    reply, repo, rocket, screenFull, server, share, shield, sun,
    sync, tag, telescope, terminal, tools, trophy, unlock,
    verified, video, webhook, zap
    // ... and many more
} from 'octicons-js';
```

For a complete list of available icons, visit the [GitHub Octicons](https://primer.style/octicons) documentation.

## Browser Support

- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 79+

## License

MIT License - see LICENSE file for details.
