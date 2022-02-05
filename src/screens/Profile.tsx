import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ScrollContainer from "../components/ScrollContainer";

const Profile = () => {
  return (
    <ScrollContainer>
      <View>
        <Text style={styles.text}> this is profile </Text>
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
