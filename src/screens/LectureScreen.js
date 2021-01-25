import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Search from "../components/Search";
import useLecture from "../hooks/useLecture";
import LectureList from "../components/LectureList";

const LectureScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [lectures, errorMessage, searchSubject, loading] = useLecture();

  return (
    <View>
      <Search
        value={searchValue}
        onValueChange={setSearchValue}
        onFinishEnter={searchSubject}
      />

      {errorMessage && (
        <Text style={{ marginHorizontal: 20, color: "red" }}>
          {errorMessage}
        </Text>
      )}

      {loading && <ActivityIndicator />}

      <ScrollView style={{ marginTop: 10, marginBottom: 20 }}>
        {lectures.map((lecture) => (
          <LectureList
            searchValue={searchValue}
            key={lecture._id}
            style={{ marginVertical: 10 }}
            data={lecture}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default LectureScreen;

const styles = StyleSheet.create({});
