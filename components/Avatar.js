import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Avatar({ source, initials }) {
  return (
    <View style={styles.container}>
      {source ? (
        <Image source={source} style={styles.image} />
      ) : (
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  initialsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 