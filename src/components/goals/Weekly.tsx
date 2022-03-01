import { Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import GoalsList from "./GoalsList";
import { getMyWeeklyGoals } from "../../api/goal";
import { addGoalsWeek } from "../../context/appActions";

const Weekly = ({ navigation }: { navigation: any }) => {
  const { goals, user, dispatch } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      let res = await getMyWeeklyGoals(user.user?._id);
      addGoalsWeek(res, dispatch);
    })();
  }, []);
  return (
    <>
      {goals.week.data.length > 0 ? (
        <GoalsList data={goals.week.data} navigation={navigation} />
      ) : (
        <Text style={styles.text}>create new Goal</Text>
      )}
    </>
  );
};

export default Weekly;
const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
