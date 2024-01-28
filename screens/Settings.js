import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import Screen from "./../components/Screen";
import { AppText, PageHeader } from "../components/common";
import { SettingsContext } from "../context";
import Setting from "./../components/Settings/Setting";

function Settings() {
  const settings = useContext(SettingsContext);

  const settingsMap = [
    {
      label: "Dark Mode",
      description: "Reverse the colors for a dark mode experience",
      type: "switch",
      value: settings.theme === "dark",
      onChange: (val) => {
        settings.setTheme(val ? "dark" : "light");
      },
    },
    {
      label: "Haptic Feedback",
      description: "Set the level of vibration when a card is pressed",
      type: "select",
      options: [
        { label: "None", value: "None" },
        { label: "Light", value: "Light" },
        { label: "Medium", value: "Medium" },
        { label: "Heavy", value: "Heavy" },
      ],
      value: settings.haptics,
      onChange: (val) => {
        settings.setHaptics(val);
      },
    },
  ];

  return (
    <Screen orientation="portrait" scroll={true}>
      <PageHeader>App Settings</PageHeader>
      {settingsMap.map((setting, idx) => (
        <Setting key={idx} {...setting} />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Settings;
