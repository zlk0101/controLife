import { AuthDataI } from "../types";

export const loginInputsInitialState: AuthDataI = [
  {
    placeHolder: "nick name",
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

export const registerInputsInitialState: AuthDataI = [
  {
    placeHolder: "anonimus nick name",
    value: "",
    id: "0",
    name: "username",
    nameError: null,
  },
  {
    placeHolder: "country",
    value: "",
    id: "1",
    name: "country",
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
