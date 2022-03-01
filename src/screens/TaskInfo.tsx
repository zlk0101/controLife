import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import TodoItem from "../components/TodoItem";
import { TaskI } from "../types/task";
import { Entypo } from "@expo/vector-icons";
import { getTask } from "../api/task";
import TodoEdit from "../components/TodoEdit";
import { daysRepeatData } from "../data/todo";
import { TodoI, TypeDays } from "../types/todo";
import { createTodo, getTodosTask } from "../api/todo";
import AppContext from "../context/AppContext";
const TaskInfo = ({ route }: { route: any }) => {
  const { user } = useContext(AppContext);
  const [todo, setTodo] = useState<string>("");
  const [taskId, setTaskId] = useState("");
  const [todos, setTodos] = useState<TodoI[]>([]);
  const [task, setTask] = useState<TaskI | null>(null);
  const [isOpenTodoEdit, setIsOpenTodoEdit] = useState(false);
  const [daysRepeat, setDaysRepeat] = useState(daysRepeatData);

  const handleDaysRepeat = (dayp: TypeDays) => {
    setDaysRepeat(
      daysRepeat.map((day) => {
        if (day.name === dayp) {
          day.repeat = !day.repeat;
        }
        return day;
      })
    );
  };
  const handleDayRepeatEveryDay = () => {
    setDaysRepeat(
      daysRepeat.map((day) => {
        day.repeat = true;
        return day;
      })
    );
  };
  const handleDayNoRepeat = () => {
    setDaysRepeat(
      daysRepeat.map((day) => {
        day.repeat = false;
        return day;
      })
    );
  };
  const validateEveryDay = () => daysRepeat.every((day) => day.repeat);
  const validateNotEveryDay = () => daysRepeat.every((day) => !day.repeat);
  const handleSaveTodo = async () => {
    let newTodo: TodoI = {
      todo: todo,
      taskId: task?._id,
      userId: user.user?._id,
    };
    console.log(newTodo);
    let data = await createTodo(newTodo);
    if (data) {
      setTodos([...todos, data]);
      setIsOpenTodoEdit(false);
    }
  };
  useEffect(() => {
    (async () => {
      console.log(route.params.id);
      let res = await getTask(route.params.id);
      setTask(res);
      console.log(res);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      let data = await getTodosTask(route.params.id);
      setTodos(data);
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>{task?.title}</Text>
          <Text style={styles.taskDescription}>{task?.description}</Text>
        </View>
        <View style={styles.todosContainer}>
          <View style={styles.todoHead}>
            <Text style={styles.text}>todos</Text>
            <TouchableOpacity
              onPress={() => {
                setIsOpenTodoEdit(true);
              }}
            >
              <Entypo
                name="plus"
                size={30}
                style={{ marginRight: 20 }}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          {todos.map((todo, i) => {
            return (
              <TodoItem
                key={i}
                todo={todo}
                handleTodoEdit={() => {}}
                checkChange={() => {}}
              />
            );
          })}
        </View>
      </View>
      {isOpenTodoEdit && (
        <TodoEdit
          changeTodo={(text: string) => setTodo(text)}
          saveTodo={handleSaveTodo}
          onPressDayNoRepeat={handleDayNoRepeat}
          onPressDayRepeatEveryDay={handleDayRepeatEveryDay}
          isDaysNoRepeat={validateNotEveryDay()}
          isDayRepeat={validateEveryDay()}
          daysRepeat={daysRepeat}
          onPressDayRepeat={handleDaysRepeat}
          valueTodo={todo}
          pressOut={() => {
            setIsOpenTodoEdit(false);
            setDaysRepeat(
              daysRepeatData.map((day) => {
                day.repeat = false;
                return day;
              })
            );
          }}
        />
      )}
    </>
  );
};

export default TaskInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242424",
    flex: 1,
  },

  taskContainer: {
    padding: 10,
  },
  todosContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  taskTitle: {
    color: "#f79",
  },
  taskDescription: {
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
  todoHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    padding: 5,
  },
});

// import { useState } from "react";
// import {
//   Dimensions,
//   View,
//   TouchableWithoutFeedback,
//   Text,
//   StyleSheet,
// } from "react-native";

// const TaskInfo = () => {
//   const [{ width, height }, setSize] = useState({ width: 0, height: 0 });

//   return (
//     <View
//       style={[styles.wrapper]}
//       onLayout={() => setSize(Dimensions.get("window"))}
//     >
//       <TouchableWithoutFeedback
//         onPress={() => {
//           console.log("hola");
//         }}
//       >
//         <View
//           style={{ width, height, position: "absolute", left: 0, top: 0 }}
//         />
//       </TouchableWithoutFeedback>
//       <View style={{ width: 100, height: 100, backgroundColor: "#f00" }}>
//         <Text>hola mundo</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     position: "absolute",
//     left: 0,
//     width: "100%",
//     height: "100%",
//     top: 0,
//     backgroundColor: "rgb(0,0,0)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default TaskInfo;
