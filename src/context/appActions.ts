import { Dispatch } from "react";
import { saveUserStore } from "../functions/functions";
import { ActionTypes, AppActionI, UserI } from "./types";

export const addUser = (user: UserI, dispatch: Dispatch<AppActionI>) => {
  saveUserStore(user);
  dispatch({
    type: ActionTypes.ADD_USER,
    payload: user,
  });
};
