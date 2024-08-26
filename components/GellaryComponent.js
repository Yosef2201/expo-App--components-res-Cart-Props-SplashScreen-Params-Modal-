import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import images from '../assets/images/images'

const GellaryComponent = ({item}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.pic} source={item.img}/>
        <Text style={styles.name} >{item.name}</Text>
    </View>
  )
}

export default GellaryComponent

const styles = StyleSheet.create({
    pic:{
        width:300,
        height:140,
        borderRadius:30
    },
    container:{
        padding:5
    },
    name:{
      backgroundColor:'lightblue',
      position:'absolute',
      marginTop:10,
      marginLeft:20,
      // color:'gold',
      fontSize:20
    }

})