import React, { Component } from 'react'
import {SafeAreaView,View,Text,
    Button,
    ScrollView,
    TextInput,
    Image,
    TouchableHighlight,
    AsyncStorage} from 'react-native';

export default class LoginScreen extends Component {
constructor(props){
    super(props);
    this.state = {
        user:'',
        password:''
    }
}


addNewUser = async () => {

    const userData = {
        "username":this.state.user,
        "password":this.state.password
    }
    await AsyncStorage.setItem('@userData',JSON.stringify(userData));
    this.props.navigation.navigate('HomeScreen');
}



    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#024A59',padding:10}}>
                <View style={{flex:1,marginTop:15}}>
                      
                       <Image source={require('../../assets/image/icon.png')}
                       resizeMode={'cover'}
                       style={{width:100,height:100}}
                       />
                       <View>
                           <Text style={{fontWeight:'700',fontSize:23,color:'#fff',marginTop:10}}>Welcome to airbnb</Text>
                            <Text>{this.state.user}</Text>
                            <TextInput
                            placeholder={'User'}
                            style={{paddingLeft:10,backgroundColor:'#fff',color:'#000',borderRadius:25}}
                            value={this.state.user}
                            onChangeText={(text) => this.setState({user:text})}
                            />  

                            <TextInput
                            placeholder={'Password'}
                            style={{paddingLeft:10,backgroundColor:'#fff',color:'#000',borderRadius:25,marginTop:15}}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({password:text})}
                            secureTextEntry={true}
                            />

                            <TouchableHighlight style={{width:'100%',
                            height:40,backgroundColor:'#024A59',borderWidth:1,borderColor:'#fff',
                            marginTop:20,borderRadius:20,justifyContent:'center',
                            alignContent:'center',alignItems:'center'}} underlayColor={'#fff'} onPress={this.addNewUser}>
                                <Text style={{color:'#fff'}}>Login</Text>
                            </TouchableHighlight>

                            <View>
                                <Text style={{fontSize:18,color:'#fff',marginTop:15}}>More options</Text>
                                <Text  style={{color:'#fff',marginTop:20,fontSize:10}}>If you're sure that you
                                want to use this app you need to accept the conditions about this react application app
                                all the development is by Immanuel Salazar Diaz</Text>
                            </View>

                       </View>
                 
                </View>
            </SafeAreaView>
        )
    }
}
