import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { TextStyle } from "../constants/Theme";
import { Avatar, Text } from "react-native-paper";

export interface NFTCardInterface {
  image: string;
  name: string;
  Available: boolean;
  description: string;
}

// TODO image is not good and can't be loaded in the Android Apps!
export default function NFTCard(props: NFTCardInterface) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://evodefi.com/images/nfts/gen-6.svg" }}
        style={styles.image}
        resizeMode={"contain"}
      />
      <View style={styles.title}>
        <Text style={[TextStyle.mediumB, { paddingHorizontal: 0 }]}>
          {props.name}
        </Text>
        {props.Available ? (
          <View style={styles.available}>
            <Avatar.Icon
              size={30}
              icon="check-circle-outline"
              color="#0191e0"
              style={{ backgroundColor: "#1E1835" }}
            />
            <Text style={[TextStyle.small, { color: "#634efc" }]}>
              Available
            </Text>
          </View>
        ) : null}
      </View>
      <Text style={[TextStyle.small]}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1835",
    borderRadius: 10,
    minHeight: 400,
    minWidth: 222,
    margin: 10,
    alignItems:'stretch'
  },
  image: {
    width: 400,
    height: 200,
  },
  title: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  available: {
    alignItems: "center",
    flexDirection:'row'
  },
});
