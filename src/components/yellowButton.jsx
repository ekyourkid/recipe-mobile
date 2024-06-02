import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text, View} from 'react-native';

export default function YellowButton({text, onPress, isDisabled}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
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
    backgroundColor: '#EFC81A',
    width: 400,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
