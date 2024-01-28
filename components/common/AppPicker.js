import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import RNPickerSelect from "react-native-picker-select";
import AppText from "./AppText";
import { colors, sizes } from "../../config";
import { SettingsContext } from "../../context";
import BlockButton from "./BlockButton";
import useHaptics from "../../hooks/useHaptics";

function AppPicker({ label, value, options, onChange }) {
  const { theme } = useContext(SettingsContext);
  const haptics = useHaptics();

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{label}</AppText>
      <View style={styles.row}>
        <View
          style={{
            flex: label.toLowerCase().includes("haptic") ? 0.8 : 1,
            flexDirection: "column",
          }}
        >
          <RNPickerSelect
            style={{
              inputAndroid: { color: colors[theme + "Color"] },
              inputIOS: { backgroundColor: "blue", color: "pink" },
            }}
            onValueChange={onChange}
            items={options}
            value={value}
          />
        </View>
        {label.toLowerCase().includes("haptic") ? (
          <View style={{ flex: 0.2 }}>
            <BlockButton
              type="info"
              size="medium"
              onPress={() => haptics.areaPress()}
            >
              Test
            </BlockButton>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: sizes.fontSize - 2,
  },
});

export default AppPicker;
