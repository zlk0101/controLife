import config from "../config/config";
import { TodoI } from "../types/todo";

const API = config.API + "/api/todos";

export const createTodo = async (todo: TodoI) => {
  const newTodo: TodoI = {
    userId: todo.userId,
    taskId: todo.taskId,
    todo: todo.todo,
  };
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  return await res.json();
};

export const createTodoWithRepeat = async (todo: TodoI) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return await res.json();
};

export const getTodosTask = async (taskId: string) => {
  const res = await fetch(`${API}/${taskId}/task`);
  return await res.json();
};

export const updateTodo = async (todo: TodoI, todoId: string) => {
  const res = await fetch(`${API}/${todoId}`, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return await res.json();
};

export const deleteTodo = async (id: string) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};
