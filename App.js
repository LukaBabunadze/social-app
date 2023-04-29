import { useState, createContext, useEffect } from "react";
import BottomTabNavigation from "./src/navigation/BottomTabs/BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack/AuthStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export default function App() {
  const [authorized, setAuthorized] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const saveUser = async () => {
    const u = JSON.stringify(isUser);
    await AsyncStorage.setItem("user", u);
    setAuthorized(true);
  };

  const checkIfUserExists = async () => {
    const userExists = await AsyncStorage.getItem("user");
    if (userExists !== null) {
      setAuthorized(true);
    }
  };

  useEffect(() => {
    checkIfUserExists();
  }, []);

  useEffect(() => {
    if (isUser !== false) {
      saveUser();
    }
  }, [isUser]);

  return (
    <UserContext.Provider value={{setIsUser, setAuthorized}}>
      <NavigationContainer>
        {authorized ? <BottomTabNavigation /> : <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
