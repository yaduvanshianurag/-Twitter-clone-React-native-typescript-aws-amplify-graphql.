import React from 'react'
import {  TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/core';
const TweetButton = () => {
    const navigation=useNavigation();

    const NewTweetButton=()=>{
     navigation.navigate('NewTweet') ;      
    }
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={NewTweetButton}
        style={styles.button}>
            <MaterialCommunityIcons name="feather" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default TweetButton
