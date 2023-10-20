import { StyleSheet } from "react-native";
import { scaled } from "../../components/scaler";
import { DeviceType } from 'expo-device';
import { themeSpacing } from '../../components/spacer';
import * as Device from 'expo-device';
export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
  (deviceType === DeviceType.PHONE ?
    //მობილურის სტილები
    {
      logInButton: {
        alignSelf: 'flex-end',
        right: themeSpacing(6),
        top: themeSpacing(10),
        color: 'blue',
        fontSize: scaled(15),
        textDecorationLine: 'underline',
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
      }
    }
  )
);