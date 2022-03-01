import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { GoalI } from "../types/goal";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const GoalItem = ({ goal, goalView }: { goal: GoalI; goalView: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item} onPress={goalView}>
          <Text style={styles.title}>{goal.title}</Text>
          <Text style={styles.text}>{goal.description}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.percent}>{goal.state} %</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="edit" size={24} color="#8df" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000",
    marginVertical: 5,
    padding: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  percent: {
    paddingHorizontal: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 5,
  },
  delete: {
    color: "#f00",
    backgroundColor: "#000",
    padding: 10,
  },
  title: {
    color: "#7aa",
  },
  text: {
    color: "#fff",
  },
});
