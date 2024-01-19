import {StyleSheet} from "react-native";
import {scaled} from "../scaler";
import * as Device from 'expo-device';
import {DeviceType} from "expo-device";
import {themeSpacing} from "../spacer";
import {colors} from "../colors";

export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
    (deviceType === DeviceType.PHONE ?
            {//მობილურის სტილები
                foodContainer: {
                    marginBottom: themeSpacing(1),
                    marginHorizontal: themeSpacing(6),
                    borderWidth: scaled(4),
                    width: scaled(135),
                    borderColor: colors.red,
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: scaled(10),
                    gap: themeSpacing(1),
                },
                title: {
                    fontSize: scaled(20),
                    marginLeft: themeSpacing(2),
                    marginRight: themeSpacing(2),
                    alignSelf: 'flex-start',
                    fontWeight: 'bold'
                },
                foodImage: {
                    width: scaled(63),
                    height: scaled(63),
                    alignSelf: 'center',
                    padding: themeSpacing(7),

                },
                price: {
                    marginLeft: themeSpacing(2),
                    fontWeight: '500',
                },
                quantity: {
                    marginLeft: themeSpacing(2),
                    fontWeight: '500',
                    marginBottom: themeSpacing(2),
                },
                ingridients: {
                    fontSize: scaled(20)
                },

                modalTitle:{
                    fontSize: scaled(30),
                    fontWeight: 'bold',
                },
                modalContainer: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                modalContent: {

                    width: '80%',
                    backgroundColor: colors.appBackground,
                    padding: scaled(10),
                    paddingLeft: scaled(15),
                    borderRadius: scaled(10),
                    elevation: scaled(5),
                },
                modalFoodImage: {
                    width: scaled(100),
                    height: scaled(100),
                    alignSelf: 'center',
                    padding: themeSpacing(7),
                },

            }
            :
            //პლანშეტის სტილები
            {
                foodContainer: {
                    borderWidth: scaled(1.5),
                    width: scaled(98),
                    borderColor: colors.red,
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: scaled(10),
                    gap: themeSpacing(1),

                },
                title: {
                    fontSize: scaled(14),
                    marginLeft: themeSpacing(1),
                    marginRight: themeSpacing(1),
                    alignSelf: 'flex-start',
                    fontWeight: 'bold'
                },
                foodImage: {
                    width: scaled(43),
                    height: scaled(43),
                    alignSelf: 'center',
                    padding: themeSpacing(3.5),

                },
                price: {
                    marginLeft: themeSpacing(1),
                    fontWeight: '500',
                },
                quantity: {
                    marginLeft: themeSpacing(1),
                    fontWeight: '500',
                    marginBottom: themeSpacing(1),
                },

                ingridients: {
                    fontSize: scaled(10)
                },

                modalTitle:{
                    fontSize: scaled(20),
                    fontWeight: 'bold',
                },
                modalContainer: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                modalContent: {
                    height: '80%',
                    width: '80%',
                    backgroundColor: colors.appBackground,
                    padding: scaled(10),
                    paddingLeft: scaled(15),
                    borderRadius: scaled(10),
                    elevation: scaled(5),
                },
                modalFoodImage: {
                    width: scaled(83),
                    alignSelf: 'center',
                    padding: themeSpacing(7),
            },
            }
    ));
