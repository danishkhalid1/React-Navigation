import React from 'react';
import {
    SafeAreaView,
    Text,
    Button
} from 'react-native';

const Friends = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{marginBottom:30}}>FRINDS SCREEN</Text>
            <Button title={"Goto Home"} onPress={() =>navigation.navigate('Home', { screen: 'Home' })}/>
        </SafeAreaView>
    );
};

export default Friends;