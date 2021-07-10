import React from "react";
import { StyleSheet } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

interface ButtonPurpleInterface {
  onPress: any;
  Bstyle?: any;
  title: string;
  Tstyle?: any;
}

export default function ButtonPurple(props: ButtonPurpleInterface) {
  return (
    <TouchableRipple
      style={[styles.buttonPurple, props.Bstyle]}
      onPress={props.onPress}
    >
      <Text style={[styles.title, props.Tstyle]}> {props.title} </Text>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  buttonPurple: {
    backgroundColor: "#4d38e5",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 6,
    margin:10
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    color: '#fff'
  },
});
