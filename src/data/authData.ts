import { AuthDataI } from "../types";

export const loginInputsInitialState: AuthDataI = [
  {
    placeHolder: "anonymus nickname",
    value: "",
    id: "0",
    name: "username",
    nameError: null,
  },
  {
    placeHolder: "password",
    value: "",
    id: "1",
    name: "password",
    nameError: null,
  },
];
export const countrysWorld = [
  { label: "select a country", value: "null" },
  { label: "Peru", value: "pe" },
  { label: "Chile", value: "cl" },
  { label: "Argentina", value: "ar" },
];
export const registerInputsInitialState: AuthDataI = [
  {
    placeHolder: "anonymus nick name",
    value: "",
    id: "0",
    name: "username",
    nameError: null,
  },

  {
    placeHolder: "password",
    value: "",
    id: "2",
    name: "password",
    nameError: null,
  },
  {
    placeHolder: "confirm password",
    value: "",
    id: "3",
    name: "confirm-password",
    nameError: null,
  },
];
