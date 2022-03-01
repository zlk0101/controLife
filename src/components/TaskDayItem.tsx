import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { percentColors } from "../functions/functions";

const TaskDayItem = ({
  item,
  handlePress,
  viewTaskDay,
}: {
  item: any;
  viewTaskDay: any;
  handlePress: any;
}) => {
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity style={styles.taskItem} onPress={viewTaskDay}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.text}>{item.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={{
            ...styles.state,
            color: percentColors(item.state),
            fontWeight: "bold",
            fontSize: item.state === "00" || item.state === "100" ? 11 : 18,
          }}
        >
          {item.state === "00"
            ? "start"
            : item.state === "100"
            ? "completed"
            : item.state + " %"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  containerItem: {
    width: "100%",
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: "#aaa4",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    color: "#faa",
  },
  taskItem: {
    flex: 1,
  },
  state: {
    width: 50,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#9991",
    marginLeft: 10,
    borderRadius: 5,
    paddingVertical: 7,
  },
});

export default TaskDayItem;
