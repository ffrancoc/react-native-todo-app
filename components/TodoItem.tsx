import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Todo } from "../model/Todo";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

type Props = {
  todo: Todo;
  delCallback: (id: string) => void;
  checkCallback: (id: string) => void;
};

const TodoItem = ({ todo, delCallback, checkCallback }: Props) => {
  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={styles.rightActionBox}
        onPress={() => delCallback(todo.id)}
      >
        <AntDesign name="close" size={24} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <Animatable.View animation="fadeInDown">
          <TouchableOpacity
            style={styles.container}
            onPress={() => checkCallback(todo.id)}
          >
            <Text
              style={
                todo.state ? styles.todoItemTextChecked : styles.todoItemText
              }
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f6f5f4",
  },

  todoItemText: {
    fontSize: 18,
  },

  todoItemTextChecked: {
    fontSize: 18,
    textDecorationLine: "line-through",
  },

  rightActionBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 43,
    backgroundColor: "#f66151",
  },
});

export default TodoItem;
