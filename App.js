import { useState } from "react";
import BottomTabNavigation from "./src/navigation/BottomTabs/BottomTabNavigation";
import Home from "./src/screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack/AuthStack";

export default function App() {
  const [isUser, setIsUser] = useState(false);

  return (
    <NavigationContainer>
      {isUser ? <BottomTabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}
