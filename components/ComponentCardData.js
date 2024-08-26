import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ComponentCard from './ComponentCard';

const ComponentCardData = ({data}) => {
    const { name, data: items } = data;
const renderItem=()=>{
    return items.map((item)=>(
        <ComponentCard props={item}/>
    ))
}
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
        {renderItem()}
    </View>
  )
}

export default ComponentCardData

const styles = StyleSheet.create({
  name:{
    backgroundColor:'black',
    color:'white',
    fontSize:29,
    textAlign:'center',
    padding:10,
    width:'50%',
    alignSelf:'center'
 }
})