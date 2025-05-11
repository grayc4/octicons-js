import { render } from './render.js';
import { applyStyles } from './components.js';

export const makeButton = iconFn => (props = {}) => {
    if (typeof document !== 'undefined') {
        applyStyles();
    }

    const {
        size = 16,
        fill = null,
        variant = 'dark',
        label,
        bgColor,
        bgSize,
        iconFirst = true,
        ...rest
    } = props;

    const iconElement = iconFn({ size, fill, variant });

    if (iconElement instanceof Element && iconElement.querySelector('svg')) {
        const svgElement = iconElement.querySelector('svg');
        if (fill) {
            svgElement.setAttribute('fill', fill);
            const pathElements = svgElement.querySelectorAll('path');
            pathElements.forEach(path => {
                path.setAttribute('fill', fill);
            });
        }
    }

    const buttonAttr = {
        type: 'button',
        class: label ? 'icon-button' : 'square-icon-button',
        ...rest
    };

    if (bgColor) {
        buttonAttr.style = `${buttonAttr.style || ''};background-color:${bgColor};border-color:${bgColor};`;
    }

    if (!label && bgSize != null) {
        buttonAttr.style = `${buttonAttr.style || ''};width:${bgSize}px;height:${bgSize}px;`;
    }

    if (label) {
        const iconSpan = iconElement.classList?.contains('octicon')
            ? iconElement
            : render('span', { class: 'octicon' }, iconElement);
        const labelSpan = render('span', { class: 'icon-label' }, label);

        const children = iconFirst ? [iconSpan, labelSpan] : [labelSpan, iconSpan];
        return render('button', buttonAttr, children);
    }

    return render('button', buttonAttr, iconElement);
};
