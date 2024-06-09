import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  PermissionsAndroid,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {postMenu} from '../../redux/action/menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddRecipe = ({navigation}) => {
  const dispatch = useDispatch();
  const tokenUser = useSelector(
    state => state?.authReducers?.data?.access_token,
  );
  const [selectCategory, setSelectCategory] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    title: '',
    ingredient: '',
    category_id: '',
  });

  const postData = async () => {
    let bodyData = new FormData();
    bodyData.append('title', inputData.title);
    bodyData.append('ingredient', inputData.ingredient);
    bodyData.append('category_id', inputData.category_id);
    bodyData.append('photo', {
      uri: photo.uri,
      name: photo.fileName,
      type: photo.type,
    });
    dispatch(postMenu(bodyData, tokenUser, navigation));
  };

  const onChange = (key, value) => {
    setInputData({...inputData, [key]: value});
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

  const deletePhoto = () => {
    setPhoto(null);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View
        style={{
          marginTop: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight: '500', color: '#EFC81A'}}>
          Add Your Recipe
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <View style={styles.inputContainer}>
          <Icon name="book-open" style={{fontSize: 30, color: '#8B8A8F'}} />
          <TextInput
            style={{
              width: 220,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}
            placeholder="Title"
            onChangeText={newValue => onChange('title', newValue)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{
              width: 300,
              fontSize: 20,
              paddingLeft: 10,
            }}
            onChangeText={newValue => onChange('ingredient', newValue)}
            placeholder="Ingredients"
          />
        </View>
        {photo ? (
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
              position: 'relative',
              height: 120,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: 120,
                zIndex: 1,
                position: 'absolute',
                right: 100,
              }}>
              <TouchableOpacity
                onPress={deletePhoto}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#ee5e5e',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Ionicons name="close-outline" color="white" size={20} />
              </TouchableOpacity>
            </View>
            <Image
              style={{
                height: 100,
                width: 100,
                zIndex: 0,
                top: 10,
                borderRadius: 10,
              }}
              source={{uri: photo.uri}}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
            }}>
            <Ionicons
              name="image-outline"
              color="#aaaaaa"
              size={25}
              style={{marginRight: 15}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: '#aaaaaa',
              }}>
              Add Photo
            </Text>
          </View>
        )}

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableHighlight
            onPress={() => galleryLaunch()}
            underlayColor={'#74E291'}
            style={{
              height: 50,
              width: 140,
              backgroundColor: '#59B4C3',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Ionicons name="image-outline" color="white" size={25} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  color: 'white',
                  marginTop: 3,
                }}>
                Gallery
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => cameraLaunch()}
            underlayColor={'#74E291'}
            style={{
              height: 50,
              width: 140,
              backgroundColor: '#59B4C3',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Ionicons name="camera-outline" color="white" size={25} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  color: 'white',
                  marginTop: 3,
                }}>
                Camera
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View
          underlayColor={'#74E291'}
          style={{
            height: 40,
            width: 'full',
            backgroundColor: '#59B4C3',
            borderRadius: 10,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Picker
            selectedValue={selectCategory}
            style={{
              height: 20,
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: 'white',
            }}
            dropdownIconColor="white"
            onValueChange={(itemValue, itemIndex) => {
              onChange('category_id', itemValue);
              setSelectCategory(itemValue);
            }}>
            <Picker.Item
              label="Select Category Recipes"
              value={null}
              style={{color: '#aaaaaa'}}
            />
            <Picker.Item label="Dessert" value="1" />
            <Picker.Item label="Main Course" value="2" />
            <Picker.Item label="Appetizer" value="3" />
          </Picker>
        </View>
        <View style={{margin: 5, marginTop: 50}}>
          <TouchableHighlight
            underlayColor={'#b89b1a'}
            onPress={() => postData()}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: 700,
                color: 'white',
                backgroundColor: '#EFC81A',
                borderRadius: 5,
                textAlign: 'center',
                padding: 15,
              }}>
              CREATE RECIPE
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 900,
    backgroundColor: '#dcdde1',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#52006A',
  },
});

export default AddRecipe;
