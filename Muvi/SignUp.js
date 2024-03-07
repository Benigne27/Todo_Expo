import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Input from "./input";
import Yellow from "./Yellow";
import Dark from "./Dark";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { createUserWithEmailAndPassword } from "firebase/auth";

const height = Dimensions.get("screen").height;
export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [secure, setSecure] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        console.log(response);
        console.log("User created Successfully!");
        navigation.navigate("Sign In");
      } catch (error) {
        console.log(error);
        showMessage({
          message: "Sign Up Failed",
          description: error.code.toString(),
          icon: "danger",
          type: "danger",
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlashMessage position={"center"} />
      <StatusBar style="light" />
      <View style={{ paddingHorizontal: 30 }}>
        <View style={{ height: 20 }}></View>
        <Input
          label="Email Address"
          icon="email-outline"
          placeholder="e.g janedoe@mail.com"
          bool={false}
          value={email}
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
        {/* <Input label='Phone Number' icon='phone-outline' placeholder='1234 5678 910' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Birth Date' icon='calendar-blank-outline' placeholder='9/9/1999' bool={false}/>
            <View style={{height:10}}></View>
            <Input label='Gender' icon='account-outline' placeholder='Your gender ' bool={false} icon2='chevron-down'/>
            <View style={{height:10}}></View> */}
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
          {emailError ? (
            <Text style={{ color: "red", paddingVertical: 5 }}>
              {passwordError}
            </Text>
          ) : null}
        </View>
        <View style={{ height: 10 }}></View>
        <Input
          label="Confirm Password"
          icon="lock-outline"
          placeholder="Your password"
          bool={secure}
          icon2={secure ? "eye-off-outline" : "eye"}
          press={() => {
            setSecure(!secure);
          }}
          value={confirmPassword}
          change={setConfirmPassword}
          error={!!confirmPasswordError}
        />
        <View style={{ height: 30 }}>
          {confirmPasswordError ? (
            <Text style={{ color: "red", paddingVertical: 5 }}>
              {confirmPasswordError}
            </Text>
          ) : null}
        </View>
        <View style={{ height: 30 }}></View>
      </View>
      <Yellow text="Sign Up" onPress={handleSubmit} />
      <Text
        style={{ color: "white", textAlign: "center", paddingVertical: 15 }}
      >
        By signing up I accept{" "}
        <Text style={{ color: "#F2B916" }}>Terms of use</Text> and{" "}
        <Text style={{ color: "#F2B916" }}>privacy policy</Text>
      </Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "#26282C",
  },
});
