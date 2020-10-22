import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../component/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price ==="$"||"$$"||"$$$"
    //for each element in the results array, check if they match the price
    // return all matching elements
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
      <Text>wehave found {results.length} results</Text>

      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="cost effective"
          
        />
        <ResultList 
          results={filterResultsByPrice("$$")} 
          title="bit pricier" 
          
        />
        <ResultList 
          results={filterResultsByPrice("$$$")} 
          title="big spender" 
          
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
