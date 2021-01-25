import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Subject from "./Subject";
import useSubjects from "../hooks/useSubjects";
import UserContex from "../contexts/UserContext";

const LectureList = ({ style, data, searchValue }) => {
  const [subjects, errorMessage] = useSubjects(data._id);

  const filteredSubject = subjects.filter((el) =>
    el.name.includes(searchValue)
  );

  const state = useContext(UserContex);

  let acceptStatus = false;
  if (state.userLevel === "Дэмжигч гишүүн") acceptStatus = true;
  if (state.userLevel === "Энгийн гишүүн" && data.level < 3)
    acceptStatus = true;

  return (
    <View style={{ marginHorizontal: 20, ...style }}>
      {acceptStatus ? (
        <>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{data.name}</Text>
          <Text>{data.description}</Text>
          {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
          <FlatList
            horizontal
            data={filteredSubject}
            keyExtractor={(subject) => subject.name}
            renderItem={({ item, index }) => <Subject data={item} />}
          />
        </>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default LectureList;

const styles = StyleSheet.create({});
