import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
        style={styles.input}
      ></TextInput>
      <Text>my name is {name}</Text>
      {name.length<5?<Text>name too short!</Text>:null}
      

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
