import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AppText } from "../common";
import { SettingsContext } from "../../context";
import { colors, touches } from "../../config";
import useHaptics from "../../hooks/useHaptics";
import useAudio from "../../hooks/useAudio";

function Segment({ image, audio }) {
  const haptics = useHaptics();
  const sound = useAudio(audio);
  const { theme } = useContext(SettingsContext);

  return (
    <TouchableOpacity
      onPress={async () => {
        haptics.areaPress();
        if (audio) sound.playSound();
      }}
      activeOpacity={touches.activeOpacity}
      style={[
        styles.container,
        {
          borderColor: colors[theme + "Border"],
          backgroundColor: colors[theme + "Offset"],
        },
      ]}
    >
      <AppText>{image}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "99%",
    height: "98%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Segment;
