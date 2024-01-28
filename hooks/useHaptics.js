import { useContext } from "react";
import * as Haptics from "expo-haptics";
import { SettingsContext } from "../context";

function useHaptics() {
  const { haptics } = useContext(SettingsContext);

  return {
    areaPress: () => {
      if (haptics !== "None")
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle[haptics]);
    },
  };
}

export default useHaptics;
