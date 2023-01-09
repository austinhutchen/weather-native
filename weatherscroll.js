import React from 'react'
import {View, ScrollView, Image, Text} from 'react-native'
import {styles} from './styles'

const WeatherScroll=()=>{
return(
 <ScrollView style={styles.ScrollView}>
<CurrentTemp/>
 </ScrollView>
)


}

const CurrentTemp=()=>{
 const img ={uri : 'https://openweathermap.org/img/wn/10d@2x.png'}
 return(
  <View>
   <Image source={img} style={styles.image}/>
   <View>
    <Text>Sunday</Text>
    <Text>Night - 28&#176;C</Text>
    <Text>Day - 30&#176;C</Text>
   </View>
  </View>
 )
}

export default WeatherScroll