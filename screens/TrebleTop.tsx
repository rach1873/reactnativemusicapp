import React from "react";
import { View, Text } from "react-native";
import FundamentalTwo from "../components/FundamentalTwo";
import { tt } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TrebleTop() {
  return (
    <View className="flex-1 justify-end">
      <FundamentalTwo arr={tt} keyboardPosition="top-0" />
      <View style={{ position: "absolute", left: -40, bottom: 12 }}>
        <MaterialCommunityIcons
          name="music-clef-treble"
          size={170}
          color="black"
        />
      </View>
    </View>
  );
}
