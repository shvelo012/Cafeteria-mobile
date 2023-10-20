import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FoodItemAdminProps } from './FoodItemAdmin.props';
import { Spacer } from '../Spacer';
import { themeSpacing } from '../spacer';
import { FoodEnum, FoodIllustration } from '../../Illustrations/FoodIllustrations';
import { styles } from './FoodItemAdmin.styles';
import { Row } from '../row/Row';
import { Minus, Plus } from '../../icons';
import { Button } from '../Button/Button';
import { useMutation } from '@tanstack/react-query';
import { DeviceApi } from '../../API/API';
import axios from 'axios';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { observer } from 'mobx-react';
const getCredentialsAPI = `http://${DeviceApi}:4000/food/changeQuantity`;

const FoodItemAdmin: React.FC<FoodItemAdminProps> = observer(({ info }) => {

  const [quantity, setQuantity] = useState<number>();
  const { foodItems, changeQuantity } = useFoodStore();

  const UpdateQuantityMutation = useMutation({
    mutationFn: (UpdateQuantity: { Quantity: number, Id: number }) => {
      return axios.post(getCredentialsAPI, UpdateQuantity)
    },
  })
  useEffect(() => {
    setQuantity(info?.Quantity);
  }, []);
  if (!info) {
    return;
  }

  const handleSave = () => {
    UpdateQuantityMutation.mutate({ Quantity: quantity!, Id: info.ID });
    changeQuantity(quantity!, info.ID);
  }


  console.log(quantity, info.Quantity)


  return (

    <Spacer m={themeSpacing(1)} style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{info.Name}</Text>
      </View>
      {info.Name && <FoodIllustration food={FoodEnum[info.Name as keyof typeof FoodEnum]} />}
      <View style={styles.titleWrapper}>
        <Text style={styles.text}>ფასი: {info.Price}</Text>

        <Row style={styles.plusAndMinus}>
          <TouchableOpacity onPress={() => setQuantity(prevQuantity => prevQuantity! - 1)}>
            <Minus />
          </TouchableOpacity>

          <Text style={styles.text}>{quantity}</Text>

          <TouchableOpacity onPress={() => setQuantity(prevQuantity => prevQuantity! + 1)}>
            <Plus />
          </TouchableOpacity>
        </Row>

        <View style={styles.buttonWrapper}>
          <Button
            text='Save'
            onPress={() => handleSave()}
            disabled={quantity === foodItems.find(item => item.ID === info.ID)?.Quantity}
            color='red'
            loading={UpdateQuantityMutation.isLoading}
            inline
            style={{ alignSelf: 'center' }} />
        </View>

      </View>
    </Spacer >
  );
});

export default FoodItemAdmin;
