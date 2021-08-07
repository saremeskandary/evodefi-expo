import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Text } from 'react-native-paper';
import Seperator from './Seperator';

export interface HomeCardInterface {
  title?: string;
  backgroundColor ?: string;
  children?: any;
}

export default function HomeCard(props: HomeCardInterface) {
  return (
    <View style={[styles.container, {backgroundColor : props.backgroundColor}]}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={[{flex:1, minWidth: 400},styles.Children]}>{props.children}</View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
    flexGrow: 1,
    borderRadius: 10,
    minWidth: 300,
  },
  title: {
    fontWeight: "bold",
    padding: 20,
    fontSize: 20,
    color: "#ffffff",
  },
  Children: {
    padding: 20,
  },
});
