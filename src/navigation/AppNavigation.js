import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderTitle, HeaderBackButton} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CurrentRentScreen from '../screens/CurrentRentScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import RentDetailScreen from '../screens/RentDetailScreen';

const HomeBottomStack = createBottomTabNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{  
            tabBarIcon: ({tintColor }) => (
                <Icon name="ios-home" size={27} color={tintColor}/>
             )
        }
    },
    CurrentRentScreen:{
        screen:CurrentRentScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor }) => (
                <Icon name="ios-filing" size={27} color={tintColor}/>
             )
        }
    },
    ProfileScreen:{
        screen:ProfileScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor }) => (
                <Icon name="ios-person" size={27} color={tintColor}/>
             )
        }
    }

},{
    tabBarOptions:{
        showLabel:false,
        activeTintColor:'#024A59',
        inactiveTintColor:'#c3c3c3',
        style:{
           shadowColor:'#000',
           elevation:7,
           shadowRadius:5,
           shadowOpacity:1.0 
        }
    },
    navigationOptions:{
        header:null,
    }
     
});


const HomeStack = createStackNavigator({

    HomeBottomStack:{
        screen:HomeBottomStack,
    },
    LoginScreen:{
        screen:LoginScreen,
        navigationOptions:{
            header:null,
        }
    },
    SplashScreen:{
        screen:SplashScreen,
        navigationOptions:{
            header:null,
            
        }
    },
    RentDetailScreen:{
        screen:RentDetailScreen,
        navigationOptions:{
            headerTintColor:'#fff',
            headerTransparent:true,
            headerLeftContainerStyle:{
                backgroundColor:'#024A59',
                borderRadius:23,
            }
        }
    }

},{
    initialRouteName:'SplashScreen'
});

export default createAppContainer(HomeStack);