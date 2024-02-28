import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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
import Profile from './Muvi/Profile';
import List from './Muvi/List';
import ListTrail from './Muvi/ListTrail';
import Search from './Muvi/Search';
import Details from './Muvi/Details';
import { Icon } from 'react-native-elements';

const Stack= createNativeStackNavigator()
const Tab= createBottomTabNavigator()

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Details'>
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
             name='Home1'
             component={MainTabNavigator}
             options={{headerShown:false}}/>
              <Stack.Screen
             name='Details'
             component={Details}
             options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{tabBarLabel:'', tabBarActiveTintColor:'#F2B916', tabBarInactiveTintColor:'white', 
    tabBarStyle:{
      backgroundColor:'#26282C', height:100, paddingTop:15, borderTopColor:'#26282C'
    },
  tabBarActiveBackgroundColor:'#F2B916',
  
    }} >
      <Tab.Screen name='Home' component={Home} options={{headerShown:false, tabBarIcon:()=><Icon name='home-outline' type='material-community' color={'white'} size={30}/>}}/>
      <Tab.Screen name='Search' component={Search} options={{headerShown:false, tabBarIcon:()=><Icon name='magnify' type='material-community' color={'white'} size={30}/>}}/>
      <Tab.Screen name='List' component={List} options={{headerShown:false, tabBarIcon:()=><Icon name='folder-outline' type='material-community' color={'white'} size={30}/>}}/>
      <Tab.Screen name='Profile' component={Profile} options={{headerShown:false, tabBarIcon:()=><Icon name='account-outline' type='material-community' color={'white'} size={30}/>}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

