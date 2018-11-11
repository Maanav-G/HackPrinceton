import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {
  StackNavigator,
  createStackNavigator,
} from 'react-navigation';

import OpenScreen from './assets/screens/OpenScreen.js'
import HomeScreen from './assets/screens/HomeScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <Navi />
    );
  }
}


const Navi = createStackNavigator({
  Open: OpenScreen,
  Home: HomeScreen
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);




