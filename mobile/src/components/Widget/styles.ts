import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.brand,
    width: 48,
    height: 48,
    position: 'absolute',
    right: 16,
    bottom: 16,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: 16,

  },
  indicator: {
    backgroundColor: theme.colors.text_on_brand_color,
    width: 56,
  },
});
