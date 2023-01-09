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
  paddingVertical: 10,
  paddingHorizontal: 0,
 },
 image:{
  scrollview:{
    backgroundcolor: '#18181bcc',
    padding:0,
    flex:0.4
  },
  width:150,
  height:150,

 }
});

export {styles}