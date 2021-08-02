import React, { Children } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Portal, Dialog, IconButton, Text } from "react-native-paper";
import { TextStyle } from "../constants/Theme";

export interface PortalCardInterface {
  content: any;
  visible: boolean;
  onDismiss: any;
  title: string;
}

export default function PortalCard(props: PortalCardInterface) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: colors.surface,
        margin: 10,
        borderRadius: 10,
        minWidth: 300,
      }}
    >
      <Portal>
        <Dialog
          style={{
            backgroundColor: colors.surface,
            maxWidth: 800,
            maxHeight: 600,
            alignSelf: "center",
          }}
          visible={props.visible}
          onDismiss={props.onDismiss}
        >
          <IconButton
            icon="close-circle-outline"
            onPress={props.onDismiss}
            color={colors.purple}
            style={{ alignSelf: "flex-end" }}
          ></IconButton>
          <Dialog.ScrollArea>
            {props.content}
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
