import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import ButtonBigPlus from "../../../components/ButtonBigPlus";
import PortalCard from "../../../components/PortalCard";
import { TextStyle } from "../../../constants/Theme";
import { BreedParamList } from "../../../types";

function BreedScreen() {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[TextStyle.title, { color: colors.text }]}>Breeding</Text>
      <View style={{ flexDirection: "row" }}>
        <ButtonBigPlus title="Add Parent 1" onPress={showDialog} />
        <PortalCard
          content={{}}
          visible={visible}
          onDismiss={hideDialog}
          title={"Choose the Monster"}
        />
        ;
        <ButtonBigPlus title="Add Parent 2" onPress={showDialog} />
      </View>
      <PortalCard
        content={{}}
        visible={visible}
        onDismiss={hideDialog}
        title={"Choose the Monster"}
      />
    </View>
  );
}

const BreedStack = createStackNavigator<BreedParamList>();

export default function BreedNavigator() {
  return (
    <BreedStack.Navigator screenOptions={{ headerShown: false }}>
      <BreedStack.Screen name="BreedScreen" component={BreedScreen} />
    </BreedStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
