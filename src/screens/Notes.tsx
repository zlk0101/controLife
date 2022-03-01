import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Notes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notes</Text>
    </View>
  );
};

export default Notes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
  },
  text: {
    color: "#fff",
  },
});
