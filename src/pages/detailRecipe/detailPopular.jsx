import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailPopular = ({navigation}) => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      let response = await axios.get(
        'https://recipe-be-ekyourkids-projects.vercel.app/recipes',
      );
      if (response?.data?.data) {
        setData(response.data.data);
      }
    } catch (err) {
      console.log(err, 'error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginVertical: 50,
          width: 300,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#F8F8FA',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Icon
            name="chevron-left"
            style={{fontSize: 25, color: 'black', fontSize: 35}}
          />
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 30, color: '#F1CD31', fontWeight: 500}}>
            Popular Menu
          </Text>
        </View>
      </View>
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('DetailIngredients', {id: item.id})
            }
            style={{
              marginHorizontal: 17,
              backgroundColor: 'white',
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
                  source={{uri: item.photo}}
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
                <Text style={{fontSize: 22, fontWeight: '500'}}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 10, fontWeight: '400'}}>{item.id}</Text>
                <Text style={{fontSize: 16, fontWeight: '800'}}>
                  {item.title}
                </Text>
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
        );
      })}
    </ScrollView>
  );
};

export default DetailPopular;
