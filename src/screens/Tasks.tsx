import React from "react";

import { View, Text, StyleSheet } from "react-native";
import ScrollContainer from "../components/ScrollContainer";

const Tasks = () => {
  return (
    <ScrollContainer>
      <View>
        <Text style={styles.text}>this is a tasks component</Text>
      </View>
    </ScrollContainer>
  );
};

export default Tasks;
const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#fff",
  },
});
