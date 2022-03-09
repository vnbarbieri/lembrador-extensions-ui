import styled from 'styled-components';

import { getStyles, setHeight } from '../../../helpers/theme';
import { ButtonProps } from './Button';

const Primary = styled.button<Pick<ButtonProps, 'size'>>`
  ${({ theme }): string => getStyles(theme.button.primary)}
  ${({ theme, size = 'medium' }): string => setHeight({ theme, size })}
`;

const Secondary = styled.button<Pick<ButtonProps, 'size'>>`
  ${({ theme }): string => getStyles(theme.button.secondary)}
  ${({ theme, size = 'medium' }): string => setHeight({ theme, size })}
`;

export default {
  Primary,
  Secondary,
};
