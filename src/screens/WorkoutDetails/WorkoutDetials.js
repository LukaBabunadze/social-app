import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AppButton from "../../components/AppButton";
import { AntDesign } from "@expo/vector-icons";
import PreviewModal from "../Modals/PreviewModal";

const WorkoutDetials = ({ route }) => {
  const { duration, trainerName, workoutTitle } = route.params;

  const [openModal, setOpenModal] = useState(false);

  return (
    <ScrollView contentContainerStyle={s.container}>
      <ImageBackground
        source={{
          uri: "https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1215769909_1000x.jpg?v=1628540182",
        }}
        resizeMode="cover"
        style={s.imageBackgroundStyle}
      >
        <Text style={s.title}>{workoutTitle}</Text>
        <AppButton time={duration} />
      </ImageBackground>
      <View style={s.nameWrapper}>
        <View>
          <Text style={s.name}>{trainerName}</Text>
          <Text style={s.nameDesc}>Yoga Coach - 3 more lessons</Text>
        </View>
        <Pressable style={s.starWrapper}>
          <AntDesign name="star" size={20} color="rgb(255, 220, 14)" />
        </Pressable>
      </View>
      <Pressable style={s.button}>
        <Text style={[s.name, s.buttonText]}>Let's Go</Text>
      </Pressable>
      <Pressable
        style={[s.button, s.previewButton]}
        onPress={() => setOpenModal(true)}
      >
        <View style={s.previewButtonIcon}>
          <AntDesign name="caretright" size={10} color="black" />
        </View>
        <Text style={[s.name, s.buttonText]}>Preview</Text>
      </Pressable>
      <Text style={s.description}>
        A tiny VS Code extension made up of a few commands that generate and
        insert lorem ipsum text into a text file. To use the extension, A tiny
        VS Code extension made up of a few commands that generate and insert
        lorem ipsum text into a text file. To use the extension, A tiny VS Code
        extension made up of a few commands that generate and insert lorem ipsum
        text into a text file. To use the extension,
      </Text>
      <PreviewModal openModal={openModal} setOpenModal={setOpenModal} />
    </ScrollView>
  );
};

export default WorkoutDetials;

const s = StyleSheet.create({
  container: {
    backgroundColor: "#1c1b1b",
    paddingBottom: 40,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // overflow: "hidden",
  },
  imageBackgroundStyle: {
    height: 350,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 280,
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
  },
  nameWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonText: {
    fontSize: 18,
  },
  nameDesc: {
    color: "#b0b0b0",
    marginTop: 6,
  },
  starWrapper: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255, 220, 14, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#5f5bff",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 18,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  previewButton: {
    backgroundColor: "#363535",
    flexDirection: "row",
  },
  previewButtonIcon: {
    height: 18,
    width: 18,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  description: {
    paddingHorizontal: 20,
    color: "white",
    marginVertical: 20,
    lineHeight: 20,
    letterSpacing: 0.25,
    textTransform: "uppercase",
    fontSize: 12,
  },
});
