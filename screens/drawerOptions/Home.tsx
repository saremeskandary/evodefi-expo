import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import { HomeParamList } from '../../types';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
        </View>
    );
}

const HomeStack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                // options={{ headerTitle: 'Home Title' }}
            />
        </HomeStack.Navigator>
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
