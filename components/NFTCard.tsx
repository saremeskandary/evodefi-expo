import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextStyle } from "../constants/Theme";
import { Text } from "react-native-paper";

export interface NFTCardInterface {
  icon: string;
  name: string;
  Available: boolean;
  description: string;
}

export default function NFTCard(props: NFTCardInterface) {
  return (
      <View></View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
