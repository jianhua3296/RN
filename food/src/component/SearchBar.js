import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backGround}>
      <FontAwesome name="search" style={styles.iconStyle} color="black" />
      <TextInput
        placeholder="search"
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={(newTerm) => {
            onTermChange(newTerm)
        }}
        onEndEditing={() => {
          onTermSubmit()
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: "gray",
    borderRadius: 10,
    marginHorizontal: 15,
    height: 50,
    flexDirection: "row",
    marginBottom:5,
  },
  inputStyle: {
    fontSize: 30,
    //   borderColor:'black',
    //   borderWidth:1,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
});

export default SearchBar;
