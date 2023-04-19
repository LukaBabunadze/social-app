import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AppButton = ({ time, handlePress }) => {
  return (
    <Pressable onPress={handlePress} style={s.button}>
      <AntDesign name="caretright" size={20} color="black" />
      <Text style={s.timer}>{time} min</Text>
    </Pressable>
  );
};

export default AppButton;

const s = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 120,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 12,
  },
  timer: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});
