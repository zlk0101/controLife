// App.js
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { Picker } from "@react-native-picker/picker";

function App() {
  const [country, setCountry] = useState("Unknown");
  const [data, setData] = useState([
    { title: "hi", id: "1" },
    { title: "hi", id: "2" },
    { title: "hi", id: "3" },
    { title: "hi", id: "4" },
    { title: "hi", id: "5" },
    { title: "hi", id: "6" },
    { title: "hi", id: "7" },
    { title: "hi", id: "8" },
    { title: "hi", id: "9" },
    { title: "hi", id: "10" },
    { title: "hi", id: "11" },
    { title: "hi", id: "12" },
    { title: "hi", id: "13" },
    { title: "hi", id: "14" },
    { title: "hi", id: "15" },
  ]);
  const renderItem = ({ item }: { item: any }) => {
    return <Text style={{ color: "#f00" }}>{item.title}</Text>;
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>KindaCode.com</Text>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dialog" // Android only
        style={styles.picker}
        itemStyle={styles.pickerItem}
        dropdownIconColor="#fff"
      >
        <Picker.Item
          style={styles.pickerItem}
          label="Please select your country"
          value="Unknown"
        />
        <Picker.Item
          style={styles.pickerItem}
          label="Australia"
          value="Australia"
        />
        <Picker.Item
          style={styles.pickerItem}
          label="Belgium"
          value="Belgium"
        />
        <Picker.Item style={styles.pickerItem} label="Canada" value="Canada" />
        <Picker.Item style={styles.pickerItem} label="India" value="India" />
        <Picker.Item style={styles.pickerItem} label="Japan" value="Japan" />
      </Picker>
      <Text style={styles.text}>Your conuntry: {country}</Text>
      <View style={styles.containerItems}>
        <View style={styles.thisItem}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
}

export default App;

// Just some styles
const styles = StyleSheet.create({
  containerItems: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#0005",
    justifyContent: "center",
    alignItems: "center",
  },
  thisItem: {
    backgroundColor: "#fff",
    width: 100,
    height: 200,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 24,
  },
  picker: {
    backgroundColor: "#000",
    width: 100,
    marginVertical: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    color: "#fff",
  },
  pickerItem: {
    backgroundColor: "#fff",
    color: "#000",
  },
});

// For more React Native tutorials
// Visit https://www.kindacode.com/cat/mobile/react-native/
