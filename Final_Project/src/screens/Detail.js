/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import React from 'react';

const Detail = ({ route }) => {

    const { data } = route.params;

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle='dark-content' />
            <View style={{
                backgroundColor: "#ffffff"
            }}>
                <Image source={{ uri: data.image }}
                    style={{ width: '100%', height: 300, marginTop: 40, marginBottom: 15 }}
                    resizeMode={'contain'}
                />
            </View>
            <View style={{
                backgroundColor: "#ffff",
                marginTop: 10
            }}>
                <Text style={{
                    color: '#FD4D4D',
                    fontSize: 30,
                    paddingTop: 5,
                    marginLeft: 10,
                    fontWeight: '700'
                }}>{data.phone_name}</Text>
                <Text style={{
                    color: '#7f7f7f',
                    fontSize: 12,
                    marginLeft: 10,
                    fontWeight: '700',
                    paddingBottom: 10
                }}>{data.slug}</Text>
            </View>
        </View>
    )
};

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F3F4'
    },
});