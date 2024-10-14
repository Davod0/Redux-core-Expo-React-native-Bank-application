import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { auth } from "../firebase";
import { useAppDispatch } from "../hooks";
import { signUpUser } from "../Store/User/actions";

export function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSignUp = async () => {
    dispatch(signUpUser({email, password}));
  };

  return (
    <View>
      <Text>Sign up Screen</Text>
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
        title="Sign up"
        onPress={() => {
          handleSignUp();
        }}
      />
    </View>
  );
}
