import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/Home";
import Schedule from "../../screens/Schedule/Schedule";
import Saved from "../../screens/Contacts/Contacts";
import Goals from "../../screens/Goals/Goals";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { HomeStack } from "../MainStacks/MainStackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: "gray",
        tabBarStyle: s.tabBarBaclStyle,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={size}
              color={color}
            />
          ),
        }}
        name={"HomeStack"}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "calendar-day" : "calendar"}
              size={size}
              color={color}
            />
          ),
        }}
        name={"Schedule"}
        component={Schedule}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "medal" : "medal-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name={"Goals"}
        component={Goals}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "save" : "save-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: true,
          headerTitle: "Contacts",
          headerTitleStyle: {textTransform: 'uppercase', paddingVertical: 5,}
        }}
        name={"Saved"}
        component={Saved}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const s = StyleSheet.create({
  tabBarBaclStyle: {
    alignItems: "center",
    paddingTop: 10,
  },
});
