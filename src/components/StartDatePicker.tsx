import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { PropsDatePickerI } from "../types/goal";
const StartDatePicker = (p: PropsDatePickerI) => {
  return (
    <>
      <Text
        style={{
          textAlign: "left",
          width: "90%",
          color: "#fff",
          marginTop: 10,
        }}
      >
        {p.labelText}
      </Text>
      <TouchableOpacity onPress={p.showDatepicker} style={{ width: "90%" }}>
        <Text style={styles.touchButton}>
          {p.value.toLocaleDateString().toString()}
        </Text>
      </TouchableOpacity>
      {p.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={p.value}
          mode={"date"}
          display="default"
          minimumDate={p.minimumDate}
          onChange={p.onChange}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  touchButton: {
    backgroundColor: "#141414",
    paddingVertical: 10,
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default StartDatePicker;
