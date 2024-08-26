import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {  useState } from 'react';
import { useNavigation } from 'expo-router';
import ModalNew from './ModalNew';
const ComponentCard = ({ props }) => {
    const Nav =useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container} >
           <Text style={styles.name}>{props.name}</Text>
           <View style={styles.items}>
           <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={{padding:10}}>
                    <Text style={styles.txt3}>{props.address}</Text>
                    <Text style={styles.txt3}>{props.phone}</Text>
                    <Text style={styles.price}>{props.price }$</Text>
                    <Text>Button</Text>             
                </View>
            </TouchableOpacity >
                <Image style={styles.image} source={props.img} />
            </View>
            <ModalNew modalVisible={modalVisible} setModalVisible={setModalVisible} item={props}/>
        </View>
    );
};

export default ComponentCard;

const styles = StyleSheet.create({
    container: { 
        padding: 10,
        flex:1,
        borderLeftWidth:1
    },
    image: {
        width: 130,
        height: 120,
        marginLeft: 11,
    },
    name: {
        fontSize: 20,
        textAlign:'center',
        fontWeight: 'bold',
        borderRadius:20,
        overflow: 'hidden',
        backgroundColor:'black',
        color:'white'
       
        },
    txt3: {
        fontSize:15,
        marginLeft:'auto'

    },
    price: {
        backgroundColor: 'gold', // خلفية دائرية بلون أزرق فاتح
        color: 'white',
        padding: 8,
        // marginLeft:'auto',
        marginTop:5,
        overflow: 'hidden',
        borderRadius:15,
        width:80,
        textAlign:'center',
        marginLeft:'auto'

    },

    pp: {
        flexDirection: 'row',
    },
    txt2: {
        fontSize: 18,
        marginHorizontal:11,
        marginTop:3,
        textAlign:'center'
    },
    
    items:{
        flexDirection:'row',
        padding:10,
        
    }
});
