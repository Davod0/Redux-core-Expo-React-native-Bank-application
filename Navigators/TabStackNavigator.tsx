import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BalanceScreen } from "../Screens/BalanceScreen";
import { DepositScreen } from "../Screens/DepositScreen";
import { WithdrawScreen } from "../Screens/WithdrawScreen";

export type TabParamList = {
  Balance: undefined;
  Deposit: undefined;
  Withdraw: undefined;
};
export const TabStack = createBottomTabNavigator<TabParamList>();

export function TabStackNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Balance" component={BalanceScreen} />
      <TabStack.Screen name="Deposit" component={DepositScreen} />
      <TabStack.Screen name="Withdraw" component={WithdrawScreen} />
      {/* <TabStack.Screen
        name="Withdraw"
        component={WithdrawScreen}
        options={{
          title: "Balance",
          tabBarIcon: (props) => (
            <MaterialIcons name="home" size={24} color={props.color} />
          ),
        }}
      /> */}
    </TabStack.Navigator>
  );
}
