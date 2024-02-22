import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Input from './input'
import Yellow from './Yellow'
import Dark from './Dark'

const height=Dimensions.get('screen').height

export default function SignIn({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
     

      <View style={styles.body}>
      <Input label='Email Address' icon='email-outline' placeholder='e.g janedoe@mail.com' bool={false}/>
      <View style={{height:10}}></View>
      <Input label='Password' icon='lock-outline' placeholder='Your password' bool={true}/>
      <Text style={{ textAlign:'right', color:'white', fontSize:16, paddingVertical:15}}>Forgot Password?</Text>
      <Yellow text='Sign In' navigation={navigation} destinationScreen='Home'/>
      </View>

      <View>
        <Text style={{textAlign:'center', paddingVertical:20, fontSize:17, color:'white'}}>or sign in with</Text>
        <Dark text='Google' icon='google' type='font-awesome' color='red'/>
      <View style={{height:10}}></View>
        <Dark text='Watch movie' icon='movie-open-outline' type='material-community' color='white'/>
      <View style={{height:10}}></View>
      </View>

      <View style={styles.sign}>
        <Text style={{color:'white', fontSize:17, fontWeight:'500'}}>Don't have an account?</Text>
       <TouchableWithoutFeedback onPress={()=> navigation.navigate('Sign Up')}><Text style={{color:'#F2B916', fontSize:17, fontWeight:'500'}}>Sign Up</Text></TouchableWithoutFeedback> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:height,
        backgroundColor:'#26282C'

    },
    input:{
      width: 350,
      display:'flex',
      alignSelf:'center'
    },
    body:{
      paddingTop:50,
      paddingHorizontal:30
    },
    sign:{
      display:'flex',
      flexDirection:'row',
      gap:5,
      justifyContent:'center',
      paddingVertical:20
    }
})