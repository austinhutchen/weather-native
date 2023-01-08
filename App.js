import {
  StyleSheet,
  Text,
  View,
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
    <SafeAreaView style={styles.container}>
      <Text style={"fontSize:32"}>Weather</Text>
      <Image source={require("./assets/favicon.png")} />
      <TextInput style={styles.TextInput}
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
        style={{ color: "black", fontSize: 20 }}
      />
    </SafeAreaView>
  );
}
// works as a css style sheet
const styles = StyleSheet.create({
  container: {
    // flex is set to 1 to allow for resizing to fit screen
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput:{
    margin:20,
    backgroundColor: "white",
    borderWidth:2
  }
});
