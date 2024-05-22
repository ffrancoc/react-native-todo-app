import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./model/Todo";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const onAddTodoHandle = (text: string) => {
    if (text.trim().length === 0) {
      return;
    }

    const todo: Todo = {
      id: Date.now().toString(),
      text: text,
      state: false,
    };

    setTodos([todo, ...todos]);
  };

  const onCheckTodoHandle = (id: string) => {
    const tmp = todos.map((t) => {
      if (t.id === id) {
        return (t.state = !t.state);
      }
      return t;
    });
    setTodos([...todos]);
  };

  const onDelTodoHandle = (id: string) => {
    const temp = todos;
    const filtered = temp.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.verticalBox}>
        <TodoForm callback={onAddTodoHandle} />
        <TodoList
          todos={todos}
          delCallback={onDelTodoHandle}
          checkCallback={onCheckTodoHandle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  verticalBox: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "#f6f5f4",
  },
});

export default App;
