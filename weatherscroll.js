import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import FutureForecast from "./forecast";
import { styles } from "./styles";
import {findday} from "./helpers";
const WeatherScroll = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTemp />
      <FutureForecast/>
      <FutureForecast/>
      <FutureForecast/>
    </ScrollView>
  );
};

const CurrentTemp = () => {
  var day =findday(0);
  const img = { uri: "https://openweathermap.org/img/wn/10d@2x.png" };
  return (
    <View style={styles.CurrentTempContainer}>
      <Image source={img} style={styles.image} />
      <View style={styles.otherContainer}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.temp}>Night - 55&#176;C</Text>
        <Text style={styles.temp}>Day - 50&#176;C</Text>
      </View>
    </View>
  );
};

export default WeatherScroll;
