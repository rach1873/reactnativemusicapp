import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Line from "../components/Line";
import Staff from "../components/Staff";
import Ledger from "../components/Ledger";
import MusicNote from "../components/MusicNote";
import Fundamental from "../components/Fundamental";
import { tb } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TrebleBottom() {
  return (
    <View className="flex-1">
      <Fundamental arr={tb} keyboardPosition="bottom-0" />
      <View style={{ position: "absolute", left: -40 }}>
        <MaterialCommunityIcons
          name="music-clef-treble"
          size={170}
          color="black"
        />
      </View>
    </View>
  );
}
