import React, { Component } from 'react'
import {
    SafeAreaView,
    View, Text,
    Image, ScrollView,
    FlatList, ImageBackground,
    TouchableOpacity, AsyncStorage, Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const currentDate = new Date();
const endDate = new Date();
class RentDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam("itemDetail", null),
            days: 0
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
                            <Text style={{ fontSize: 22 }}><Icon name='ios-bookmark' size={23} color='#024A59' />  {this.state.item.type}</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.item.numberGuest} Huéspedes</Text>
                        </View>
                        <View style={{ padding: 10, marginTop: 10, marginBottom: 5 }}>
                            <Text style={{ fontSize: 13 }}>{this.state.item.description}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 3, marginBottom: 3 }}>
                            <Icon name={'ios-water'} color='#024A59' size={15} />
                            <Icon name={'ios-wifi'} color='#024A59' size={15} />
                            <Icon name={'ios-wine'} color='#024A59' size={15} />
                            <Icon name={'ios-tv'} color='#024A59' size={15} />
                        </View>
                        <View style={{ padding: 10, marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 20, marginBottom: 5 }}> <Icon name='ios-arrow-round-forward' size={23} color='#024A59' />  Servicios</Text>
                            <Text>{this.state.item.services}</Text>
                        </View>

                        <View style={{ padding: 10, marginBottom: 10, marginTop: 5 }}>

                            <Text style={{ fontSize: 20, marginBottom: 5 }}><Icon name='ios-arrow-round-forward' size={23} color='#024A59' />  Dirección</Text>
                            <Text> <Icon name='ios-navigate' size={17} color='#024A59' /> {this.state.item.address}</Text>
                        </View>

                        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#024A59', margin: 10 }} />
                        <View style={{ padding: 10, marginBottom: 5, marginTop: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>


                            <Text style={{ fontSize: 16, marginBottom: 5 }}><Icon name='ios-time' size={17} color='#024A59' /> {`Fecha inicio`}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 5 }}><Icon name='ios-time' size={17} color='#024A59' /> {`Fecha fin `}</Text>

                        </View>
                        <View style={{ padding: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>


                            <Text style={{ fontSize: 16, marginBottom: 5 }}> {`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}</Text>
                            <Text style={{ fontSize: 16, marginBottom: 5 }}>{`${endDate.getDate() + this.state.days}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 5 }}>
                            <Icon name='ios-add-circle-outline' size={25} color='#024A59'
                                onPress={() => this.setState({ days: this.state.days + 1 })} />
                            <Icon name='ios-remove-circle-outline' size={25} color='#024A59'
                                onPress={() => this.setState({ days: this.state.days - 1 })} />

                        </View>
                        <View style={{ padding: 10 }}>
                            <Text><Icon name='ios-hourglass' size={17} color='#024A59' /> No. dias a reservar : {this.state.days}</Text>
                        </View>
                        
                        <View style={{ marginTop: 150 }} />
                    </ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, padding: 10, marginTop: 15 }}>
                            <Text style={{ flex: 1, marginTop: 5 }}> <Icon name='logo-usd' size={17} color='#024A59' /> {this.state.item.cost * this.state.days} / noche</Text>
                            <View style={{ backgroundColor: '#024A59', flex: 1 }}>
                                <TouchableOpacity style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    alignContent: 'center',
                                }}
                                    onPress={() => alert('')}
                                >
                                    <Text style={{ color: '#fff', marginTop: 10 }}>Rentar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default RentDetailScreen;