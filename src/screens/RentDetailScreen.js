import React, { Component } from 'react'
import {
    SafeAreaView,
    View, Text,
    Image, ScrollView,
    FlatList, ImageBackground,
    TouchableOpacity, AsyncStorage,Button
} from 'react-native';



const currentDate = new Date();
const endDate = new Date();
class RentDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam("itemDetail", null),
            days:0
        }
    }



    heder = () => {

        return (
            <Image
                source={{ uri: this.state.item.image }}
                resizeMode='stretch'
                style={{ width: '100%', height: 200 }}
            />
        )
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        {this.heder()}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 22 }}>{this.state.item.type}</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.item.numberGuest} Huespedes</Text>
                        </View>
                        <View style={{ padding: 10, marginTop: 10, marginBottom: 5 }}>
                            <Text style={{ fontSize: 18 }}>{this.state.item.description}</Text>
                        </View>
                        <View style={{ padding: 10, marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 20 }}>Servicios</Text>
                            <Text>{this.state.item.services}</Text>
                        </View>
                        <View style={{ padding: 10, marginBottom: 10, marginTop: 5 }}>

                            <Text style={{ fontSize: 20 }}>Direccion</Text>
                            <Text>{this.state.item.address}</Text>
                        </View>
                        
                        <View style={{ padding: 10, marginBottom: 10, marginTop: 5 }}>

                             <Text>{`Fecha inicio : ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`}</Text>
                             <Text>{`Fecha fin : ${endDate.getDate() + this.state.days }/${endDate.getMonth()+1}/${endDate.getFullYear()}`}</Text>
                            <Text>No dias a reservar : {this.state.days}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                                <Button  title='+' onPress={() => this.setState({days:this.state.days+1})} />
                                <Button  title='-' onPress={() => this.setState({days:this.state.days-1})} />

                        </View>
                        <View>
                            <Text>Total {this.state.item.cost * this.state.days}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, padding: 10 }}>
                            <Text style={{ flex: 1 }}>{this.state.item.cost * this.state.days} / noche</Text>
                            <View style={{ backgroundColor: '#024A59', flex: 1 }}>
                                <TouchableOpacity style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    alignContent: 'center',
                                }} >
    <Text style={{ color: '#fff', marginTop: 5 }}>Rentar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginTop:150}}/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default RentDetailScreen;