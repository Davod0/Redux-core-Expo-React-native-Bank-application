import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabStackNavigator } from "./TabStackNavigator";

export type RootStackParamList = {
  TabStackNavigator: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabStackNavigator"
        component={TabStackNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
