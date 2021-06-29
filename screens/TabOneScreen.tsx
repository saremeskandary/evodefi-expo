import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import { TabOneParamList } from '../types';

function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator}/>
    </View>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
      />
    </TabOneStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
