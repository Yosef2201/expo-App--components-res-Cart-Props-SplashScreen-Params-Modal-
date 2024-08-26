import { useContext } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../app/context/CartContext';

const ModalNew = ({ modalVisible, setModalVisible,item  }) => {
    const [c, setC] = useState(1);
    const { addToCart } = useContext(CartContext);


    const { name, address, phone, description, img,id,price } = item ;
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
            id: id,
            name: name,
            address: address,
            phone: phone,
            description: description,
            price: price,
            img: img,
            c: c, // أضف الكمية المحددة
        };
    
        // إضافة الكائن إلى سلة التسوق
        addToCart(newItem);
        setModalVisible('false')
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Image style={styles.pic} source={img} />
                    <Text>{name}</Text>
                    <Text>{phone}</Text>
                    <Text>{address}</Text>
                    <Text>{description}</Text>
                    <View style={styles.count}>
                        <TouchableOpacity onPress={plus}>
                            <Text style={styles.txt2}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.txt2}>{c}</Text>
                        <TouchableOpacity onPress={minus}>
                            <Text style={styles.txt2}>-</Text>
                        </TouchableOpacity>
                    
    
                    </View>
                    <TouchableOpacity onPress={handleAddToCart} >
<Text style={styles.addToCart}>Add To Cart</Text>

</TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ModalNew;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pic: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    closeText: {
        color: 'blue',
        marginTop: 15,
        fontSize: 18,
    },
    count: {
        flexDirection: 'row',
        borderWidth: 0.6,
        width:100,
        padding:2
        
        },
        addToCart: {
            color: 'blue',
        marginTop: 15,
        fontSize: 18,
        },
        
});
