import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import fotoLogin from '../../../public/images/walpaperLogin.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import YellowButton from '../../components/yellowButton';
import WhiteButton from '../../components/whiteButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {authLogin} from '../../../src/redux/action/auth';

const AuthLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const onChange = (key, value) => {
    setInputData({...inputData, [key]: value});
  };

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Image
        source={fotoLogin}
        style={{
          width: 370,
          height: 300,
          objectFit: 'cover',
        }}
      />
      <View style={styles.textContainer}>
        <Text style={{fontSize: 25, fontWeight: '600', color: '#EFC81A'}}>
          Welcome !
        </Text>
        <Text style={{fontSize: 15, color: '#C4C4C4'}}>
          Log in to your exiting account.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            height: 60,
          }}>
          <Icon name="user" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput
            style={styles.input}
            placeholder="examplexxx@gmail.com"
            name="email"
            onChangeText={newValue => onChange('email', newValue)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            borderRadius: 10,
            paddingLeft: 20,
            height: 60,
          }}>
          <Icon name="lock" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput
            style={{
              width: 220,
              color: 'black',
              borderRadius: 5,
              paddingHorizontal: 15,
              height: 40,
            }}
            placeholder="password"
            secureTextEntry={!showPassword}
            onChangeText={newValue => onChange('password', newValue)}
            name="password"
          />
          <TouchableOpacity onPress={PasswordVisibility}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              color="#EFC81A"
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 27}}>
        <WhiteButton text={'Forgot Password ?'} />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <YellowButton
          text={'login'}
          onPress={() => dispatch(authLogin(inputData))}
          isDisabled={!inputData.email || !inputData.password}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 30, fontWeight: 500}}>
            Don't have an account?
          </Text>
          <Text
            style={{
              marginTop: 30,
              fontWeight: 500,
              color: '#EFC81A',
              paddingLeft: 5,
            }}
            onPress={() => navigation.navigate('Regist')}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'screen',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: 150,
    marginTop: 50,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  input: {
    width: 300,
    color: 'black',
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 40,
  },
  buttonForgot: {
    backgroundColor: 'white',
    fontSize: 20,
    justifyContent: 'space-evenly',
  },
});
export default AuthLogin;
