import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { MyNFTsParamList } from "../../../types";
import NFTCard from "../../../components/NFTCard";
import { NFTsData } from "../../../data/NFTsData";

const window = Dimensions.get("window");

function MyNFTsScreen() {
  const [dimensions, setDimensions] = useState({ window });
  const [col, setCol] = useState<number>();

  const onChange = ({ window }: any) => {
    setDimensions({ window });
  };
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    dimensions.window.width > 500
      ? setCol(Math.floor(dimensions.window.width / 300))
      : setCol(1);
    return () => {
      console.log(col);
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <FlatList
      contentContainerStyle={styles.list}
      style={{ marginBottom: 20 }}
      numColumns={col}
      keyExtractor={(item) => item.name}
      key={col}
      data={NFTsData}
      renderItem={({ item }) => (
        <NFTCard
          key={item.name}
          image={item.image}
          name={item.name}
          Available={item.Available}
          description={item.description}
        />
      )}
    />
  );  
}

const MyNFTsStack = createStackNavigator<MyNFTsParamList>();

export default function MyNFTsNavigator() {
  return (
    <MyNFTsStack.Navigator screenOptions={{ headerShown: false }}>
      <MyNFTsStack.Screen
        name="MyNFTsScreen"
        component={MyNFTsScreen}
        // options={{ headerTitle: 'MyNFTs Title' }}
      />
    </MyNFTsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 10,
    alignSelf: "center",
  },
});
