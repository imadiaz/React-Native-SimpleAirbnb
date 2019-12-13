import React, { Component } from 'react';
import { 
    SafeAreaView, View, Text, Image, 
    ScrollView, FlatList, ImageBackground, 
    TouchableOpacity } 
    from 'react-native';

import CustomListComponent from '../components/CustomListComponent';
 class ProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <CustomListComponent
                    username={'Immanuel'}
                    password={'1234567'}
                    isProfile={true}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default ProfileScreen;
