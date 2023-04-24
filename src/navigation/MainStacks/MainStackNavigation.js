import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home/Home";
import WorkoutDetials from "../../screens/WorkoutDetails/WorkoutDetials";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "Workout Details" }}
        name="WorkoutDetails"
        component={WorkoutDetials}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };

const s = StyleSheet.create({});
