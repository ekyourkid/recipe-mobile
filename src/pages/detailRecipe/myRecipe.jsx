import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import cardPhoto from '../../../public/images/cardPopular.png';
import BlueButton from '../../components/blueButton';
import RedButton from '../../components/redButton';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const base_url = 'https://recipe-be-ekyourkids-projects.vercel.app/recipes';

const MyRecipe = () => {
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

  const navigation = useNavigation();
  const navigateToDetail = id => {
    navigation.navigate('detailIngredients', {id});
  };

  return (
    <ScrollView style={{backgroundColor: '#dcdde1', height: 1000}}>
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
            My Recipes
          </Text>
        </View>
      </View>
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => navigateToDetail(item.id)}
            style={{
              marginHorizontasl: 17,
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
                  source={{uri: item?.photo}}
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
                <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>
                  {item?.title}
                </Text>
                <Text style={{fontSize: 20, fontWeight: '400', color: 'black'}}>
                  {item?.category_id}
                </Text>
              </View>
              <View
                style={{
                  width: 130,
                  height: 120,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <BlueButton
                  text={'Edit'}
                  onPress={() => navigation.navigate('')}
                />
                <RedButton
                  text={'Delete'}
                  onPress={() => navigation.navigate('')}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default MyRecipe;
