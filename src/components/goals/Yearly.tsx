import { Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { getMyYearlyGoals } from "../../api/goal";
import { addGoalsYear } from "../../context/appActions";
import GoalsList from "./GoalsList";

const Yearly = ({ navigation }: { navigation: any }) => {
  const { goals, user, dispatch } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      let res = await getMyYearlyGoals(user.user?._id);
      addGoalsYear(res, dispatch);
    })();
  }, []);
  return (
    <>
      {goals.year.data.length > 0 ? (
        <GoalsList data={goals.year.data} navigation={navigation} />
      ) : (
        <Text style={styles.text}>add goals</Text>
      )}
    </>
  );
};

export default Yearly;
const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
