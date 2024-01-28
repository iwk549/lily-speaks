import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "./../components/Screen";
import { AppText, PageHeader } from "../components/common";

function InteractionSetup() {
  return (
    <Screen orientation="portrait" scroll={true}>
      <PageHeader>Interactions Setup</PageHeader>
      <AppText style={styles.text}>
        Manage how the Interactions screen will appear
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default InteractionSetup;
