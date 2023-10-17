import React from 'react';
import { Text, View } from 'react-native';
import { FoodItemProps } from './FoodItem.props';
import { styles } from './FoodItem.styles';
import { Spacer } from '../Spacer';
import { themeSpacing } from '../spacer';
import { FoodEnum, FoodIllustration } from '../../Illustrations/FoodIllustrations';
import { scaled } from '../scaler';

const FoodItem: React.FC<FoodItemProps> = ({ info }) => {
  console.log(info);
  if (!info) {
    return;
  }
  return (

    <Spacer m={themeSpacing(1)} style={{ borderWidth: 2, width: scaled(130) }}>
      <View style={{ borderBottomWidth: 1 }}>
        <Text style={styles.title}>{info.Name}</Text>
      </View>
      {info.Name && <FoodIllustration food={FoodEnum[info.Name as keyof typeof FoodEnum]} />}
      <View style={{ borderTopWidth: 1 }}>
        <Text style={{ alignSelf: 'center' }}>{info.Price}</Text>
        <Text style={{ alignSelf: 'center' }}>რაოდ:{info.Quantity}</Text>
      </View>
    </Spacer >
  );
};

export default FoodItem;
