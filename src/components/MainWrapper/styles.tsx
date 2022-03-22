import styled from 'styled-components';

import type { IStyledMainWrapper } from 'src/interfaces';

export const MainWrapper = styled.div<IStyledMainWrapper>`
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  padding: ${({ $padding }) => $padding || '12px'};
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;
