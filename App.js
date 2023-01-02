import React from "react";
import { View, Text } from "react-native";
import { TextButton } from "./src/components/textButton";
import { MainScreen } from "./src/screens/mainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GroceryScreen } from "./src/screens/groceryScreen";
import DairyScreen from "./src/screens/dairyScreen/dairyScreen";
import TotalScreen from "./src/screens/totalScreen/totalScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="GroceryScreen" component={GroceryScreen} />
        <Stack.Screen name="DairyScreen" component={DairyScreen} />
        <Stack.Screen name="TotalScreen" component={TotalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
