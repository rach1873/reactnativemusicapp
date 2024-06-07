import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Staff from "./Staff";
import Ledger from "./Ledger";
import MusicNote from "./MusicNote";

interface FundamentalProps {
  arr: { register: string; lines: number; position: number }[];
  keyboardPosition: "bottom-0" | "top-0";
}

export default function Fundamental({
  arr,
  keyboardPosition,
}: FundamentalProps) {
  const [state, setState] = useState(arr[0]);

  const handleClick = (arg1: string): void => {
    const random = Math.floor(Math.random() * arr.length);

    if (state.register[0] === arg1) {
      setState(arr[random]);
    }
  };
  return (
    <>
      {/*//? Musical Staff*/}
      <Staff />
      <Ledger lines={state.lines} register={state.register} />
      {/*//? NoteHead*/}
      <MusicNote topNum={state.position} />
      {/*//? Piano Notes*/}
      <View className={`absolute ${keyboardPosition} right-0 pr-2`}>
        {["C", "D", "E", "F", "G", "A", "B"].map((note) => {
          return (
            <TouchableOpacity
              key={note}
              className="w-12 h-12 mt-2 bg-black rounded-full items-center justify-center"
              onPress={() => handleClick(note)}
            >
              <Text className="text-white text-2xl">{note}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
