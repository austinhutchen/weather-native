import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import FutureForecast from "./forecast";
import { styles } from "./styles";

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
  const today = new Date();
  day = today.getDay();
  var dy = "";
  switch (day) {
    case 0:
      dy = "Sunday";
      break;
    case 1:
      dy = "Monday";
      break;
    case 2:
      dy = "Tuesday";
      break;
    case 3:
      dy = "Wednesday";
      break;
    case 4:
      dy = "Thursday";
      break;
    case 5:
      dy = "Friday";
      break;
    case 6:
      dy = "Saturday";
      break;
  }
  const img = { uri: "https://openweathermap.org/img/wn/10d@2x.png" };
  return (
    <View style={styles.CurrentTempContainer}>
      <Image source={img} style={styles.image} />
      <View style={styles.otherContainer}>
        <Text style={styles.day}>{dy}</Text>
        <Text style={styles.temp}>Night - 55&#176;C</Text>
        <Text style={styles.temp}>Day - 50&#176;C</Text>
      </View>
    </View>
  );
};

export default WeatherScroll;
