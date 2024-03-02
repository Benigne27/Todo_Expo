import { StyleSheet, Text, View, Dimensions, Image, FlatList, ScrollView, Pressable }from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import React, { useState, useEffect } from 'react'
import Tags from './tags'
import Trails from './Trails'
import ListTrail from './ListTrail'
import axios from 'axios'
import Details from './Details'
const height=Dimensions.get('screen').height

export default function Search({navigation}) {
    
    const [searchText, setSearchText]= useState('')
    const [theData, setTheData]=useState([])
    useEffect(()=>{
        if(searchText.length>0){
            getSearch()
        }
        else{
            setTheData([])
        }
    }, [searchText])

    
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTZkZjcwYmMwMWRjZmQwNGFjM2IyZWIyYmQ1NTY4NiIsInN1YiI6IjY1ZDg2YzExYTI4NGViMDE4NTg3ZjgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a6PeP6q_wT-WWIEvsSJIorsE4u0KlW5fOT17eF4d_Qs'
            }
          };
       const getSearch=async()=>{
        try{
         const results= await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
          
            setTheData(results.data.results)
        }
        catch(err){console.error(err)};
        
    
}
    
    const labels=[
        {
            id:1,
            label:'All Result'
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

    



  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View><TextInput placeholder='Search Movie Title' 
            textColor='white' 
            right={<TextInput.Icon icon={'magnify'} 
            color={'#F2B916'}/>} 
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}/></View>
            <View>
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
            data={labels} style={styles.list}
            renderItem={({item})=><Text style={{color:'white', fontWeight:'bold', fontSize:15, paddingHorizontal:10}}>{item.name}</Text>}
            /></View>
        </View>
        <View style={styles.body}>
        {searchText.length<=0?(<View>
                <Image source={require('../assets/search.png')} style={styles.image}/>
                <View style={{paddingHorizontal:20, top:100}}>
        <Text style={styles.text1}>Find Your Movie</Text>
        <Text style={styles.text2}>Search Movie, Series, originals, as you like</Text>
        </View>
        </View>):(<FlatList
        data={theData}
        renderItem={({item})=>
        <ListTrail image={item.poster_path} text1={item.original_title} text2={item.vote_count} text3={item.first_air_date} handlePress={()=>{navigation.navigate('Details', item)}}/>}/>
)}    
                
            
            
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
    menu:{
        height:100,
        backgroundColor:'#1F2123',
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
    },
    input:{
        width:360,
        height:50,
        backgroundColor:'#1F2123',
        alignSelf:'center'
    },
    image:{
        height:200,
        width:300,
        display:'flex',
        alignSelf:'center',
        top:80
    },
    text1:{
        fontSize:26,
        color:'white',
        fontWeight:'bold',
        
        textAlign:'center'
    },
    text2:{
        fontSize:16,
        color:'gray',
        top:5,
        textAlign:'center'
    },
    list:{
        display:'flex',
        top:50
    }

})