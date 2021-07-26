import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { LootBoxParamList } from "../../types";
import { TextStyle } from "../../constants/Theme";
import { LootBoxData } from "../../data/LootBoxData";
import LootBoxCard from "../../components/LootBoxCard";

function LootBoxScreen() {
  const GenXs = LootBoxData.filter((card) => card.type == "GenX").map((x) => {
    return (
      <LootBoxCard
        key={x.id}
        type={x.type}
        image={x.image}
        reward={x.reward}
        cost={x.cost}
      />
    );
  });
  const NFT = LootBoxData.filter((card) => card.type == "NFT").map((x) => {
    return (
      <LootBoxCard
        key={x.id}
        type={x.type}
        image={x.image}
        reward={x.reward}
        cost={x.cost}
      />
    );
  });
  return (
    <ScrollView style={styles.container}>
      <Text style={TextStyle.title}>GenX Lootboxes</Text>
      <View style={styles.card}>{GenXs}</View>
      <Text style={TextStyle.title}>NFT Lootboxes</Text>
      <View style={styles.card}>{NFT}</View>
    </ScrollView>
  );
}

const LootBoxStack = createStackNavigator<LootBoxParamList>();

export default function LootBoxNavigator() {
  return (
    <LootBoxStack.Navigator screenOptions={{ headerShown: false }}>
      <LootBoxStack.Screen name="LootBoxScreen" component={LootBoxScreen} />
    </LootBoxStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  card: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: 'center',
    flexWrap: "wrap",
  },
});
