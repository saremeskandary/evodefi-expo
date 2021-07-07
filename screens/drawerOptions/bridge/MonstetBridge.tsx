import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Dialog, Paragraph, TouchableRipple } from "react-native-paper";
import { MonsterBridgeParamList } from "../../../types";
import { TextStyle } from "../../../constants/Theme";
import Bridge from "../../../components/bridge";

function MonsterBridgeScreen() {
  return (
    <View>
      <Bridge
        commission={"Monster bridge has commission 0.1 GenX"}
        arrowAction={"https://evodefi.com/beast/bridge"}
        selectionTitle={"Select beast"}
        plusePressed={
          <Dialog.Content style={{justifyContent:'center', alignItems:'center'}}>
            <Dialog.Title style={TextStyle.title}>Choose the Monster</Dialog.Title>
          </Dialog.Content>
        } //check dialog in paper
      ></Bridge>
    </View>
  );
}
const MonsterBridgeStack = createStackNavigator<MonsterBridgeParamList>();

export default function MonsterBridgeNavigator() {
  return (
    <MonsterBridgeStack.Navigator screenOptions={{ headerShown: false }}>
      <MonsterBridgeStack.Screen
        name="MonsterBridgeScreen"
        component={MonsterBridgeScreen}
        // options={{ headerTitle: 'MonsterBridge Title' }}
      />
    </MonsterBridgeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
