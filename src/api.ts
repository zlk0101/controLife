const API = "http://192.168.0.102:4000/";
import { UserIAuth } from "./types";
export const registerUser = async (user: UserIAuth) => {
  try {
    const res = await fetch(`${API}api/users`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (user: UserIAuth) => {
  try {
    const res = await fetch(`${API}api/users/auth`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
