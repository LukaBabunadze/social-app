import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {

  const handleProfilePress = () => {
    console.log('Go To Profile')
  };
  
  return (
    <View style={s.container}>
      <Pressable>
        <FontAwesome5 name="heart" size={32} color="black" />
      </Pressable>
      <Pressable onPress={handleProfilePress} style={s.profileContainer}>
        <FontAwesome name="user-circle" size={38} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: 60,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    height: 55,
    width: 55,
    borderRadius: 24,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center",
  },
});
