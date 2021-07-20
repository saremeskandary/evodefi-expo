import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { TextStyle } from "../constants/Theme";
import ButtonPurple from "./ButtonPurple";

export interface NFTmarketCardInterface {
  image: string;
  name: string;
  price: number;
}

export default function NFTmarketCard(props: NFTmarketCardInterface) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://evodefi.com/images/nfts/gen-6.svg" }}
        style={styles.image}
        resizeMode={"contain"}
      />
      <View style={styles.content}>
        <Text style={[TextStyle.title, styles.title]}>GenX {props.name}</Text>
        <Text style={styles.price}>price: {props.price} GEN</Text>
        <ButtonPurple
          onPress={() => {}}
          title="Unlock Wallet"
          Bstyle={{ alignSelf: "flex-end" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1835",
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    margin: 10,
    alignItems: "stretch",
  },
  image: {
    margin: 10,
    width: 100,
    height: 100,
  },
  content: {
    margin: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  title: {
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
  price: {
    marginVertical: 5,
    marginHorizontal: 10,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
});
