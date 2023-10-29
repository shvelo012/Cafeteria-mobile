import { FlexStyle } from 'react-native';

import { ColorTypes } from '../components/colors';

export interface ScreenRootProps extends Pick<FlexStyle, 'justifyContent' | 'alignItems'> {
  backgroundColor?: ColorTypes;
}

export interface ScreenContentProps {
  noPadding?: boolean;
}
