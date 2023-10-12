import styled from '@emotion/native';

import { RowProps } from './Row.props';

export const Row = styled.View<RowProps>`
  flex-direction: row;
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
