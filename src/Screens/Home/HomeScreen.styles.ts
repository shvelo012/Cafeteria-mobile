import {StyleSheet} from "react-native";
import {scaled} from "../../components/scaler";
import {DeviceType} from 'expo-device';
import {themeSpacing} from '../../components/spacer';
import * as Device from 'expo-device';
import {colors} from "../../components/colors";

export const deviceType = Device.deviceType;

export const styles = StyleSheet.create(
    (deviceType === DeviceType.PHONE ?
            //მობილურის სტილები
            {
                LogIntext: {
                    alignSelf: 'flex-start',
                    right: themeSpacing(0.8),
                    top: themeSpacing(1),
                    color: colors.red,
                    fontSize: scaled(24),
                    fontWeight: 'bold',
                    justifyContent: "center",
                },
                logInButton: {
                    backgroundColor: colors.appBackground,
                    color: colors.red,
                    fontSize: scaled(18),
                    fontWeight: 'bold',
                    paddingVertical: themeSpacing(1),
                    paddingHorizontal: themeSpacing(2),
                    // position: 'absolute',
                    // top: 0,
                    // left: 0,
                    zIndex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                },
                closedTextWrapper: {

                    marginTop: themeSpacing(24),
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                closedText: {
                    fontSize: scaled(20),
                    fontWeight: 'bold',
                    color: 'red'
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
                LogIntext: {

                    color: colors.red,
                    fontSize: scaled(18),
                    fontWeight: 'bold',


                },

                logInButton: {
                    backgroundColor: colors.appBackground,
                    color: colors.red,
                    fontSize: scaled(18),
                    fontWeight: 'bold',
                },
                closedTextWrapper: {
                    flex: 1,
                    marginTop: themeSpacing(0),
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                closedText: {
                    fontSize: scaled(20),
                    fontWeight: 'bold',
                    color: 'red',
                },
                foodWrapper: {
                    marginTop: themeSpacing(6),
                    width: '100%',
                    backgroundColor: colors.appBackground,

                },
                itemWrapper: {
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: themeSpacing(2),
                },
            }


    )
);