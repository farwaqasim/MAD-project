import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Keyboard, Alert } from 'react-native';
import { translateText } from '../api/translateApi';

export default function LiveMeetingScreen({ navigation, route }) {
  const [inputText, setInputText] = useState('');
  const [translated, setTranslated] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      Alert.alert('Enter text', 'Please enter text to translate');
      return;
    }

    setLoading(true);
    Keyboard.dismiss();

    const result = await translateText(inputText.trim(), 'zh'); 
    setLoading(false);

    if (result === null) {
      Alert.alert('Translation Error', 'Could not translate text. Check API key or network.');
      return;
    }

    setTranslated(result);
    setHistory(prev => [{ id: Date.now().toString(), src: inputText, dst: result }, ...prev]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live Translation (EN → 中文)</Text>

      <TextInput
        style={styles.input}
        placeholder="Type message in English..."
        value={inputText}
        onChangeText={setInputText}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleTranslate} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Translating...' : 'Translate to Chinese'}</Text>
      </TouchableOpacity>

      {translated ? (
        <View style={styles.outputBox}>
          <Text style={styles.outputLabel}>Translated (中文):</Text>
          <Text style={styles.outputText}>{translated}</Text>
        </View>
      ) : null}

      <Text style={styles.historyLabel}>Recent translations</Text>
      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.srcText}>EN: {item.src}</Text>
            <Text style={styles.dstText}>ZH: {item.dst}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ color:'#777' }}>No translations yet</Text>}
      />

      <TouchableOpacity style={styles.endButton} onPress={() => navigation.navigate('Summary')}>
        <Text style={styles.endText}>End Meeting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#fff', padding:16 },
  header:{ fontSize:20, fontWeight:'700', marginBottom:10 },
  input:{ minHeight:80, borderWidth:1, borderColor:'#ddd', borderRadius:8, padding:10, marginBottom:10, textAlignVertical:'top' },
  button:{ backgroundColor:'#0D47A1', padding:12, borderRadius:8, alignItems:'center', marginBottom:12 },
  buttonText:{ color:'#fff', fontWeight:'700' },
  outputBox:{ backgroundColor:'#E3F2FD', padding:12, borderRadius:8, marginBottom:10 },
  outputLabel:{ fontWeight:'700', marginBottom:6 },
  outputText:{ fontSize:16 },
  historyLabel:{ marginTop:8, fontWeight:'700' },
  historyItem:{ backgroundColor:'#F5F5F5', padding:10, borderRadius:8, marginTop:8 },
  srcText:{ color:'#333' },
  dstText:{ color:'#0D47A1', marginTop:6 },
  endButton:{ marginTop:12, backgroundColor:'#D32F2F', padding:12, borderRadius:8, alignItems:'center' },
  endText:{ color:'#fff', fontWeight:'700' }
});
