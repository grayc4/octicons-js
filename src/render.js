export function render(tag, attrs = {}, children = '') {
    const isSvgTag = tag.toLowerCase() === 'svg' ||
        ['path', 'rect', 'circle', 'line', 'polygon', 'polyline'].includes(tag.toLowerCase());

    if (typeof document !== 'undefined') {
        const element = isSvgTag
            ? document.createElementNS('http://www.w3.org/2000/svg', tag)
            : document.createElement(tag);

        for (const [k, v] of Object.entries(attrs)) {
            if (v != null && v !== '') {
                element.setAttribute(k, String(v));
            }
        }

        if (children instanceof Node) {
            element.appendChild(children);
        } else if (Array.isArray(children)) {
            children.forEach(child => {
                if (child instanceof Node) {
                    element.appendChild(child);
                } else if (child != null) {
                    element.appendChild(document.createTextNode(String(child)));
                }
            });
        } else if (typeof children === 'string' && children !== '') {
            if (!isSvgTag) {
                element.innerHTML = children;
            }
            else {
                const temp = document.createElement('template');
                temp.innerHTML = `<svg>${children}</svg>`;
                const svgContent = temp.content.querySelector('svg');

                if (svgContent && svgContent.childNodes.length > 0) {
                    Array.from(svgContent.childNodes).forEach(node => {
                        element.appendChild(node.cloneNode(true));
                    });
                }
            }
        }

        return element;
    }
    const attrString = Object.entries(attrs)
        .filter(([, v]) => v != null && v !== '')
        .map(([k, v]) => `${k}="${String(v)}"`)
        .join(' ');

    let childrenHtmlString = '';
    if (Array.isArray(children)) {
        childrenHtmlString = children.join('');
    } else if (children != null) {
        childrenHtmlString = String(children);
    }

    return `<${tag}${attrString ? ' ' + attrString : ''}>${childrenHtmlString}</${tag}>`;
}