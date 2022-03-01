import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";
interface CountryPickerI {
  label: string;
  value: string;
}
const CountryPicker = ({
  items,
  value,
  valueChange,
  countryError,
}: {
  items: CountryPickerI[];
  value: string;
  valueChange: ((itemValue: ItemValue, itemIndex: number) => void) | undefined;
  countryError: boolean;
}) => {
  return (
    <>
      <Picker
        style={styles.picker}
        mode={"dropdown"}
        selectedValue={value}
        onValueChange={valueChange}
        dropdownIconColor="#fff"
        dropdownIconRippleColor={"#232323"}
        itemStyle={styles.pickerItem}
      >
        {items.map((item, i) => {
          return (
            <Picker.Item
              key={i}
              style={styles.pickerItem}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Picker>
      <View>
        <Text style={{ color: "#f55", marginBottom: 10, fontSize: 12 }}>
          {!countryError ? "" : "* please select a country"}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  picker: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#121212",
  },
  pickerItem: {
    color: "#fff",
    backgroundColor: "#232323",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 0,
  },
});

export default CountryPicker;
