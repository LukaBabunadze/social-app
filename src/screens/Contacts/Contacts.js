import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Contacts = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://fakestoreapi.com/users")
      .then((result) => result.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (userId) => {
    fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const updateUser = (userId) => {
    fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <FlatList
      contentContainerStyle={s.flatlistStyle}
      showsVerticalScrollIndicator={false}
      data={users}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => deleteUser(item.id)}
          style={[s.contactItem, index % 2 !== 0 ? s.evenItemStyle : ""]}
        >
          {/* {console.log(item)} */}
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
        </TouchableOpacity>
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
