import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import ComponentCard from './ComponentCard';
import { useNavigation } from 'expo-router';
import screenNames from '../app/res/screenNames';

const ComponentCardData = ({props}) => {
    const { name, data: items } = props;
    const nav=useNavigation()
const renderItem=()=>{
    return items.map((item)=>(
        <ComponentCard props={item}/>
    ))
}
const goToLastScren=()=>{
  nav.navigate(screenNames.LastScreen)
  
}
  return (
    <View style={styles.FFF}>
      <TouchableOpacity onPress={goToLastScren}>

    <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>

    <ScrollView horizontal >
        {renderItem()}
    </ScrollView>
    </View>
  )
}

export default ComponentCardData

const styles = StyleSheet.create({
  name:{
    color:'gold',
    fontSize:26,
    textAlign:'center',
    padding:1,
    width:'90%',
    alignSelf:'center',
    borderRadius:25,
    overflow:'hidden',
    borderColor:'red',
    borderWidth:0.7,
    margin:30,
    
 },
 
 
})