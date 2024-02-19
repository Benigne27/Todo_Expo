import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Cards1({image, price, name, id}) {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.image} 
        source={{image}}
         resizeMode='cover' imageStyle={{borderRadius:20}}>
          <View style={{marginTop:13, marginLeft:16, backgroundColor:'#C19D61', width:110, borderRadius:15}}><Text style={{ paddingVertical:3, textAlign:'center', color:'white', fontWeight:'500'}}>#{id} BestSeller</Text></View>

          <View style={{height:50, borderBottomEndRadius:20, 
            borderBottomStartRadius:20, top:120, position:'absolute', width:'100%',
            backgroundColor:'rgba(000, 000, 000, 0.5)', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:13}}>
              <Text style={{color:'white', fontSize:15}}>{name}</Text>
              <Text style={{color:'white', fontSize:15}}>${price}</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:280,
        position:'relative'
       
    },
    image:{
        height:170,
        width:'100%',

    }
})