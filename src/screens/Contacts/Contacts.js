import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Contacts = () => {
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

  return (
    <FlatList
      contentContainerStyle={s.flatlistStyle}
      showsVerticalScrollIndicator={false}
      data={users}
      renderItem={({ item, index }) => (
        <View style={[s.contactItem, index % 2 !== 0 ? s.evenItemStyle : ""]}>
          {console.log(item)}
          <View style={s.contactIcon}>
            <FontAwesome5
              name="user-plus"
              size={30}
              color={index % 2 === 0 ? "#c4e8fe" : "#658fa8"}
            />
          </View>
          <View style={s.textWrapper}>
            <View style={s.nameWrapper}>
              <Text style={[s.name, index % 2 !== 0 && s.darkTextStyle]}>
                {item.name.firstname}{" "}
              </Text>
              <Text style={[s.name, index % 2 !== 0 && s.darkTextStyle]}>
                {item.name.lastname}{" "}
                {
                  <Text style={[s.name, index % 2 !== 0 && s.darkTextStyle]}>
                    ({item.username})
                  </Text>
                }
              </Text>
            </View>
            <Text style={[s.emailStyle, index % 2 !== 0 && s.darkTextStyle]}>
              {item.email}
            </Text>
            <Text style={[s.emailStyle, index % 2 !== 0 && s.darkTextStyle]}>
              {item.phone}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default Contacts;

const s = StyleSheet.create({
  container: {},
  contactItem: {
    backgroundColor: "#757575",
    height: 80,
    marginBottom: 24,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.235,
    shadowRadius: 2,

    elevation: 2,
  },
  evenItemStyle: {
    backgroundColor: "#dedede",
  },
  flatlistStyle: {
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  contactIcon: {
    marginRight: 12,
    marginLeft: 16,
  },
  textWrapper: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    justifyContent: "center",
  },
  nameWrapper: {
    flexDirection: "row",
    marginVertical: 4,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  emailStyle: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 3,
  },
  darkTextStyle: {
    color: "#4f4f4f",
  },
});
