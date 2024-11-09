import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../assets/images/images'

const NewScreen = () => {
  return (
    <View>
        <View style={{height:10}}>
            <Text>fadsf</Text>
            <Image style={{borderRadius:78}} source={images.image3}/>
        </View>
    </View>
  )
}

export default NewScreen

const styles = StyleSheet.create({})