import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const Schedule = () => {
  const [cartProducts, setCartProducts] = useState([
    "apple",
    "watermelon",
    "strawberry",
  ]);

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  const handlePlusMsxali = () => {
    setCartProducts(["apple", "watermelon", "strawberry", "msxali"]);
    // const myArr = [...cartProducts, "msxali"];
    // setCartProducts(myArr);
  };

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.button}
        activeOpacity={0.3}
        onPress={handlePlusMsxali}
      >
        <Text style={{ color: "white" }}>Plus 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[s.button, s.minusButton]} activeOpacity={0.3}>
        <Text style={{ color: "white" }}>Minus 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  minusButton: {
    backgroundColor: "red",
    marginTop: 20,
  },
});
