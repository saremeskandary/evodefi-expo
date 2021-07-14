import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import ButtonPurple from "../../../components/ButtonPurple";
import { TextStyle } from "../../../constants/Theme";
import { FuseNFTParamList } from "../../../types";

function HTWitem(props: { image: string; title: string }) {
  return (
    <View>
      <View style={styles.HTWitem}>
        <Avatar.Image size={70} source={{ uri: props.image }} />
        <Text style={[TextStyle.medium, { margin: 10 }]}>{props.title}</Text>
      </View>
    </View>
  );
}

function FuseNFTScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Add 4 identical nft and get +1 lvl
        </Text>
        <View style={styles.cardContainer}>
          <View style={styles.MyNFT}>
            <Text style={[TextStyle.title, { marginVertical: 20 }]}>
              My NFT
            </Text>
            <View style={{ alignItems: "center" }}>
              <Avatar.Icon
                size={100}
                icon="laptop"
                style={{ backgroundColor: "#443c5f" }}
              />
              <Text style={TextStyle.small}>No NFT</Text>
            </View>
            <ButtonPurple onPress={() => {}} title="Fuse It Now" />
          </View>

          <View style={styles.HowItWorks}>
            <Text style={[TextStyle.title, { marginVertical: 20 }]}>
              How it works?
            </Text>
            <View>
              <HTWitem
                title="Add 4 NFT"
                image="	https://evodefi.com/images/hiw2-1.png"
              />
              <HTWitem
                title="Stake"
                image="	https://evodefi.com/images/hiw2-2.png"
              />
              <HTWitem
                title="Get +1 lvl NFT"
                image="	https://evodefi.com/images/hiw2-3.png"
              />
              <HTWitem
                title="Use it"
                image="	https://evodefi.com/images/hiw2-4.png"
              />
              <HTWitem title="Use it" image="" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const FuseNFTStack = createStackNavigator<FuseNFTParamList>();

export default function FuseNFTNavigator() {
  return (
    <FuseNFTStack.Navigator screenOptions={{ headerShown: false }}>
      <FuseNFTStack.Screen name="FuseNFTScreen" component={FuseNFTScreen} />
    </FuseNFTStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 10 },
  cardContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "wrap",
    flex: 1,
  },
  MyNFT: {
    flexGrow: 1,
    borderRadius: 5,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1e1835",
    margin: 10,
    paddingHorizontal: 80,
    minHeight: 450,
  },
  HowItWorks: {
    borderRadius: 5,
    flexGrow: 1,
    justifyContent: "space-around",
    backgroundColor: "#1e1835",
    margin: 10,
    paddingHorizontal: 80,
  },
  HTWitem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
});
