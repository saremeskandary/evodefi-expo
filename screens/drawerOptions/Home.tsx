import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, FlatList, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";
import { HomeParamList } from "../../types";
import HomeCard from "../../components/HomeCard";
import { TextStyle } from "../../constants/Theme";

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <Text style={[styles.title, { paddingHorizontal: 20 }]}>
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
            <View style={styles.inCard}>
              <Text style={TextStyle.medium}>Market Cap</Text>
              <Text style={TextStyle.title}>$1,700,307</Text>
            </View>
            <View style={styles.inCard}>
              <Text style={TextStyle.medium}>Total Minted</Text>
              <Text style={TextStyle.title}>$1,700,307</Text>
            </View>
            <View style={styles.inCard}>
              <Text style={TextStyle.medium}>Total Burned</Text>
              <Text style={TextStyle.title}>$1,700,307</Text>
            </View>
            <View style={styles.inCard}>
              <Text style={TextStyle.medium}>Circulating Supply</Text>
              <Text style={TextStyle.title}>$1,700,307</Text>
            </View>
            <View style={styles.inCard}>
              <Text style={TextStyle.medium}>New GenX/block</Text>
              <Text style={TextStyle.title}>$1,700,307</Text>
            </View>
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

// let Size = windowHeight == 120 ? "10%" : "100%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexWrap: "wrap",
    margin: 20,
    height: "100%",
    alignContent: "stretch",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    margin: 20,
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  cardContainer: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    margin: 10,
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
