import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // logo and image
  head: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "left",
    margin: 0,
    paddingVertical: 100,
    paddingHorizontal: 0,
  },
  // input and submit button as one unit
  WeatherScroll: {
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "left",
    margin: 60,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  image: {
    scrollview: {
      backgroundcolor: "#18181bcc",
      padding: 0,
      flex: 0.4,
    },
    width: 150,
    height: 150,
  },
  CurrentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
  },
  otherContainer: {
    paddingRight: 30,
  },

  day: {
    fontsize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
});

export { styles };
