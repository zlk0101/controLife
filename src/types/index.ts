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
}
export interface UserIAuth {
  username: string;
  country?: string;
  password: string;
  terms?: boolean;
}
export type AuthDataI = InputI[];
