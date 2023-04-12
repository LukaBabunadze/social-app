import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import Workout from "../../components/Workout";
import MenuItem from "../../components/MenuItem";
import Header from "../../components/Header";
import Title from "../../components/Title";

const MENU_DATA = [
  { iconName: "fitness-outline" },
  { iconName: "man" },
  { iconName: "woman" },
  { iconName: "bicycle" },
  { iconName: "football" },
];

const Home = () => {
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
};

export default Home;

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
