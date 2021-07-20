import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import NFTmarketCard from "../../../components/NFTmarketCard";
import { NFTmarketData } from "../../../data/NFTmarketData";
import { NFTmarketParamList } from "../../../types";

const window = Dimensions.get("window");

function NFTmarketScreen() {
  const [dimensions, setDimensions] = useState({ window });
  const [col, setCol] = useState<number>();

  const onChange = ({ window }: any) => {
    setDimensions({ window });
  };
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    dimensions.window.width > 800
      ? setCol(Math.floor(dimensions.window.width / 500))
      : setCol(1);
    return () => {
      console.log(col);
      Dimensions.removeEventListener("change", onChange);
    };
  });
  return (
    <FlatList
      contentContainerStyle={styles.container}
      style={{ marginBottom: 10, alignSelf: "center" }}
      numColumns={col}
      keyExtractor={(item) => item.id}
      key={col}
      data={NFTmarketData}
      renderItem={({ item }) => (
        <NFTmarketCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      )}
    />
  );
}

const NFTmarketStack = createStackNavigator<NFTmarketParamList>();

export default function NFTmarketNavigator() {
  return (
    <NFTmarketStack.Navigator screenOptions={{ headerShown: false }}>
      <NFTmarketStack.Screen
        name="NFTmarketScreen"
        component={NFTmarketScreen}
      />
    </NFTmarketStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
