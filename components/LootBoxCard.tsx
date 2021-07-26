import React from 'react'
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { TextStyle } from '../constants/Theme';
import ButtonPurple from './ButtonPurple';

export interface LootBoxCardInterface {
  type: string;
  image: string;
  reward: number;
  cost: number;
}

export default function LootBoxCard (props:LootBoxCardInterface) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <Text style={TextStyle.title}>{props.reward}X Reward</Text>
        <Text style={TextStyle.small}>Cost: {props.cost} GenX</Text>
        <ButtonPurple title="Unlock Wallet" onPress={()=>{}}/>
        <Text style={[TextStyle.small,]}>
          You will get up to {props.reward}0 GenX and up to {props.cost} NFTs
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1835",
    borderRadius: 10,
    alignSelf: "center",
    // minHeight: 400,
    maxWidth: 250,
    margin: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 160,
  },
});