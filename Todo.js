import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { StyleSheet } from "react-native";
// import { styles } from './styles';

export default function Todo() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.navigation}>
      <Text style={styles.text}>Todo</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.body}>
        <Text style={styles.listHead}>To do List items</Text>
        <Text style={styles.list}>1  Cleanning</Text>
        <Text style={styles.list}>1  Cleanning</Text>
        <Text style={styles.list}>1  Cleanning</Text>
        <Text style={styles.list}>1  Cleanning</Text>

      </View>
      <View style={styles.bottom}>
      <View style={styles.bigInput}>
        <TextInput style={styles.TextInput} placeholder='Enter new todo item'/>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>Add Todo</Text>
          </TouchableOpacity>
          </View>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#fff',
    },

    navigation:{
      backgroundColor:'orange',
      height:130,
    },

    text:{
      flex:1,
      color: "white",
      fontSize:28,
      textAlign:'right',
      marginTop:60,
      marginRight:30,
    },

    body:{
      flex:2,
      alignItems:'center',
      height:430,
    },
    listHead:{
      fontSize:20,
      marginTop:20,
      marginLeft:-150,
    },

    list:{
      paddingTop: 20,
      paddingBottom:20,
      paddingLeft:10,
      paddingRight:30,
      backgroundColor:'rgba(128, 128, 128, 0.1)',
      width:370,
      marginTop:20,
      fontSize:20,
      borderWidth:2,
      borderStyle:'dashed',
      borderRadius:15
    },

    bigInput:{
      width:250,
      marginTop:220,
      paddingTop: 25,
      paddingBottom:25,
      paddingLeft:10,
      paddingRight:30,
      marginLeft:20,
      borderRadius:10,
      shadowOffset:{width:-2, height:4},
      shadowOpacity:0.7,
      backgroundColor:'white',
      shadowColor:'black'
      
      
    },
    bottom:{
      flex:1,
      flexDirection:'row',
      gap:10
    },

    button:{
      marginTop:220,
      paddingTop: 25,
      paddingBottom:25,
      paddingLeft:15,
      paddingRight:15,
      backgroundColor:'orange',
      borderRadius:10
    }

  });

