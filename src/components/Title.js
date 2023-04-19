import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const Title = ({ title }) => {
  return (
    <View style={s.container}>
      <Text style={s.titleStyle}>{title}</Text>
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
