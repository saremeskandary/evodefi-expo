import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Dialog, Title } from "react-native-paper";
import { NFTbridgeParamList } from "../../../types";
import { TextStyle } from "../../../constants/Theme";
import Bridge from "../../../components/bridge";

function NFTbridgeScreen() {
  return (
    <View>
      <Bridge
        commission={" NFT bridge has commission 0.1 GenX "}
        arrowAction={"https://evo-matic.com/nft/bridge"} //TODO maybe this cause a problem
        selectionTitle={"Select NFT"}
        plusePressed={
          <Dialog.Content
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Dialog.Title style={TextStyle.title}>Deposit NFT</Dialog.Title>
            <Dialog.Content style={{ alignItems: "baseline" }}>
              <Title>No NFT found</Title>
            </Dialog.Content>
            <Dialog.Content style={{ flexDirection: "row" }}>
              <Dialog.Actions>
                <Button onPress={() => {}} title="cancel" />
              </Dialog.Actions>
              <Dialog.Actions>
                <Button onPress={() => {}} title="select NFT" />
              </Dialog.Actions>
            </Dialog.Content>
          </Dialog.Content>
        } //check dialog in paper
      ></Bridge>
    </View>
  );
}
const NFTbridgeStack = createStackNavigator<NFTbridgeParamList>();

export default function NFTbridgeNavigator() {
  return (
    <NFTbridgeStack.Navigator screenOptions={{ headerShown: false }}>
      <NFTbridgeStack.Screen
        name="NFTbridgeScreen"
        component={NFTbridgeScreen}
        // options={{ headerTitle: 'NFTbridge Title' }}
      />
    </NFTbridgeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
