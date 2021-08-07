import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { TextStyle } from "../../../constants/Theme";
import { MarketParamList } from "../../../types";

function MarketScreen() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const MarketStack = createStackNavigator<MarketParamList>();

export default function MarketNavigator() {
  return (
    <MarketStack.Navigator screenOptions={{ headerShown: false }}>
      <MarketStack.Screen name="MarketScreen" component={MarketScreen} />
    </MarketStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffda",
    padding: 10,
    flexDirection: "row",
  },
  container2: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffaa",
    padding: 10,
  },
});
