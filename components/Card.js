import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({props}) => {
  return (
    <View>
      <Text style ={styles.a}>{props.name}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    a:{
        marginHorizontal:35,
        // backgroundColor:'blue',
        padding:10
    }
})