import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>child 1 </Text>
            <Text style={styles.textStyle2}>child 2 </Text>
            <Text style={styles.textStyle}>child 3 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor:'black',
        height:299,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    textStyle:{
        borderWidth: 3,
        borderColor:'red',
        
    },
    textStyle2:{
        borderWidth: 3,
        borderColor:'red',
        ...StyleSheet.absoluteFillObject,
    },


});

export default BoxScreen;