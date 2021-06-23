import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { DrawerParamList, TabOneParamList, TabTwoParamList } from '../types';
import TabOneNavigator from '../screens/TabOneScreen';
import TabTwoNavigator from '../screens/TabTwoScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import HomeNavigator from '../screens/drawerOptions/Home';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
    const colorScheme = useColorScheme();

    return (
        <Drawer.Navigator 
            initialRouteName="TabOne"
            drawerContent={() => <DrawerContent />}
            screenOptions={{ 
                headerShown: true
                 }}
            //tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
            >
            <Drawer.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,            
                    headerTitle: 'Tab One Title',
                }}
            />
            <Drawer.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
        </Drawer.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}



