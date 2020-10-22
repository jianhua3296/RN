import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_CHANGE = 60;

const reducer = (state, action) => {
  //state ==={red:number, green:number, blue:number};
  //action ==={type: 'red'||'green'||'blue', payload: 15||-15}
  switch (action.type) {
    //never going to change initial state
    case "change_red":
      return state.red + action.action > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.action > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.action > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

//this is the improved code using reducer
const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          runMyReducer({ type: "change_red", payload: COLOR_CHANGE });
        }}
        onDecrease={() => {
          runMyReducer({ type: "change_red", payload: -1 * COLOR_CHANGE });
        }}
        color="Red"
      />

      <ColorCounter
        onIncrease={() => {
          runMyReducer({ type: "change_green", payload: COLOR_CHANGE });
        }}
        onDecrease={() => {
          runMyReducer({ type: "change_green", payload: -1 * COLOR_CHANGE });
        }}
        color="Green"
      />

      <ColorCounter
        onIncrease={() => {
          runMyReducer({ type: "change_blue", payload: COLOR_CHANGE });
        }}
        onDecrease={() => {
          runMyReducer({ type: "change_blue", payload: -1 * COLOR_CHANGE });
        }}
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
