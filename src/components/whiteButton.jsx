import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text, View} from 'react-native';

export default function WhiteButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: 160,
    height: 50,
    cursor: 'pointer',
  },
  textButton: {
    color: '#999999',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'right',
  },
});
