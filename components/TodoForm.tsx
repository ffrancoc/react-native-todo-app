import { FontAwesome6 } from "@expo/vector-icons";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

type Props = {
  callback: (text: string) => void;
};

const TodoForm = ({ callback }: Props) => {
  const [todoText, setTodoText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="todo text"
        style={styles.entryControl}
        value={todoText}
        onChangeText={setTodoText}
      ></TextInput>
      <TouchableOpacity
        style={styles.buttonControl}
        onPress={() => {
          callback(todoText);
          setTodoText("");
        }}
      >
        <FontAwesome6 name="add" size={24} color="dodgerblue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 80,
    padding: 10,
    position: "relative",
  },

  entryControl: {
    flex: 1,
    height: 50,
    paddingStart: 10,
    paddingRight: 55,
    backgroundColor: "#f6f5f4",
    borderRadius: 20,
    fontSize: 18,
  },

  buttonControl: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute",
    right: 0,
    borderWidth: 10,
    borderColor: "#deddda",
  },
});

export default TodoForm;
