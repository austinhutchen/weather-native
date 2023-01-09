import React from 'react'
import {View, ScrollView, Image, Text} from 'react-native'
import {styles} from './styles'

const WeatherScroll=()=>{
return(
 <ScrollView horizontal={true}style={styles.ScrollView}>
<CurrentTemp/>
 </ScrollView>
)


}

const CurrentTemp=()=>{
 const img ={uri : 'https://openweathermap.org/img/wn/10d@2x.png'}
 return(
  <View style={styles.CurrentTempContainer}>
   <Image source={img} style={styles.image}/>
   <View style={styles.othercontainer}>
    <Text style={styles.day}>Sunday</Text>
    <Text style={styles.temp}>Night - 28&#176;C</Text>
    <Text style={styles.temp}>Day - 30&#176;C</Text>
   </View>
  </View>
 )
}

export default WeatherScroll