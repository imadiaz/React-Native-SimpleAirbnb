import React, { Component } from 'react'
import { SafeAreaView, View, Text, 
    Image, ScrollView, FlatList, 
    ImageBackground, TouchableOpacity,AsyncStorage } from 'react-native';
import CustomListComponent from '../components/CustomListComponent';

class CurrentRentScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            itemRent:this.props.navigation.getParam('item',null),
            isLoading:this.props.navigation.getParam('isRentDetail',true),
        }
    }

componentDidMount(){
    if(this.state.isLoading){
        this.getCurrentRent();
    }
}

getCurrentRent = async() => {
const currentRent = await AsyncStorage.getItem('@progressRent');
if(currentRent){
    this.setState({itemRent:JSON.parse(currentRent)});
    this.setState({isLoading:false});
}
}


showItem = () =>{
    return(
    <CustomListComponent
        startDate={this.state.itemRent.startDate}
        endDate={this.state.itemRent.endDate}
        title={this.state.itemRent.type}
        total={this.state.itemRent.total}
        isProfile={false}
        />
    )
}

emptyItem =() => {
    return(
        <View>
                <Text>No cuentas con rentas actuales</Text>
        </View>
    )
}
    render() {
        if(this.state.isLoading){
                return(
                <View>
                    {this.emptyItem()}
                </View>
                )
        }else{
            return (
                <SafeAreaView style={{flex:1}}>
                    <View style={{flex:1}}>
                        {/* {this.showItem()}
                                           */}
                        <CustomListComponent
                        startDate={this.state.itemRent.startDate}
                        endDate={this.state.itemRent.endDate}
                        title={this.state.itemRent.type}
                        total={this.state.itemRent.total}
                        isProfile={false}
                        />
                    </View>
                </SafeAreaView>
            )
        }
    }
}
export default CurrentRentScreen;
