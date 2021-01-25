import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import MyButton from "../components/MyButton";
import { Video } from "expo-av";

function AboutEnaruScreen() {
  return (
    <ScrollView>
      <Image
        style={{ width: 150, height: 150, alignSelf: "center", marginTop: 10 }}
        source={require("../../assets/img/logo.png")}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          padding: 10,
          textAlign: "center",
          color: "#841EB2",
        }}
      >
        Эрхэм зорилго
      </Text>

      <Text
        style={{
          fontSize: 14,
          padding: 10,
          textAlign: "justify",
          marginHorizontal: 20,
        }}
      >
        ХАМТЫН ХАРИУЦЛАГАТАЙ, ОЛОН ХЭВШИЛТ ӨМЧИЙН ТӨЛӨВЛӨГӨӨТ ЭДИЙН ЗАСАГТАЙ,
        ОЮУН УХААН МЭДЛЭГЭЭР ГОЛЛОСОН ДЭЛХИЙН МОНГОЛ ИРГҮНИЙГ БОЛОВСРУУЛЖ, ӨРХ
        БҮЛ ГАЛ АЙЛЫН ТОГТОЛЦООТОЙ, БАЙГАЛЬ НИЙХЭМИЙН ЗОХИСТОЙ ХАРИЛЦААТАЙ,
        ТУСГААР ТАВАН ТОГТНОЛЫГ ЭРХЭМЛЭСЭН, ТӨВШИН САЙХАН ЭНХИЙН ОРНЫГ ЭВ
        ХАМТААР ЦОГЦЛУУЛАН МАНДУУЛАХ ЭРХЭМ ЗОРИЛГОТОЙ.
      </Text>
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Image
          style={{ width: 150, height: 150 }}
          source={require("../../assets/img/about1.jpg")}
        />
        <View style={{ marginRight: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              //textAlign: "center",
              marginLeft: 20,
              color: "#841EB2",
            }}
          >
            Зорилт
          </Text>
          <Text
            style={{
              fontSize: 14,
              padding: 10,
              marginLeft: 10,
              marginRight: 150,
              textAlign: "justify",
            }}
          >
            Үндэсний аж төрөхүйн ухааны онолоор баялаг бүтээгч, хөрөнгө
            оруулагчдыг нэгтгэж үндэсний их бүтээн байгуулалтыг цогцлооно.
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Image
          style={{
            width: 30,
            height: 30,
            flexDirection: "row",
            marginLeft: 30,
          }}
          source={require("../../assets/img/N1.png")}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            //textAlign: "center",
            marginLeft: 14,
            //color: "#841EB2",
            textAlignVertical: "center",
          }}
        >
          ҮНДЭСНИЙ АЖ ТӨРӨХҮЙ
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Image
          style={{
            width: 30,
            height: 30,
            flexDirection: "row",
            marginLeft: 30,
          }}
          source={require("../../assets/img/N2.png")}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            //textAlign: "center",
            marginLeft: 14,
            //color: "#841EB2",
            textAlignVertical: "center",
          }}
        >
          ХӨРӨНГӨ ОРУУЛАГЧ
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Image
          style={{
            width: 30,
            height: 30,
            flexDirection: "row",
            marginLeft: 30,
          }}
          source={require("../../assets/img/N3.png")}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            //textAlign: "center",
            marginLeft: 16,
            //color: "#841EB2",
            textAlignVertical: "center",
          }}
        >
          БАЯЛАГ БҮТЭЭГЧИД
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Image
          style={{
            width: 30,
            height: 30,
            flexDirection: "row",
            marginLeft: 30,
          }}
          source={require("../../assets/img/N4.png")}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            //textAlign: "center",
            marginLeft: 14,
            //color: "#841EB2",
            textAlignVertical: "center",
          }}
        >
          ИХ БҮТЭЭН БАЙГУУЛАЛТ
        </Text>
      </View>

      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          padding: 10,
          textAlign: "center",
          color: "#841EB2",
          marginTop: 20,
        }}
      >
        Үйл ажиллагааны чиглэл
      </Text>
      <Text
        style={{
          fontSize: 18,
          padding: 10,
          marginTop: 20,
        }}
      >
        Байгальд ээлтэй, хөгжлийн төслүүдийг боловсруулах, хэрэгжүүлэх, уялдаа
        холбоог бий болгох
      </Text>
    </ScrollView>
  );
}

export default AboutEnaruScreen;
