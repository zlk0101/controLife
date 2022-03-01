import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CardAuth from "../components/CardAuth";
import { countrysWorld, registerInputsInitialState } from "../data/authData";
import { registerUser } from "../api";
import { UserIAuth } from "../types";
import ScrollContainer from "../components/ScrollContainer";
import { addUser } from "../context/appActions";
import AppContext from "../context/AppContext";
import {
  saveUserStore,
  validateCountry,
  validateMatchPassword,
  validateNickName,
  validatePassword,
} from "../functions/functions";
import CountryPicker from "../components/CountryPicker";
const Register = ({ navigation }: { navigation: any }) => {
  const { dispatch } = useContext(AppContext);
  const [user, setUser] = useState<UserIAuth>({
    username: "",
    password: "",
    country: "",
    terms: false,
  });
  const [items, setItems] = useState(registerInputsInitialState);
  const [countryValue, setContryValue] = useState<any>("null");
  const [countryE, setCountryE] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | undefined>();

  const handleSubmit = () => {
    let nullError = items.find((item) => item.value.trim() === "");
    let countryError = validateCountry(countryValue);
    countryError ? setCountryE(true) : setCountryE(false);
    if (nullError) {
      setItems(
        items.map((item) => {
          if (item.value === "") {
            item.nameError = "* this camp is required";
          }
          return item;
        })
      );
    }
    let err = items.find((item) => item.nameError);
    const submitData = async () => {
      let data = await registerUser(user);
      if (data.status === 200) {
        saveUserStore({
          username: data.data.username,
          country: data.data.country,
          _id: data.data._id,
        });
        addUser(
          {
            username: data.data.username,
            country: data.data.country,
            _id: data.data._id,
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
      if (data.status === 301) {
        console.log(data.data.data);
        setServerError(data.data.data);
      }
    };
    !err && !nullError && !countryError && submitData();
  };

  const handleChange = (text: string, id: string) => {
    let pass1 = items.find((item) => item.name === "password");
    let pass2 = items.find((item) => item.name === "confirm-password");
    setServerError(undefined);
    setItems(
      items.map((item) => {
        if (id === item.id) {
          item.value = text;
          if (item.value.trim() === "" && item.value.length > 0) {
            item.nameError = "* this camp is required";
          } else {
            item.nameError = null;
          }
        }
        if (item.name === "username" && item.value.trim() !== "") {
          item.nameError = validateNickName(item.value).err;
        }
        if (item.name === "password" && item.value.trim() !== "") {
          item.nameError = validatePassword(item.value);
        }
        if (item.name === "confirm-password" && item.value.trim() !== "") {
          item.nameError = validateMatchPassword(pass1?.value, pass2?.value);
        }
        return item;
      })
    );
    items.map((item) => {
      if (id === item.id) {
        item.name && setUser({ ...user, [item.name]: item.value });
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
          checkValue={user.terms}
          checkChange={() => setUser({ ...user, terms: !user.terms })}
          title="Register with your nickname"
          dataInputs={items}
          buttonTitle="Register"
          actionButton={handleSubmit}
          changeEvent={handleChange}
          serverError={serverError}
          node={
            <CountryPicker
              valueChange={(iValue) => {
                setContryValue(iValue);
                setCountryE(false);
                setUser({ ...user, country: iValue });
              }}
              value={countryValue}
              items={countrysWorld}
              countryError={countryE}
            />
          }
        />
      </View>
      <View style={styles.containerGo}>
        <Text style={styles.text}>Join us before?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              color: "#8ff",
              borderBottomWidth: 1,
              borderColor: "#7ff",
              paddingHorizontal: 10,
              letterSpacing: 3,
            }}
          >
            Login
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

export default Register;
