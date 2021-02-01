import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStackNavigator from "./MyStackNavigator";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import AboutScreen from "../screens/AboutEnaruScreen";
import SplashScreen from "../screens/SplashScreen";
import ProjectScreen from "../screens/ProjectScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

import UserContex from "../contexts/UserContext";

export default () => {
  const state = useContext(UserContex);

  if (state.isLoading === true) {
    return <SplashScreen />;
  }

  return (
    <Drawer.Navigator
      initialRouteName="Root"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Нүүр" component={MyStackNavigator} />
      <Drawer.Screen name="Хэрэгжиж буй төслүүд" component={ProjectScreen} />
      <Drawer.Screen name="Инару нэгдлийн тухай" component={AboutScreen} />
      <Drawer.Screen name="Зар, нийтлэл" component={MyStackNavigator} />

      {state.isLoggedIn ? (
        <>
          <Drawer.Screen name="Гишүүнчлэл" component={MyStackNavigator} />
          <Drawer.Screen
            name="Цахим ажлын орчин"
            component={MyStackNavigator}
          />
          {state.userRole === "operator" && (
            <Drawer.Screen
              name="Инару чатад холбогдох"
              component={MyStackNavigator}
            />
          )}
          <Drawer.Screen
            name="Гарах"
            component={MyStackNavigator}
            listeners={() => {
              console.log("Системээс гарлаа...");
              state.logout();
            }}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Нэвтрэх"
            component={LoginScreen}
            options={{ title: "Нэвтрэх" }}
          />
          <Drawer.Screen
            name="Бүртгүүлэх"
            component={SignupScreen}
            options={{ title: "Бүртгүүлэх" }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};
