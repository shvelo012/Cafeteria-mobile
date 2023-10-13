import { ReactNode } from 'react';
import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import { ColorTypes } from '../colors';


export enum PossibleVariantsEnum {
  contained = 'contained',
  containedWhite = 'containedWhite',
  outlined = 'outlined',
}

export type ButtonVariantType = keyof typeof PossibleVariantsEnum;

export interface ButtonPressedStateProps {
  isPressed: boolean;
}

export interface ButtonProps extends RNTouchableOpacityProps {
  adornment?: ReactNode;
  width?: number;
  inline?: boolean;
  variant?: ButtonVariantType;
  color?: ColorTypes;
  text: string;
  loading?: boolean;
  fontSize?: number;
}

export interface ButtonStyleProps extends ButtonProps, ButtonPressedStateProps { }
