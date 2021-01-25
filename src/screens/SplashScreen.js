import React, { useEffect, useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContex from "../contexts/UserContext";

const SplashScreen = () => {
  const state = useContext(UserContex);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((data) => {
        if (data !== null) {
          const user = JSON.parse(data);
          console.log("------", user);
          state.setToken(user.token);
          state.setEmail(user.email);
          state.setUserName(user.userName);
          state.setUserRole(user.userRole);
          state.setUserLevel(user.userLevel);
          state.setIsLoggedIn(true);
        }
        state.setIsLoading(false);
      })
      .catch((err) =>
        console.log("Токенийг утаснаас уншиж чадсангүй. Алдаа : " + err.message)
      );
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size="large" color="gray" />
      <Text style={{ textAlign: "center", fontSize: 24, top: 20 }}>
        Түр хүлээнэ үү
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
