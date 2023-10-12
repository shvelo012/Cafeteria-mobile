import styled from '@emotion/native';

import { spacer } from '../spacer';

import { SpacerProps } from './Spacer.props';

const getMargins = ({ m, my, mx, mt, mb, ml, mr }: SpacerProps): string => {
  mt = mt ?? my ?? m ?? 0;
  mb = mb ?? my ?? m ?? 0;
  ml = ml ?? mx ?? m ?? 0;
  mr = mr ?? mx ?? m ?? 0;

  return spacer(mt, mr, mb, ml);
};

const getPaddings = ({ p, py, px, pt, pb, pl, pr }: SpacerProps): string => {
  pt = pt ?? py ?? p ?? 0;
  pb = pb ?? py ?? p ?? 0;
  pl = pl ?? px ?? p ?? 0;
  pr = pr ?? px ?? p ?? 0;

  return spacer(pt, pr, pb, pl);
};

export const StyledSpacer = styled.View<SpacerProps>`
  margin: ${getMargins};
  padding: ${getPaddings};
`;
