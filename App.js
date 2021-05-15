import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import{createBottomTabNavigator}from 'react-navigation-tabs'
import ReadStoryScreen from './Screens/ReadStoryScreen';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import SearchScreen from './Screens/SearchScreen';
import LoginScreen from './Screens/LoginScreen';
export default class App extends React.Component {
  render(){
  return (

    <AppContainer/>
    
  );
}
}

// const switchNavigator = createBottomTabNavigator({
//   BottomTab: {screen:TabNavigator},
// })
var AppTabNavigator = createBottomTabNavigator({
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
    const switchNavigator = createSwitchNavigator({
      LoginScreen:{screen: LoginScreen},
      TabNavigator:{screen: AppTabNavigator}
      })
      const AppContainer =  createAppContainer(switchNavigator);

