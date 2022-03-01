import config from "../config/config";
import { GoalI } from "../types/goal";

const GOAL_API = `${config.API}/api/goals/`;

export const createGoal = async (goal: GoalI) => {
  const newGoal: GoalI = {
    userId: goal.userId,
    title: goal.title,
    description: goal.description,
    typeGoal: goal.typeGoal,
    date: goal.date,
    localDateCreated: Date.now(),
  };
  const res = await fetch(GOAL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGoal),
  });
  return await res.json();
};

export const createGoalCustom = async (goal: GoalI) => {
  const newGoal: GoalI = {
    userId: goal.userId,
    title: goal.title,
    description: goal.description,
    typeGoal: goal.typeGoal,
    localDateCreated: Date.now(),
    startDate: goal.startDate,
    endDate: goal.endDate,
  };
  const res = await fetch(GOAL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGoal),
  });
  return await res.json();
};

export const getGoals = async () => {
  const res = await fetch(GOAL_API);
  return await res.json();
};

export const getGoal = async (goalId: string) => {
  const res = await fetch(GOAL_API + goalId);
  return await res.json();
};

export const updateGoal = async (goalId: string, goal: GoalI) => {
  const res = await fetch(GOAL_API + goalId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goal),
  });
  return await res.json();
};

export const deleteGoal = async (goalId: string) => {
  const res = await fetch(GOAL_API + goalId, {
    method: "DELETE",
  });
  return await res.json();
};

export const getMyAllGoals = async (userId?: string) => {
  const res = await fetch(GOAL_API + userId + "/all");
  return await res.json();
};

export const getMyDailyGoals = async (userId?: string) => {
  const res = await fetch(GOAL_API + userId + "/daily");
  return await res.json();
};

export const getMyWeeklyGoals = async (userId?: string) => {
  const res = await fetch(GOAL_API + userId + "/weekly");
  return await res.json();
};

export const getMyMonthlyGoals = async (userId?: string) => {
  const res = await fetch(GOAL_API + userId + "/monthly");
  return await res.json();
};

export const getMyYearlyGoals = async (userId?: string) => {
  const res = await fetch(GOAL_API + userId + "/yearly");
  return await res.json();
};
export const getMyCustomGoals = async (userId?: string) => {
  const res = await fetch(GOAL_API + userId + "/custom");
  return await res.json();
};
