import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

import { colors, sizes } from "../../config";
import { SettingsContext } from "../../context";

function AppText({ children, type, style = {} }) {
  const { theme } = useContext(SettingsContext);

  return (
    <Text
      style={[
        styles.container,
        { color: colors[theme + "Text"] },
        styles[type],
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: sizes.fontSize,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  danger: {
    backgroundColor: colors.danger,
    color: colors.dangerText,
    padding: 5,
    borderRadius: 5,
  },
});

export default AppText;
