import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import Yellow from './Yellow'
import { StatusBar } from 'expo-status-bar'

const height=Dimensions.get('screen').height

export default function Start({navigation}) {
  return (
    <View>
        <StatusBar style='auto'/>
     <ImageBackground source={require('../assets/Joker3.jpg')} 
     resizeMode='cover'  style={styles.image}>
        <View style={styles.opacity}>
            <Text style={styles.text1}>Enjoy your favourite {"\n"} movie everywhere</Text>
            <Text style={styles.text2}>Browse through our collections and discover hundreds of
                movies and series that you'll love!
            </Text>
            <View></View>
        </View>
     </ImageBackground>
     <View style={{top:820}}>
     
            <Yellow text='Get Started' navigation={navigation} destinationScreen='Welcome'/>
           
        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        flex:1, 
        height:height,
        position:'relative'
    },
    opacity:{
        position:'absolute',
        height:900,
        width:'100%',
        backgroundColor:'rgba(000,000,000,0.7)',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingHorizontal:30
    },
    text1:{
        fontSize:26,
        color:'white',
        fontWeight:'bold',
        marginBottom:5
    },
    text2:{
        fontSize:16,
        color:'white',
        marginTop:15,
        // letterSpacing:1
    }
})