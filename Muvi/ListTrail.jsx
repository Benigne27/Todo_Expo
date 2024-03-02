import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

export default function ListTrail({image, text1, text2, text3, text4, navigation, destinationScreen, handlePress}) {
    // const handlePress=()=>{
    //     navigation.navigate(destinationScreen)
    //   }
  return (
    <Pressable style={styles.container} onPress={handlePress}>
        <Image source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} style={styles.image} borderRadius={10}/>
        <View style={{display:'flex', gap:10, paddingTop:30}}>
            <Text style={{fontWeight:'bold', fontSize:16, color:'white'}}>{text1}</Text>
            <Text style={{fontWeight:'500', fontSize:16, color:'white'}}>{text2}</Text>
            <Text style={{fontWeight:'300', fontSize:13, color:'gray'}}>{text3}</Text>
            <Text style={{fontWeight:'300', fontSize:13, color:'gray'}}>{text4}</Text>
        </View>
        
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        paddingVertical:10,
        paddingHorizontal:30

    },
    image:{
        height:150,
        width:220,
    }
})