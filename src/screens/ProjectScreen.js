import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";

export default function ({ navigation }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.43.141:8000/api/v1/projects")
      .then((result) => {
        console.log("Прожектүүдийг амжилттай хүлээж авлаа...");
        setProjects(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <Text style={css.headerStyle}>
            Ингэний хуурай сүү үйлдвэрлэх төсөл
          </Text>
        </View>
        <View
          style={{ backgroundColor: "white", flex: 5, flexDirection: "row" }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: "90%",
                height: "60%",
                marginHorizontal: 10,
                marginVertical: 20,
                borderRadius: 10,
              }}
              source={{
                uri:
                  "https://www.zendmentravel.com/wp-content/uploads/2016/03/IMG_9496.jpg",
              }}
            />
          </View>
          <View style={{ flex: 3 }}>
            <Text style={css.textStyle}>
              Ингэний сүү нийт хуурай бодисын хэмжээ, эрдсийн агууламжаар
              үнээний сүүнээс илүү. Ингэний сүүний нийт тосний хүчлийн дийлэнх
              хувийг ханасан хүчил эзэлнэ.
            </Text>
            <Text style={css.textButtonStyle}>Дэлгэрэнгүй</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5 }}>
          <Text style={css.headerStyle}>Инару биомедикал</Text>
        </View>
        <View
          style={{ backgroundColor: "white", flex: 5.5, flexDirection: "row" }}
        >
          <View style={{ flex: 3 }}>
            <Text style={css.textStyle}>
              Инару брэндийн бүтээгдэхүүн үйлдвэрлэлийн зохистой дадлыг
              хэрэгжүүлсэн орчинд чанартай, байгалын цэвэр түүхий эдээр сэтгэл
              шингээж 100% эх орондоо үйлдвэрлэж байна.
            </Text>
            <Text style={[css.textButtonStyle, { textAlign: "left" }]}>
              Дэлгэрэнгүй
            </Text>
          </View>

          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: "90%",
                height: "60%",
                marginHorizontal: 10,
                marginVertical: 20,
                borderRadius: 10,
              }}
              source={{
                uri:
                  "http://www.unread.today/files/ce6190d7b0fe72fdb5e4d67bc6ebdbaa.jpg",
              }}
            />
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
});
