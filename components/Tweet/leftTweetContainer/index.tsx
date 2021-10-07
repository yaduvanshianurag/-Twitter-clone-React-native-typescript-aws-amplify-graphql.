import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../ProfilePicture'
import { UserType } from '../../../types'
import { styles } from './Styles'
 export type LeftTweetContainerProps={
User:UserType
 }
 const LeftTweetContainer=({User}:LeftTweetContainerProps)=>(
   <View style={styles.profilepicture}>
    <ProfilePicture image={User.image}/>
   </View>
 )
export default LeftTweetContainer
