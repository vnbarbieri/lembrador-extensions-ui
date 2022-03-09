import { Font, BaseTheme, BaseButton } from 'styled-components';

const font: Font = {
  sizes: {
    main: '16px',
    xsmall: '10px',
    small: '12px',
    medium: '14px',
    large: '20px',
    xlarge: '26px',
  },
};

const button: BaseButton = {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-weight': 700,
  'font-size': font.sizes.medium,
  cursor: 'pointer',
};

const base: BaseTheme = {
  button,
  font,
};

export default base;
