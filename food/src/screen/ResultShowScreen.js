import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import ResultDetail from '../component/ResultDetail';
import yelp from '../api/yelp';


const ResultShowScreen =({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    


    const getResult = async (id) => {
       const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    },[]);

    if(!result){
        return null;
    }
    
    return(
    <>
        <Text> {result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => {
                return photo;
            }}
            renderItem={({item}) => {
                return <Image style={styles.image} source={{uri:item}}></Image>
            }
            }
        ></FlatList>
    </>);
};

const styles = StyleSheet.create({
    image:{
        height:300,
        width:200,
    },
});

export default ResultShowScreen;