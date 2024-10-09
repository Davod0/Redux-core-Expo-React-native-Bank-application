import { Text, View } from "react-native";
import { useAppSelector } from "../hooks";
import { selectBank } from "../Store/Bank/selectors";

export function BalanceScreen() {
  const bankState = useAppSelector(selectBank);
  const userState = useAppSelector((state) => state.user);
  let transactionNumber = 0;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, padding: 10 }}>Name: {userState.name}</Text>
      <Text style={{ fontSize: 20 }}>Balance: {bankState.balance}</Text>
      <Text style={{ fontSize: 30, padding: 10 }}>Transactions</Text>
      {bankState.transactions.map((Transaction, index) => (
        <Text style={{ fontSize: 20 }} key={index}>
          Transaction {(transactionNumber += 1)}: {Transaction} kr
        </Text>
      ))}
    </View>
  );
}
