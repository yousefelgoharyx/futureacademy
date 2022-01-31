import React from "react";
import { View } from "react-native";

const Spacer = ({ size = 16 }) => {
  return <View style={{ width: size, height: size }}></View>;
};

export default Spacer;
