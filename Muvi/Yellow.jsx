import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useState } from "react";

export default function Yellow({ text, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 40,
    backgroundColor: "#F2B916",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 7,
    alignSelf: "center",
  },
  text: {
    fontSize: 17,
    fontWeight: "400",
  },
});
