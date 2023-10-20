import React from 'react';
import { ScrollView, View } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { styles } from './HomeAdminScreen.styles';
import FoodItemAdmin from '../../components/FoodItemAdmin/FoodItemAdmin';
import { themeSpacing } from '../../components/spacer';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { useQuery } from '@tanstack/react-query';
import { DeviceApi } from '../../API/API';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { observer } from 'mobx-react';
const getFoodAPI = `http://${DeviceApi}:4000/food/all`;


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

  const { data, error, isLoading } = useQuery({ queryKey: ['food'], queryFn: fetchDataFunction });
  if (!foodItems) {
    return;
  }

  return (
    <>
      <View style={styles.screenRoot}>
        <Header leftIcon={<ArrowLeft />} onLeftIconPress={() => navigate(Screens.LoginScreenName)} />
        <ScrollView>
          <View style={{
            marginTop: themeSpacing(12),
            width: '100%',
            justifyContent: 'flex-start',
            borderWidth: 2,

          }}>
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
