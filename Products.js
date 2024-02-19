import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import React from 'react'
import Tags from './tags'
import Cards1 from './Cards1'
import Cards2 from './Cards2'

export default function Products() {
  const data=[
    {
      id:1,
      name:'GJ Jeans',
      price:46.05,
      image:'./assets/Christmas.jpg'
    },
    {
      id:2,
      name:'Jackets',
      price:50.25,
      image:'./assets/Christmas.jpg'
    },
    {
      id:3,
      name:'Skirts',
      price:35.45,
      image:'./assets/Christmas.jpg'
    },
    {
      id:4,
      name:'Dresses',
      price:60.50,
      image:'./assets/corn.jpg'
    },
  ]

  const stock=[
    {
    image:'./assets/corn.jpg'
    },
    {
      image:'./assets/corn.jpg'
      },
      {
        image:'./assets/corn.jpg'
        },
        {
          image:'./assets/corn.jpg'
          },
          {
            image:'./assets/corn.jpg'
            },
            {
              image:'./assets/corn.jpg'
              },
              {
                image:'./assets/corn.jpg'
                },
  ]
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:30, paddingVertical:20}}>
        <View style={{backgroundColor:'#ECECEC', padding:13, borderRadius:30}}><Icon name='arrow-back'/></View>
        <View style={{}}><Text style={{fontSize:18, fontWeight:'bold'}}>Search</Text></View>
        <View><Icon name='tune' type='material'/></View>
        </View>

        <View style={{display:'flex', alignItems:'center'}}><TextInput style={{backgroundColor:'#F0F8FF', width:350, borderRadius:30}} theme={{roundness:30}}
        left={<TextInput.Icon icon={'magnify'}/>} underlineColor='#F7F8FD' mode='flat' placeholder='Search...'
        right={<TextInput.Icon icon={'tune-variant'}/>}/></View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:8, marginTop:15, marginHorizontal:40}}>
          <View style={styles.contain}><Text style={{textAlign:'center', fontSize:16, fontWeight:'400', color:'white'}}>All</Text></View>
          <Tags text='Man'/>
          <Tags text='Woman'/>
          <Tags text='Dress'/>
          <Tags text='Baby'/>
          <Tags text='Shirt'/>
          <Tags text='Skirt'/>
          <Tags text='Shoes'/>
          <Tags text='Bag'/>
        </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:30}}>
          
            {data.map((item,i)=>{
              return(
              <View style={{marginVertical:30, marginHorizontal:8}}>
                <Cards1 id={item.id} image={item.image}
                name={item.name} price={item.price}/>
              </View> 
              )
            })}
          
          </ScrollView>

          <View>
            {stock.map((elem, i)=>{
              return(
                <Cards2 image={elem.image}/>
              )
            })}
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:50
  },
  contain:{
  backgroundColor:'#C19D61',
    paddingVertical:10,
    paddingHorizontal:23,
    borderRadius:40
    
}
})