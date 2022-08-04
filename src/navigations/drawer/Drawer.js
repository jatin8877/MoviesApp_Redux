import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Liked from '../../screens/Liked/Liked';
import Saved from '../../screens/Saved/Saved';
import Favourate from '../../screens/Favourate/Favourate';
import Tabs from '../tabs/Tabs';

let likeImg = '../../../assets/images/love.png';
let homeImg = '../../../assets/images/home.png';
let favImg = '../../../assets/images/medal.png';
let saveImg = '../../../assets/images/save.png';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={Tabs}
          options={{
            drawerIcon: () => (
              <Image
                source={require(homeImg)}
                style={{width: 35, height: 35}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Liked"
          component={Liked}
          options={{
            drawerIcon: () => (
              <Image
                source={require(likeImg)}
                style={{width: 35, height: 35}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Saved"
          component={Saved}
          options={{
            drawerIcon: () => (
              <Image
                source={require(saveImg)}
                style={{width: 35, height: 35}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourate"
          component={Favourate}
          options={{
            drawerIcon: () => (
              <Image source={require(favImg)} style={{width: 35, height: 35}} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default DrawerContainer;
