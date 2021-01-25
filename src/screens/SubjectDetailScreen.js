import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import useSubject from "../hooks/useSubject";

const SubjectDetailScreen = (props) => {
  const { id } = props.route.params;
  const [subject, error] = useSubject(id);

  if (error) {
    return <Text style={{ color: "red" }}>Алдаа гарлаа! {error}</Text>;
  }

  if (!subject) {
    return null;
  }

  let photoURL = subject.photo;
  if (photoURL === "no-photo.jpg")
    photoURL = `https://enarufiles.fra1.digitaloceanspaces.com/image/subjects/no-photo.jpg`;
  else
    photoURL = `https://enarufiles.fra1.digitaloceanspaces.com/image/subjects/photo_${subject._id}.jpg`;

  const videoURL = `https://enarufiles.fra1.digitaloceanspaces.com/video/subjects/video_${subject._id}.mp4`;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Image
        style={{ width: 120, height: 80, alignSelf: "center" }}
        source={{ uri: photoURL }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          padding: 10,
          alignSelf: "center",
        }}
      >
        {subject.name}
      </Text>
      <Text style={{ padding: 10 }}>{subject.content}</Text>

      <View style={css.container}>
        <Video
          source={{
            uri: videoURL,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={true}
          isLooping
          style={{ width: 300, height: 300 }}
        />
      </View>

      <Button onPress={() => props.navigation.goBack()} title="Буцах" />
    </ScrollView>
  );
};

const css = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    //justifyContent: "center",
    padding: 20,
  },
});

export default SubjectDetailScreen;

const styles = StyleSheet.create({});
