import { StyleSheet, Text, View, Dimensions, Image, FlatList, ScrollView }from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'
import { StatusBar }from 'expo-status-bar'
import Tags from './tags'
import Trails from './Trails'
const Aladdin= require('../assets/Aladdin.webp')
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
const Guard = require('../assets/Home.jpg')
const Madagascar = require('../assets/Madagascar3.jpg')
const Mega = require('../assets/Mega.jpg')
const Panda = require('../assets/Panda.jpg')
const Sinbad = require('../assets/Sinbad.jpg')
const Trolls = require('../assets/Trolls.jpg')


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
            image: Aladdin,
            rate:8.8
        },
        {
            id:2,
            image: Beauty,
            rate:8.6

        },
        {
            id:3,
            image: Cinderella,
            rate:9.3

        },
        {
            id:4,
            image: Encanto,
            rate:9.5
            
        },
        {
            id:5,
            image: Frozen,
            rate:9.6
        },
        {
            id:6,
            image: Lion,
            rate:9.1
        },
        {
            id:7,
            image: Mermaid,
            rate:9.2
        },
    ]
    
    const Images2=[
        {
            id:8,
            image: Moana,
            rate:9.8
        },
        {
            id:9,
            image: Mulan,
            rate:9.7
        },
        {
            id:10,
            image: PeterPan,
            rate:8.7
        },
        {
            id:11,
            image: Jungle,
            rate:8.5
        },
        {
            id:12,
            image: Tangled,
            rate:8.8
        },
        {
            id:13,
            image: Zootopia,
            rate:9.6
        },

    ]

    const Images3=[
        {
            id:1,
            image: Guard,
            rate:8.8
        },
        {
            id:2,
            image: Madagascar,
            rate:8.6

        },
        {
            id:3,
            image: Mega,
            rate:9.3

        },
        {
            id:4,
            image: Panda,
            rate:9.5
            
        },
        {
            id:5,
            image: Sinbad,
            rate:9.6
        },
        {
            id:6,
            image: Trolls,
            rate:9.1
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
      </View><ScrollView>
      <View style={styles.body}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:25, paddingVertical:15}}>
            {tags.map((item,i)=>{
                return(
                <View key={i} style={{paddingHorizontal:5}}>
                    <Tags text={item.name}/>
                </View>
            )})}
        </ScrollView>

        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:30, paddingVertical:15}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>New Release</Text>
            <Text style={{color:'gray', fontSize:13}}>View More</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:25}}>
            {Images.map((item,i)=>{
                return(
                    <View key={i} style={{paddingHorizontal:5}}>
                        <Trails image={item.image} rate={item.rate}/>
                    </View>
                )
            })}
        </ScrollView>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:30, paddingVertical:15}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>Made For You</Text>
            <Text style={{color:'gray', fontSize:13}}>View More</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:25}}>
            {Images2.map((item,i)=>{
                return(
                    <View key={i} style={{paddingHorizontal:5, paddingBottom:20}}>
                        <Trails image={item.image} rate={item.rate}/>
                    </View>
                )
            })}
        </ScrollView>
      </View>
      <View style={styles.bottom}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:30, paddingVertical:15}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>Popular on <Text style={{color:'#F2B916'}}>Muvi</Text></Text>
            <Text style={{color:'gray', fontSize:13}}>View More</Text>
        </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:25, paddingBottom:105}}>
            {Images3.map((item,i)=>{
                return(
                    <View key={i} style={{paddingHorizontal:5}}>
                        <Trails image={item.image} rate={item.rate}/>
                    </View>
                )
            })}
        </ScrollView>
      </View> 
      </ScrollView>
      <View style={styles.menu}>
        <Icon name='home' iconStyle={{color:'#F2B916', fontSize:30}}/>
        <Icon name='search' iconStyle={{color:'white', fontSize:30}}/>
        <Icon name='folder' iconStyle={{color:'white', fontSize:30}}/>
        <Icon name='menu' iconStyle={{color:'white', fontSize:30}}/>
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
    header1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        top:20
    },
    body:{
        backgroundColor:'#26282C'
    },
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