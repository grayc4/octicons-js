export interface IconProps {
  size?: number;
  fill?: string;
  style?: string;
  bgSize?: number;
}

export type IconFn = (props?: IconProps) => SVGElement | string;

export interface ButtonProps extends IconProps {
  label?: string;
  bgColor?: string;
  bgSize?: number;
  fill?: string;
}

export type ButtonFn = (props?: ButtonProps) => HTMLElement | string;

export const icons: Record<string, IconFn>;

/**
 * @param name The name of the icon
 * @param props Optional properties to customize the icon
 */
export function icon(name: string, props?: IconProps): SVGElement | string;

/**
 * @param name The name of the icon
 * @param props Optional properties to customize the button and the icon
 */
export function iconButton(name: string, props?: ButtonProps): HTMLElement | string;

export function applyStyles(): void;

export function applyOcticonsStyles(): void;

export const essentialCSS: string;

declare const _default: {
  icons: Record<string, IconFn>;
  icon: typeof icon;
  iconButton: typeof iconButton;
  applyStyles: typeof applyStyles;
  applyOcticonsStyles: typeof applyOcticonsStyles;
};
export default _default;

declare module 'icons/*' {
  const fn: IconFn;
  export default fn;
}
