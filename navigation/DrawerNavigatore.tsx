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
import EvolutionNavigator from "../screens/drawerOptions/Evolution";
import EggsNavigator from "../screens/drawerOptions/NFTmonsterBattel/Eggs";
import MyMonstersNavigator from "../screens/drawerOptions/NFTmonsterBattel/MyMonsters";
import BreedNavigator from "../screens/drawerOptions/NFTmonsterBattel/Breed";
import FuseNavigator from "../screens/drawerOptions/NFTmonsterBattel/Fuse";
import MarketNavigator from "../screens/drawerOptions/NFTmonsterBattel/Market";
import ReferralNavigator from "../screens/Referral";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
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
      <Drawer.Screen name="NFTbridge" component={NFTbridgeNavigator} />
      <Drawer.Screen name="MonsterBridge" component={MonsterBridgeNavigator} />
      <Drawer.Screen name="Pools" component={PoolsNavigator} />
      <Drawer.Screen name="AllNFT" component={AllNFTsNavigator} />
      <Drawer.Screen name="FuseNFT" component={FuseNFTNavigator} />
      <Drawer.Screen name="NFTmarket" component={NFTmarketNavigator} />
      <Drawer.Screen name="LootBox" component={LootBoxNavigator} />
      <Drawer.Screen name="Evolution" component={EvolutionNavigator} />
      <Drawer.Screen name="Eggs" component={EggsNavigator} />
      <Drawer.Screen name="MyMonsters" component={MyMonstersNavigator} />
      <Drawer.Screen name="Breed" component={BreedNavigator} />
      <Drawer.Screen name="Fuse" component={FuseNavigator} />
      <Drawer.Screen name="Market" component={MarketNavigator} />
      <Drawer.Screen name="Referral" component={ReferralNavigator} />
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
