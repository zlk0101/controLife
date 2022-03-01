import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import ScrollContainer from "../components/ScrollContainer";
import AppContext from "../context/AppContext";

const Profile = () => {
  const { user } = useContext(AppContext);
  return (
    <ScrollContainer>
      <View>
        <Text style={styles.text}>{user.user?.username}</Text>
        <Text style={styles.text}>{user.user?.country}</Text>
      </View>
    </ScrollContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#fff",
  },
});
