import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import SegmentContainer from "../components/Interactions/SegmentContainer";
import { AppText, BlockButton } from "../components/common";
import routes from "../navigation/routes";
import { InteractionsContext } from "../context";

function Interaction({ route, navigation }) {
  const { segments } = useContext(InteractionsContext);

  return (
    <Screen orientation="landscape">
      {segments.length === 0 ? (
        <View>
          <AppText style={styles.text}>
            You have not added any interactions
          </AppText>
          <BlockButton
            type="info"
            size="large"
            onPress={() => navigation.navigate(routes.INTERACTIONSETUP)}
          >
            Setup Interactions
          </BlockButton>
        </View>
      ) : (
        <SegmentContainer />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default Interaction;
