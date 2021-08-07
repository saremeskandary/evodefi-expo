import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import ButtonPurple from "../../../components/ButtonPurple";
import { TextStyle } from "../../../constants/Theme";
import { EggsData } from "../../../data/EggsData";
import { EggsParamList } from "../../../types";

interface cardInterface {
  name: string;
  cost: string;
  image: string;
  chance: string;
}
function Card(props: cardInterface) {
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{}}>
          <Text style={TextStyle.title}>{props.name}</Text>
          <Text style={[TextStyle.medium, { color: "#fff" }]}>
            {props.cost}
          </Text>
          <ButtonPurple onPress={() => {}} title="Unlock Wallet" />
        </View>
        <Image
          source={{ uri: props.image }}
          style={{ width: 200, height: 180, alignSelf:'center' }}
          resizeMode={'stretch'}
        />
      </View>
      <Text>
        You will get Random Monster~{"\n"}
        chance~{"\n"}
        {props.chance}
      </Text>
    </View>
  );
}

function EggsScreen() {
  const Cards = EggsData.map((x) => {
    return (
      <Card name={x.name} chance={x.chance} image={x.image} cost={x.cost} />
    );
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[TextStyle.medium, { fontWeight: "bold", margin:10 }]}>
          Eggs shop
        </Text>
        <View style={{ flexDirection: "row", flexWrap:'wrap' }}>
          {Cards}
        </View>
      </View>
    </ScrollView>
  );
}

const EggsStack = createStackNavigator<EggsParamList>();

export default function EggsNavigator() {
  return (
    <EggsStack.Navigator screenOptions={{ headerShown: false }}>
      <EggsStack.Screen name="EggsScreen" component={EggsScreen} />
    </EggsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {margin:10},
});
