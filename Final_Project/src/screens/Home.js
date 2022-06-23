/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    StyleSheet,
    View,
    ActivityIndicator,
    StatusBar,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState();
    const [dataTampil, setDataTampil] = useState([]);
    const navigation = useNavigation();

    const getMovies = async () => {
        try {
            const response = await fetch('https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48', {
                params: {
                    page: 2,
                }
            });
            const json = await response.json();
            setDataTampil(json.data.phones)
            setData(json.data.phones)
            console.log("Data Berhasil Di Dapat")
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    function searchString(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k =>
                o[k].toLowerCase().includes(string.toLowerCase()),
            ),
        );
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle='light-content' />
            <ImageBackground
                style={{ width: '100%', height: 210 }}
                source={require('../../asset/images/Header-2.jpg')}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        borderRadius: 8,
                        height: 40,
                    }}>
                        <TextInput style={{
                            backgroundColor: "#ffffff",
                            borderBottomLeftRadius: 8,
                            borderTopLeftRadius: 8,
                            height: '100%',
                            width: 220,
                            paddingLeft: 20,
                            color: '#191919'
                        }}
                            value={search}
                            placeholder="Searching...."
                            placeholderTextColor={"#828282"}
                            onChangeText={text => setSearch(text)}
                            onSubmitEditing={() => setDataTampil(searchString(data, search))}
                        />
                        <TouchableOpacity
                            onPress={() => setDataTampil(searchString(data, search))}>
                            <Icon name="search" size={20} color="#666666" style={{ marginHorizontal: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: "#fcbc4c",
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: "center",
                        borderRadius: 50,
                        marginLeft: 15
                    }}
                        onPress={() => navigation.navigate('SignOut')}>
                        <Icon name="user" size={20} color="#EB5A36" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {isLoading ? <ActivityIndicator /> : (
                <FlatGrid
                    itemDimension={150}
                    data={dataTampil}
                    renderItem={({ item }) => (
                        <Card item={item} />
                    )}
                />
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F3F4'
    },
});

export default Home;
