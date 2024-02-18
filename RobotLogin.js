import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { TextInput} from 'react-native-paper'
import { Icon } from 'react-native-elements'
const images = require('./assets/LoginRobot.jpeg');

export default function RobotLogin() {
  return (
    <KeyboardAvoidingView enabled style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView>
    <View style={styles.container}>

      <StatusBar style="auto" />

        <View style={styles.image}>
            <Image style={styles.img} source={images}/>
        </View>
        <View style={styles.body}>
         
            <View>
              <Text style={{fontSize:35, marginTop:20, textAlign:'center', fontWeight:'bold'}}>Login</Text>
              </View>
              <View style={styles.bodyInputs}>
            <View style={styles.inputs}>
            <View style={styles.email}>
          <TextInput style={styles.email1} label='Username'
          mode='flat' underlineColor='rgba(128, 128, 128, 0.1)' theme={{roundness:30}}
          left={<TextInput.Icon size={20} style={{backgroundColor:'#F4D9D0'}} 
           icon={'account-outline'} color={'#F3B872'}/>}/>
        </View>
        <View style={styles.email}>
        <TextInput style={styles.email2} label='Password'
          mode='flat' underlineColor='rgba(128, 128, 128, 0.1)' 
          secureTextEntry
          left={<TextInput.Icon size={20} icon={'lock-outline'} style={{backgroundColor:'#C3DFFF'}} color={'#129AFE'}/>}/>
        </View></View>
            </View>
            <View style={styles.pass}>
        <View style={styles.create}>
        <Text style={{color:'#129AFE', fontWeight:'bold', fontSize:15, marginTop:20}}>Forgot Password?</Text>
        <TouchableOpacity style={{backgroundColor:'black', paddingHorizontal:40,paddingVertical:15, borderRadius:40}}><Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Login</Text></TouchableOpacity>
      </View>
      <View style={{display:'flex', flexDirection:'row', gap:80, marginTop:100}}>
        <Icon name='facebook' iconStyle={{color:'#3475DB', fontSize:30, backgroundColor:'white', padding:10, borderRadius:40}}/>
        <Icon name='google' type='font-awesome' iconStyle={{backgroundColor:'white', padding:10, fontSize:30, borderRadius:40, color:'red'}}/>
        <Icon name='apple' iconStyle={{fontSize:30, backgroundColor:'white', padding:10, borderRadius:40}}/>
      </View>
      </View>
        </View>
       
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    image:{
        width:'100%'
    },
    img:{
        width:'100%'
    },
    body:{
        backgroundColor:'#F4F5F7',
        height:600
    },
    inputs:{
        marginTop:30,

    },
    email:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

      },
      email1:{
        width:350,
        height:70,
        backgroundColor:"rgba(128, 128, 128, 0.2)",
      },
      email2:{
        width:350,
        height:70,
        backgroundColor:"rgba(128, 128, 128, 0.2)",
        borderRadius:30
      },
      pass:{
        marginTop:30,
        flex:1,
        alignItems: 'center',
      },
      create:{
        display:'flex',
        flexDirection:'row',
        gap:90,
      },
})