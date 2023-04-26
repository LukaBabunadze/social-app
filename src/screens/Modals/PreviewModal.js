import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";

const PreviewModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      visible={openModal}
      animationType="slide"
      transparent
      overFullScreen={true}
    >
      <View style={s.mainBackgroundContainer}>
        <View style={s.container}>
          <TouchableOpacity
            style={s.button}
            onPress={() => setOpenModal(false)}
          >
            <Text style={s.text}>Hello from Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PreviewModal;

const s = StyleSheet.create({
  mainBackgroundContainer: {
    backgroundColor: "rgba(41, 31, 36, 0.8)",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFC84F",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "800",
    color: "white",
    marginHorizontal: 16,
  },
});
