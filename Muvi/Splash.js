import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Splash({navigation}) {

  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Start')} >
        {/* <StatusBar style='auto'/> */}
      <Image source={require('../assets/Muvi.png')} style={styles.image} />
    </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1F2123'
    },
    image:{
        height:80,
        width:180
    }
})