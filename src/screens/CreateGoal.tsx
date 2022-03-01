import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { GoalI, RouteGoalsT } from "../types/goal";
import ScrollContainer from "../components/ScrollContainer";
import TypeGoalPicker from "../components/TypeGoalPicker";
import { goalTypeSelect } from "../data/goal";
import StartDatePicker from "../components/StartDatePicker";
import AppContext from "../context/AppContext";
import { createGoal, createGoalCustom } from "../api/goal";
import { getObjectDate } from "../functions/datesCountrys";
import { createNewGoal } from "../context/appActions";
const CreateGoal = ({ navigation }: { navigation: any }) => {
  const { user, goals, dispatch } = useContext(AppContext);
  const [goal, setGoal] = useState<GoalI>({
    userId: user.user?._id,
    title: "",
    description: "",
  });
  const [typeGoal, setTypeGoal] = useState<RouteGoalsT>("daily");
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState({ startDate: false, endDate: false });
  const [endDate, setEndDate] = useState(new Date());

  const onChangeStartDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || startDate;
    setShow({ ...show, startDate: Platform.OS === "ios" });
    setStartDate(currentDate);
  };
  const onChangeEndDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || endDate;
    setShow({ ...show, endDate: Platform.OS === "ios" });
    setEndDate(currentDate);
  };
  const showStartDatepicker = () => {
    setShow({ ...show, startDate: true });
  };
  const showEndDatepicker = () => {
    setShow({ ...show, endDate: true });
  };

  //connect with api
  const onSubmit = async () => {
    if (typeGoal !== "custom") {
      let res = await createGoal({
        ...goal,
        typeGoal,
        date: getObjectDate(user.user?.country),
      });
      console.log(res);
      if (res) {
        let thisGoals =
          typeGoal === "daily"
            ? goals.today
            : typeGoal === "weekly"
            ? goals.week
            : typeGoal === "monthly"
            ? goals.month
            : typeGoal === "yearly"
            ? goals.year
            : goals.custom;
        createNewGoal([...thisGoals.data, res], dispatch, typeGoal);
        navigation.navigate("Goals");
      }
    } else {
      let res = await createGoalCustom({
        ...goal,
        typeGoal,
        startDate: startDate.getTime(),
        endDate: endDate.getTime(),
      });
      if (res) {
        createNewGoal([...goals.custom.data, res], dispatch, typeGoal);
        navigation.navigate("Goals");
      }
    }
  };

  return (
    <ScrollContainer>
      <View style={styles.container}>
        <TypeGoalPicker
          items={goalTypeSelect}
          valueChange={(text: any) => setTypeGoal(text)}
          value={typeGoal}
        />
        {typeGoal === "custom" ? (
          <>
            <StartDatePicker
              showDatepicker={showStartDatepicker}
              onChange={onChangeStartDate}
              value={startDate}
              labelText="Start Date"
              minimumDate={new Date()}
              show={show.startDate}
            />
            <StartDatePicker
              show={show.endDate}
              showDatepicker={showEndDatepicker}
              onChange={onChangeEndDate}
              value={endDate}
              minimumDate={startDate}
              labelText="End Date"
            />
          </>
        ) : null}

        <View style={styles.inputsContainer}>
          <TextInput
            placeholderTextColor={"#aaa"}
            style={styles.input}
            value={goal.title}
            onChangeText={(text) => setGoal({ ...goal, title: text })}
            placeholder="title"
          />
          <TextInput
            placeholderTextColor={"#aaa"}
            multiline
            value={goal.description}
            onChangeText={(text) => setGoal({ ...goal, description: text })}
            style={{
              ...styles.input,
              minHeight: 100,
              maxHeight: 500,
            }}
            textAlignVertical="top"
            placeholder="description"
          />
        </View>
        <TouchableOpacity style={styles.touchButton} onPress={() => onSubmit()}>
          <Text style={styles.textButton}>Add Goal</Text>
        </TouchableOpacity>
      </View>
    </ScrollContainer>
  );
};

export default CreateGoal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#253535",
    paddingVertical: 20,
  },
  inputsContainer: {
    width: "90%",
    marginVertical: 10,
  },
  input: {
    marginVertical: 5,
    paddingLeft: 5,
    backgroundColor: "#141414",
    color: "#fff",
  },
  touchButton: {
    width: "80%",
  },
  textButton: {
    textAlign: "center",
    color: "#8ff",
    backgroundColor: "#000",
    fontWeight: "bold",
    borderRadius: 10,
    paddingVertical: 13,
    marginVertical: 10,
  },
});
