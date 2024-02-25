import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'

export default function DownMenu() {
  return (
    <View style={styles.menu}>
        <Icon name='home' iconStyle={{color:'#F2B916', fontSize:30}}/>
        <Icon name='search' iconStyle={{color:'white', fontSize:30}}/>
        <Pressable onPress={()=>navigation.navigate('List')}><Icon name='folder' iconStyle={{color:'white', fontSize:30}}/></Pressable>  
        <Icon name='menu' iconStyle={{color:'white', fontSize:30}}/>
      </View>
  )
}

const styles = StyleSheet.create({
    menu:{
        height:100,
        backgroundColor:'#26282C',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:40,
        position:'absolute',
        width:'100%',
        bottom:0,
        left: 0,
        right: 0,
    }
})