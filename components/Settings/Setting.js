import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../config";
import { AppPicker, AppSwitch, AppText } from "../common";

function Setting({ label, value, onChange, type, options }) {
  return (
    <View style={styles.container}>
      {type === "switch" ? (
        <AppSwitch label={label} checked={value} onChange={onChange} />
      ) : type === "select" ? (
        <AppPicker
          label={label}
          value={value}
          options={options}
          onChange={onChange}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderBottomWidth: 1,
    borderColor: colors.muted,
    minHeight: 50,
  },
});

export default Setting;
