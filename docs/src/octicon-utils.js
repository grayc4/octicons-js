import { applyStyles } from './components.js';

export function octicon(icon, size = 16, style = 'dark', fill = null) {
    applyStyles();

    if (icon instanceof Element) {
        const wrapper = icon.cloneNode(true);
        const svgEl = wrapper.querySelector('svg');

        if (svgEl) {
            svgEl.setAttribute('width', String(size));
            svgEl.setAttribute('height', String(size));

            if (fill !== null) {
                svgEl.setAttribute('fill', fill);
                svgEl.querySelectorAll('path').forEach(path => {
                    path.setAttribute('fill', fill);
                });
            }
        }

        wrapper.classList.remove('octicon-light', 'octicon-dark');
        wrapper.classList.add(style === 'light' ? 'octicon-light' : 'octicon-dark');

        return wrapper;
    }

    if (typeof icon === 'function') {
        return icon({ size, fill, variant: style });
    }

    console.error('Invalid icon provided to octicon()');
    return document.createElement('span');
}

export function octiconBtn(icon, size = 16, buttonSize = null, style = 'dark', fill = null) {
    applyStyles();

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'square-icon-button';

    if (buttonSize !== null) {
        btn.style.width = `${buttonSize}px`;
        btn.style.height = `${buttonSize}px`;
    }

    const iconElement = octicon(icon, size, style, fill);
    btn.appendChild(iconElement);

    return btn;
}

export function octiconLabelBtn(icon, label, style = 'dark', size = 16, iconFirst = true, fill = null) {
    applyStyles();

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'icon-button';

    const iconElement = octicon(icon, size, style, fill);
    const text = document.createElement('span');
    text.className = 'icon-label';
    text.textContent = label;

    if (iconFirst) {
        btn.append(iconElement, text);
    } else {
        btn.append(text, iconElement);
    }

    return btn;
}
