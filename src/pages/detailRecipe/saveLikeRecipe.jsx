import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import cardPhoto from '../../../public/images/cardPopular.png';

const SaveRecipe = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 50,
          marginVertical: 50,
        }}>
        <View>
          <Text style={{fontSize: 30, color: '#F1CD31', fontWeight: 500}}>
            Save & Like
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('detailIngredients')}
        style={{
          marginHorizontal: 17,
          backgroundColor: '#00E092',
          borderRadius: 20,
          marginVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 120,
          }}>
          <View
            style={{
              width: 120,
              height: 120,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={cardPhoto}
              style={{width: 100, height: 100, borderRadius: 20}}
            />
          </View>
          <View
            style={{
              width: 150,
              height: 120,
              paddingVertical: 10,
              paddingHorizontal: 10,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{fontSize: 22, fontWeight: '500'}}>Margherita</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>Spicy</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="user" style={{fontSize: 20, color: '#EFC81A'}} />
              <Text style={{fontSize: 16, fontWeight: '800', marginLeft: 10}}>
                Mareta
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 130,
              height: 120,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={''}
              style={{
                backgroundColor: '#EFC81A',
                width: 55,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                cursor: 'pointer',
              }}>
              <Icon
                name="bookmark"
                style={{fontSize: 25, color: 'white', fontSize: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={''}
              style={{
                backgroundColor: 'white',
                borderColor: '#EEC302',
                width: 55,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                cursor: 'pointer',
              }}>
              <Icon
                name="thumbs-up"
                style={{fontSize: 25, color: '#EFC81A', fontSize: 35}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('detailIngredients')}
        style={{
          marginHorizontal: 17,
          backgroundColor: '#00E092',
          borderRadius: 20,
          marginVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 120,
          }}>
          <View
            style={{
              width: 120,
              height: 120,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={cardPhoto}
              style={{width: 100, height: 100, borderRadius: 20}}
            />
          </View>
          <View
            style={{
              width: 150,
              height: 120,
              paddingVertical: 10,
              paddingHorizontal: 10,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{fontSize: 22, fontWeight: '500'}}>Margherita</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>Spicy</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="user" style={{fontSize: 20, color: '#EFC81A'}} />
              <Text style={{fontSize: 16, fontWeight: '800', marginLeft: 10}}>
                Mareta
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 130,
              height: 120,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={''}
              style={{
                backgroundColor: '#EFC81A',
                width: 55,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                cursor: 'pointer',
              }}>
              <Icon
                name="bookmark"
                style={{fontSize: 25, color: 'white', fontSize: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={''}
              style={{
                backgroundColor: 'white',
                borderColor: '#EEC302',
                width: 55,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                cursor: 'pointer',
              }}>
              <Icon
                name="thumbs-up"
                style={{fontSize: 25, color: '#EFC81A', fontSize: 35}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SaveRecipe;
