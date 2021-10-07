import React from 'react'
import { View, Text,Image } from 'react-native';
import Tweet from '..';
import { TweetType } from '../../../types';
import { styles } from './Styles';
import { Entypo } from '@expo/vector-icons';
import FooterContainer from './footer';
 import moment from 'moment';
 export type MainContainerProps={
tweet:TweetType
 }
 const MainContainer=({tweet}:MainContainerProps)=>(
   <View>
      <View style={styles.TweetHeaderContainer}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
          <Text style={styles.createdAt}>-{moment(tweet.createdAt).fromNow()}</Text>
       <View style={{left:70}}>
          <Entypo  name="dots-three-horizontal" size={15} color="grey" />
          </View>
       </View>
       <View style={styles.content}>
       <Text>{tweet.content}</Text>
       {tweet.image?<Image
       style={styles.image}
        source={{uri:tweet.image}}
      />:null}
       
       </View>
      <FooterContainer tweet={tweet}/>
       

   </View>
 )
export default MainContainer
