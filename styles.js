import { StyleSheet } from 'react-native';



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
 TextInput: {
   margin: 15,
   backgroundColor: "white",
   alignItems: "center",
   justifyContent: "center",
   paddingVertical: 0,
 },
 WeatherScroll:{
  backgroundColor: "white",


 },
 body:{
  flex: 1,
  backgroundColor: "grey",
  alignItems: "center",
  justifyContent: "left",
  margin: 60,
  paddingVertical: 60,
  paddingHorizontal: 0,
 }
});

export {styles}