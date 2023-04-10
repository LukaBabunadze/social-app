import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = ({name}) => {
  return (
    <View style={s.container}>
      <Ionicons name={name} size={24} color="black" />
    </View>
  );
};

export default MenuItem;

const s = StyleSheet.create({
  container: {
    backgroundColor: "#e3e3e3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});
