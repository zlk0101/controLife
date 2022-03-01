import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { TaskI } from "../types/task";

const TaskItem = ({ navigate, task }: { navigate: any; task?: TaskI }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flex: 1 }} onPress={navigate}>
        <Text style={styles.textTitle}>{task?.title}</Text>
        <Text style={styles.textDescription}>{task?.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textPercent}>{task?.state}%</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#999",
  },
  textPercent: {
    color: "#fff",
    backgroundColor: "#000",
    padding: 10,
    marginLeft: 5,
  },
  textTitle: {
    color: "#afc",
  },
  textDescription: {
    color: "#fff",
  },
});
