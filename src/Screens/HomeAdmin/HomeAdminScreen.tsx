import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { styles } from './HomeAdminScreen.styles';
import FoodItemAdmin from '../../components/FoodItemAdmin/FoodItemAdmin';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { useMutation } from '@tanstack/react-query';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Row } from '../../components/row/Row';
import { useFoodData } from '../Home/Queries/FoodQuery';
import { Spacer } from '../../components/Spacer';
import { APIs } from '../../APIs/APIs';
import { Root } from '../../ScreenRoot/ScreenRoot';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeAdminScreen: React.FC = observer(() => {
  const [isCafeteriaOpen, setIsCafeteriaOpen] = useState<boolean>(true);
  const { addFoodItems, foodItems, reset } = useFoodStore();
  const foodQuery = useFoodData();
  const { foodData } = foodQuery;
  useEffect(() => {
    addFoodItems(foodData.data);
  }, [foodData.data]);

  const closeCafeteriaMutation = useMutation({
    mutationFn: (setIsOpen: { IsOpen: number }) => {
      return axios.post(APIs.IsStoreOpenAPI, setIsOpen);
    },
  });

  const openCafeteriaMutation = useMutation({
    mutationFn: (setIsOpen: { IsOpen: number }) => {
      return axios.post(APIs.IsStoreOpenAPI, setIsOpen);
    },
  });

  const resetQuantityMutation = useMutation({
    mutationFn: () => {
      return axios.post(APIs.resetQuantityAPI);
    },
  });

  const handleTemporaryClose = () => {
    closeCafeteriaMutation.mutate({ IsOpen: 0 });
    setIsCafeteriaOpen(false);
  };

  const handleOpen = () => {
    openCafeteriaMutation.mutate({ IsOpen: 1 });
    setIsCafeteriaOpen(true);
  }

  const handleClose = () => {
    closeCafeteriaMutation.mutateAsync({ IsOpen: 0 });
    resetQuantityMutation.mutateAsync();
    reset();
    navigate(Screens.LoginScreenName);
  };

  const handleQuitButtonPress = () => {
    Alert.alert(
      'Confirmation',
      'გსურთ დახუროთ მაღაზია და გახვიდეტ?',
      [
        {
          text: 'არა',
          style: 'cancel',
        },
        {
          text: 'დიახ',
          onPress: () => {
            handleClose()
          },
        },
      ],
      { cancelable: false }
    );
  };


  if (!foodItems || foodQuery.foodError) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Root>
        <Header leftIcon={<ArrowLeft />} onLeftIconPress={() => navigate(Screens.LoginScreenName)} />
        <ScrollView>
          <Row>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={handleQuitButtonPress}>
                <Text style={styles.closeButtonText}>დაკეტვა</Text>
              </TouchableOpacity>
            </View>
            {isCafeteriaOpen ?
              <View style={styles.closeTemporaryButtonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={() => handleTemporaryClose()}>
                  <Text style={styles.closeButtonText}>დროებით დაკეტვა</Text>
                </TouchableOpacity>
              </View>
              :
              <View style={styles.closeTemporaryButtonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={() => handleOpen()}>
                  <Text style={styles.closeButtonText}>გაღება</Text>
                </TouchableOpacity>
              </View>
            }
          </Row>
          <View style={styles.foodViewWrapper}>
            {foodItems && foodItems.map((item: FoodItemType) => (
              <FoodItemAdmin key={item.ID} info={item} />
            ))}
          </View>
          <Spacer p={5} />
        </ScrollView>
      </Root>
    </SafeAreaView>
  );
});

export default HomeAdminScreen;
