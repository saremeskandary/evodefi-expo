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
export function Dictionary({
  title,
  tStyle,
  content,
  cStyle,
  icon,
  iStyle,
}: DictionaryInterface) {
  return (
    <View style={styles.dictionary}>
      <Text style={tStyle}>{title}</Text>
      <View
        style={[
          {
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          },
          iStyle,
        ]}
      >
        {icon ? (
          <Avatar.Icon
            size={30}
            icon={icon}
            color="#0191e0"
            style={{ marginHorizontal: 5 }}
          />
        ) : null}
        <Text
          style={
            cStyle
              ? cStyle
              : [TextStyle.medium, { color: "#ffffff", fontWeight: "200" }]
          }
        >
          {content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dictionary: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
