/**
 * Creates a basic icon element
 * @param {Object} props - Icon properties
 * @param {Function} props.icon - Icon function from icons collection
 * @param {string} [props.className] - CSS class name for styling
 * @param {Function} [props.e] - Click event handler
 * @param {number} [props.size=16] - Icon size in pixels
 * @param {string} [props.fill='currentColor'] - Icon fill color
 * @returns {HTMLElement} Icon element
 */
export function Octicon({ icon, className = '', e = null, size = 16, fill = 'currentColor' }) {
  if (!icon || typeof icon !== 'function') {
    throw new Error('Octicon: icon property is required and must be a function');
  }

  const svgElement = icon();
  
  svgElement.setAttribute('width', size.toString());
  svgElement.setAttribute('height', size.toString());
  svgElement.setAttribute('fill', fill);
  svgElement.style.display = 'block';
  svgElement.style.flexShrink = '0';
  
  const wrapper = document.createElement('div');
  wrapper.className = `octicon ${className}`.trim();
  wrapper.appendChild(svgElement);
  
  if (e && typeof e === 'function') {
    wrapper.style.cursor = 'pointer';
    wrapper.addEventListener('click', e);
  }
  
  wrapper.style.display = 'inline-flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.justifyContent = 'center';
  wrapper.style.verticalAlign = 'text-bottom';
  wrapper.style.lineHeight = '1';
  
  return wrapper;
}

/**
 * Creates a square icon button with GitHub styling
 * @param {Object} props - Button properties
 * @param {Function} props.icon - Icon function from icons collection
 * @param {number} [props.bgSize=32] - Button size in pixels (square)
 * @param {Function} [props.e] - Click event handler
 * @param {string} [props.className] - CSS class name for styling
 * @param {number} [props.size=16] - Icon size in pixels
 * @param {string} [props.fill='currentColor'] - Icon fill color
 * @returns {HTMLButtonElement} Button element
 */
export function OcticonBtn({ icon, bgSize = 32, e = null, className = '', size = 16, fill = 'currentColor' }) {
  if (!icon || typeof icon !== 'function') {
    throw new Error('OcticonBtn: icon property is required and must be a function');
  }

  const svgElement = icon();
  
  svgElement.setAttribute('width', size.toString());
  svgElement.setAttribute('height', size.toString());
  svgElement.setAttribute('fill', fill);
  svgElement.style.display = 'block';
  svgElement.style.flexShrink = '0';
  
  const button = document.createElement('button');
  button.className = `octicon-btn ${className}`.trim();
  button.appendChild(svgElement);
  
  if (e && typeof e === 'function') {
    button.addEventListener('click', e);
  }
  
  button.style.width = `${bgSize}px`;
  button.style.height = `${bgSize}px`;
  button.style.border = '1px solid';
  button.style.borderColor = 'var(--borderColor-default, var(--color-border-default, #d0d7de))';
  button.style.borderRadius = '6px';
  button.style.backgroundColor = 'var(--bgColor-default, var(--color-canvas-default, #ffffff))';
  button.style.color = 'var(--fgColor-default, var(--color-fg-default, #1f2328))';
  button.style.display = 'inline-flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.cursor = 'pointer';
  button.style.transition = 'all 0.2s cubic-bezier(0.3, 0, 0.5, 1)';
  button.style.outline = 'none';
  button.style.padding = '0';
  button.style.margin = '0';
  button.style.lineHeight = '1';
  button.style.flexShrink = '0';
  
  const addHoverStyles = () => {
    button.style.backgroundColor = 'var(--bgColor-muted, var(--color-canvas-subtle, #f6f8fa))';
    button.style.borderColor = 'var(--borderColor-emphasis, var(--color-border-emphasis, #858585))';
  };
  
  const removeHoverStyles = () => {
    button.style.backgroundColor = 'var(--bgColor-default, var(--color-canvas-default, #ffffff))';
    button.style.borderColor = 'var(--borderColor-default, var(--color-border-default, #d0d7de))';
  };
  
  button.addEventListener('mouseenter', addHoverStyles);
  button.addEventListener('mouseleave', removeHoverStyles);
  button.addEventListener('focus', addHoverStyles);
  button.addEventListener('blur', removeHoverStyles);
  
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = 'var(--bgColor-emphasis, var(--color-canvas-emphasis, #e6edf3))';
    button.style.borderColor = 'var(--borderColor-emphasis, var(--color-border-emphasis, #858585))';
  });
  
  button.addEventListener('mouseup', removeHoverStyles);
  
  return button;
}

/**
 * Creates a button with icon and label
 * @param {Object} props - Button properties
 * @param {Function} props.icon - Icon function from icons collection
 * @param {string} props.label - Button text label
 * @param {Function} [props.e] - Click event handler
 * @param {string} [props.className] - CSS class name for styling
 * @param {number} [props.size=16] - Icon size in pixels
 * @param {string} [props.fill='currentColor'] - Icon fill color
 * @param {boolean} [props.iconFirst=true] - Whether to show icon before text
 * @returns {HTMLButtonElement} Button element
 */
export function OcticonBtnLabel({ icon, label, e = null, className = '', size = 16, fill = 'currentColor', iconFirst = true }) {
  if (!icon || typeof icon !== 'function') {
    throw new Error('OcticonBtnLabel: icon property is required and must be a function');
  }
  
  if (!label || typeof label !== 'string') {
    throw new Error('OcticonBtnLabel: label property is required and must be a string');
  }

  const svgElement = icon();
  
  svgElement.setAttribute('width', size.toString());
  svgElement.setAttribute('height', size.toString());
  svgElement.setAttribute('fill', fill);
  svgElement.style.display = 'block';
  svgElement.style.flexShrink = '0';
  
  const button = document.createElement('button');
  button.className = `octicon-btn-label ${className}`.trim();
  
  const labelElement = document.createElement('span');
  labelElement.textContent = label;
  labelElement.style.fontSize = '14px';
  labelElement.style.fontWeight = '500';
  labelElement.style.lineHeight = '1.4285714286';
  labelElement.style.display = 'flex';
  labelElement.style.alignItems = 'center';
  labelElement.style.whiteSpace = 'nowrap';
  
  if (iconFirst) {
    button.appendChild(svgElement);
    button.appendChild(labelElement);
  } else {
    button.appendChild(labelElement);
    button.appendChild(svgElement);
  }
  
  if (e && typeof e === 'function') {
    button.addEventListener('click', e);
  }
  
  button.style.border = '1px solid';
  button.style.borderColor = 'var(--borderColor-default, var(--color-border-default, #d0d7de))';
  button.style.borderRadius = '6px';
  button.style.backgroundColor = 'var(--bgColor-default, var(--color-canvas-default, #ffffff))';
  button.style.color = 'var(--fgColor-default, var(--color-fg-default, #1f2328))';
  button.style.display = 'inline-flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.cursor = 'pointer';
  button.style.transition = 'all 0.2s cubic-bezier(0.3, 0, 0.5, 1)';
  button.style.outline = 'none';
  button.style.padding = '5px 16px';
  button.style.gap = '8px';
  button.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
  button.style.minHeight = '32px';
  button.style.margin = '0';
  button.style.lineHeight = '20px';
  button.style.verticalAlign = 'middle';
  button.style.boxSizing = 'border-box';
  button.style.textAlign = 'center';
  button.style.flexShrink = '0';
  
  const addHoverStyles = () => {
    button.style.backgroundColor = 'var(--bgColor-muted, var(--color-canvas-subtle, #f6f8fa))';
    button.style.borderColor = 'var(--borderColor-emphasis, var(--color-border-emphasis, #858585))';
  };
  
  const removeHoverStyles = () => {
    button.style.backgroundColor = 'var(--bgColor-default, var(--color-canvas-default, #ffffff))';
    button.style.borderColor = 'var(--borderColor-default, var(--color-border-default, #d0d7de))';
  };
  
  button.addEventListener('mouseenter', addHoverStyles);
  button.addEventListener('mouseleave', removeHoverStyles);
  button.addEventListener('focus', addHoverStyles);
  button.addEventListener('blur', removeHoverStyles);
  
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = 'var(--bgColor-emphasis, var(--color-canvas-emphasis, #e6edf3))';
    button.style.borderColor = 'var(--borderColor-emphasis, var(--color-border-emphasis, #858585))';
  });
  
  button.addEventListener('mouseup', removeHoverStyles);
  
  return button;
}