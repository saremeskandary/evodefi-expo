import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import { AllNFTsParamList } from "../../../types";
import AllNFTCard from "../../../components/AllNFTCard";
import { NFTsData } from "../../../data/NFTsData";

const window = Dimensions.get("window");

function AllNFTsScreen() {
  const [dimensions, setDimensions] = useState({ window });
  const [col, setCol] = useState<number>();

  const onChange = ({ window }: any) => {
    setDimensions({ window });
  };
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    dimensions.window.width > 500
      ? setCol(Math.floor(dimensions.window.width / 350))
      : setCol(1);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <FlatList
      contentContainerStyle={styles.list}
      style={{ marginBottom: 20, alignSelf: "center" }}
      numColumns={col}
      keyExtractor={(item) => item.name}
      key={col}
      data={NFTsData}
      renderItem={({ item }) => (
        <AllNFTCard
          key={item.name}
          image={item.image}
          name={item.name}
          Available={item.Available}
          description={item.description}
          imageSize={col === 1 ? dimensions.window.width - 60 : 350 - 40} // dinamicly change image size which will effect on component size
        />
      )}
    />
  );
}

const AllNFTsStack = createStackNavigator<AllNFTsParamList>();

export default function AllNFTsNavigator() {
  return (
    <AllNFTsStack.Navigator screenOptions={{ headerShown: false }}>
      <AllNFTsStack.Screen
        name="AllNFTsScreen"
        component={AllNFTsScreen}
        // options={{ headerTitle: 'AllNFTs Title' }}
      />
    </AllNFTsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    // justifyContent:'center',
    // alignItems:'stretch',
    marginBottom: 10,
    alignSelf: "center",
    padding: 10,
  },
});
