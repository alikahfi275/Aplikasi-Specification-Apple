/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import {
    View,
    Image,
    StatusBar
} from 'react-native';

const SplashScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        console.log('SplasScreen Terbuka');
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Welcome'))
        }, 3000)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle='light-content' />
            <Image
                style={{ width: '100%', height: '100%' }}
                source={require('../../asset/images/splashscreen.png')}
            />
        </View>
    );
};

export default SplashScreen;