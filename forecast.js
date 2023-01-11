import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const FutureForecast = () => {
  return (
    <View style= {{flexDirection:'row'}}>
      <Forecastitem/>
    </View>
  );
};
var counter=0;
const Forecastitem = () => {
  counter++;
  const today = new Date();
  day = today.getDay();
  var nextdy = "";
  switch (day+counter) {
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
    <View style={styles.CurrentTempContainer}>
      <Image source={img} style={styles.image} />
      <View style ={styles.otherContainer}>
      <Text style={styles.day}>{nextdy}</Text>
      <Text styles={styles.temp}> Night - 55&#176;C</Text>
      <Text styles={styles.temp}>Day - 50&#176;C</Text>

      </View>
    </View>
  );
};

export default FutureForecast;
