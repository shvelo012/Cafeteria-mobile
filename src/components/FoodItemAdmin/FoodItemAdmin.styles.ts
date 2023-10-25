import { StyleSheet } from "react-native";
import { scaled } from "../scaler";
import * as Device from 'expo-device';
import { DeviceType } from "expo-device";
import { themeSpacing } from "../spacer";
import { theme } from "@storybook/react-native";
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
      wrapper: {
        borderWidth: scaled(4),
        width: scaled(130),
        marginVertical: themeSpacing(2),
        marginHorizontal: themeSpacing(6)
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
        alignItems: 'center',
        height: scaled(40)
      },
      button: {
        alignSelf: 'center',
      },
      wrapper: {
        borderWidth: 2,
        width: scaled(130),
        marginHorizontal: themeSpacing(2),
        marginVertical: themeSpacing(2),
      },
      text: {
        alignSelf: 'center',
        fontSize: scaled(10),
      },
      ilustrationSize: {
        height: scaled(60),
        width: scaled(120)
      },

    }
  )
);