import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

export type RootStackParamList = {
  Home: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigator() {
  return (
    <View>
      <Text>Root Stack</Text>
    </View>
  );
}
