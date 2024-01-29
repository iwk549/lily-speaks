import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AppModal, AppText, BlockButton } from "../common";
import PresetInteractionSelector from "./PresetInteractionSelector";

function SegmentEditor({ onSave }) {
  const [modalOpen, setModalOpen] = useState(false);

  const raiseSave = (interaction) => {
    onSave(interaction);
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <BlockButton type="pop" size="medium" onPress={() => setModalOpen(true)}>
        Add New Interaction
      </BlockButton>
      <AppModal
        isVisible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <AppText style={styles.text}>Add New Interaction</AppText>
        <PresetInteractionSelector onSave={raiseSave} />
      </AppModal>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default SegmentEditor;
