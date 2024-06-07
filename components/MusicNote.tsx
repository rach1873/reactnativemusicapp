import React from "react";
import { View, Text } from "react-native";

interface MusicNoteProps {
  topNum: number;
}

export default function MusicNote({ topNum }: MusicNoteProps) {
  return (
    <View
      className="w-12 h-12 bg-black rounded-full -skew-y-12 self-center"
      style={{ position: "absolute", top: topNum }}
    ></View>
  );
}
