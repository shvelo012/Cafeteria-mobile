import React from 'react';
import { Text, View } from 'react-native';
import { FoodItemProps } from './FoodItem.props';
import { styles } from './FoodItem.styles';
// @ts-ignore
import { FoodEnum, FoodIllustration } from '../../Illustrations/FoodIllustrations';

const FoodItem: React.FC<FoodItemProps> = ({ info }) => {
  if (!info) {
    return;
  }
  return (

    <View style={styles.foodContainer}>
      <View>
        {info.Name && (
          <FoodIllustration
            food={FoodEnum[info.Name as keyof typeof FoodEnum]}
            style={styles.foodImage}
          />
        )}
      </View>
      <View >
        <Text style={styles.title}>{info.Name}</Text>
      </View>
      <View >
        <Text style={styles.price}>{info.Price} GEL</Text>
        <Text style={styles.quantity}>რაოდ: {info.Quantity}</Text>
      </View>
    </View>
  );
};

export default FoodItem;
