import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={"fontSize:32"}>Weather</Text>
      <Image source={require("./assets/favicon.png")} />
      <Button
        title="ayo"
        onPress={() => {
          //do something
          handlePress();
        }}
        style={{ color: "black", fontSize: 20 }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex is set to 1 to allow for resizing to fit screen
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
