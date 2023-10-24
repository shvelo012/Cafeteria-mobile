import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator, RefreshControl } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { styles } from './HomeScreen.styles';
import FoodItem from '../../components/FoodItem/FoodItem';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { observer } from 'mobx-react';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { scaled } from "../../components/scaler";
import { useFoodData } from './Queries/FoodQuery';
import { useIsOpenData } from './Queries/IsOpenQuery';

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

    const groupedItems: FoodItemType[][] = [];
    for (let i = 0; i < foodItems.length; i += 2) {
        groupedItems.push([foodItems[i], foodItems[i + 1]]);
    }

    return (
        <>
            <View
                style={styles.root}>
                <TouchableHighlight>
                    <Text style={styles.logInButton} onPress={() => navigate(Screens.LoginScreenName)}>
                        Log In
                    </Text>
                </TouchableHighlight>
            </View>

            <ScrollView style={{ paddingTop: scaled(30) }}
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