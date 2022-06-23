/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <StatusBar translucent backgroundColor={'transparent'} barStyle='light-content' />
                <View>
                    <ImageBackground
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../asset/images/bg_login.png')}>
                        <Text style={{
                            fontWeight: '400',
                            marginTop: 180,
                            marginLeft: 25,
                            fontSize: 48,
                            color: '#ffffff'
                        }}> Welcome</Text>
                    </ImageBackground>
                </View>
            </View>
            <View style={{
                backgroundColor: '#ffffff',
                padding: 10,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
            }}>
                <TouchableOpacity style={{
                    backgroundColor: '#FD4D4D',
                    paddingVertical: 10,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 25,
                    paddingHorizontal: 16
                }}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: "#ffffff" }}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderColor: "#FD4D4D",
                    borderWidth: 1,
                    paddingVertical: 10,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 45,
                    marginTop: 12,
                    paddingHorizontal: 16

                }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: "#FD4D4D" }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: -15
    }
});

export default Welcome;