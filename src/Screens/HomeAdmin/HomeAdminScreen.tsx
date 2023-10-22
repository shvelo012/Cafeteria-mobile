import React from 'react';
import { ActivityIndicator, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { styles } from './HomeAdminScreen.styles';
import FoodItemAdmin from '../../components/FoodItemAdmin/FoodItemAdmin';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { useMutation, useQuery } from '@tanstack/react-query';
import { DeviceApi } from '../../API/API';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { observer } from 'mobx-react';
import axios from 'axios';
const getFoodAPI = `http://${DeviceApi}:4000/food/all`;
const closeStoreAPI = `http://${DeviceApi}:4000/admin/setIsOpen`;


const HomeAdminScreen: React.FC = observer(() => {
  const { addFoodItems, foodItems } = useFoodStore();

  const fetchDataFunction = async () => {
    try {
      const response = await fetch(getFoodAPI);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      addFoodItems(data.data);
      return data;

    } catch (error) {
      throw error;
    }
  };

  const { error, isLoading } = useQuery({ queryKey: ['food'], queryFn: fetchDataFunction });

  const closeCafeteriaMutation = useMutation({
    mutationFn: (setIsOpen: { IsOpen: number }) => {
      return axios.post(closeStoreAPI, setIsOpen);
    },
  });


  if (!foodItems || error || isLoading) {
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
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => closeCafeteriaMutation.mutate({ IsOpen: 0 })}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
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
