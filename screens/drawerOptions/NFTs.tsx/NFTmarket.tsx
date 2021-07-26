import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Button, Text } from "react-native-paper";
import ButtonFilter from "../../../components/ButtonFilter";
import NFTmarketCard from "../../../components/NFTmarketCard";
import { TextStyle } from "../../../constants/Theme";
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

  const FliterNames = ["sarem ", "ali", "mehdi", "ali", "mehdi"];

  const items = FliterNames.map((n) => {
    return <ButtonFilter title={n} onPress={() => {}} />;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[TextStyle.title, { marginHorizontal: 20 }]}>Market</Text>
      <Text style={[TextStyle.title, { marginHorizontal: 20 }]}>
        Collect NFTs and trade!!!
      </Text>
      <View style={styles.filters}>
        <Text style={[TextStyle.medium,{ marginHorizontal: 20, alignSelf: "center" }]}>
          Filters:
        </Text>
        {items}
      </View>

      <FlatList
        // contentContainerStyle={styles.container}
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
    </SafeAreaView>
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
