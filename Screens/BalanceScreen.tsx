import { Text, View } from "react-native";
import { useAppSelector } from "../hooks";

export function BalanceScreen() {
  const balance = useAppSelector((state) => state);
  return (
    <View>
      <Text>Balance Screen</Text>
      <Text>Balance {balance}</Text>
    </View>
  );
}
