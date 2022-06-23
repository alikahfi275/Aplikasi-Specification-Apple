/* eslint-disable react/self-closing-comp */
/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ToastAndroid,
} from 'react-native';
import { authentication } from './../../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const SignInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                navigation.navigate('Home')
                console.log('Sign In')
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
                ToastAndroid.show("Email atau Password Salah", ToastAndroid.SHORT);
                setPassword('')
            })
    };

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
                            marginTop: 90,
                            marginLeft: 30,
                            fontSize: 35,
                            color: '#ffffff'
                        }}>Let's Start</Text>
                    </ImageBackground>
                </View>
            </View>
            <View style={{
                backgroundColor: '#ffffff',
                paddingVertical: 15,
                paddingHorizontal: 25,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
            }}>
                <Text style={{
                    color: '#18203A',
                    fontSize: 36,
                    fontWeight: 'bold',
                    marginBottom: 20,
                    marginTop: 10
                }}>Login</Text>
                <TextInput
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={"#828282"}
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    style={{
                        borderBottomWidth: 1,
                        borderColor: "#828282",
                        fontSize: 14,
                        color: "#18203A",
                        marginTop: 5
                    }}
                />
                <TextInput
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={"#828282"}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={{
                        borderBottomWidth: 1,
                        borderColor: "#828282",
                        fontSize: 14,
                        color: "#18203A",
                        marginTop: 5
                    }}
                />
                <TouchableOpacity style={{
                    backgroundColor: '#FD4D4D',
                    paddingVertical: 10,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 15,
                    marginTop: 25,
                }}
                    onPress={SignInUser}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 18,
                        fontWeight: '500',
                        color: "#ffffff",
                    }}>Sign In</Text>
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: '300',
                        color: "#828282",
                        marginBottom: 40
                    }}>don't have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.replace('Register')}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: "#828282",
                            marginBottom: 40,
                            marginLeft: 10
                        }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: -25
    }
});

export default Login;