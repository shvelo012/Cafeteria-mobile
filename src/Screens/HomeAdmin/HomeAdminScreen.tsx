import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { styles } from './HomeAdminScreen.styles';
import FoodItemAdmin from '../../components/FoodItemAdmin/FoodItemAdmin';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { useMutation } from '@tanstack/react-query';
import { DeviceApi } from '../../API/API';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Row } from '../../components/row/Row';
import { useFoodData } from '../Home/Queries/FoodQuery';
const closeStoreAPI = `http://${DeviceApi}:4000/admin/setIsOpen`;


const HomeAdminScreen: React.FC = observer(() => {
  const { addFoodItems, foodItems } = useFoodStore();
  const foodQuery = useFoodData();
  const { foodData } = foodQuery;
  useEffect(() => {
    addFoodItems(foodData.data);
  }, [foodData.data]);

  const closeCafeteriaMutation = useMutation({
    mutationFn: (setIsOpen: { IsOpen: number }) => {
      return axios.post(closeStoreAPI, setIsOpen);
    },
  });

  // const resetQuantityMutation = useMutation({
  //   mutationFn: 
  // })


  if (!foodItems || foodQuery.foodError || foodQuery.foodLoading) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <View style={styles.headerMargin}>
        <Header leftIcon={<ArrowLeft />} onLeftIconPress={() => navigate(Screens.LoginScreenName)} />
      </View>
      <View style={styles.screenRoot}>
        <ScrollView>
          <Row>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => closeCafeteriaMutation.mutate({ IsOpen: 0 })}>
                <Text style={styles.closeButtonText}>დაკეტვა</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.closeTemporaryButtonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => closeCafeteriaMutation.mutate({ IsOpen: 0 })}>
                <Text style={styles.closeButtonText}>დროებით დაკეტვა</Text>
              </TouchableOpacity>
            </View>
          </Row>
          <View style={styles.foodViewWrapper}>
            {foodItems && foodItems.map((item: FoodItemType) => (
              <FoodItemAdmin key={item.ID} info={item} />
            ))}
          </View>
        </ScrollView>
      </View>

    </>
  );
});

export default HomeAdminScreen;
