import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import images from '../assets/images/images'

const GellaryComponent = ({item}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.pic} source={item.img}/>
    </View>
  )
}

export default GellaryComponent

const styles = StyleSheet.create({
    pic:{
        width:320,
        height:160,
        borderRadius:30
    },
    container:{
        padding:5
    }

})