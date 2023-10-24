import { StyleSheet } from "react-native";
import { scaled } from "../../components/scaler";
import { DeviceType } from 'expo-device';
import { themeSpacing } from '../../components/spacer';
import * as Device from 'expo-device';
import { colors } from "../../components/colors";

export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
    (deviceType === DeviceType.PHONE ?
        //მობილურის სტილები
        {
            logInButton: {
                alignSelf: 'flex-end',
                right: themeSpacing(6),
                top: themeSpacing(10),
                color: colors.red,
                fontSize: scaled(20),
                fontWeight: 'bold'
            },
            closedTextWrapper: {
                flex: 1,
                marginTop: themeSpacing(24),
                justifyContent: 'center',
                alignItems: 'center'
            },
            closedText: {
                fontSize: scaled(20),
                fontWeight: 'bold',
                color: 'red'
            },
            root: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1
            },
            foodWrapper: {
                marginTop: themeSpacing(12),
                width: '100%',
                justifyContent: 'flex-start',
                backgroundColor: colors.appBackground
            },
            itemWrapper: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: themeSpacing(4),
            },


        }
        :
        //პლანშეტის სტილები --------------------
        {
            logInButton: {
                alignSelf: 'flex-end',
                right: themeSpacing(6),
                top: themeSpacing(10),
                color: colors.red,
                fontSize: scaled(20),
                fontWeight: 'bold'
            },
            closedTextWrapper: {
                flex: 1,
                marginTop: themeSpacing(14),
                justifyContent: 'center',
                alignItems: 'center'
            },
            closedText: {
                fontSize: scaled(20),
                fontWeight: 'bold',
                color: 'red'
            },
            root: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1
            },
            foodWrapper: {
                marginTop: themeSpacing(12),
                width: '100%',
                justifyContent: 'flex-start',
                backgroundColor: colors.appBackground
            },
            itemWrapper: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: themeSpacing(4),
            },
        }
    )
);