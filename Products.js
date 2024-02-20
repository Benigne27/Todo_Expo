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
      image: 'https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg?auto=compress&cs=tinysrgb&w=600' 
    },
    {
      id:2,
      name:'Jackets',
      price:50.25,
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id:3,
      name:'Skirts',
      price:35.45,
      image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600' 
    },
    {
      id:4,
      name:'Dresses',
      price:60.50,
      image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600' 
    },
  ]

  const stock=[
    {
    image:'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2',
    name:'White T-Shirt',
    price:45
    },
    {
      image:'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600',
      name:'White T-Shirt',
      price:45
      },
      {
        image:'https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'White T-Shirt',
        price:45
        },
        {
          image:'https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=600',
          name:'White T-Shirt',
          price:45
          },
          {
            image:'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2',
            name:'White T-Shirt',
            price:45
            },
            {
              image:'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600',
              name:'White T-Shirt',
             price:45
              },
              {
                image:'https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress&cs=tinysrgb&w=600',
                name:'White T-Shirt',
                price:45
                },
                {
                  image:'https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=600',
                  name:'White T-Shirt',
                  price:45
                  },
  ]
  return (
    <View style={styles.container}>
      <ScrollView>
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
              <View key={i} style={{marginVertical:30, marginHorizontal:8}}>
                <Cards1 id={item.id} image={item.image}
                name={item.name} price={item.price}/>
              </View> 
              )
            })}
          
          </ScrollView>
<View style={{marginLeft:43, marginVertical:20}}><Text style={{fontSize:20, fontWeight:'bold'}}>Product result (43)</Text></View>
          <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:10}}>
            
            {stock.map((elem, i)=>{
              return(
                <View key={i} >
                  <Cards2 image={elem.image} name={elem.name} price={elem.price}/>
                  </View>
                
              )
            })}
          </View>
          </ScrollView>
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