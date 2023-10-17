import { StyleSheet } from "react-native"
import { themeSpacing } from "../../components/spacer"
import { scaled } from "../../components/scaler"

export const styles = StyleSheet.create({
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
    marginTop: themeSpacing(4),
  },
  title: {
    fontSize: scaled(24),
    fontWeight: 'bold',
    marginBottom: themeSpacing(4),
  },
  input: {
    width: scaled(300),
    height: scaled(45),
    borderColor: 'gray',
    borderWidth: scaled(2),
    marginBottom: themeSpacing(4),
    paddingHorizontal: themeSpacing(2),
    fontSize: scaled(12)
  },
});