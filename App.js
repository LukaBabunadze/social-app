import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import Workout from "./src/Workout";
import MenuItem from "./src/MenuItem";
import Header from "./src/Header";
import Title from "./src/Title";

const MENU_DATA = [
  { iconName: "fitness-outline" },
  { iconName: "man" },
  { iconName: "woman" },
  { iconName: "bicycle" },
  { iconName: "football" },
];

export default function App() {
  return (
    <View style={s.container}>
      <Header />
      <Title title={"Select Workout"} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.menuContainer}
      >
        {MENU_DATA.map((item) => (
          <MenuItem name={item.iconName} />
        ))}
      </ScrollView>

      {/* <FlatList
        data={MENU_DATA}
        horizontal={true}
        contentContainerStyle={s.menuContainer}
        renderItem={({ item }) => <MenuItem name={item.iconName} />}
        showsHorizontalScrollIndicator={false}
      /> */}

      <View style={s.workoutContainer}>
        <Workout
          title={"Yoga"}
          instructor={"Daniel Roberston"}
          time={20}
          backColor={"#59caeb"}
        />
        <Workout
          title={"Drill"}
          instructor={"Jany Fox"}
          time={10}
          backColor={"#ebb7d8"}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  menuContainer: {
    marginBottom: 30,
    paddingVertical: 2,
  },
});
