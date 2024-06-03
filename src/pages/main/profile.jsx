import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import userPhoto from '../../../public/images/userPhoto.png';
import {useDispatch, useSelector} from 'react-redux';
import {authLogout} from '../../redux/action/auth';
import {getUserById} from '../../redux/action/user';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state?.recipeDetail?.data?.users_id);
  const user = useSelector(state => state?.userReducers?.data);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, []);

  return (
    <View style={{backgroundColor: 'red', alignItems: 'center'}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View
        style={{
          backgroundColor: '#EEC302',
          width: 450,
          height: 500,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginLeft: 30,
            width: 200,
            height: 150,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={user?.photo_profile} />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 700,
              color: '#FFFFFF',
              marginTop: 15,
            }}>
            {user?.username}
          </Text>
        </View>
      </View>
      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          top: 440,
          backgroundColor: '#dcdde1',
          width: 420,
          height: 530,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        }}>
        <TouchableOpacity
          onPress={''}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Icon name="user" style={{fontSize: 28, color: '#EEC302'}} />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
              marginRight: 170,
            }}>
            Edit Profile
          </Text>
          <Icon name="chevron-right" style={{fontSize: 28, color: '#8C8C8C'}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('myRecipe')}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Icon name="award" style={{fontSize: 28, color: '#EEC302'}} />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
              marginRight: 170,
            }}>
            My Recipe
          </Text>
          <Icon name="chevron-right" style={{fontSize: 28, color: '#8C8C8C'}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('saveRecipe')}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Icon name="bookmark" style={{fontSize: 28, color: '#EEC302'}} />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
              marginRight: 145,
            }}>
            Saved Recipe
          </Text>
          <Icon name="chevron-right" style={{fontSize: 28, color: '#8C8C8C'}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('saveRecipe')}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Icon name="thumbs-up" style={{fontSize: 28, color: '#EEC302'}} />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
              marginRight: 170,
            }}>
            Edit Profile
          </Text>
          <Icon name="chevron-right" style={{fontSize: 28, color: '#8C8C8C'}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(authLogout())}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Ionicons name="exit-outline" color="#c91111" size={28} />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
              marginRight: 200,
            }}>
            Logout
          </Text>
          <Icon name="chevron-right" style={{fontSize: 28, color: '#8C8C8C'}} />
        </TouchableOpacity>
        {/* <View style={{marginVertical: 2}}>
          <TouchableOpacity onPress={() => dispatch(authLogout())}>
            <View
              style={{
                height: 60,
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name="exit-outline" color="#c91111" size={25} />
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 15,
                    color: '#c91111',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Logout
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                color="#c91111"
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default Profile;
