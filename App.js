
import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';


export default function App() {
  const handlePress=() =>{
    console.log("Text pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text >Weather</Text>
    <Button title="ayo" onPress={()=>{
      //do something
      handlePress();
    }} style={{color:'white',fontSize:20}}/>
    <Image source={"./assets/adaptive-icon.png"}/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex is set to 1 to allow for resizing to fit screen
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
