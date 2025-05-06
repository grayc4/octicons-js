import Octicons, {
    octicon,
    octiconBtn,
    octiconLabelBtn,
    icon,
    iconButton,
    labelButton,
    buttons
} from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    const filterInput = document.getElementById('icon-filter');
    const tabList = document.querySelector('.tab-list');
    const tabs = tabList.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.tab-panel');

    const galleryContainers = {
        icons: document.getElementById('gallery-icons'),
        buttons: document.getElementById('gallery-buttons'),
        labelButtons: document.getElementById('gallery-label-buttons')
    };
    
    const exampleContainers = [
        { id: 'example-gear', creator: () => buttons.gear('Settings') },
        { id: 'example-plus', creator: () => buttons.plus('Add New') },
        { id: 'example-search', creator: () => buttons.search('Search') },
        { id: 'example-gearicon', creator: () => buttons.gearIcon() },
        { id: 'example-alerticon', creator: () => buttons.alertIcon() },
        { id: 'example-trashicon', creator: () => buttons.trashIcon() }
    ];

    exampleContainers.forEach(example => {
        const container = document.getElementById(example.id);
        if (container) {
            try {
                const element = example.creator();
                container.appendChild(element);
            } catch (e) {
                container.textContent = 'Error loading example';
                console.error(`Error rendering example ${example.id}:`, e);
            }
        }
    });

    for (const key in galleryContainers) {
        if (!galleryContainers[key]) {
            console.error(`Gallery container not found: ${key}`);
            return;
        }
    }

    const allIconNames = Object.keys(Octicons).filter(key =>
        key.startsWith('octicon') && typeof Octicons[key] === 'string'
    );

    function createGalleryRow(name, size, svgString, type) {
        const row = document.createElement('div');
        row.className = 'gallery-row';

        let baseName = name.replace(/^octicon/, '');
        if (/\d+$/.test(baseName)) {
            baseName = baseName.replace(/\d+$/, '');
        }
        baseName = baseName.charAt(0).toLowerCase() + baseName.slice(1);

        const cellPreview = document.createElement('div');
        cellPreview.className = 'gallery-cell cell-preview';
        try {
            let element;
            if (type === 'icon') {
                element = octicon(svgString, size, 'dark');
            } else if (type === 'button') {
                element = octiconBtn(svgString, 'dark', size, size + 16);
            } else if (type === 'labelButton') {
                element = octiconLabelBtn(svgString, 'Label', 'dark', size, true);
            }

            if (element && element instanceof HTMLElement) {
                cellPreview.appendChild(element);
            } else {
                cellPreview.textContent = 'Error';
            }
        } catch (e) {
            cellPreview.textContent = 'Error';
        }

        const cellName = document.createElement('div');
        cellName.className = 'gallery-cell cell-name';
        cellName.textContent = `Octicons.${name}`;

        const cellCode = document.createElement('div');
        cellCode.className = 'gallery-cell cell-code';
        const codeBlock = document.createElement('div');
        codeBlock.className = 'code-block';
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.className = 'language-javascript';

        let codeText = '';
        if (type === 'icon') {
            codeText = `// Original API\nocticon(Octicons.${name}, ${size}, 'dark');\n\n// Simplified API\nicon('${baseName}', { size: ${size} });`;
        } else if (type === 'button') {
            codeText = `// Original API\nocticonBtn(Octicons.${name}, 'dark', ${size}, ${size + 16});\n\n// Simplified API\niconButton('${baseName}', { size: ${size}, buttonSize: ${size + 16} });`;
        } else if (type === 'labelButton') {
            codeText = `// Original API\nocticonLabelBtn(Octicons.${name}, 'Label', 'dark', ${size}, true);\n\n// Simplified API\nlabelButton('${baseName}', 'Label', { size: ${size} });`;
        }
        code.textContent = codeText;

        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.type = 'button';

        pre.appendChild(code);
        codeBlock.appendChild(pre);
        codeBlock.appendChild(copyButton);
        cellCode.appendChild(codeBlock);

        row.appendChild(cellPreview);
        row.appendChild(cellName);
        row.appendChild(cellCode);
        return row;
    }

    function renderGalleryContent(container, type, iconNames) {
        const existingRows = container.querySelectorAll('.gallery-row:not(.gallery-header-row)');
        existingRows.forEach(row => row.remove());

        if (!iconNames || iconNames.length === 0) {
            const noResultsRow = document.createElement('div');
            noResultsRow.className = 'gallery-row';
            noResultsRow.innerHTML = `<div class="gallery-cell" style="text-align: center; padding: 20px; color: #57606a; grid-column: 1 / -1;">No icons found matching your filter.</div>`;
            container.appendChild(noResultsRow);
            return;
        }

        iconNames.sort().forEach(name => {
            const svgString = Octicons[name];
            if (typeof svgString !== 'string') {
                return;
            }

            const sizeMatch = name.match(/(\d+)$/);
            const size = sizeMatch ? parseInt(sizeMatch[1], 10) : 16;

            const row = createGalleryRow(name, size, svgString, type);
            container.appendChild(row);
        });

        if (typeof hljs !== 'undefined' && hljs.highlightElement) {
            container.querySelectorAll('pre code.language-javascript').forEach((block) => {
                try {
                    hljs.highlightElement(block);
                } catch (e) {
                    console.error('Error highlighting code block:', e);
                }
            });
        }
    }

    function updateGalleries(searchTerm = '') {
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();
        const filteredNames = allIconNames.filter(name =>
            name.toLowerCase().includes(normalizedSearchTerm)
        );

        if (galleryContainers.icons) renderGalleryContent(galleryContainers.icons, 'icon', filteredNames);
        if (galleryContainers.buttons) renderGalleryContent(galleryContainers.buttons, 'button', filteredNames);
        if (galleryContainers.labelButtons) renderGalleryContent(galleryContainers.labelButtons, 'labelButton', filteredNames);
    }

    if (tabList) {
        tabList.addEventListener('click', (event) => {
            const clickedTab = event.target.closest('.tab-button');
            if (!clickedTab || clickedTab.getAttribute('aria-selected') === 'true') return;

            tabs.forEach(tab => {
                tab.setAttribute('aria-selected', 'false');
            });
            panels.forEach(panel => {
                panel.setAttribute('aria-hidden', 'true');
            });

            clickedTab.setAttribute('aria-selected', 'true');
            const targetPanelId = clickedTab.getAttribute('aria-controls');
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.setAttribute('aria-hidden', 'false');
            }
        });
    }

    if (filterInput) {
        filterInput.addEventListener('input', (event) => {
            updateGalleries(event.target.value);
        });
    }

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('copy-button')) {
            const codeElement = event.target.closest('.code-block')?.querySelector('code');
            if (!codeElement) return;

            const codeText = codeElement.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                event.target.textContent = 'Copied!';
                event.target.classList.add('copied');
                setTimeout(() => {
                    if (document.body.contains(event.target)) {
                        event.target.textContent = 'Copy';
                        event.target.classList.remove('copied');
                    }
                }, 1500);
            }).catch(err => {
                event.target.textContent = 'Error';
                setTimeout(() => {
                    if (document.body.contains(event.target)) {
                        event.target.textContent = 'Copy';
                    }
                }, 1500);
            });
        }
    });

    if (typeof hljs !== 'undefined' && hljs.highlightAll) {
        try {
            hljs.highlightAll();
        } catch (e) {
            console.error('Error highlighting code blocks:', e);
        }
    }

    try {
        updateGalleries();
    } catch (error) {
        console.error('Error updating galleries:', error);
    }
});