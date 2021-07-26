import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";

import useColorScheme from "../hooks/useColorScheme";
import { DrawerParamList } from "../types";
import HomeNavigator from "../screens/drawerOptions/Home";
import PoolsNavigator from "../screens/drawerOptions/Pools";
import AllNFTsNavigator from "../screens/drawerOptions/NFTs.tsx/AllNFTs";
import FuseNFTNavigator from "../screens/drawerOptions/NFTs.tsx/FuseNFT";
import NFTbridgeNavigator from "../screens/drawerOptions/bridge/NFTbridge";
import MonsterBridgeNavigator from "../screens/drawerOptions/bridge/MonstetBridge";
import NFTmarketNavigator from "../screens/drawerOptions/NFTs.tsx/NFTmarket";
import LootBoxNavigator from "../screens/drawerOptions/LootBox";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Drawer.Navigator
      initialRouteName="AllNFT"
      // drawerContent={() => <DrawerContent />}
      screenOptions={{
        headerShown: true,
      }}
      //tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
      <Drawer.Screen
        name="NFTbridge"
        component={NFTbridgeNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
      <Drawer.Screen
        name="MonsterBridge"
        component={MonsterBridgeNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
      <Drawer.Screen
        name="Pools"
        component={PoolsNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
      <Drawer.Screen
        name="AllNFT"
        component={AllNFTsNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
      <Drawer.Screen
        name="FuseNFT"
        component={FuseNFTNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
      <Drawer.Screen
        name="NFTmarket"
        component={NFTmarketNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
      <Drawer.Screen
        name="LootBox"
        component={LootBoxNavigator}
        options={
          {
            //tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }
        }
      />
    </Drawer.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
