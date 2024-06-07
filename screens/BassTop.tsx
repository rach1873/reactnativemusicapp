import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import FundamentalTwo from "../components/FundamentalTwo";
import { bt } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BassTop() {
  return (
    <View className="flex-1 justify-end">
      <FundamentalTwo arr={bt} keyboardPosition="top-0" />
      <View style={{ position: "absolute", bottom: 90, left: -12 }}>
        <MaterialCommunityIcons
          name="music-clef-bass"
          size={100}
          color="black"
        />
      </View>
    </View>
  );
}
