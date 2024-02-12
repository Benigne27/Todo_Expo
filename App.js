import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
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
      <View style={{backgroundColor:'cyan'}}>
        <TextInput style={styles.TextInput} placeholder='Enter new todo item'/>
      </View>
    </View>
    
  );
}

