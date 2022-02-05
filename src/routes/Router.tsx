import React, { useContext, useEffect } from "react";
import { StatusBar, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Tasks from "../screens/Tasks";
import AppContext from "../context/AppContext";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Profile from "../screens/Profile";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ActionTypes } from "../context/types";
const Tab = createBottomTabNavigator();

const optionsTab: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: "#000",
    borderBottomWidth: 0,
  },
  tabBarStyle: {
    backgroundColor: "#000",
    borderTopWidth: 0,
  },

  headerTitleStyle: {
    color: "#fff",
  },
};
const Router = () => {
  const { user, dispatch } = useContext(AppContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      {user ? (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Goals"
              component={Home}
              options={{ ...optionsTab, headerShown: false }}
            />
            <Tab.Screen
              name="tasks"
              component={Tasks}
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
                        dispatch &&
                          dispatch({
                            type: ActionTypes.REMOVE_USER,
                            payload: null,
                          });
                      })();
                    }}
                  >
                    <Text
                      style={{ color: "#fff", marginRight: 20, fontSize: 15 }}
                    >
                      {"=>"}
                    </Text>
                  </TouchableOpacity>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
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

      <StatusBar backgroundColor="#000" />
    </>
  );
};

export default Router;
