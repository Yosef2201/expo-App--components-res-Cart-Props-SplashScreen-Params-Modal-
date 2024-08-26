import { StyleSheet, Text, View,ScrollView ,TouchableOpacity, Pressable} from 'react-native'
import React, { useState } from 'react'
import dataM from'../res/dataMenuHeader'
import Card from '../../components/Card'
import Gellary from'../res/dataGellary'
import GellaryComponent from '../../components/GellaryComponent'
import dataicons from '../res/dataicons'
import Icon from '../../components/Icon'
import dataComponentCard from '../res/dataComponentCard'
import ComponentCard from '../../components/ComponentCard'
import { useNavigation } from 'expo-router'
import ComponentCardData from './../../components/ComponentCardData';
const HomeScreen = () => {

  const Nav=useNavigation()
  const renderDataCard =()=>{
    return dataM.map((item)=>(
<Card  props={item}/>
    ))
  }
  const renderGellary=()=>{
    return Gellary.map((item)=>(
      <GellaryComponent item={item}/>
    ))
  }
  const renderIcons=()=>{
    return dataicons.map((item)=>(
      <Icon item={item}/>
    ))
  }
  const renderComponentCard = () => {
    return dataComponentCard.map((category) => (
      <View  >
        
          <ComponentCardData  data={category} />
 
      </View>
    ));
  };
  const goToCart=()=>{
    Nav.navigate('CartScreen')

  }
 
  return (
    <ScrollView>

    <View style={styles.container}>
      <ScrollView horizontal>
      {renderDataCard()}

      </ScrollView>
      <ScrollView horizontal>
      {renderGellary()}

      </ScrollView>
     
      {/* <TouchableOpacity
      onPress={() => setModalVisible(true)}>
      <Text style={styles.textModal}>Show Modal</Text>
    </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={goToCart} >
        <Text  style={styles.textCart}>Cart</Text>
      </TouchableOpacity> */}
      <ScrollView horizontal>
      {renderIcons()}

      </ScrollView>
      <ScrollView >
      {renderComponentCard()}

      </ScrollView>


    </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    backgroundColor: '#E8F5E9', // خلفية فاتحة للصفحة بشكل عام (أخضر فاتح جداً)

  },
  catagoyyName:{
    textAlign:'center',
    fontSize:30,
    backgroundColor: '#CE93D8', // خلفية دائرية بلون أرجواني فاتح    color:'white',
marginBottom:50,
marginTop:50,
overflow:'hidden',
borderRadius:15,
color:'white'
  },
  textCart:{
    fontSize:24,
    textAlign:'center',
borderWidth:2,
// margin:30
  },
  textModal:{
    backgroundColor:'blue',
    padding:10,
    width:100,
    margin:'auto',
    marginTop:10
  }
})