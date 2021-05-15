import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from '../Screens/ReadStoryScreen';
import WriteStoryScreen from '../Screens/WriteStoryScreen';
import SearchScreen from '../Screens/SearchScreen';

export   const AppTabNavigator = createBottomTabNavigator({
Read : {
      screen: ReadStoryScreen,
      navigationOptions :{
       
        tabBarLabel : "READ",
      }
    },
    Write: {
      screen: WriteStoryScreen,
      navigationOptions :{
      
        tabBarLabel : "WRITE",
      }
    },
    Search:{
      screen: SearchScreen,
      navigationOptions :{
      
        tabBarLabel : "Search",
      }
    }
  });