import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      const stored = await AsyncStorage.getItem('userAccount');
      if (stored) setUser(JSON.parse(stored));
    };
    load();
  }, []);

  const handleLogout = async () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{user?.fullName || 'User'}</Text>
        <Text style={styles.email}>{user?.email || 'example@email.com'}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
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
