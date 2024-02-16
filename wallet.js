import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { Icon } from 'react-native-elements'
// import { Icon } from 'react-native-paper'
import { color } from 'react-native-elements/dist/helpers'

export default function Wallet() {
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <StatusBar style='auto'/>
      <Text style={{fontSize:25, fontWeight:'bold', paddingTop:50, paddingLeft:25}}>Home</Text>
        <View style={styles.gradient}>
          <View style={styles.icon}>
            <View style={{backgroundColor:'white',
      padding:20,
      borderRadius:50}}><Icon name='bolt' size={16} type='font-awesome' iconStyle={{color:'#8064FF', borderWidth:2, borderColor:'#D3CBF1', paddingHorizontal:10, paddingVertical:6, borderRadius:16 }}/></View>
          <View><Text>Price Alert</Text></View>
          </View>
          <View style={styles.icon}>
            <View style={{backgroundColor:'white',
      padding:20,
      borderRadius:50}}><Icon name='arrow-right' size={15} type='font-awesome' iconStyle={{color:'#F7C480', borderWidth:2, borderColor:'#FCDDB6', paddingHorizontal:7, paddingVertical:6, borderRadius:16 }}/></View>
          <View><Text>Convert</Text></View>
          </View>
          <View style={styles.icon}>
            <View style={{backgroundColor:'white',
      padding:20,
      borderRadius:50}}><Icon name='square' size={15} type='font-awesome' iconStyle={{color:'#768AFF', borderWidth:2, borderColor:'#DEE9F4', paddingHorizontal:5, paddingVertical:4}}/></View>
          <View><Text>Compare</Text></View>
          </View>
          <View style={styles.icon}>
            <View style={{backgroundColor:'white',
      padding:20,
      borderRadius:50}}><Icon name='star' size={15} type='font-awesome' iconStyle={{color:'#6FC584', borderWidth:2, borderColor:'#C1E1D4', paddingHorizontal:7, paddingVertical:6, borderRadius:16 }}/></View>
          <View><Text>Watchlist</Text></View>
          </View>
        </View>
      <View style={styles.body}>
        <Text style={{fontSize:23, fontWeight:'500', paddingTop:30, paddingLeft:30}}>Your Wallet</Text>
        <View style={styles.horScroll}>
          <ScrollView horizontal={true}>
          <View style={styles.card}>
            <View style={{display:'flex', gap:10}}>
              <Text style={{fontSize:17, color:'gray', fontWeight:'bold'}}>Neo</Text>
              <Text style={{fontSize:19, fontWeight:'bold'}}>Neo 0.2124</Text>
              <Text style={{fontSize:23, fontWeight:'500'}}>$32,128.80</Text>
            </View>
            <View>
              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{display:'flex', gap:10}}>
              <Text style={{fontSize:17, color:'gray', fontWeight:'bold'}}>Neo</Text>
              <Text style={{fontSize:19, fontWeight:'bold'}}>Neo 0.2124</Text>
              <Text style={{fontSize:23, fontWeight:'500'}}>$32,128.80</Text>
            </View>
            <View>
              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{display:'flex', gap:10}}>
              <Text style={{fontSize:17, color:'gray', fontWeight:'bold'}}>Neo</Text>
              <Text style={{fontSize:19, fontWeight:'bold'}}>Neo 0.2124</Text>
              <Text style={{fontSize:23, fontWeight:'500'}}>$32,128.80</Text>
            </View>
            <View>
              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{display:'flex', gap:10}}>
              <Text style={{fontSize:17, color:'gray', fontWeight:'bold'}}>Neo</Text>
              <Text style={{fontSize:19, fontWeight:'bold'}}>Neo 0.2124</Text>
              <Text style={{fontSize:23, fontWeight:'500'}}>$32,128.80</Text>
            </View>
            <View>
              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{display:'flex', gap:10}}>
              <Text style={{fontSize:17, color:'gray', fontWeight:'bold'}}>Neo</Text>
              <Text style={{fontSize:19, fontWeight:'bold'}}>Neo 0.2124</Text>
              <Text style={{fontSize:23, fontWeight:'500'}}>$32,128.80</Text>
            </View>
            <View>
              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{display:'flex', gap:10}}>
              <Text style={{fontSize:17, color:'gray', fontWeight:'bold'}}>Neo</Text>
              <Text style={{fontSize:19, fontWeight:'bold'}}>Neo 0.2124</Text>
              <Text style={{fontSize:23, fontWeight:'500'}}>$32,128.80</Text>
            </View>
            <View>
              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{display:'flex', gap:10}}>
              <Text style={{fontSize:17, color:'gray', fontWeight:'bold'}}>Neo</Text>
              <Text style={{fontSize:19, fontWeight:'bold'}}>Neo 0.2124</Text>
              <Text style={{fontSize:23, fontWeight:'500'}}>$32,128.80</Text>
            </View>
            <View>
              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
            </View>
          </View>
          </ScrollView>
        </View>
        <Text style={{fontSize:23, fontWeight:'500', paddingTop:30, paddingLeft:30}}>Trending</Text>
        <View style={styles.bitcoin}>
          
          <View style={{backgroundColor:'#FFE3C3', width:60, paddingVertical:15, borderRadius:50}}><Icon name='bitcoin' size={30} type='font-awesome' iconStyle={{color:'#F5951D'}}/></View>
          <View style={{display:'flex', gap:15}}>
            <Text style={{fontSize:20, fontWeight:'500'}}>BitCoin</Text>
            <Text>BTC</Text>
          </View>
          <View>
            <Text style={{fontSize:20, fontWeight:'500'}}>$32,128.80</Text>
            <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-up' type='font-awesome' iconStyle={{paddingTop:15, color:'#6FC584'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
          </View>
          
        </View>
        <View style={styles.bitcoin}>
          
          <View style={{backgroundColor:'#FBD1DB', width:60, paddingVertical:15, borderRadius:50}}><Icon name='bitcoin' size={30} type='font-awesome' iconStyle={{color:'#F04086'}}/></View>
          <View style={{display:'flex', gap:15}}>
            <Text style={{fontSize:20, fontWeight:'500'}}>ByteCoin</Text>
            <Text>BCN</Text>
          </View>
          <View>
            <Text style={{fontSize:20, fontWeight:'500'}}>$15,313.81</Text>
            <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-up' type='font-awesome' iconStyle={{paddingTop:15, color:'#6FC584'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.2%</Text></View>
          </View>
          
        </View>
        <View style={styles.icons}>
          <View style={styles.icons1}>
          <Icon name='house' size={30}/>
          <Icon name='phone' size={30} iconStyle={{color:'rgba(128, 128, 128, 0.3)'}}
          />
          <Icon name='wallet' size={30} iconStyle={{color:'rgba(128, 128, 128, 0.3)'}}/>
          <Icon name='house' size={30} iconStyle={{color:'rgba(128, 128, 128, 0.3)'}}/>
          <Icon name='user' type='font-awesome' size={30} iconStyle={{color:'rgba(128, 128, 128, 0.3)'}}/>
        </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3E6F0',
    height:1000
  },

    gradient:{
        height:200,
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'row',
        gap:30
    },
    icon:{
      display:'flex',
      gap:20
      
    },
    body:{
      height:600,
      backgroundColor:'#F1EDF8',
      borderTopLeftRadius:50,
      borderTopRightRadius:50
    },
    card:{
      display:'flex',
      flexDirection:'row',
      gap:100,
      backgroundColor:'white',
      width:320,
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:20,
      borderRadius:30,
      marginLeft:15,
      marginTop:30
      
    },
    bitcoin:{
      display:'flex',
      flexDirection:'row',
      gap:70,
      alignItems:'center',
      justifyContent:'center',
      marginTop:30
    },
    icons1:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor:'white',
      height:100,
      borderTopLeftRadius:50,
      borderTopRightRadius:50
      
    },
    icons:{

      display:'flex',
      alignContent:'flex-end',
      marginTop:60,
     

    }
})