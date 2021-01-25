import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Subject = ({ data }) => {
  const navigation = useNavigation();
  let photoURL = data.photo;
  if (photoURL === "no-photo.jpg")
    photoURL = `https://enarufiles.fra1.digitaloceanspaces.com/image/subjects/no-photo.jpg`;
  else
    photoURL = `https://enarufiles.fra1.digitaloceanspaces.com/image/subjects/photo_${data._id}.jpg`;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SubjectDetailScreen", { id: data.id })
      }
      style={{ marginVertical: 20, width: 210 }}
    >
      <Image
        style={{
          width: 200,
          height: 150,
          marginRight: 15,
          marginBottom: 15,
          borderColor: "gray",
          borderWidth: 1,
        }}
        source={{ uri: photoURL }}
      />
      <Text style={{ marginRight: 10, fontWeight: "bold" }}>{data.name}</Text>
      <Text style={{ marginRight: 10, color: "gray" }}>
        Багш: {data.lecturer}
      </Text>
    </TouchableOpacity>
  );
};
export default Subject;

const styles = StyleSheet.create({});
