import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button, Keyboard} from 'react-native';
import api from '../store/api/authentication';

const HomePage = ({navigation}) => {
    return <View>
        <Text>
        HomePage 123 123
    </Text>
    <Button title={'logout'} onPress={()=>{
const callLogout = api.logoutApi();
if (callLogout) {
    navigation.push('login')
}
    }} />
        </View>
}

export default HomePage
