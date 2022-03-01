import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CardNewTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <TextInput
          placeholderTextColor={"#999"}
          style={styles.inputs}
          placeholder="name"
        />
        <TextInput
          placeholderTextColor={"#999"}
          style={styles.inputs}
          placeholder="description..."
          multiline
          numberOfLines={3}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  containerInputs: {
    width: "95%",
    marginTop: 10,
    backgroundColor: "#233234",
    padding: 10,
    alignItems: "center",
  },

  inputs: {
    width: "100%",
    borderRadius: 5,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    margin: 5,
    paddingVertical: 5,
    paddingLeft: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#000",
    alignItems: "center",
    width: "80%",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CardNewTask;
