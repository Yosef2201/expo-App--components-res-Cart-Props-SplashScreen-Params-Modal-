import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native';
import StoreContext from '../app/context/StoreContext';

const ModalNew = ({ modalVisible, setModalVisible, item }) => {
    const [quantity, setQuantity] = useState(1);
    const { cart, setCart } = useContext(StoreContext);

    const addToCart = () => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            const newItem = {
                ...item,
                quantity,
            };
            const newCart = [...cart, newItem];
            setCart(newCart);
        }

        setModalVisible(false);
    };

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Image style={styles.pic} source={item.img} />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDetails}>{item.phone}</Text>
                    <Text style={styles.itemDetails}>{item.address}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <View style={styles.count}>
                        <TouchableOpacity onPress={increment}>
                            <Text style={styles.counterButton}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterText}>{quantity}</Text>
                        <TouchableOpacity onPress={decrement}>
                            <Text style={styles.counterButton}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                        <Text style={styles.addToCartText}>Add To Cart</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
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
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    itemDetails: {
        fontSize: 16,
        color: '#555',
        marginBottom: 3,
    },
    itemDescription: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        marginBottom: 10,
    },
    count: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
        width: 120,
        padding: 5,
        alignItems: 'center',
    },
    counterButton: {
        fontSize: 20,
        color: '#007BFF', // Button color
        paddingHorizontal: 10,
    },
    counterText: {
        fontSize: 18,
        marginHorizontal: 10,
        color: '#333',
    },
    addToCartButton: {
        backgroundColor: '#007BFF',
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        width: '100%',
        alignItems: 'center',
    },
    addToCartText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeText: {
        color: '#007BFF',
        marginTop: 15,
        fontSize: 16,
    },
});
