import { Button, Text, View } from "react-native";
import { useAppDispatch } from "../hooks";
import { deposit } from "../Store/Bank/reducer";

export function DepositScreen() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Deposit Screen</Text>
      <Button title="Deposit 1000 kr" onPress={() => dispatch(deposit(1000))} />
    </View>
  );
}
