import { FlexStyle } from 'react-native';

export interface RowProps extends Pick<FlexStyle, 'justifyContent' | 'alignItems' | 'flexWrap' | 'flexDirection'> {}
