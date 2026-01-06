import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const stored = await AsyncStorage.getItem('userAccount');
      if (!stored) {
        Alert.alert('Error', 'Please create an account first');
        return;
      }
      const user = JSON.parse(stored);
      if (email.trim() === user.email && password === user.password) {
        navigation.replace('Dashboard');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome Back</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E3F2FD',
    justifyContent:'center',
    alignItems:'center',
    padding: 20
  },
  logoImage: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  title:{
    fontSize:26,
    fontWeight:'700',
    marginBottom:12
  },
  card:{
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:12,
    padding:20,
    elevation:3
  },
  input:{
    borderWidth:1,
    borderColor:'#90CAF9',
    borderRadius:8,
    padding:10,
    marginTop:10,
    color: '#111'
  },
  button:{
    backgroundColor:'#0D47A1',
    padding:12,
    borderRadius:8,
    marginTop:20,
    alignItems:'center'
  },
  buttonText:{
    color:'#fff',
    fontWeight:'700'
  },
  link:{
    marginTop:15,
    textAlign:'center',
    color:'#0D47A1'
  }
});
