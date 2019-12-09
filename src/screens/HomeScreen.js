import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity,AsyncStorage } from 'react-native';
import CardComponent from '../components/CardComponent';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataItems:null,
        }
    }


componentDidMount(){
this.getDataApartments();
}

getDataApartments =  async () => {
    // const dataApartments = await AsyncStorage.getItem("@dataApartments");
    // dataApartments = JSON.parse(dataApartments);
    this.setState({dataItems:JSON.parse(await AsyncStorage.getItem("@dataApartments"))});
}






    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 25, marginBottom: 20 }}>What can we help you find?</Text>

                        <View>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <CardComponent
                                    image={`https://a0.muscache.com/im/pictures/d0e1b0c2-84f3-409d-81fe-7fcea80b1f99.jpg?aki_policy=xx_large`}
                                    title={'Experiences'} />

                                <CardComponent
                                    image={`https://a0.muscache.com/im/pictures/30a36c31-b93d-42f4-880c-115b5bc3363c.jpg?aki_policy=xx_large`}
                                    title={'Houses'} />

                                <CardComponent
                                    image={`https://a0.muscache.com/im/pictures/68229b69-7194-4045-bd44-880c04025619.jpg?aki_policy=xx_large`}
                                    title={'Apartments'} />

                                <CardComponent
                                    image={`https://a0.muscache.com/im/pictures/7af8e51c-9a03-4495-88a0-6b4c93a8ec38.jpg?aki_policy=xx_large`}
                                    title={'Rooms'} />
                            </ScrollView>
                        </View>

                        <Text style={{
                            marginTop: 20,
                            marginBottom: 20,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>Welcome to Airbnb plus</Text>

                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                extraData={this.state}
                                data={this.state.dataItems}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={{
                                        backgroundColor: '#fff', height: 260, elevation: 7, shadowColor: '#000',
                                        shadowOpacity: 0.5, marginBottom: 10, width: '97%', marginTop: 10, marginLeft: 5, marginRight: 5
                                    }}>
                                        <ImageBackground
                                            source={{ uri: item.image }}
                                            style={{ height: 150, width: '100%', alignItems: 'flex-end' }}
                                        >
                                            <TouchableOpacity>
                                                <Icon name='ios-heart' color={item.isFavorite?'red':'#c3c3c3'} style={{ marginTop: 5, marginRight: 5 }} size={20} />
                                            </TouchableOpacity>

                                        </ImageBackground>
                                        <View style={{ padding: 10 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                                <Text>{item.type}</Text>
                                                <Text style={{ color: '#024A59' }}>{item.numberGuest} huespedes</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 3, marginBottom: 3 }}>
                                                <Icon name={'ios-water'} color='#024A59' size={15} />
                                                <Icon name={'ios-wifi'} color='#024A59' size={15} />
                                                <Icon name={'ios-wine'} color='#024A59' size={15} />
                                                <Icon name={'ios-tv'} color='#024A59' size={15} />
                                            </View>
                                            <Text style={{ fontSize: 10, textAlign: 'justify' }}>{item.description}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon name={item.rating > 3 ? 'ios-star' : 'ios-star-half'} color='#024A59' size={15} />
                                                <Text style={{ marginLeft: 5, fontSize: 12 }}>{item.rating}</Text>
                                            </View>


                                        </View>
                                    </View>

                                )}

                                ListEmptyComponent={(
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                        <Icon name='ios-cube' size={50} color='#024A59' />
                                        <Text>There are not apartments near you!</Text>
                                    </View>
                                )}

                            />

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
export default HomeScreen;
