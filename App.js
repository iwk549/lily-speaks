import { useState, useEffect } from "react";
import { View } from "react-native";

import { SettingsContext } from "./context";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {
  getAsyncStorage,
  saveAsyncStorage,
} from "./functions/storageFunctions";
import { constants } from "./config";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [haptics, setHaptics] = useState("Medium");

  useEffect(() => {
    loadSettings();
  }, []);

  const initSetting = async (key, setter) => {
    if (key) {
      const value = await getAsyncStorage(key);
      if (value) setter(value);
    }
  };

  const saveSetting = async (key, value) => {
    if (key) saveAsyncStorage(key, value);
  };

  const loadSettings = async () => {
    initSetting(constants.settings.THEME, setTheme);
    initSetting(constants.settings.HAPTICS, setHaptics);
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
        <DrawerNavigator />
      </SettingsContext.Provider>
    </View>
  );
}
