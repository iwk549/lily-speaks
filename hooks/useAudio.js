import { useContext, useState, useEffect } from "react";
import { Audio } from "expo-av";
import { SettingsContext } from "../context";

function useAudio(file) {
  const { sounds } = useContext(SettingsContext); // use this for sound settings

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) sound.unloadAsync();
    });
  }

  return {
    playSound,
  };
}

export default useAudio;
