import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Trails({image, rate}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} borderRadius={10} resizeMode='center'
      source={require('../assets/Aladdin.jpg')}>
        <View style={{width:30, height:20, backgroundColor:'#F2B916', 
        display:'flex', alignItems:'center', 
        justifyContent:'center', borderRadius:3, alignSelf:'flex-end', top:10, right:10}}>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>8.8</Text>
            </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:150,
        width:270,
        margin:100
    },
    image:{
        height:'100%',
        width:'100%'
    }
})