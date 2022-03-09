import { Size, Theme } from 'styled-components';

export interface SetSize {
  theme: Theme;
  size: Size;
}

export const getStyles = (theme: Theme): string =>
  Object.entries(theme)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return `${key} {${Object.entries(value)
          .map(([k, v]) => `${k}:${v}`)
          .join(';')}}`;
      }
      return `${key}:${value}`;
    })
    .join(';');

export const setHeight = ({ theme, size }: SetSize): string => `height: ${theme.height[size]}`;

export default {
  getStyles,
  setHeight,
};
