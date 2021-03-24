import React from 'react';
import {
    SafeAreaView,
    Text,
    Button
} from 'react-native';

const Search = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{marginBottom:30}}>SEARCH SCREEN</Text>
            <Button title={"Goto Friends"} onPress={() =>navigation.navigate('Friends', { screen: 'Friends' })}/>
        </SafeAreaView>
    );
};

export default Search;
