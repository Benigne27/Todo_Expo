import { Dimensions, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Dark from './Dark'
import { Icon } from 'react-native-elements'
import Settings from './Settings'

const height=Dimensions.get('screen').height

export default function ProfileDrawer({navigation}) {
  return (
    <View style={styles.container1}>
        <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        <Settings icon={"account-outline"} text={"Account Settings"} />
        <Settings icon={"cog-outline"} text={"App Settings"} />
        <Settings icon={"web"} text={"Language"} />
        </View>
       
          <Pressable style={styles.container} onPress={()=>navigation.navigate('Sign In')}>
        <Icon name={'logout'} type={'material-community'} size={20} color={'red'}/>
      <Text style={[{fontSize:17,
        fontWeight:'400', color:'red'}]} >Log Out</Text>
    </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    container1:{
        height:height,
        backgroundColor:'#26282C',
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    container:{
        top:250,
        width:200,
        height:42,
        backgroundColor:'#26282C',
        borderWidth:1,
        borderColor:'#6F7173',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:7,
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        gap:5

    },
})