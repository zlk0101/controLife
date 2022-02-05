import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScrollContainer from "../components/ScrollContainer";
import AppContext from "../context/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);
  return (
    <ScrollContainer>
      <View style={styles.container}>
        <Text style={styles.text}>{user?.username}</Text>
        <Text style={styles.text}>{user?.country}</Text>
        <Text style={styles.text}>{user?._id}</Text>
      </View>
    </ScrollContainer>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
