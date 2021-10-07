import React,{useState,useEffect} from 'react'
import { View, FlatList } from 'react-native'
import Tweet from '../Tweet'
import {Auth,API,graphqlOperation } from 'aws-amplify'

import { listTweets } from '../../graphql/queries'
 const Feed = () => {
const [tweets,settweets]=useState(null)
const [loading,setloading]=useState(true)

const fetchTweet=async()=>{
    try {
        const alltweets=await API.graphql(graphqlOperation(listTweets))
           settweets(alltweets.data.listTweets.items)
    } catch (error) {
        console.log(error);
        
    }finally{
        setloading(false)
    }

}
useEffect(()=>{

fetchTweet()
},[])
    return (
        <View style={{width:'100%'}}>
     <FlatList
     data={tweets}
     onRefresh={fetchTweet}
      refreshing={loading}

     renderItem={({item})=><Tweet tweet={item}/>}
     keyExtractor={(item)=>item.id}
     />
     </View>
    )
}

export default Feed
