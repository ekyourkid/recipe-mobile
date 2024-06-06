import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import fotoLogin from '../../../public/images/walpaperLogin.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import YellowButton from '../../components/yellowButton';
import WhiteButton from '../../components/whiteButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {authRegist} from '../../redux/action/auth';

const AuthRegist = ({navigation}) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    username: '',
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
            paddingLeft: 20,
            borderRadius: 10,
            height: 60,
          }}>
          <Icon name="user" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput
            style={styles.input}
            placeholder="my name"
            onChangeText={newValue => onChange('username', newValue)}
          />
        </View>
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
            onChangeText={newValue => onChange('email', newValue)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            height: 60,
          }}>
          <Icon name="lock" style={{fontSize: 25, color: '#EFC81A'}} />
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            placeholder="Password"
            onChangeText={newValue => onChange('password', newValue)}
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
          text={'regsiter'}
          onPress={() => dispatch(authRegist(inputData))}
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
            onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </View>
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
    color: 'black',
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
