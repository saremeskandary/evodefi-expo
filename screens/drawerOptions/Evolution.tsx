import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import {
  Avatar,
  Text,
  TextInput,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import ButtonPurple from "../../components/ButtonPurple";
import { Dictionary } from "../../components/Dictionary";
import PortalCard from "../../components/PortalCard";
import { TextStyle } from "../../constants/Theme";
import { EBY_APR_DATA, HTWData } from "../../data/Card1Data";
import { EvolutionParamList } from "../../types";

function Card1(props: any) {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <TouchableRipple
      onPress={showDialog}
      style={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: colors.surface,
        margin: 10,
      }}
    >
      <View>
        <View>
          <Avatar.Icon
            size={80}
            icon={props.icon}
            color={props.iconColor}
            style={{ backgroundColor: colors.surface }}
          />
          <Text style={TextStyle.title}>{props.title}</Text>
        </View>
        <PortalCard
          content={<ScrollView>{props.content}</ScrollView>}
          visible={visible}
          onDismiss={hideDialog}
          title={props.title}
        />
      </View>
    </TouchableRipple>
  );
}

function EvolutionScreen() {
  const HTW = HTWData.map((x) => {
    return (
      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Image
          source={{ uri: x.image }}
          style={{ width: 100, height: 100, marginHorizontal: 10 }}
        />
        <Text style={TextStyle.title}>{x.name}</Text>
      </View>
    );
  });
  const EBY_APY = EBY_APR_DATA.map((x) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
          justifyContent: "space-between",
          // maxWidth:600
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingRight: 400,
          }}
        >
          <Image
            source={{ uri: x.image }}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <Text style={TextStyle.title}>{x.name}</Text>
        </View>
        <Text style={TextStyle.title}>{x.percent}</Text>
      </View>
    );
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <Text style={TextStyle.title}>Evolution</Text>
          <Text style={TextStyle.medium}>
            Evolve your NFT to the next level to discover new technologies and
            increase farming efficiency
          </Text>
        </View>
        <View style={styles.cards}>
          <Card1
            icon="floor-lamp"
            title="How it works?"
            iconColor="rgb(77, 183, 51)"
            content={<View>{HTW}</View>}
          />
          <Card1
            icon="zodiac-sagittarius"
            title="Evolution boost your APR"
            iconColor="#FFB801"
            content={<View>{EBY_APY}</View>}
          />
          <View style={styles.MyNFT}>
            <Text style={[TextStyle.title, { marginVertical: 20 }]}>
              My NFT
            </Text>
            <View style={{ alignItems: "center" }}>
              <Avatar.Icon
                size={100}
                icon="laptop"
                style={{ backgroundColor: "#443c5f" }}
              />
              <Text style={TextStyle.small}>No NFT</Text>
            </View>
            <ButtonPurple onPress={() => {}} title="Fuse It Now" />
          </View>
          <View style={styles.TTN_EVO}>
            <Text style={[TextStyle.title, { marginVertical: 20 }]}>
              Time to next EVO
            </Text>
            <Text style={[TextStyle.title, { marginVertical: 20 }]}>
              21:39:38
            </Text>
            <View style={{ alignItems: "center" }}>
              <Text style={TextStyle.small}>No NFT</Text>
            </View>
            <TextInput
              style={{ borderColor: "#fff", borderRadius: 2 }}
            ></TextInput>
            <ButtonPurple onPress={() => {}} title="Unlock Wallet" />
            <View style={{}}>
              <Dictionary title="Your chance to EVOlve:" content="-" />
              <Dictionary title="Your paid:" content="-" />
              <Dictionary title="Minimum pay:" content="-" />
              <Dictionary title="Your prize:" content="-" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
  MyNFT: {
    flexGrow: 1,
    borderRadius: 5,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1e1835",
    margin: 10,
    paddingHorizontal: 80,
    minHeight: 450,
  },
  TTN_EVO: {
    flexGrow: 1,
    borderRadius: 5,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1e1835",
    margin: 10,
    padding: 10,
    paddingHorizontal: 80,
    minHeight: 450,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
