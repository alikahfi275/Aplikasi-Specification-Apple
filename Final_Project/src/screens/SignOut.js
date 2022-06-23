/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { authentication } from './../../Firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SignOut = () => {

    const navigation = useNavigation()

    const signOutUser = () => {
        signOut(authentication)
            .then(() => {
                navigation.replace("Login")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#FD4D4D',
                width: '100%',
                height: 200
            }}>

            </View>
            <View style={{
                backgroundColor: '#828282',
                width: 150,
                height: 150,
                borderRadius: 100,
                marginTop: -75,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <Icon name="user" size={80} color="#ffffff" />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{
                    color: '#000000'
                }}>Email : {authentication.currentUser?.email} </Text>
                <TouchableOpacity style={{
                    backgroundColor: '#FD4D4D',
                    paddingHorizontal: 50,
                    paddingVertical: 10,
                    borderRadius: 5,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    onPress={signOutUser}>
                    <Text style={{
                        color: '#ffffff'
                    }}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default SignOut;
