import { StyleSheet, Text, View, Dimensions, Pressable,  Image, FlatList } from 'react-native'
import { StatusBar }from 'expo-status-bar'
import React from 'react'
const height=Dimensions.get('screen').height

export default function List() {
    const data=[
        {
            id:1,
            name:'List'
        },
        {
            id:2,
            name:'Downloaded'
        },
    ]
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
      <View style={styles.header}>
        <View style={styles.header1}>
            <Pressable>
                <Image source={require('../assets/Muvi.png')} style={{height:60, width:150}}/>
            </Pressable>
            </View>
            <View style={{top:50}}>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item})=><Text style={{color:'white', fontWeight:'bold', fontSize:15, paddingHorizontal:30}}>{item.name}</Text>}/>
        </View>
            </View>
            
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1F2123',
        height:height,
    },
    header:{
        height:200,
        display:'flex',
        justifyContent:'center',
        

    },
})