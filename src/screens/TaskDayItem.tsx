import React, { useContext, useEffect, useState } from "react";
import TaskEdit from "../components/TaskEdit";
import TodoEdit from "../components/TodoEdit";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { deleteTaskDay, getTaskDay, updateTaskDay } from "../api/task";
import ScrollContainer from "../components/ScrollContainer";
import { addTasksDay, updateTasksDay } from "../context/appActions";
import AppContext from "../context/AppContext";
import { createTodo, deleteTodo, getTodosTask, updateTodo } from "../api/todo";
import { TodoI } from "../types";
import TodoItem from "../components/TodoItem";

const TaskDayItem = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { tasks, dispatch } = useContext(AppContext);
  const [task, setTask] = useState({
    _id: "",
    name: "",
    description: "",
    id: "",
  });
  const [taskEdit, setTaskEdit] = useState({
    _id: "",
    name: "",
    description: "",
  });
  const [todo, setTodo] = useState({ todo: "", taskId: "" });
  const [todos, setTodos] = useState<any[]>([]);

  const [isOpenEditor, setIsOpenEditor] = useState({
    editor: "", //edit_todo | edit_task
    open: false,
    todoId: "",
  });

  useEffect(() => {
    (async () => {
      let res = await getTaskDay(route.params.id);
      if (res.data) {
        setTask(res.data);
        const resTodos = await getTodosTask(res.data._id);
        if (resTodos.data) {
          setTodos(resTodos.data);
        }
      }
    })();
  }, []);

  const handleUpdateTask = async (id: string, task: any) => {
    let res = await updateTaskDay(id, task);
    if (res.data) {
      setTask(res.data);
      tasks &&
        updateTasksDay(
          tasks
            .map((item) => {
              if (item._id === id) {
                item = res.data;
              }
              return item;
            })
            .reverse(),
          dispatch
        );
      setIsOpenEditor({ open: false, todoId: "", editor: "" });
      setTaskEdit({ description: "", name: "", _id: "" });
    }
  };

  const deleteTask = async (id: string) => {
    const res = await deleteTaskDay(id);
    tasks &&
      res.data &&
      addTasksDay(tasks.filter((item) => item._id !== id).reverse(), dispatch);
    navigation.navigate("Lists");
  };

  const createNewTodo = (todo: TodoI) => {
    (async () => {
      const res = await createTodo(todo);
      if (res.data) {
        setTodos([...todos, res.data]);
        setTodo({ todo: "", taskId: "" });
        setIsOpenEditor({ todoId: "", open: false, editor: "" });
      }
    })();
  };

  const updateTodoCompleted = (todo: TodoI, todoId: string) => {
    (async () => {
      const res = await updateTodo(todo, todoId);
      if (res.data) {
        setTodos(
          todos.map((item) => {
            if (item._id === res.data._id) {
              item = res.data;
            }
            return item;
          })
        );
      }
    })();
  };

  const updateTodoContent = (tood: TodoI, id: string) => {
    (async () => {
      const res = await updateTodo(todo, id);
      if (res.data) {
        setTodos(
          todos.map((item) => {
            if (item._id === res.data._id) {
              item = res.data;
            }
            return item;
          })
        );
        setTodo({ todo: "", taskId: "" });
        setIsOpenEditor({ todoId: "", open: false, editor: "" });
      }
    })();
  };

  return (
    <>
      <ScrollContainer>
        <View style={styles.container}>
          <View style={styles.cardItem}>
            <Text style={styles.titleText}>{task.name}</Text>
            <Text style={styles.descriptionText}>{task.description}</Text>
            <View style={styles.textsContainer}>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => {
                  deleteTask(task._id);
                }}
              >
                <Text style={{ ...styles.editTask, backgroundColor: "#900" }}>
                  eliminar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => {
                  setTaskEdit(task);
                  setIsOpenEditor({
                    editor: "edit_task",
                    open: true,
                    todoId: "",
                  });
                }}
              >
                <Text style={{ ...styles.editTask, backgroundColor: "#099" }}>
                  editar
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.graphic}>
              <Text style={{ color: "#f00" }}> aqui va el grafico</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20, marginRight: 10 }}>
                Todos
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsOpenEditor({
                    open: true,
                    editor: "edit_todo",
                    todoId: "",
                  });
                }}
              >
                <Text
                  style={{
                    color: "#8ff",
                    textAlign: "center",
                    backgroundColor: "#000",
                    paddingVertical: 7,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    marginLeft: 10,
                  }}
                >
                  add todo
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.todosContainer}>
              {todos.map((item, i) => {
                return (
                  <TodoItem
                    handleTodoEdit={() => {
                      setTodo({ taskId: item.taskId, todo: item.todo });
                      setIsOpenEditor({
                        open: true,
                        todoId: item._id,
                        editor: "edit_todo",
                      });
                    }}
                    checkChange={() => {
                      updateTodoCompleted(
                        { todo: item.todo, completed: !item.completed },
                        item._id
                      );
                    }}
                    key={i}
                    todo={item}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollContainer>
      {isOpenEditor.open ? (
        <View style={styles.editorContainer}>
          {isOpenEditor.editor === "edit_todo" ? (
            <TodoEdit
              handleDelete={async () => {
                let res = await deleteTodo(isOpenEditor.todoId);
                if (res.data) {
                  setTodos(todos.filter((item) => item._id !== res.data._id));
                  setIsOpenEditor({ editor: "", todoId: "", open: false });
                  setTodo({ todo: "", taskId: "" });
                }
              }}
              edit={isOpenEditor.todoId.length > 0}
              valueTodo={todo.todo}
              changeTodo={(text: string) => setTodo({ ...todo, todo: text })}
              cancelAction={() => {
                setIsOpenEditor({ editor: "", open: false, todoId: "" });
                setTodo({ todo: "", taskId: "" });
                setTaskEdit({ _id: "", name: "", description: "" });
              }}
              saveAction={() => {
                if (isOpenEditor.todoId) {
                  updateTodoContent({ ...todo }, isOpenEditor.todoId);
                } else {
                  createNewTodo({ ...todo, taskId: task.id });
                }
              }}
            />
          ) : null}
          {isOpenEditor.editor === "edit_task" ? (
            <TaskEdit
              saveAction={async () => {
                await handleUpdateTask(taskEdit._id, taskEdit);
              }}
              handleChangeName={(text: string) => {
                setTaskEdit({ ...task, name: text });
              }}
              handleChangeDescription={(text: string) => {
                setTaskEdit({ ...task, description: text });
              }}
              task={taskEdit}
              cancelAction={() => {
                setIsOpenEditor({ editor: "", open: false, todoId: "" });
              }}
            />
          ) : null}
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardItem: {
    width: "90%",
  },
  titleText: {
    color: "#faa",
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptionText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  editorContainer: {
    backgroundColor: "#000",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  editTask: {
    margin: 10,
    backgroundColor: "#000",
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  graphic: {
    borderWidth: 1,
    borderColor: "#444",
    height: 100,
  },
  todosContainer: {
    minHeight: 100,
  },
  textsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todosItem: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    marginVertical: 5,
  },
});

export default TaskDayItem;
