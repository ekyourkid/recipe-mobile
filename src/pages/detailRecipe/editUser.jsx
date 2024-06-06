/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  ScrollView,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {updateUser} from '../../redux/action/user';
import * as ImagePicker from 'react-native-image-picker';

const EditUser = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.authReducers?.data?.data);
  const userId = userData?.id;
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    username: '',
    address: '',
    email: '',
    password: '',
  });

  const photoData = photo
    ? {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type,
      }
    : userData?.photo_profile
    ? {
        uri: userData?.photo_profile,
        name: 'photo',
        type: 'image/jpg',
      }
    : null;

  const updateUsers = () => {
    let bodyData = new FormData();
    bodyData.append('username', inputData.username);
    bodyData.append('address', inputData.address);
    bodyData.append('email', inputData.email);
    bodyData.append('password', inputData.password);
    bodyData.append('photo', photoData);

    dispatch(updateUser(userId, bodyData, navigation));
  };

  const onChange = (key, value) => {
    setInputData({...inputData, [key]: value});
  };

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'this app need camera permission',
          buttonPositive: 'Oke',
          buttonNegative: 'Decline',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('success camera permission');
      } else {
        console.log('failed camera permission');
        console.log(PermissionsAndroid.RESULTS.GRANTED);
      }
    } catch (err) {
      console.log('failed camera permission');
      console.log(PermissionsAndroid.RESULTS.GRANTED);
    }
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response camera ', res);
      if (res.didCancel) {
        console.log('user cancel camera');
      } else if (res.error) {
        console.log('camera error', res.errorMessage);
      } else {
        console.log('camera success');
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      console.log('response gallery ', res);
      if (res.didCancel) {
        console.log('user cancel gallery');
      } else if (res.error) {
        console.log('gallery error', res.errorMessage);
      } else {
        console.log('gallery success');
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  return (
    <ScrollView style={{backgroundColor: 'yellow', flex: 1}}>
      <View>
        {/* IMAGE FORM */}
        <View
          style={{
            height: 400,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {photo ? (
            <Image source={{uri: photo.uri}} />
          ) : (
            <Image source={require('../../../public/images/userPhoto.png')} />
          )}
          <TouchableOpacity
            onPress={() => galleryLaunch()}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              paddingTop: 10,
            }}>
            <Ionicons name="create-outline" color="black" size={22} />
            <Text style={{fontSize: 22, color: 'black'}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#D1D8C5',
            width: 'full',
            height: 500,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'center',
          }}>
          {/* Form Username */}
          <View
            style={{
              width: 300,
              marginHorizontal: 'auto',
              paddingVertical: 20,
              position: 'relative',
            }}>
            <Icon
              name="user"
              style={{
                fontSize: 25,
                color: '#EFC81A',
                position: 'absolute',
                zIndex: 1,
                top: 28,
                left: 15,
              }}
            />
            <TextInput
              onChangeText={newValue => onChange('username', newValue)}
              placeholder={userData?.username}
              style={{
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
                flexDirection: 'row',
                height: 45,
                borderRadius: 15,
                paddingLeft: 50,
                fontSize: 15,
              }}
            />
          </View>
          {/* Form Address */}
          <View
            style={{
              width: 300,
              marginHorizontal: 'auto',
              paddingVertical: 20,
              position: 'relative',
            }}>
            <Ionicons
              name="location-outline"
              color="#EFC81A"
              size={25}
              style={{
                fontSize: 25,
                color: '#EFC81A',
                position: 'absolute',
                zIndex: 1,
                top: 28,
                left: 15,
              }}
            />
            <TextInput
              onChangeText={newValue => onChange('address', newValue)}
              placeholder={userData?.address}
              style={{
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
                flexDirection: 'row',
                height: 45,
                borderRadius: 15,
                paddingLeft: 50,
                fontSize: 15,
              }}
            />
          </View>
          {/* Form Email */}
          <View
            style={{
              width: 300,
              marginHorizontal: 'auto',
              paddingVertical: 20,
              position: 'relative',
            }}>
            <Ionicons
              name="mail-outline"
              color="#EFC81A"
              size={25}
              style={{
                fontSize: 25,
                color: '#EFC81A',
                position: 'absolute',
                zIndex: 1,
                top: 28,
                left: 15,
              }}
            />
            <TextInput
              onChangeText={newValue => onChange('email', newValue)}
              placeholder={userData?.email}
              style={{
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
                flexDirection: 'row',
                height: 45,
                borderRadius: 15,
                paddingLeft: 50,
                fontSize: 15,
              }}
            />
          </View>
          {/* Form Password */}
          <View
            style={{
              width: 300,
              marginHorizontal: 'auto',
              paddingVertical: 20,
              position: 'relative',
            }}>
            <Ionicons
              name="lock-closed-outline"
              color="#EFC81A"
              size={25}
              style={{
                fontSize: 25,
                color: '#EFC81A',
                position: 'absolute',
                zIndex: 1,
                top: 30,
                left: 15,
              }}
            />
            <TextInput
              onChangeText={newValue => onChange('password', newValue)}
              secureTextEntry={!showPassword}
              placeholder="New Password"
              style={{
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
                flexDirection: 'row',
                height: 45,
                borderRadius: 15,
                paddingLeft: 50,
                fontSize: 15,
              }}
            />
            <TouchableOpacity
              onPress={PasswordVisibility}
              style={{position: 'absolute', top: 30, right: 15}}>
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                color="#EFC81A"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            underlayColor={'#b89b1a'}
            onPress={() => updateUsers()}
            style={{
              width: 400,
              borderRadius: 10,
              marginHorizontal: 'auto',
              backgroundColor: '#EEC302',
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
              UPDATE USER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default EditUser;
