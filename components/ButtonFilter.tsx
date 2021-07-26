import React, { Children } from "react";
import { StyleSheet } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";
import { TextStyle } from "../constants/Theme";

interface ButtonFilterInterface {
  onPress: any;
  Bstyle?: any;
  title: string;
  Tstyle?: any;
}

export default function ButtonFilter(props: ButtonFilterInterface) {
  return (
    <TouchableRipple
      style={[styles.buttonFilter, props.Bstyle]}
      onPress={props.onPress}
    >
      <Text style={[TextStyle.medium, props.Tstyle]}> {props.title} </Text>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  buttonFilter: {
    borderRadius: 6,
    borderColor: '#4d38e5',
    borderWidth:1,
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 10,
    margin: 10,
  },
});
