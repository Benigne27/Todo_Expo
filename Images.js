import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Images() {
  return (
    <View >
      <View style={styles.container}>
        <StatusBar style='auto'/>
      <Text style={styles.text}>Text to Image</Text>
      </View>
      <View style={styles.images}>
      <Image style={styles.image} source={require('./assets/cozyBed.jpg')}/>
      <Image style={styles.image} source={require('./assets/Christmas.jpg')}/>
      <Image style={styles.image} source={require('./assets/corn.jpg')}/>
      <Image style={styles.image} source={require('./assets/Lounge.jpg')}/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:100,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:27,
    fontWeight:'bold',
    marginBottom:40
  },
  images:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center',
    gap:10

  },
  image:{
    width:190,
    height:190,
    borderRadius:20
  }
})