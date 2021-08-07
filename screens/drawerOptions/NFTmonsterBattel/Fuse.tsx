import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Text, Avatar } from "react-native-paper";
import ButtonBigPlus from "../../../components/ButtonBigPlus";
import ButtonPurple from "../../../components/ButtonPurple";
import PortalCard from "../../../components/PortalCard";
import { TextStyle } from "../../../constants/Theme";
import { FuseParamList } from "../../../types";

function FuseScreen() {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[TextStyle.title, { color: colors.text }]}>
        Burn 5 NFTs to get New Monster
      </Text>
      <View>
        <Text style={[TextStyle.title, { color: colors.text }]}>My NFT</Text>
        <View>
          <Avatar.Icon
            size={100}
            icon="laptop"
            style={{ backgroundColor: "#443c5f" }}
          />
          <Text style={[TextStyle.title, { color: colors.text }]}>
            Burn 5 NFTs to get New Monster
          </Text>
        </View>
        <ButtonPurple title="Approve" onPress={{}} />
      </View>
    </View>
  );
}

const FuseStack = createStackNavigator<FuseParamList>();

export default function FuseNavigator() {
  return (
    <FuseStack.Navigator screenOptions={{ headerShown: false }}>
      <FuseStack.Screen name="FuseScreen" component={FuseScreen} />
    </FuseStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
