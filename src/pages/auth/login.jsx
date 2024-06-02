import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import fotoLogin from '../../../public/images/walpaperLogin.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import YellowButton from '../../components/yellowButton';
import WhiteButton from '../../components/whiteButton';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {authLogin} from '../../../src/redux/action/auth';
// const base_url = 'https://recipe-be-ekyourkids-projects.vercel.app';
// let headers = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
// };

const AuthLogin = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const auth = useSelector(state => state?.auth);
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

  // const authLogin = async () => {
  //   if (!inputData.email || !inputData.password) {
  //     return;
  //   }
  //   try {
  //     let formData = new FormData();
  //     formData.append('email', inputData.email);
  //     formData.append('password', inputData.password);

  //     let result = await axios({
  //       method: 'post',
  //       url: 'https://recipe-be-ekyourkids-projects.vercel.app/users/login',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       data: inputData,
  //     });

  //     await AsyncStorage.setItem('token', result?.data?.access_token);
  //     await AsyncStorage.setItem('userId', result?.data?.data?.id);

  //     if (result?.status === 201 || result?.status === 200) {
  //       navigation.navigate('home');
  //     }
  //     console.log(result.status, 'ini result');
  //   } catch (err) {
  //     console.log(
  //       err,
  //       'An error occurred, please double check your email and password',
  //     );
  //   }
  // };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <Image
        source={fotoLogin}
        style={{width: 'full', height: 300, objectFit: 'cover'}}
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
            justifyContent: 'center',
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
            justifyContent: 'center',
            borderRadius: 10,
            height: 60,
          }}>
          <Icon name="lock" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
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
        <Text style={{marginTop: 30, fontWeight: 500}}>
          Don't have an account? Sign Up
        </Text>
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
    color: '#C4C4C4',
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
