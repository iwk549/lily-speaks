import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import Screen from "../components/Screen";
import SegmentContainer from "../components/Interactions/SegmentContainer";

function Interaction({ route, navigation }) {
  return (
    <Screen orientation="landscape">
      <SegmentContainer
        segments={[
          { image: "cantina", audio: "CantinaBand3.wav" },
          { image: "carrot", audio: "" },
        ]}
      />
    </Screen>
  );
}

export default Interaction;
