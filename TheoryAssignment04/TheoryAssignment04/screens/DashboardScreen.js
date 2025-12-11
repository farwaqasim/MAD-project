import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('CreateMeeting')}>
        <Text style={styles.tileText}>Create Meeting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('JoinMeeting')}>
        <Text style={styles.tileText}>Join Meeting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.tileText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#E3F2FD', alignItems:'center', paddingTop:80 },
  title:{ fontSize:30, fontWeight:'bold', marginBottom:30 },
  tile:{ width:'85%', backgroundColor:'#0D47A1', padding:20, borderRadius:10, marginTop:15 },
  tileText:{ color:'#fff', fontSize:18, fontWeight:'bold', textAlign:'center' }
});
