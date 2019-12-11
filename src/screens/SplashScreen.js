import React, { Component } from 'react';
import {SafeAreaView,
    View,
    ActivityIndicator,
    AsyncStorage,Image} 
    from 'react-native';


    
class SplashScreen extends Component {
        constructor(props){
            super(props);
            this.state = {
            }
            this.getListApartments();
        }

  getCurrentUser = async () => {
      const userData = await AsyncStorage.getItem('@userData');
      if(!userData){
            this.props.navigation.navigate('LoginScreen');
      }else{
          this.props.navigation.navigate('HomeScreen',{
              user:JSON.parse(userData),
          });
      }
    }      


    getListApartments = async () => {
        const dataApartments = await AsyncStorage.getItem("@dataApartments");
        if(!dataApartments){
            const  listApartments = await fetch('https://imipe-service.herokuapp.com/user/listApartments').then(r => r.json());
            listApartments.forEach(element => {
                element.isFavorite=false;
            });
            await AsyncStorage.setItem("@dataApartments",JSON.stringify(listApartments));
        }

        this.getCurrentUser();
       // console.log(listApartments);
    
    }



    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#024A59'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Image
                    source={{uri:`https://www.pngkey.com/png/full/60-606047_airbnb-logo-white-png-airbnb-logo-png-white.png`}}
                    style={{width:200,height:200}}
                    resizeMode='stretch'
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default SplashScreen;
