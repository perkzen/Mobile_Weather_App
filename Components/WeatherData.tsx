import {ImageBackground, Text, View} from "react-native";
import React from "react";
import styles from "./HomeStyles";
import getIcon from "./getIcon";

export const WeatherData: React.FC = ({data}: any) => {

    const kelvinToCelsius = (temp: number): number => {
        return Math.trunc(temp - 273);
    }

    return (<>
            {data && data.getCityByName !== null &&
            <View style={styles.weatherContainer}>
                <Text style={styles.weatherItem}>{data.getCityByName.name}</Text>
                <Text style={styles.weatherItem}>{data.getCityByName.country}</Text>
                <Text
                    style={styles.weatherItem}> {kelvinToCelsius(data.getCityByName.weather.temperature.actual)}°C </Text>
                <ImageBackground style={styles.weatherIcon}
                                 source={{uri: getIcon(data.getCityByName.weather.summary.title)}}/>
            </View>}
        </>
    )
}

export default WeatherData;