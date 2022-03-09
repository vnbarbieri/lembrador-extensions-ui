import React from 'react';
import { Size, Variant } from 'styled-components';
export declare type ButtonProps = {
    variant?: Variant;
    size?: Size;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
