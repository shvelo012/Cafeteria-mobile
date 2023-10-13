import { StyleSheet } from 'react-native';

import { scaled } from '../scaler';
import { ColorTypes, colors } from '../colors';
import { themeSpacing } from '../spacer';


import { ButtonStyleProps, ButtonVariantType, PossibleVariantsEnum } from './Button.props';

interface BgStateInterface {
  default: ColorTypes;
  pressed: ColorTypes;
}

interface BgVariantInterface {
  primary: BgStateInterface;
  secondary: BgStateInterface;
  tertiary: BgStateInterface;
}

const buttonBackgroundColor = {
  [PossibleVariantsEnum.contained]: {
    primary: {
      default: colors.primary,
      pressed: colors.primaryActive,
    },
    secondary: {
      default: colors.secondary,
      pressed: colors.secondaryActive,
    },
    tertiary: {
      default: colors.mediumPurple,
      pressed: colors.mediumPurpleActive,
    },
  },
  [PossibleVariantsEnum.containedWhite]: {
    default: colors.white,
    pressed: colors.whiteActive,
  },
  [PossibleVariantsEnum.outlined]: {
    default: colors.transparent,
    pressed: colors.whiteActive,
  },
};

const getBackgroundColor = (variant: ButtonVariantType, color: ColorTypes, isPressed: boolean) => {
  let bgState = buttonBackgroundColor[variant];

  if (variant === PossibleVariantsEnum.contained) {
    bgState = (bgState as BgVariantInterface)[color as keyof BgVariantInterface];
  }

  if (bgState) {
    return isPressed ? (bgState as BgStateInterface).pressed : (bgState as BgStateInterface).default;
  }

  if (color) {
    return colors[color];
  }

  return colors.white;
};

const getDisabledColor = (color: ColorTypes) => colors[`${color}Disabled` as ColorTypes] || colors.primaryDisabled;

export const ButtonStyles = ({
  variant = PossibleVariantsEnum.contained,
  color = 'primary',
  isPressed,
  disabled,
  loading,
  inline,
  adornment,
  width,
  fontSize,
}: ButtonStyleProps) =>
  StyleSheet.create({
    root: {
      alignSelf: inline || adornment ? 'flex-start' : undefined,
      shadowColor: colors.primary,
      shadowOpacity: 0.4,
      shadowOffset: { width: 2, height: 3 },
      borderRadius: themeSpacing(10),
      paddingVertical: themeSpacing(1.75),
      paddingHorizontal: themeSpacing(inline || adornment ? 2.5 : 10),
      backgroundColor: disabled || loading ? getDisabledColor(color) : getBackgroundColor(variant, color, isPressed),
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: variant === PossibleVariantsEnum.outlined ? colors[color] : colors.transparent,
      width: width ? width : undefined,
    },
    text: {
      marginLeft: adornment ? themeSpacing(2) : 0,
      color: variant === PossibleVariantsEnum.contained ? colors.white : colors[color],
      textAlign: 'center',
      fontSize: fontSize ? scaled(fontSize) : scaled(17),
      fontWeight: 'bold',
    },
  });
