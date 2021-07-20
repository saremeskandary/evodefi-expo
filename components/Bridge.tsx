import React from "react";
import { StyleSheet, View, ScrollView, Linking, TextInput } from "react-native";
import {
  TouchableRipple,
  Text,
  Button,
  Avatar,
  useTheme,
  Dialog,
  Portal,
  IconButton,
} from "react-native-paper";
import { TextStyle } from "../constants/Theme";

function BridgeItemView(props: { icon: any; name: string }) {
  return (
    <View style={styles.BridgeItem}>
      <Avatar.Image size={30} source={props.icon} />
      <Text style={[TextStyle.title, { paddingHorizontal: 15 }]}>
        {props.name}
      </Text>
    </View>
  );
}
export interface BridgeInterface {
  commission: string;
  arrowAction: string;
  plusePressed: any;
  selectionTitle: string;
}

export default function Bridge(props: BridgeInterface) {
  const [text, setText] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const { colors } = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[TextStyle.title, { padding: 20 }]}>EVO Bridge</Text>
        <Text style={[TextStyle.medium, { paddingBottom: 20 }]}>
          {props.commission}
        </Text>

        <View style={styles.BRItemView}>
          <BridgeItemView
            icon={{
              uri: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=013",
            }}
            name="BSC"
          />
          <IconButton
            style={{ flexGrow: 1 }}
            icon="arrow-right"
            size={30}
            onPress={() =>
              props.arrowAction ? Linking.openURL(props.arrowAction) : null
            }
          />
          <BridgeItemView
            icon={{ uri: " https://evodefi.com/images/currencies/polygon.png" }}
            name="Polygon"
          />
        </View>

        <View style={{ justifyContent: "flex-start", margin: 20 }}>
          <TouchableRipple
            style={styles.bigButton}
            onPress={showDialog}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <View style={styles.inTouchable}>
              <Text style={{ color: "#0191e0", fontSize: 90 }}>+</Text>
              <Text style={[TextStyle.larg, { color: "#0191e0" }]}>
                {props.selectionTitle}
              </Text>
            </View>
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
              <Dialog.Content>{props.plusePressed}</Dialog.Content>
            </Dialog>
          </Portal>
        </View>

        <View style={styles.inputContainer}>
          <Text style={TextStyle.medium}>Enter address to send</Text>
          <TextInput
            style={[styles.TextInput, { color: colors.text }]}
            multiline={true}
            textContentType="oneTimeCode"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          {/* TODO You don't have enough GenX */}
        </View>

        <Button
          mode="contained"
          compact={false}
          style={styles.lastButton}
          //   onPress={() => Linking.openURL("https://evo-matic.com/nft/bridge")}
        >
          <Text style={[TextStyle.medium, { color: "#ffffff" }]}>
            Unlock wallet
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    margin: 20,
    maxWidth: 800,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    // alignContent: 'center'
  },
  BRItemView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 30,
    maxWidth: 800,
    justifyContent: "center",
  },
  BridgeItem: {
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#3e3852",
    borderWidth: 2,
    flexDirection: "row",
    height: 60,
    minWidth: 350,
    flexGrow: 3,
    paddingLeft: 20,
    margin: 10,
  },
  bigButton: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#1e1835",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#01cbe0",
    borderRadius: 10,
  },
  inTouchable: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInBB: {
    color: "#0191e0",
  },
  inputContainer: {
    alignSelf: "stretch",
    marginVertical: 10,
  },
  TextInput: {
    borderWidth: 2,
    borderColor: "#3e3852",
    alignSelf: "stretch",
    minHeight:40,
    padding: 20,
    fontSize:20,
  },
  lastButton: {
    justifyContent: "center",
    backgroundColor: "#4d38e5",
    paddingVertical: 10,
    alignSelf: "stretch",
  },
});
