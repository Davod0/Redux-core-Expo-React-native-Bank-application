import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BalanceScreen } from "../Screens/BalanceScreen";
import { DepositScreen } from "../Screens/DepositScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { SignUpScreen } from "../Screens/SignUpScreen";

export type TabParamList = {
  Balance: undefined;
  Deposit: undefined;
  SignUp: undefined;
  Profile: undefined;
};
export const TabStack = createBottomTabNavigator<TabParamList>();

export function TabStackNavigator() {
  return (
    <TabStack.Navigator initialRouteName="SignUp">
      <TabStack.Screen
        name="Balance"
        component={BalanceScreen}
        options={{
          title: "Balance",
          tabBarIcon: (props) => (
            <MaterialIcons
              name="account-balance"
              size={24}
              color={props.color}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="Deposit"
        component={DepositScreen}
        options={{
          title: "Deposit",
          tabBarIcon: (props) => (
            <FontAwesome name="credit-card" size={24} color={props.color} />
          ),
        }}
      />
      <TabStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: "Sign up",
          tabBarIcon: (props) => (
            <FontAwesome name="sign-in" size={24} color="black" />
          ),
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: (props) => (
            <EvilIcons name="user" size={24} color={props.color} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
}
