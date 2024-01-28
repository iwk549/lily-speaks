import React from "react";
import { StyleSheet, View, Image } from "react-native";

function AppImage({ uri, style = {} }) {
  const source = { uri };

  return (
    <View style={[styles.container, style]}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default AppImage;
