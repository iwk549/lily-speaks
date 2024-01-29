import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import { colors, sizes } from "../../config";

function PageHeader({ children }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pop,
  },
  text: {
    fontSize: sizes.fontSize + 4,
    textAlign: "center",
    margin: 5,
    color: colors.popText,
  },
});

export default PageHeader;
