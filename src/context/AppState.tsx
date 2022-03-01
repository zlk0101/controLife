import AppReducer from "./AppReducer";
import React, { createContext, useEffect } from "react";
import { ReactNode, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addUser } from "./appActions";
import { initialState } from "./initialState";
import AppContext from "./AppContext";

export const AppState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const getValueFor = async (key: string) => {
      const value = await AsyncStorage.getItem(key);
      console.log(value);
      if (value) {
        addUser(JSON.parse(value), dispatch);
      } else {
        addUser(null, dispatch);
      }
    };
    getValueFor("user");
  }, []);
  return (
    <AppContext.Provider
      value={{
        user: state.user,
        tasks: state.tasks,
        goals: state.goals,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
