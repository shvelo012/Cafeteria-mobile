import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
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
import { colors } from "../../components/colors";
import {scaled} from "../../components/scaler";

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

    if (!data || isLoading || error) {
        return (
            <View>
                <Text>Loading...</Text>
                <ActivityIndicator />
            </View>
        );
    }


    const groupedItems: FoodItemType[][] = [];
    for (let i = 0; i < data.data.length; i += 2) {
        groupedItems.push([data.data[i], data.data[i + 1]]);
    }

    return (
        <>

            <View style={{
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


            <ScrollView style={{paddingTop: scaled(30)}}>
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
        </>
    );
});

export default HomeScreen;
