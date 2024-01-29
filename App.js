import { useState, useEffect } from "react";
import { View, LogBox } from "react-native";

import { SettingsContext, InteractionsContext } from "./context";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {
  getAsyncStorage,
  saveAsyncStorage,
} from "./functions/storageFunctions";
import { constants } from "./config";
import { presetInteractions } from "./assets/data/dataMap";

// TODO: These logs come from expo-av, upgrade package when fixed
LogBox.ignoreLogs(["new NativeEventEmitter"]);

export default function App() {
  const [theme, setTheme] = useState("light");
  const [haptics, setHaptics] = useState("Medium");
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    loadSettings();
    loadSegments();
  }, []);

  const initSetting = async (key, setter) => {
    if (key) {
      const value = await getAsyncStorage(key);
      if (value) {
        if (!setter) return JSON.parse(value);
        try {
          const parsed = JSON.parse(value);
          setter(parsed);
        } catch (error) {
          console.log("could not parse", key);
          setter(value);
        }
      }
    }
  };

  const saveSetting = async (key, value) => {
    if (key) await saveAsyncStorage(key, JSON.stringify(value));
  };

  const loadSettings = async () => {
    initSetting(constants.settings.THEME, setTheme);
    initSetting(constants.settings.HAPTICS, setHaptics);
  };

  const loadSegments = async () => {
    const segmentKeys = await initSetting("segments");
    if (segmentKeys) {
      let loadedSegments = [];
      segmentKeys.forEach((key) => {
        const segment = presetInteractions.find((p) => p._id === key);
        if (segment) loadedSegments.push(segment);
      });
      setSegments(loadedSegments);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SettingsContext.Provider
        value={{
          theme,
          setTheme: (value) => {
            saveSetting(constants.settings.THEME, value);
            setTheme(value);
          },
          haptics,
          setHaptics: (value) => {
            saveSetting(constants.settings.HAPTICS, value);
            setHaptics(value);
          },
        }}
      >
        <InteractionsContext.Provider
          value={{
            segments,
            setSegments: (newSegments) => {
              saveSetting(
                "segments",
                newSegments.map((s) => s._id)
              );
              setSegments(newSegments);
            },
          }}
        >
          <DrawerNavigator />
        </InteractionsContext.Provider>
      </SettingsContext.Provider>
    </View>
  );
}
