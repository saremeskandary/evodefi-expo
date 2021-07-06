import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export interface SeperatorInterface {}

export default function Seperator(props: SeperatorInterface) {
  const { colors } = useTheme();
  return <View style={[styles.container, { backgroundColor: colors.text }]} />;
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: 1,
  },
});
