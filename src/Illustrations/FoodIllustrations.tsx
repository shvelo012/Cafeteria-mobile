
import React, {FC} from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';
import {scaled} from '../components/scaler';
import * as Device from 'expo-device';
import {DeviceType} from 'expo-device';

export const deviceType = Device.deviceType;

export enum FoodEnum {
    "პიცა" = require('./../Images/Pizza.png'),
}

export interface FoodIllustrationProps extends Omit<ImageProps, 'source'> {
    food: FoodEnum;
}

export const FoodIllustration: FC<FoodIllustrationProps> = ({food, ...rest}) => {
    return <Image source={food} style={styles.size} resizeMode="contain" {...rest} />;
};

const styles = StyleSheet.create(

    (deviceType === DeviceType.PHONE ?
            {
                size: {
                    height: scaled(63),
                    width: scaled(63)
                },
            } : {
              size: {
                height: scaled(60),
                width: scaled(120)
              }}
    ));
