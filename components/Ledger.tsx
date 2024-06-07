import React from "react";
import { View, Text } from "react-native";
import Line from "./Line";

//how many lines --> length
//piano register --> key

interface MusicNoteProps {
  lines: number;
  register: string;
}

{
  /*//? This components builds out the lines*/
}
export default function Ledger({ lines, register }: MusicNoteProps) {
  return (
    <View>
      {Array.from({ length: lines })
        .map((line, idx) => (line = idx))
        .map((x, index) => (
          <Line key={`${register}-${index}`} width={90} alignCenter="center" />
        ))}
    </View>
  );
}
