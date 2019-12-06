import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

const HomeStack = createStackNavigator({

    LoginScreen:{
        screen:LoginScreen,
        navigationOptions:{
            header:null,
        }
    },
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
            header:null
        }
    },
    SplashScreen:{
        screen:SplashScreen,
        navigationOptions:{
            header:null,
        }
    }

},{
    initialRouteName:'SplashScreen'
});

export default createAppContainer(HomeStack);