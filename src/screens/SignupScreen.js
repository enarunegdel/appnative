import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, Alert, ScrollView } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import UserContext from "../contexts/UserContext";

export default function ({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const state = useContext(UserContext);

  const signupHandler = () => {
    setError(null);

    if (email.length === 0) {
      Alert.alert("Та имэйл хаягаа бичнэ үү...");
      return;
    }

    if (name.length === 0) {
      Alert.alert("Та овог нэрээ бичнэ үү...");
      return;
    }

    if (phone.length === 0) {
      Alert.alert("Та утасны дугаараа бичнэ үү...");
      return;
    }

    if (password1.length === 0) {
      Alert.alert("Та нууц үгээ оруулна уу...");
      return;
    }

    if (password1 !== password2) {
      Alert.alert("Нууц үгнүүд хоорондоо таарахгүй байна...");
      return;
    }

    state.signUp(name, email, phone, password1);
  };

  return (
    <View>
      <Image
        style={{ width: "100%" }}
        source={require("../../assets/img/Register.jpg")}
      />

      {error && (
        <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      )}
      <ScrollView>
        <MyInput
          value={name}
          placeholder="Таны овог нэр"
          onChangeText={setName}
        />

        <MyInput
          value={email}
          //keyboardType="number-pad"
          placeholder="Таны имэйл хаяг"
          onChangeText={setEmail}
        />

        <MyInput
          value={phone}
          keyboardType="number-pad"
          placeholder="Таны утасны дугаар"
          onChangeText={setPhone}
        />

        <MyInput
          value={password1}
          secureTextEntry={true}
          placeholder="Нууц үгээ оруулна уу"
          onChangeText={setPassword1}
        />

        <MyInput
          value={password2}
          secureTextEntry={true}
          placeholder="Нууц үгээ давтан оруулна уу"
          onChangeText={setPassword2}
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
            title="Бүртгэх"
            onPress={signupHandler}
          />
        </View>
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
  button: {
    marginVertical: 5,
  },
});
