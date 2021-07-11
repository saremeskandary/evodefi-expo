import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { TextStyle } from "../constants/Theme";

interface DictionaryInterface {
  title: string;
  tStyle?: any;
  content: string;
  cStyle?: any;
  icon?: string;
  iStyle?: false;
}

export function Dictionary(props: DictionaryInterface) {
  return (
    <View style={styles.dictionary}>
      <Text style={props.tStyle}>{props.title}</Text>
      <View style={[{ justifyContent: "flex-start", flexDirection:"row", alignItems:'center' }, props.iStyle]}>
        {props.icon ? (
          <Avatar.Icon size={30} icon={props.icon} color="#0191e0" />
        ) : null}
        <Text
          style={
            props.cStyle
              ? props.cStyle
              : [TextStyle.medium, { color: "#ffffff", fontWeight: "200" }]
          }
        >
          {props.content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dictionary: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
