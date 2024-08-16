import { StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import dataM from'../res/dataMenuHeader'
import Card from '../../components/Card'
import Gellary from'../res/dataGellary'
import GellaryComponent from '../../components/GellaryComponent'
import dataicons from '../res/dataicons'
import Icon from '../../components/Icon'
import dataComponentCard from '../res/dataComponentCard'
import ComponentCard from '../../components/ComponentCard'
import { useNavigation } from 'expo-router'
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
      <TouchableOpacity  >
        <Text style={styles.catagoyyName}>{category.name}</Text>
        {category.data.map((item) => (
          <ComponentCard key={item.id} item={item} />
        ))}
      </TouchableOpacity>
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
      <ScrollView horizontal>
      {renderIcons()}

      </ScrollView>
      <TouchableOpacity onPress={goToCart} >
        <Text  style={styles.textCart}>Cart</Text>
      </TouchableOpacity>
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
    marginTop:50
  },
  catagoyyName:{
    textAlign:'center',
    fontSize:30,
    backgroundColor:'black',
    color:'white',
    margin:10

  },
  textCart:{
    fontSize:24,
    textAlign:'center',
borderWidth:2,
margin:30
  }
})