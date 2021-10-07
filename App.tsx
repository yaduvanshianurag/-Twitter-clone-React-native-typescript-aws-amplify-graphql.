import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Amplify,{Auth,API,graphqlOperation } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import Navigation from './navigation';
import { withAuthenticator } from 'aws-amplify-react-native'
import {getUser} from './graphql/queries'
import {createUser} from './graphql/mutations'
function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
const getImage=()=>{
  return 'https://filmfare.wwmindia.com/content/2020/nov/shahrukhkhan11605693757.jpg'
}
const saveToDb=async(user)=>{
await API.graphql(graphqlOperation(createUser,{input:user}))
}
useEffect(()=>{
    const updateUser=async()=>{
        //check the authenticated user
        const currentUser=await Auth.currentAuthenticatedUser({bypassCache:true});
        console.log(currentUser);
        if(currentUser){
            const userData= await API.graphql(graphqlOperation(getUser,{id:currentUser.attributes.sub}))
            if (!userData.data.getUser) {
              const user={
                id:currentUser.attributes.sub,
                name:currentUser.username,
                username:currentUser.username,
                email:currentUser.attributes.email,
                image:getImage()
              }
              await saveToDb(user);
               
            
            }
            else{
             console.log("already exist");
             
            }
        }
        
    }
    updateUser();
},[])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)