import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LiveMeetingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.videoBox}>
        <Text style={styles.videoText}>Video Stream</Text>
      </View>

      <TouchableOpacity style={styles.endButton} onPress={() => navigation.navigate('Summary')}>
        <Text style={styles.endText}>End Meeting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center' },
  videoBox:{ width:'90%', height:'70%', backgroundColor:'#333', borderRadius:10, justifyContent:'center', alignItems:'center' },
  videoText:{ color:'#aaa', fontSize:18 },
  endButton:{ backgroundColor:'#D32F2F', padding:15, borderRadius:10, marginTop:20 },
  endText:{ color:'#fff', fontWeight:'bold' }
});