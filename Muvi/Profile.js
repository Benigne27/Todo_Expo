import { StyleSheet, Text, View, Image, Dimensions, Pressable} from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'
import { StatusBar }from 'expo-status-bar'
import Settings from './Settings'
import Dark from './Dark'
const Profile1=require('../assets/Profile.jpg')
const height=Dimensions.get('screen').height


export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.header}>
          <View><Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>More</Text></View>
          <View style={{display:'flex', flexDirection:'row', gap:60}}>
            <View style={{display:'flex', flexDirection:'row', gap:15}}>
              <Image source={Profile1} style={styles.image}/>
              <View style={{paddingTop:17}}>
                <Text style={{fontSize:18, fontWeight:'600', color:'white'}}>Jennifer Doe</Text>
                <Text style={{fontSize:15, color:'gray', }}>doe.jennifer@gmail.com</Text>
              </View>
            </View>
            <Pressable style={{display:'flex', flexDirection:'row', gap:5, paddingTop:20}} onPress={()=>navigation.navigate('Edit')}>
              
              <Icon name='pencil-outline' type='material-community' iconStyle={{color:'#F2B916'}}/>
              <Text style={{fontSize:15, color:'#F2B916', paddingTop:5}}>Edit</Text>
            </Pressable>
          </View>
        </View>
        <View style={{paddingHorizontal:20, paddingTop:40}}>
          <Settings icon={'inbox-outline'} text={'Inbox'}/>
          <Settings icon={'account-outline'} text={'Account Settings'}/>
          <Settings icon={'cog-outline'} text={'App Settings'}/>
          <Settings icon={'web'} text={'Language'}/>
          <Settings icon={'help-circle-outline'} text={'Help'}/>
           <View style={{display:'flex', gap:15, paddingTop:40}}>
          <Text style={{color:'gray', fontSize:16}}>Terms & Conditions</Text>
          <Text style={{color:'gray', fontSize:16}}>Privacy Policy</Text>
          
        </View>
        <View style={{top:90}}>
          <Dark text={'Log Out'} style={{color:'red'}} navigation={navigation} destinationScreen={'Sign In'}/>
        </View>
        
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:height,
    backgroundColor:'#1F2123',
  },
  header:{
    height:250,
   backgroundColor:'#26282C',
   display:'flex',
   gap:30,
   justifyContent:'flex-end',
   paddingHorizontal:20,
   paddingBottom:20
  },
  image:{
    height:80,
    width:80,
    borderRadius:10
  }
})