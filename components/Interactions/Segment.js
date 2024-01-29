import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AppImage } from "../common";
import { touches } from "../../config";
import useHaptics from "../../hooks/useHaptics";
import useAudio from "../../hooks/useAudio";

function Segment({
  label,
  image,
  audio,
  containerStyle,
  imageStyle,
  cancelOnLongPress,
  displayOnly,
}) {
  const haptics = useHaptics();
  const sound = useAudio(audio);

  return (
    <TouchableOpacity
      onPress={
        displayOnly
          ? null
          : async () => {
              haptics.areaPress();
              if (audio) sound.playSound();
            }
      }
      onLongPress={cancelOnLongPress ? () => {} : null}
      activeOpacity={displayOnly ? 1 : touches.activeOpacity}
      style={[styles.container, containerStyle]}
    >
      <AppImage file={image} alt={label} style={imageStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Segment;
