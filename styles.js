import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      flex:1,
      alignItems:'center',
      height:100,

    },
    listHead:{
      fontSize:20,
      marginTop:20,
      marginLeft:-150,
      // flex:1,
      // justifyContent:'flex-start'
    },

    list:{
      paddingTop: 20,
      paddingBottom:20,
      paddingLeft:10,
      paddingRight:30,
      backgroundColor:'rgba(128, 128, 128, 0.4)',
      width:300,
      marginTop:20,
      fontSize:20,
      borderWidth:2,
      borderStyle:'dotted',
      borderRadius:15
    },
    input:{
      // marginBottom:100,
      paddingTop: 20,
      paddingBottom:20,
      paddingLeft:10,
      paddingRight:30,
      width:300,
    }
  });
  