import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { FoodItemProps } from './FoodItem.props';
import { styles } from './FoodItem.styles';
// @ts-ignore
import { FoodEnum, FoodIllustration } from '../../Illustrations/FoodIllustrations';
import {ArrowLeft} from "../../icons";

const FoodItem: React.FC<FoodItemProps> = ({ info }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    if (!info) {
        return null;
    }

    return (
        <View style={styles.foodContainer}>
            <TouchableOpacity onPress={toggleModal}>
                <View>
                    {info.Name && (
                        <FoodIllustration
                            food={FoodEnum[info.Name as keyof typeof FoodEnum]}
                            style={styles.foodImage}
                        />
                    )}
                </View>

            <View>
                <Text style={styles.title}>{info.Name}</Text>
            </View>
            <View>
                <Text style={styles.price}>{info.Price} GEL</Text>
                <Text style={styles.quantity}>რაოდ: {info.Quantity}</Text>
            </View>





            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={toggleModal}>
                            <View>{<ArrowLeft />}</View>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{info.Name}</Text>
                        <Text style={styles.ingridients}>
                            {info.Ingredients.split(',').map((ingredient, index) => (
                                <Text key={index}>
                                    {"\u2022"}
                                    {ingredient.trim()}
                                    {"\n"}
                                </Text>
                            ))}
                        </Text>
                        <View>
                            {info.Name && (
                                <FoodIllustration
                                    food={FoodEnum[info.Name as keyof typeof FoodEnum]}
                                    style={styles.modalFoodImage}
                                />
                            )}
                        </View>



                    </View>
                </View>
            </Modal>
            </TouchableOpacity>
        </View>
    );
};

export default FoodItem;
