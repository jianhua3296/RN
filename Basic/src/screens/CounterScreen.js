import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  //todo: fix it
  const [counter, setCounter]=useState(0);
  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          setCounter(counter+1);
        }}
      ></Button>
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter-1);
        }}
      ></Button>
      <Text>current coutn:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
