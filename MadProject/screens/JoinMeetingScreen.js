import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { translateText } from '../api/translateApi';

const test = async () => {
  const result = await translateText('hello');
  console.log(result); 
};

test();


export default function JoinMeetingScreen({ navigation }) {
  const [meetingId, setMeetingId] = useState('');

  const handleJoin = () => {
    if (!meetingId.trim()) {
      Alert.alert('Enter ID', 'Please enter a meeting ID to join');
      return;
    }
    
    navigation.navigate('LiveMeeting', { meetingId: meetingId.trim() });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Meeting</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Meeting ID"
        placeholderTextColor="#ccc"
        value={meetingId}
        onChangeText={setMeetingId}
      />

      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0D47A1', justifyContent:'center', alignItems:'center', padding:20 },
  title:{ fontSize:28, fontWeight:'bold', color:'#fff', marginBottom:20 },
  input:{ width:'100%', backgroundColor:'#1E88E5', borderRadius:8, padding:12, color:'#fff' },
  button:{ marginTop:20, backgroundColor:'#BBDEFB', padding:12, borderRadius:8, width:'100%', alignItems:'center' },
  buttonText:{ color:'#0D47A1', fontWeight:'bold' }
});
