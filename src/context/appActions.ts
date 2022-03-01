import { Dispatch } from "react";
import { ActionTypes, AppActionI, UserI } from "./types";
import NetInfo from "@react-native-community/netinfo";
import { TaskI } from "../types/task";
import { GoalI, RouteGoalsT } from "../types/goal";

//add user
export const addUser = (user: UserI | null, dispatch: Dispatch<AppActionI>) => {
  dispatch({
    type: ActionTypes.ADD_USER,
    payload: user,
  });
};

export const validationNet = async () => {
  return (await NetInfo.fetch()).isConnected;
};

///goals action

//today
export const addGoalsToday = (
  data: GoalI[],
  dispatch: Dispatch<AppActionI>
) => {
  dispatch({
    type: ActionTypes.ADD_GOALS_TODAY,
    payload: data,
  });
};

//week
export const addGoalsWeek = (data: GoalI[], dispatch: Dispatch<AppActionI>) => {
  dispatch({
    type: ActionTypes.ADD_GOALS_WEEK,
    payload: data,
  });
};

//month
export const addGoalsMonth = (
  data: GoalI[],
  dispatch: Dispatch<AppActionI>
) => {
  dispatch({
    type: ActionTypes.ADD_GOALS_MONTH,
    payload: data,
  });
};

//year
export const addGoalsYear = (data: GoalI[], dispatch: Dispatch<AppActionI>) => {
  dispatch({
    type: ActionTypes.ADD_GOALS_YEAR,
    payload: data,
  });
};

//custom
export const addGoalsCustom = (
  data: GoalI[],
  dispatch: Dispatch<AppActionI>
) => {
  dispatch({
    type: ActionTypes.ADD_GOALS_CUSTOM,
    payload: data,
  });
};

export const createNewGoal = (
  data: GoalI[],
  dispatch: Dispatch<AppActionI>,
  type: RouteGoalsT
) => {
  if (type === "daily") {
    addGoalsToday(data, dispatch);
  } else if (type === "weekly") {
    addGoalsWeek(data, dispatch);
  } else if (type === "monthly") {
    addGoalsMonth(data, dispatch);
  } else if (type === "yearly") {
    addGoalsYear(data, dispatch);
  } else if (type === "custom") {
    addGoalsCustom(data, dispatch);
  }
};

//task
export const addTasks = (data: TaskI[], dispatch: Dispatch<AppActionI>) => {
  dispatch({
    type: ActionTypes.ADD_TASKS,
    payload: data,
  });
};
export const fetchTasks = (dispatch: Dispatch<AppActionI>) => {
  dispatch({
    type: ActionTypes.FETCH_TASKS,
    payload: null,
  });
};
