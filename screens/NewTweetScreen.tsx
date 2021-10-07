import React,{useEffect, useState} from 'react'
import { StyleSheet, TouchableOpacity, View,Text,StatusBar,Platform,SafeAreaView,TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import { useNavigation } from '@react-navigation/core';
import {Auth,API,graphqlOperation } from 'aws-amplify'
import { createTweet } from '../graphql/mutations';
import { getUser } from '../graphql/queries';
export default function NewTweetScreen() {
    const navigation=useNavigation();
    const [tweet, settweet] = useState("");
    const [Image, setImage] = useState("");
const [user,setuser]=useState("")
useEffect(()=>{
const getimage=async()=>{
    const currentUser=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(getUser,{id:currentUser.attributes.sub}))
    setuser(userData.data.getUser);
}
getimage()

},[])
    const Tweet=async()=>{
        if (tweet==' ') {
             return null
        }
        try {
            var i=0;
             
            const currentUser=await Auth.currentAuthenticatedUser({bypassCache:true});
 
            const newtweet={
            content:tweet,
            image:Image,
            userID:currentUser.attributes.sub,
        }
         await API.graphql(graphqlOperation(createTweet,{input:newtweet}));
         navigation.goBack();

        } catch (error) {
            console.log(error);
            
        }
         
        
       
             
       }
    return (
        <SafeAreaView >
            <View style={styles.container}>
            <AntDesign  name="close" size={30} color={Colors.light.tint} />
             <TouchableOpacity onPress={Tweet} style={styles.button}>
             <Text style={styles.buttonText}>Tweet</Text>

             </TouchableOpacity>
             </View>
               <View style={{flexDirection:'row'}}>

                   <ProfilePicture image={user?.image}/>
                   <TextInput
                   onChangeText={(e)=>settweet(e)}
                   style={{width:'100%',marginLeft:10}}
                   placeholder={"What's Happening"}
                   />
                   
               </View>
               <TextInput
                onChangeText={(e)=>setImage(e)}

                   style={{width:'100%',marginLeft:50,marginTop:20}}
                   placeholder={"Image Url"}
                   />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: Platform.OS==='android'?(StatusBar.currentHeight+10):10 ,
        margin: 10
    },
    button:{
        backgroundColor:Colors.light.tint,
        borderRadius:50,
        width: 70,
        height: 30,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontWeight:'bold',
        color: 'white',
 
    }
})
