/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{
            backgroundColor: "#ffffff",
            margin: 2
        }}
            onPress={() => navigation.navigate('Detail', { data: props.item })}>
            <View style={{
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={{ uri: props.item.image }}
                    style={{ width: 130, height: 130, }}
                    resizeMode={'contain'}
                />
            </View>
            <View style={{
                paddingHorizontal: 12,
                marginVertical: 10
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 13,
                    fontWeight: '700'
                }}>{props.item.phone_name.slice(0, 20)}</Text>
            </View>

        </TouchableOpacity>
    )
};

export default Card;

const styles = StyleSheet.create({});