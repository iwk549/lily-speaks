import React, { useContext } from "react";
import { StyleSheet, ScrollView, Modal, View } from "react-native";
import BlockButton from "./BlockButton";
import { colors } from "../../config";
import { SettingsContext } from "../../context";
import useDimensions from "../../hooks/useDimensions";

function AppModal({ isVisible, onRequestClose, children }) {
  const { theme } = useContext(SettingsContext);
  const dimensions = useDimensions();

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onRequestClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors[theme],
          marginTop: dimensions.statusBarHeight,
        }}
      >
        <View style={styles.offset} />
        <BlockButton type="dark" size="medium" onPress={onRequestClose}>
          Close
        </BlockButton>
        <ScrollView>{children}</ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  offset: {
    height: 5,
  },
});

export default AppModal;
