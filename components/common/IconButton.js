import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors, sizes, touches } from "../../config";

function IconButton({ icon, type, size, onPress }) {
  const backgroundColor = colors[type];
  const color = colors[type + "Text"];
  const buttonSize = sizes.buttons[size];

  return (
    <TouchableOpacity
      activeOpacity={touches.activeOpacity}
      style={[
        styles.container,
        {
          width: buttonSize.height,
          height: buttonSize.height,
          backgroundColor,
          borderColor: colors.info,
        },
      ]}
      onPress={onPress}
    >
      <FontAwesome
        name={icon}
        size={buttonSize.height}
        color={color}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignContent: "center",
    borderWidth: 1,
  },
  icon: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default IconButton;
