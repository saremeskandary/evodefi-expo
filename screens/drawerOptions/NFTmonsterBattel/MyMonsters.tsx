import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import ButtonPurple from "../../../components/ButtonPurple";
import { TextStyle } from "../../../constants/Theme";
import { MyMonstersParamList } from "../../../types";

function MyMonstersScreen() {
  const { colors } = useTheme();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <Text style={[TextStyle.title, { color: colors.text }]}>
          My Monsters
        </Text>
        <ButtonPurple
          title="Breed"
          onPress={() => {}}
          Bstyle={{ alignSelf: "flex-end" }}
        />
      </View>
      <ButtonPurple
        title="Unlock Wallet"
        onPress={() => {}}
        Bstyle={{ alignSelf: "center" }}
      />
    </View>
  );
}

const MyMonstersStack = createStackNavigator<MyMonstersParamList>();

export default function MyMonstersNavigator() {
  return (
    <MyMonstersStack.Navigator screenOptions={{ headerShown: false }}>
      <MyMonstersStack.Screen
        name="MyMonstersScreen"
        component={MyMonstersScreen}
      />
    </MyMonstersStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
