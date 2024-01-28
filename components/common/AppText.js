import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

import { colors, sizes } from "../../config";
import { SettingsContext } from "../../context";

function AppText({ children, style = {} }) {
  const { theme } = useContext(SettingsContext);

  return (
    <Text style={[styles.container, { color: colors[theme + "Color"] }, style]}>
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
});

export default AppText;
