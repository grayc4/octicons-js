import { render } from './render.js';
import { applyStyles } from './components.js';

export const makeButton = iconFn => (props = {}) => {
    if (typeof document !== 'undefined') {
        applyStyles();
    }

    const {
        size = 16,
        fill,
        style,
        label,
        bgColor,
        bgSize,
        ...rest
    } = props;

    const iconElement = iconFn({ size, fill, style });

    const buttonAttr = {
        type: 'button',
        class: label ? 'icon-button' : '',
        ...rest
    };

    if (bgColor) {
        buttonAttr.style = `${buttonAttr.style || ''};background-color:${bgColor};border-color:${bgColor};`;
    }

    if (!label && bgSize != null) {
        buttonAttr.style = `${buttonAttr.style || ''};width:${bgSize}px;height:${bgSize}px;`;
    }

    if (label) {
        const iconSpan = render('span', { class: 'octicon' }, iconElement);
        const labelSpan = render('span', { class: 'icon-label' }, label);

        return render('button', buttonAttr, [iconSpan, labelSpan]);
    }

    return render('button', buttonAttr, iconElement);
};
