import { Dispatch } from "react";

export enum ActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
  UPDATE_USER = "UPDATE_USER",
}
export interface AppStateI {
  user: UserI | null;
  addUser?: (user: UserI, dispatch: Dispatch<AppActionI>) => void;
  dispatch?: Dispatch<AppActionI>;
  netInfo?: boolean | null;
  authUser?: Promise<void>;
}

export interface AppActionI {
  type: ActionTypes;
  payload: any;
}

export interface UserI {
  username: string;
  country: string;
  _id: string;
}
