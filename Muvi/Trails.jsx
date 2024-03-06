import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'

export default function Trails({image, rate, name, synopsis, navigation, destinationScreen, handlePress}) {
  
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <ImageBackground style={styles.image} borderRadius={10} resizeMode='stretch'
      source={{uri:`https://image.tmdb.org/t/p/w500${image}`}}>
        <View style={{width:48, height:20, backgroundColor:'#F2B916', 
        display:'flex', alignItems:'center', 
        justifyContent:'center', borderRadius:3, alignSelf:'flex-end', top:10, right:10}}>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>{rate}</Text>
            </View>
      </ImageBackground>
      <Text style={styles.title}>{name}</Text>
      {/* <Text style={styles.title2}>{synopsis}</Text> */}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:270,
        paddingHorizontal:20
       
    },
    image:{
        height:260,
        width:'100%',
    },
    title:{
      fontSize:20,
      color:'white',
      textAlign:'center',
      fontWeight:'bold',
      paddingVertical:10

    },
    title2:{
    paddingVertical:10,
      color:'white',
      textAlign:'center'
    }
})