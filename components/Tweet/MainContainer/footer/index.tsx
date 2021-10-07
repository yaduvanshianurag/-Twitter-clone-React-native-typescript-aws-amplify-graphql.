import React from 'react'
import { View, Text } from 'react-native'
 import { TweetType } from '../../../../types'
 import { EvilIcons } from '@expo/vector-icons'; 
 import { styles } from './Styles';
 import { AntDesign } from '@expo/vector-icons'; 

 export type footerContainerProps={
tweet:TweetType
 }
 const FooterContainer=({tweet}:footerContainerProps)=>(
   <View style={styles.footercontainer}>
 <View>
 <EvilIcons name="comment" size={24} color="grey" />
 <Text style={styles.number}>{tweet.numberOfComments}</Text>
 </View>
 <View>
 <EvilIcons name="retweet" size={24} color="grey" />
 <Text style={styles.number}>{tweet.numberOfRetweets}</Text>

 </View>
      
    
       <View>  
            <EvilIcons name="heart" size={24} color="grey" />
            <Text style={styles.number}>{tweet.numberOfLikes}</Text>


       </View>
       <View>
       <AntDesign name="sharealt" size={20} color="grey" />
       </View>
   </View>
 )
export default FooterContainer
