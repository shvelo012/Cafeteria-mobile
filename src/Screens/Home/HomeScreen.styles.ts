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
            }

        }
        :
        //პლანშეტის სტილები --------------------
        {
            logInButton: {
                alignSelf: 'flex-end',
                right: themeSpacing(6),
                top: themeSpacing(10),
                color: 'blue',
                fontSize: scaled(15),
                textDecorationLine: 'underline',
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
            }
        }
    )
);