import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Workout = ({ title, instructor, time, backColor }) => {
  const handleButtonPress = () => {
    console.log("Button Pressed");
  };

  return (
    <View style={[s.conatainer, { backgroundColor: backColor }]}>
      <View style={s.textContainer}>
        <View style={s.titleWrapper}>
          <Text style={s.title}>{title}</Text>
          <Text style={s.instructor}>with {instructor}</Text>
        </View>
        <View style={s.buttonWrapper}>
          <Pressable onPress={handleButtonPress} style={s.button}>
            <AntDesign name="caretright" size={20} color="black" />
            <Text style={s.timer}>{time} min</Text>
          </Pressable>
        </View>
      </View>

      <View style={s.imageContainer}>
        <Image style={s.image} source={require("../assets/workout.png")} />
      </View>
    </View>
  );
};

export default Workout;

const s = StyleSheet.create({
  conatainer: {
    height: 180,
    borderRadius: 40,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.235,
    shadowRadius: 20,

    elevation: 2,
  },
  testContainer: {
    backgroundColor: "yellow",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    height: 170,
    width: 120,
    marginLeft: 30,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  instructor: {
    fontSize: 12,
    fontWeight: "400",
    color: "#858483",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
  },
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
