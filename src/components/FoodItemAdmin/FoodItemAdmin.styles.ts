import { StyleSheet } from "react-native";
import { scaled } from "../scaler";
import * as Device from 'expo-device';
import { DeviceType } from "expo-device";
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
      }
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
      buttonWrapper: {
        justifyContent: 'center',
        alignContent: 'center',
        borderTopWidth: scaled(1),
        alignItems: 'center',
        height: scaled(40)
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