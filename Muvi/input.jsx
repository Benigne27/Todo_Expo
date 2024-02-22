import { StyleSheet, Text, View } from 'react-native'
import {TextInput} from 'react-native-paper'
import React from 'react'
export default function Input({label, placeholder, icon, bool, icon2}) {
  return (
    <View style={styles.input}>
        <Text style={{fontSize:13, paddingVertical:5, color:'white'}}>{label}</Text>
        <TextInput style={{height:42, width:'100%', borderRadius:5, backgroundColor:'#26282C'}}
        theme={{roundness:5}} secureTextEntry={bool} textColor='white'
        mode='outlined' placeholder={placeholder}
        left={<TextInput.Icon icon={icon} />} right={<TextInput.Icon icon={icon2} />}/>
      </View>
  )
}

const styles = StyleSheet.create({
  input:{
    width: 370,
    display:'flex',
    alignSelf:'center'
  }
})