import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import AppContext from "../context/AppContext";
import Register from "../screens/Register";
import TaskDayItem from "../screens/TaskDayItem";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppTabs from "./AppTabs";
import AddTask from "../screens/AddTask";
import CreateGoal from "../screens/CreateGoal";
import GoalView from "../screens/GoalView";
import TaskInfo from "../screens/TaskInfo";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const optionsStack = {
  headerStyle: {
    backgroundColor: "#000",
    borderBottomWidth: 0,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    color: "#fff",
  },
};

const Router = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      {user.user && (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="AppsStack"
              component={AppTabs}
              options={{ ...optionsStack, headerShown: false }}
            />
            <Stack.Screen
              name="TasksDayItem"
              component={TaskDayItem}
              options={optionsStack}
            />
            <Stack.Screen
              name="AddTask"
              component={AddTask}
              options={{ ...optionsStack, headerShown: false }}
            />
            <Stack.Screen
              name="CreateGoal"
              component={CreateGoal}
              options={optionsStack}
            />
            <Stack.Screen
              name="TaskInfo"
              component={TaskInfo}
              options={optionsStack}
            />
            <Stack.Screen
              name="GoalView"
              component={GoalView}
              options={() => ({
                ...optionsStack,
                headerShown: false,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
      {!user.user && !user.isLoading && (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                display: "none",
              },
              tabBarActiveBackgroundColor: "#f00f",
            }}
          >
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
      {user.isLoading && <></>}

      <StatusBar backgroundColor="#000" />
    </>
  );
};

export default Router;
