import config from "../config/config";
import { TaskI } from "../types/task";

const API = config.API;

export const addTaskDay = async (task: TaskI) => {
  const res = await fetch(`${API}/api/tasks`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await res.json();
};

export const getTasksGoal = async (goalId: string) => {
  const res = await fetch(`${API}/api/tasks/goal/${goalId}`);
  return await res.json();
};

export const getTask = async (taskId?: string) => {
  const res = await fetch(`${API}/api/tasks/${taskId}`);
  return await res.json();
};

export const updateTaskDay = async (taskId: string, task: TaskI) => {
  const res = await fetch(`${API}/api/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await res.json();
};

export const deleteTaskDay = async (taskId: string) => {
  const res = await fetch(`${API}/api/tasks/${taskId}`, {
    method: "DELETE",
  });
  return await res.json();
};
