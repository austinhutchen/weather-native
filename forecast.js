import React from 'react'
import {View,Text , Image, Stylesheet} from 'react-native'
import { styles } from './styles'

const FutureForecast= () => {
return(
 <View style={{flexDirection: 'row'}}>
 <Forecastitem></Forecastitem>
 <Forecastitem></Forecastitem>
 <Forecastitem></Forecastitem>
 </View>


)

}
const Forecastitem =() => {
 const img = {uri:'https://openweathermap.org/img/wn/10d@2x.png'}
 return (
  <View style={styles.FutureForecast}>
   <Text>
    Tues
   </Text>
   <Image source={img} style={styles.image} />
   <Text>50</Text>
   <Text> 50</Text>
  </View>

 )
}
export default FutureForecast