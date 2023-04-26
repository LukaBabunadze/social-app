import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Workout from "../../components/Workout";
import MenuItem from "../../components/MenuItem";
import Header from "../../components/Header";
import Title from "../../components/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { UserContext } from "../../../App";

const MENU_DATA = [
  { iconName: "fitness-outline", id: 0 },
  { iconName: "man", id: 1 },
  { iconName: "woman", id: 2 },
  { iconName: "bicycle", id: 3 },
  { iconName: "football", id: 4 },
];

const Home = () => {
  const { setAuthorized } = useContext(UserContext);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem("user");
    setAuthorized(false);
  };
  
  return (
    <ScrollView
      contentContainerStyle={s.container}
      showsVerticalScrollIndicator={false}
    >
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
      <TouchableOpacity style={s.signoutButton} onPress={handleSignOut}>
        <Text style={s.signoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  menuContainer: {
    marginBottom: 30,
    paddingVertical: 2,
  },
  signoutButton: {
    backgroundColor: "#FFC84F",
    height: 50,
    borderRadius: 8,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  signoutText: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
});
