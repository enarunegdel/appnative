import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Title, Drawer } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import UserContext from "../contexts/UserContext";

const DrawerContent = (props) => {
  const state = useContext(UserContext);
  let photoURL = "";
  if (state.userName)
    photoURL = `https://enarufiles.fra1.digitaloceanspaces.com/image/users/noLogin.jpg`;
  else
    photoURL = `https://enarufiles.fra1.digitaloceanspaces.com/image/users/logSmall.jpg`;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flexDirection: "row", paddingLeft: 20, marginTop: 15 }}>
          <Avatar.Image source={{ uri: photoURL }} size={50} />

          <View style={{ marginLeft: 15 }}>
            <Title
              style={{
                fontSize: 16,
                marginTop: 3,
                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {state.userName ? state.userName : "Инару нэгдэл"}
            </Title>
            <Caption style={{ lineHeight: 15 }}>
              {state.userLevel ? state.userLevel : "Гишүүнчлэлийн апп"}
            </Caption>
          </View>
        </View>

        {state.isLoggedIn ? (
          <>
            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Цахим ажлын орчин"
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="calendar-multiple"
                    color={color}
                    size={size}
                  />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Гишүүнчлэл"
                icon={({ color, size }) => (
                  <FontAwesome
                    name="address-book-o"
                    color={color}
                    size={size}
                  />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Санал асуулга"
                icon={({ color, size }) => (
                  <AntDesign name="profile" color={color} size={size} />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Гишүүнчлэлийн хүсэлт"
                icon={({ color, size }) => (
                  <SimpleLineIcons name="note" color={color} size={size} />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Ургийн бичиг"
                icon={({ color, size }) => (
                  <Foundation
                    name="social-skillshare"
                    color={color}
                    size={size}
                  />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Тохируулга"
                icon={({ color, size }) => (
                  <Feather name="settings" color={color} size={size} />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Гарах"
                onPress={() => state.logout()}
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="exit-run"
                    color={color}
                    size={size}
                  />
                )}
              />
            </Drawer.Section>
          </>
        ) : (
          <>
            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Хэрэгжиж буй төслүүд"
                onPress={() =>
                  props.navigation.navigate("Хэрэгжиж буй төслүүд")
                }
                icon={({ color, size }) => (
                  <Entypo name="network" color={color} size={size} />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Инару нэгдлийн тухай"
                icon={({ color, size }) => (
                  <Entypo name="info-with-circle" color={color} size={size} />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Нийтлэг асуулт хариулт"
                icon={({ color, size }) => (
                  <MaterialIcons
                    name="question-answer"
                    color={color}
                    size={size}
                  />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Бүртгүүлэх"
                onPress={() => props.navigation.navigate("Бүртгүүлэх")}
                icon={({ color, size }) => (
                  <AntDesign name="form" color={color} size={size} />
                )}
              />
            </Drawer.Section>

            <Drawer.Section style={{ marginTop: 15 }}>
              <DrawerItem
                label="Нэвтрэх"
                onPress={() => props.navigation.navigate("Нэвтрэх")}
                icon={({ color, size }) => (
                  <Entypo name="login" color={color} size={size} />
                )}
              />
            </Drawer.Section>
          </>
        )}
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
