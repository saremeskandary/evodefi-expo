import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import DrawerNavigator from './DrawerNavigatore';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation(Props :any) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme = {Props.theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Drawer" screenOptions={{ headerShown: false }}>      
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
    </Stack.Navigator>
  );
}
