import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserI } from "../context/types";
interface ErrorI {
  err: string | null;
}
export const saveUserStore = async (user: UserI) => {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
  };
  storeData();
};
export const validateNickName = (nickname: string): ErrorI => {
  let err: ErrorI = {
    err: null,
  };
  if (nickname.length < 5 && !err.err) {
    err.err = "your nickname have min 5 characteres";
  } else if (nickname.length >= 50) {
    err.err = "your nicknmae have max 50 characteres";
  } else {
    err.err = null;
  }
  for (let i = 0; i < nickname.length; i++) {
    let code = nickname.charCodeAt(i);
    const validate =
      (code < 48 && code !== 46) ||
      (code > 57 && code < 97 && code !== 95) ||
      code > 122;
    if (validate) {
      err.err =
        "*bad: (only accept lowerCase letters, numbers, underscore and points)";
    } else {
      err.err = null;
    }
  }

  return err;
};
export const validatePassword = (pass: string) => {
  if (pass.length < 6) {
    return "your pass min 6 characteres";
  } else if (pass.length > 50) {
    return "invalid pass";
  } else {
    return null;
  }
};
export const validateMatchPassword = (
  pass1: string | undefined,
  pass2: string | undefined
) => {
  if (pass1 !== pass2) {
    return "error matching passwords";
  } else {
    return null;
  }
};
