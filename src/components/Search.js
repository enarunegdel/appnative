import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = ({ value, onValueChange, onFinishEnter }) => {
  return (
    <View style={css.searchPanel}>
      <Feather style={css.searchIcon} name="search" size={24} color="black" />
      <TextInput
        value={value}
        onChangeText={onValueChange}
        style={css.searchText}
        placeholder="Хичээлийн гарчиг хайх"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onFinishEnter}
      />
    </View>
  );
};

export default Search;

const css = StyleSheet.create({
  searchPanel: {
    top: 10,
    height: 50,
    backgroundColor: "#F9DDA4",
    marginHorizontal: 20,
    borderRadius: 7,
    flexDirection: "row",
  },
  searchText: {
    //color: "white",
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 34,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
