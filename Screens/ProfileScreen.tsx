import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks";

export function ProfileScreen() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}
