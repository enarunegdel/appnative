import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userLevel, setUserLevel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setIsLoggedIn(false);
    setToken(null);
    setEmail(null);
    setUserName(null);
    setUserRole(null);
    setUserLevel(null);
  };

  const login = (email, password) => {
    axios
      .post("http://104.248.157.15:8000/api/v1/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        loginUserSuccessful(
          response.data.token,
          email,
          response.data.user.name,
          response.data.user.role,
          response.data.user.level
        );
        console.log(response.data);
      })
      .catch((err) => {
        loginFailed(err.message);
      });
  };

  const signUp = (name, email, phone, password) => {
    axios
      .post("http://104.248.157.15:8000/api/v1/users", {
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: "user",
        level: "Энгийн гишүүн",
      })
      .then((response) => {
        console.log(response.data);
        loginUserSuccessful(
          response.data.token,
          email,
          name,
          "user",
          "Энгийн гишүүн"
        );
      })
      .catch((err) => {
        loginFailed(err.message);
      });
  };

  const loginFailed = (error) => {
    console.log("-------", error);
    setIsLoggedIn(false);
    setUserName(null);
    setEmail(null);
    setUserRole(null);
  };

  const loginUserSuccessful = async (
    token,
    email,
    userName,
    userRole,
    userLevel
  ) => {
    setToken(token);
    setEmail(email);
    setUserName(userName);
    setUserRole(userRole);
    setUserLevel(userLevel);
    setIsLoggedIn(true);

    try {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ token, userName, email, userRole, userLevel })
      );
    } catch (err) {
      console.log("Утас руу хадгалж чадсангүй...");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        userRole,
        setUserRole,
        userName,
        setUserName,
        email,
        setEmail,
        isLoading,
        setIsLoading,
        userLevel,
        setUserLevel,
        login,
        signUp,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
