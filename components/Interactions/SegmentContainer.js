import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import Segment from "./Segment";
import { sizes } from "../../config";
import useDimensions from "../../hooks/useDimensions";
import { InteractionsContext } from "../../context";

const columnMap = [1, 2, 2, 2, 3, 3, 3, 3, 3];

function SegmentContainer({ displayOnly, containerSize }) {
  const dimensions = useDimensions();

  const { segments } = useContext(InteractionsContext);

  const mapSegments = () => {
    const columns = columnMap[segments.length - 1];

    const mappedSegments = [];
    const row = [];
    segments.forEach((s, idx) => {
      if (idx !== 0 && idx % columns === 0) {
        mappedSegments.push([...row]);
        row.length = 0;
      }
      row.push(s);
    });
    if (row.length) mappedSegments.push([...row]);

    return mappedSegments;
  };

  return (
    <View style={styles.container}>
      <View>
        {mapSegments().map((row, rowIdx, arr) => (
          <View key={rowIdx} style={[styles.row]}>
            {row.map((segment, colIdx) => (
              <View
                key={colIdx}
                style={[
                  {
                    height: containerSize
                      ? containerSize.height / arr.length
                      : (dimensions.height -
                          dimensions.statusBarHeight -
                          sizes.margin * 2) /
                        arr.length,
                    width: containerSize
                      ? containerSize.width / row.length
                      : dimensions.width / row.length - sizes.margin * 2,
                    marginTop: sizes.margin,
                  },
                ]}
              >
                <Segment
                  label={segment.label}
                  image={segment.image}
                  audio={segment.audio}
                  displayOnly={displayOnly}
                  idx={colIdx}
                />
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
