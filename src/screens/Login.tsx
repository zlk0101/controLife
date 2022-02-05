import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CardAuth from "../components/CardAuth";
import { loginInputsInitialState } from "../data/authData";
import { AuthDataI, UserIAuth } from "./../types";
import ScrollContainer from "../components/ScrollContainer";
import AppContext from "../context/AppContext";
import { addUser } from "../context/appActions";
import { loginUser } from "../api";
import NetInfo from "@react-native-community/netinfo";

const Login = ({ navigation }: { navigation: any }) => {
  const { dispatch } = useContext(AppContext);
  const [user, setUser] = useState<UserIAuth>({ username: "", password: "" });
  const [serverError, setServerEror] = useState<string | undefined>(undefined);
  const [items, setItems] = useState<AuthDataI>(loginInputsInitialState);
  const handleChange = (text: string, id: string) => {
    setServerEror(undefined);
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.value = text;
          if (item.value.trim() === "" && item.value.length > 0) {
            item.nameError = "* this camp is required";
          } else {
            item.nameError = null;
          }
        }

        return item;
      })
    );
    items.map((item) => {
      if (item.id === id) {
        item.name && setUser({ ...user, [item.name]: item.value });
      }
      return item;
    });
  };
  const handleSubmit = async () => {
    let validateNull = items.find((item) => item.value.trim() === "");
    if (validateNull) {
      setItems(
        items.map((item) => {
          if (item.value.trim() === "") {
            item.nameError = "this camp is required";
          }
          return item;
        })
      );
    }
    let validateError = items.find((item) => item.nameError);

    console.log(validateNull, validateError);
    NetInfo.addEventListener((state) => {
      const isConnected = state.isConnected;
      if (isConnected && !validateError && !validateNull) {
        (async () => {
          let res = await loginUser(user);
          if (res.status === 200) {
            dispatch &&
              addUser(
                {
                  username: res.data.username,
                  _id: res.data._id,
                  country: res.data.country,
                },
                dispatch
              );
            setItems(
              items.map((item) => {
                if (item.name) {
                  item.value = "";
                }
                return item;
              })
            );
          }
          if (res.status === 301) {
            setServerEror(res.data.data);
          }
        })();
      }
    });
  };
  useEffect(() => {
    return () => {
      setItems([]);
    };
  }, []);
  return (
    <ScrollContainer>
      <View style={styles.container}>
        <CardAuth
          title="login with your nickname"
          dataInputs={items}
          buttonTitle="Login"
          changeEvent={handleChange}
          actionButton={handleSubmit}
          serverError={serverError}
        />
      </View>
      <View style={styles.containerGo}>
        <Text style={styles.text}>Don't have a account ?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              color: "#8ff",
              borderBottomWidth: 1,
              borderColor: "#7ff",
              letterSpacing: 3,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  containerGo: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    letterSpacing: 3,
  },
});

export default Login;
