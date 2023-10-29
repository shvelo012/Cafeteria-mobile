import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator, RefreshControl } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { styles } from './HomeScreen.styles';
import FoodItem from '../../components/FoodItem/FoodItem';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { observer } from 'mobx-react';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { useFoodData } from './Queries/FoodQuery';
import { useIsOpenData } from './Queries/IsOpenQuery';
import { DeviceType, deviceType } from "expo-device";
import { Spacer } from '../../components/Spacer';

const HomeScreen: React.FC = observer(() => {
    const foodStore = useFoodStore();
    useEffect(() => {
        foodStore.reset();
    }, [foodStore]);

    const { foodData, foodLoading, foodRefetch } = useFoodData();
    const { isOpenData, isOpenRefetch } = useIsOpenData();

    const [foodItems, setFoodItems] = useState<FoodItemType[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    useEffect(() => {
        if (foodData && foodData.data) {
            setFoodItems(foodData.data);
        }
    }, [foodData]);

    const onRefresh = () => {
        foodRefetch();
        isOpenRefetch();
        setRefreshing(false);
    };

    if (!foodData || !isOpenData || foodLoading) {
        return (
            <View>
                <Text>Loading...</Text>
                <ActivityIndicator />
            </View>
        );
    }



    const itemsPerRow = deviceType === DeviceType.PHONE ? 2 : 3;  // 2 for mobile 3 for tablet

    const groupedItems: FoodItemType[][] = [];
    for (let i = 0; i < foodItems.length; i += itemsPerRow) {
        groupedItems.push(foodItems.slice(i, i + itemsPerRow));
    }
    return (
        <>
            <View style={styles.logInButton}>
                <Spacer px={3} py={4}>
                    <TouchableHighlight>
                        <Text style={styles.LogIntext} onPress={() => navigate(Screens.LoginScreenName)}>
                            Log In
                        </Text>
                    </TouchableHighlight>
                </Spacer>
            </View>
            <ScrollView style={styles.HomeScreenContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {isOpenData.IsOpen === 0 ? (
                    <View style={styles.closedTextWrapper}>
                        <Text style={styles.closedText}>
                            კაფეტერია დაკეტილია
                        </Text>
                    </View>

                ) : (
                    <View
                        style={styles.foodWrapper}
                    >
                        {groupedItems.map((itemPair: FoodItemType[], index: number) => (
                            <View
                                key={index}
                                style={styles.itemWrapper}
                            >
                                {itemPair.map((item: FoodItemType) => (
                                    <FoodItem key={item.ID} info={item} />
                                ))}
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </>
    );
});


export default HomeScreen;