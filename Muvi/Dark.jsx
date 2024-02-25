import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

export default function Dark({text, navigation, destinationScreen, icon, type, color, style, ...rest}) {
    const onPress = () => {
        navigation.navigate(destinationScreen);
      };
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Icon name={icon} type={type} size={20} color={color}/>
      <Text style={[{fontSize:17,
        fontWeight:'400'}, style]} {...rest}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:370,
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