import { StyleSheet } from "react-native";
import { themeSpacing } from "../spacer";
import { scaled } from "../scaler";

export const styles = StyleSheet.create({
  headerContainer: {
  height:scaled(30),
    marginBottom: themeSpacing(1),
  },
  leftIcon: {
    marginRight: themeSpacing(12),
    paddingLeft: themeSpacing(1),
  },
  title: {
    fontSize: scaled(22),
  },
});