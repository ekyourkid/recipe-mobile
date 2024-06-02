import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function cardNewRecipes({source, onPress, text}) {
  return (
    <View onPress={onPress}>
      <View style={styles.coverCard}>
        <Image source={source} />
      </View>
      <Text>{text}</Text>
    </View>
  );
}
