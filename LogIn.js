import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
// import React from 'react'
import { TextInput, Checkbox } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { Icon } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'

export default function LogIn() {
  return (
    <View style={styles.container}>
        <ScrollView>
     <View style={styles.textHead}>
     <Text style={styles.header1}>Sign In</Text>
     <Text style={styles.header2}>Welcome back! Please enter your details</Text>
     </View>
      <StatusBar style="auto" />
      <View>
        <View style={styles.email}>
          <TextInput style={styles.email1} label='Email'
          mode='flat'
          placeholder='quickrakibul@gmail.com'
          left={<TextInput.Icon size={23} style={{backgroundColor:'#FCD0FF'}} icon={'email-outline'} color={'#BA61CD'}/>}/>
        </View>
        <View style={styles.email}>
        <TextInput style={styles.email1} label='Password'
          mode='flat'
          placeholder='.............'
          secureTextEntry
          left={<TextInput.Icon size={23} icon={'lock-outline'} style={{backgroundColor:'#C3DFFF'}} color={'#129AFE'}/>}/>
        </View>
      </View>
      <View style={{display:'flex', flexDirection:'row', marginLeft:25}}>
        <Checkbox.Android status='unchecked'/>
        <Text style={{marginTop:9, fontSize:16}}>Remember me</Text>
      </View>

      <View style={styles.pass}>
        <Text style={{color:'#129AFE', fontWeight:'bold', fontSize:17, marginBottom:30}}>Forgot Password</Text>
        <TouchableOpacity style={styles.button}><Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:17}}>Sign In</Text></TouchableOpacity>
        <View style={styles.create}>
        <Text>Create Account</Text>
        <TouchableOpacity style={{backgroundColor:'rgba(128, 128, 128, 0.1)', padding:12, borderRadius:15}}><Text style={{color:'orange', fontWeight:'bold'}}>Sign Up</Text></TouchableOpacity>
      </View>
      <View style={{display:'flex', flexDirection:'row', gap:100, marginTop:100}}>
        <Icon name='facebook' iconStyle={{color:'#3475DB', fontSize:40}}/>
        <Icon name='google' type='font-awesome' iconStyle={{backgroundColor:'red', fontSize:25, padding:10, borderRadius:50, color:'white'}}/>
        <Icon name='apple' iconStyle={{fontSize:40}}/>
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      textHead:{
        height:200,
        marginTop:25,
        alignItems: 'center',
        justifyContent: 'center',
      },
      header1:{
        fontSize:30,
        fontWeight:'bold'
      },
      header2:{
        fontSize:17,
        fontWeight:'bold',
        color:'rgba(128, 128, 128, 0.7)'
      },
      email:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      email1:{
        width:350,
        backgroundColor:"rgba(128, 128, 128, 0.1)",
        marginBottom:20,
        
      },
      pass:{
        marginTop:80,
        flex:1,
        alignItems: 'center',
      },

      button:{
        width:350,
        backgroundColor:'#129AFE',
        paddingVertical:20,
        borderRadius:30,
      },
      create:{
        display:'flex',
        flexDirection:'row',
        gap:170,
        marginTop:20
      }

})