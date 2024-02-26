import { StyleSheet, Text, View, Dimensions, Pressable,  Image, FlatList, ScrollView } from 'react-native'
import { StatusBar }from 'expo-status-bar'
import { Icon } from 'react-native-elements'
import React from 'react'
import ListTrail from './ListTrail'
const height=Dimensions.get('screen').height
const Guard = require('../assets/Home.jpg')
const Madagascar = require('../assets/Madagascar3.jpg')
const Mega = require('../assets/Mega.jpg')
const Panda = require('../assets/Panda.jpg')
const Sinbad = require('../assets/Sinbad.jpg')

export default function List({navigation}) {
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
    const Images=[
        {
            id:1,
            image: Guard,
            text1:'Home',
            text2: '2020',
            text3: 'Fantasy, Kids, Family',
        },
        {
            id:2,
            image: Madagascar,
            text1:'Madagascar 3',
            text2: '2020',
            text3: 'Fantasy, Kids, Family',

        },
        {
            id:3,
            image: Mega,
            text1:'MegaMind',
            text2: '2020',
            text3: 'Fantasy, Kids, Family',

        },
        {
            id:4,
            image: Panda,
            text1:'KungFu Panda',
            text2: '2020',
            text3: 'Fantasy, Kids, Family',
            
        },
        {
            id:5,
            image: Sinbad,
            text1:'Sinbad',
            text2: '2020',
            text3: 'Fantasy, Kids, Family',
            
        },
    ]
  return (
    <View style={styles.container1}>
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
            <View style={styles.body}>
            <ScrollView style={{paddingHorizontal:25}}>
            {Images.map((item,i)=>{
                return(
                    <View key={i} style={{paddingHorizontal:5}}>
                        <ListTrail image={item.image} text1={item.text1} text2={item.text2} text3={item.text3}/>
                    </View>
                )
            })}
        </ScrollView>

            </View>
            <View style={styles.menu}>
       <Pressable onPress={()=>navigation.navigate('Home')}><Icon name='home' iconStyle={{color:'white', fontSize:30}}/></Pressable>
       <Pressable onPress={()=>navigation.navigate('Search')}><Icon name='search' iconStyle={{color:'white', fontSize:30}}/></Pressable>
        <Pressable onPress={()=>navigation.navigate('List')}><Icon name='folder' iconStyle={{color:'#F2B916', fontSize:30}}/></Pressable>  
        <Pressable onPress={()=>navigation.navigate('Profile')}><Icon name='menu' iconStyle={{color:'white', fontSize:30}}/></Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container1:{
        backgroundColor:'#1F2123',
        height:height,
    },
    header:{
        height:200,
        display:'flex',
        justifyContent:'center',
        

    },
    body:{
        backgroundColor:'#26282C',
        paddingBottom:105,
        paddingRight:10
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