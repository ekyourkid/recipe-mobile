import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {GetRecipeDetail} from '../../redux/action/menu';
import {useFocusEffect} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// const base_url = 'https://recipe-be-ekyourkids-projects.vercel.app';

const DetailIngredients = ({route, navigation}) => {
  const dispatch = useDispatch();
  const recipeDetail = useSelector(state => state?.recipeDetail?.data);

  useEffect(() => {
    dispatch(GetRecipeDetail(route?.params.id));
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetRecipeDetail(route?.params?.id));
    }, []),
  );

  // const userId = props.route.params.id;

  // const [data, setData] = useState();
  // const getData = async () => {
  //   try {
  //     let response = await axios.get(`${base_url}/recipes/${userId}`);
  //     if (response?.data?.data) {
  //       setData(response?.data?.data);
  //     }
  //   } catch (err) {
  //     console.log(err, 'error');
  //   }
  // };

  // useEffect(() => {
  //   getData(data);
  // }, []);

  return (
    <View style={{backgroundColor: 'red'}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      {/* {data?.map((item, index) => {
        return ( */}
      <View>
        <ImageBackground
          source={{uri: recipeDetail?.photo}}
          resizeMode="cover"
          style={{
            width: 450,
            height: 450,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              marginLeft: 30,
              width: 200,
              height: 150,
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 35, fontWeight: 700, color: 'white'}}>
              {recipeDetail?.title}
            </Text>
            <Text style={{fontSize: 14, fontWeight: 700, color: '#B0B0B0'}}>
              {recipeDetail?.category}
            </Text>
          </View>
          <View
            style={{
              width: 150,
              height: 350,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 13,
              marginBottom: 30,
            }}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EditMenu', {id: recipeDetail.id})
                }>
                <Ionicons
                  name="ellipsis-horizontal-outline"
                  color={'white'}
                  size={50}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
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
        </ImageBackground>
        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            top: 470,
            backgroundColor: 'white',
            width: 450,
            height: 550,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          }}>
          <View
            style={{
              width: 130,
              height: 50,
              marginTop: 40,
              marginLeft: 40,
              borderBottomColor: '#EEC302',
              borderBottomWidth: 5,
            }}>
            <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
              Ingredients
            </Text>
          </View>
          <View style={{paddingVertical: 30, paddingHorizontal: 50}}>
            <Text>{recipeDetail?.ingredient}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailIngredients;
