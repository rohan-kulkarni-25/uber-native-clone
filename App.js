// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import { SavedPlaces } from "./src/features/savedplaces/screens/saved-places.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/features/home/screens/home.screen";
import { MapScreen } from "./src/features/map/screens/map.screen";
const height = Platform.OS === "android" ? StatusBar.currentHeight : "";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Saved Places" component={SavedPlaces} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
