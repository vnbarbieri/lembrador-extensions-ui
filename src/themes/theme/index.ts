import { Border, Buttons, Font, Pallete, Sizes, Theme, Typography } from 'styled-components';

import base from '../base';

export const width: Sizes = {
  main: '100%',
  xsmall: '24px',
  small: '32px',
  medium: '64px',
  large: '96px',
  xlarge: '128px',
};

export const height: Sizes = {
  main: '100%',
  xsmall: '24px',
  small: '32px',
  medium: '48px',
  large: '64px',
  xlarge: '96px',
};

export const border: Border = {
  width: { main: '2px' },
  radius: { main: '16px' },
};

export const palette: Pallete = {
  primary: { main: '#2A2A2A', dark: '#767676', light: '#A9A9A9' },
  secondary: { main: '#F34986', dark: '#FD9CBF', light: '#FFE8F2' },
  body: { main: '#FFFFFF', dark: '', light: '' },
  silver: { main: 'DDDDDD', dark: '', light: '#ECECEC' },
  green: { main: '#43A496', dark: '#43A496', light: '#43A496' },
  white: { main: '#FFFFFF', dark: '#FFFFFF', light: '#FFFFFF' },
  transparent: { main: 'transparent', dark: 'transparent', light: 'transparent' },
};

export const font: Font = {
  primary: { 'font-family': 'Hero New' },
  ...base.font,
};

export const text: Typography = {
  primary: { 'font-size': font.sizes.main, color: palette.primary.main },
  secondary: { 'font-size': font.sizes.small, color: palette.primary.dark },
};

export const button: Buttons = {
  primary: {
    ...text.primary,
    ...base.button,
    width: width.xlarge,
    height: height.medium,
    color: palette.white.main,
    border: `solid ${palette.primary.main} ${border.width.main}`,
    'border-radius': border.radius.main,
    background: palette.primary.main,
    '&:hover': {
      background: palette.primary.dark,
      'border-color': palette.primary.dark,
    },
    '&:disabled': {
      background: palette.silver.light,
      'border-color': palette.silver.light,
      color: palette.primary.dark,
    },
  },
  secondary: {
    ...text.primary,
    ...base.button,
    width: width.xlarge,
    height: height.medium,
    color: palette.primary.main,
    border: `solid ${palette.primary.main} ${border.width.main}`,
    'border-radius': border.radius.main,
    background: palette.transparent.main,
    '&:hover': {
      background: palette.secondary.light,
    },
    '&:disabled': {
      background: palette.transparent.main,
      'border-color': palette.silver.light,
      color: palette.primary.dark,
    },
  },
};

const theme: Theme = {
  height,
  width,
  border,
  font,
  palette,
  button,
};

export default theme;
