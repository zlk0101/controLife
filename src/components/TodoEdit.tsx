import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import React, { useState } from "react";
import { TodoProps } from "../types/todo";

const TodoEdit = (props: TodoProps) => {
  const {
    pressOut,
    saveTodo,
    valueTodo,
    daysRepeat,
    changeTodo,
    isDayRepeat,
    isDaysNoRepeat,
    onPressDayRepeat,
    onPressDayRepeatEveryDay,
    onPressDayNoRepeat,
  } = props;
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });
  return (
    <View
      style={styles.wrapper}
      onLayout={() => setSize(Dimensions.get("window"))}
    >
      <TouchableWithoutFeedback onPress={pressOut}>
        <View
          style={{ width, height, position: "absolute", left: 0, top: 0 }}
        />
      </TouchableWithoutFeedback>
      <View style={styles.containerEdit}>
        <View style={styles.todoHead}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={pressOut}
          >
            <FontAwesome5 name="times" size={24} color="#999" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flex: 1,
          }}
        >
          <TextInput
            style={{
              paddingLeft: 2,
              borderBottomWidth: 0.4,
              paddingVertical: 4,
              width: "90%",
              borderColor: "#999",
              color: "#fff",
            }}
            placeholder="enter a todo"
            placeholderTextColor={"#777"}
            onChangeText={changeTodo}
            value={valueTodo}
          />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <TouchableWithoutFeedback onPress={onPressDayNoRepeat}>
              <Text
                style={[
                  styles.daysButtons,
                  isDaysNoRepeat ? styles.daysButtonsActive : null,
                ]}
              >
                no repat
              </Text>
            </TouchableWithoutFeedback>
            {daysRepeat?.map((day, i) => {
              return (
                <TouchableWithoutFeedback
                  key={i}
                  onPress={() => onPressDayRepeat(day.name)}
                >
                  <Text
                    style={[
                      styles.daysButtons,
                      day?.repeat ? styles.daysButtonsActive : null,
                    ]}
                  >
                    {day.name}
                  </Text>
                </TouchableWithoutFeedback>
              );
            })}

            <TouchableWithoutFeedback onPress={onPressDayRepeatEveryDay}>
              <Text
                style={[
                  styles.daysButtons,
                  isDayRepeat ? styles.daysButtonsActive : null,
                ]}
              >
                everyday
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <TouchableOpacity style={{ width: "70%" }} onPress={saveTodo}>
            <Text style={styles.saveButton}>save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoEdit;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "100%",
    top: 0,
    backgroundColor: "#0007",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#000",
  },
  containerEdit: {
    width: "85%",
    backgroundColor: "#000",
    borderRadius: 10,
    height: 250,
    shadowColor: "#999",
    elevation: 20,
    marginTop: 60,
  },
  todoHead: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#555",
    borderBottomWidth: 0.5,
    height: 40,
  },
  daysButtons: {
    color: "#999",
    width: 70,
    textAlign: "center",
    borderRadius: 10,
    borderColor: "#999",
    borderWidth: 0.3,
    marginTop: 10,
    marginHorizontal: 5,
  },
  daysButtonsActive: {
    color: "#fff",
    borderColor: "#f8931f",
    borderWidth: 1,
  },
  saveButton: {
    color: "#fff",
    backgroundColor: "#222",
    borderRadius: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
});
