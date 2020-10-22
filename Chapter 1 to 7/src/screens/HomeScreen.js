import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to the component"
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Image
          style={{ resizeMode: "stretch" }}
          source={require("../../assets/icon.png")}
        />
      </TouchableOpacity>

      <Button
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
        title="Go to the ImageScreen"
      />
      <Button
        onPress={() => {
          navigation.navigate("CounterS");
        }}
        title="Go to the Counter Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("ColorScreen");
        }}
        title="Go to the color Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("SquareScreen");
        }}
        title="Go to the square Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("TextScreen");
        }}
        title="Go to the text Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("BoxScreen");
        }}
        title="Go to the box Screen"
      />


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
