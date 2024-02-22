import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Todo from './Todo';
import SignIn from './SignIn';
import LogIn from './LogIn';
import Images from './Images';
import RobotLogin from './RobotLogin';
import RobotRegister from './RobotRegister';
import Wallet from './wallet';
import Products from './Products';
import Tags from './tags';
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import Splash from './Muvi/Splash';
import Start from './Muvi/Start';
import Yellow from './Muvi/Yellow';
import Welcome from './Muvi/Welcome';
import SignIn2 from './Muvi/SignIn';
import SignUp from './Muvi/SignUp';
import Home from './Muvi/Home';
import Trails from './Muvi/Trails';

const Stack= createNativeStackNavigator()

export default function App() {
  return (

  

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
             name='Splash'
            component={Splash} 
            options={{headerShown:false}}/>
        <Stack.Screen
             name='Start'
             component={Start}
             options={{headerShown:false}}/>
        <Stack.Screen
             name='Welcome'
            component={Welcome}
            options={{headerShown:false}}/>
            <Stack.Screen
             name='Sign In' 
            component={SignIn2}
            options={{headerStyle:{
              backgroundColor:'#1F2123',
            }, headerBackTitleVisible:null,
            headerTintColor:'white', headerBackTitleStyle:{
              
            }}}/>
             <Stack.Screen
             name='Sign Up'
             component={SignUp}
             options={{headerStyle:{
              backgroundColor:'#1F2123',
            }, headerBackTitleVisible:null,
            headerTintColor:'white', headerBackTitleStyle:{
              
            }}}/>
            <Stack.Screen
             name='Home'
             component={Trails}
             options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>   

  );
}

