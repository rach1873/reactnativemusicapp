import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import Line from "./Line";

export default function Staff() {
  return (
    <View>
      <FlatList
        data={Array.from({ length: 5 }).map((x, i) => (x = i))}
        renderItem={({ item }) => <Line key={item} />}
      />
    </View>
  );
}
