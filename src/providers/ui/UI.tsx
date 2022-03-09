import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../themes';

export interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider: React.FC<UIProviderProps> = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default UIProvider;
