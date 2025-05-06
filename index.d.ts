declare module 'octicons-js' {
  export interface IconSet {
    [key: string]: string;
  }

  const Octicons: IconSet;

  export function octicon(
    svg: string,
    size?: number,
    style?: 'light' | 'dark'
  ): HTMLSpanElement;

  export function octiconBtn(
    svg: string,
    style?: 'light' | 'dark',
    size?: number,
    buttonSize?: number | null
  ): HTMLButtonElement;

  export function octiconLabelBtn(
    svg: string,
    label: string,
    style?: 'light' | 'dark',
    size?: number,
    iconFirst?: boolean
  ): HTMLButtonElement;

  export interface IconSizes {
    12?: string;
    16?: string;
    24?: string;
    48?: string;
    96?: string;
    [size: number]: string | undefined;
  }

  /**
   * eg. icons.alert[16]
   * eg. icons['file-directory'][24]
   */
  export const icons: {
    [name: string]: IconSizes;
  };

  export interface IconOptions {
    size?: number;
    style?: 'light' | 'dark';
  }

  export interface IconButtonOptions extends IconOptions {
    buttonSize?: number;
  }

  export interface LabelButtonOptions extends IconOptions {
    iconFirst?: boolean;
  }

  export function icon(name: string, options?: IconOptions): HTMLSpanElement;
  
  export function iconButton(name: string, options?: IconButtonOptions): HTMLButtonElement;
  
  export function labelButton(
    name: string, 
    label: string, 
    options?: LabelButtonOptions
  ): HTMLButtonElement;

  export interface ButtonsObject {
    [iconName: string]: (label?: string) => HTMLButtonElement;
    [iconMethodName: `${string}Icon`]: () => HTMLButtonElement;
  }

  export const buttons: ButtonsObject;

  export default Octicons;
}