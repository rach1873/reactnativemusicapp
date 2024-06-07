import React from "react";
import { View, Text, Dimensions } from "react-native";

interface LineProps {
  width?: number;
  alignCenter?: string;
}

export default function Line({ width, alignCenter }: LineProps) {
  return (
    <View
      style={{
        width: width,
        backgroundColor: "black",
        height: 8,
        marginBottom: 30,
        borderRadius: 5,
        alignSelf: alignCenter,
      }}
    ></View>
  );
}
