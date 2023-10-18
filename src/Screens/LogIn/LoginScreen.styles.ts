import { StyleSheet } from "react-native"
import { themeSpacing } from "../../components/spacer"
import { scaled } from "../../components/scaler"

import * as Device from 'expo-device';
import { DeviceType } from "expo-device";
export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
  (deviceType === DeviceType.PHONE ?
    // მობილურის სტილები
    {
      screenRoot: {
        marginVertical: themeSpacing(6),
      },
      loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: themeSpacing(30),
      },
      title: {
        fontSize: scaled(30),
        fontWeight: 'bold',
        marginBottom: themeSpacing(2),
      },
      input: {
        width: scaled(300),
        height: scaled(45),
        borderColor: 'gray',
        borderWidth: scaled(3),
        marginBottom: themeSpacing(2),
        paddingHorizontal: themeSpacing(2),
        fontSize: scaled(12)
      },
    }
    :
    // პლანშეტის სტილები --------------------------------------------
    {
      screenRoot: {
        marginVertical: themeSpacing(2),
      },
      loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: themeSpacing(2),
      },
      title: {
        fontSize: scaled(26),
        fontWeight: 'bold',
        marginBottom: themeSpacing(2),
      },
      input: {
        width: scaled(300),
        height: scaled(40),
        borderColor: 'gray',
        borderWidth: scaled(3),
        marginBottom: themeSpacing(2),
        paddingHorizontal: themeSpacing(2),
        fontSize: scaled(12)
      },

    }
  ));