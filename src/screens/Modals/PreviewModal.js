import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";

const PreviewModal = () => {
  return (
    <Modal visible={false} transparent overFullScreen={true}>
      <View style={s.mainBackgroundContainer}>
        <View style={s.container}>
          <Text>Hello from Modal</Text>
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
  },
});
