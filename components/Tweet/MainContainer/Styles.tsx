 import { StyleSheet } from 'react-native'

 

 

export const styles = StyleSheet.create({
     
    TweetHeaderContainer:{
        flexDirection:'row',
        width:'100%',
        marginTop:5
                 
    },
    name:{
        fontWeight:'bold',
        // marginHorizontal:5
        marginRight:5
    },
    username:{
        // marginHorizontal:5
        marginRight:5

    },
    createdAt:{

        color:'grey'
        // marginHorizontal:5
    },
    image:{
        marginTop:5,
        width: '100%',
        height: 200,
        resizeMode:'cover',
        borderRadius:15,
        overflow: 'hidden'
    },
    content:{
      lineHeight:19,
      paddingRight: 100,
      marginTop:5
            

    },
     


})
