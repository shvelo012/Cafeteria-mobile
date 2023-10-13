import { StyleSheet } from "react-native"
import { themeSpacing } from "../../components/spacer"
import { scaled } from "../../components/scaler"

export const styles = StyleSheet.create({
  screenRoot: {
    marginVertical: themeSpacing(8),
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: themeSpacing(26),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: scaled(300),
    height: scaled(45),
    borderColor: 'gray',
    borderWidth: scaled(3),
    marginBottom: themeSpacing(4),
    paddingHorizontal: themeSpacing(2),
  },
});