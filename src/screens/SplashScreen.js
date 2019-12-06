import React, { Component } from 'react';
import {SafeAreaView,
    View,
    ActivityIndicator,
    AsyncStorage} 
    from 'react-native';


    
class SplashScreen extends Component {
        constructor(props){
            super(props);
            this.state = {

            }
            this.getCurrentUser();
        }


  getCurrentUser = async () => {
      const userData = await AsyncStorage.getItem('@userData');
      console.log(userData);

      if(!userData){
            console.log(this.props.navigation);
            this.props.navigation.navigate('LoginScreen');
      }else{
          this.props.navigation.navigate('HomeScreen');
      }


    }      



    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#024A59'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator
                            color='#fff'
                            size='large'
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default SplashScreen;
