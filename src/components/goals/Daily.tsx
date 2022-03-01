import { Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { getMyDailyGoals } from "../../api/goal";
import { addGoalsToday } from "../../context/appActions";
import GoalsList from "./GoalsList";

const Daily = ({ navigation }: { navigation: any }) => {
  const { goals, user, dispatch } = useContext(AppContext);
  useEffect(() => {
    const addGoalsGlobalState = async () => {
      let res = await getMyDailyGoals(user.user?._id);
      addGoalsToday(res, dispatch);
    };
    addGoalsGlobalState();
  }, []);

  return (
    <>
      {goals.today.data.length > 0 ? (
        <GoalsList data={goals.today.data} navigation={navigation} />
      ) : (
        <Text>crear nuevo</Text>
      )}
    </>
  );
};

export default Daily;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
