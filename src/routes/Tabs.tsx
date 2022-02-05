import React from 'react';

import Login from '../screens/Login';
import Home from '../screens/Home';

import {NavigationContainer} from '@react-navigation/native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
const Tab = createBottomTabNavigator();
const optionsHeader: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: '#000',
  },
  tabBarStyle: {
    backgroundColor: '#000',
  },
  headerTitleStyle: {
    color: '#fff',
  },
};
const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={optionsHeader} />
        <Tab.Screen name="Login" component={Login} options={optionsHeader} />
      </Tab.Navigator>
      <StatusBar backgroundColor="#000" />
    </NavigationContainer>
  );
};

export default Tabs;
