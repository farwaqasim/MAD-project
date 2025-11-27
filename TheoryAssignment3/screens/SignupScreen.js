import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      // Save user data in AsyncStorage
      await AsyncStorage.setItem('userAccount', JSON.stringify({ fullName, email, password }));
      Alert.alert('Success', 'Account created! You can now login.');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#BBDEFB', justifyContent:'center', alignItems:'center', padding:20 },
  title:{ fontSize:26, fontWeight:'bold', marginBottom:20 },
  input:{ width:'100%', backgroundColor:'#fff', borderRadius:8, padding:12, marginTop:10 },
  button:{ backgroundColor:'#0D47A1', width:'100%', padding:12, borderRadius:8, marginTop:20, alignItems:'center' },
  buttonText:{ color:'#fff', fontWeight:'bold' },
  link:{ marginTop:15, color:'#0D47A1' }
});

