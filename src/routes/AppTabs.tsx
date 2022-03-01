import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import AppContext from "../context/AppContext";
import Tasks from "../screens/Tasks";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { ActionTypes } from "../context/types";
import Habits from "../screens/Habits";
import Notes from "../screens/Notes";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

const optionsTab: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: "#000",
    borderBottomWidth: 0,
  },

  headerTitleStyle: {
    color: "#fff",
  },
};
const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Goals") {
            return (
              <MaterialCommunityIcons
                name="playlist-star"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Lists") {
            return (
              <MaterialCommunityIcons
                name="format-list-text"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Habits") {
            return (
              <MaterialCommunityIcons
                name="format-list-checks"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Notes") {
            return <MaterialIcons name="note-add" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return <FontAwesome5 name="user-cog" size={20} color={color} />;
          }
        },
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          display:
            route.path === "AddTask"
              ? "none"
              : route.path === "TasksDayItem"
              ? "none"
              : "flex",
        },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "#7dd",
      })}
    >
      <Tab.Screen
        name="Goals"
        component={Home}
        options={({ navigation }) => ({
          ...optionsTab,
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CreateGoal");
              }}
            >
              <Entypo
                name="plus"
                size={30}
                style={{ marginRight: 20 }}
                color="#fff"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Lists"
        component={Tasks}
        options={({ navigation }) => ({
          ...optionsTab,
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddTask");
              }}
            >
              <Entypo
                name="plus"
                size={30}
                style={{ marginRight: 20 }}
                color="#fff"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Habits"
        component={Habits}
        options={{ ...optionsTab, headerShown: false }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{ ...optionsTab, headerShown: false }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          ...optionsTab,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                (async () => {
                  await AsyncStorage.removeItem("user");
                  dispatch({
                    type: ActionTypes.REMOVE_USER,
                    payload: null,
                  });
                })();
              }}
            >
              <MaterialCommunityIcons
                style={{ marginRight: 10 }}
                name="exit-to-app"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;
