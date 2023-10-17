import React, { FC } from 'react';
import { Image, ImageProps, StyleSheet } from 'react-native';
import { scaled } from '../components/scaler';

export enum FoodEnum {
  "Pizza" = require('./../Images/Pizza.png'),
}

export interface FoodIllustrationProps extends Omit<ImageProps, 'source'> {
  food: FoodEnum;
}

export const FoodIllustration: FC<FoodIllustrationProps> = ({ food, ...rest }) => {
  return <Image source={food} style={styles.size} {...rest} />;
};

const styles = StyleSheet.create({
  size: {
    height: scaled(60),
    width: scaled(120)
  },
});
