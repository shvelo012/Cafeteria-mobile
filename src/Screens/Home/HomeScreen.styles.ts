import { StyleSheet } from "react-native";
import { themeSpacing } from "../../components/spacer";
import { scaled } from "../../components/scaler";

export const styles = StyleSheet.create({
  logInButton: {
    alignSelf: 'flex-end',
    right: themeSpacing(6),
    top: themeSpacing(10),
    color: 'blue',
    fontSize: scaled(15),
    textDecorationLine: 'underline',
  }
});