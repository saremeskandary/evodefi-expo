import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { TextStyle } from "../constants/Theme";
import { Avatar, Text } from "react-native-paper";

export interface AllNFTCardInterface {
  image: string;
  name: string;
  Available: boolean;
  description: string;
  imageSize: number;
}

export default function AllNFTCard(props: AllNFTCardInterface) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://evodefi.com/images/nfts/gen-6.svg" }}
        style={{ width: props.imageSize, height: props.imageSize, alignSelf: "center" }}
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
    justifyContent: "space-between",
    minWidth: 220,
    minHeight: 350,
    margin: 10,
    padding:10,
  },
  title: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap:'wrap'
  },
  available: {
    alignItems: "center",
    flexDirection: "row",
  },
});
