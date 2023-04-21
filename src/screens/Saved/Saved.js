import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Saved = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://fakestoreapi.com/users")
      .then((result) => result.json())
      .then((res) => {
        setUsers(res);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // useEffect(() => {
  //   users.map((user) => console.log(user));
  // }, [users]);

  return (
    <View style={s.container}>
      <FlatList
        contentContainerStyle={s.flatlistStyle}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item }) => (
          <View style={s.contactItem}>
            <View style={s.contactIcon}>
              <FontAwesome5 name="user-plus" size={30} color="#c4e8fe" />
            </View>
            <View style={s.textWrapper}>
              <View style={s.nameWrapper}>
                <Text style={s.name}>{item.name.firstname} </Text>
                <Text style={s.name}>{item.name.lastname}</Text>
              </View>
              <Text>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Saved;

const s = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  contactItem: {
    backgroundColor: "#eda335",
    height: 80,
    marginBottom: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  flatlistStyle: {
    paddingTop: 10,
    paddingBottom: 50,
  },
  contactIcon: {
    marginHorizontal: 12,
  },
  textWrapper: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
  },
  nameWrapper: {
    flexDirection: "row",
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
