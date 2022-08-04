import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HindiMovies from '../../screens/HIndiMovies/HindiMovies';
import EnglishMovies from '../../screens/EnglishMovies/EnglishMovies';

let IndiaImg = '../../../assets/images/india.png';
let UsaImg = '../../../assets/images/united.png';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName="HindiMovies">
      <Tab.Screen
        name="HindiMovies"
        component={HindiMovies}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require(IndiaImg)} style={{height: 24, width: 24}} />
          ),
        }}
      />
      <Tab.Screen
        name="EnglishMovies"
        component={EnglishMovies}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require(UsaImg)} style={{height: 24, width: 24}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
