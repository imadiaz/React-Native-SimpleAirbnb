import React, { Component } from 'react'
import {SafeAreaView,View,Text,Image} from 'react-native';

class CardComponent extends Component {
    render() {
        return (
            <View  style={{elevation:7,shadowColor:'#000',
            shadowOpacity:0.5,marginLeft:15,height:150,
            backgroundColor:'#fff',width:150,borderTopLeftRadius:20,
            borderTopRightRadius:20}}>
            <Image 
            source={{uri:this.props.image}} 
            style={{flex:1,width:null,height:null,borderTopLeftRadius:20,borderTopRightRadius:20}}
            resizeMode='cover'
            />
            <View style={{height:30,justifyContent:'center',alignItems:'center'}}>
            <Text>{this.props.title}</Text>
            </View>
        </View>
        )
    }
}
export default CardComponent;
