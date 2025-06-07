import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function InputBar({ value, onChangeText, onSend, onMic, style }) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Ask me anything"
        placeholderTextColor="#9CA3AF"
        multiline
      />
      <TouchableOpacity onPress={onMic} style={styles.micButton}>
        <FontAwesome name="microphone" size={24} color="#4B5563" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSend} style={styles.sendButton}>
        <FontAwesome name="arrow-up" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F9FAFB',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  micButton: {
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#667EEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 