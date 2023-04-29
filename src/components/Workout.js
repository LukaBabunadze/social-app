import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AppButton from "./AppButton";

const Workout = ({ title, instructor, time, backColor }) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("WorkoutDetails", {
      duration: time,
      trainerName: instructor,
      workoutTitle: title,
    });
  };

  return (
    <View style={[s.conatainer, { backgroundColor: backColor }]}>
      <View style={s.textContainer}>
        <View style={s.titleWrapper}>
          {/* {Platform.OS === "android" ? <Text>android</Text> : <Text>ios</Text>} */}
          <Text style={s.title}>{title}</Text>
          <Text style={s.instructor}>with {instructor}</Text>
        </View>
        <View style={s.buttonWrapper}>
          <AppButton handlePress={handleButtonPress} time={time} />
        </View>
      </View>

      <View style={s.imageContainer}>
        <Image style={s.image} source={require("../../assets/workout.png")} />
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
});
