import {StyleSheet} from "react-native";
import {scaled} from "../scaler";
import * as Device from 'expo-device';
import {DeviceType} from "expo-device";
import {themeSpacing} from "../spacer";
import {theme} from "@storybook/react-native";
import {colors} from "../colors";
import {reduce} from "lodash";

export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
    (deviceType === DeviceType.PHONE ?
            //მობილურის სტილები
            {
                ilustrationSize: {
                    height: scaled(60),
                    width: scaled(120)
                },
                titleWrapper: {
                    borderBottomWidth: scaled(1)
                },
                title: {
                    fontSize: scaled(20),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                },
                plusMinusSaveRow: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    display: 'flex',

                },
                touchableMinus: {
                    paddingRight: themeSpacing(2),
                },
                touchablePlus: {
                    paddingLeft: themeSpacing(2),
                },
                buttonWrapper: {
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: scaled(40)
                },
                wrapper: {
                    borderWidth: scaled(4),
                    width: scaled(140),
                    marginVertical: themeSpacing(3),
                    marginHorizontal: themeSpacing(6),
                    borderColor: colors.red,
                    borderRadius: scaled(10),
                    gap: themeSpacing(1),
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    padding: themeSpacing(2),

                },
                text: {
                    alignSelf: 'center'
                },
                button: {

                    justifyContent: 'center',
                    borderRadius: scaled(10),
                },
            }
            :
            //პლანშეტის სტილები ----------------------------
            {
                titleWrapper: {

                },
                titleHeaderWrapper:{
                    borderBottomWidth: 1,
                    width: '100%',
                },
                title: {
                    fontSize: scaled(22),
                    alignSelf: 'center',
                },
                plusMinusSaveRow: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                },
                touchableMinus: {
                    paddingRight: themeSpacing(2),
                },
                touchablePlus: {
                    paddingLeft: themeSpacing(2),
                },
                buttonWrapper: {
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: scaled(40)
                },
                button: {
                    justifyContent: 'center',
                    borderRadius: scaled(10),
                },
                wrapper: {
                    borderWidth: scaled(4),
                    width: scaled(140),
                    marginVertical: themeSpacing(2),
                    marginHorizontal: themeSpacing(5),
                    borderColor: colors.red,
                    borderRadius: scaled(10),
                    gap: themeSpacing(1),
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    justifyContent: 'center',
                    alignItems  : 'center',
                    alignSelf: 'center'

                },
                text: {
                    alignSelf: 'center',
                    fontSize: scaled(10),
                },
                ilustrationSize: {
                    height: scaled(40),
                    width: scaled(80),

                },

            }
    )
);