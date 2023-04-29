import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Title from "../../components/Title";
import { UserContext } from "../../../App";

const Login = () => {
  const { setIsUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        // username: "mor_2314",
        // password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => setIsUser(json))
      .catch((error) => console.error(error));
  };

  return (
    <View style={s.container}>
      <Title
        title="Get Started with Aero Fitness"
        addContainerStyle={s.titleContainer}
        addTextStyle={s.titleTextStyle}
      />
      <TextInput
        style={s.inputWrapper}
        placeholder="enter your name"
        onChangeText={setUsername}
      />
      <TextInput
        style={s.inputWrapper}
        placeholder="enter your password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={s.loginButton} onPress={handleUserLogin}>
        <Text style={s.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    width: "100%",
  },
  titleTextStyle: {
    textAlign: "center",
    color: "#757575",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontSize: 30,
    lineHeight: 30,
  },
  inputWrapper: {
    height: 50,
    borderWidth: 1,
    borderColor: "#757575",
    borderRadius: 8,
    marginBottom: 24,
    paddingLeft: 14,
  },
  loginButton: {
    backgroundColor: "#FFC84F",
    height: 50,
    borderRadius: 8,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "800",
    color: "white",
  },
});
