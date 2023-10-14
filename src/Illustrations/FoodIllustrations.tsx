import React, { FC } from 'react';
import { Image, ImageProps, ImageStyle, StyleSheet } from 'react-native';
import { scaled } from '../components/scaler';

export enum FoodEnum {
  "Pizza" = require('./../Images/Pizza.png'),
  // VisitDoctor = require('./assets/VisitDoctor.png'),
  // ConsultWithDoctor = require('./assets/ConsultWithDoctor.png'),
  // ChangeYourLifeStyle = require('./assets/ChangeYourLifeStyle.png'),
  // KeepDoingThis = require('./assets/KeepDoingThis.png'),
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
