const API = "http://192.168.0.102:4000/";
import { UserIAuth } from "./types";
export const registerUser = async (user: UserIAuth) => {
  const data: any = {
    status: null,
    data: null,
  };
  try {
    const res = await fetch(`${API}api/users`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    data.data = await res.json();
    data.status = res.status;
  } catch (err) {
    console.log(err);
  }
  return data;
};

export const loginUser = async (user: UserIAuth) => {
  const data: any = {
    status: null,
    data: null,
  };
  try {
    const res = await fetch(`${API}api/users/auth`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    data.status = res.status;
    data.data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
