import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Input from './input'
import Yellow from './Yellow'
import Dark from './Dark'

const height=Dimensions.get('screen').height
export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={{paddingHorizontal:30}}>
            <View style={{height:20}}></View>
            <Input label='Email Address' icon='email-outline' placeholder='e.g janedoe@mail.com' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Phone Number' icon='phone-outline' placeholder='1234 5678 910' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Birth Date' icon='calendar-blank-outline' placeholder='9/9/1999' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Gender' icon='account-outline' placeholder='Your gender ' bool={false} icon2='chevron-down'/>
            <View style={{height:10}}></View>
            <Input label='Password' icon='lock-outline' placeholder='Your password' bool={true}/>
            <View style={{height:10}}></View>
            <Input label='Confirm Password' icon='lock-outline' placeholder='Your password' bool={true}/>
            <View style={{height:30}}></View>
        </View>
        <Yellow text='Sign Up' navigation={navigation} destinationScreen='Sign In'/>
        <Text style={{color:'white', textAlign:'center', paddingVertical:15}}>By signing up I accept <Text style={{color:'#F2B916'}}>Terms of use</Text> and <Text style={{color:'#F2B916'}}>privacy policy</Text></Text>
      
        <View>
        <Text style={{textAlign:'center', paddingVertical:20, fontSize:17, color:'white'}}>or sign in with</Text>
        <Dark text='Google' icon='google' type='font-awesome' color='red' style={{color:'white'}}/>
      <View style={{height:10}}></View>
        <Dark text='Watch movie' icon='movie-open-outline' type='material-community' color='white' style={{color:'white'}}/>
      <View style={{height:10}}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:height,
        backgroundColor:'#26282C'

    },
})