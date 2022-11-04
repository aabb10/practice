/*
Screen 설명 : https://reactnavigation.org/docs/screen/#name
options 설명 : https://reactnavigation.org/docs/bottom-tab-navigator
*/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({
  HomeScreen,
  ManagementScreen,
  CalendarScreen,
  ListScreen,
}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Management"
          component={ManagementScreen}
          options={{
            title: "관리",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="library" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            title: "캘린더",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            title: "리스트",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
