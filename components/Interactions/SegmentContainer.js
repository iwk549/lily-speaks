import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import Segment from "./Segment";
import { sizes } from "../../config";
import useDimensions from "../../hooks/useDimensions";

function SegmentContainer({ segments = [] }) {
  const dimensions = useDimensions();

  const [mappedSegments, setMappedSegments] = useState([]);

  useEffect(() => {
    mapSegments();
  }, [segments, dimensions]);

  const mapSegments = () => {
    // TODO function here to map segments into matrix based on user selections
    // for now assume two rows of two
    const seg1 = segments[0];
    const seg2 = segments[1];
    setMappedSegments([
      [seg1, seg2],
      [seg1, seg2],
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        {mappedSegments.map((row, rowIdx) => (
          <View key={rowIdx} style={[styles.row]}>
            {row.map((segment, colIdx) => (
              <View
                key={colIdx}
                style={[
                  {
                    height:
                      (dimensions.height -
                        dimensions.statusBarHeight -
                        sizes.margin * 2) /
                      mappedSegments.length,
                    width: dimensions.width / row.length - sizes.margin * 2,
                    marginTop: sizes.margin,
                  },
                ]}
              >
                <Segment image={segment.image} audio={segment.audio} />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginLeft: 5,
  },
  columns: {
    flexDirection: "column",
  },
});

export default SegmentContainer;
