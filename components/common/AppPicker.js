import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import RNPickerSelect from "react-native-picker-select";
import AppText from "./AppText";
import { colors, sizes } from "../../config";
import { SettingsContext } from "../../context";
import BlockButton from "./BlockButton";
import useHaptics from "../../hooks/useHaptics";

function AppPicker({ label, value, options, onChange }) {
  const isHaptic = label.toLowerCase().includes("haptic");
  const { theme } = useContext(SettingsContext);
  const haptics = useHaptics();

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{label}</AppText>
      <View style={styles.row}>
        <View
          style={{
            flex: isHaptic ? 0.8 : 1,
            flexDirection: "column",
          }}
        >
          <RNPickerSelect
            style={{
              inputAndroid: { color: colors[theme + "Text"] },
              inputIOS: { color: colors[theme + "Text"] },
              iconContainer: {
                top: 15,
                right: 15,
              },
            }}
            onValueChange={onChange}
            items={options}
            value={value}
            Icon={() => (
              <FontAwesome
                name="chevron-down"
                size={16}
                color={colors[theme + "Text"]}
              />
            )}
          />
        </View>
        {isHaptic ? (
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
