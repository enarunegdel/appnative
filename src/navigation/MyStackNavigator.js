import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RootScreen from "../screens/RootScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ProjectScreen from "../screens/ProjectScreen";
import EduScreen from "../screens/EduScreen";
import AboutScreen from "../screens/AboutEnaruScreen";
import MembersScreen from "../screens/MembersScreen";
import LectureScreen from "../screens/LectureScreen";
import SubjectDetailScreen from "../screens/SubjectDetailScreen";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#841EB2" },
      headerTintColor: "white",
      headerTitleStyle: { fontSize: 18 },
      headerBackTitleVisible: false,
    }}
    initialRouteName="Root"
  >
    <Stack.Screen
      name="Root"
      component={RootScreen}
      options={{
        title: "Инару нэгдэл",
      }}
    />

    <Stack.Screen
      name="Project"
      component={ProjectScreen}
      options={{
        title: "Хэрэгжиж буй төслүүд",
      }}
    />

    <Stack.Screen
      name="Education"
      component={EduScreen}
      options={{
        title: "Цахим ажлын орчин",
      }}
    />

    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Нэвтрэх/Бүртгүүлэх" }}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ title: "Шинээр бүртгүүлэх" }}
    />

    <Stack.Screen
      name="AboutEnaru"
      component={AboutScreen}
      options={{ title: "Инару нэгдлийн тухай" }}
    />
    <Stack.Screen
      name="MembersScreen"
      component={MembersScreen}
      options={{ title: "Гишүүнчлэл" }}
    />

    <Stack.Screen
      name="LectureScreen"
      component={LectureScreen}
      options={{ title: "Боловсролын сэдвүүд" }}
    />

    <Stack.Screen
      name="SubjectDetailScreen"
      component={SubjectDetailScreen}
      options={{ title: "Сэдвийн дэлгэрэнгүй" }}
    />
  </Stack.Navigator>
);
