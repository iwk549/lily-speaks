import React from "react";
import { StyleSheet, Switch, View } from "react-native";

import { colors } from "../../config";
import AppText from "./AppText";

function AppSwitch({ label, checked, onChange }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{label}</AppText>
      <View style={styles.setter}>
        <Switch
          onValueChange={onChange}
          value={checked}
          thumbColor={checked ? colors.pop : colors.darkBackgroundColor}
          trackColor={{
            false: colors.muted,
            true: colors.lightBackgroundColor,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flex: 1 },
  text: {
    textAlign: "left",
    alignSelf: "center",
    marginLeft: 5,
    flex: 0.65,
  },
  setter: {
    flex: 0.35,
  },
});

export default AppSwitch;
