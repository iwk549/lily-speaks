import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { colors, touches } from "../../config";

const sizeMap = {
  small: 25,
  medium: 35,
  large: 50,
};

const typeMap = {
  info: {
    backgroundColor: colors.info,
    color: colors.infoText,
  },
};

function BlockButton({ children, onPress, size, type }) {
  const style = typeMap[type];
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={touches.activeOpacity}
      style={[styles.container, style, sizeMap[size]]}
    >
      <AppText style={[styles.text, style]}>{children}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    borderRadius: 2,
  },
});

export default BlockButton;
