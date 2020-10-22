import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetails';

const ImageScreen =()=>{
    return <View>
        {/* unlike components comes from packages, self customized component can take any props */}
        <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg')} score="2" />
        <ImageDetail title="mountain" imageSource={require('../../assets/mountain.jpg')} score="90"/>
        <ImageDetail title="beach" imageSource={require('../../assets/beach.jpg')} score="99"/>

    </View>
};

const styles = StyleSheet.create({

});

export default ImageScreen;