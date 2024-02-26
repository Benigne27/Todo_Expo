import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'
import Yellow from './Yellow'
import { StatusBar } from 'expo-status-bar'

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.logo}>
        <Image source={require('../assets/Muvi.png')}/>
        </View>
        <View style={styles.contain}>
        <Image source={require('../assets/Welcome.png')} style={styles.image}/>
        <View style={{paddingHorizontal:20}}>
        <Text style={styles.text1}>Welcome to Muvi</Text>
        <Text style={styles.text2}>Free movie streaming all your needs everytime and everywhere</Text>
        </View>

        <View style={{top:170}}>
            <Yellow text='Watch movie' navigation={navigation} destinationScreen='Splash'/>
            <View style={styles.button}>
                <Pressable onPress={()=>navigation.navigate('Sign In')}><Text style={styles.text}>Sign In</Text></Pressable>
            </View>
        </View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        height:130,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:'#1F2123'
    },
    contain:{
        height:800,
        backgroundColor:'#26282C',
        display: 'flex',
        alignItems:'center',
        
    },
    image:{
        width:300,
        height:300,
        marginTop:60
    },
    text1:{
        fontSize:26,
        color:'white',
        fontWeight:'bold',
        marginBottom:5,
        textAlign:'center'
    },
    text2:{
        fontSize:16,
        color:'gray',
        marginTop:15,
        textAlign:'center'
    },
    button:{
        width:370,
        height:40,
        backgroundColor:'#26282C',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:7,
        alignSelf:'center'

    },
    text:{
        fontSize:17,
        fontWeight:'400',
        color:'white',
        top:20
    }
})