import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "react-native-elements";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import Settings from "./Settings";
import { ThemeContext } from "./ThemeProvider";
const Profile1 = require("../assets/Profile.jpg");
const height = Dimensions.get("screen").height;

export default function Profile({ navigation }) {
  const navigation1 = useNavigation();
  const [darkMode, handleMode]= useContext(ThemeContext)

  const handlePress = () => {
    navigation1.openDrawer(); 
  };
  return (
    <View style={[styles.container, darkMode&&styles.darkContain]}>
      <StatusBar style="light" />
      <View style={[styles.header, darkMode&&styles.darkHead]}>
        <Pressable onPress={handlePress}> 
          <Text style={{ fontSize: 20, fontWeight: "bold", color: darkMode ? "white":"black" }}>
            More
          </Text>
        </Pressable>
        <View style={{ display: "flex", flexDirection: "row", gap: 60 }}>
          <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
            <Image source={Profile1} style={styles.image} />
            <View style={{ paddingTop: 17 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: darkMode ? "white":"black" }}>
                Jennifer Doe
              </Text>
              <Text style={{ fontSize: 15, color: "gray" }}>
                doe.jennifer@gmail.com
              </Text>
            </View>
          </View>
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              paddingTop: 20,
            }}
            onPress={() => navigation.navigate("Edit")}
          >
            <Icon
              name="pencil-outline"
              type="material-community"
              iconStyle={{ color: "#F2B916" }}
            />
            <Text style={{ fontSize: 15, color: "#F2B916", paddingTop: 5 }}>
              Edit
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        <Settings icon={"inbox-outline"} text={"Inbox"} color={darkMode ? "white":"black"}/>
        <Settings icon={"account-outline"} text={"Account Settings"} color={darkMode ? "white":"black"}/>
        <Settings icon={"cog-outline"} text={"App Settings"} color={darkMode ? "white":"black"}/>
        <Settings icon={"web"} text={"Language"} color={darkMode ? "white":"black"}/>
        <Settings icon={"help-circle-outline"} text={"Help"} color={darkMode ? "white":"black"}/>
        <View style={{ display: "flex", gap: 15, paddingTop: 40 }}>
          <Text style={{ color: "gray", fontSize: 16 }}>
            Terms & Conditions
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "#1F2123",
  },
  darkContain:{
    backgroundColor:'white'
  },
  header: {
    height: 250,
    backgroundColor: "#26282C",
    display: "flex",
    gap: 30,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  darkHead:{
    backgroundColor:'#F5F5F5'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
});
