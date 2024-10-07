import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RootStack } from "./Navigators/RootStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <StatusBar style="auto" />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
