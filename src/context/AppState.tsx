import AppReducer from "./AppReducer";
import React, { useEffect } from "react";
import { ReactNode, useReducer } from "react";
import { AppStateI, UserI } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "./AppContext";
import { addUser } from "./appActions";

export const initialState: AppStateI = {
  user: null,
};

export const AppState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addUserState = (user: UserI) => {
    addUser(user, dispatch);
  };

  useEffect(() => {
    const getValueFor = async (key: string) => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value) {
          console.log(value);
          addUser(JSON.parse(value), dispatch);
        }
      } catch (e) {
        //error
      }
    };
    getValueFor("user");
  }, []);
  return (
    <AppContext.Provider
      value={{
        user: state.user,
        dispatch: dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
