import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { CartContext } from '../app/context/CartContext';
import { useNavigation } from 'expo-router';
import ModalNew from './ModalNew';

const ComponentCard = ({ props }) => {
    const [c, setC] = useState(1);
    const { addToCart } = useContext(CartContext);
    const Nav =useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

    const plus = () => {
        setC(c + 1);
    };

    const minus = () => {
        if (c > 1) {
            setC(c - 1);
        }
    };
    
    const handleAddToCart = () => {
        // إنشاء كائن جديد يتضمن تفاصيل العنصر والكمية
        const newItem = {
            id: props.id,
            name: props.name,
            address: props.address,
            phone: props.phone,
            description: props.description,
            price: props.price,
            img: props.img,
            c: c, // أضف الكمية المحددة
        };
    
        // إضافة الكائن إلى سلة التسوق
        addToCart(newItem);
    };

    return (
        <View style={styles.container}>
<TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.txt3}>{props.address}</Text>
                <Text style={styles.txt3}>{props.phone}</Text>
                <Text style={styles.txt3}>{props.description}</Text>
                
                <View style={styles.CC}>

                <View style={styles.count}>
                        <TouchableOpacity onPress={plus}>
                            <Text style={styles.txt2}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.txt2}>{c}</Text>
                        <TouchableOpacity onPress={minus}>
                            <Text style={styles.txt2}>-</Text>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.price}>{props.price * c}$</Text>

                    

                    </View>
       
                   
            </TouchableOpacity >
            <View>
                <Image style={styles.image} source={props.img} />
                {/* <Text >Location</Text> */}
                <View >

<TouchableOpacity onPress={handleAddToCart}>
<Text style={styles.addToCart}>Add To Cart</Text>

</TouchableOpacity>
</View>
            </View>
            <ModalNew modalVisible={modalVisible} setModalVisible={setModalVisible} item={props}/>

        </View>
    );
};

export default ComponentCard;

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        // borderBottomWidth: 1,
        padding: 10
    },
    image: {
        width: 140,
        height: 100,
        marginLeft: 11,
        // resizeMode: 'contain',
        // marginTop:20
    },
    name: {
        fontSize: 22,
        textAlign:'center',
        backgroundColor: '#80CBC4', // خلفية دائرية بلون أخضر مريح
        fontWeight: 'bold',
borderRadius:20,
overflow: 'hidden',
width:170,
marginBottom:17,
color:'#FFFFFF'
    },
    txt3: {
        fontSize: 16
    },
    price: {
        backgroundColor: '#90CAF9', // خلفية دائرية بلون أزرق فاتح
        color: 'white',
        padding: 8,
        marginLeft:'auto',
        marginTop:5,
        overflow: 'hidden',
        borderRadius:15

    },
    count: {
        flexDirection: 'row',
        borderWidth: 1,
        marginLeft: 10,
    },
    pp: {
        flexDirection: 'row',
    },
    txt2: {
        fontSize: 22,
        marginHorizontal: 7,
        marginTop:3
    },
    addToCart: {
        marginLeft: 30,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        borderWidth:0.7,
        padding:5,
        backgroundColor: '#FFEB3B', // خلفية دائرية بلون أصفر دافئ
        marginTop:40
    },
    CC:{
        flexDirection:'row',
        marginTop:30,
        
    }
});
