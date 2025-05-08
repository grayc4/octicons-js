export const makeIcon = def => (props = {}) => {
    const { size, fill, style, ...rest } = props;

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    const svgAttributes = {
        ...def.attr,
        ...rest
    };

    if (size != null) {
        svgAttributes.width = String(size);
        svgAttributes.height = String(size);
    }

    if (fill) {
        svgAttributes.fill = fill;
    }

    if (style) {
        svgAttributes.style = style;
    }

    const pathData = svgAttributes.d;
    delete svgAttributes.d;

    Object.entries(svgAttributes).forEach(([key, value]) => {
        if (value != null && value !== '') {
            svgElement.setAttribute(key, String(value));
        }
    });

    if (def.child && Array.isArray(def.child)) {
        def.child.forEach(childDef => {
            if (!childDef.tag) return; // Skip if no tag

            const childElement = document.createElementNS('http://www.w3.org/2000/svg', childDef.tag);

            if (childDef.attr) {
                Object.entries(childDef.attr).forEach(([key, value]) => {
                    if (value != null && value !== '') {
                        childElement.setAttribute(key, String(value));
                    }
                });
            }

            svgElement.appendChild(childElement);
        });
    }
    else if (pathData) {
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', pathData);
        svgElement.appendChild(pathElement);
    }

    const wrapper = document.createElement('span');
    wrapper.className = 'octicon';
    wrapper.appendChild(svgElement);

    return wrapper;
};