import React, { Fragment } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { styles } from './HomeScreen.styles';
import { DeviceApi } from '../../API/API';
import { useQuery } from '@tanstack/react-query';
import FoodItem from '../../components/FoodItem/FoodItem';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { themeSpacing } from '../../components/spacer';
const getFoodAPI = `http://${DeviceApi}:4000/food/all`;

const fetchDataFunction = async () => {
  try {
    const response = await fetch(getFoodAPI);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
};

const HomeScreen: React.FC = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['food'], queryFn: fetchDataFunction });

  if (!data) {
    return;
  }

  return (
    <>
      {/* header */}
      <View>
        <Text style={styles.logInButton} onPress={() => navigate(Screens.LoginScreenName)}> Log In  </Text>
      </View>
      <ScrollView>
        <View>
          <View style={{
            width: '100%',
            justifyContent: 'flex-start',
          }}>
            {data && data.data.map((item: FoodItemType) => (
              <FoodItem key={item.ID} info={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
