import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";

function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    statusBarHeight: 0,
  });

  useEffect(() => {
    handleSetDimensions();
    const sub = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );

    return () => {
      sub.remove();
    };
  }, []);

  const handleOrientationChange = () => {
    handleSetDimensions();
  };

  const handleSetDimensions = () => {
    const window = Dimensions.get("window");
    setDimensions({
      width: window.width,
      height: window.height,
      statusBarHeight: Constants.statusBarHeight,
    });
  };

  return dimensions;
}

export default useDimensions;
