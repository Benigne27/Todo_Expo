import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Input from "./input";
import Yellow from "./Yellow";
import Dark from "./Dark";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import FlashMessage, {
  hideMessage,
  showMessage,
} from "react-native-flash-message";

const height = Dimensions.get("screen").height;

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [secure, setSecure] = useState(true);

  const validateForm = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("The Email is invalid");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const data = {
        email: email,
        password: password,
      };

      await AsyncStorage.setItem("user_data", JSON.stringify(data));

      console.log("Form submitted:", email, password);

      try {
        const response = await signInWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        console.log(response);
        console.log("You have Successfully signed in!");
        navigation.navigate("Home1");
      } catch (error) {
        console.log(error);
        showMessage({
          message: "Sign In Failed",
          description: error.code.toString(),
          icon: "danger",
          type: "danger",
        });
      }
    }
  };

  const getData = async () => {
    let data = await AsyncStorage.getItem("user_data");
    console.log(data);
  };

  getData();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <StatusBar style="light" />

      <View style={styles.body}>
        <Input
          label="Email Address"
          icon="email-outline"
          placeholder="e.g janedoe@mail.com"
          value={email}
          bool={false}
          change={setEmail}
          error={!!emailError}
          complete="email"
          correct={false}
        />
        <View style={{ height: 30 }}>
          {emailError ? (
            <Text style={{ color: "red", paddingVertical: 5 }}>
              {emailError}
            </Text>
          ) : null}
        </View>
        <View style={{ height: 10 }}></View>

        <Input
          label="Password"
          icon="lock-outline"
          placeholder="Your password"
          bool={secure}
          icon2={secure ? "eye-off-outline" : "eye"}
          press={() => {
            setSecure(!secure);
          }}
          value={password}
          change={setPassword}
          error={!!passwordError}
        />
        <View style={{ height: 30 }}>
          {passwordError ? (
            <Text style={{ color: "red", paddingVertical: 5 }}>
              {passwordError}
            </Text>
          ) : null}
        </View>

        <Text
          style={{
            textAlign: "right",
            color: "white",
            fontSize: 16,
            paddingVertical: 15,
          }}
        >
          Forgot Password?
        </Text>
        <Pressable style={styles.contains} onPress={handleSubmit}>
          <Text style={styles.text4}>Sign In</Text>
        </Pressable>
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 20,
            fontSize: 17,
            color: "white",
          }}
        >
          or sign in with
        </Text>
        <Dark
          text="Google"
          icon="google"
          type="font-awesome"
          color="red"
          style={{ color: "white" }}
        />
        <View style={{ height: 10 }}></View>
        <Dark
          text="Watch movie"
          icon="movie-open-outline"
          type="material-community"
          color="white"
          style={{ color: "white" }}
        />
        <View style={{ height: 10 }}></View>
      </View>

      <View style={styles.sign}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>
          Don't have an account?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={{ color: "#F2B916", fontSize: 17, fontWeight: "500" }}>
            Sign Up
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "#26282C",
  },
  input: {
    width: 350,
    display: "flex",
    alignSelf: "center",
  },
  body: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  sign: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    paddingVertical: 20,
  },
  contains: {
    width: 370,
    height: 40,
    backgroundColor: "#F2B916",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 7,
    alignSelf: "center",
  },
  text4: {
    fontSize: 17,
    fontWeight: "400",
  },
});
