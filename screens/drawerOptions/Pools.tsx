import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Dimensions } from "react-native";
import { PoolsParamList } from "../../types";
import TokenCard from "../../components/TokenCard";
import { PoolData } from "../../data/PoolData";

const window = Dimensions.get("window");

function PoolsScreen() {
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
  );
}

const PoolsStack = createStackNavigator<PoolsParamList>();

export default function PoolsNavigator() {
  return (
    <PoolsStack.Navigator screenOptions={{ headerShown: false }}>
      <PoolsStack.Screen
        name="PoolsScreen"
        component={PoolsScreen}
        // options={{ headerTitle: 'Pools Title' }}
      />
    </PoolsStack.Navigator>
  );
}

// let Size = windowHeight == 120 ? "10%" : "100%";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexwrap: "wrap",
  },
});
