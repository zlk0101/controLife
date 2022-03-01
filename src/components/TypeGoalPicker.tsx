import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import React from "react";
import { TypeGoalPickerPropsI } from "../types/goal";

const TypeGoalPicker = (p: TypeGoalPickerPropsI) => {
  return (
    <Picker
      style={styles.picker}
      mode={"dropdown"}
      selectedValue={p.value}
      onValueChange={p.valueChange}
      dropdownIconColor="#fff"
      dropdownIconRippleColor={"#232323"}
      itemStyle={styles.pickerItem}
    >
      {p.items.map((item, i) => {
        return (
          <Picker.Item
            key={i}
            style={styles.pickerItem}
            label={item.title}
            value={item.id}
          />
        );
      })}
    </Picker>
  );
};

export default TypeGoalPicker;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  picker: {
    width: "90%",
    padding: 5,
    borderWidth: 1,
    backgroundColor: "#141414",
  },
  pickerItem: {
    color: "#fff",
    backgroundColor: "#232323",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 0,
  },
});
