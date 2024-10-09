import { Text, View } from "react-native";
import { useAppSelector } from "../hooks";

export function BalanceScreen() {
  const state = useAppSelector((state) => state);
  let transactionNumber = 0;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, padding: 10 }}>Balance Screen</Text>
      <Text style={{ fontSize: 20 }}>Balance: {state.balance}</Text>
      <Text style={{ fontSize: 30, padding: 10 }}>Transactions</Text>
      {state.transactions.map((Transaction, index) => (
        <Text style={{ fontSize: 20 }} key={index}>
          Transaction {(transactionNumber += 1)}: {Transaction} kr
        </Text>
      ))}
    </View>
  );
}
