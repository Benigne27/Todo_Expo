import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tags({text}) {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:16, fontWeight:'400', color:'white'}}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'gray',
        paddingVertical:7,
        paddingHorizontal:17,
        borderRadius:7
        
    }
})