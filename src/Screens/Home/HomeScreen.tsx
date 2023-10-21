import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native'; // Import ActivityIndicator
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { styles } from './HomeScreen.styles';
import { DeviceApi } from '../../API/API';
import { useQuery } from '@tanstack/react-query';
import FoodItem from '../../components/FoodItem/FoodItem';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { themeSpacing } from '../../components/spacer';
import { observer } from 'mobx-react';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';

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

const HomeScreen: React.FC = observer(() => {
  const foodStore = useFoodStore();
  useEffect(() => foodStore.reset(), []);

  const { data, error, isLoading } = useQuery({ queryKey: ['food'], queryFn: fetchDataFunction });

  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <TouchableHighlight style={{ zIndex: 1, position: 'relative', borderWidth: 2 }}>
        <Text style={styles.logInButton} onPress={() => navigate(Screens.LoginScreenName)}>
          Log In
        </Text>
      </TouchableHighlight>
      <ScrollView>
        <View
          style={{
            marginTop: themeSpacing(12),
            width: '100%',
            justifyContent: 'flex-start',
            borderWidth: 2,
          }}
        >
          {data && data.data.map((item: FoodItemType) => (
            <FoodItem key={item.ID} info={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
});

export default HomeScreen;
