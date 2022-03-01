import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { getMyMonthlyGoals } from "../../api/goal";
import { addGoalsMonth } from "../../context/appActions";
import GoalsList from "./GoalsList";

const Monthly = ({ navigation }: { navigation: any }) => {
  const { goals, user, dispatch } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      let res = await getMyMonthlyGoals(user.user?._id);
      addGoalsMonth(res, dispatch);
    })();
  }, []);
  return (
    <>
      {goals.month.data.length > 0 ? (
        <GoalsList data={goals.month.data} navigation={navigation} />
      ) : (
        <Text style={styles.text}>add goals</Text>
      )}
    </>
  );
};

export default Monthly;
const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
