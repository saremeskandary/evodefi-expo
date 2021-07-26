import { createStackNavigator } from "@react-navigation/stack";
import React, { Children } from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Dialog,
  IconButton,
  Portal,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { TextStyle } from "../../constants/Theme";
import { EvolutionParamList } from "../../types";

function PortalCard(props: any) {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <View>
      <TouchableRipple onPress={() => showDialog}>
        <Avatar.Icon size={24} icon={props.icon} />
        <Text>{props.title}</Text>
      </TouchableRipple>
      <Portal>
        <Dialog
          style={{ backgroundColor: "#1e1835" }}
          visible={visible}
          onDismiss={hideDialog}
        >
          <Dialog.Actions>
            <IconButton
              style={{}}
              icon="close-circle-outline"
              onPress={hideDialog}
            ></IconButton>
          </Dialog.Actions>
          <Dialog.Content>{Children}</Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}
function EvolutionScreen() {
  return (
    <View>
      <Text style={TextStyle.title}>Evolution</Text>
      <Text style={TextStyle.medium}>
        Evolve your NFT to the next level to discover new technologies and
        increase farming efficiency
      </Text>
      <View style={styles.cards}>
        <PortalCard icon="floor-lamp" title="How it works?"></PortalCard>
        <PortalCard icon="zodiac-sagittarius" title="Evolution boost your APR"></PortalCard>
      </View>
    </View>
  );
}

const EvolutionStack = createStackNavigator<EvolutionParamList>();

export default function EvolutionNavigator() {
  return (
    <EvolutionStack.Navigator screenOptions={{ headerShown: false }}>
      <EvolutionStack.Screen
        name="EvolutionScreen"
        component={EvolutionScreen}
      />
    </EvolutionStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: { flexDirection: "row", flexWrap: "wrap" },
});
