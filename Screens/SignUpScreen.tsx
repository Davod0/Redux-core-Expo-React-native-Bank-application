import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { auth } from "../firebase";

export function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      console.log("email: ", email);
      console.log("password: ", password);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      result.user;
      console.log("user: ", result.user);
    } catch (error) {
      console.error(error);
    }
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
