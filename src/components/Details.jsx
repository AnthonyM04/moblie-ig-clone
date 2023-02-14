import { useContext } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Posts from './Posts';
import { PostContext } from '../../App.js';

export default function Details() {
  const { currentPost } = useContext(PostContext);
  return (    
    <ImageBackground 
    source={ require("../../assets/bg2.webp") }
    resizeMode="cover"
    style={styles.bg}>
      <View>
        <Posts post={currentPost} />
      </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent:'center'
  }
})
