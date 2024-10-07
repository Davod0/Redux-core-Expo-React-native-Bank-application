import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks";

export function DepositScreen() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Deposit Screen</Text>
      <Button
        title="Deposit 1000 kr"
        onPress={() => dispatch({ type: "DEPOSIT", payload: 1000 })}
      />
    </View>
  );
}
