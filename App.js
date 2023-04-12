import BottomTabNavigation from "./src/navigation/BottomTabs/BottomTabNavigation";
import Home from "./src/screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
