/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-starte
 *
 */
 
import ProfilePicture from '../components/ProfilePicture';
 import { Ionicons } from '@expo/vector-icons';
 import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import React,{useEffect,useState} from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import home from '../screens/HomeScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
import { View } from '../components/Themed';
import Home from '../screens/HomeScreen';
import NewTweetScreen from '../screens/NewTweetScreen';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator >
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Modal" component={ModalScreen} />
         <Stack.Screen name="NewTweet" component={NewTweetScreen} options={{ headerShown: false }}  />
       </Stack.Group>
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
  import {Auth,API,graphqlOperation } from 'aws-amplify'
  import { getUser } from '../graphql/queries';
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
   const [user,setuser]=useState(null)
 useEffect(()=>{
   const getuserdata=async()=>{
    const currentUser=await Auth.currentAuthenticatedUser({bypassCache:true});
    const userData= await API.graphql(graphqlOperation(getUser,{id:currentUser.attributes.sub}))
    setuser(userData.data.getUser);


   }
   getuserdata()
 },[])
   return (
     <BottomTab.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor: Colors.light.tint,
         tabBarShowLabel:false,
       }}>
       <BottomTab.Screen
         name="Home"
         component={Home}
         options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          
           headerLeft:()=>(
             
             <ProfilePicture image={user?.image}/>
             
           ),
           headerRight: () => (
            <MaterialCommunityIcons name="star-four-points-outline" size={30} color={Colors.light.tint} />
           ),
           headerTitle:()=>(
            <Ionicons  name={"logo-twitter"} size={30} color={Colors.light.tint}/>
          ),
           
           headerLeftContainerStyle:{
            marginLeft:10
          },
          headerRightContainerStyle:{
          marginRight:10
          },
           headerTitleAlign:"center",
            
           
           
           title: 'Home',
           tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={Colors.light.tint}/>,
           
         })}
       />
       <BottomTab.Screen
         name="Search"
         component={TabTwoScreen}
         options={{
           title: 'Search',
           tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color="lightgrey" />,
         }}
       />
        <BottomTab.Screen
         name="Notification"
         component={TabTwoScreen}
         options={{
           title: 'Notification',
           tabBarIcon: ({ color }) =><Ionicons name="notifications" size={24} color="lightgrey" />,
         }}
       />
        <BottomTab.Screen
         name="Messages"
         component={TabTwoScreen}
         options={{
           title: 'Messages',
           tabBarIcon: ({ color }) => <Entypo name="mail" size={24} color="lightgrey" />,
         }}
       />
     </BottomTab.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
  