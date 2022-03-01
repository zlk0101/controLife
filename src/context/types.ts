import { Dispatch } from "react";
import { TaskI } from "../types/task";
import { GoalI } from "../types/goal";

export enum ActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
  UPDATE_USER = "UPDATE_USER",
  ADD_TASKS_DAY = "ADD_TASKS_DAY",
  UPDATE_TASKS_DAY = "ADD_TASKS_DAY",
  //goals
  ADD_GOALS_TODAY = "ADD_GOALS_TODAY",
  UPDATE_GOALS_TODAY = "UPDATE_GOALS_TODAY",
  REMOVE_GOALS_TODAY = "REMOVE_GOALS_TODAY",
  ADD_GOALS_WEEK = "ADD_GOALS_WEEK",
  UPDATE_GOALS_WEEK = "UPDATE_GOALS_WEEK",
  REMOVE_GOALS_WEEK = "REMOVE_GOALS_WEEK",
  ADD_GOALS_MONTH = "ADD_GOALS_MONTH",
  UPDATE_GOALS_MONTH = "UPDATE_GOALS_MONTH",
  REMOVE_GOALS_MONTH = "REMOVE_GOALS_MONTH",
  ADD_GOALS_YEAR = "ADD_GOALS_YEAR",
  UPDATE_GOALS_YEAR = "UPDATE_GOALS_YEAR",
  REMOVE_GOALS_YEAR = "REMOVE_GOALS_YEAR",
  ADD_GOALS_ALL = "ADD_GOALS_ALL",
  UPDATE_GOALS_ALL = "UPDATE_GOALS_ALL",
  REMOVE_GOALS_ALL = "REMOVE_GOALS_ALL",
  ADD_GOALS_CUSTOM = "ADD_GOALS_CUSTOM",
  UPDATE_GOALS_CUSTOM = "UPDATE_GOALS_CUSTOM",
  REMOVE_GOALS_CUSTOM = "REMOVE_GOALS_CUSTOM",
  //tasks
  ADD_TASKS = "ADD_TASKS",
  FETCH_TASKS = "FETCH_TASKS",
  UPDATE_TASKS = "UPDATE_TASKS",
  REMOVE_TASKS = "REMOVE_TASKS",
}

//goals interfaces
interface GoalsTodayStateI {
  isFetching: boolean;
  isError: boolean;
  data: GoalI[];
}
interface GoalsWeekStateI {
  isFetching: boolean;
  isError: boolean;
  data: GoalI[];
}
interface GoalsMonthStateI {
  isFetching: boolean;
  isError: boolean;
  data: GoalI[];
}
interface GoalsYearStateI {
  isFetching: boolean;
  isError: boolean;
  data: GoalI[];
}
interface GoalsCustomStateI {
  isFetching: boolean;
  isError: boolean;
  data: GoalI[];
}
interface GoalsStateI {
  today: GoalsTodayStateI;
  week: GoalsWeekStateI;
  month: GoalsMonthStateI;
  year: GoalsYearStateI;
  custom: GoalsCustomStateI;
}
interface TaskStateI {
  isFetching: boolean;
  isError: boolean;
  data: TaskI[];
}

export interface UserI {
  username: string;
  country: string;
  _id: string;
}

export interface UserStateI {
  user: UserI | null;
  isLoading: boolean;
  isError: boolean;
}

export interface AppStateI {
  user: UserStateI;
  addUser?: (user: UserI, dispatch: Dispatch<AppActionI>) => void;
  dispatch: Dispatch<AppActionI>;
  netInfo?: boolean | null;
  authUser?: Promise<void>;
  validationNet?: () => null | boolean;
  tasks: TaskStateI;
  goals: GoalsStateI;
}

export interface AppActionI {
  type: ActionTypes;
  payload: any;
}

export interface NetInfoI {
  isConnected: null | boolean;
}
