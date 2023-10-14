import { StyleSheet } from "react-native";
import { themeSpacing } from "../spacer";
import { scaled } from "../scaler";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'lightblue'
  },
  leftIcon: {
    marginRight: themeSpacing(12),
  },
  title: {
    fontSize: scaled(22),
  },
});