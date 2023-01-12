import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
// function finds the current date for each futureforecast instance

const FutureForecast = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Forecastitem />
    </View>
  );
};
// global counter for each forecastitem to have unique date
var counter = 0;

const Forecastitem = () => {
  counter++;
  var nextdy = "";
  import("./helpers.js").then((module) => {
    nextdy = module.findday(counter);
  });
  const img = { uri: "https://openweathermap.org/img/wn/10d@2x.png" };
  return (
    <View style={styles.CurrentTempContainer}>
      <Image source={img} style={styles.image} />
      <View style={styles.otherContainer}>
        <Text style={styles.day}>{nextdy}</Text>
        <Text styles={styles.temp}> Night - 55&#176;C</Text>
        <Text styles={styles.temp}>Day - 50&#176;C</Text>
      </View>
    </View>
  );
};

export default FutureForecast;
