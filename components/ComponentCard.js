import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { CartContext } from '../app/context/CartContext';
import { useNavigation } from 'expo-router';

const ComponentCard = ({ item }) => {
    const [c, setC] = useState(1);
    const { addToCart } = useContext(CartContext);
    const Nav =useNavigation()

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
            id: item.id,
            name: item.name,
            address: item.address,
            phone: item.phone,
            description: item.description,
            price: item.price,
            img: item.img,
            c: c, // أضف الكمية المحددة
        };
    
        // إضافة الكائن إلى سلة التسوق
        addToCart(newItem);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>Nav.navigate('LastScreen',{...item})}>
                <Text style={styles.txt}>{item.name}</Text>
                <Text style={styles.txt3}>{item.address}</Text>
                <Text style={styles.txt3}>{item.phone}</Text>
                <Text style={styles.txt3}>{item.description}</Text>
                <View style={styles.pp}>
                    <Text style={styles.txt4}>{item.price * c}$</Text>
                   
                </View>
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

                        <View >

                        <TouchableOpacity onPress={handleAddToCart}>
                        <Text style={styles.addToCart}>Add To Cart</Text>
                        
                    </TouchableOpacity>
                    </View>

                    </View>

                   
            </TouchableOpacity >
            <View>
                <Image style={styles.image} source={item.img} />
            </View>
        </View>
    );
};

export default ComponentCard;

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 10
    },
    image: {
        width: 120,
        height: 100,
        marginLeft: 25,
        resizeMode: 'contain'
    },
    txt: {
        fontSize: 28
    },
    txt3: {
        fontSize: 16
    },
    txt4: {
        backgroundColor: 'red',
        color: 'white',
        padding: 8,
        marginLeft:'auto',
        marginTop:5
    },
    count: {
        flexDirection: 'row',
        borderWidth: 2,
        marginLeft: 10,
    },
    pp: {
        flexDirection: 'row',
    },
    txt2: {
        fontSize: 25,
        marginHorizontal: 5
    },
    addToCart: {
        marginLeft: 30,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        borderWidth:2,
        padding:5,
        backgroundColor:'yellow'
    },
    CC:{
        flexDirection:'row',
        marginTop:10,
        
    }
});
