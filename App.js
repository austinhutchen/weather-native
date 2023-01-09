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

function searchAPI() {
  // searches for the given city instantiated with this.city. Not case sensitive, uses external API.
}

const App = () => {
  // below is in testing
  // state uses array at index 0 for current value and index 1 for updating variable
  // hook declaration
  const [city, setCity] = useState("");
  return (
    <SafeAreaView style={styles.head}>
      <SafeAreaView style={styles.head}>
        <Text style={"fontSize:32"}>Weather</Text>
        <Image source={require("./assets/favicon.png")} />
      </SafeAreaView>
      <SafeAreaView style={styles.TextInput}>
        <TextInput
          name="input"
          placeholder="Enter your city"
          multiline={false}
          maxLength={20}
          autoCapitalize={true}
          autoComplete={true}
          blurOnSubmit={true}
          onChangeText={newcity => setCity(newcity)}
          defaultValue={city}
        ></TextInput>
        <Button
          title="submit"
          // after input finishes, the city variable will have the final input
          onPress={() => console.log(city)}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default App;
