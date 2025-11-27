import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SummaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meeting Summary</Text>

      <View style={styles.card}>
        <Text style={styles.text}>• Key points displayed here</Text>
        <Text style={styles.text}>• Action items</Text>
        <Text style={styles.text}>• Participants notes</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Dashboard')}>
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#E3F2FD', justifyContent:'center', alignItems:'center', padding:20 },
  title:{ fontSize:28, fontWeight:'bold', marginBottom:20 },
  card:{ width:'100%', backgroundColor:'#fff', padding:20, borderRadius:10, elevation:5 },
  text:{ marginTop:5, fontSize:16, color:'#333' },
  button:{ marginTop:25, backgroundColor:'#0D47A1', padding:15, borderRadius:10, width:'100%', alignItems:'center' },
  buttonText:{ color:'#fff', fontWeight:'bold' }
});