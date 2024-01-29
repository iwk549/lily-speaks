import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { colors, sizes, touches } from "../../config";

function BlockButton({ children, onPress, size, type }) {
  const backgroundColor = colors[type];
  const color = colors[type + "Text"];
  const buttonSize = sizes.buttons[size];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={touches.activeOpacity}
      style={[
        styles.container,
        { backgroundColor, borderColor: colors.info },
        buttonSize,
      ]}
    >
      <AppText style={[styles.text, { color, ...buttonSize }]}>
        {children}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: "center",
    margin: 5,
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 2,
    flex: 1,
  },
});

export default BlockButton;
