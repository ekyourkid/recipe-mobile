import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import walpaper from '../../../public/images/walpaperLanding.jpeg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import blob from '../../../public/images/blob.png';
import LandingButton from '../../components/landingButton';
const LandingPage = ({navigation}) => {
  return (
    <View style={{height: 500, width: 450, backgroundColor: 'red'}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ImageBackground
        source={walpaper}
        resizeMode="cover"
        style={{height: 990}}>
        <View
          style={{
            backgroundColor: '#00E092',
            marginHorizontal: 30,
            marginTop: 100,
            width: 290,
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 1,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '800',
              color: 'white',
              paddingLeft: 10,
            }}>
            Food Recipes
          </Text>
          <View
            style={{
              backgroundColor: 'black',
              width: 20,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Icon name="utensils" style={{color: 'white'}} />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 60,
          }}>
          <Text
            style={{
              fontSize: 90,
              fontWeight: '800',
              color: '#227093',
              textAlign: 'center',
            }}>
            What do you want to cook today?
          </Text>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                paddingTop: 20,
                textAlign: 'center',
                borderTopColor: 'white',
                borderTopWidth: 2,
              }}>
              Recipe food is a very helpful application for you to find all food
              recipe references from various parts of the world, ranging from
              fast food to other dishes.
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 25}}>
          <LandingButton
            onPress={() => navigation.navigate('Login')}
            text={'NEXT'}
          />
        </View>
        <Image
          source={blob}
          style={{zIndex: 1, position: 'absolute', bottom: -300}}
        />
      </ImageBackground>
    </View>
  );
};

export default LandingPage;
