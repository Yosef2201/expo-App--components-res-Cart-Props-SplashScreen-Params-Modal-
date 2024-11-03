import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import StoreContext from '../context/StoreContext';

const CartScreen = () => {
    const { cart, setCart } = useContext(StoreContext);

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const renderItems = () => {
        if (cart.length === 0) {
            return <Text style={styles.emptyText}>The cart is empty</Text>;
        }
        return cart.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
                <Image style={styles.pic} source={item.img} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price} $</Text>
                    <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                    <Text style={styles.deleteText}>🗑️</Text>
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {renderItems()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f9fc',
    },
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: '#555',
    },
    pic: {
        width: 100,
        height: 100,
        marginRight: 15,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    itemPrice: {
        fontSize: 14,
        color: '#888',
    },
    itemQuantity: {
        fontSize: 14,
        color: '#555',
    },
    deleteText: {
        color: 'red',
        fontSize: 20,
    },
});

export default CartScreen;
