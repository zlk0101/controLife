import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { TaskI } from "../types/task";
import { getTasksGoal } from "../api/task";
import AppContext from "../context/AppContext";
import { addTasks } from "../context/appActions";

//goal viw tasks
const GoalView = ({ route, navigation }: { route: any; navigation: any }) => {
  const { tasks, dispatch } = useContext(AppContext);
  const [goalId, setGoalId] = useState<string>("");
  const [refreshing, setRefreshing] = useState(false);
  const loadTasks = async () => {
    if (goalId) {
      const res = await getTasksGoal(goalId);
      addTasks(res, dispatch);
    }
  };
  const handleOpenEditor = () => {
    navigation.navigate("AddTask", { id: goalId });
  };
  const renderItem = ({ item }: { item?: TaskI }) => {
    return (
      <TaskItem
        task={item}
        navigate={() => navigation.navigate("TaskInfo", { id: item?._id })}
      />
    );
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  }, [refreshing]);
  useEffect(() => {
    setGoalId(route.params.id);
    (async () => {
      let res = await getTasksGoal(route.params.id);
      addTasks(res, dispatch);
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Goals");
            }}
          >
            <Ionicons
              name="arrow-back"
              size={30}
              style={{ marginLeft: 7 }}
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tasks Lists</Text>
          <TouchableOpacity onPress={handleOpenEditor}>
            <Entypo
              name="plus"
              size={30}
              style={{ marginRight: 20 }}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks.data}
            renderItem={renderItem}
            keyExtractor={(item, i) => i + ""}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                colors={["#fff"]}
                onRefresh={onRefresh}
                progressBackgroundColor="#000"
              />
            }
          />
        </View>
      </View>
    </>
  );
};

export default GoalView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
  },
  header: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "#000",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 20,
  },
  tasksContainer: {
    position: "relative",
    flex: 1,
  },
});
