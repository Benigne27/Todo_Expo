import { StyleSheet, Text, View, Dimensions, Image, FlatList, ScrollView, Pressable }from 'react-native'
import { Icon } from 'react-native-elements'
import React, {useState, useEffect} from 'react'
import { StatusBar }from 'expo-status-bar'
import Tags from './tags'
import Trails from './Trails'
import Trails2 from './Trails2'
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
export default function Home({navigation}) {
    const [movie, setMovie]=useState([])
    const [popular, setPopular]=useState([])
    const [rated, setRated]=useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTZkZjcwYmMwMWRjZmQwNGFjM2IyZWIyYmQ1NTY4NiIsInN1YiI6IjY1ZDg2YzExYTI4NGViMDE4NTg3ZjgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a6PeP6q_wT-WWIEvsSJIorsE4u0KlW5fOT17eF4d_Qs'
        }
      };
      useEffect(()=>{
        GetMovies()
        GetPopular()
        GetRated()
      })

      const GetMovies=()=>{
            fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
              .then(response => response.json())
              .then(response =>{
                  setMovie(response.results)
              })
              .catch(err => console.error(err));
            }
        const GetPopular=()=>{
                fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
                  .then(response => response.json())
                  .then(response =>{
                      setPopular(response.results)
                  })
                  .catch(err => console.error(err));
                }
        const GetRated=()=>{
                    fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
                      .then(response => response.json())
                      .then(response =>{
                          setRated(response.results)
                      })
                      .catch(err => console.error(err));
                    }
      
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

  return (
    <View style={styles.container}>
        
        <StatusBar style='light'/>
      <View style={styles.header}>
        <View style={styles.header1}>
            
                <Pressable onPress={()=>navigation.navigate('Details')}><Image source={require('../assets/Muvi.png')} style={{height:60, width:150}}/></Pressable>
          
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

        <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={movie}
        renderItem={({item})=>
        <Trails image={item.poster_path}  rate={item.vote_average} name={item.title}/>
        } keyExtractor={item=>item.id}/>
        

        
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:30, paddingVertical:15}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>Made For You</Text>
            <Text style={{color:'gray', fontSize:13}}>View More</Text>
        </View>
        <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={popular}
        renderItem={({item})=>
        <Trails image={item.poster_path}  rate={item.vote_average} name={item.title}/>
        } keyExtractor={item=>item.id}/>
      </View>
      <View style={styles.bottom}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:30, paddingVertical:15}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>Popular on <Text style={{color:'#F2B916'}}>Muvi</Text></Text>
            <Text style={{color:'gray', fontSize:13}}>View More</Text>
        </View>
        <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={rated}
        renderItem={({item})=>
        <Trails2 image={item.poster_path}  rate={item.vote_average} name={item.name}/>
        } keyExtractor={item=>item.id}/>
      </View> 
      </ScrollView>
      
     
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