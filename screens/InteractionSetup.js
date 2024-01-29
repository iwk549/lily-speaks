import React, { useContext } from "react";
import { Alert, StyleSheet } from "react-native";
import Screen from "./../components/Screen";
import { AppText, BlockButton, PageHeader } from "../components/common";
import { InteractionsContext } from "../context";
import SegmentEditor from "../components/Interactions/SegmentEditor";
import SegmentContainer from "../components/Interactions/SegmentContainer";
import useDimensions from "../hooks/useDimensions";
import routes from "../navigation/routes";

function InteractionSetup({ navigation }) {
  const dimensions = useDimensions();
  const { segments, setSegments } = useContext(InteractionsContext);

  const handleSaveInteraction = (interaction) => {
    const currentSegments = [...segments];
    currentSegments.push(interaction);
    setSegments(currentSegments);
  };

  const clearAllSegments = () => {
    Alert.alert(
      "Clear all Interactions",
      "Are you sure you want to clear your current Interactions setup?",
      [{ text: "No" }, { text: "Yes", onPress: () => setSegments([]) }]
    );
  };

  return (
    <Screen orientation="portrait" scroll={true}>
      <PageHeader>Interactions Setup</PageHeader>
      <AppText style={styles.text}>
        Manage how the Interactions screen will appear
      </AppText>
      <AppText style={styles.text}>
        Select each segment you want to display. Segments will be displayed
        evenly across the screen
      </AppText>
      {segments.length >= 9 ? (
        <AppText style={styles.text} type="danger">
          You have added the maximum number of Interactions for a single page
        </AppText>
      ) : (
        <SegmentEditor onSave={handleSaveInteraction} />
      )}
      {segments.length > 0 ? (
        <>
          <BlockButton type="dark" size="small" onPress={clearAllSegments}>
            Clear All Segments
          </BlockButton>
          <AppText style={styles.text}>
            Below is an image only preview of your current Interactions screen.
            Go to the Interactions screen to test your Interactions
          </AppText>
          <BlockButton
            type="info"
            size="medium"
            onPress={() => navigation.navigate(routes.INTERACTION)}
          >
            Go to Interactions Screen
          </BlockButton>
          <SegmentContainer
            segments={segments}
            displayOnly={true}
            containerSize={{ width: dimensions.width, height: 200 }}
          />
        </>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default InteractionSetup;
