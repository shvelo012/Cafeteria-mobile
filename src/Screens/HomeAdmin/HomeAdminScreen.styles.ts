import { StyleSheet } from "react-native"
import { themeSpacing } from "../../components/spacer"
import * as Device from 'expo-device';
import { DeviceType } from "expo-device";
export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
  (deviceType === DeviceType.PHONE ?
    //მობილურის სტილები
    {
      screenRoot: {
        marginVertical: themeSpacing(8),
      }
    }
    :
    //პლანშეტის სტილები -----------
    {
      screenRoot: {
        marginVertical: themeSpacing(2),
      },
      foodViewWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    }
  ));
