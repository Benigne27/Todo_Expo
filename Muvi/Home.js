import { StyleSheet, Text, View, Dimensions, Image, FlatList, ScrollView }from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'
import { StatusBar }from 'expo-status-bar'
import Tags from './tags'
const Aladdin= require('../assets/Aladdin.jpg')
const Beauty = require('../assets/BeautyB.jpg')
const Cinderella = require('../assets/Cinderella.jpg')
const Encanto = require('../assets/Encanto.jpg')
const Frozen = require('../assets/Frozen.jpg')
const Jungle = require('../assets/JungleBook.jpg')
const Lion = require('../assets/LionK.jpg')
const Mermaid = require('../assets/Mermaid.jpg')
const Moana = require('../assets/Moana.jpg')
const Mulan = require('../assets/Mulan.jpg')
const PeterPan = require('../assets/PeterPan.jpg')
const Tangled = require('../assets/Tangled.jpg')
const Zootopia = require('../assets/Zootopia.jpg')


const height=Dimensions.get('screen').height
export default function Home() {
    const data=[
        {
            id:1,
            name:'Featured'
        },
        {
            id:2,
            name:'Series'
        },
        {
            id:3,
            name:'Films'
        },
        {
            id:4,
            name:'Origin'
        },
        {
            id:5,
            name:'Animated'
        },
        {
            id:6,
            name:'Genres'
        },
        {
            id:7,
            name:'Top'
        },
        {
            id:8,
            name:'Rated'
        },
    ]

    const tags=[
        {
            id:1,
            name:'Popular Today'
        },
        {
            id:2,
            name:'Marvel'
        },
        {
            id:3,
            name:'Fans Choice'
        },
        {
            id:4,
            name:'Star Wars'
        },
        {
            id:5,
            name:'Disney'
        },
        {
            id:6,
            name:'Paramount'
        },
        {
            id:7,
            name:'Dream Works'
        },
        {
            id:8,
            name:'NetFlix'
        },
    ]

    const Images=[
        {
            id:1,
            image: Aladdin
        },
        {
            id:2,
            image: Beauty
        },
        {
            id:3,
            image: Cinderella
        },
        {
            id:4,
            image: Encanto
        },
        {
            id:5,
            image: Frozen
        },
        {
            id:6,
            image: Lion
        },
        {
            id:7,
            image: Mermaid
        },
        {
            id:8,
            image: Moana
        },
        {
            id:9,
            image: Mulan
        },
        {
            id:10,
            image: PeterPan
        },
        {
            id:11,
            image: Jungle
        },
        {
            id:12,
            image: Tangled
        },
        {
            id:13,
            image: Zootopia
        },

    ]
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
      <View style={styles.header}>
        <View style={styles.header1}>
            <View >
                <Image source={require('../assets/Muvi.png')} style={{height:60, width:150}}/>
            </View>
            <View style={{display:'flex', flexDirection:'row', gap:15}}>
                <Icon name='bookmark-outline' type='material-community' iconStyle={{color:'white'}}/>
                <Icon name='bell-outline' type='material-community' iconStyle={{color:'white'}}/>
            </View>
        </View>
        <View style={{top:50}}>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item})=><Text style={{color:'white', fontWeight:'bold', fontSize:15, paddingHorizontal:30}}>{item.name}</Text>}/>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:25, paddingVertical:30}}>
            {tags.map((item,i)=>{
                return(
                <View key={i} style={{paddingHorizontal:5}}>
                    <Tags text={item.name}/>
                </View>
            )})}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#26282C',
        height:height,
    },
    header:{
        height:200,
        backgroundColor:'#1F2123',
        display:'flex',
        justifyContent:'center',
        

    },
    header1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        top:20
    },
})