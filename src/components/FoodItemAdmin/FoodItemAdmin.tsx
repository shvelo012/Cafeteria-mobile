import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FoodItemAdminProps } from './FoodItemAdmin.props';
import { FoodEnum, FoodIllustration } from '../../Illustrations/FoodIllustrations';
import { styles } from './FoodItemAdmin.styles';
import { Row } from '../row/Row';
import { Minus, Plus } from '../../icons';
import { Button } from '../Button/Button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { observer } from 'mobx-react';
import { APIs } from '../../APIs/APIs';

const FoodItemAdmin: React.FC<FoodItemAdminProps> = observer(({ info }) => {

  const [quantity, setQuantity] = useState<number>(0);
  const [showFullText, setShowFullText] = useState(false);
  const { foodItems, changeQuantity } = useFoodStore();

  const UpdateQuantityMutation = useMutation({
    mutationFn: (UpdateQuantity: { Quantity: number, Id: number }) => {
      return axios.post(APIs.getCredentialsAPI, UpdateQuantity)
    },
  })
  useEffect(() => {
    setQuantity(info?.Quantity ?? 0);
  }, []);
  if (!info) {
    return;
  }

  const handleSave = () => {
    UpdateQuantityMutation.mutate({ Quantity: quantity!, Id: info.ID });
    changeQuantity(quantity!, info.ID);
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (

    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity
          onPress={() => setShowFullText(!showFullText)}
        >
          <Text numberOfLines={showFullText ? 0 : 1} ellipsizeMode="tail" style={styles.title}>
            {info.Name}
          </Text>
        </TouchableOpacity>
      </View>

      <FoodIllustration style={styles.ilustrationSize} food={FoodEnum[info.Name as keyof typeof FoodEnum]} />

      <View style={styles.titleWrapper}>
        <Text style={styles.text}>ფასი: {info.Price}</Text>
        <Text style={styles.text}>{quantity}</Text>

        <Row style={styles.plusMinusSaveRow}>
          <TouchableOpacity
            style={styles.touchableMinus}
            onPress={() => decreaseQuantity()}>
            <Minus />
          </TouchableOpacity>

          <Button
            text='Save'
            onPress={() => handleSave()}
            disabled={quantity === foodItems.find(item => item.ID === info.ID)?.Quantity}
            color='red'
            loading={UpdateQuantityMutation.isLoading}
            inline
            style={styles.button}
          />

          <TouchableOpacity
            style={styles.touchablePlus}
            onPress={() => setQuantity(prevQuantity => prevQuantity! + 1)}>
            <Plus />
          </TouchableOpacity>
        </Row>
      </View>
    </View>
  );
});

export default FoodItemAdmin;
