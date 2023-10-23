import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { styles } from './HomeScreen.styles';
import FoodItem from '../../components/FoodItem/FoodItem';
import { FoodItemType } from '../../types.ts/FoodItemType';
import { themeSpacing } from '../../components/spacer';
import { observer } from 'mobx-react';
import { useFoodStore } from '../../stores/FoodStore/FoodStore.Provider';
import { colors } from "../../components/colors";
import { scaled } from "../../components/scaler";
import { useFoodData } from './Queries/FoodQuery';
import { useIsOpenData } from './Queries/IsOpenQuery';

const HomeScreen: React.FC = observer(() => {
    const foodStore = useFoodStore();
    useEffect(() => {
        foodStore.reset();
    }, [foodStore]);

    const { foodData, foodLoading } = useFoodData();
    const { isOpenData } = useIsOpenData();

    const [foodItems, setFoodItems] = useState<FoodItemType[]>([]);

    useEffect(() => {
        if (foodData && foodData.data) {
            setFoodItems(foodData.data);
        }
    }, [foodData]);

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
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1
                }}>
                <TouchableHighlight>
                    <Text style={styles.logInButton} onPress={() => navigate(Screens.LoginScreenName)}>
                        Log In
                    </Text>
                </TouchableHighlight>
            </View>

            {isOpenData.IsOpen === 0 ? (
                <Text>Cafeteria is closed</Text>
            ) : (
                <ScrollView style={{ paddingTop: scaled(30) }}>
                    <View
                        style={{
                            marginTop: themeSpacing(12),
                            width: '100%',
                            justifyContent: 'flex-start',
                            backgroundColor: colors.appBackground
                        }}
                    >
                        {groupedItems.map((itemPair: FoodItemType[], index: number) => (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: themeSpacing(4),
                                }}
                            >
                                {itemPair.map((item: FoodItemType) => (
                                    <FoodItem key={item.ID} info={item} />
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            )}
        </>
    );
});


export default HomeScreen;