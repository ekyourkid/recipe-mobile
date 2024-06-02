/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddRecipe from '../pages/detailRecipe/addRecipe';
import HomePage from '../pages/main/home';
import DetailIngredients from '../pages/detailRecipe/detailIngredients';
import DetailPopular from '../pages/detailRecipe/detailPopular';
import EditMenu from '../pages/detailRecipe/editMenu';
import Profile from '../pages/main/profile';
import AuthLogin from '../pages/auth/login';
import AuthRegist from '../pages/auth/register';
import {useSelector} from 'react-redux';
import MyRecipe from '../pages/detailRecipe/myRecipe';
import EditProfile from '../pages/detailRecipe/editProfile';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'none',
      }}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPopular"
        component={DetailPopular}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailIngredients"
        component={DetailIngredients}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditMenu"
        component={EditMenu}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AuthScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        animation: 'none',
      }}>
      <Stack.Screen
        name="Login"
        component={AuthLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Regist"
        component={AuthRegist}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        animation: 'none',
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyRecipe"
        component={MyRecipe}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailIngredients"
        component={DetailIngredients}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditMenu"
        component={EditMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EFC81A',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: 'rgba(109, 97, 242, 0.05)',
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="addRecipe"
        component={AddRecipe}
        options={{
          tabBarLabel: 'addRecipe',
          tabBarIcon: ({color}) => (
            <Ionicons name="add-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="EditMenu"
        component={EditMenu}
        options={{
          tabBarLabel: 'EditMenu',
          tabBarIcon: ({color}) => (
            <Ionicons name="create-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = createNativeStackNavigator();

function Router() {
  const auth = useSelector(state => state?.authReducers?.data);
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {auth ? (
          <AuthStack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
        ) : (
          <AuthStack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{headerShown: false}}
          />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
export default Router;

// In App.js in a new project

// import * as React from 'react';
// import {View, Text, Button, StatusBar} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Navigator from './src/routes/homeStack';

// import HomeRouteStack from './src/routes/homeRoute';
// import ProfileRouteStack from './src/routes/profileRoute';
// import AddRecipeRoute from './src/routes/addRecipeRoute';
// import {authLogin} from './src/redux/action/auth';
// import AuthRootStack from './src/routes/authLogin';
// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{headerShown: false}}>
//         <Tab.Screen name="login" component={AuthRootStack} />
//         <Tab.Screen name="Home" component={HomeRouteStack} />
//         <Tab.Screen name="profile" component={ProfileRouteStack} />
//         <Tab.Screen name="add" component={AddRecipeRoute} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
