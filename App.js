import "react-native-gesture-handler";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { Icon, Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Modal from "react-native-modal";
import Todo from "./Todo";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import Images from "./Images";
import RobotLogin from "./RobotLogin";
import RobotRegister from "./RobotRegister";
import Wallet from "./wallet";
import Products from "./Products";
import Tags from "./tags";
import Cards1 from "./Cards1";
import Cards2 from "./Cards2";
import Splash from "./Muvi/Splash";
import Start from "./Muvi/Start";
import Yellow from "./Muvi/Yellow";
import Welcome from "./Muvi/Welcome";
import SignIn2 from "./Muvi/SignIn";
import SignUp from "./Muvi/SignUp";
import Home from "./Muvi/Home";
import Trails from "./Muvi/Trails";
import Profile from "./Muvi/Profile";
import List from "./Muvi/List";
import ListTrail from "./Muvi/ListTrail";
import Search from "./Muvi/Search";
import Details from "./Muvi/Details";
import EditProfile from "./Muvi/EditProfile";
import ProfileDrawer from "./Muvi/ProfileDrawer";
import Series from "./Muvi/Series";
import Films from "./Muvi/Films";
import ThemeProvider from "./Muvi/ThemeProvider";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Top = createMaterialTopTabNavigator();

function HomeStack() {
  
  return (
  
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign In"
        component={SignIn2}
        options={{
          headerStyle: {
            backgroundColor: "#1F2123",
          },
          headerBackTitleVisible: null,
          headerTintColor: "white",
          headerBackTitleStyle: {},
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: "#1F2123",
          },
          headerBackTitleVisible: null,
          headerTintColor: "white",
          headerBackTitleStyle: {},
        }}
      />
      <Stack.Screen
        name="Home1"
        component={MainTabNavigator}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
}

function MainTabNavigator() {
  const [visible, setVisible] = useState(false);
  return (
    
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
        tabBarActiveTintColor: "#F2B916",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#26282C",
          height: 100,
          paddingTop: 15,
          borderTopColor: "#26282C",
          
        },
        tabBarActiveBackgroundColor: "#F2B916",
      }}
    >
      <Tab.Screen
        name="Home"
        component={TopNavigation}
        options={{
          
          tabBarIcon: () => (
            <Icon
              name="home-outline"
              type="material-community"
              color={"white"}
              size={30}
            />
          ),
          headerBackTitleVisible: false,
          headerTintColor: "#1F2123",
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1F2123", height:150, },
          headerLeft: () => <Image source={require("./assets/Muvi.png")} style={{height:50, width:150}}/>,
          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                <Icon
                  name="bookmark-outline"
                  type="material-community"
                  color={"white"}
                />
                <Pressable onPress={() => setVisible(!visible)}>
                  <Icon
                    name="bell-outline"
                    type="material-community"
                    color={"white"}
                  />
                </Pressable>
                <View>
                  <Modal
                    isVisible={visible}
                    
                    backdropColor="white"
                    backdropOpacity={0.4}
                  >
                    <View
                      style={{
                        height: 300,
                        width: 350,
                        backgroundColor: "white",
                        paddingVertical: 50,
                        paddingHorizontal: 30,
                        display: "flex",
                        alignSelf: "center",
                        borderRadius: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        You do not have any Notification as of now. {"\n"}
                        Check back later!
                      </Text>
                      <View style={{ height: 50 }}></View>
                      <Button
                        title={"OK"}
                        onPress={() => setVisible(!visible)}
                      />
                    </View>
                  </Modal>
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon
              name="magnify"
              type="material-community"
              color={"white"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon
              name="folder-outline"
              type="material-community"
              color={"white"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon
              name="account-outline"
              type="material-community"
              color={"white"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={() => <ProfileDrawer />}>
      <Drawer.Screen
        name="Profile1"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export const TopNavigation = () => {
  return (
    <Top.Navigator
      tabBarPosition="top"
      screenOptions={{
        tabBarStyle: {
          height: 50,
          backgroundColor: "#1F2123",
        borderTopColor:'red'
        },
        tabBarLabelStyle: {
          color: "white",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#F2B916",
          width: 40,
          left: 50,
          height: 4,
        },
      }}
    >
      <Top.Screen name="Featured" component={Home}/>
      <Top.Screen name="Series" component={Series} />
      <Top.Screen name="Films" component={Films} />
    </Top.Navigator>
  );
};

export default function App() {
  return (
    // <ThemeProvider>
    <NavigationContainer>
      
      <HomeStack />
      
    </NavigationContainer>
    // </ThemeProvider>

  );
}
