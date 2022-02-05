import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserI } from "../context/types";
interface ErrorI {
  err: string;
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
    err: "",
  };
  for (let i = 0; i < nickname.length; i++) {
    let code = nickname.charCodeAt(i);
    console.log("code" + code);
    if (code < 97 || code > 122) {
      err.err = "bad characteres (only accept lowerCase letters)";
    }
  }
  if (nickname.length < 5 && !err.err) {
    err.err = "your nickname have min 5 characteres";
  }
  return err;
};
export const validatePassword = (pass: string) => {
  if (pass.length < 6) {
    return "your pass min 6 characteres";
  } else if (pass.length >= 100) {
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
