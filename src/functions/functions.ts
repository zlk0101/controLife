import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserI } from "../context/types";
import { countrys } from "../data/Countrys";
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
  if (nickname.length < 5) {
    console.log("yor min");
    err.err = "* your nickname have min 5 characteres";
  } else if (nickname.length >= 50) {
    err.err = "* your nicknmae have max 50 characteres";
  } else {
    err.err = null;
  }

  let isError = [...nickname].find((l) => {
    let code = l.charCodeAt(0);
    return (
      (code < 48 && code !== 46) ||
      (code > 57 && code < 97 && code !== 95) ||
      code > 122
    );
  });
  if (isError && !err.err) {
    err.err =
      "*  bad: (only accept lowerCase letters, numbers, underscore and points)";
  } else if (!isError && !err.err) {
    err.err = null;
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
export const validateCountry = (c: string) => {
  return c === "null";
};

export const validateTaskDay = (title?: string, description?: string) => {
  let err: { nameError: string | null } = {
    nameError: "",
  };
  if (title?.trim() === "" && description?.trim() !== "") {
    err.nameError = "* name task is required";
  } else if (description?.trim() === "" && title?.trim() !== "") {
    err.nameError = "* description task is required";
  } else if (description?.trim() === "" && title?.trim() === "") {
    err.nameError = "* complete both camps to continue";
  } else {
    err.nameError = null;
  }
  return err.nameError;
};

export const validateTaskDayUpdate = (
  percent: string,
  taskId: string
): boolean => {
  if (percent && taskId) {
    return true;
  } else {
    return false;
  }
};

export const percentColors = (percent: string) => {
  switch (percent) {
    case "00":
      return "#f00";
    case "10":
      return "#f80";
    case "20":
      return "#f80";
    case "30":
      return "#f90";
    case "40":
      return "#fda";
    case "50":
      return "#ff0";
    case "60":
      return "#6c0";
    case "70":
      return "#6c0";
    case "80":
      return "#6d0";
    case "90":
      return "#6e0";
    case "100":
      return "#0ff";
    default:
      return "#fff";
  }
};

export const getCountryTimeOffset = (
  countryAbb: string | undefined
): number => {
  let findContry = countrys.find((i) => i.abbreviation === countryAbb);
  return findContry ? findContry.timeOffset : 0;
};
