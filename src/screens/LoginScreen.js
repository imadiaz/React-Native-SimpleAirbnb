import React, { Component } from 'react'
import {SafeAreaView,View,Text,Button,ScrollView,TextInput,Image,TouchableHighlight} from 'react-native';

export default class LoginScreen extends Component {
constructor(props){
    super(props);
    this.state = {
        user:'',
        password:''
    }
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
                            height:40,backgroundColor:'#fff',color:'#024A59',
                            marginTop:20,borderRadius:20,justifyContent:'center',
                            alignContent:'center',alignItems:'center'}} underlayColor={'#fff'} onPress={() => alert('onPress')}>
                                <Text>Login</Text>
                            </TouchableHighlight>

                            <View>
                                <Text style={{fontSize:18,color:'#fff',marginTop:15}}>More options</Text>
                                <Text  style={{fontSize:18,color:'#fff',marginTop:5}}>By utez curso c r 2019</Text>
                            </View>

                       </View>
                
                </View>
            </SafeAreaView>
        )
    }
}
