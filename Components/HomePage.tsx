import React, {useEffect, useState} from 'react';
import {ImageBackground, Pressable, Text, View, TextInput, Alert, Image} from "react-native";
import {GET_WEATHER_QUERY} from "../graphql/Query";
import {useLazyQuery} from "@apollo/client";
import styles from "./HomeStyles";
import WeatherData from "./WeatherData";
const image = require('../busStation.png');

export const HomePage : React.FC = () => {

    const [input, setInput] = useState<string>("");
    const [getWeather, {data}] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: {name: input}
    });

    const onInput = (textValue: string) => {
        setInput(textValue);
    }

    useEffect(() => {
        getWeather()
    }, [input])
    return (
        <>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Weather App</Text>
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.input} placeholder={"City name..."} onChangeText={onInput}/>
                </View>
            </ImageBackground>
           <WeatherData data={data}/>
        </>
    )
}

export default HomePage;