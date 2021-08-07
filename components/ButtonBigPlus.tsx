import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { TextStyle } from "../constants/Theme";

export interface ButtonBigPlusInterface {
  title: string;
  onPress: any;
}

export default function ButtonBigPlus(props: ButtonBigPlusInterface) {
  return (
    <TouchableRipple
      style={styles.bigButton}
      onPress={props.onPress}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <View style={styles.inTouchable}>
        <Text style={{ color: "#0191e0", fontSize: 90 }}>+</Text>
        <Text style={[TextStyle.larg, { color: "#0191e0" }]}>
          {props.title}
        </Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#1e1835",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#01cbe0",
    borderRadius: 10,
  },
  inTouchable: {
    justifyContent: "center",
    alignItems: "center",
  },
});
