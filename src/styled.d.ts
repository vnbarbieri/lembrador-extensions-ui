import 'styled-components';

declare module 'styled-components' {
  export type Variant = 'primary' | 'secondary';
  export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

  export interface MainSize {
    main: string;
  }

  export interface Sizes extends MainSize {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  }

  export interface Colors {
    main: string;
    dark: string;
    light: string;
  }

  export interface Pallete {
    primary: Colors;
    secondary: Colors;
    [key: string]: Colors;
  }

  export interface FontFamily {
    'font-family': string;
  }

  export interface Font {
    primary?: FontFamily;
    sizes: Sizes;
  }

  export interface Text {
    'font-size': string;
    color: string;
  }

  export interface Typography {
    primary: Text;
    secondary: Text;
  }

  export interface Border {
    width: MainSize;
    radius: MainSize;
  }

  export interface DisplayFlex {
    display: string;
    'justify-content': string;
    'align-items': string;
  }

  export interface BaseButton extends DisplayFlex {
    'font-weight': string | number;
    'font-size': string;
    cursor: string;
  }

  export interface Buttons {
    primary: BaseButton & { [key: string]: string | number | object };
    secondary: BaseButton & { [key: string]: string | number | object };
    [key: string]: BaseButton & { [key: string]: string | number | object };
  }

  export interface BaseTheme {
    font: Font;
    button: BaseButton;
  }

  export interface Theme {
    palette: Pallete;
    width: Sizes;
    height: Sizes;
    border: Border;
    font: Font;
    button: Button;
  }
}
