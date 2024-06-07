import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Line from "../components/Line";
import Staff from "../components/Staff";
import Ledger from "../components/Ledger";
import MusicNote from "../components/MusicNote";
import Fundamental from "../components/Fundamental";
import { bb } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BassBottom() {
  return (
    <View className="flex-1">
      <Fundamental arr={bb} keyboardPosition="bottom-0" />
      <View style={{ position: "absolute", left: -12 }}>
        <MaterialCommunityIcons
          name="music-clef-bass"
          size={100}
          color="black"
        />
      </View>
    </View>
  );
}
