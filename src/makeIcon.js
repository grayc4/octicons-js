export const makeIcon = def => (props = {}) => {
    const { size = 16, fill = null, variant = 'dark', ...rest } = props;

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    const svgAttributes = {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: String(size),
        height: String(size),
        ...def.attr,
        ...rest
    };

    const pathData = svgAttributes.d;
    delete svgAttributes.d;

    Object.entries(svgAttributes).forEach(([key, value]) => {
        if (value != null && value !== '') {
            svgElement.setAttribute(key, String(value));
        }
    });

    if (def.child && Array.isArray(def.child)) {
        def.child.forEach(childDef => {
            if (!childDef.tag) return;

            const childElement = document.createElementNS('http://www.w3.org/2000/svg', childDef.tag);

            if (childDef.attr) {
                Object.entries(childDef.attr).forEach(([key, value]) => {
                    if (value != null && value !== '') {
                        childElement.setAttribute(key, String(value));
                    }
                });
            }

            if (fill && childDef.tag === 'path') {
                childElement.setAttribute('fill', fill);
            }

            svgElement.appendChild(childElement);
        });
    }
    else if (pathData) {
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', pathData);
        if (fill) {
            pathElement.setAttribute('fill', fill);
        }
        svgElement.appendChild(pathElement);
    }

    const wrapper = document.createElement('span');
    wrapper.className = 'octicon';
    wrapper.classList.add(variant === 'light' ? 'octicon-light' : 'octicon-dark');

    wrapper.dataset.iconProps = JSON.stringify({
        size,
        fill,
        variant
    });

    wrapper.appendChild(svgElement);

    return wrapper;
};
