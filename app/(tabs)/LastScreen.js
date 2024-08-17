import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const LastScreen = () => {
    const route =useRoute()
  return (
    <View style={styles.container}>
        <Image style={styles.pic} source={route.params.img}/>
      <Text>{route.params.name}</Text>
      <Text>{route.params.phone}</Text>
      <Text>{route.params.address}</Text>
      <Text>{route.params.description}</Text>

    </View>
  )
}

export default LastScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    pic:{
        width :100,
        height:100
    }
})