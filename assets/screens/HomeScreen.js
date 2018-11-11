import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import {
    createBottomTabNavigator,
    createMaterialTopTabNavigator
  } from 'react-navigation';

import {
    createMaterialBottomTabNavigator,
  } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

import User from "./User";
import Camera from "./Camera";
import Saved from "./Saved";

class HomeScreen extends Component {
        


    render() {
        return (
            <View style={styles.container}>
                <Text> CAMERA HERE </Text>
            </View>
        );
    }
}

export default createMaterialTopTabNavigator({
    Home: {screen:HomeScreen, 
        navigationOptions:{
            tabBarLabel:'Camera',
            tabBarIcon:({tintColor}) =>(
                <Icon name="ios-camera" color={tintColor} size={24} />
            ),
    }},
    Saved: {screen:Saved,        
        navigationOptions:{
            tabBarLabel:'Saved',
            tabBarIcon:({tintColor}) =>(
            <Icon name="ios-folder-open" color={tintColor} size={24} />
            ),
    }},
    User: {screen:User,        
        navigationOptions:{
            tabBarLabel:'User',
            tabBarIcon:({tintColor}) =>(
            <Icon name="ios-contact" color={tintColor} size={24} />
            ),
    }},
  },{
    initialRouteName: 'Home',
    order: ['Saved','Home','User'],
    navigationOptions:{
        tabBarVisible:true,
    },
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor:'#843535',
        inactiveTintColor: 'grey',
        style:{
            backgroundColor:'#FFFFFF00'
        },
        indicatorStyle:{
            height:0
        },
        showIcon: true,
    }
  }
);  




const header = createMaterialTopTabNavigator({
    Camera: {screen:Camera,        
        navigationOptions:{
            tabBarLabel:'Camera',
            tabBarIcon:({tintColor}) =>(
            <Icon name="ios-camera" color={tintColor} size={24} />
            ),
    }},
  },{
    navigationOptions:{
        tabBarVisible:true,
    },
    tabBarOptions: {
        activeTintColor:'#843535',
        inactiveTintColor: 'grey',
        style:{
            backgroundColor:'#FFFFFF00'
        },
        indicatorStyle:{
            height:0
        },
        showIcon: true,
    }
  }
);  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});