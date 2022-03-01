import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import { AuthCardPropsI } from "../types";
const CardAuth: React.FC<AuthCardPropsI> = ({
  title,
  dataInputs,
  buttonTitle,
  actionButton,
  changeEvent,
  checkValue,
  checkChange,
  serverError,
  node,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {dataInputs.map((item, i) => {
        return (
          <View key={i} style={styles.container}>
            <TextInput
              placeholderTextColor="#898989"
              value={item.value}
              onChangeText={(text: string) => changeEvent(text, item.id)}
              style={styles.textInput}
              placeholder={item.placeHolder}
            />
            {item.nameError && (
              <Text style={{ color: "#f88", fontSize: 12 }}>
                {item.nameError}
              </Text>
            )}
          </View>
        );
      })}
      {node}

      {serverError && (
        <Text style={{ color: "#f55", fontSize: 12 }}>
          {"* " + serverError}
        </Text>
      )}
      {buttonTitle === "Register" ? (
        <TouchableOpacity onPress={checkChange} style={styles.terms}>
          <CheckBox
            value={checkValue}
            onValueChange={checkChange}
            color={"#f0f"}
          />
          <Text style={styles.termsText}>accept terms and conditions</Text>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        disabled={buttonTitle === "Register" && !checkValue ? true : false}
        onPress={actionButton}
      >
        <Text
          style={
            buttonTitle === "Register" && !checkValue
              ? styles.buttonAccept
              : styles.button
          }
        >
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#343434",
    borderRadius: 5,
    width: "95%",
    padding: 5,
    marginVertical: 10,
  },
  title: {
    color: "#ddd",
    fontSize: 27,
    fontWeight: "900",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    paddingHorizontal: 5,
  },
  textInput: {
    color: "#fff",
    marginVertical: 5,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    paddingLeft: 5,
    width: "90%",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#333",
  },
  buttonAccept: {
    backgroundColor: "#555",
    color: "#999",
    fontWeight: "500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#333",
  },
  terms: {
    paddingVertical: 10,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  termsText: {
    color: "#fff",
    marginLeft: 10,
  },
});
export default CardAuth;
