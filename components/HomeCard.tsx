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
      {/* <Seperator/> */}
      <View style={styles.Children}>{props.children}</View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexGrow: 1,
    margin: 10,
    borderRadius: 5,
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
