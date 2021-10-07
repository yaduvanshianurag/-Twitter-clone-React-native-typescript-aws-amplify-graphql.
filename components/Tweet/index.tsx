import React from 'react'
import { View, Text } from 'react-native'
import LeftTweetContainer from './leftTweetContainer'
import Maincontainer from './MainContainer'
import { TweetType } from '../../types'
  export type TweetProps={
   tweet:TweetType;
 }
 const Tweet=({tweet}:TweetProps)=>(
   <View style={{flexDirection:'row', borderWidth:0.5,
   borderColor:'lightgrey',width:'100%'}}>
<LeftTweetContainer User={tweet.user}/>
<Maincontainer tweet={tweet}/>
   </View>
 )
export default Tweet
