import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Icon } from "react-native-elements"

export default function SignIn() {
  return (
 <View style={styling.container}>
      <StatusBar style="auto" />
    <View style={styling.head}>
    <View style={{display:'flex', flexDirection:'row',}}>
        <Icon name="house" iconStyle={{color:'orange', fontSize:40}}/>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Home</Text>
        </View>
    <Icon name="edit" iconStyle={{color:'#119BFF'}}/>
    </View>
    <Text>Home</Text>
    <Text>Home</Text>
    <Text>Home</Text>
 </View>
  )
}
const styling = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

})
