import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View,Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { AllNFTsParamList } from "../../../types";
import TokenCard from "../../../components/TokenCard";
import { PoolData } from "../../../data/PoolData";
import { TextStyle } from "../../../constants/Theme";

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
      ? setCol(Math.floor(dimensions.window.width / 320))
      : setCol(1);
    return () => {
      console.log(col);
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View style={styles.container}>
      <Text style={TextStyle.title}>All NFTs</Text>
      <Text style={TextStyle.small}>
        Collect NFTs and use it to get incredible bonuses!!!
      </Text>

      <FlatList
        contentContainerStyle={{ alignSelf: "center" }}
        numColumns={col}
        key={col}
        data={PoolData}
        renderItem={({ item, index }) => (
          <TokenCard
            key={item.name}
            icon={item.icon}
            name={item.name}
            Nofee={item.Nofee}
            Xnum={item.Xnum}
            MaxAPR={item.MaxAPR}
            BaseAPR={item.BaseAPR}
            DepositFee={item.DepositFee}
            TotalLiquidity={item.TotalLiquidity}
          />
        )}
      />
    </View>
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

// let Size = windowHeight == 120 ? "10%" : "100%";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexwrap: "wrap",
  },
});
