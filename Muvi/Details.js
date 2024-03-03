import { StyleSheet, Text, View, Dimensions, ImageBackground , Pressable, ScrollView, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { Icon } from 'react-native-elements'
import Trails from './Trails'
const height=Dimensions.get('screen').height
export default function Details({navigation, route}) {
    const desc=route.params;
    const [movie, setMovie]=useState([])
    const [popular, setPopular]=useState([])

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

                
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.contain}>
            <View style={styles.header}>
                <Pressable onPress={()=>navigation.goBack()}><Icon name='arrow-left' type='material-community' color={'#F2B916'}/></Pressable>
            <Text style={styles.text}>Action</Text>
            </View>
            <View style={styles.body}>
                <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500${desc.poster_path}`}} style={styles.image} resizeMode='stretch'/>
                <Text style={styles.text1}>{desc.original_title}</Text>
                <Text style={styles.text2}>{desc.overview}</Text>
                    <View style={styles.buttons}>
                        <Pressable style={styles.button1}>
                            <Icon name='play' type='material-community'/>
                            <Text>Play</Text>
                        </Pressable>
                        <Pressable style={styles.button2} onPress={()=>navigation.navigate('List')}>
                            <Icon name='plus' type='material-community' color={'#F2B916'}/>
                            <Text style={styles.text2}>My List</Text>
                        </Pressable>
                    </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text3}>U.S. Action Movies</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={popular}
        renderItem={({item})=>
        <Trails image={item.poster_path}  rate={item.vote_average} name={item.title} handlePress={()=>{navigation.navigate('Details', item)}}/>
        } keyExtractor={item=>item.id}/>
        <Text style={styles.text3}>Muvi originals Action</Text>
        <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={movie}
        renderItem={({item})=>
        <Trails image={item.poster_path}  rate={item.vote_average} name={item.title} handlePress={()=>{navigation.navigate('Details', item)}}/>
        } keyExtractor={item=>item.id}/>
            </View>
            
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: height,
        backgroundColor:'#26282C',
        
    },
    contain:{
        height:500,
        
    },
    header:{
        height:100,
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-start',
        gap:20,
        paddingLeft:20,
        backgroundColor:'#1F2123'
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    image:{
        height:350,
        width:370,
        display:'flex',
        alignSelf:'center'
    },
    body:{
        paddingVertical:20,
        paddingHorizontal:20,
        gap:15,
        backgroundColor:'#1F2123'
    },
    text1:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        display:'flex',
        alignItems:'flex-start',
    },
    text2:{
        color:'gray',
        fontSize:15,
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:40,

    },
    button1:{
        height:40,
        width:160,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F2B916',
        borderRadius:5
        

    },
    button2:{
        height:40,
        width:160,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5


    },
    bottom:{
        paddingBottom:500
    },
    text3:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        display:'flex',
        alignItems:'flex-start',
        paddingBottom:20,
        paddingHorizontal:20,
        paddingVertical:10
    },
})