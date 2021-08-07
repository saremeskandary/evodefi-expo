import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { ReferralParamList } from "../types";
import { TextStyle } from "../constants/Theme";

function ReferralScreen() {
  const { colors } = useTheme();
  function Card({
    icon,
    number,
    title,
    help,
  }: {
    icon: string;
    number: number;
    title:string;
    help?:string;
  }) {
      return (
        <View style={{flexDirection:'row', backgroundColor:colors.surface}}></View>
      );
  }
  return (
    <View>
      <Text style={[TextStyle.title, { color: colors.text }]}>
        Referral Program
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={[TextStyle.title]}>How it Works?</Text>
          <Card
            icon=""  //TODO enter the pics
            number={1}
            title="Share your link with everyone! Create the biggest network!"
          />
          <Card icon="" number={2} title="Make sure they all stake or farm!" />
          <Card
            icon=""
            number={3}
            title="Enjoy instant payouts when they Harvest!"
            help="Earn 1.2% from your direct referrals, 0.6% from their refs and 0.2% from refs of refs!"
          />
        </View>
        <View></View>
      </View>
    </View>
  );
}

const ReferralStack = createStackNavigator<ReferralParamList>();

export default function ReferralNavigator() {
  return (
    <ReferralStack.Navigator screenOptions={{ headerShown: false }}>
      <ReferralStack.Screen name="ReferralScreen" component={ReferralScreen} />
    </ReferralStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
