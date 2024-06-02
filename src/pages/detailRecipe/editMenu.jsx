/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {EditRecipe, GetRecipeDetail} from '../../redux/action/menu';

const EditMenu = ({route, navigation}) => {
  const dispatch = useDispatch();
  const recipeDetail = useSelector(state => state?.recipeDetail?.data);
  const recipeId = recipeDetail?.id;
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

  const photoData = photo
    ? {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type,
      }
    : recipeDetail?.photo
    ? {
        uri: recipeDetail?.photo,
        name: 'photo',
        type: 'image/jpeg',
      }
    : null;

  useEffect(() => {
    dispatch(GetRecipeDetail(route?.params.id));
  }, []);

  const updateData = async () => {
    let bodyData = new FormData();
    bodyData.append('title', inputData.title);
    bodyData.append('ingredient', inputData.ingredient);
    bodyData.append('category_id', inputData.category_id);
    bodyData.append('photo', photoData);
    dispatch(EditRecipe(recipeId, bodyData, tokenUser, navigation));
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
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight: '500', color: '#EFC81A'}}>
          Edit Recipe
        </Text>
      </View>
      <View style={{marginTop: 50}}>
        <View style={styles.inputContainer}>
          <Icon name="book-open" style={{fontSize: 30, color: '#8B8A8F'}} />
          <TextInput
            style={{
              width: 320,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}
            placeholder={recipeDetail?.title}
            onChangeText={newValue => onChange('title', newValue)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{
              width: 400,
              fontSize: 20,
              paddingLeft: 10,
            }}
            onChangeText={newValue => onChange('ingredient', newValue)}
            placeholder={recipeDetail?.ingredient}
          />
        </View>
        <Button title="Add photo" onPress={() => cameraLaunch()} />
        {photo ? (
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <Image
              style={{height: 100, width: 100}}
              source={{uri: photo.uri}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  width: '70%',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: '#464646',
                }}>
                {photo.fileName.length > 15
                  ? photo.fileName.substring(0, 15) + '...'
                  : photo.fileName}
              </Text>
              <TouchableOpacity
                onPress={deletePhoto}
                style={{
                  height: 30,
                  width: 40,
                  backgroundColor: '#ee5e5e',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Ionicons name="close-outline" color="white" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 20,
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
            width: '85%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableHighlight
            onPress={() => galleryLaunch()}
            underlayColor={'#b89b1a'}
            style={{
              height: 50,
              width: 140,
              backgroundColor: '#EFC81A',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Ionicons name="image-outline" color="white" size={20} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: 'white',
                  marginTop: 3,
                }}>
                Gallery
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => cameraLaunch()}
            underlayColor={'#b89b1a'}
            style={{
              height: 50,
              width: 140,
              backgroundColor: '#EFC81A',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '65%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Ionicons name="camera-outline" color="white" size={20} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: 'white',
                  marginTop: 3,
                }}>
                Camera
              </Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{}}>
          <Picker
            selectedValue={selectCategory}
            style={{height: 20, color: 'black'}}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => {
              onChange('category_id', itemValue);
              setSelectCategory(itemValue);
            }}>
            <Picker.Item
              label="Select category recipe"
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
            style={styles.PostButton}
            onPress={() => updateData()}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: 'white',
                backgroundColor: 'red',
              }}>
              Update Recipe
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
  },
});

export default EditMenu;
