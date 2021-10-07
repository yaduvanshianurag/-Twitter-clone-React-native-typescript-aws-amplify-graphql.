import * as React from 'react';
import { StyleSheet } from 'react-native';

import Tweet from '../components/Tweet';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Feed from '../components/feed';
import TweetButton from '../components/feed/NewtweetButton';
 export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
   <Feed/>
       <TweetButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  
});
