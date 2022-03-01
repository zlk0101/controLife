import { FlatList } from "react-native";
import React, { useContext } from "react";
import { GoalI } from "../../types/goal";
import GoalItem from "../GoalItem";
import AppContext from "../../context/AppContext";
import { fetchTasks } from "../../context/appActions";

const GoalsList = ({
  navigation,
  data,
}: {
  navigation: any;
  data: GoalI[];
}) => {
  const { dispatch } = useContext(AppContext);
  const renderItem = ({ item }: { item: GoalI }) => {
    return (
      <GoalItem
        goal={item}
        goalView={() => {
          fetchTasks(dispatch);
          navigation.navigate("GoalView", { id: item._id });
        }}
      />
    );
  };
  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item, i) => i + ""}
      />
    </>
  );
};

export default GoalsList;
