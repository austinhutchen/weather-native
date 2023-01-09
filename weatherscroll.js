import React from 'react'
import {View, ScrollView, Image, Text} from 'react-native'
import {styles} from './styles'
const WeatherScroll=()=>{
return(
 <ScrollView>
<CurrentTemp/>
 </ScrollView>
)


}

const CurrentTemp=()=>{
 return(
  <View>
   <Image/>
   <View>
    <Text>Sunday</Text>
    <Text>Night - 28&#176;C</Text>
    <Text>Day - 30&#176;C</Text>
   </View>
  </View>
 )
}

export default WeatherScroll