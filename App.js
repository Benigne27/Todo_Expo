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

const Stack= createNativeStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen
             name='Register'
            component={RobotRegister}/>
        <Stack.Screen
             name='Login'
             component={RobotLogin}/>
        <Stack.Screen
             name='Wallet'
            component={Wallet}/>
      </Stack.Navigator>
    </NavigationContainer>   

  );
}

