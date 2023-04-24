import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const Title = ({ title, addContainerStyle, addTextStyle }) => {
  return (
    <View style={[s.container, addContainerStyle]}>
      <Text style={[s.titleStyle, addTextStyle]}>{title}</Text>
    </View>
  );
};

export default Title;

const s = StyleSheet.create({
  container: {
    marginBottom: 30,
    width: 200,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: "600",
    lineHeight: 40,
    letterSpacing: 1.125,
    fontFamily: Platform.select({ android: "cursive" }, { ios: "" }),
  },
});
