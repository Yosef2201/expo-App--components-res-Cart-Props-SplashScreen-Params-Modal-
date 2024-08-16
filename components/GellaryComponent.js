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
        width:300,
        height:170,
        borderRadius:10
    },
    container:{
        padding:5
    }

})