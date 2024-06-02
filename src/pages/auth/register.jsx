import React from 'react';
import {Image, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import fotoLogin from '../../../public/images/walpaperLogin.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import YellowButton from '../../components/yellowButton';
import WhiteButton from '../../components/whiteButton';

const AuthRegist = () => {
  return (
    <View style={styles.container}>
      <Image
        source={fotoLogin}
        style={{width: 'full', height: 300, objectFit: 'cover'}}
      />
      <View style={styles.textContainer}>
        <Text style={{fontSize: 25, fontWeight: '600', color: '#EFC81A'}}>
          Welcome !
        </Text>
        <Text style={{fontSize: 15, color: '#C4C4C4'}}>
          Register to Recipe App
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            height: 60,
          }}>
          <Icon name="user" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput style={styles.input} placeholder="examplexxx@gmail.com" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            height: 60,
          }}>
          <Icon name="user" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            height: 60,
          }}>
          <Icon name="lock" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 27}}>
        <WhiteButton text={'Forgot Password ?'} />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <YellowButton text={'login'} />
        <Text style={{marginTop: 30, fontWeight: 500}}>
          have an account? Sign In
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'screen',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: 200,
    marginTop: 50,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  input: {
    width: 300,
    color: '#C4C4C4',
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 40,
  },
  buttonForgot: {
    backgroundColor: 'white',
    fontSize: 20,
  },
});
export default AuthRegist;
