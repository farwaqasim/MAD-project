import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateMeetingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Meeting</Text>
      <Text style={styles.subtitle}>Start a new session instantly</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LiveMeeting')}>
        <Text style={styles.buttonText}>Start Meeting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' },
  title:{ fontSize:28, fontWeight:'bold' },
  subtitle:{ marginTop:10, color:'#555' },
  button:{ marginTop:25, backgroundColor:'#0D47A1', padding:15, borderRadius:10, width:'70%', alignItems:'center' },
  buttonText:{ color:'#fff', fontWeight:'bold' }
});
