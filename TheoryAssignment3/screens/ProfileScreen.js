import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>Pakeeza Gul</Text>
        <Text style={styles.email}>Pak12@email.com</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#BBDEFB', justifyContent:'center', alignItems:'center', padding:20 },
  card:{ backgroundColor:'#fff', width:'100%', padding:20, borderRadius:10, alignItems:'center', elevation:5 },
  name:{ fontSize:24, fontWeight:'bold' },
  email:{ marginTop:5, color:'#555' },
  button:{ marginTop:25, backgroundColor:'#D32F2F', padding:15, borderRadius:10, width:'100%', alignItems:'center' },
  buttonText:{ color:'#fff', fontWeight:'bold' }
});