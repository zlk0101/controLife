import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { addTaskDay } from "../api/task";
import AppContext from "../context/AppContext";
import { addTasks } from "../context/appActions";
const AddTask = ({ navigation, route }: { navigation: any; route: any }) => {
  const { user, dispatch, tasks } = useContext(AppContext);
  const [task, setTask] = useState({
    title: "",
    description: "",
    goalId: "",
    userId: user.user?._id,
  });
  useEffect(() => {
    setTask({ ...task, goalId: route.params.id });
  }, []);
  return (
    <View style={styles.containerAbsolute}>
      <View style={styles.buttonCancelContainer}>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => {
            navigation.navigate("GoalView");
          }}
        >
          <FontAwesome5 name="times" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.containerEditor}>
          <TextInput
            style={styles.inputTitle}
            placeholder="title"
            onChangeText={(text) => setTask({ ...task, title: text })}
            placeholderTextColor={"#999"}
            value={task.title}
          />
          <TextInput
            style={styles.inputDescription}
            onChangeText={(text) => setTask({ ...task, description: text })}
            placeholder="description"
            textAlignVertical="top"
            value={task.description}
            placeholderTextColor={"#999"}
          />
          <TouchableOpacity
            onPress={async () => {
              console.log(task);
              navigation.navigate("GoalView", { id: task.goalId });
              let res = await addTaskDay(task);
              addTasks([...tasks.data, res], dispatch);
            }}
          >
            <Text style={styles.taskButton}>save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  containerAbsolute: {
    flex: 1,
    backgroundColor: "#141414",
  },
  buttonCancelContainer: {
    height: 40,
    justifyContent: "center",
  },
  buttonCancel: {
    width: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerEditor: {
    width: "95%",
    marginTop: 20,
    backgroundColor: "#142424",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  inputTitle: {
    backgroundColor: "#111",
    paddingVertical: 5,
    marginBottom: 10,
    width: "90%",
    color: "#fff",
    marginTop: 10,
    paddingLeft: 5,
  },
  inputDescription: {
    backgroundColor: "#111",
    paddingVertical: 5,
    paddingLeft: 5,
    height: 100,
    width: "90%",
    color: "#fff",
  },
  taskButton: {
    width: 100,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#121212",
    padding: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
});
