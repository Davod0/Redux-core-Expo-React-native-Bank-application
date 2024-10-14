import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { signInUser } from "../Store/User/actions";

export function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const errorMesssage = useAppSelector((state) => state.user.error);

  const handleSignIn = async () => {
    await dispatch(signInUser({ email, password }));
  };

  return (
    <View>
      <Text>Sign in Screen</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        disabled={isLoading}
        title={isLoading ? "sign in....." : "sign in"}
        onPress={() => {
          handleSignIn();
        }}
      />

      {errorMesssage && <Text>{errorMesssage}</Text>}
    </View>
  );
}
