import { createContext } from "react";
import { initialState } from "./initialState";
import { AppStateI } from "./types";

const AppContext = createContext<AppStateI>(initialState);
export default AppContext;
