
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('userAccount');
      if (!storedUser) {
        Alert.alert('Error', 'Please create an account first');
        return;
      }

      const user = JSON.parse(storedUser);

      if (email === user.email && password === user.password) {
        navigation.replace('Dashboard');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome Back</Text>

      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

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
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20
  },
  card:{
    width:'85%',
    backgroundColor:'#fff',
    borderRadius:10,
    padding:20,
    elevation:5
  },
  input:{
    borderWidth:1,
    borderColor:'#90CAF9',
    borderRadius:8,
    padding:10,
    marginTop:10
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
    fontWeight:'bold'
  },
  link:{
    marginTop:15,
    textAlign:'center',
    color:'#0D47A1'
  }
});
