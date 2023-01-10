import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const FutureForecast = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Forecastitem/>
    </View>
  );
};

const Forecastitem = () => {
  const today = new Date();
  day = today.getDay();
  var nextdy = "";
  switch (day+1) {
    case 0:
      nextdy = "Sunday";
      break;
    case 1:
      nextdy = "Monday";
      break;
    case 2:
      nextdy = "Tuesday";
      break;
    case 3:
      nextdy = "Wednesday";
      break;
    case 4:
      nextdy = "Thursday";
      break;
    case 5:
      nextdy = "Friday";
      break;
    case 6:
      nextdy = "Saturday";
      break;
  }

  const img = { uri: "https://openweathermap.org/img/wn/10d@2x.png" };
  return (
    <View style={styles.FutureForecast}>
      <Text style={styles.day}>{nextdy}</Text>
      <Image source={img} style={styles.image} />
      <Text styles={styles.temp}>50&#176;C</Text>
      <Text styles={styles.temp}>50&#176;C</Text>
    </View>
  );
};

export default FutureForecast;
