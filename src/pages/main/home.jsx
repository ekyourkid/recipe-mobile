import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import group1 from '../../../public/images/Group1.png';
import group2 from '../../../public/images/Group2.png';
import group3 from '../../../public/images/Group3.png';
import cardPhot from '../../../public/images/cardPopular.png';

const PopularList = [
  {
    image: cardPhot,
    title: 'Sandwich With Egg',
  },
  {
    image: cardPhot,
    title: 'Potato With Egg',
  },
  {
    image: cardPhot,
    title: 'Egg With Egg',
  },
  {
    image: cardPhot,
    title: 'Banana With Egg',
  },
  {
    image: cardPhot,
    title: 'Watermelon With Egg',
  },
];

const PopularForYou = [
  {
    imageCard: cardPhot,
    label: 'Beef',
    text: 'Beef steak with nopales, tartare',
  },
  {
    imageCard: cardPhot,
    label: 'Beef',
    text: 'Beef steak with nopales, tartare',
  },
  {
    imageCard: cardPhot,
    label: 'Beef',
    text: 'Beef steak with nopales, tartare',
  },
  {
    imageCard: cardPhot,
    label: 'Beef',
    text: 'Beef steak with nopales, tartare',
  },
  {
    imageCard: cardPhot,
    label: 'Beef',
    text: 'Beef steak with nopales, tartare',
  },
];

const HomePage = ({navigation}) => {
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

  // const renderPopularRecipe = ({item}) => (
  //   <View
  //     style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 10}}>
  //     <TouchableOpacity onPress={() => navigation.push('detailIngredients')}>
  //       <ImageBackground
  //         source={item.image}
  //         style={{
  //           width: 260,
  //           height: 150,
  //           justifyContent: 'flex-end',
  //           padding: 10,
  //         }}>
  //         <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
  //           {item.title}
  //         </Text>
  //       </ImageBackground>
  //     </TouchableOpacity>
  //   </View>
  // );
  const renderSeparator = () => <View style={{width: 10}}></View>;

  const renderPopularForYou = ({item}) => (
    <View
      style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 10}}>
      <TouchableOpacity onPress={() => navigation.push('detailIngredients')}>
        <ImageBackground
          source={item.imageCard}
          style={{
            width: 260,
            height: 150,
            justifyContent: 'flex-end',
            shadowColor: 'black',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              height: 60,
              padding: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
              {item.label}
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
              {item.text}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.inpuContainer}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#EFEFEF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            height: 50,
          }}>
          <Icon name="search" style={{fontSize: 25, color: '#C4C4C4'}} />
          <TextInput
            style={styles.input}
            placeholder="Search Pasta, Bread, etc"
          />
        </View>
      </View>
      <View>
        <View style={{marginHorizontal: 30}}>
          <Text style={{fontSize: 25, fontWeight: 400}}>Popular Recipes</Text>
          <Text style={{fontSize: 20, fontWeight: 800}}>Popular check</Text>
        </View>
        <ScrollView
          horizontal
          style={{marginTop: 10}}
          showsHorizontalScrollIndicator={false}>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('DetailIngredients', {id: item.id})
                }
                style={{padding: 10}}>
                <View>
                  <ImageBackground
                    source={{uri: item.photo}}
                    style={{
                      width: 250,
                      height: 150,
                      display: 'flex',
                      justifyContent: 'flex-end',
                      paddingLeft: 15,
                      paddingBottom: 10,
                    }}
                    imageStyle={{borderRadius: 10}}>
                    <Text
                      style={{fontSize: 18, fontWeight: 700, color: 'white'}}>
                      {item.title}
                    </Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
            marginVertical: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: 400}}>New Recipes</Text>
          <Text style={{fontSize: 20, fontWeight: 400, color: 'blue'}}>
            More info
          </Text>
        </View>
        <View
          onPress={() => navigation.navigate('DetailPopular')}
          style={{
            height: 110,
            marginHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailPopular')}
            style={{
              width: 80,
              height: 110,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#57CE96',
                width: 80,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Image source={group1} style={{width: 50, height: 50}} />
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: 500}}>Soup</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('DetailPopular')}
            style={{
              width: 80,
              height: 110,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#FDE901',
                width: 80,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Image source={group2} style={{width: 50, height: 50}} />
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: 500}}>Chicken</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('DetailPopular')}
            style={{
              width: 80,
              height: 110,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'black',
                width: 80,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Image source={group3} style={{width: 40, height: 50}} />
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: 500}}>Seafood</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('DetailPopular')}
            style={{
              width: 80,
              height: 110,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#FDE901',
                width: 80,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Image source={group2} style={{width: 50, height: 50}} />
            </View>
            <View>
              <Text style={{fontSize: 17, fontWeight: 500}}>Dessert</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 25}}>
        <View style={{marginHorizontal: 30}}>
          <Text style={{fontSize: 25, fontWeight: 400}}>Popular Recipes</Text>
        </View>
        <View style={styles.cardPopular}>
          <FlatList
            data={PopularForYou}
            renderItem={renderPopularForYou}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inpuContainer: {
    marginBottom: 40,
    marginTop: 100,
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
  cardPopular: {
    padding: 10,
    marginTop: 20,
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    overflow: 'scroll',
  },
  cardRecipe: {
    width: 260,
    height: 170,
  },
});

export default HomePage;
