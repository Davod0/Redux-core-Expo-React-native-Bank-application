import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../hooks";
import { setNameAction } from "../Store/User/reducer";

export function ProfileScreen() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.label}>Enter your name:</Text>
      {/* <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#888"
      /> */}
      <Button
        title="Save"
        onPress={() => dispatch(setNameAction(name), setName(""))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007aff",
    padding: 10,
  },
});
