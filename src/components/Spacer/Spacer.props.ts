import { StyleProp, ViewStyle } from 'react-native';

export interface SpacerProps {
  style?: StyleProp<ViewStyle>;
  m?: number;
  my?: number;
  mx?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;

  p?: number;
  py?: number;
  px?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
}
