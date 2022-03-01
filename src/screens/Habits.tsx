import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import TodoItem from "../components/TodoItem";
const Habits = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Habits</Text>
        <TouchableOpacity>
          <Text style={styles.text}>add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.habitsContainer}>
        <TodoItem
          todo={{ todo: "this is a todo", completed: true }}
          handleTodoEdit={() => {}}
          checkChange={() => {}}
        />
        <TodoItem
          todo={{ todo: "this is a todo", completed: true }}
          handleTodoEdit={() => {}}
          checkChange={() => {}}
        />
        <TodoItem
          todo={{ todo: "this is a todo", completed: true }}
          handleTodoEdit={() => {}}
          checkChange={() => {}}
        />
        <TodoItem
          todo={{ todo: "this is a todo", completed: true }}
          handleTodoEdit={() => {}}
          checkChange={() => {}}
        />
      </View>
    </View>
  );
};

export default Habits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#999",
    borderBottomWidth: 1,
  },
  habitsContainer: {
    paddingHorizontal: 10,
  },
  text: {
    color: "#fff",
  },
});
