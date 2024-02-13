import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.navigation}>
      <Text style={styles.text}>Todo</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.body}>
        <Text style={styles.listHead}>To do List items</Text>
        <Text style={styles.list}>1  Cleanning</Text>
        <Text style={styles.list}>1  Cleanning</Text>
        <Text style={styles.list}>1  Cleanning</Text>
        <Text style={styles.list}>1  Cleanning</Text>

      </View>
      <View style={styles.bottom}>
      <View style={styles.bigInput}>
        <TextInput style={styles.TextInput} placeholder='Enter new todo item'/>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>Add Todo</Text>
          </TouchableOpacity>
          </View>
    </View>
    </ScrollView>
    
  );
}

