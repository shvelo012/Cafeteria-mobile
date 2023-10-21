import { StyleSheet } from "react-native";
import { scaled } from "../scaler";
import * as Device from 'expo-device';
import { DeviceType } from "expo-device";
export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
  (deviceType === DeviceType.PHONE ?
    {//მობილურის სტილები
      title: {
        fontSize: scaled(22),
        alignSelf: 'center',
      },
    }
    :
    //პლანშეტის სტილები 
    {
      title: {
        fontSize: scaled(22),
        alignSelf: 'center',
      },
    }
  ));