import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function LandingButton({text, onPress, onPush}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <View
          style={{
            width: 150,
            alignItems: 'flex-end',
          }}>
          <Text style={styles.textButton}>{text}</Text>
        </View>
        <View style={{width: 50, alignItems: 'center'}}>
          <Icon name="chevron-right" style={{fontSize: 20, color: 'white'}} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#00E092',
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textButton: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
});
