import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  TextInput,
  TouchableOpacityBase,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import WeatherScroll from "./weatherscroll";

function searchAPI(city) {
  var key = "76875c2ba9d949cbf7e9c0e76057de73";
}

const App = () => {
  // below is in testing
  // state uses array at index 0 for current value and index 1 for updating variable
  // hook declaration
  const [city, setCity] = useState("");
  return (
    <SafeAreaView style={styles.head}>
      <SafeAreaView style={styles.body}>
      <WeatherScroll />
        
        
      </SafeAreaView>
      <SafeAreaView style={styles.head}>
      <Text style={"fontSize:20"}>Weather</Text>
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
