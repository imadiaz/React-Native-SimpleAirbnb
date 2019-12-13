import React, { Component } from 'react'
import {
    SafeAreaView,
    View, Text,
    Image, ScrollView,
    FlatList, ImageBackground,
    TouchableOpacity, AsyncStorage, Button,Alert,StyleSheet
} from 'react-native';


class CustomListComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        if(this.props.isProfile){
            return (
                <SafeAreaView style={styles.conteiner}>
                    <View style={styles.conteiner}>
                            <View style={styles.containerText}>
                                <Text style={styles.text}>
                                    {this.props.username}
                                </Text>
                                <Text style={styles.text}>
                                    {this.props.password}
                                    </Text>
                            </View>
                    </View>
                </SafeAreaView>
            )
        }else{
            return (
                <SafeAreaView style={styles.conteiner}>
                    <View style={styles.conteiner}>
                        <View>
                                <View style={styles.conteinerList}>
                                        <Text style={styles.text}>{this.props.startDate}</Text>
                                        <Text style={styles.text}>{this.props.endDate}</Text>
                                </View>
                                <View style={styles.conteinerList}>
                                        <Text style={styles.text}>{this.props.title}</Text>
                                        <Text style={styles.text}>Total a pagar: {this.props.total}</Text>
                                </View>
                        </View>
                    </View>
                </SafeAreaView>
            )
        }
    }
}
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#c3c3c3',
        height:150
    },
    text:{
        fontSize:18,
        marginBottom:5,
        marginTop:10,
        color:'#fff'
    },
    containerText:{
        backgroundColor:'#024A59',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding:10,
        shadowColor:'#000',
        shadowOpacity:0.5,
        elevation:7
    },
    conteinerList:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding:10,
        shadowColor:'#000',
        shadowOpacity:0.5,
        elevation:7
    }

});

export default CustomListComponent;

