import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import MyButton from "../components/MyButton";
import UserContext from "../contexts/UserContext";

export default function ({ route, navigation }) {
  const [email, setEmail] = useState("azjargaljambal@gmail.com");
  const [password, setPassword] = useState("0000");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const loginHandler = () => {
    if (email.length === 0) {
      Alert.alert("Та имэйл хаягаа бичнэ үү...");
      return;
    }

    if (password.length === 0) {
      Alert.alert("Та нууц үгээ оруулна уу...");
      return;
    }
    state.login(email, password);
  };

  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/img/loginBG.jpg")}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          color: "gray",
          marginHorizontal: 20,
        }}
      >
        Та имэйл болон нууц үгээ оруулна уу
      </Text>

      <ScrollView>
        <TextInput
          keyboardType="email-address"
          style={css.inputField}
          placeholder="Имэйл хаяг"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={css.inputField}
          secureTextEntry={true}
          placeholder="Нууц үг"
          onChangeText={setPassword}
          value={password}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 30,
          }}
        >
          <MyButton
            style={{ width: 180, padding: 10 }}
            title="Буцах"
            onPress={() => navigation.goBack()}
          />
          <MyButton
            style={{ width: 180, padding: 10 }}
            title="Нэвтрэх"
            onPress={loginHandler}
          />
        </View>
        {error && (
          <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
            ---{error}
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
});
