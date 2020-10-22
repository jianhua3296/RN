import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={ {uri: result.image_url} }></Image>
      <Text style={styles.name}>{result.name}</Text>
  <Text>{result.rating} Starts,{result.review_count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    marginLeft:10,
  },
  imageStyle:{
    width:250,
    height:120,
    borderRadius:10,
    marginBottom:5,
  },
  name:{
    fontWeight:'bold',
  }
});

export default ResultDetail;
