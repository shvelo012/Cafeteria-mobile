import { StyleSheet } from "react-native";
import { scaled } from "../scaler";
import * as Device from 'expo-device';
import { DeviceType } from "expo-device";
import { themeSpacing } from "../spacer";
export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
  (deviceType === DeviceType.PHONE ?
    //მობილურის სტილები
    {
      title: {
        fontSize: scaled(22),
        alignSelf: 'center',
      },
      wrapper: {
        borderWidth: 2,
        width: scaled(130)
      },
      text: {
        alignSelf: 'center'
      },
      button: {
        alignSelf: 'center',
      },
    }
    :
    //პლანშეტის სტილები ----------------------------
    {
      titleWrapper: {
        borderBottomWidth: scaled(1)
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
        borderTopWidth: scaled(1),
        alignItems: 'center',
        height: scaled(40)
      },
      button: {
        alignSelf: 'center',
      },
      wrapper: {
        borderWidth: 2,
        width: scaled(130)
      },
      text: {
        alignSelf: 'center',
        fontSize: scaled(10),
      }

    }
  )
);