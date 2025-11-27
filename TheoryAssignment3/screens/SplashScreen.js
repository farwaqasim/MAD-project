import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1800);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ConvoBridge</Text>
      <Text style={styles.tagline}>Breaking Language Barriers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 500,   // adjust width
    height: 500,  // adjust height
    marginBottom: 300,
  },
  logo: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
  },
  tagline: {
    marginTop: 10,
    color: '#BBDEFB',
    fontSize: 14,
  },
});
