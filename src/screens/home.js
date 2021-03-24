import React from 'react';
import {
    SafeAreaView,
    Text,
    Button
} from 'react-native';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{marginBottom:30}}>HOME SCREEN</Text>
            <Button title={"Goto Search"} onPress={() => navigation.navigate('Search', { screen: 'Search' })}/>
        </SafeAreaView>
    );
};

export default Home;
