import { Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { getMyCustomGoals } from "../../api/goal";
import { addGoalsCustom } from "../../context/appActions";
import GoalsList from "./GoalsList";

const Custom = ({ navigation }: { navigation: any }) => {
  const { goals, user, dispatch } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      let res = await getMyCustomGoals(user.user?._id);
      addGoalsCustom(res, dispatch);
    })();
  }, []);
  return (
    <>
      {goals.custom.data.length > 0 ? (
        <GoalsList data={goals.custom.data} navigation={navigation} />
      ) : (
        <Text style={styles.text}>add goals</Text>
      )}
    </>
  );
};

export default Custom;
const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
