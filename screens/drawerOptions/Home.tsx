import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, FlatList, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";
import { HomeParamList } from "../../types";
import HomeCard from "../../components/HomeCard";
import { TextStyle } from "../../constants/Theme";
import { Dictionary } from "../../components/Dictionary";

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={[
          styles.title,
          { paddingHorizontal: 20, margin: 10, marginBottom: 0 },
        ]}
      >
        Welcome to EVOdefi - Cross-Chain Yield Farm!
      </Text>
      <TouchableRipple
        style={styles.logo}
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={styles.img}
          source={{
            uri: "https://evodefi.com/images/evodefi-main-banner.png",
          }}
        />
      </TouchableRipple>

      <View style={styles.cardContainer}>
        <HomeCard title="TVL" backgroundColor="#69b96d">
          <View style={styles.inTVL}>
            <Text style={TextStyle.larg}>pic</Text>
            <Text style={TextStyle.larg}>$4,961,788.21</Text>
          </View>
        </HomeCard>

        <HomeCard title="GenXStats" backgroundColor="#1e1835">
            <Dictionary title="Market Cap" content="$1,700,307" />
            <Dictionary title="Total Minted" content="$1,700,307" />
            <Dictionary title="Total Burned" content="$1,700,307" />
            <Dictionary title="Circulating Supply" content="$1,700,307" />
            <Dictionary title="New GenX/block" content="$1,700,307" />
        </HomeCard>
      </View>
    </ScrollView>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{ headerTitle: 'Home Title' }}
      />
    </HomeStack.Navigator>
  );
}

let dim = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignContent: "stretch",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  logo: {
    margin: 10,
    width: "100%",
    flex: 1,
    alignSelf: "center",
  },
  img: {
    width: "100%",
    height:
      dim.height > 800
        ? Math.floor(dim.height / 2)
        : Math.floor(dim.height / 6),
    resizeMode: "contain",
  },

  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  TVL: {
    flex: 1,
    height: "100%",
    backgroundColor: "#69b96d",
  },
  GenXStats: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1e1835",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  inCard: {
    alignItems: "center",
    // justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inTVL: {
    justifyContent: "flex-end",
    marginTop: 40,
  },
  textSize: {},
});
