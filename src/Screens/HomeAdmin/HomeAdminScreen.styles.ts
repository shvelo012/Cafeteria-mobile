import {StyleSheet} from "react-native"
import {themeSpacing} from "../../components/spacer"
import * as Device from 'expo-device';
import {DeviceType} from "expo-device";
import {scaled} from "../../components/scaler";

export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
    (deviceType === DeviceType.PHONE ?
            //მობილურის სტილები
            {
                foodViewWrapper: {
                    marginTop: themeSpacing(6),
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                },
                headerMargin: {
                    // marginTop: themeSpacing(1),
                },
                closeButtonContainer: {
                    padding: scaled(2),
                    position: 'absolute',
                    top: 0,
                    right: scaled(18),
                    zIndex: 1,
                },
                closeTemporaryButtonContainer: {
                    padding: scaled(2),
                    position: 'absolute',
                    top: 0,
                    left: scaled(18),
                    zIndex: 1,

                },
                closeButton: {
                    backgroundColor: 'red',
                    padding: themeSpacing(1.2),
                    borderRadius: scaled(8),
                },
                closeButtonText: {
                    color: 'white',
                },
            }
            :
            //პლანშეტის სტილები -----------
            {
                foodViewWrapper: {
                    marginTop: themeSpacing(2),
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                },
                headerMargin: {
                    marginTop: themeSpacing(2),
                },
                closeButtonContainer: {
                    padding: scaled(2),
                    position: 'absolute',
                    top: 0,
                    right: themeSpacing(1.5),
                    zIndex: 1,
                },
                closeTemporaryButtonContainer: {
                    padding: scaled(2),
                    position: 'absolute',
                    top: 0,
                    left: themeSpacing(1.5),
                    zIndex: 1,
                },
                closeButton: {
                    backgroundColor: 'red',
                    padding: themeSpacing(0.8),
                    borderRadius: scaled(4),
                },
                closeButtonText: {
                    color: 'white',

                    fontSize: scaled(8),
                },
            }
    ));
