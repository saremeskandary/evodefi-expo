import { DarkTheme, DefaultTheme } from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { StyleSheet } from "react-native";
import merge from "deepmerge";

const CombinedDefaultTheme = merge(DefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(DarkTheme, NavigationDarkTheme);

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      superLight: ThemeFont;
    }
    interface ThemeColors {
      title: string;
      purple?: string;
      card: string;
    }
    interface ThemeAnimation {
      customProperty: number;
    }
    interface Theme {
      userDefinedThemeProperty: string;
    }
  }
}

export const LTheme: ReactNativePaper.Theme = {
  ...CombinedDefaultTheme,
  dark: false,
  colors: {
    ...CombinedDefaultTheme.colors,
    primary: "#181329",
    background: "#181329",
    surface: "#1E1835",
    accent: "#1E1835",
    error: "red",
    text: "#ACA2CC",
    onSurface: "#ACA2CC",
    notification: "rgb(255, 69, 58)",
    disabled: "#1E1835",
    placeholder: "#1E1835",
    title: "#ffffff",
    purple: "rgb(99, 78, 252)",
    card: "#181329",
  },
  fonts: {
    ...CombinedDefaultTheme.fonts,
    superLight: { ...CombinedDefaultTheme.fonts["light"] },
  },
  userDefinedThemeProperty: "",
  animation: {
    ...CombinedDefaultTheme.animation,
    customProperty: 1,
  },
};
export const DTheme: ReactNativePaper.Theme = {
  ...CombinedDarkTheme,
  dark: true,
  colors: {
    ...CombinedDarkTheme.colors,
    primary: "#181329",
    background: "#181329",
    surface: "#1E1836",
    accent: "#1E1835",
    error: "red",
    text: "#ACA2CC",
    onSurface: "#1E1835",
    notification: "rgb(255, 69, 58)",
    disabled: "#1E1835",
    placeholder: "#1E1835",
    title: "#ffffff",
  },
  fonts: {
    ...CombinedDarkTheme.fonts,
    superLight: { ...CombinedDarkTheme.fonts["light"] },
  },
  userDefinedThemeProperty: "",
  animation: {
    ...CombinedDarkTheme.animation,
    customProperty: 1,
  },
};

export const TextStyle = StyleSheet.create({
  title: { fontSize: 20, color: "#ffffff", fontWeight: "bold" }, //TODO use colaor scheme

  small: { fontSize: 14, paddingVertical: 10 },
  smallB: {
    fontSize: 14,
    paddingVertical: 10,
    color: "#ffffff",
    fontWeight: "bold",
  },

  medium: { fontSize: 16, paddingVertical: 10 },
  mediumB: {
    fontSize: 16,
    paddingVertical: 10,
    color: "#ffffff",
    fontWeight: "bold",
  },

  larg: { fontSize: 40, paddingVertical: 10, color: "#ffffff" },
  largB: {
    fontSize: 40,
    paddingVertical: 10,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
