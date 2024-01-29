import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";

import { AppText, AppModal, BlockButton, IconButton } from "../common";

import { presetInteractions } from "../../assets/data/dataMap";
import { colors } from "../../config";
import Segment from "./Segment";

function PresetInteractionSelector({ onSave }) {
  const [presetOpen, setPresetOpen] = useState(false);

  const handleSelect = (interaction) => {
    Alert.alert(
      "Add This Interaction?",
      `Add the '${interaction.label}' interaction to your screen?`,
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            onSave(interaction);
            setPresetOpen(false);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <BlockButton
        type="info"
        size="medium"
        onPress={() => setPresetOpen(true)}
      >
        Select Preset Interaction
      </BlockButton>
      <AppModal
        isVisible={presetOpen}
        onRequestClose={() => setPresetOpen(false)}
      >
        <AppText style={styles.text}>
          Select from one of our existing interactions
        </AppText>
        {presetInteractions.map((interaction, idx) => (
          <View key={idx} style={styles.interaction}>
            <AppText style={[styles.text, styles.interactionLabelText]}>
              {interaction.label}
            </AppText>
            <View style={styles.row}>
              <View style={styles.segment}>
                <Segment
                  label={interaction.label}
                  audio={interaction.audio}
                  image={interaction.image}
                  showLabel={true}
                  cancelOnLongPress={true}
                />
              </View>
              <View style={styles.button}>
                <IconButton
                  type="info"
                  size="medium"
                  icon="plus"
                  onPress={() => handleSelect(interaction)}
                />
              </View>
            </View>
          </View>
        ))}
      </AppModal>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
  },
  interactionLabelText: {
    fontWeight: "bold",
  },
  interaction: {
    margin: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.pop,
  },
  segment: {
    flexDirection: "column",
    flex: 0.8,
    height: 150,
    alignSelf: "center",
  },
  button: {
    flexDirection: "column",
    flex: 0.2,
    alignSelf: "center",
  },
});

export default PresetInteractionSelector;
