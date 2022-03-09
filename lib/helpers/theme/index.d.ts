import { Size, Theme } from 'styled-components';
export interface SetSize {
    theme: Theme;
    size: Size;
}
export declare const getStyles: (theme: Theme) => string;
export declare const setHeight: ({ theme, size }: SetSize) => string;
declare const _default: {
    getStyles: (theme: Theme) => string;
    setHeight: ({ theme, size }: SetSize) => string;
};
export default _default;
