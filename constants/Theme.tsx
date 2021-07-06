import { DarkTheme, DefaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const LTheme = {
  ...DefaultTheme,
  dark: false,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#181329",
    background: "#181329",
    card: "#181329",
    text: "#ACA2CC",
    title: "#ffffff",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    myOwnColor: "#BADA55",
  },
};
export const DTheme = {
  ...DarkTheme,
  dark: true,
  myOwnProperty: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#181329",
    background: "#181329",
    card: "#181329",
    text: "#ACA2CC",
    title: "#ffffff",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export const TextStyle = StyleSheet.create({
  title: { fontSize: 20, color: "#ffffff", fontWeight: "bold" }, //TODO use color scheme

  small: { fontSize: 14, padding: 10 },
  smallB: { fontSize: 14, padding: 10, color: "#ffffff", fontWeight: "bold" },

  medium: { fontSize: 16, padding: 10 },
  mediumB: { fontSize: 16, padding: 10, color: "#ffffff", fontWeight: "bold" },

  larg: { fontSize: 40, padding: 10, color: "#ffffff" },
  largB: { fontSize: 40, padding: 10, color: "#ffffff", fontWeight: "bold" },
});
