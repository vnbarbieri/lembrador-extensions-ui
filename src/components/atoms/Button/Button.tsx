import React from 'react';
import { Size, Variant } from 'styled-components';

import Styled from './Button.styles';

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...others }) => {
  const Component = variant === 'primary' ? Styled.Primary : Styled.Secondary;

  return <Component {...others}>{children}</Component>;
};

export default Button;
