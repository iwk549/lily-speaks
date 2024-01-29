import React from "react";
import { StyleSheet, Image } from "react-native";

function AppImage({ uri, file, label, style = {} }) {
  if (!uri && !file) return null;
  const source = file || { uri };

  return <Image source={source} style={[styles.image, style]} alt={label} />;
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "center",
    borderRadius: 5,
  },
});

export default AppImage;
