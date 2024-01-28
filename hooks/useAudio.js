import { useContext, useState, useEffect } from "react";
import { Audio } from "expo-av";
import { SettingsContext } from "../context";

function useAudio(file) {
  const { sounds } = useContext(SettingsContext); // use this for sound settings

  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/testData/sounds/CantinaBand3.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return {
    playSound,
  };
}

export default useAudio;
