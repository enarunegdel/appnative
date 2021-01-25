import React, { useContext } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import MyHeaderButton from "../components/MyHeaderButton";
import UserContext from "../contexts/UserContext";

const RootScreen = ({ navigation }) => {
  const state = useContext(UserContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="search"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      title: state.userName ? (
        <>
          {state.userName}: {state.userLevel}
        </>
      ) : (
        "Инару нэгдэл"
      ),
    });
  }, [navigation, state.userName, state.userLevel]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: "100%", height: "40%", flex: 5 }}
        source={require("../../assets/img/headerImg.jpg")}
      />
      <View style={{ flex: 3 }}>
        <Text style={css.headerStyle}>
          Үндэсний баялаг бүтээгч, хөрөнгө оруулагчдын нэгдэл
        </Text>
      </View>
      <View style={{ flex: 5 }}>
        <View style={css.buttonAreaStyle}>
          <View style={[css.buttonRowStyle, { backgroundColor: "#2475B0" }]}>
            <TouchableOpacity onPress={() => navigation.navigate("Project")}>
              <View style={css.buttonIconStyle}>
                <Entypo name="network" size={35} color="white" />
              </View>
              <Text style={css.buttonTextStyle}>Хэрэгжиж буй төслүүд</Text>
            </TouchableOpacity>
          </View>
          <View style={[css.buttonRowStyle, { backgroundColor: "#192A56" }]}>
            <TouchableOpacity onPress={() => navigation.navigate("AboutEnaru")}>
              <View style={css.buttonIconStyle}>
                <Entypo name="info-with-circle" size={35} color="white" />
              </View>
              <Text style={css.buttonTextStyle}>Инару нэгдлийн тухай</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <View style={css.buttonAreaStyle}>
          <View style={[css.buttonRowStyle, { backgroundColor: "#EA7773" }]}>
            <View style={css.buttonIconStyle}>
              <AntDesign name="message1" size={35} color="white" />
            </View>
            <Text style={css.buttonTextStyle}>Зар, нийтлэл</Text>
          </View>
          <View style={[css.buttonRowStyle, { backgroundColor: "#B83227" }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MembersScreen")}
            >
              <View style={css.buttonIconStyle}>
                <FontAwesome name="address-book-o" size={35} color="white" />
              </View>
              <Text style={css.buttonTextStyle}>Гишүүнчлэл</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <View style={css.buttonAreaStyle}>
          <View style={[css.buttonRowStyle, { backgroundColor: "#6AB04A" }]}>
            <TouchableOpacity onPress={() => navigation.navigate("Education")}>
              <View style={css.buttonIconStyle}>
                <Foundation name="social-skillshare" size={50} color="white" />
              </View>
              <Text style={css.buttonTextStyle}>Цахим ажлын орчин</Text>
            </TouchableOpacity>
          </View>

          <View style={[css.buttonRowStyle, { backgroundColor: "#019031" }]}>
            <View style={css.buttonIconStyle}>
              <MaterialIcons name="question-answer" size={35} color="white" />
            </View>
            <Text style={css.buttonTextStyle}>Нийтлэг асуулт хариулт</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default RootScreen;

const css = StyleSheet.create({
  headerStyle: {
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 1,
    padding: 1,
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: "#841EB2",
    borderBottomWidth: 1,
    color: "#841EB2",
  },
  buttonAreaStyle: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonRowStyle: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    width: 200,
    height: 110,
    justifyContent: "space-around",
    borderRadius: 10,
  },
  buttonTextStyle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    fontSize: 14,
    color: "white",
  },
  buttonIconStyle: {
    alignItems: "center",
    padding: 5,
  },
});
