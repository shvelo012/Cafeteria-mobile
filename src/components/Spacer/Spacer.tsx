import React, { FC, PropsWithChildren } from 'react';

import { SpacerProps } from './Spacer.props';
import { StyledSpacer } from './Spacer.styles';

export const Spacer: FC<PropsWithChildren<SpacerProps>> = props => {
  const { children, ...rest } = props;
  return <StyledSpacer {...rest}>{children}</StyledSpacer>;
};
