import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'

export default function Settings({icon, text}) {
  return (
    <View style={styles.container}>
            <Icon name={icon} type='material-community' iconStyle={{color:'white', fontSize:30}}/>
            <Text style={{color:'white', fontSize:20, fontWeight:'500'}}>{text}</Text>
          </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex', 
        flexDirection:'row', 
        gap:20, 
        paddingTop:20
    }
})