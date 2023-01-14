import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  TextInput,
  TouchableOpacityBase,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import WeatherScroll from "./weatherscroll"; 
import { searchAPI } from "./helpers";

const App = () => {
  // hook declarations
  const [city, setCity] = useState("");

  return (
    <SafeAreaView style={styles.head}>
      <SafeAreaView style={styles.body}>
        <WeatherScroll />
      </SafeAreaView>
      <SafeAreaView style={styles.head}>
        <Text style={"fontSize:40"}>Find More Weather:</Text>
        <Image source={require("./assets/favicon.png")} />
        <TextInput
          name="input"
          placeholder="Enter your city"
          multiline={false}
          maxLength={20}
          autoCapitalize={true}
          autoComplete={true}
          blurOnSubmit={true}
          defaultValue={city}
          onChangeText={(newcity) => setCity(newcity)}
        ></TextInput>
        <Button
          title="submit"
          // after input finishes, the city variable will have the final input
          onPress={() => {
            if (typeof city !== "undefined") {
              // search API function should call here to search for city weather on submit
              searchAPI(city);
              // for debugging
              console.log(city);
            } else {
              console.log("EMPTY INPUT");
            }
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default App;
