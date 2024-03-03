import { StyleSheet, Text, View, Pressable, Dimensions, Image} from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'
import Input from './input'
import Yellow from './Yellow'

const height=Dimensions.get('screen').height

export default function EditProfile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
                <Pressable onPress={()=>navigation.goBack()}><Icon name='arrow-left' type='material-community' color={'#F2B916'}/></Pressable>
            <Text style={styles.text}>Edit Profile</Text>
            </View>
            <View style={styles.profile}>
              <View>
                <Image source={require('../assets/Profile.jpg')} style={styles.image}/>
              </View>
              <View style={styles.edit}>
              <Icon name='pencil-outline' type='material-community' iconStyle={{color:'#F2B916'}}/>
              <Text style={{fontSize:15, color:'white', paddingTop:5}}>Change Avatar</Text>
              </View>
            </View>
            <View style={{paddingHorizontal:30}}>
            <View style={{height:10}}></View>
            <Input label='Full Name' icon='account-outline' placeholder='Jennifer Doe' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Email Address' icon='email-outline' placeholder='e.g janedoe@mail.com' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Phone Number' icon='phone-outline' placeholder='1234 5678 910' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Birth Date' icon='calendar-blank-outline' placeholder='9/9/1999' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Gender' icon='account-outline' placeholder='Your gender ' bool={false} icon2='chevron-down'/>
            <View style={{height:10}}></View>
            <Input label='Password' icon='lock-outline' placeholder='Your password' bool={true}/>
            <View style={{height:30}}></View>     
        </View>
        <Yellow text={'Save'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: height,
    backgroundColor:'#26282C',
    
},
  header:{
    height:120,
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-start',
    gap:20,
    paddingLeft:20,
    paddingBottom:15,
    backgroundColor:'#1F2123',
},
text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
},
image:{
  height:100,
  width:100,
  borderRadius:50
},
profile:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  gap:10,
  paddingVertical:20
},
edit:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  gap:5,
  borderWidth:1,
  borderColor:'white',
  width:150,
  paddingVertical:5,
  borderRadius:8
}
})