import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  const handlePress = (input) => {
    console.log(input);
  };
  return (
    <SafeAreaView style={styles.head}>
      <SafeAreaView style={styles.head}>
        <Text style={"fontSize:32"}>Weather</Text>
        <Image source={require("./assets/favicon.png")} />
      </SafeAreaView>
      <SafeAreaView style={styles.TextInput}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your city"
        multiline={true}
        autoCapitalize={true}
        autoComplete={true}
      ></TextInput>
      <Button
        title="Submit"
        onPress={() => {
          //do something
          handlePress(TextInput);
        }}
      />
      </SafeAreaView>
     
    </SafeAreaView>
  );
}
const gap=8;
// works as a css style sheet
const styles = StyleSheet.create({
// logo and image
  head: {
    flex: 1, 
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  // input and submit button as one unit
  TextInput: {
    margin: 0,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
