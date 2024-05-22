import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Todo } from "../model/Todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Array<Todo>;
  delCallback: (id: string) => void;
  checkCallback: (id: string) => void;
};

const TodoList = ({ todos, delCallback, checkCallback }: Props) => {
  const placeHolderList = () => {
    return (
      <View style={styles.placeHolderList}>
        <Ionicons name="list-outline" size={100} color="#deddda" />
        <Text style={styles.placeHolderTitle}>Not Task Found...</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={(todo) => (
          <TodoItem
            todo={todo.item}
            delCallback={delCallback}
            checkCallback={checkCallback}
          />
        )}
        keyExtractor={(todo) => todo.id}
        ListEmptyComponent={placeHolderList}
        style={styles.todoList}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  todoList: {
    width: "100%",
  },

  placeHolderList: {
    width: 190,
    height: 190,
    marginHorizontal: "auto",
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#deddda",
  },

  placeHolderTitle: {
    color: "#c0bfbc",
  },
});

export default TodoList;
