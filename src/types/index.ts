import { ReactNode } from "react";

export interface InputI {
  placeHolder: string;
  value: string;
  id: string;
  name?: string;
  nameError: string | null;
}

export interface AuthCardPropsI {
  title?: string;
  dataInputs: InputI[];
  buttonTitle?: string;
  actionButton?: any;
  changeEvent?: any;
  checkValue?: boolean;
  checkChange?: any;
  serverError?: string;
  node?: ReactNode;
}
export interface UserIAuth {
  username: string;
  country?: any;
  password: string;
  terms?: boolean;
}
export type AuthDataI = InputI[];

//task day

export interface TodoI {
  todo: string;
  taskId?: string;
  goalId?: string;
  completed?: boolean;
}

export interface DateCreatedI {
  day: number;
  week: number;
  month: number;
  year: number;
}

export interface CountryI {
  abbreviation: string;
  value: string;
  timeOffset: number;
}
