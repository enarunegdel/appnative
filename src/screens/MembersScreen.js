import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { HeaderTitle } from "@react-navigation/stack";

import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function MembersScreen({ navigation }) {
  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/img/becomingamember01.jpg")}
      />

      <View style={{ alignContent: "center" }}>
        <View style={{ flex: 1, marginTop: 30 }}>
          <View
            style={[
              css.buttonRowStyle,
              { backgroundColor: "#B83227", alignSelf: "center" },
            ]}
          >
            <View style={css.buttonIconStyle}>
              <AntDesign name="profile" size={35} color="white" />
            </View>
            <Text style={css.buttonTextStyle}>
              Санал асуулгын хуудас бөглөх
            </Text>
          </View>
          <View
            style={[
              css.buttonRowStyle,
              { backgroundColor: "#B83227", alignSelf: "center" },
            ]}
          >
            <View style={css.buttonIconStyle}>
              <SimpleLineIcons name="note" size={35} color="white" />
            </View>
            <Text style={css.buttonTextStyle}>Гишүүнчлэлийн хүсэлт илгээх</Text>
          </View>

          <View
            style={[
              css.buttonRowStyle,
              { backgroundColor: "#B83227", alignSelf: "center" },
            ]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("LectureScreen")}
            >
              <View style={css.buttonIconStyle}>
                <MaterialCommunityIcons
                  name="cast-education"
                  size={35}
                  color="white"
                />
              </View>
              <Text style={css.buttonTextStyle}>Гишүүнчлэлийн боловсрол</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  headerStyle: {
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  contentStyle: {
    textAlign: "left",
    marginLeft: 20,
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  textStyle: {
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    fontSize: 13,
  },
  textButtonStyle: {
    textAlign: "right",
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonAreaStyle: {
    //flex: 1,
    //flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonRowStyle: {
    //flex: 1,
    //marginHorizontal: 10,
    //marginVertical: 5,
    padding: 5,
    width: 200,
    height: 110,
    margin: 15,
    //justifyContent: "center",
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

export default MembersScreen;
