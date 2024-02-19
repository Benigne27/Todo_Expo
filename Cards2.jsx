import { StyleSheet, Text, View , ImageBackground} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'

export default function Cards2({image}) {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.image} 
        source={{image}}
         resizeMode='cover' imageStyle={{borderRadius:20}}>
          <View style={{backgroundColor:'white'}}><Icon name='cards-heart-outline'/></View>
         </ImageBackground>
   
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:180,
   
},
image:{
    height:250,
    width:'100%',

}
})