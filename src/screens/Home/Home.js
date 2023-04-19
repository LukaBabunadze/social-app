import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import Workout from "../../components/Workout";
import MenuItem from "../../components/MenuItem";
import Header from "../../components/Header";
import Title from "../../components/Title";

const MENU_DATA = [
  { iconName: "fitness-outline", id: 0 },
  { iconName: "man", id: 1 },
  { iconName: "woman", id: 2 },
  { iconName: "bicycle", id: 3 },
  { iconName: "football", id: 4 },
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
          <MenuItem name={item.iconName} key={item.id} />
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
