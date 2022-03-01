import React, { ReactNode } from "react";

import { ScrollView, StyleSheet } from "react-native";

const ScrollContainer = ({ children }: { children: ReactNode }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};
export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
  },
});
