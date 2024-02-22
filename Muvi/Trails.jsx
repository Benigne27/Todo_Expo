import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Trails({image, rate}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} borderRadius={10} resizeMode='stretch'
      source={image}>
        <View style={{width:30, height:20, backgroundColor:'#F2B916', 
        display:'flex', alignItems:'center', 
        justifyContent:'center', borderRadius:3, alignSelf:'flex-end', top:10, right:10}}>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>{rate}</Text>
            </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:170,
        width:250,
       
    },
    image:{
        height:'100%',
        width:'100%'
    }
})