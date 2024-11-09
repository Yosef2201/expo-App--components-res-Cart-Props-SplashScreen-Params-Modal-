import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import dataM from '../app/res/dataMenuHeader'

const Card = ({props}) => {
  const nav=useNavigation()
  const fun1=()=>{
    nav.navigate(props.screen)

  }
  return (
    <View>
      <TouchableOpacity onPress={fun1}> 
             <Text style ={styles.a}>{props.name}</Text>
      </TouchableOpacity>

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