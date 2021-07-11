import React from "react";
import { StyleSheet, View, Image, Linking, Dimensions } from "react-native";
import { Avatar, Text, Button } from "react-native-paper";
import { TextStyle } from "../constants/Theme";
import ButtonPurple from "./ButtonPurple";
import { Dictionary } from "./Dictionary";
import Seperator from "./Seperator";

export interface TokenCardInterface {
  icon: string;
  name: string;
  Nofee: boolean;
  Xnum: string;
  MaxAPR: string;
  BaseAPR: string;
  DepositFee: string;
  TotalLiquidity: string;
  MainnetExplorer?: string;
}

// TODO icon should add later

export default function TokenCard(props: TokenCardInterface) {
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Avatar.Image size={50} source={{ uri: props.icon }} />
        <View
          style={{
            alignItems: "baseline",
            flexDirection: "column",
            marginHorizontal: 10,
          }}
        >
          <Text style={[TextStyle.mediumB, { padding: 0 }]}>{props.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {props.Nofee ? (
              <Text style={{ paddingRight: 10 }}>No fees</Text>
            ) : null}
            <Text
              style={[
                ,
                {
                  backgroundColor: "#634efc",
                  paddingHorizontal: 8,
                  borderRadius: 4,
                  color: "#ffffff",
                },
              ]}
            >
              {props.Xnum}x
            </Text>
          </View>
        </View>
      </View>
      <Seperator />
      <Dictionary title="Max APR:" content={props.MaxAPR + "%"} />
      <Dictionary title="Base APR:" content={props.BaseAPR + "%"} />
      <Dictionary title="Earn" content="GenX" />
      <Dictionary
        title="Deposit Fee:"
        tStyle={TextStyle.title}
        content={props.DepositFee + "%"}
      />
      <Text></Text>
      <View style={styles.buttons}>
        <ButtonPurple title="Unlock Wallet" onPress={() => {}} />
        <Button
          mode="text"
          color="#634efc"
          onPress={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          {show ? "Hide" : "Details"}
        </Button>

        {show ? (
          <View>
            <View>
              <Dictionary title="Deposit:" content={props.name} />
              <Dictionary
                title="Total Liquidity:"
                content={"$" + props.TotalLiquidity}
                icon="open-in-new"
              />
            </View>
            <View style={styles.rowAndCenter}></View>
            <View style={{ alignItems: "center", flexDirection: "row-reverse" }}>
              <Button
                mode="text"
                color="#634efc"
                style={{ alignItems: "center" }}
                onPress={() =>
                  props.MainnetExplorer
                    ? Linking.openURL(props.MainnetExplorer)
                    : null
                }
              >
                <Text style={TextStyle.smallB}>View on Mainnet Explorer</Text>
              </Button>
              <Avatar.Icon size={30} icon="open-in-new" color="#0191e0" />
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1835",
    // flexGrow: 1,
    // flex:1,
    borderRadius: 10,
    justifyContent: "space-between",
    minWidth: 300,
    minHeight: 350,
    margin: 10,
  },
  rowAndCenter: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: { margin: 10, flexDirection: "row", alignItems: "center" },
  buttons: {},
});
