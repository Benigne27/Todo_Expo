import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Trails2({image, rate, name, synopsis}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} borderRadius={10} resizeMode='stretch'
      source={{uri:`https://image.tmdb.org/t/p/w500${image}`}}>
        <View style={{width:48, height:20, backgroundColor:'#F2B916', 
        display:'flex', alignItems:'center', 
        justifyContent:'center', borderRadius:3, alignSelf:'flex-end', top:10, right:10}}>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>{rate}</Text>
            </View>
      </ImageBackground>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title2}>{synopsis}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:400,
        width:420,
        paddingHorizontal:20

       
    },
    image:{
        height:'80%',
        width:'100%',
        
        alignSelf:'center'
    },
    title:{
      top:-50,
      fontSize:20,
      color:'white',
      textAlign:'center',
      fontWeight:'bold'
    },
    title2:{
    paddingVertical:10,
      color:'white',
      textAlign:'center'
    }
})