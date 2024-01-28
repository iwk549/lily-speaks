import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import * as ScreenOrienation from "expo-screen-orientation";
import { SettingsContext } from "../context";
import { colors } from "../config";
import useDimensions from "../hooks/useDimensions";

function Screen({ children, scroll, orientation = "landscape" }) {
  const { theme } = useContext(SettingsContext);
  const dimensions = useDimensions();

  useFocusEffect(() => {
    ScreenOrienation.lockAsync(
      ScreenOrienation.OrientationLock[orientation.toUpperCase()]
    );
  });

  const style = {
    width: dimensions.width,
    height: dimensions.height - dimensions.statusBarHeight,
    marginTop: dimensions.statusBarHeight,
    backgroundColor: colors[(theme || "light") + "BackgroundColor"],
  };

  return scroll ? (
    <ScrollView style={[styles.container, style]}>{children}</ScrollView>
  ) : (
    <View style={[styles.container, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
